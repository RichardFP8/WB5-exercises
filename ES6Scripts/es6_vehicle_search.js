"use strict";
let vehicles = [
    {
        color: "Silver",
        type: "Minivan",
        registrationState: "CA",
        licenseNo: "ABC-101",
        registrationExpires: new Date("3-10-2022"),
        capacity: 7
    },
    {
        color: "Red",
        type: "Pickup Truck",
        registrationState: "TX",
        licenseNo: "A1D-2NC",
        registrationExpires: new Date("8-31-2023"),
        capacity: 3
    },
    {
        color: "White",
        type: "Pickup Truck",
        registrationState: "TX",
        licenseNo: "A22-X00",
        registrationExpires: new Date("9-31-2023"),
        capacity: 6
    },
    {
        color: "Red",
        type: "Car",
        registrationState: "CA",
        licenseNo: "ABC-222",
        registrationExpires: new Date("12-10-2022"),
        capacity: 5
    },
    {
        color: "Black",
        type: "SUV",
        registrationState: "CA",
        licenseNo: "EEE-222",
        registrationExpires: new Date("12-10-2021"),
        capacity: 7
    },
    {
        color: "Red",
        type: "SUV",
        registrationState: "TX",
        licenseNo: "ZZ2-101",
        registrationExpires: new Date("5-30-2022"),
        capacity: 5
    },
    {
        color: "White",
        type: "Pickup Truck",
        registrationState: "TX",
        licenseNo: "CAC-7YT",
        registrationExpires: new Date("1-31-2022"),
        capacity: 5
    },
    {
        color: "White",
        type: "Pickup Truck",
        registrationState: "CA",
        licenseNo: "123-ABC",
        registrationExpires: new Date("3-31-2023"),
        capacity: 5
    }
];

let findRedV = vehicles.filter(element => {
    if (element.color === "Red") { return true; }
});

let currentDateMilliesecs = (new Date()).getTime();
let expiredRegistrationsV = vehicles.filter(element => {
    if (currentDateMilliesecs > (element.registrationExpires).getTime()) {
        return true;
    } else { return false; }
});

let holdSix = vehicles.filter(element => {
    if(element.capacity >= 6){ return true; }
});


let endWithTripleTwo = vehicles.filter(element => {
    // let hyphen = element.indexOf("-")
    if(element.licenseNo.slice(-3) === "222"){
        return true;
    }
})

console.log(findRedV);
console.log(expiredRegistrationsV);
console.log(holdSix);
endWithTripleTwo.forEach(element => console.log(element.type + " has a licens plate of: " + element.licenseNo));