import firebase from 'firebase';
import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firebase-firestore';

const config = {
    apiKey: 'AIzaSyA3gvSgIus_jB2zCCEk1qysTsSgAEpXov0',
    authDomain: 'crazy-racer-d9019.firebaseapp.com',
    databaseURL: 'https://crazy-racer-d9019.firebaseio.com',
    projectId: 'crazy-racer-d9019',
    storageBucket: '',
    messagingSenderId: '831645276868'
};

class FirebaseService {
    constructor() {
        app.initializeApp(config);

        this.db = firebase.database();
        this.id = Math.round(Math.random() * 1000 + 1);
    }

    init() {

        const refToRound = this.db.ref('round/' + this.id);
        refToRound.set({
            _id: this.id,
            playerCount: 2,
            moves: {
                me: { x: 10 },
                enemy: {x: 100}
            }
        });
    }

    subscribe() {
        return new Promise((resolve => {
            this.db.ref('/round/' + this.id).on('value', function (snapshot) {
                resolve(snapshot);
            });
        }))
    }

    update(data) {
        this.db.ref('/round/' + this.id).update(data);
    }
}

export default FirebaseService;
