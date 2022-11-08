"use strict";
let courses = [
    {
    CourseId: "PROG100",
    Title: "Introduction to HTML/CSS/Git",
    Location: "Classroom 7",
    StartDate: "09/08/22",
    Fee: "100.00",
    },
    {
    CourseId: "PROG200",
    Title: "Introduction to JavaScript",
    Location: "Classroom 9",
    StartDate: "11/22/22",
    Fee: "350.00",
    },
    {
    CourseId: "PROG300",
    Title: "Introduction to Java",
    Location: "Classroom 1",
    StartDate: "01/09/23",
    Fee: "50.00",
    },
    {
    CourseId: "PROG400",
    Title: "Introduction to SQL and Databases",
    Location: "Classroom 7",
    StartDate: "03/16/23",
    Fee: "50.00",
    },
    {
    CourseId: "PROJ500",
    Title: "Introduction to Angular",
    Location: "Classroom 1",
    StartDate: "04/25/23",
    Fee: "50.00",
    }
];

//the parameter is for the element that find() is currently testing
function find_StartDate(element){
    if(element.CourseId === "PROG200"){
        return true;
    }
    // don't need the return false but I think it's good practice to
    else{
        return false;
    }
}
function find_titleCourse(element){
    if(element.CourseId === "PROJ500"){
        //it doesn't return any other specifics of that element; just that it passed the test
        // return element.Title;
        return true;
    }
    else{
        return false;
    }
}
function find_over50(element){
    if(Number(element.Fee) <= 50.00){
        return true;
    }
    else{
        return false;
    }
}
function find_coursesInC1(element){
    if(element.Location === "Classroom 1"){
        return true;
    }
}

//find the element; each are objects; find() calls function for each element
let startDate = courses.find(find_StartDate);
let titleCourse = courses.find(find_titleCourse);
let titlesOver50 = courses.filter(find_over50);
let titles50Length = titlesOver50.length;
let classroom1 = courses.filter(find_coursesInC1);

//display the startDate
console.log(startDate.StartDate);
console.log(titleCourse.Title);

console.log("Under $50:");
if(titles50Length !== 0){  
    for(let i = 0; i < titles50Length; i++){
        console.log(titlesOver50[i].Title);
    }    
}

console.log("All classes in Classroom 1:");
if(classroom1.length != 0) { console.log(classroom1);}

