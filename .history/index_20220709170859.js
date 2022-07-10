function loadAdmin() {
    document.getElementById("header1").style.visibility="hidden";
}
var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}

    // Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-app.js";
    import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-analytics.js";
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries
  
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
      apiKey: "AIzaSyAb46T6Htsp0_VkTugv9a8DA2vzTQZ7ogk",
      authDomain: "vocabulary-game-589f7.firebaseapp.com",
      projectId: "vocabulary-game-589f7",
      storageBucket: "vocabulary-game-589f7.appspot.com",
      messagingSenderId: "569712911298",
      appId: "1:569712911298:web:a2909d5050b47448a5ac5b",
      measurementId: "G-1L23PJLGEE"
    };
  
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);

  document.querySelector('#buttons')
  .addEventListener('click', event => {
    let target = event.target;
    if (target.matches('button')) {
      let value = target.innerHTML
      
      document.querySelector('#output').value += value
    }
  });