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
let strengthTxt = document.querySelector(".strengthText");

slider.addEventListener("input", function () {
    value = (slider.value / slider.max) * 20;
    range.innerHTML = value;
    slider.style.background =
      "linear-gradient(to right, #A4FFAF 0%, #A4FFAF " +
      value * 5 +
      "%, #18171F " +
      value * 5 +
      "%, #18171F 100%)";
    console.log(value);
  });

  function copied() {
    copy.style.display = "flex";
    let textToCopy = password.textContent;
    let textarea = document.createElement("textarea");
    textarea.value = textToCopy;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
  }

  function generate() {
    let checkNum = 0;
    copy.style.display = "none";
  
    check.forEach(function (checkbox) {
      if (checkbox.checked) {
        checkNum++;
      }
    });

    check.forEach(function (box) {
      box.addEventListener('change', function () {
        let value = document.getElementById('passLength').value;
        if (value > 0) {
          randomPass(value);
        }
      });
    });

    if (checkNum == 0 || slider.value < 1) {
      strengthTxt.textContent = "";
      strengthBar1.style.backgroundColor = "#18171F";
      strengthBar1.style.border = "2px solid #E6E5EA";
      strengthBar2.style.backgroundColor = "#18171F";
      strengthBar2.style.border = "2px solid #E6E5EA";
      strengthBar3.style.backgroundColor = "#18171F";
      strengthBar3.style.border = "2px solid #E6E5EA";
      strengthBar4.style.backgroundColor = "#18171F";
      strengthBar4.style.border = "2px solid #E6E5EA";
    } else if (checkNum == 1 && value >= 1) {
      strengthTxt.textContent = "TOO WEAK!";
      strengthBar1.style.backgroundColor = "#F64A4A";
      strengthBar1.style.border = "2px solid #F64A4A";
      strengthBar2.style.backgroundColor = "#18171F";
      strengthBar2.style.border = "2px solid #E6E5EA";
      strengthBar3.style.backgroundColor = "#18171F";
      strengthBar3.style.border = "2px solid #E6E5EA";
      strengthBar4.style.backgroundColor = "#18171F";
      strengthBar4.style.border = "2px solid #E6E5EA";
    } else if (checkNum == 2 && value >= 2) {
      strengthTxt.textContent = "WEAK";
      strengthBar1.style.backgroundColor = "#FB7C58";
      strengthBar1.style.border = "2px solid #FB7C58";
      strengthBar2.style.backgroundColor = "#FB7C58";
      strengthBar2.style.border = "2px solid #FB7C58";
      strengthBar3.style.backgroundColor = "#18171F";
      strengthBar3.style.border = "2px solid #E6E5EA";
      strengthBar4.style.backgroundColor = "#18171F";
      strengthBar4.style.border = "2px solid #E6E5EA";
    } else if (checkNum == 3 && value >= 3) {
      strengthTxt.textContent = "MEDIUM";
      strengthBar1.style.backgroundColor = "#F8CD65";
      strengthBar1.style.border = "2px solid #F8CD65";
      strengthBar2.style.backgroundColor = "#F8CD65";
      strengthBar2.style.border = "2px solid #F8CD65";
      strengthBar3.style.backgroundColor = "#F8CD65";
      strengthBar3.style.border = "2px solid #F8CD65";
      strengthBar4.style.backgroundColor = "#18171F";
      strengthBar4.style.border = "2px solid #E6E5EA";
    } else if (checkNum == 4 && value >= 4) {
      strengthTxt.textContent = "STRONG";
      strengthBar1.style.backgroundColor = "#A4FFAF";
      strengthBar1.style.border = "2px solid #A4FFAF";
      strengthBar2.style.backgroundColor = "#A4FFAF";
      strengthBar2.style.border = "2px solid #A4FFAF";
      strengthBar3.style.backgroundColor = "#A4FFAF";
      strengthBar3.style.border = "2px solid #A4FFAF";
      strengthBar4.style.backgroundColor = "#A4FFAF";
      strengthBar4.style.border = "2px solid #A4FFAF";
    }
    randomPass(value);
  }
  
  function randomPass(sliderValue) {
    let chars = "";
    let pass = "";
    check.forEach(function (box) {
      if (box.checked && box.className == "checkUpper") {
        chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      }
      if (box.checked && box.className == "checkLower") {
        chars += "abcdefghijklmnopqrstuvwxyz";
      }
      if (box.checked && box.className == "checkNums") {
        chars += "0123456789";
      }
      if (box.checked && box.className == "checkSymbol") {
        chars += "±!@#$%^&*()_+<>?|{}[];'/.,`~§";
      }
    });
    let charslength = chars.length;
    for (let i = 0; i < sliderValue; i++) {
      let random = Math.floor(Math.random() * charslength);
      pass += chars.charAt(random);
    }
    password.textContent = pass;
  }