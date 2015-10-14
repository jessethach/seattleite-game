//Empty array for storing images

var imageArray = [];

//Creating question constructor

var seaQuestions = function(title, src) {
  this.title = title;
  this.src = src;
  imageArray.push(this);
  this.votes = 0;
};

//Call constructor function with all of the objects that have images

var alki = new seaQuestions('Alki Beach', 'img/qimg/alki.jpg');
var ballard = new seaQuestions('Ballard', 'img/qimg/ballard.jpg');
var chief = new seaQuestions('Seattle Center', 'img/qimg/chief.jpg');
var columbia = new seaQuestions('Columbia City', 'img/qimg/columbia.jpg');
var downtown = new seaQuestions('Downtown', 'img/qimg/downtown.jpg');
var fremont = new seaQuestions('Fremont', 'img/qimg/fremont.jpg');
var capHill = new seaQuestions('Capitol Hill', 'img/qimg/jimmy.jpg');
var arboretum = new seaQuestions('Arboretum', 'img/qimg/arboretum.jpg');
var magnolia = new seaQuestions('Magnolia', 'img/qimg/magnolia.jpg');
var pioneer = new seaQuestions('Pioneer Square', 'img/qimg/pioneersq.jpg');
var queen = new seaQuestions('Queen Anne', 'img/qimg/queen.jpg');
var sodo = new seaQuestions('Pioneer Square', 'img/qimg/sodo.jpg');
var udistrict = new seaQuestions('U District', 'img/qimg/udistrict.jpg');
var volunteer = new seaQuestions('Volunteer Park', 'img/qimg/volunteer.jpg');

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

// var randomPhoto1 = randomQuestion();
// var randomPhoto2 = randomQuestion();

function compareImg () {
    var randomPhoto1 = randomQuestion();
    var randomPhoto2 = randomQuestion();

    //Find a way to push the number of times

    title1.textContent = imageArray[randomPhoto1].title;
    title2.textContent = imageArray[randomPhoto2].title;

    ranImg1.src = imageArray[randomPhoto1].src;
    ranImg2.src = imageArray[randomPhoto2].src;


    //Get img1 and img2 element from HTML
    var nextImg1 = document.getElementById('img1');
    var nextImg2 = document.getElementById('img2');

    //This is a callback function
    nextImg1.addEventListener('click', function() {
        imageArray[randomPhoto1].votes +=1;
        console.log(imageArray[randomPhoto1].title + ' has ' + imageArray[randomPhoto1].votes + ' votes');
        compareImg();
    });

    nextImg2.addEventListener('click', function() {
        imageArray[randomPhoto2].votes +=1;
        console.log(imageArray[randomPhoto2].title + ' has ' + imageArray[randomPhoto1].votes + ' votes');
        compareImg();
    });
};


//Call compareImg event

compareImg();


//Add event listener that reruns the compareImg function

// nextImg1.addEventListener('click', compareImg);
// nextImg2.addEventListener('click', compareImg);




