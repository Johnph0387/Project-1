  // Initialize Firebase
  var config = {
    
    apiKey: "AIzaSyAjK-6UM8BKfrOPFCdxJhFF944-hy-a-mI",
    authDomain: "log-in-5d20f.firebaseapp.com",
    databaseURL: "https://log-in-5d20f.firebaseio.com",
    projectId: "log-in-5d20f",
    storageBucket: "log-in-5d20f.appspot.com",
    messagingSenderId: "711388906132"
  };
  firebase.initializeApp(config);


  var database = firebase.database();
  var First ;
  var Last ;
  var Email ;
  var password ;

$("#submit").on("click", function(){
event.preventDefault()
  First = $("#first_name").val().trim();
  Last = $("#last_name").val().trim();
  Email = $("#email").val().trim();
  password = $("#password").val().trim();

  database.ref().push({

    First_Name: First,
    Last_Name: Last,
    Email: Email,
    Password: password

  });
firebase.auth().createUserWithEmailAndPassword(Email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    if (errorCode) {
      console.log(errorCode);
    }
  else{

  }

  });
  });