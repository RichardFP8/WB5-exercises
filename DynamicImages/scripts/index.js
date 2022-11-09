"use strict";

let imageFiles = [
    {name: "./images/cloudsInDawn.jpg" , description: "View of the clouds at sundawn", value:"cloudsInDawn"},
    {name: "./images/mountainInSun.jpg" , description: "A day in the mountains", value:"mountainInSun"},
    {name: "./images/sundawn.jpg" , description: "Ending the day with the sun", value:"viewOfSundawn"},
    {name: "./images/sunflowersInSun.jpg" , description: "Sunflowers getting that energy", value:"sunflowersInSun"},
    {name: "./images/wheatAtDawn.jpg" , description: "Wheat enjoying their time", value:"wheatAtDawn"}
]
window.onload = function(){
    createDropDownOptions();
    const addImageBtn = document.getElementById("addImage");
    const clearAllBtn = document.querySelector("input[value='CLEAR']");
    addImageBtn.onclick = addImage;
    clearAllBtn.onclick = clearAll;
}
function createDropDownOptions(){
    const getDropdown = document.getElementById("listOfImages");
    for(let i in imageFiles){
        let newOption = new Option(imageFiles[i].description, imageFiles[i].value);
        getDropdown.appendChild(newOption);
    }  
}
function addImage(){
    const valueOfDropdown = document.getElementById("listOfImages").value;
    const displayImage = document.querySelector("#showImages");
    for(let i in imageFiles){
        if(imageFiles[i].value === valueOfDropdown){
            let newImage = document.createElement("img");
            newImage.src = imageFiles[i].name;
            newImage.alt = imageFiles[i].description;
           
            displayImage.appendChild(newImage);
        }
    }
    return false;
}
function clearAll(){
    const imageDiv = document.getElementById("showImages");
    const allImages = document.querySelectorAll("div img");
    Array.from(allImages).forEach(img => imageDiv.removeChild(img));

}