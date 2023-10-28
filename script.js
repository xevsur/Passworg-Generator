let slider = document.querySelector(".slider");
let range = document.querySelector(".sliderPoint");
let copy = document.querySelector(".copied");
let password = document.querySelector(".passwordCont");
let passwordCopy = password.textContent;
const check = document.querySelectorAll('input[type="checkbox"]');
let strengthBar1 = document.querySelector(".bar1");
let strengthBar2 = document.querySelector(".bar2");
let strengthBar3 = document.querySelector(".bar3");
let strengthBar4 = document.querySelector(".bar4");
let strengthTxt = document.querySelector(".strengthtext");




function generate() {
    var passLength = document.getElementById("passLength").value;
  
   
    var includeUpper = document.getElementById("upperCheckbox").checked;
    var includeLower = document.querySelector(".checkLower").checked;
    var includeNums = document.querySelector(".checkNums").checked;
    var includeSymbols = document.querySelector(".checkSymbol").checked;
    
    if (!includeUpper && !includeLower && !includeNums && !includeSymbols) {
        document.querySelector(".passwordCont").textContent = "Choose from Options";
        return;
      }

    if (passLength == 0) {
        document.querySelector(".passwordCont").textContent = "Choose character length";
        return;
      }

    var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowerChars = "abcdefghijklmnopqrstuvwxyz";
    var numChars = "0123456789";
    var symbolChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

    var charSet = "";
    if (includeUpper) {
      charSet += upperChars;
    }
    if (includeLower) {
      charSet += lowerChars;
    }
    if (includeNums) {
      charSet += numChars;
    }
    if (includeSymbols) {
      charSet += symbolChars;
    }
  
   
   
    var password = "";
    for (var i = 0; i < passLength; i++) {
      var randomIndex = Math.floor(Math.random() * charSet.length);
      password += charSet[randomIndex];
    }
   

    document.querySelector(".passwordCont").textContent = password;
   

    var strength = calculatePasswordStrength(password);

    var length = password.length;
  if (length > 0)
    {if (strength < 25) {
    strengthBar1.style.backgroundColor = "#F64A4A";
    strengthBar1.style.border = "2px solid #F64A4A";
    strengthBar2.style.backgroundColor = "#18171F";
    strengthBar2.style.border = "2px solid #E6E5EA";
    strengthBar3.style.backgroundColor = "#18171F";
    strengthBar3.style.border = "2px solid #E6E5EA";
    strengthBar4.style.backgroundColor = "#18171F";
    strengthBar4.style.border = "2px solid #E6E5EA";
  } else if (strength < 50) {
    strengthBar1.style.backgroundColor = "#FB7C58";
    strengthBar1.style.border = "2px solid #FB7C58";
    strengthBar2.style.backgroundColor = "#FB7C58";
    strengthBar2.style.border = "2px solid #FB7C58";
    strengthBar3.style.backgroundColor = "#18171F";
    strengthBar3.style.border = "2px solid #E6E5EA";
    strengthBar4.style.backgroundColor = "#18171F";
    strengthBar4.style.border = "2px solid #E6E5EA";
  } else if (strength < 75) {
    strengthBar1.style.backgroundColor = "#F8CD65";
    strengthBar1.style.border = "2px solid #F8CD65";
    strengthBar2.style.backgroundColor = "#F8CD65";
    strengthBar2.style.border = "2px solid #F8CD65";
    strengthBar3.style.backgroundColor = "#F8CD65";
    strengthBar3.style.border = "2px solid #F8CD65";
    strengthBar4.style.backgroundColor = "#18171F";
    strengthBar4.style.border = "2px solid #E6E5EA";
  } else {
    strengthBar1.style.backgroundColor = "#A4FFAF";
    strengthBar1.style.border = "2px solid #A4FFAF";
    strengthBar2.style.backgroundColor = "#A4FFAF";
    strengthBar2.style.border = "2px solid #A4FFAF";
    strengthBar3.style.backgroundColor = "#A4FFAF";
    strengthBar3.style.border = "2px solid #A4FFAF";
    strengthBar4.style.backgroundColor = "#A4FFAF";
    strengthBar4.style.border = "2px solid #A4FFAF";
  };

  
  if (strength < 25) {
    strengthTxt.textContent = "Weak";
  } else if (strength < 50) {
    strengthTxt.textContent = "Moderate";
  } else if (strength < 75) {
    strengthTxt.textContent = "Strong";
  } else if (strength > 75){
    strengthTxt.textContent = "Very Strong";
  }else{
    strengthTxt.textContent = "";
  }

};

  

};

slider.addEventListener("input", function() {
    range.textContent = this.value;
  });
      function calculatePasswordStrength(password) {
      var strength = 0;
      var length = password.length;
      var upperCase = /[A-Z]/g;
      var lowerCase = /[a-z]/g;
      var numbers = /[0-9]/g;
      var symbols = /[!@#$%^&*()_+~`|}{[\]:;?><,./-=]/g;
  
      if (length >= 8) {
          strength += 25;
      }
      if (password.match(upperCase)) {
          strength += 25;
      }
      if (password.match(lowerCase)) {
          strength += 25;
      }
      if (password.match(numbers)) {
          strength += 25;
      }
      if (password.match(symbols)) {
          strength += 25;
      }
      if(length < 8){
        strength -= 25;
      }
      if(length < 3){
        strength -= 50;
      }
      return strength;
      
      }
 
 
      function copied() {
        if (document.querySelector(".passwordCont").textContent !== "Choose from Options" && document.querySelector(".passwordCont").textContent != "Choose character length"){
            copy.style.display = "flex";
            navigator.clipboard.writeText(password.textContent);
            setTimeout(function() {
            copy.style.display = "none";
          }, 2000);}
      }