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


//in the filter function: we are comparing an true/false with -1; how does this make sense? Even with strict inequality it works.
/* Observations:
1) I changed the arrow functions to anonymous and it didn't work for WHAT reason though
2) There are two functions being executed; the filter for all the objects in academyMembers array;
 the findIndex for all the strings IN the films array OF the object's film property;
3) What is findIndex doing: It's only comparing the first character with "A"; we need to give it a function; 
    the function is saying TRUE: The first character is A| FALSE: It isn't
    it's input, is the film's array; is being called to iterate over it;we gave it a condition; if true it gives us the index of that element
    since it was TRUE; the element is between 0-x; findIndex returns that index, not true or false;
4) Because findIndex returns an integer, it's being compared with -1; if true the object is put into the new array, which only one object passed
5) Lots of (), it confused me a lot; 
*/
// let filteredfilms3 = academyMembers.filter( actor =>
//     (actor.films.findIndex(f => f.substring(0,1) === "A" ) != -1)
// );

// console.log(filteredfilms3);

let filteredfilms = academyMembers.filter(hasFilmThatStartsWithA);
function hasFilmThatStartsWithA(actor){
   return (actor.films.findIndex(filmStartsAtAFunction) != -1);
}
function filmStartsAtAFunction(aFilm){
    return aFilm.substring(0,1) == "A";
}
console.log(filteredfilms);

let filteredfilms2 = academyMembers.filter(doesActorHaveAtLeastOneFilmWithA);
function doesActorHaveAtLeastOneFilmWithA(actor) {  
    for (let f in actor.films) {
        if (actor.films[f].substring(0, 1) == "A") {
            return true;   
        }
    }
    return false;
}
console.log(filteredfilms2);

