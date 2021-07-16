import Firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyDMPHuvmEPmIaUv0SbjfQG5OQYh0BNj15o',
  authDomain: 'react-netflix-project.firebaseapp.com',
  projectId: 'react-netflix-project',
  storageBucket: 'react-netflix-project.appspot.com',
  messagingSenderId: '52232091976',
  appId: '1:52232091976:web:96f3f0f6d49f12f7101b7d',
};

const firebase = Firebase.initializeApp(config) as Firebase.app.App;
export { firebase };
// seedDatabase(firebase);
