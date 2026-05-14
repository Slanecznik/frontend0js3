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




const car = {
    brend: "mazda",
    model: "6",
    "year": 2015,
    millage: 235000,
    color: "red",
    engine: {
        type: 'petrol',
        "volume": 2.0,
        power: 150,
        fuelGrade: '95',
    },
    price: 15000,
    transmission: 'automatic',
    isTaxi: false,
    prev_owners: ["Daniel", "Natalia", "Elena"]
}


const pet = {
    name: 'Strider',
    happiness: 50,
    hunger: 50,
    sayHi: function () {
        console.log("Meow!!!")
    },
    checkStatus: function () {
        console.log(`Счастье: ${pet.happiness}, голод: ${pet.hunger}`)
    },
    feedPet: function (foodQuantity) {
        pet.hunger = pet.hunger - foodQuantity
        if (pet.hunger < 0) {
            pet.hunger = 0
        }
        console.log('Питомец покормлен!')
    },
    playWithPet: function () {
        pet.happiness = pet.happiness + 10
        if (pet.happiness > 100) {
            pet.happiness = 100
        }
        console.log('Питомец стал счастливее!')
    }
}

const murka = {
    name: 'Murka',
    happiness: 50,
    hunger: 50,  // голод
    sayHi: function () {
        console.log("Meow!!!")
    },
    checkStatus: function () {
        console.log(`Счастье: ${murka.happiness}, голод: ${murka.hunger}`)
    },
    feedPet: function (foodQuantity) {
        murka.hunger = murka.hunger - foodQuantity
        if (murka.hunger < 0) {
            murka.hunger = 0
        }
        console.log('Питомец покормлен!')
    },
    playWithPet: function () {
        murka.happiness = murka.happiness + 10
        if (murka.happiness > 100) {
            murka.happiness = 100
        }
        console.log('Питомец стал счастливее!')
    }
} 