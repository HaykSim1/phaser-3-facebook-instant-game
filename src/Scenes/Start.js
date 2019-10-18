import Phaser from 'phaser';

import roadImg from '../assets/background.png';
import playerImage from '../assets/player.png';

export default class Start extends Phaser.Scene {
    constructor(props) {
        super({
            ...props,
            physics: {
                default: 'arcade',
                arcade: {
                    gravity: { y: 300 },
                    debug: true
                }
            },
        });
    }

    preload () {
        this.load.image("road", roadImg);
        this.load.image("player", playerImage);
    }

    create () {
        this.road = this.add.tileSprite(300, 450, 600, 900, "road");
        this.road.setTileScale(0.47, 0.47);

        this.player = this.physics.add.sprite(300, 450, 'player');

        this.player.setBounce(0.2);
        this.player.setCollideWorldBounds(true);

        this.anims.create({
            key: 'left',
            frames: [ { key: 'player', frame: 1 } ],
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'turn',
            frames: [ { key: 'player', frame: 1 } ],
            frameRate: 20
        });

        this.anims.create({
            key: 'right',
            frames: [ { key: 'player', frame: 1 } ],
            frameRate: 10,
            repeat: -1
        });
    }

    update (time, delta) {
        this.road.tilePositionY += 12;

        this.cursors = this.input.keyboard.createCursorKeys();

        if (this.cursors.left.isDown)
        {
            this.player.setVelocityX(-160);

            this.player.anims.play('left', true);
        }
        else if (this.cursors.right.isDown)
        {
            this.player.setVelocityX(160);

            this.player.anims.play('right', true);
        }
        else
        {
            this.player.setVelocityX(0);

            this.player.anims.play('turn');
        }

        if (this.cursors.up.isDown && this.player.body.touching.down)
        {
            this.player.setVelocityY(-330);
        }
    }
}
