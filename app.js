/* Imports */
import { getBeanies, getAstroSigns } from './fetch-utils.js';
//import { renderAstroSignsOption, renderBeanie } from './render-utils.js';

/* Get DOM Elements */
//const notificationDisplay = document.getElementById('notification-display');
const beanieList = document.getElementById('beanie-list');

/* State */
let error = null;
let count = 0;
let astroSigns = [];
//let beanie = [];

/* Events */
window.addEventListener('load', async () => {
    const response = await getAstroSigns();
    error = response.error;
    astroSigns = response.data;
    //on load populate dropdown with astrosigns
});

async function findBeanies(name, astroSign) {
    const response = await getBeanies(name, astroSign);

    error = response.error;
    count = response.count;
    beanieList = response.data;
}

/* Display Functions */
function displayAstroSigns() {
    //render each astro sign's dom element
}

// (don't forget to call any display functions you want to run on page load!)
