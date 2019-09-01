
function open(btn, elem, classToAdd) {
    btn.addEventListener('click', () => {
        elem.classList.toggle(classToAdd);
    });
}

// NAVIGATION

const bars = document.getElementById('bars');
const menu = document.getElementById('menu');

open(bars, menu, 'show');

// PROJECTS LIST

const list = document.getElementById('listGallery');
const select = document.getElementById('selectGallery');

open(select, list, 'show-categories');

//PRICES

const btnDetails = document.getElementById('btnDetails');
const details = document.getElementById('priceDetails');

open(btnDetails, details, 'show-details');

//PREMIUM

const featureHeaders = document.querySelectorAll('#featHead');
const featureTexts = document.querySelectorAll('#featureText');

for(let i = 0 ; i < featureHeaders.length ; i++) {
    open(featureHeaders[i], featureTexts[i], 'show-feature');
}


