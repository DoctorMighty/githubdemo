var Cats = ["Milk", "Sope", "Maple", "Tom", "Jerry", "Roach", "Derrel", "Pinky", "Spork", "Brain"];

for (i = 0; i < Cats.length; i++) {
    console.log(Cats[i]);
}

//array 2

var inventory = [
    ["Milk", 10],
    ["Bread", 15],
    ["Tomatos", 20],
    ["Cheese", 25],
    ["Soda", 30],
    ["Fish", 35],
    ["Steak", 40],
    ["Apple", 50],
    ["Bannanas", 55],
    ["Peppers", 60]
]

function add() {
    var input = document.getElementById('userInput').value;
    inventory.forEach(function (array) {
        if (input == array[0]) {
            array[1] += 1;
        }
    });
}

function sub() {
    var input = document.getElementById('userInput').value;
    for (let i = 0; i < inventory.length; i++) {
        if (input == inventory[i][0]) {
            inventory[1][1] -= 1;
        }
    }
}