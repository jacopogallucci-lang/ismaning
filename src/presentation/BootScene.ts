import Phaser from 'phaser';
import { createWorld } from '../simulation/world';

export class BootScene extends Phaser.Scene {
  constructor() { super('BootScene'); }

  create(): void {
    const world = createWorld();
    const tileSize = 12;
    const terrain = this.add.graphics();
    for (let y = 0; y < world.height; y++) {
      for (let x = 0; x < world.width; x++) {
        terrain.fillStyle((x + y) % 2 === 0 ? 0x587949 : 0x557546);
        terrain.fillRect(x * tileSize, y * tileSize, tileSize, tileSize);
      }
    }
    terrain.lineStyle(2, 0xd4bb78);
    terrain.strokeRect(0, 0, world.width * tileSize, world.height * tileSize);
    const centerView = (): void => {
      const camera = this.cameras.main;
      camera.setZoom(Math.min(this.scale.width, this.scale.height) / (world.width * tileSize + 48));
      camera.centerOn(world.width * tileSize / 2, world.height * tileSize / 2);
    };
    centerView();
    this.scale.on('resize', centerView);
    const button = document.querySelector<HTMLButtonElement>('#reset-view');
    button?.addEventListener('click', centerView);
    this.events.once('shutdown', () => {
      this.scale.off('resize', centerView);
      button?.removeEventListener('click', centerView);
    });
  }
}
