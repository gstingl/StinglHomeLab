

//let currentSeason = 'spring';
//let currentWeather = 'sun';
let seasonSelect = document.getElementById("seasonSelect");
let weatherSelect = document.getElementById("weatherSelect");
let fishableFish = [];
let fishingButton = document.getElementById("goFishButton");
let fishableDisplay = document.getElementById('fishBox');

fishingButton.addEventListener('click', function(){
    console.log(seasonSelect);
    console.log(weatherSelect);
    fishableFish = [];
    fishSearch();
    console.log(fishableFish);
    displayFishCard();
});

seasonSelect.addEventListener('change', function(){
    seasonSelect = document.getElementById("seasonSelect").value;
});

weatherSelect.addEventListener('change', function(){
    weatherSelect = document.getElementById("weatherSelect").value;
});

const fishList = {
    pufferFish: {
        name: 'Pufferfish',
        location: ['Ocean', 'Ginger Island Oceans'],
        minTime: '12PM',
        maxTime: '4PM',
        season: 'summer',
        weather: 'sun',
},
    anchovy: {
        name: 'Anchovy',
        location: 'Ocean',
        minTime: '6AM',
        maxTime: '12AM',
        season: ['spring', 'fall'],
        weather: 'any',
},
    tuna: {
        name: 'Tuna',
        location: ['Ocean', 'Ginger Island Oceans'],
        minTime: '6AM',
        maxTime: '7PM',
        season: ['summer', 'winter'],
        weather: 'any',
},
    sardine: {
        name: 'Sardine',
        location: 'Ocean',
        minTime: '6AM',
        maxTime: '7PM',
        season: ['spring', 'fall', 'winter'],
        weather: 'any',
},
    bream: {
        name: 'Bream',
        location: ['River Town', 'River Forest'],
        minTime: '6AM',
        maxTime: '2AM',
        season: 'any',
        weather: 'any',
}};

//Checks fish properties are string or array and then checks if it matches the variable for season
const seasonCheck = (fishName) => {
    if (typeof fishList[fishName].season === 'string') {
        if (fishList[fishName].season === seasonSelect || fishList[fishName].season === 'any') {
            return true;
        } else return false;
    } else {
        if (fishList[fishName].season.includes(seasonSelect)) {
            return true;
        } else return false;
    };
};

//Checks fish properties are string or array and then checks if it matches the variable for weather
const weatherCheck = (fishName) => {
    if (typeof fishList[fishName].weather === 'string') {
        if (fishList[fishName].weather === weatherSelect || fishList[fishName].weather === 'any') {
            return true;
        } else return false;
    } else {
        if (fishList[fishName].weather.includes(weatherSelect)) {
            return true;
        } else return false;
    };
};

//Checks that both season and weather check are true and returns fish names
function fishSearch() {for(let fishName in fishList) {
    if(weatherCheck(fishName) === true && seasonCheck(fishName) === true) {
        //fishableFish.push(fishName);
        return fishName;
}}};

//use filter function on displayFishCard to filter entire array of fish based returning true for the fishSearch function

const displayFishCard = () => {
    fishableObjectList.forEach(fish => {
        const fishCard = document.createElement("div");
        fishCard.innerHTML = 
            `<div class="fish">
            <div class="fish_name">Type: ${fish.name}</div>
            <div class="location">Location: ${fish.location}</div>
            <div class="time">Time: ${fish.minTime} to ${fish.maxTime}</div>
            <img class="fishThumbnail" src="/StardewValleyFishTank/images/fish/${fish.name}.png">
            </div>`, ''
    })
}

/*function convertFish() {
    const newFishObjectList = {...fishableFish};
    return newFishObjectList;
};
*/

/*
function fishDisplay() {
    fishableFish.forEach((fishElement) =>
    `<div class="fish">
    <div class="fish_name">Type: ${fishElement}</div>
    <div class="location">Location: ${fishList[fishElement].location}</div>
    <div class="time">Time: ${fishList[fishElement].minTime} to ${fishList[fishElement].maxTime}</div>
    <img class="fishThumbnail" src="/StardewValleyFishTank/images/fish/${fishElement}.png">
  </div>`, '');
}

console.log(fishList[bream]);

*/