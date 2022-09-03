const firebaseConfig = {
    apiKey: "AIzaSyA6YAmp_cr8PdS3_58796TayiHxE4kWmH0",
    authDomain: "settings-458c1.firebaseapp.com",
    databaseURL: "https://settings-458c1-default-rtdb.firebaseio.com",
    projectId: "settings-458c1",
    storageBucket: "settings-458c1.appspot.com",
    messagingSenderId: "1090666531149",
    appId: "1:1090666531149:web:63d20cd3d021ce72bd0f04"
  };
fetchChat.on("child_added", function (snapshot) {
  const messages = snapshot.val();
  const message = `<li class=${
    username === messages.username ? "sent" : "receive"
  }><span>${messages.username}: </span>${messages.message}</li>`;
  // append the message on the page
  document.getElementById("messages").innerHTML += message;
});
