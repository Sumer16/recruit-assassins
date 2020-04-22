function openSideMenu(){
  document.getElementById('side-menu').style.width = '250px';
  document.getElementById('banner').style.marginLeft = '250px';
}

function closeSideMenu(){
  document.getElementById('side-menu').style.width = '0';
  document.getElementById('banner').style.marginLeft = '0';
}

// Initialize Firebase
var firebaseConfig = {
  apiKey: "AIzaSyDZDcda8x1tyn124uC93HnOBMU1WkfQqyo",
  authDomain: "assassin-contact.firebaseapp.com",
  databaseURL: "https://assassin-contact.firebaseio.com",
  projectId: "assassin-contact",
  storageBucket: "assassin-contact.appspot.com",
  messagingSenderId: "299103747669",
  appId: "1:299103747669:web:ace7556421e0c7e1db9edc"
};
firebase.initializeApp(firebaseConfig);

const messagesRefer = firebase.database().ref('messages');

document.getElementById('assassinsForm').addEventListener('submit', submitForm);

// Submit Form
function submitForm(e){
  e.preventDefault();

  const name = getInputVal('name');
  const email = getInputVal('email');
  const message = getInputVal('message');

  saveMessage(name, email, message);

  // Show Alert Message
  document.querySelector('.alert').style.display = 'block';
  // Hide Alert after 3s
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  }, 2000);
  // Clear Form
  document.getElementById('assassinsForm').reset();
}

function getInputVal(id){
  return document.getElementById(id).value;
}

// Save Message to FireBase
function saveMessage(name, email, message){
  const newMessageRef = messagesRefer.push();
  newMessageRef.set({
    name: name,
    email: email,
    message: message
  });
}