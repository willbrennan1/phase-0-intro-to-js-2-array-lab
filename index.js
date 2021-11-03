const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    return cats.push("Ralph");
}

function destructivelyRemoveLastCat() {
    return cats.pop();
}

function destructivelyPrependCat() {
    return cats.unshift('Bob');
}

function destructivelyRemoveFirstCat() {
    return cats.shift();
}

function appendCat(name) {
    const newCats = [...cats, 'Broom'];
    return newCats;
}

function prependCat (name) {
    const newCats = ['Arnold', ...cats];
    return newCats;
}

function removeLastCat() {
    return removeLastCat = cats.slice(0,-1);
}

function removeFirstCat() {
    return removeFirstCat = cats.slice(1);
}












// Write your solution here!
// const cats = ["Milo", "Otis", "Garfield"]


// function destructivelyAppendCat() {
//     cats.push("Ralph")
// }

// function destructivelyPrependCat() {
//     cats.unshift("Bob")
// }

// function destructivelyRemoveLastCat() {
//     cats.pop();
// }

// function destructivelyRemoveFirstCat() {
//     cats.shift();
// }

// function appendCat() {
//     return appendCat = [...cats, "Broom"];
// }

// function prependCat() {
//     return prependCat = ["Arnold", ...cats]
// }

// function removeLastCat() {
//     return removeLastCat = cats.slice(0,-1);
// }

// function removeFirstCat() {
//     return removeFirstCat = cats.slice(1);
// }