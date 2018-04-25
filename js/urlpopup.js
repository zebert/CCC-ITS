/*-------------------------------------
	info1500 Semester Project
	Author: John Clifford
	Date:   4/18/2018
	Filename: urlpopup.js
---------------------------------------*/
var popupWindow = null;
function urlpopup(url,winName,w,h,scroll){
w = 1100;
h = 500;
LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
settings = 'height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
popupWindow = window.open(url,winName,settings);
}
