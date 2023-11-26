// FACTS 1 ARea- 2 Slideshows START
document.addEventListener("DOMContentLoaded", function() {
    let SHOW = 1;
    const slideshows = {
        1: {
            images: [
                'https://matt.moses.name/sites/P11A/facts1/P11A_Facts1_A.jpg',
                'https://matt.moses.name/sites/P11A/facts1/P11A_Facts1_B.jpg',
                'https://matt.moses.name/sites/P11A/facts1/P11A_Facts1_C.jpg',
                // Add more image paths for slideshow 1
            ],
            texts: [
                 "Africa's "water towers" refer to mountainous regions that are crucial for water collection and storage. These high-altitude areas receive significant rainfall and often host large forests, which act as natural sponges, absorbing and slowly releasing water. This process maintains the flow of rivers and streams, ensuring water supply during dry periods. These water towers are vital for sustaining diverse ecosystems, providing essential habitat for numerous species, and supporting agriculture and human populations. Their health is critical for maintaining the continent's water cycle, biodiversity, and the well-being of millions who depend on them for survival.",
                "Protected areas in Africa, shown here in light blue shading, encompass national parks, reserves, and sanctuaries, and they harbor a wealth of biodiversity and ecosystems. Africa's "water towers," being vital sources of water, play a crucial role in sustaining these areas. They regulate water flow into rivers and lakes within these protected regions, ensuring consistent water availability, which is essential for wildlife, plant life, and maintaining ecological balance. By providing reliable water sources, these water towers support diverse habitats, aiding in conservation efforts and helping to mitigate the impacts of climate change and human activity on these crucial natural sanctuaries.",
                "Africa experiences diverse seasonal changes due to its vast size and varied geography. Generally, the continent has two main seasons: wet and dry. The wet season, marked by heavy rains, is crucial for replenishing rivers, lakes, and groundwater. This season is driven by the movement of the Intertropical Convergence Zone, bringing moisture-laden winds. The dry season sees reduced rainfall and higher temperatures, leading to evaporation and decreased water levels. The water cycle in Africa is characterized by these seasonal shifts, with water towers playing a key role in storing and gradually releasing water, thus maintaining the flow in rivers and supporting ecosystems throughout the year.",
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
const imagesArray1 = ["https://matt.moses.name/sites/P11A/slides/P11AB_Set1A.png", "https://matt.moses.name/sites/P11A/slides/P11AB_Set1B.png", "https://matt.moses.name/sites/P11A/slides/P11AB_Set1C.png"];
const imagesArray2 = ["https://matt.moses.name/sites/P11A/slides/P11AB_Set2A.png", "https://matt.moses.name/sites/P11A/slides/P11AB_Set2B.png", "https://matt.moses.name/sites/P11A/slides/P11AB_Set2C.png"];
const imagesArray3 = ["https://matt.moses.name/sites/P11A/slides/P11AB_Set3A.png", "https://matt.moses.name/sites/P11A/slides/P11AB_Set3B.png", "https://matt.moses.name/sites/P11A/slides/P11AB_Set3C.png", "https://matt.moses.name/sites/P11A/slides/P11AB_Set3D.png"];
const imagesArray4 = ["https://matt.moses.name/sites/P11A/slides/P11AB_Set4A.png", "https://matt.moses.name/sites/P11A/slides/P11AB_Set4B.png", "https://matt.moses.name/sites/P11A/slides/P11AB_Set4C.png"];

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
