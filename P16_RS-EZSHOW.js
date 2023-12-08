// FACTS 1 ARea- 2 Slideshows START
document.addEventListener("DOMContentLoaded", function() {
    let SHOW = 1;
    const slideshows = {
        1: {
            images: [
                'facts1/P8C_facts1_A.jpg',
                'facts1/P8C_facts1_B.jpg',
                'facts1/P8C_facts1_C.jpg',
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

