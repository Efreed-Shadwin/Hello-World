"use strict"
var studentMajor = "BIOL" 
var studentName = "Sidney"
var classification
var location 
if (studentMajor= "BIOL"){
    classification = "Biology"
    location = "Science Bldg, Room 310"
}
else if (studentMajor = "CSCI"){
    classification = "Computer Science"
    location = "Sheppard Hall, Room 314"
}
else if (studentMajor = "ENG"){
    classification = "English"
    location = "Kerr Hall, Room 201"
}
else if (studentMajor = "HIST"){
    classification = "History"
    location = "Kerr Hall, Room 114"
}
else if (studentMajor = "MKT"){
    classification = "Marketing"
    location = "Westly Hall, Room 310"
}
console.log("Student: " +studentName)
console.log("Major: " +classification)
console.log("Advising location: " + location)