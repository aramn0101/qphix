const firebaseConfig = {
  apiKey: "AIzaSyBjoOgVcuBxqIJLWl_Rgp9y8woxIGf8jjQ",
  authDomain: "phoneotp-1ae30.firebaseapp.com",
  projectId: "phoneotp-1ae30",
  storageBucket: "phoneotp-1ae30.appspot.com",
  messagingSenderId: "260001980169",
  appId: "1:260001980169:web:b84a13bb833e7523a93dd8",
  measurementId: "G-J32LV9Z4VZ",
};

firebase.initializeApp(firebaseConfig);

var capta = false;
render();

function render() {
  window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
    "recaptcha-container",
    {
      size: "invisible",
      callback: (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.\
        capta = true;
      },
    }
  );
  recaptchaVerifier.render();
}

function phoneAuth() {
  var number = document.getElementById("number").value;
  firebase
    .auth()
    .signInWithPhoneNumber(number, window.recaptchaVerifier)
    .then(function (confirmationResult) {
      window.confirmationResult = confirmationResult;
      document.getElementById("sender").style.display = "none";
      document.getElementById("verifier").style.display = "block";
    })
    .catch(function (error) {
      alert(error.message);
    });
}

function codeverify() {
  var code = document.getElementById("verficationcode").value;
  coderesult
    .confirm(code)
    .then(function () {
      document.getElementsByClassName("p-conf")[0].style.display = "block";
      document.getElementsByClassName("n-conf")[0].style.display = "none";
    })
    .catch(function () {
      document.getElementsByClassName("p-conf")[0].style.display = "none";
      document.getElementsByClassName("n-conf")[0].style.display = "block";
    });
}
