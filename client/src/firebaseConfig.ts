// client/src/firebaseConfig.ts
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

//yeah this should use some env variables/ secrets
const firebaseConfig = {
  apiKey: 'AIzaSyB6-29Fectv10d0jxP5jJi3ek5FHPWZpm0',
  authDomain: 'restaurant-mgmt-5b05f.firebaseapp.com',
  projectId: 'restaurant-mgmt-5b05f',
  storageBucket: 'restaurant-mgmt-5b05f.appspot.com',
  messagingSenderId: '871895193355',
  appId: '1:871895193355:web:b963e82adb3cf7bdf6340e',
  measurementId: 'G-JFY27EBCTT',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
