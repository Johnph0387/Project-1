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

$('#login-submit').on('click', function(test) {
    var formPassword = $('#password').val();
    var formEmail = $('#username').val();
    
  firebase.auth().signInWithEmailAndPassword(formEmail, formPassword)
  .then(function(confirmationResult) {
       

        console.log("We In????")
        console.log(confirmationResult)


        

         window.location.replace("homepage2.html")
   



    })
  .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    if (errorCode === 'auth/wrong-password') {
    alert('Password or Email Wrong');
  } else if(errorMessage) {
    alert(errorMessage);
  }

  
});
    
})