// Code your solution in this file!
function distanceFromHqInBlocks(block) {
    const headquarters = 42;
    return Math.abs(block - headquarters);
}

function distanceFromHqInFeet(block) {    
    const feetPerBlock = 264;
    const distanceInBlocks = distanceFromHqInBlocks(block);
    return feetPerBlock * distanceInBlocks;
}

function distanceTravelledInFeet(start, destination) {    
    return Math.abs((destination - start) * 264);
}

function calculatesFarePrice(start, destination) {    
    const distanceTravelled = distanceTravelledInFeet(start, destination);
    let rideFare;
    if (distanceTravelled <= 400) {
        rideFare = 0;
    } else if (distanceTravelled > 400 && distanceTravelled <= 2000) {
        rideFare = (distanceTravelled - 400) * 0.02;
    } else if (distanceTravelled > 2000 && distanceTravelled <= 2500) {
        rideFare = 25;
    } else {
        rideFare = 'cannot travel that far';
    }
    return rideFare;
}