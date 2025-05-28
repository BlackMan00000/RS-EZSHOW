// FACTS 1 ARea- 2 Slideshows START
document.addEventListener("DOMContentLoaded", function() {
    let SHOW = 1;
    const slideshows = {
        1: {
            images: [
                'https://matt.moses.name/sites/P13/facts1/P13_facts1_A.jpg',
                'https://matt.moses.name/slides/TempGraph1.png',
                'https://matt.moses.name/slides/TempGraph2.png',
                // Add more image paths for slideshow 1
            ],
            texts: [
                 "Deforestation in the Amazon rainforest, often driven by logging, agriculture, and urban expansion, poses a critical threat to global biodiversity and climate stability. This vast rainforest, known as Earth's 'lungs', plays a key role in carbon storage, helping mitigate climate change. Loss of this habitat endangers countless species and indigenous communities. Organizations combat this issue through reforestation projects, advocacy for sustainable practices, and supporting indigenous rights. Efforts also include international cooperation and policy-making aimed at conservation. The Amazon's preservation is vital for maintaining global ecological balance and climate health.",
                "Desertification intensifies the dry season, leading to prolonged droughts, reduced water availability, and harsher conditions. This exacerbates soil degradation, diminishes vegetation cover, and disrupts ecosystems. As a result, the natural resilience of the environment decreases, making recovery during wet seasons more difficult and furthering the desertification cycle.",
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

