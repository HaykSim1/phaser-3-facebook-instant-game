import Phaser from "phaser";

import Start from './Scenes/Start';

import logoImg from "./assets/logo.png";
import roadImg from "./assets/background.png";
import playerImg from "./assets/player.png";

const config = {
  type: Phaser.AUTO,
  parent: "phaser-example",
  width: 600,
  height: 900,
  scene: [Start]
};

const game = new Phaser.Game(config);
