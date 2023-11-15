// FACTS 1 ARea- 2 Slideshows START
document.addEventListener("DOMContentLoaded", function() {
    let SHOW = 1;
    const slideshows = {
        1: {
            images: [
                'facts1/P4_facts1_A.jpg',
                'facts1/P4_facts1_B.jpg',
                'facts1/P4_facts1_C.jpg',
                // Add more image paths for slideshow 1
            ],
            texts: [
                 "The Ice Age, also known as the Pleistocene Epoch, was not uniformly cold and frozen everywhere. It was characterized by significant glaciations, where large parts of the Earth, particularly in the Northern Hemisphere, were covered by ice sheets. However, not all regions experienced the same degree of coldness or ice coverage. Areas closer to the equator remained relatively warmer and ice-free, sustaining a variety of plant and animal life. The climate varied significantly across different regions and periods, with some experiencing milder conditions. Moreover, there were interglacial periods within the Ice Age when temperatures were relatively warmer, leading to the retreat of ice sheets. This variation in climate and ice coverage indicates that the Ice Age was a complex and dynamic period, rather than a uniformly frozen and cold epoch.",
                 "During the Last Ice Age, massive ice sheets covered significant parts of the Earth, locking up vast quantities of water. This led to lower sea levels, about 120 meters below today's levels. The Bering Strait, a relatively shallow body of water between modern-day Russia and Alaska, was exposed due to this drop in sea level, forming a land bridge. This bridge connected Asia and North America, allowing humans and animals to migrate across what is now known as Beringia. As the ice age ended and the ice melted, sea levels rose again, submerging the land bridge.",
                 "During the Last Ice Age, glaciers covered a significant portion of North America. In the United States, they extended as far south as present-day Missouri and Illinois in the Midwest, and New York and Pennsylvania in the East. These massive ice sheets sculpted much of the current landscape, forming the Great Lakes and shaping valleys and mountains. As the climate warmed, the glaciers retreated, leaving behind a reshaped terrain, numerous lakes, and fertile soil in the northern U.S.",

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
const imagesArray1 = ["slides/P4_Set1A.png", "slides/P4_Set1B.png", "slides/P4_Set1C.png"];
const imagesArray2 = ["slides/P4_Set2A.png", "slides/P4_Set2B.png"];
const imagesArray3 = ["slides/P4_Set3A.png", "slides/P4_Set3B.png", "slides/P4_Set3C.png"];
const imagesArray4 = ["slides/P4_Set4A.png"];

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
