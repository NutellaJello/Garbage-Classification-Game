const images = [
  { src: "images/Image1.jpg", label: "Plastic" },
  { src: "images/Image2.jpg", label: "Plastic" }, 
  { src: "images/Image3.jpg", label: "Plastic" },
  { src: "images/Image4.jpg", label: "Plastic" },
  { src: "images/Image5.jpg", label: "Paper" },
  { src: "images/Image6.jpg", label: "Plastic" }
];

let currentImage = null;
let score = 0;
let total = 0;

function loadRandomImage(){
  const randomIndex = Math.floor(Math.random() * images.length);
  currentImage = images[randomIndex];
  // connects the HTML id in index.html and changes the image with randomized one
  document.getElementById("garbage-img").src = currentImage.src;
  
}
function checkAnswer(userAnswer){
  total++;
    
  if (userAnswer == currentImage.label){
    score++;
    document.getElementById("testing").textContent = "Correct!";
  }
  else{
    document.getElementById("testing").textContent = "Incorrect! Correct answer: " + currentImage.label;
  }
  
  document.getElementById("score").textContent = "Score: " + score + "/" + total;
  
  loadRandomImage();
}

loadRandomImage();


