import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAI0lhLuTIm3hhC1MNVOmv1Wc-_VLVsKMw',
  authDomain: 'chat-project-a6dc2.firebaseapp.com',
  projectId: 'chat-project-a6dc2',
  storageBucket: 'chat-project-a6dc2.appspot.com',
  messagingSenderId: '404756066575',
  appId: '1:404756066575:web:85fe6181ea11331d010e7a',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
