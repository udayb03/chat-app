import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "chat-app-6cc99.firebaseapp.com",
  projectId: "chat-app-6cc99",
  storageBucket: "chat-app-6cc99.appspot.com",
  messagingSenderId: "499371019593",
  appId: "1:499371019593:web:54301862dd02d46f825e98"
};

export const app = initializeApp(firebaseConfig);