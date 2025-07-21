/*let gold = 100
let buildingName = 'Tower'
let costGold = 30

if (gold >= costGold) {
    gold -= costGold
    console.log(`${buildingName}: work complete`);
} else {
    console.log(`${buildingName}: not enough recources`);
}

let buildingName = 'Blacksmith'
let costGold = 140

if (gold >= costGold) {
    gold -= costGold
    console.log(`${buildingName}: work complete`);
} else {
    console.log(`${buildingName}: not enough recources`);
}*/


let gold = 100;

function createBuilding(buildingName, costGold) {
    const hasEnoughGold = gold >= costGold;
    if (hasEnoughGold) {
        gold -= costGold;
        console.log(`${buildingName}: work complete!`);
    } else {
        console.log(`${buildingName}: not enough resources!`);
    }
}

function increaseResource(currentAmount, increment = 10) {
    const newAmount = currentAmount + increment;
    return newAmount;
}

// Строим здания
createBuilding('Tower', 30);
createBuilding('Blacksmith', 140);

// Увеличиваем золото
gold = increaseResource(gold, 100);
console.log(gold); // Выводим текущее количество золота