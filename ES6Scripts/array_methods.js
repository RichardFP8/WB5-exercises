"use strict";
let cart = [
    {item: "Bread", price: 3.29, quantity: 2},
    {item: "Milk", price: 4.09, quantity: 1},
    {item: "T-Bone Steak", price: 12.99, quantity: 2},
    {item: "Baking Potato", price: 1.89, quantity: 6},
    {item: "Iceberg Lettuce", price: 2.06, quantity: 1},
    {item: "Ice Cream - Vanilla", price: 6.81, quantity: 1},
    {item: "Apples", price: 0.66, quantity: 6}
];
//transform function
function onlyNames(element){
    return element.item;
}
//process function
function displayElements(element){
    console.log(element);
}
//reduce/acumulated result function
function findTotalCost(totalPrice, element){
    return totalPrice + (element.price * element.quantity);
}
//create new array with just the item property
let onlyItemNames = cart.map(onlyNames);
//using reduce to add up the cost of all items in cart
let sum = cart.reduce(findTotalCost, 0);

let sortListNames = onlyItemNames.sort();

//display results
onlyItemNames.forEach(displayElements);
console.log(`Total price of cart: $${sum}.`);



