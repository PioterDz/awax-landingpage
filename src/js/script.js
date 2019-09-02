
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

const btnDetails = document.querySelectorAll('#btnDetails');
const details = document.querySelectorAll('#priceDetails');

btnDetails.forEach((el, id) => {
    open(el, details[id], 'show-details');
});

//PREMIUM

const featureHeaders = document.querySelectorAll('#featHead');
const featureTexts = document.querySelectorAll('#featureText');

featureHeaders.forEach((el, id) => {
    open(el, featureTexts[id], 'show-feature')
});

//MAP

const pin = document.getElementById('pin');
const adressBox = document.getElementById('adressBox');

open(pin, adressBox, 'show-adress'); 

