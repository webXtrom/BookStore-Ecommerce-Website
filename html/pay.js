

window.onload=function(){
    render()
}

const firebaseConfig = {
  apiKey: "AIzaSyAuuNvQlbZYl3kyo_eGvq8IFX_ROVMnyag",
  authDomain: "fire9db-f2e9d.firebaseapp.com",
  databaseURL: "https://fire9db-f2e9d-default-rtdb.firebaseio.com",
  projectId: "fire9db-f2e9d",
  storageBucket: "fire9db-f2e9d.appspot.com",
  messagingSenderId: "513706963750",
  appId: "1:513706963750:web:df1b5b51fb3b5d715487e7",
  measurementId: "G-N6QQBNCFZB"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database();
const auth = firebase.auth();

function render(){
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
    recaptchaVerifier.render();
        
}
function sendOtp() {
    const phnmbr = document.getElementById('phn').value;
    const mbl = "+88"+phnmbr;
    if(mbl.length<11){
        window.alert("Enter correct phone number.");
    }
    else{
    firebase.auth().signInWithPhoneNumber(phnmbr, window.recaptchaVerifier).then(function (confirmResult) {
     Window.confirmResult=confirmResult;
     coderesult = confirmResult;
     console.log(coderesult);
    var a = document.getElementById("frst");
    a.remove();
    document.getElementById("2nd").style.visibility="visible";
    })
    .catch(function (error) {
        alert(error.message);
    });
}
}
function verifyOTP(){
    const otpInp = document.getElementById('verifycode').value;
    coderesult.confirm(otpInp).then(function(result){
     const user = result.user;
     window.location.replace("payment3.html");
    })  
    .catch(function (error) {
       document.getElementById("errorotp").innerHTML = error.message;
    });
}