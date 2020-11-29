'use strict';

// Global variable for my hours to plan my work, declared. //
const t4Hours = {
    
    "0100": "",
    "0200": "",
    "0300": "",
    "0400": "",
    "0500": "",
    "0600": "",
    "0700": "",
    "0800": "",
    "0900": "",
    "1000": "",
    "1100": "",
    "1200": "",
    "1300": "",
    "1400": "",
    "1500": "",
    "1600": "",
    "1700": "",
    "1800": "",
    "1900": "",
    "2000": "",
    "2100": "",
    "2200": "",
    "2300": "",
    "0000": "",

};


// Local Storage for my hours available to plan in my work day. //
$(document).ready(function() {
    
    if(!localStorage.getItem('t4Hours')) {
       
        tasksUpdated(t4Hours);

    } 
    
    else {
        
        tasksUpdated(JSON.parse(localStorage.getItem('t4Hours')));
    
    };
});


// Using https://momentjs.com/ I am having trouble with this section. I have to refresh the page to get the accurate time.//
// $('#currDate').text(moment().format('YYYY-' + 'MM-' + 'DD') + moment().format(' dddd  ') + moment().format('LTS'));
$('#currDate').text(moment().format());

let counter = 1;

for(const property in t4Hours){
    
    let taskEntered = "#anyTask" + counter;
    
    $(taskEntered).text(t4Hours[property]);
    
    let clockTime = "#clock" + counter;
    
    let theMoment = moment().hour();
    
    let myHours = $(clockTime).text();
    
    let schedTask = strungHours(myHours);

        // Distinguishing whether the task/event has passed or not.  Keep it simple! //
        if (schedTask < theMoment) {
           
            $(taskEntered).addClass("past");

        }
        
        else if (schedTask > theMoment) {
            
            $(taskEntered).addClass("future");

        }
        
        else {
            
            $(taskEntered).addClass("current");

        };

        counter++; // Increments needed for arguments: past, present, future.  //

};


// "Stringing the hours," LOL! //
function strungHours(myHours) {
    
    switch(myHours) { // Switch statement https://www.w3schools.com/js/js_switch.asp //
    
        case "0100": return 1;
        case "0200": return 2;
        case "0300": return 3;
        case "0400": return 4;
        case "0500": return 5;
        case "0600": return 6;
        case "0700": return 7;
        case "0800": return 8;
        case "0900": return 9;
        case "1000": return 10;
        case "1100": return 11;
        case "1200": return 12;
        case "1300": return 13;
        case "1400": return 14;
        case "1500": return 15;
        case "1600": return 16;
        case "1700": return 17;
        case "1800": return 18;
        case "1900": return 19;
        case "2000": return 20;
        case "2100": return 21;
        case "2200": return 22;
        case "2300": return 23;
        case "0000": return 24;

    }; 
};


// I need to update my data. //
function updateThis() {
    
    dataResults = localStorage.getItem('t4Hours');

        return (dataResults ? dataResults : t4Hours);

};


function setLS() {
    
    localStorage.setItem('t4Hours', JSON.stringify(t4Hours));

};
  

function saveLS(schedBody) {
    
    localStorage.setItem('t4Hours', JSON.stringify(schedBody));

};

 
function saveSched(myHours, myData) {
    
    if(!localStorage.getItem('t4Hours')) {
      
        setLS();

    };
  
    var schedule = JSON.parse(localStorage.getItem('t4Hours'));
    
        schedule[myHours] = myData;
  
        saveLS(schedule);
        
};

  
function tasksUpdated(schedBody) {
    
    $(".taskRow").each(function(getData) {
      
        // Using the "this" selector, to get the children. //
        let myPlanner = $(this).children("div");
      
        $(this).children("textarea").text(schedBody[myPlanner.text()]);

        return getData;
      
    });
};

// Event Listener. //
$("button").click(function() {
    
    thisData = $(this).siblings("textarea").val();
    
    myHours = $(this).siblings("div").text();
    
    svSched(myHours, thisData);

});