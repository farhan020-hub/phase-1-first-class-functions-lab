// Code your solution in this file!

const returnFirstTwoDrivers = function(){

    return ['Antonia', 'Nuru'];
}



const returnLastTwoDrivers = function(){

    return ['Amari', 'Mo'];
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];



function createFareMultiplier(multiplier) {
    return function(fare) {
        return fare * multiplier;
    };
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);


const selectDifferentDrivers = function(returnFirstTwoDrivers, returnLastTwoDrivers) {
    return returnLastTwoDrivers(returnFirstTwoDrivers);
};
