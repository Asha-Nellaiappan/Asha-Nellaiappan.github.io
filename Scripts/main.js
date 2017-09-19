var myImage = document.querySelector('img');

myImage.onclick = function(){
	var mysrc = myImage.getAttribute('src');

	if(mysrc === 'images/download.jpg')
		myImage.setAttribute('src','images/download2.jpg');
	else
		myImage.setAttribute('src','images/download.jpg');
};

var myHeading = document.querySelector('h1');
var myButton = document.querySelector('button');

function setUserName(){
	var myName=prompt('Please enter your name');
	localStorage.setItem('name',myName);
	myHeading.textContent = 'Chrome is cool '+myName;
}

if(!(localStorage.getItem('name'))){
	setUserName();
}
else{
	var storedName = localStorage.getItem('name');
	myHeading.textContent = 'Chrome is cool '+storedName;
}

myButton.onclick = function(){
	setUserName();
};



