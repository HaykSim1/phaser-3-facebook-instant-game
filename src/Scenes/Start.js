import Phaser from 'phaser';

import FirebaseService from '../services/firebase';

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

        this.socket = new FirebaseService();
    }

    preload () {
        this.socket.init();
        this.load.image("road", roadImg);
        this.load.image("player", playerImage);
    }

    create () {
        this.road = this.add.tileSprite(300, 450, 600, 900, "road");
        this.road.setTileScale(0.47, 0.47);

        this.player = this.physics.add.sprite(300, 450, 'player');

        this.player.setBounce(0.2);
        this.player.setCollideWorldBounds(true);
    }

    update (time, delta) {
        this.road.tilePositionY += 12;
        this.cursors = this.input.keyboard.createCursorKeys();

        this.socket.subscribe().then((snapshot) => {
            const data = snapshot.val();
            this.player.setX(data.moves.me.x);

            if (this.cursors.left.isDown)
            {
                const newData = {...data, moves: { ...data.moves, me: { x: data.moves.me.x-10}}};
                this.socket.update(newData);
                //this.player.setVelocityX(-160);
                //this.player.anims.play('left', true);
            }
            else if (this.cursors.right.isDown)
            {
                const newData = {...data, moves: { ...data.moves, me: { x: data.moves.me.x+10}}};
                this.socket.update(newData);
                //this.player.setVelocityX(160);
                //this.player.anims.play('right', true);
            }
        });
    }
}
