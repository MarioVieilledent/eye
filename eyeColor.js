let count = {
    b: 0,
    g: 0,
    l: 0
};

for (let i = 0; i < 10000000; i++) {
    switch (makeChild('lg')) {
        case 'b': count.b++; break;
        case 'g': count.g++; break;
        case 'l': count.l++; break;
    }
}

console.log(count);

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