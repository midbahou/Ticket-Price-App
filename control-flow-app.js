

// The area in which the plants are contained is circular, with a radius of 5 meters.
// Each plant requires a minimum space of 0.8 square meters.
// The area is starting with 20 plants.
// The plants double in number every week.

//*TODO:  Predict the plant growth after a specific number of weeks.
const PI = 3.1415;
const totalArea = PI * 5 ** 2; // this is the total area in the garden
const areaEachPlant = 0.8; // this is the area of each plant
console.log(`The area is: ${totalArea.toFixed(2)} square meters`);

let totalPlantNum = totalArea / areaEachPlant; // this is total plant number that can go in the total area of the garden
console.log(`The maximum number of plants the garden can hold: ${totalPlantNum.toFixed(0)} plants`);


// let numPlantWeek2 = startNumPlant * 2;
// let numPlantWeek3 = numPlantWeek2 * 2;
// let numPlantWeek4 = numPlantWeek3 * 2;

let startNumPlant = 20;
let week = parseInt(prompt("Enter the week number (from 1 to 4):"));

if (week === 1) { 
    console.log(`The total Plant Growth for week ${week} is: ${startNumPlant = startNumPlant} plants`);
    
} else if (week === 2) {
    console.log(`The total Plant Growth for week ${week} is: ${startNumPlant *= 2} plants`);
    
} else if (week === 3) {
    console.log(`The total Plant Growth for week ${week} is: ${startNumPlant *= 4} plants`);

} else if (week === 4) {
    console.log(`The total Plant Growth for week ${week} is: ${startNumPlant *= 8} plants`);

} else {
    console.log(`Invalid data`);
}
console.log(startNumPlant);



//*TODO: Implement control flow to make decisions on whether the plants should be:
// *? Pruned, to stop them from exceeding the capacity of the garden.
//       - This condition should be met if the plant count after the given number of weeks is greater than 80% of the maximum capacity of the garden.
// *? Monitored, if they are growing at an acceptable rate.
//       - This condition should be met if the plant count is between 50% and 80% of the maximum capacity of the garden after the given number of weeks.
// *? Planted, if there is room to plant more plants.
//       - This condition should be met if the plant count after the given number of weeks is less than 50% of the maximum capacity of the garden.

let capacity80 = totalArea * 0.8;
let plantNum80 = totalPlantNum * 0.8;
console.log(`This is The maximum number of plants that can be planted (not greater than 80%): ${plantNum80.toFixed(0)}`);
console.log(`this is for 50%: ${(totalPlantNum * 0.5).toFixed(0)}`);


if (startNumPlant > plantNum80) {
    console.log(`PRUNED! Please stop planting`);
    alert(`PRUNED! Please stop planting`);
    
} else if (startNumPlant >= (totalPlantNum * 0.5)) {
    console.log(`MONITORED! Please Moniture if they are growing at an acceptable rate`);
    alert (`MONITORED! Please Moniture if they are growing at an acceptable rate`);

} else if (startNumPlant < (totalPlantNum * 0.5)) {
    console.log(`PLANTED! Please Plant More`);
    alert (`PLANTED! Please Plant More`);

} else {
    console.log("Not valid data");
    
}