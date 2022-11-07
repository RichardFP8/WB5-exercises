"use strict";
let products = [
    { product: "Gummy Worms", price: 5.79 },
    { product: "Plain M&Ms", price: 2.89 },
    { product: "Peanut M&Ms", price: 2.89 },
    { product: "Swedish Fish", price: 3.79 },
    { product: "Gummy Worms", price: 5.49 },
    { product: "Plain M&Ms", price: 4.29 },
    { product: "Peanut M&Ms", price: 12.19 },
    { product: "Swedish Fish", price: 9.09 },
    { product: "Gummy Worms", price: 1.99 },
    { product: "Plain M&Ms", price: 6.59 }
];

//find candies less than 4
let candiesLessThanFour = products.filter(element => {
    if (element.price < 4.00) { return true; }
    else { return false; }
});
if (candiesLessThanFour.length !== 0) {
    candiesLessThanFour.forEach(element => console.log(element));
}

//find candies with M&M
let candiesWithMandM = products.filter(element =>{
    //find the first capitalized M, assuming that it's the only M in the string(my method isn't that efficient)
    let findFirstM = element.product.indexOf("M");
    //use that to get the substring of M&Ms
    let getMandM = element.product.substring(findFirstM, findFirstM + 4);
    if(getMandM === "M&Ms" ){ return element; }
    // else { return false; }
} );
if(candiesWithMandM.length !== 0){
    candiesWithMandM.forEach(element => console.log(element));
}

//find Swedish Fish
let swedishFish = products.findIndex(element =>{
    if(element.product === "Swedish Fish"){ return true; }
    else { return false; }
});

if(swedishFish !== -1){
    console.log(`We do have ${products[swedishFish].product} for $${products[swedishFish].price}`);
}

