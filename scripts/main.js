let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/eclips.jpg') {
        myImage.setAttribute('src', 'images/eclipse-2.jpg');
    } else {
        myImage.setAttribute('src', 'images/eclips.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Приветсвуем тебя, ' + myName;
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Приветсвуем тебя, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}