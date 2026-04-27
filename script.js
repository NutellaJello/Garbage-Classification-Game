const images = [
  {src: "images/000000 (2)", label: 'Plastic"},
  {src: "images/000000 (4)", label: 'Plastic"}, 
  {src: "images/000000 (6)", label: 'Plastic"},
  {src: "images/000000 (7)", label: 'Plastic"},
  {src: "images/000001 (2)", label: 'Paper"},
  {src: "images/trashed-1746687919-IMG_20250408_123438", label: 'Plastic"},
  {src: "images/trashed-1746687933-IMG_20250408_123457", label: 'Plastic"}
];

let currentImage = null;
let score = 0;
let total = 0;

function loadRandomImage(){
  const randomIndex = Math.floor(Math.random() * images.length);
  currentImage = images[randomIndex];
  // connects the HTML id in index.html and changes the image with randomized one
  document.getElementByID("garbage-img").src = currentImage.src;
  
}
function checkAnswer(userAnswer){
  total++;
    
  if (userAnswer == currentImage.label){
    score++;
    document.getElementById("testing").textContent = "Correct!";
  }
  else{
    document.getElementByID("testing").textContent = "Incorrect! Correct answer: " + currentImage.label;
  }
  
  document.getElementByID("score").textContent = "Score: " + score + "/" + total;
  
  loadRandomImage();
}

loadRandomImage();


