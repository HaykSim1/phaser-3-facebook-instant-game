import Phaser from "phaser";

import Start from './Scenes/Start';
import Preloader from './Scenes/Preloader';

FBInstant.initializeAsync().then(function() {

  const config = {
    type: Phaser.AUTO,
    parent: "phaser-example",
    width: 600,
    height: 900,
    scene: [Preloader, Start]
  };
  new Phaser.Game(config);
  // FBInstant.startGameAsync().then(() => {
  //   FBInstant.setLoadingProgress(100);
  //
  // })
}).catch(console.log);
