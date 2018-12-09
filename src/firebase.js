import firebase from "firebase";
const config = {
  apiKey: "AIzaSyAWhSZ6lLMlh7-MOqSi53dd5PnrhX9V9ro",
  authDomain: "climate-resolve.firebaseapp.com",
  databaseURL: "https://climate-resolve.firebaseio.com",
  projectId: "climate-resolve",
  storageBucket: "climate-resolve.appspot.com",
  messagingSenderId: "705749874086"
};
firebase.initializeApp(config);
export default firebase;
