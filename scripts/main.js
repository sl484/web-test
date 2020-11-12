let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/latest_1024_0094.jpg') {
      myImage.setAttribute('src','images/latest_1024_0131.jpg');
      myImage.setAttribute('alt', 'SDO:AIA_131Angstrom');
    } else if(mySrc === 'images/latest_1024_0131.jpg') {
      myImage.setAttribute('src','images/latest_1024_0171.jpg');
      myImage.setAttribute('alt', 'SDO:AIA_171Angstrom');
    } else if(mySrc === 'images/latest_1024_0171.jpg') {
      myImage.setAttribute('src','images/latest_1024_0193.jpg');
      myImage.setAttribute('alt', 'SDO:AIA_193Angstrom');
    } else if(mySrc === 'images/latest_1024_0193.jpg') {
      myImage.setAttribute('src','images/latest_1024_0304.jpg');
      myImage.setAttribute('alt', 'SDO:AIA_304Angstrom');
    } else {
      myImage.setAttribute('src','images/latest_1024_0094.jpg');
      myImage.setAttribute('alt', 'SDO:AIA_094Angstrom');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h2');

function setUserName(){
  let myName = prompt('Please enter your name.');
  if(!myName){
    setUserName();
  } else{
  localStorage.setItem('name', myName);
  myHeading.textContent= 'Welcome  ' + myName + '!';
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Welcome  ' + storedName + '!';
}

myButton.onclick = function() {
  setUserName();
}
