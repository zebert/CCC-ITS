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

Modify the onclick of the body tag in a web page 
if you want a different refresh time.

default body tag is:
	<body onload="onloadtimer(0)"

If timein parameter is greater than 0 then use it, 
otherwise default to 15 minutes
---------------------------------------------------*/
function onloadtimer(timein) {
		var hash = 0;
		if(timein > 0)
			{
				hash = timein;
			}
		else
			{
				hash = 900000;
			}
		setTimeout(function(){window.location = 'index.html';}, hash);
}