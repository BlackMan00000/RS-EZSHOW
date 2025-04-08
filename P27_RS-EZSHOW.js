// FACTS 1 ARea- 2 Slideshows START
document.addEventListener("DOMContentLoaded", function() {
    let SHOW = 1;
    const slideshows = {
        1: {
            images: [
                'facts1/SoilGraph2_cut.jpg',
                'facts1/SoilGraph3_cut.jpg',
                'facts1/SoilGraph4_cut.jpg',
                // Add more image paths for slideshow 1
            ],
            texts: [
                "The African savannahs feature vast grasslands with sporadic trees, thriving in well-drained, nutrient-rich soils. However, overgrazing, deforestation, and poor land management can lead to desertification, turning fertile land into barren desert. A healthy soil ecosystem comprises: 1) Organic matter providing nutrients; 2) Soil microbes, including bacteria and fungi, supporting decomposition and nutrient cycling; and 3) Soil structure, ensuring water retention and root penetration.",
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
                backButton.style.display = 'none';
            } else {
                // Adjust display type based on your page layout (inline-block, block, etc.)
                backButton.style.display = 'inline-block';
            }
            
            if (currentIndex === images.length - 1 || currentIndex === texts.length - 1) {
                forwardButton.style.display = 'none';
            } else {
                forwardButton.style.display = 'inline-block';
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
