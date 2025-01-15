document.addEventListener('DOMContentLoaded', function() {
    // Image change functionality
    function changeImage(buttonId, imageId, altText) {
        const button = document.getElementById(buttonId);
        const image = document.getElementById(imageId);
        
        if (!button || !image) {
            console.error(`Element not found: Button ${buttonId} or Image ${imageId}`);
            return;
        }
        
        button.addEventListener('click', function() {
            const currentAlt = image.alt;
            const newAlt = currentAlt === altText ? altText.replace(/\./g, '-') : altText;
            const newSrc = `/icons/icons-v4/${newAlt}.svg`;
            
            if (newSrc && newSrc.includes('/icons/icons-v4/')) {
                image.src = newSrc;
                console.log('Image changed to:', newSrc);
            } else {
                console.error('Invalid or not found path:', newSrc);
            }
        });
    }

    // Button background toggle functionality
    function setupBackgroundToggle(buttonClass, backgroundClass) {
        document.querySelectorAll(`.${buttonClass}`).forEach(btn => {
            btn.addEventListener('click', function() {
                document.querySelectorAll(`.${buttonClass}`).forEach(b => 
                    b.classList.remove(backgroundClass));
                this.classList.add(backgroundClass);
            });
        });
    }

    // Icon size control functionality
    const sizeControls = {
        'twelve': '0.75rem',   // PP size
        'fourteen': '0.875rem', // MM size
        'sixteen': '1rem'       // GG size
    };

    function changeIconSize(size) {
        document.querySelectorAll('.icon').forEach(icon => {
            icon.style.width = size;
            icon.style.height = size; // Maintain aspect ratio
            icon.style.transition = 'width 0.2s, height 0.2s'; // Smooth transition
        });
    }

    // Set up size control buttons
    Object.entries(sizeControls).forEach(([buttonId, size]) => {
        const button = document.getElementById(buttonId);
        if (button) {
            button.addEventListener('click', () => changeIconSize(size));
        } else {
            console.warn(`Size control button '${buttonId}' not found`);
        }
    });

    // Initialize controls
    setupBackgroundToggle('btn', 'background');
    setupBackgroundToggle('btn2', 'background');
    setupBackgroundToggle('btn3', 'background2');

    // Initialize image changers
    const imageChangers = [
        ['tabcoin0', 'tabcoin', 'original-coin'],
        ['tabcoin1', 'tabcoin', 'icon-c2'],
        ['tabcoin2', 'tabcoin', 'icon-c1'],
        ['tabcash00', 'tabcash', 'original-cash'],
        ['tabcash0', 'tabcash', 'icon-g1'],
        ['tabcash1', 'tabcash', 'icon-g2'],
        ['tabcash2', 'tabcash', 'icon-g3'],
        ['tabcash3', 'tabcash', 'icon-g4']
    ];

    imageChangers.forEach(([buttonId, imageId, altText]) => {
        changeImage(buttonId, imageId, altText);
    });
});