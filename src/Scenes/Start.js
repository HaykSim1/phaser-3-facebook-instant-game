import Phaser from 'phaser';

import FirebaseService from '../services/firebase';

export default class Start extends Phaser.Scene {
    constructor(props) {
        super({
            ...props,
            key: 'Start',
            physics: {
                default: 'arcade',
                arcade: {
                    debug: true
                }
            },
        });

        this.socket = new FirebaseService();
    }

    preload () {
        this.socket.init();
    }

    create () {
        this.road = this.add.tileSprite(300, 450, 600, 900, "road");
        this.road.setTileScale(0.47, 0.47);


        this.player = this.physics.add.sprite(300, 900, 'player');
        this.player.setDisplaySize(70, 150);

        this.player.setCollideWorldBounds(true);
    }

    update (time, delta) {
        this.road.tilePositionY -= 12;
        this.cursors = this.input.keyboard.createCursorKeys();

        this.socket.subscribe().then((snapshot) => {
            const data = snapshot.val();
            this.player.setX(data.moves.me.x);

            if (this.cursors.left.isDown)
            {
                if(data.moves.me.x - 10 >= 0) {
                    const newData = {...data, moves: { ...data.moves, me: { x: data.moves.me.x-10}}};
                    this.socket.update(newData);
                }
            }
            else if (this.cursors.right.isDown)
            {
                if(data.moves.me.x + 10 <= 600) {
                    const newData = {...data, moves: { ...data.moves, me: { x: data.moves.me.x+10}}};
                    this.socket.update(newData);
                }
            }
        });
    }
}
