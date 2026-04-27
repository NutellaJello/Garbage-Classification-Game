const images = [
  { src: "images/Image1.jpg", label: "Plastic" },
  { src: "images/Image2.jpg", label: "Plastic" }, 
  { src: "images/Image3.jpg", label: "Plastic" },
  { src: "images/Image4.jpg", label: "Plastic" },
  { src: "images/Image5.jpg", label: "Paper" },
  { src: "images/Image6.jpg", label: "Plastic" }, 
  { src: "images/000001%20(7).jpg", label: "Plastic" }, 
  { src: "images/000002%20(2).jpg", label: "Cardboard" }, 
  { src: "images/000002%20(3).jpg", label: "Metal" }, 
  { src: "images/000002%20(5).jpg", label: "Plastic" }, 
  { src: "images/000002.jpg", label: "Paper" }, 
  { src: "images/000003%20(2).jpg", label: "Miscellaneous" }, 
  { src: "images/000003%20(3).jpg", label: "Plastic" }, 
  { src: "images/000003%20(6).jpg", label: "Paper" }, 
  { src: "images/000004%20(4).jpg", label: "Cardboard" }, 
  { src: "images/000004%20(5).jpg", label: "Metal" }, 
  { src: "images/000005%20(6).jpg", label: "Plastic" }, 
  { src: "images/000006%20(7).jpg", label: "Glass" }, 
  { src: "images/000007%20(4).jpg", label: "Metal" }, 
  { src: "images/000007%20(7).jpg", label: "Metal" }, 
  { src: "images/000008%20(4).jpg", label: "Plastic" }, 
  { src: "images/000008%20(6).jpg", label: "Metal" }, 
  { src: "images/000011%20(2).jpg", label: "Miscellaneous" }, 
  { src: "images/000011%20(6).jpg", label: "Metal" }, 
  { src: "images/000012%20(6).jpg", label: "Glass" }
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


