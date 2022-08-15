function addUser() {
    user_name = document.getElementById("user_name").value;
localStorage.setItem("user_name", user_name);
window.location = "kwitter_room.html";
}
// Your web app's Firebase configuration
const firebaseConfig = {
  authDomain: "kwitter-1d7e9.firebaseapp.com",
projectId: "kwitter-1d7e9",
storageBucket: "kwitter-1d7e9.appspot.com",
messagingSenderId: "451939874843",
appId: "1:451939874843:web:7ce5a91deac17344c3e0be",
measurementId: "G-V4PH93WYCC"
};


function addUser()
{
  user_name = document.getElementById("user_name").value;
  firebase.database().ref("/").child(user_name).update({
    purpose : "adding user"
  });
}

//Initialize Firebase
firebase.initializeApp(firebaseConfig);

function getData(){
  firebase.database().ref("/").on("value", function(snapshot) {document.getElementById("output").innerHTML})
  Group_name = childKey;
  //Start code

  //End Code
getData();
}

