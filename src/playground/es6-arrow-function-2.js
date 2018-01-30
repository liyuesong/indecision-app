// arguments object - no longer bound with arrow functions

// const add  = function (a, b) {
//     console.log(arguments)
//     return a + b;
// }
const add = (a, b) => {
    // console.log(arguments);
    return a + b;
}
console.log(add(55, 1, 100));

// this keyword - no longer bound with arrow functions
const user = {
    name: 'yuesong',
    cities: ['Pittsburgh', 'San Jose', 'Kaifeng'],
    // printPlacesLived: function () {
    //     // console.log(this.name);
    //     // console.log(this.cities);

    //     // const that = this;

    //     this.cities.forEach((city) => {
    //         console.log(this.name + 'yuesong has lived in ' + city);
    //         // console.log(that.name + 'yuesong has lived in ' + city);
    //     });
    // }
    printPlacesLived() {
        // return this.cities.map((city) => {
        //     return this.name + ' has lived in ' + city;
        // });
        return this.cities.map((city) => this.name + ' has lived in ' + city);
        // this.cities.forEach((city) => {
        //     console.log(this.name + 'yuesong has lived in ' + city);
        // });
    }
};
console.log(user.printPlacesLived());

const multiplier = {
    numbers: [1, 6],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map((num) => num * this.multiplyBy);
    }
}
console.log(multiplier.multiply());