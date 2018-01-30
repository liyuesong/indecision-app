var nameVar = "yuesongli";
var nameVar = "Mike";
console.log('nameVar', nameVar);

let nameLet = "Jane";
console.log('nameLet', nameLet);

const nameConst = "Frank";
console.log('nameComst', nameConst);

// function getPetName(petName) {
//     var petName = "Hal";
//     return petName;
// }

// const petName = getPetName("H");
// console.log(petName);

// Block scoping
var fullName = "Yuesong Li";

if (fullName) {
    var firstName = fullName.split(' ')[0];
    console.log(firstName);
}
console.log(firstName);