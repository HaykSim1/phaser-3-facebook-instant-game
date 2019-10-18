import Phaser from "phaser";

import Start from './Scenes/Start';

const config = {
  type: Phaser.AUTO,
  parent: "phaser-example",
  width: 600,
  height: 900,
  scene: [Start]
};

const game = new Phaser.Game(config);
