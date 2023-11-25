// FACTS 1 ARea- 2 Slideshows START
document.addEventListener("DOMContentLoaded", function() {
    let SHOW = 1;
    const slideshows = {
        1: {
            images: [
                'https://matt.moses.name/sites/P8C/facts1/P8C_facts1_A.jpg',
                'https://matt.moses.name/sites/P8C/facts1/P8C_facts1_B.jpg',
                'https://matt.moses.name/sites/P8C/facts1/P8C_facts1_C.jpg',
                // Add more image paths for slideshow 1
            ],
            texts: [
                 "The African Serengeti ecosystem is a complex web of symbiotic relationships. Termites, crucial in nutrient cycling, enrich the soil, promoting plant growth. This in turn feeds herbivores like zebras and giraffes, with zebras grazing on lower grasses and giraffes browsing high tree leaves, thus maintaining plant diversity. Top predators, such as lions, keep herbivore populations in check, preventing overgrazing. Elephants, as ecosystem engineers, shape the landscape by uprooting trees, creating open grasslands that benefit smaller grazing animals and their predators. Each species, from the smallest termite to the largest elephant, plays a vital role in sustaining this delicate balance.",
                "Wild habitat regions in Africa are endangered primarily due to human activities like deforestation, poaching, and climate change, which lead to loss of biodiversity and habitat degradation. To preserve these regions, efforts are being made such as establishing protected areas, enforcing anti-poaching laws, promoting sustainable land use, and engaging in reforestation projects. Additionally, international cooperation and funding, as well as local community involvement in conservation, play a crucial role in preserving Africa's unique and diverse ecosystems.",
                "Africa boasts diverse biomes, including deserts like the Sahara, savannas, rainforests, and wetlands. These varying ecosystems support a rich array of wildlife. Seasons greatly influence animal migration patterns, especially in savannas. In the Serengeti, for instance, the dry and wet seasons dictate the Great Migration of wildebeest, zebras, and other species in search of water and grazing land. Similarly, in the Okavango Delta, seasonal flooding attracts wildlife from arid regions. These migrations are crucial for maintaining ecological balance, supporting predator-prey relationships, and ensuring the survival of numerous species across Africa's unique landscapes.",
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
const imagesArray1 = ["https://matt.moses.name/sites/P8B/slides/P8BC_Set1A.png", "https://matt.moses.name/sites/P8B/slides/P8BC_Set1B.png", "https://matt.moses.name/sites/P8B/slides/P8BC_Set1C.png"];
const imagesArray2 = ["https://matt.moses.name/sites/P8B/slides/P8BC_Set2A.png", "https://matt.moses.name/sites/P8B/slides/P8BC_Set2B.png", "https://matt.moses.name/sites/P8B/slides/P8BC_Set2C.png"];
const imagesArray3 = ["https://matt.moses.name/sites/P8B/slides/P8BC_Set3A.png", "https://matt.moses.name/sites/P8B/slides/P8BC_Set3B.png"];
const imagesArray4 = ["https://matt.moses.name/sites/P8B/slides/P8BC_Set4A.png"];

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
