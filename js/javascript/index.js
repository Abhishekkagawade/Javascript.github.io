//console.log("wel come to peacewisdom IT hub")
// var a = 8;
// var b = 12;
// if (a + b < 20) {
//     console.log("less then 20")
// } else if (a + b > 20) {
//     console.log("greater then 20")
// } else {
//     console.log("Equal")
// }



//LOOPS
for (var i = 0; i <= 10; i = i + 2) {
    if (i != 0) {
        console.log(i);
    }
} //for each
let f = ["a", "b", "c"];
f.forEach(a => console.log(a));
//for in
let ff = ["a", "b", "c"];
for (a in ff) {
    console.log(a);
}
//while Loop
var a = 0;
while (a <= 7) {
    console.log(a);
    a++
}
//operator
var s = 10;

console.log(++s);
//airthmetic
var q = 34;
var w = 43;
console.log(" the sum of " + q + " and " + w + "  is " + (q + w));
console.log(" the diff of " + q + " and " + w + "  is " + (q - w));
console.log(" the multi  of " + q + " and " + w + "  is " + (q * w));
console.log(" the div " + q + " and " + w + "  is " + (q / w));
//shift operater
var num = 1,
    num2 = 4;
console.log(1 << 4);
//hoisting
console.log(v);
var v = 7676; //undifined
//object Creation
let animal = {
    name: "Abhi",
    color: "danger",
    eat() {
        console.log(`${this.name} is eatinng`)
    }
}
animal.eat();
console.log(animal["color"]);
//arrays
var arr = [1, 2, 3, 4, 5, 5, 7];
arr.push(677);
arr.shift()
console.log(arr)
console.log(arr.pop())