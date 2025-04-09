// FACTS 1 ARea- 2 Slideshows START
document.addEventListener("DOMContentLoaded", function() {
    let SHOW = 1;
    const slideshows = {
        1: {
            images: [
                'https://matt.moses.name/sites/P27/slides/Slide1.png',
                'https://matt.moses.name/sites/P27/slides/Slide2.png',
                'https://matt.moses.name/slides/SoilGraph4_cut.jpg',
                // Add more image paths for slideshow 1
            ],
            texts: [
                "By the late 1860s, waves of Italian immigrants—many from coastal villages near Genoa—arrived in San Francisco, bringing with them generations of fishing knowledge. They built boats in the tradition of their homeland, known among them as silenas, but later more widely called San Francisco feluccas. These small, lateen-rigged sailing vessels were perfectly suited to the rough waters of the Bay, combining seaworthiness with the skill of their owners. The felucca soon became the dominant vessel in San Francisco’s growing fishing fleet. One notable admirer, author Jack London, recalled his time as a young “oyster pirate” aboard a felucca in his writings.",
                "The Seeno and/or Siino names relate to a family of boat builders, specifically the Siino family, who immigrated to California and established a boat building business in the Black Diamond (now Pittsburg) area. Angelo Siino, a master shipwright, and his father, Erasmo, and brothers Gaetano and Francesco, were skilled boat builders who established the G.E. Seeno Boat Builder Yard as well as running The Monterey Boatworks from 1939-1967. Angelo Siino built all of his boats without blueprints and hand-picked the wood. He used Douglas Fir, Philippine mahogany and Indiana bending oak from San Francisco lumberyards.",
                "The Monterey Clipper came into being with industrialization around 1925. It was long considered part of the local fishing fleet to the San Francisco Bay Area, the Monterey Bay Area and east to the Sacramento delta. The boat was improved with a small single-cylinder gasoline engine and amenities such that, 'it could engage in multiple types of fishing and spend several days at sea'.  All total, around this period, about 500 of the small fishing boats were based in San Francisco. Companies like the Beviaqua yard and the Genoa Boat Works were instrumental in adding to the fleet.Known variously as a Monterey Hull, Putt-putt, Silena boat, and Lampra boat, the Monterey Clipper's history has swung with the fortunes of the local fish industry and the paces of industrialization.\n By the 1930s, the local sardine industry came alive with more canneries built in San Francisco and Monterey. The Monterey Clippers were a huge part of the commercial fishing industry in the Delta, San Francisco Bay and Monterey Bay before they were replaced by larger commercial boats.
",
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
