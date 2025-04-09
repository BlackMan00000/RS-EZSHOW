// FACTS 1 ARea- 2 Slideshows START
document.addEventListener("DOMContentLoaded", function() {
    let SHOW = 1;
    const slideshows = {
        1: {
            images: [
                'https://matt.moses.name/sites/P27/slides/Slide1.png',
                'https://matt.moses.name/slides/SoilGraph3_cut.jpg',
                'https://matt.moses.name/slides/SoilGraph4_cut.jpg',
                // Add more image paths for slideshow 1
            ],
            texts: [
                "By the late 1860s, waves of Italian immigrants—many from coastal villages near Genoa—arrived in San Francisco, bringing with them generations of fishing knowledge. They built boats in the tradition of their homeland, known among them as silenas, but later more widely called San Francisco feluccas. These small, lateen-rigged sailing vessels were perfectly suited to the rough waters of the Bay, combining seaworthiness with the skill of their owners. The felucca soon became the dominant vessel in San Francisco’s growing fishing fleet. One notable admirer, author Jack London, recalled his time as a young “oyster pirate” aboard a felucca in his writings.",
                "Desertification intensifies the dry season, leading to prolonged droughts, reduced water availability, and harsher conditions. This exacerbates soil degradation, diminishes vegetation cover, and disrupts ecosystems. As a result, the natural resilience of the environment decreases, making recovery during wet seasons more difficult and furthering the desertification cycle.",
                "After full desertification, a landscape transforms into barren, arid terrain with minimal vegetation. Fertile soils become compacted, eroded, or sandy, losing their productivity. Water sources like lakes and rivers may dry up. Native wildlife diminishes or migrates elsewhere. Once-lush regions become reminiscent of deserts, with shifting sand dunes, cracked ground, and limited biodiversity.",
                // Add more texts
            ]
        },
    };

    function initializeSlideshow() {
        let currentIndex = 0;
        const imageDisplay = document.getElementById('imageDisplay');
        const textDisplay = document.getElementById('textDisplay');
        const backButton = document.getElementById('backButton');
        const forwardButton = document.getElementById('forwardButton');
        const backBTN = document.getElementById('backBTN');
        const fwdBTN = document.getElementById('fwdBTN');

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

            // Instead of disabling buttons, hide them when at the slide boundaries
            if (currentIndex === 0) {
                backBTN.style.display = 'none';
            } else {
                // Adjust display type based on your page layout (inline-block, block, etc.)
                backBTN.style.display = 'block';
            }
            
            if (currentIndex === images.length - 1 || currentIndex === texts.length - 1) {
                fwdBTN.style.display = 'none';
            } else {
                fwdBTN.style.display = 'block';
            }
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

    initializeSlideshow();
});
