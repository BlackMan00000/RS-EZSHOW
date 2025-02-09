// FACTS 1 ARea- 2 Slideshows START
document.addEventListener("DOMContentLoaded", function() {
    let SHOW = 1;
    const slideshows = {
        1: {
            images: [
                'https://matt.moses.name/sites/P9A/facts1/P9A_facts1_A.jpg',
                'https://matt.moses.name/sites/P9A/facts1/P9A_facts1_B.jpg',
                'https://matt.moses.name/sites/P9A/facts1/P9A_facts1_C.jpg',
                // Add more image paths for slideshow 1
            ],
            texts: [
                 "Since ancient times, lions have symbolized strength, courage, and kingship. This is true across many cultures, from Ancient Egypt, where the lion-headed goddess Sekhmet represented war and healing, to medieval Europe, where lions adorned royal coats of arms. Their majestic appearance and dominance in the wild reinforced their association with leadership and divine authority.",
                 "A lion’s roar can be heard up to five miles away, a fact that likely inspired myths of their supernatural presence. Many African and Middle Eastern legends describe lions as night guardians, whose roars ward off evil spirits. This real-world trait made them powerful symbols of protection and dominance.",
                 "Lions once lived across Europe, Asia, and Africa. Ancient Greek and Persian texts described lions in the wild, reinforcing their role in mythology. Fossil evidence confirms lions roamed from India to the British Isles before habitat loss and hunting reduced their range.",
                 // Add more texts
            ]
        },
    }
function initializeSlideshow() {
    let currentIndex = 0;
    const imageDisplay = document.getElementById('imageDisplay');
    const textDisplay = document.getElementById('textDisplay');
    const backButton = document.getElementById('backButton');
    const forwardButton = document.getElementById('forwardButton');

    const images = slideshows[SHOW].images;
    const texts = slideshows[SHOW].texts;

    function updateDisplay() {
        // Crossfade the images and texts
        imageDisplay.classList.add('hidden');
        textDisplay.classList.add('hidden');

        setTimeout(() => {
            imageDisplay.style.backgroundImage = "url(" + images[currentIndex] + ")";
            textDisplay.textContent = texts[currentIndex];
            imageDisplay.classList.remove('hidden');
            textDisplay.classList.remove('hidden');
        }, 500); // Half of the 1s transition time


        backButton.disabled = currentIndex === 0;
        forwardButton.disabled = currentIndex === images.length - 1 || currentIndex === texts.length - 1;
    }

    backButton.addEventListener('click', function() {
        ButtonPress1.play();
        if (currentIndex > 0) {
            currentIndex--;
            updateDisplay();
        }
    });

    forwardButton.addEventListener('click', function() {
        ButtonPress2.play();
        if (currentIndex < images.length - 1 && currentIndex < texts.length - 1) {
            currentIndex++;
            updateDisplay();
        }
    });   

    updateDisplay();
    
   }

   const show2Button = document.getElementById('downToFacts2');
    show2Button.addEventListener('click', function() {
        btnSounds.play('ArrowFAST');
        setTimeout(() => {
        SHOW = 1;
        initializeSlideshow();
        },800 );
    });
    initializeSlideshow();
});   

// Slides Area
// ******************************************
// RS-EZSHOW - random inage selection/slider
// ******************************************    
    
const button1 = document.getElementById("q1btn"); // Just Match up the button id's
const button2 = document.getElementById("q2btn");
const button3 = document.getElementById("q3btn");
const button4 = document.getElementById("q4btn");
const slider = document.querySelector(".rs-slider");
const imagesArray1 = ["https://matt.moses.name/sites/P9A/slides/P9A_Set1A.png", "https://matt.moses.name/sites/P9A/slides/P9A_Set1B.png", "https://matt.moses.name/sites/P9A/slides/P9A_Set1C.png", "https://matt.moses.name/sites/P9A/slides/P9A_Set1D.png", "https://matt.moses.name/sites/P9A/slides/P9A_Set1E.png", "https://matt.moses.name/sites/P9A/slides/P9A_Set1F.png", "https://matt.moses.name/sites/P9A/slides/P9A_Set1G.png", "https://matt.moses.name/sites/P9A/slides/P9A_Set1H.png", "https://matt.moses.name/sites/P9A/slides/P9A_Set1I.png", "https://matt.moses.name/sites/P9A/slides/P9A_Set1J.png"];
const imagesArray2 = ["https://matt.moses.name/sites/P9A/slides/P9A_Set2A.png", "https://matt.moses.name/sites/P9A/slides/P9A_Set2B.png", "https://matt.moses.name/sites/P9A/slides/P9A_Set2C.png", "https://matt.moses.name/sites/P9A/slides/P9A_Set2D.png", "https://matt.moses.name/sites/P9A/slides/P9A_Set2E.png", "https://matt.moses.name/sites/P9A/slides/P9A_Set2F.png", "https://matt.moses.name/sites/P9A/slides/P9A_Set2G.png", "https://matt.moses.name/sites/P9A/slides/P9A_Set2H.png", "https://matt.moses.name/sites/P9A/slides/P9A_Set2I.png", "https://matt.moses.name/sites/P9A/slides/P9A_Set2J.png"];
const imagesArray3 = ["https://matt.moses.name/sites/P9A/slides/P9A_Set3A.png", "https://matt.moses.name/sites/P9A/slides/P9A_Set3B.png", "https://matt.moses.name/sites/P9A/slides/P9A_Set3C.png", "https://matt.moses.name/sites/P9A/slides/P9A_Set3D.png"];
const imagesArray4 = ["https://matt.moses.name/sites/P9A/slides/P9A_Set4A.png", "https://matt.moses.name/sites/P9A/slides/P9A_Set4B.png", "https://matt.moses.name/sites/P9A/slides/P9A_Set4C.png", "https://matt.moses.name/sites/P9A/slides/P9A_Set4D.png"];

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