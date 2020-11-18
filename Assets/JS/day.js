'use strict';

// Hours of of day established. //
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

// I need to know what time it is. //

...

// Event Listener needed: "When Clicked, do this..." //

...

// I need to know what the date is. //

...

// I will need to figure out local storage. //
$(document).ready(function(){
    if(localStorage.getItem('t4hours')){
        tasks(t4Hours);
    }; else {
        tasks(JSON.parse(localStorage.getItem('t4Hours')))
    };
});