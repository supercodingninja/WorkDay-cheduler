// JS file for Map Schedule Library //
'Use Strict';

// Declare Variables //
var sched = wd.sched;

// Calendar Instances //
var Calendar = new sched.Calendar(document.getElementById("myCalendar"));
    Calendar.render();

// Displays Format Date and Time //
const dateView = 'YYYY-MM-DD';
const 