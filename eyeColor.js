let count = {
    b: 0,
    g: 0,
    l: 0
};

const brownProp = 88.0;
const blueProp = 10.0;
const greenProp = 2.0;

const gens = 1000;

let pops = [];
pops.push(makePopulation(100000));
displayStats(pops[0]);

for (let i = 1; i < gens; i++) {
    pops.push(makeNestGeneration(pops[i-1]));
    displayStats(pops[i]);
    console.log(pops[i].length);
}

// for (let i = 0; i < 10000000; i++) {
//     switch (makeChild('lg')) {
//         case 'b': count.b++; break;
//         case 'g': count.g++; break;
//         case 'l': count.l++; break;
//     }
// }

// console.log(count);

function makeNestGeneration(population) {
    let nextGen = [];
    for (let i = 0; i < population.length; i++) {
        const persA = Math.floor(Math.random() * population.length);
        const persB = Math.floor(Math.random() * population.length);
        const couple = population[persA] + population[persB];
        nextGen.push(makeChild(couple));
    }
    return nextGen;
}

function displayStats(population) {
    let brown = 0;
    let blue = 0;
    let green = 0;
    population.forEach(p => {
        switch(p) {
            case 'b': brown++; break;
            case 'g': green++; break;
            case 'l': blue++; break;
        }
    });
    const total = brown + blue + green;
    console.log(`${(brown / total * 100.0).toFixed(2)} brown`);
    console.log(`${(blue / total * 100.0).toFixed(2)} blue`);
    console.log(`${(green / total * 100.0).toFixed(2)} green`);
    console.log(`\n`);
}

function makePopulation(n) {
    let list = [];
    for (let i = 0; i < n; i++) {
        list.push(makePerson());
    }
    return list;
}

function makePerson() {
    const rand = Math.random() * 100;
    if (rand < brownProp) {
        return 'b';
    } else if (rand < brownProp+blueProp) {
        return 'l';
    } else {
        return 'g';
    }
}

function makeChild(parents) {
    const rand = Math.random() * 100;
    if (parents === 'bb') {
        if (rand < 75) {
            return 'b';
        } else if (rand < 75+18.75) {
            return 'g';
        } else {
            return 'l';
        }
    } else if (parents === 'gb' || parents == 'bg') {
        if (rand < 50) {
            return 'b';
        } else if (rand < 50+37.5) {
            return 'g';
        } else {
            return 'l';
        }
    } else if (parents === 'lb' || parents == 'bl') {
        if (rand < 50) {
            return 'b';
        } else if (rand < 100) {
            return 'l';
        } else {
            return 'g';
        }
    } else if (parents === 'gg') {
        if (rand < 75) {
            return 'g';
        } else if (rand < 100) {
            return 'l';
        } else {
            return 'b';
        }
    } else if (parents === 'gl' || parents == 'lg') {
        if (rand < 50) {
            return 'g';
        } else if (rand < 100) {
            return 'l';
        } else {
            return 'b';
        }
    } else if (parents === 'll') {
        if (rand < 99) {
            return 'l';
        } else if (rand < 100) {
            return 'g';
        } else {
            return 'b';
        }
    }
}