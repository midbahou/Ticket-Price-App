

// The area in which the plants are contained is circular, with a radius of 5 meters.
// Each plant requires a minimum space of 0.8 square meters.
// The area is starting with 20 plants.
// The plants double in number every week.

//*TODO:  Predict the plant growth after a specific number of weeks.
const PI = 3.1415;
const totalArea = PI * 5 ** 2; // this is the total area in the garden
const areaEachPlant = 0.8; // this is the area of each plant
console.log(`The area is: ${totalArea.toFixed(2)} square meters`); // 78.54 square meters

let totalPlantNum = totalArea / areaEachPlant; // this is total plant number that can go in the total area of the garden
console.log(`The maximum number of plants the garden can hold: ${totalPlantNum.toFixed(0)} plants`); 


// let numPlantWeek2 = startNumPlant * 2;
// let numPlantWeek3 = numPlantWeek2 * 2;
// let numPlantWeek4 = numPlantWeek3 * 2;

let startNumPlant = 20;
// let week = parseInt(prompt("Enter the week number (from 1 to 4):"));
let week = 10;
if (week === 1) { 
    console.log(`The total Plant Growth for week ${week} is: ${startNumPlant = startNumPlant} plants`); // 20
    
} else if (week === 2) {
    console.log(`The total Plant Growth for week ${week} is: ${startNumPlant *= 2} plants`); // 40
    
} else if (week === 3) {
    console.log(`The total Plant Growth for week ${week} is: ${startNumPlant *= 4} plants`); // 80

} else if (week === 4) {
    console.log(`The total Plant Growth for week ${week} is: ${startNumPlant *= 8} plants`); // 160

} else {
    console.log(`Invalid data: ${startNumPlant = undefined}`);
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
console.log(`This is The maximum number of plants that can be planted (not greater than 80%): ${plantNum80.toFixed(0)}`); // 79 plants for 80%
console.log(`this is for 50%: ${(totalPlantNum * 0.5).toFixed(0)}`); // 49 plants or 50%


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


// ----------------------------------------- Part 2: Thinking Bigger -----------------------------------------------------------------------
// Using the logic you have already created, determine:
//*TODO: The amount of additional space that would be required if the scientists were to start with 100 plants, and did not prune them for 10 weeks.
console.log(`This is with a starting plants of 100 ================================`);

let startPlants = 100;
let areaFor100 = startPlants * 0.8;
let startArea = 100;

let growth = startPlants * (2 ** (week));
console.log(`The growth total after ${week} weeks is: ${growth} plants`);

let newTotalArea = growth * 0.8;
console.log(`This is the total area after ${week} weeks: ${newTotalArea} square meters`);


//*TODO: If the space remained circular, what would be the radius of this expanded garden?
let newRadius = Math.sqrt((newTotalArea / PI));
console.log(`This is the newRadius: ${newRadius.toFixed(0)} meters`);




// ----------------------------------------- Part 3: Errors in Judgement -----------------------------------------------------------------------

try {
    if (newTotalArea > totalArea) {
        throw new Error(`The garden is too small! The required area is ${newTotalArea} square meters. But the available area is ${(totalArea).toFixed(0)} square meters.`);  
    }
    console.log("Plants after 10 weeks:", growth);
  console.log("Total area required:", newTotalArea, "square meters");
  console.log("Garden capacity is sufficient.");
} catch (error) {
    console.error("Error: ", error.message);
}
