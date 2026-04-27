const images = []

let currentImage = null;
let score = 0;
let total = 0;

function loadRandomImage(){
  const randomIndex = Math.floor(Math.random() * images.length);
  currentImage = images[randomIndex]
  // connects the HTML id in index.html and changes the image with randomized one
  document.getElementByID("garbage-img").src = currentImage.src
  
}


function checkAnswer(userAnswer){



}


