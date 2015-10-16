//Empty array for storing images

var imageArray = [];

//Creating question constructor

var seaQuestions = function(neighb, pics, label, color, highlight, value) {
  this.neighb = neighb;
  this.pics = pics;
  this.label = label;
  this.color = color;
  this.highlight = highlight;
  this.value = 0;
  imageArray.push(this);
};

//Call constructor function with all of the objects that have images

var alki = new seaQuestions('Alki Beach', 'img/alki.jpg', 'Alki', '#B26812', '#5C6812');
var ballard = new seaQuestions('Ballard', 'img/ballard.jpg', 'Ballard', '#1987FF', '#8787FF');
var chief = new seaQuestions('Seattle Center', 'img/chief.jpg', 'Seattle Center', '#D0FF00', '#C98A00');
var columbia = new seaQuestions('Columbia City', 'img/columbia.jpg', 'Columbia City', '#832463', '#835063');
var downtown = new seaQuestions('Downtown', 'img/downtown.jpg', 'Downtown', '#785B96', '#BDB38E');
var fremont = new seaQuestions('Fremont', 'img/fremont.jpg', 'Fremont', '#004358', '#1F8A70');
var capHill = new seaQuestions('Capitol Hill', 'img/jimmy.jpg', 'Capitol Hill', '#BEDB39', '#FD7400');
var arboretum = new seaQuestions('Arboretum', 'img/arboretum.jpg', 'Arboretum', '#73993F', '#4865B2');
var magnolia = new seaQuestions('Magnolia', 'img/magnolia.jpg', 'Magnolia', '#4C1B1B', '#B9121B');
var pioneer = new seaQuestions('Pioneer Square', 'img/pioneersq.jpg', 'Pioneer Square', '#F6E497', '#FCFAE1');
var queen = new seaQuestions('Queen Anne', 'img/queen.jpg', 'Queen Anne', '#BD8D46', '#BA9E63');
var sodo = new seaQuestions('Sodo', 'img/sodo.jpg', 'Pioneer Square', '#EA2E49', '#EA6749');
var udistrict = new seaQuestions('U District', 'img/udistrict.jpg', 'U District', '#333745', '#1D3745');
var volunteer = new seaQuestions('Volunteer Park', 'img/volunteer.jpg', 'Volunteer Park', '#F6F792', '#7A7A48');

//Generate random number and assign to imageArray

function randomQuestion () {
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
  } while (randomPhoto1 === randomPhoto2)
};

//Call compareImg event

compareImg();

//Get img1 and img2 element from HTML
var nextImg1 = document.getElementById('img1');
var nextImg2 = document.getElementById('img2');

//This is a callback function that also calls the chartMaker function
nextImg1.addEventListener('click', function() {
    console.log('left image was clicked');
    imageArray[randomPhoto1].value += 1;
    console.log(imageArray[randomPhoto1].neighb + ' has ' + imageArray[randomPhoto1].value + ' value');
    storedNeighb();
    compareImg();
    chartMaker();
});

nextImg2.addEventListener('click', function() {
    console.log('right image was clicked');
    imageArray[randomPhoto2].value += 1;
    console.log(imageArray[randomPhoto2].neighb + ' has ' + imageArray[randomPhoto2].value + ' value');
    storedNeighb();
    compareImg();
    chartMaker();
});

//chartMaker function created

function chartMaker () {
var context = document.getElementById('neighborhoods').getContext('2d');
var compareChart = new Chart(context).Doughnut(imageArray, {
  animationSteps : 50,
  animationEasing : "eastOutBounce",
  animateRotate : true,
  animateScale : true
});
};

//Create the local storage function with a for loop so that if local storage exists, run code to grab localstorage

function storedNeighb () {
  var storedVote = JSON.stringify(imageArray);
  for (var i = 0; i < imageArray.length; i++) {
   if (imageArray[i] !== 0) {
    localStorage.setItem('neighborhoods', storedVote);
    };
  }
}

//Create function to get local storage

function getStg () {
  if (localStorage.getItem('neighborhoods')) {
  var storedVote = localStorage.getItem('neighborhoods');
  getStored = JSON.parse(storedVote);
  imageArray = getStored;
  };
}

//Call chartmaker and getstg

getStg();
chartMaker();
