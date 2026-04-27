const images = [
  { src: "images/plastic1", label: "Plastic" },
  { src: "images/plastic2", label: "Plastic" }, 
  { src: "images/plastic3", label: "Plastic" },
  { src: "images/plastic4", label: "Plastic" },
  { src: "images/plastic5", label: "Paper" },
  { src: "images/plastic6", label: "Plastic" },
  { src: "images/plastic7", label: "Plastic" }
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


