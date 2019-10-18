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

        //this.db = app.database();
    }
}

export default FirebaseService;
