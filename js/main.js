// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBrE3U45OwbEFMpWqjGJHVDfzknWIKx6CA",
    authDomain: "contactform-fc94a.firebaseapp.com",
    databaseURL: "https://contactform-fc94a.firebaseio.com",
    projectId: "contactform-fc94a",
    storageBucket: "contactform-fc94a.appspot.com",
    messagingSenderId: "182776329774",
    appId: "1:182776329774:web:3d19c00b1ac1adc9dad1bf",
    measurementId: "G-V6XJH68ZKX"
  };
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  
 // Reference messages collection
  var messagesRef = firebase.database().ref('messages');

// listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit Form
function submitForm(e){
  e.preventDefault();

//Get values
var firstName = getInputVal('firstName');
var lastName = getInputVal('lastName');
var email = getInputVal('email'); 
var message = getInputVal('message');
 
// save message
saveMessage(firstName, lastName, email, message);
}

//function to get form values
function getInputVal(id){
	return document.getElementById(id).value;
}

//save message to firebase
function saveMessage(firstName, lastName, email, message){
	var newMessageRef = messagesRef.push();
	newMessageRef.set({
		firstName:firstName,
		lastName:lastName,
		email:email,
		message:message
	});
}
