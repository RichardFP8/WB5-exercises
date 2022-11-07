"use strict";

const mealNum = 1;
const timeOfMenu = ["Breakfast", "Lunch", "Dinner"];
const menu = [
    [
        { item: "Sausage and Egg Biscuit", price: 3.69 },
        { item: "Bacon and Egg Biscuit", price: 3.49 },
        { item: "Ham and Egg Biscuit", price: 3.29 }
    ],
    [
        { item: "Burger", price: 4.55 },
        { item: "Tacos", price: 4.12 },
        { item: "Sushi", price: 8.37 },
        { item: "Sandwich", price: 5.75 }
    ],
    [
        { item: "Spaghetti", price: 5.49 },
        { item: "Cheesecake", price: 1.69 },
        { item: "Chicken Salad", price: 6.79 },
        { item: "Chocolate cake", price: 1.37 },
        { item: "Salmon", price: 7.48 }
    ]
];

for (let i in menu) {
    if (i == mealNum) {
        console.log(timeOfMenu[i] + " menu");
        console.log("-----------");
        menu[i].forEach(item => {
            console.log(`$${item.price} for ${item.item}`);
        });
    }
}