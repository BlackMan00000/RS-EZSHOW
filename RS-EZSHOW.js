// ******************************************
// RS-EZSHOW - random inage selection/slider
// ******************************************    
    
const button1 = document.getElementById("q1btn"); // Just Match up the button id's
const button2 = document.getElementById("q2btn");
const button3 = document.getElementById("q3btn");
const button4 = document.getElementById("q4btn");
const slider = document.querySelector(".rs-slider");
const imagesArray1 = ["https://matt.moses.name/test/Q1_Slide01.png", "https://matt.moses.name/test/Q1_Slide02.png", "https://matt.moses.name/test/Q1_Slide03.png", "https://matt.moses.name/test/Q1_Slide04.png", "https://matt.moses.name/test/Q1_Slide05.png", "https://matt.moses.name/test/Q1_Slide06.png", "https://matt.moses.name/test/Q1_Slide07.png", "https://matt.moses.name/test/Q1_Slide08.png", "https://matt.moses.name/test/Q1_Slide09.png", "https://matt.moses.name/test/Q1_Slide10.png"];
const imagesArray2 = ["https://matt.moses.name/test/Q2_Slide01.png", "https://matt.moses.name/test/Q2_Slide02.png", "https://matt.moses.name/test/Q2_Slide03.png", "https://matt.moses.name/test/Q2_Slide04.png", "https://matt.moses.name/test/Q2_Slide05.png", "https://matt.moses.name/test/Q2_Slide06.png", "https://matt.moses.name/test/Q2_Slide07.png", "https://matt.moses.name/test/Q2_Slide08.png", "https://matt.moses.name/test/Q2_Slide09.png", "https://matt.moses.name/test/Q2_Slide10.png"];
const imagesArray3 = ["https://matt.moses.name/test/Q3_Slide01.png", "https://matt.moses.name/test/Q3_Slide02.png", "https://matt.moses.name/test/Q3_Slide03.png", "https://matt.moses.name/test/Q3_Slide04.png"];
const imagesArray4 = ["https://matt.moses.name/test/Q4_Slide01.png", "https://matt.moses.name/test/Q4_Slide02.png", "https://matt.moses.name/test/Q4_Slide03.png", "https://matt.moses.name/test/Q4_Slide04.png"];

let previousImages = [];


// This function picks randomly from the imageArrays, 
// and does not pick the same slide twice until all have been shown

function getRandomImage(imagesArray) {
  const unusedImages = imagesArray.filter(image => !previousImages.includes(image));
  if (unusedImages.length === 0) {
    previousImages = [];
    return imagesArray[Math.floor(Math.random() * imagesArray.length)];
  }
  return unusedImages[Math.floor(Math.random() * unusedImages.length)];
}


// ******************************************************************************
// This slides the images according to RS-EZShowStyles.css stylesheet parameters
// ******************************************************************************

function updateSliderWithAnimation(incomingImage) {
  const currentImage = document.querySelector(".rs-slider img");
  const newImage = document.createElement("img");
  newImage.src = incomingImage;
  newImage.alt = "Slide";
  newImage.classList.add("slide");
  slider.appendChild(newImage);

  newImage.style.animation = "slideInAnimation 3s ease-in-out";
  currentImage.style.animation = "slideOutAnimation 3s ease-in-out"; //timing/easing

  setTimeout(() => {
    slider.removeChild(currentImage);
  }, 3000); // Make sure timings match to above seconds
}

// **************************************************
//    What Happens When you press the buttons
// **************************************************

button1.addEventListener("click", () => {
  btnSounds.play('Machine');
  const image = getRandomImage(imagesArray1);
  previousImages.push(image);
  updateSliderWithAnimation(image);
   document.getElementById("q2btn").style.visibility = "hidden"; //2
   document.getElementById("q3btn").style.visibility = "hidden"; //3
   document.getElementById("q4btn").style.visibility = "hidden"; //4
    setTimeout(function() {
        document.getElementById("q2btn").style.visibility = "visible"; //2
        document.getElementById("q3btn").style.visibility = "visible"; //3
        document.getElementById("q4btn").style.visibility = "visible"; //4
    }, 3000);
});

button2.addEventListener("click", () => {
	btnSounds.play('Machine');
  const image = getRandomImage(imagesArray2);
  previousImages.push(image);
  updateSliderWithAnimation(image);
  document.getElementById("q1btn").style.visibility = "hidden"; //1
   document.getElementById("q3btn").style.visibility = "hidden"; //3
   document.getElementById("q4btn").style.visibility = "hidden"; //4
    setTimeout(function() {
        document.getElementById("q1btn").style.visibility = "visible"; //1
        document.getElementById("q3btn").style.visibility = "visible"; //3
        document.getElementById("q4btn").style.visibility = "visible"; //4
    }, 3000);
});

button3.addEventListener("click", () => {
  btnSounds.play('Machine');
  const image = getRandomImage(imagesArray3);
  previousImages.push(image);
  updateSliderWithAnimation(image);
  document.getElementById("q2btn").style.visibility = "hidden"; //2
   document.getElementById("q1btn").style.visibility = "hidden"; //1
   document.getElementById("q4btn").style.visibility = "hidden"; //4
    setTimeout(function() {
        document.getElementById("q2btn").style.visibility = "visible"; //2
        document.getElementById("q1btn").style.visibility = "visible"; //1
        document.getElementById("q4btn").style.visibility = "visible"; //4
    }, 3000);
});

button4.addEventListener("click", () => {
	btnSounds.play('Machine');
  const image = getRandomImage(imagesArray4);
  previousImages.push(image);
  updateSliderWithAnimation(image);
  document.getElementById("q2btn").style.visibility = "hidden"; //2
   document.getElementById("q3btn").style.visibility = "hidden"; //3
   document.getElementById("q1btn").style.visibility = "hidden"; //1
    setTimeout(function() {
        document.getElementById("q2btn").style.visibility = "visible"; //2
        document.getElementById("q3btn").style.visibility = "visible"; //3
        document.getElementById("q1btn").style.visibility = "visible"; //1
    }, 3000);
});
