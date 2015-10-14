//Empty array for storing images

var imageArray = [];

//Creating question constructor

var seaQuestions = function(neighb, pics) {
  this.neighb = neighb;
  this.pics = pics;
  this.votes = 0;
  imageArray.push(this);
};

//Call constructor function with all of the objects that have images

var alki = new seaQuestions('Alki Beach', 'img/alki.jpg');
var ballard = new seaQuestions('Ballard', 'img/ballard.jpg');
var chief = new seaQuestions('Seattle Center', 'img/chief.jpg');
var columbia = new seaQuestions('Columbia City', 'img/columbia.jpg');
var downtown = new seaQuestions('Downtown', 'img/downtown.jpg');
var fremont = new seaQuestions('Fremont', 'img/fremont.jpg');
var capHill = new seaQuestions('Capitol Hill', 'img/jimmy.jpg');
var arboretum = new seaQuestions('Arboretum', 'img/arboretum.jpg');
var magnolia = new seaQuestions('Magnolia', 'img/magnolia.jpg');
var pioneer = new seaQuestions('Pioneer Square', 'img/pioneersq.jpg');
var queen = new seaQuestions('Queen Anne', 'img/queen.jpg');
var sodo = new seaQuestions('Pioneer Square', 'img/sodo.jpg');
var udistrict = new seaQuestions('U District', 'img/udistrict.jpg');
var volunteer = new seaQuestions('Volunteer Park', 'img/volunteer.jpg');

//Generate random number and assign to imageArray

var randomQuestion = function() {
  return Math.floor(Math.random() * imageArray.length );
};

// var compare = document.getElementById('compare');
var title1 = document.getElementById('title1');
var title2 = document.getElementById('title2');
var ranImg1 = document.getElementById('img1');
var ranImg2 = document.getElementById('img2');

// Store Event inside of the function

var randomPhoto1, randomPhoto2;

function compareImg () {
 do {
    randomPhoto1 = randomQuestion();
    randomPhoto2 = randomQuestion();

    //Find a way to push the number of times

    title1.textContent = imageArray[randomPhoto1].neighb;
    title2.textContent = imageArray[randomPhoto2].neighb;

    ranImg1.src = imageArray[randomPhoto1].pics;
    ranImg2.src = imageArray[randomPhoto2].pics;
    }
  while (randomPhoto1 === randomPhoto2);
};


//Call compareImg event

compareImg();


//Get img1 and img2 element from HTML
var nextImg1 = document.getElementById('img1');
var nextImg2 = document.getElementById('img2');

//This is a callback function
nextImg1.addEventListener('click', function() {
    console.log('left image was clicked');
    imageArray[randomPhoto1].votes += 1;
    console.log(imageArray[randomPhoto1].neighb + ' has ' + imageArray[randomPhoto1].votes + ' votes');
    compareImg();
});

nextImg2.addEventListener('click', function() {
    console.log('right image was clicked');
    imageArray[randomPhoto2].votes += 1;
    console.log(imageArray[randomPhoto2].neighb + ' has ' + imageArray[randomPhoto2].votes + ' votes');
    compareImg();
});

var data = [
  {
    value: 25,
    label: 'Alex',
    color: 'green',
    highlight: 'blue'
  },

  {
    value: 30,
    label: 'Charles',
    color: 'black',
    highlight: 'white'
  },

  {
    value: 10,
    label: 'Tim',
    color: 'red',
    highlight: 'pink'
  },

  {
    value: 5,
    label: 'Joe',
    color: 'white',
    highlight: 'black'
  }
];

var context = document.getElementById('neighborhoods').getContext('2d');
var skillsChart = new Chart(context).Doughnut(data, {
  animationSteps : 200,
  animationEasing : "eastOutBounce",
  animateRotate : true,
  animateScale : true
});
