function change(id) {
    id.innerHTML = "clicked"
}

function parent() {
    console.log("hello");

    function child() {
        console.log("hii");
    }
    return child;
}
parent()(); //clousers
let add = function(x) {
    return function(y) {
        console.log(x + y);
    }
}
let add1 = add(4);
add1(67);
add1(7675);
//arrow functions//curring
let mul = (a) => (y) => console.log(a * y);
let mul1 = mul(10);
mul1(78)
mul1(54)
    //function composition f(g(x))