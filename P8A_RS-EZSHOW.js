// FACTS 1 ARea- 2 Slideshows START
document.addEventListener("DOMContentLoaded", function() {
    let SHOW = 1;
    const slideshows = {
        1: {
            images: [
                'https://matt.moses.name/sites/P8A/facts1/P8A_facts1_A.jpg',
                'https://matt.moses.name/sites/P8A/facts1/P8A_facts1_B.jpg',
                'https://matt.moses.name/sites/P8A/facts1/P8A_facts1_C.jpg',
                // Add more image paths for slideshow 1
            ],
            texts: [
                 "The Mara River, a vital waterway in East Africa, stretches approximately 395 kilometers (245 miles). It traverses through Kenya and Tanzania, playing a crucial ecological role in the Mara and Serengeti ecosystems. This river is essential for the region's wildlife, supporting a diverse range of species, including the famous wildebeest migration. The Mara River's significance extends beyond ecology; it's a key resource for local communities, providing water for domestic and agricultural use. However, it faces threats from pollution, overuse, and climate change, highlighting the need for sustainable management practices.",
                 "UNESCO World Heritage Sites are globally recognized landmarks or areas of significant cultural, historical, scientific, or ecological value, protected under international treaties. Distributed worldwide, they include wonders like Australia's Great Barrier Reef, historical marvels like the Roman Colosseum, and cultural treasures like the Pyramids of Giza in Egypt. In Africa, these sites also encompass the rich wildlife of Tanzania's Serengeti National Park, the historic city of Timbuktu in Mali, and the symbolic Robben Island in South Africa. Each site reflects humanity's diverse heritage and the planet's natural beauty, preserving them for future generations.",
                 "The great wildebeest migration, a spectacular natural event in Africa, involves over 1.5 million wildebeest, zebras, and gazelles. This circular journey spans the Serengeti National Park in Tanzania and the Maasai Mara National Reserve in Kenya. Beginning around January, they start in the southern Serengeti, where calving season takes place. By July, they move north to the Maasai Mara, crossing perilous rivers teeming with crocodiles. Around October, they start their return southward, driven by the cycle of rainfall and greener pastures. This cyclical journey is an awe-inspiring display of nature's rhythm and survival.",
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
const imagesArray1 = ["https://matt.moses.name/sites/P8A/slides/P8A_Set1A.png", "https://matt.moses.name/sites/P8A/slides/P8A_Set1B.png", "https://matt.moses.name/sites/P8A/slides/P8A_Set1C.png"];
const imagesArray2 = ["https://matt.moses.name/sites/P8A/slides/P8A_Set2A.png", "https://matt.moses.name/sites/P8A/slides/P8A_Set2B.png", "https://matt.moses.name/sites/P8A/slides/P8A_Set2C.png"];
const imagesArray3 = ["https://matt.moses.name/sites/P8A/slides/P8A_Set3A.png", "https://matt.moses.name/sites/P8A/slides/P8A_Set3B.png"];
const imagesArray4 = ["https://matt.moses.name/sites/P8A/slides/P8A_Set4A.png"];

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
