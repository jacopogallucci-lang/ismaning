import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { createWorld } from '../.test-build/world.js';

describe('V0 world foundation', () => {
  it('creates the confirmed flat 64 × 64 map', () => {
    const world = createWorld();
    assert.deepEqual([world.width, world.height], [64, 64]);
    assert.equal(world.terrain.length, 4096);
    assert.ok(world.terrain.every(tile => tile === 'grass'));
  });

  it('gives each new game independent world storage', () => {
    assert.notEqual(createWorld().terrain, createWorld().terrain);
  });
});
