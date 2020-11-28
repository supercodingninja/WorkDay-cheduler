'use strict';

// Global variables, etc., declared. //
const t4Hours = {
    "0000": "",
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
};

// Functions declared. //
function clockString(hoursString){
    switch (hoursString){ // Switch statement https://www.w3schools.com/js/js_switch.asp //
        case "0000": return 24;
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
    }; 
};

$(document).ready(function(){
    if(localStorage.getItem('t4hours')){
       
        tasks(t4Hours);
    };

    else {
        tasks(JSON.parse(localStorage.getItem('t4Hours')));
    };
});

$('#currDate h4').text(moment().format('DDDD') + "," + moment().format('MMMM do YYYY, hh:mm'));

let counter = 1;

for(const property in t4Hours){
    let taskEntered = "#anyTask" + counter;
    $(taskEntered).text(t4Hours[property]);
    let clockTime = "#clock" + counter;
    let clockHour = moment().hour();
    let hoursString = $(clockTime).text();
    let schedTask = clockString(hoursString);

        if (schedTask < clockHour){
           
            $(taskEntered).addClass("past"); 
        };
        
        else if (schedTask > clockHour){
            
            $(taskEntered).addClass("future"); 
        };
        
        else {
            
            $(taskEntered).addClass("current"); 
        };
      counter++;  
};

// Using Local Storage.  Ref. link: https://www.taniarascia.com/how-to-use-local-storage-with-javascript/ //
// Result method reference links: https://doc.rust-lang.org/std/result/; https://www.inf.unibz.it/~calvanese/teaching/04-05-ip/lecture-notes/uni03/node8.html //
function refresh(){
    dataResults = localStorage.getItem('t4hours');

    return (result ? result : t4Hours);
};

function useLocalStorage() {
    
    localStorage.setItem('t4hours', JSON.stringify(t4hours));
  };
  
  function saveLocalStorage(schedBody) {
    
    localStorage.setItem('t4hours', JSON.stringify(schedBody));
  }
  
  function saveSchedule(hoursString, value) {
    if(!localStorage.getItem('t4hours')) {
      
        useLocalStorage();
    }
  
    let schedule = JSON.parse(localStorage.getItem('t4hours'));
    
        schedule[hoursString] = value;
  
        saveLocalStorage(schedule);
  }

function svSched(hoursString, value) {
    if(!localStorage.getItem('t4hours')) {
      
        useLocalStorage();
    };
};

function updateCalendarTasks(schedBody) {
    
    $(".taskRow").each(function(index) {
      
        let refresh = $(this).children("div");
      
      $(this).children("textarea").text(schedBody[refresh.text()]);
    });
  };

// Event Listener. //
$("button").click(function() {
    value = $(this).siblings("textarea").value();
    hoursString = $(this).siblings("div").text();
    
    svSched(hoursString, value);
  });