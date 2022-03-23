// Code your solutions in this file
// Code along
// for (let age = 30; age < 40; age++) {
//     console.log(`I'm ${age} years old. Happy Birthday to me!`);
// }

//code along 2
// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//     for (let i = 0; i < gifts.length; i++) {
//         console.log(`Wrapped ${gifts[i]} and added a bow!`);
//     }
//     return gifts;
// }

// wrapGifts(gifts);

let tyArray = [];
function writeCards(guestNames = ["Juniper", "Julien", "Josh"], giftType = 'surprise') {
    for (let n = 0; n < guestNames.length; n++) {
        tyArray.push(`Thank you, ${guestNames[n]}, for the wonderful ${giftType} gift!`);
    }
    return tyArray;
}

function countDown() {
    let number = 10
    while (number >= 0) {
    console.log(number--) }
}