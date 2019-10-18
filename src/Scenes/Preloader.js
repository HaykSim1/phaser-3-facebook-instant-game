import Phaser from 'phaser';

import playerImg from '../assets/player.png';
import backgroundImg from '../assets/background.png';

export default class Preloader extends Phaser.Scene {

    constructor (props)
    {
        super({...props, key: 'preloader', active: true});
    }

    preload ()
    {
        this.facebook.once('startgame', this.startGame, this);
        this.facebook.showLoadProgress(this);

        this.load.image('player', playerImg);
        this.load.image('road', backgroundImg);
    }

    startGame ()
    {
        this.scene.start('Start');
    }
}
