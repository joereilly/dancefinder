console.log("firebase.js ready to roll")

// connect to the Firebase db (database)

// Initialize Firebase
var config = {
    apiKey: "AIzaSyCtZr3s2NB023qGk1KQwFondulrl0KP6n0",
    authDomain: "myapi-f31f5.firebaseapp.com",
  };
  firebase.initializeApp(config);

// this is the whole database
var database = firebase.database();

//we want to grab only the "track" part of the database
var tracksData = database.ref('track');

// create list of people
var tracksList = []; //empty list, for now

// load all of the children of "people"
// keep listening for new children
tracksData.on('child_added', function(childData){
    // run these instructions for each child 
    console.table(childData.val() );
    var person = childData.val(); // extract data about the person
    tracksList.push(person); // add the person to the people list
    
})

