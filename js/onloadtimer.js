/*-------------------------------------
	info1500 Semester Project
	Author: John Clifford
	Date:   4/18/2018
	Filename: onloadtimer.js
	
40000 = 40 seconds
60000 = 1 minute
300000 = 5 minutes 
900000 = 15 minutes
1800000 = 30 minutes 

---------------------------------------*/
function onloadtimer(timein) {
	setTimeout(function(){window.location = 'index.html';}, timein);
}