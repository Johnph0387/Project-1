$( document ).ready(function() {
    console.log( "ready!" );
});

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAFLA3-24DR2pQJS1d-tFc7rBC7akwtMV0",
    authDomain: "websitecontacts-37858.firebaseapp.com",
    databaseURL: "https://websitecontacts-37858.firebaseio.com",
    projectId: "websitecontacts-37858",
    storageBucket: "websitecontacts-37858.appspot.com",
    messagingSenderId: "150585082071"
  };
  firebase.initializeApp(config);

var database = firebase.database();


var name ;
var num ;
var email ;

$(".button").on("click", function () {

  name = $("#name").val();
  console.log(name)

  num = $("#PhoneNumber").val();
  console.log(num)

  email = $("#email").val();
  console.log(email)

  database.ref().push({

  First_Name: name,
  Email: email,
  Number: num
  });
});

  database.ref().on("child_added", function(snapshot){

    console.log(snapshot.val())

    var Name = (snapshot.val().First_Name)
    var Email = (snapshot.val().Email)
    var Num = (snapshot.val().Number)

    console.log(Name)
    console.log(Email)
    console.log(Num)

    $(".table1").after( "<tr>" + "<td>" + Name + "</td>" + "<td>" + Num + "</td>" +  "<td>" + Email + "</td>" +  "</tr>" );

    });
