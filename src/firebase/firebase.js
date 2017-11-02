import * as firebase from 'firebase';
import expenses from '../tests/fixtures/expenses';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const twitterAuthProvider = new firebase.auth.TwitterAuthProvider();

export{ firebase, googleAuthProvider, twitterAuthProvider, database as default };

// database.ref('expenses').on('value', (snapshot) => {
//     console.log(snapshot.val());
//     const fetchedExpenses = [];
//     snapshot.forEach((item) => {
//         fetchedExpenses.push({
//             id: item.key,
//             ...item.val()
//         });
//     });
//     console.log(fetchedExpenses);
// });

// expenses.forEach( (item)=>  {
//     database.ref('expenses').push(item)
// });

// const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// });

// setTimeout(() => {
//     database.ref('age').set(60);
// }, 3000)

// setTimeout(() => {
//     database.ref().off();
// }, 6000)

// setTimeout(() => {
//     database.ref('age').set(62);
// }, 9000)

// database.ref('location').once('value')
//     .then((snapshot) => {
//         console.log(snapshot.val());
//     })
//     .catch((error) => {
//         console.log('Error fetching data', error)
//     });

// database.ref().set({
//     name: 'Bruno Wozniak',
//     age: 47,
//     isSingle: true,
//     location: {
//         country: 'Luxembourg',
//         city: 'Betzdorf'
//     }
// }).then(() => {
//     console.log('Create Success');
// }).catch((error) => {
//     console.log(`Create Error : ${error}`);
// });

// database.ref().update({
//     name: 'Johnny Begood',
//     age: 52,
//     job: 'Clown',
//     isSingle: null,
//     'location/city': 'Echternach'
// }).then(() => {
//     console.log('Update Success');
// }).catch((error) => {
//     console.log(`Update Error : ${error}`);
// });

// database.ref('isSingle').remove()
//     .then(() => {
//         console.log('Remove Success');
//     }).catch(() => {
//         console.log('Remove Error : ', error);
//     });