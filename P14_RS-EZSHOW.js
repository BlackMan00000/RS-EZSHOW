// FACTS 1 ARea- 2 Slideshows START
document.addEventListener("DOMContentLoaded", function() {
    let SHOW = 1;
    const slideshows = {
        1: {
            images: [
                'https://matt.moses.name/sites/P14/facts1/P14_facts1_A.jpg',
                'https://matt.moses.name/sites/P14/facts1/P14_facts1_B.jpg',
                'https://matt.moses.name/slides/TempGraph2.png',
                // Add more image paths for slideshow 1
            ],
            texts: [
                 "Markhor, Ibex, and Argali inhabit some of the most hostile and rugged terrains on Earth. They dwell in steep, rocky mountains and arid, sparse landscapes where food and water are scarce. To survive, these animals have adapted remarkably. They possess strong, nimble hooves for expertly navigating the treacherous cliffs and rocky crags. Their keen sense of balance allows them to access sparse vegetation on nearly vertical surfaces. Additionally, they have evolved to have efficient digestive systems to extract maximum nutrients from the limited foliage available. Their thick coats provide insulation against harsh weather, and they often migrate seasonally in search of food.",
                "The relationship between local peoples and mountain animals such as the Argali and Ibex is often shaped by a blend of respect, necessity, and cultural significance. These majestic animals, adapted to rugged mountain terrains, are crucial to the ecosystem and hold a special place in the culture and traditions of local communities. For some, they are a source of sustenance, providing food and materials. For others, they are revered symbols, featuring in folklore and spiritual beliefs. This intricate relationship balances the needs of human survival with the reverence for nature, highlighting the deep connection between humans and their natural environment.",
                "After full desertification, a landscape transforms into barren, arid terrain with minimal vegetation. Fertile soils become compacted, eroded, or sandy, losing their productivity. Water sources like lakes and rivers may dry up. Native wildlife diminishes or migrates elsewhere. Once-lush regions become reminiscent of deserts, with shifting sand dunes, cracked ground, and limited biodiversity.",
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
const imagesArray1 = ["https://matt.moses.name/sites/P14/slides/P14_Set1A.png", "https://matt.moses.name/sites/P14/slides/P14_Set1B.png", "https://matt.moses.name/sites/P14/slides/P14_Set1C.png", "https://matt.moses.name/sites/P14/slides/P14_Set1D.png","https://matt.moses.name/sites/P14/slides/P14_Set1E.png"];
const imagesArray2 = ["https://matt.moses.name/sites/P14/slides/P14_Set2A.png", "https://matt.moses.name/sites/P14/slides/P14_Set2B.png"];
const imagesArray3 = ["https://matt.moses.name/sites/P14/slides/P14_Set3A.png", "https://matt.moses.name/sites/P14/slides/P14_Set3B.png", "https://matt.moses.name/sites/P14/slides/P14_Set3C.png", "https://matt.moses.name/sites/P14/slides/P14_Set3D.png", "https://matt.moses.name/sites/P14/slides/P14_Set3E.png"];
const imagesArray4 = ["https://matt.moses.name/sites/P14/slides/P14_Set4A.png", "https://matt.moses.name/sites/P14/slides/P14_Set4B.png"];

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
