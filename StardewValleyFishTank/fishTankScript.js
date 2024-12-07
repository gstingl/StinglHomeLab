//Input season and weather then display fish and show the location and times
//Potentialy make a large array called "fish" and have an array of objects to iterate through

let currentSeason = 'spring';
let seasonSelect = document.getElementById("seasonSelect");
let currentWeather = 'sun';
let fishableFish = [];
let fishingButton = document.getElementById("goFishButton");

//first check if any fish in the 'fish' array have properties that match the
// current season or weather.


const fishList = {
    PufferFish: {
        location: ['Ocean', 'Ginger Island Oceans'],
        minTime: '12PM',
        maxTime: '4PM',
        season: 'summer',
        weather: 'sun',
},
    anchovy: {
        location: 'Ocean',
        minTime: '6AM',
        maxTime: '12AM',
        season: ['spring', 'fall'],
        weather: 'any',
},
    tuna: {
        location: ['Ocean', 'Ginger Island Oceans'],
        minTime: '6AM',
        maxTime: '7PM',
        season: ['summer', 'winter'],
        weather: 'any',
},
    sardine: {
        location: 'Ocean',
        minTime: '6AM',
        maxTime: '7PM',
        season: ['spring', 'fall', 'winter'],
        weather: 'any',
},
    bream: {
        location: ['River Town', 'River Forest'],
        minTime: '6AM',
        maxTime: '2AM',
        season: 'any',
        weather: 'any',
}};

//Checks fish properties are string or array and then checks if it matches the variable for season
const seasonCheck = (fishName) => {
    if (typeof fishList[fishName].season === 'string') {
        if (fishList[fishName].season === currentSeason || fishList[fishName].season === 'any') {
            return true;
        } else return false;
    } else {
        if (fishList[fishName].season.includes(currentSeason)) {
            return true;
        } else return false;
    };
};

//Checks fish properties are string or array and then checks if it matches the variable for weather
const weatherCheck = (fishName) => {
    if (typeof fishList[fishName].weather === 'string') {
        if (fishList[fishName].weather === currentWeather || fishList[fishName].weather === 'any') {
            return true;
        } else return false;
    } else {
        if (fishList[fishName].weather.includes(currentWeather)) {
            return true;
        } else return false;
    };
};

//Checks that both season and weather check are true and returns fish names
function fishSearch() {for(let fishName in fishList) {
    if(weatherCheck(fishName) === true && seasonCheck(fishName) === true) {
        fishableFish.push(fishName);
        const newFishObjects = {...fishableFish};
}}};

fishSearch();

function convertFish() {
    const newFishObjectList = {...fishableFish};
    return newFishObjectList;
};


const fishDisplay = Object.values(convertFish()).reduce((accum, currKey) => accum +
    `<div class="fish">
    <div class="fish_name">Type: ${currKey}</div>
    <div class="location">Location: ${fishList[currKey].location}</div>
    <div class="time">Time: ${fishList[currKey].minTime} to ${fishList[currKey].maxTime}</div>
    <img class="fishThumbnail" src="/StardewValleyFishTank/images/fish/${currKey}.png">
  </div>`, '');

function pasteToHtml() {document.getElementById('fishBox').innerHTML = fishDisplay};


seasonSelect.addEventListener("change", function(){
    currentSeason = seasonSelect.value;
    });

fishingButton.addEventListener("click", function(){
    pasteToHtml();
});






/*
const runCalc = document.querySelector('button');
runCalc.addEventListener('click', function fishSearch() {
    convertFish();
    fishDisplay();
});

*/