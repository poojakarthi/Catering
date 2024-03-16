const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const Password = document.getElementById("Password");
const Password2 = document.getElementById("Password2");
var x = document.getElementById("submit");

String.prototype.isEmail = function () {
  return !!this.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/);
};

String.prototype.isAlpha = function () {
  return !!this.match(/^[a-zA-Z]*$/);
};

function checkRequired(inputs) {
  inputs.forEach((input) => {
    if (input.value.trim() === "") {
      //error
      errorInput(input, `${getName(input)} is Required `);
    } else {
      //success
      successInput(input);
    }
  });
}
function getName(input) {
  // return input.id;
  return input.getAttribute("data-name");
}

function errorInput(input, message) {
  const formBox = input.parentElement;
  formBox.className = "form-box error";
  const p = formBox.querySelector("p");
  p.innerHTML = message;
}
function successInput(input) {
  const formBox = input.parentElement;
  formBox.className = "form-box success";
  const p = formBox.querySelector("p");
  p.innerHTML = "";
}

function checkLength(input, min) {
  const data = input.value.trim().length;
  if (data == 0) {
    errorInput(input, `${getName(input)} is Required`);
  }
  if (data < min) {
    errorInput(
      input,
      `${getName(input)} must be atleast greater than 
      ${min} characters`
    );
  // } else if (data > max) {
  //   errorInput(
  //     input,
  //     `${getName(input)} must be atleast lesser than 
  //     ${max} characters`
  //   );
  } else {
    successInput(input);
  }
}

function checkConfirmPassword(Password, Password2) {
  if (Password.value != Password2.value) {
    errorInput(Password2, `${getName(Password2)} does not match`);
  }
}

function checkEmail(input) {
  if (!input.value.trim().isEmail()) {
    errorInput(input, `This is not a valid email address`);
  }
}
function checkAlpha(input) {
  if (!input.value.trim().isAlpha()) {
    errorInput(input, `${getName(input)} Must be Alphabets`);
  }
}

function myForm(x) {
  if (
    username.value === ''|| email.value ==='' || Password.value === '' ||Password2.value ==='') 
  {
    alert("Need to fill all the Fields");
  } 
  else if(Password.value===Password2.value)
   {
    alert("successfully sign in");
  }
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  checkRequired([username, email, Password, Password2]);
  checkLength(username, 5, 0);
  checkLength(Password, 4, 8, 0);
  checkConfirmPassword(Password, Password2, 4, 4);
  checkEmail(email);
  checkAlpha(username);
  myForm(x);
});
// password

//
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import {
  getDatabase,
  ref,
  set,
  get,
  child,
} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAChRdKHYRgFk8tz5RCmSJyoFzJE928u28",
  authDomain: "form-6c85c.firebaseapp.com",
  projectId: "form-6c85c",
  storageBucket: "form-6c85c.appspot.com",
  messagingSenderId: "838929800351",
  appId: "1:838929800351:web:7834d83cda17fbd5be56aa",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getDatabase(app);
document.getElementById("submit").addEventListener("click", function (e) {
  // e.preventDefault();
  set(ref(db, "user/" + document.getElementById("username").value), {
    Username: document.getElementById("username").value,
    Email: document.getElementById("email").value,
    Password: document.getElementById("Password").value,
    Confirmpassword: document.getElementById("Password2").value,
  });
  // form.submit();
  //   alert("sigin successfully");
});
