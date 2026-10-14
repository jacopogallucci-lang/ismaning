import { readdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';
import ts from 'typescript';

// Lightweight source rules, without another dependency tree.
const errors = [];
async function lintDirectory(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) {
      await lintDirectory(path);
    } else if (path.endsWith('.ts')) {
      const source = ts.createSourceFile(path, await readFile(path, 'utf8'), ts.ScriptTarget.Latest, true);
      function visit(node) {
        const fail = message => {
          const position = source.getLineAndCharacterOfPosition(node.getStart(source));
          errors.push(`${path}:${position.line + 1}: ${message}`);
        };
        if (node.kind === ts.SyntaxKind.DebuggerStatement) fail('Remove debugger statements.');
        if (node.kind === ts.SyntaxKind.AnyKeyword) fail('Use a specific type instead of any.');
        if (ts.isCallExpression(node) && ts.isIdentifier(node.expression) && node.expression.text === 'eval') {
          fail('Dynamic eval is forbidden.');
        }
        if (path.startsWith(join('src', 'simulation'))) {
          if (ts.isImportDeclaration(node) && ts.isStringLiteral(node.moduleSpecifier)) {
            const name = node.moduleSpecifier.text;
            if (name === 'phaser' || name.includes('presentation')) fail('Simulation must remain independent of presentation.');
          }
          if (ts.isIdentifier(node) && ['window', 'document', 'localStorage', 'indexedDB'].includes(node.text)) {
            fail('Browser APIs belong in an adapter, outside simulation.');
          }
        }
        ts.forEachChild(node, visit);
      }
      visit(source);
    }
  }
}
await lintDirectory('src');
if (errors.length) {
  console.error(errors.join('\n'));
  process.exitCode = 1;
} else {
  console.log('Source lint passed: specific types, no debugger/eval, independent simulation.');
}
