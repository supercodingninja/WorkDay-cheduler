// JS file for Map Schedule Library //
'Use Strict';

// Declare Variables //
var sched = wd.sched;

// Calendar Instances //
var Calendar = new sched.Calendar(document.getElementById("myCalendar"));
    Calendar.render();

// Displays Format Date and Time //
const dateView = 'YYYY-MM-DD';
const currDate = '2020-11-07';
const myMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'Decemeber'];
const shortMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'Decemeber'];
const myWeek = 7;
const myDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const shortDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const myHours = 24;

// How do I know my current date and time: //
var currTime = moment(currDate, dateView);
// render currTime(); //

// I need to start the month //
var startDate = currTime.startOf('month');

// I need to start the week of the month //
// ?? var weekStart = currTime.startOf('week'); ?? //
var weekStart = startDate.week();

// I NEED TO FIGURE OUT HOW TO MAKE THIS INTO INDIVIDUAL DAYS!  THIS IS SUPPOSE TO BE A DAY PLANNER SHOWING...creating separate JS file, just in case I can make this work the way I visualized.  I need a MVP, first. //