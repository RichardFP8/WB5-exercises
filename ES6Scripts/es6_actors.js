"use strict";

let academyMembers = [
    {
        memID: 101,
        name: "Bob Brown",
        films: ["Bob I", "Bob II", "Bob III", "Bob IV"]
    },
    {
        memID: 142,
        name: "Sallie Smith",
        films: ["A Good Day", "A Better Day"]
    },
    {
        memID: 187,
        name: "Fred Flanders",
        films: ["Who is Fred?", "Where is Fred?",
            "What is Fred?", "Why Fred?"]
    },
    {
        memID: 203,
        name: "Bobbie Boots",
        films: ["Walking Boots", "Hiking Boots",
            "Cowboy Boots"]
    },
];

let actor187 = academyMembers.find(actor => {
    if (actor.memID === 187) { return true; }
    else { return false; }
});
let atLeastThreeFilms = academyMembers.filter(actors => {
    if (actors.films.length >= 3) { return true; }
});
let findBob = academyMembers.find(actor => {
    if (actor.name.substring(0, 4) === "Bob ") { return true; }
    else { return false; }
});
let findFilmWithA = academyMembers.filter(actor => {
    for(let i in actor.films){
        if(actor.films[i].charAt(0) === "A"){ return actor; }
    }
});

console.log(actor187.name);
atLeastThreeFilms.forEach(element => console.log(element.name));
console.log(findBob.name);
findFilmWithA.forEach(element => {console.log(element.name)});

