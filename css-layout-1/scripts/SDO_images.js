let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/2020-11-12/latest_1024_0094.jpg') {
      myImage.setAttribute('src','images/2020-11-12/latest_1024_0131.jpg');
      myImage.setAttribute('alt', 'SDO:AIA_131Angstrom');
    } else if(mySrc === 'images/2020-11-12/latest_1024_0131.jpg') {
      myImage.setAttribute('src','images/2020-11-12/latest_1024_0171.jpg');
      myImage.setAttribute('alt', 'SDO:AIA_171Angstrom');
    } else if(mySrc === 'images/2020-11-12/latest_1024_0171.jpg') {
      myImage.setAttribute('src','images/2020-11-12/latest_1024_0193.jpg');
      myImage.setAttribute('alt', 'SDO:AIA_193Angstrom');
    } else if(mySrc === 'images/2020-11-12/latest_1024_0193.jpg') {
      myImage.setAttribute('src','images/2020-11-12/latest_1024_0304.jpg');
      myImage.setAttribute('alt', 'SDO:AIA_304Angstrom');
    } else {
      myImage.setAttribute('src','images/2020-11-12/latest_1024_0094.jpg');
      myImage.setAttribute('alt', 'SDO:AIA_094Angstrom');
    }
}
