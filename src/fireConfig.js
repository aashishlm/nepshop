import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
	apiKey: 'AIzaSyB2Xo76WHH6w9mbgCRUbVq1DhGwr3RhhDw',
	authDomain: 'nepshop-db479.firebaseapp.com',
	projectId: 'nepshop-db479',
	storageBucket: 'nepshop-db479.appspot.com',
	messagingSenderId: '1018311823915',
	appId: '1:1018311823915:web:c1e907b18c4a86bec9106e',
	measurementId: 'G-WGQQ5R48R9',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
export { fireDB };
