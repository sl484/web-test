let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/latest_1024_0094.jpg') {
      myImage.setAttribute('src','images/latest_1024_0131.jpg');
    } else if(mySrc === 'images/latest_1024_0131.jpg') {
      myImage.setAttribute('src','images/latest_1024_0171.jpg');
    } else if(mySrc === 'images/latest_1024_0171.jpg') {
      myImage.setAttribute('src','images/latest_1024_0193.jpg');
    } else if(mySrc === 'images/latest_1024_0193.jpg') {
      myImage.setAttribute('src','images/latest_1024_0304.jpg');
    } else {
      myImage.setAttribute('src','images/latest_1024_0094.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName(){
  let myName = prompt('Please enter your name.');
  if(!myName){
    setUserName();
  } else{
  localStorage.setItem('name', myName);
  myHeading.textContent= 'Greetings  ' + myName + '!';
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Greetings  ' + storedName + '!';
}

myButton.onclick = function() {
  setUserName();
}
