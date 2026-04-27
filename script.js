const images = [
  { src: "images/000000 (2).jpg", label: "Plastic" },
  { src: "images/000000 (4).jpg", label: "Plastic" }, 
  { src: "images/000000 (6).jpg", label: "Plastic" },
  { src: "images/000000 (7).jpg", label: "Plastic" },
  { src: "images/000001 (2).jpg", label: "Paper" },
  { src: "images/trashed-1746687919-IMG_20250408_123438.jpg", label: "Plastic" },
  { src: "images/trashed-1746687933-IMG_20250408_123457.jpg", label: "Plastic" }
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


