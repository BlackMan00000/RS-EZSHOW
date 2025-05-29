// FACTS 1 ARea- 2 Slideshows START
document.addEventListener("DOMContentLoaded", function() {
    let SHOW = 1;
    const slideshows = {
        1: {
            images: [
                'https://matt.moses.name/P13B/facts1/P13B_facts1_A.jpg',
                'https://matt.moses.name/P13B/facts1/P13B_facts1_B.jpg',
                'https://matt.moses.name/P13B/facts1/P13B_facts1_C.jpg',
                // Add more image paths for slideshow 1
            ],
            texts: [
                "Rainforests formed over millions of years in warm, wet regions near the equator, where heavy rainfall and stable temperatures allowed dense vegetation to thrive. Rich soils, abundant water, and consistent sunlight supported the growth of diverse plant life, creating layered forests. Rainforests aren’t found everywhere because most of Earth’s land doesn’t have the right climate—temperate and polar regions are too dry or cold. Only areas with high rainfall, warmth, and stable conditions, such as the Amazon, Congo, and Southeast Asia, can support true rainforests.",
                "The main causes of rainforest deforestation are logging for timber, clearing land for cattle ranching, and large-scale agriculture (especially palm oil and soy plantations). Mining, infrastructure development, and urban expansion also contribute. These activities destroy habitats, reduce biodiversity, and release stored carbon, harming the planet’s climate and wildlife. Much deforestation is driven by global demand for beef, soy, palm oil, and other commodities.",
                "People in the United States can help limit rainforest threats by eating less beef, choosing products certified as sustainable like FSC or Rainforest Alliance, and reducing paper and wood use. Supporting Indigenous communities, donating to conservation groups, and advocating for protective policies also make a difference. Everyday actions such as recycling, buying responsibly, and spreading awareness help protect rainforests and reduce the demand that drives deforestation worldwide.",
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

   const show2Button = document.getElementById('page2down');
    show2Button.addEventListener('click', function() {
        btnSounds.play('ArrowFAST');
        setTimeout(() => {
        SHOW = 1;
        initializeSlideshow();
        },800 );
    });
    initializeSlideshow();
});   

