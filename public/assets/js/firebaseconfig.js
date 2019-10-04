var config = {
  apiKey: "AIzaSyDxCQp7aTXoAlRb2nhW6lZLEEN0ZfAmo0w",
  authDomain: "bucket-besties-51cb3.firebaseapp.com",
  databaseURL: "https://bucket-besties-51cb3.firebaseio.com/",
  storageBucket: "bucket-besties-51cb3.appspot.com",
  projectId: "bucket-besties-51cb3"
}

firebase.initializeApp(config)
var database = firebase.database()
var db = firebase.firestore()
var auth = firebase.auth()

function convertLocation(location) {
  location = addPlus(location)
  var queryURL = "https://maps.googleapis.com/maps/api/geocode/json?address=" + location + "&key=AIzaSyAidckZDfScayrad0X24a9nUStcfP_OvHc"
}



//////////// Log In/Sign In Page ////////////////////////

// Create User
firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});

// Log in Existing User
firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});

firebase.auth().onAuthStateChanged(function (firebaseUser) {
  if (firebaseUser) {
    console.log(firebaseUser)
  } else {
    console.log('not logged in')
  }
})


////////////////// Add to Bucket List ////////////////
