/*-------------------------------------
	info1500 Semester Project
	Author: John Clifford
	Date:   4/18/2018
	Filename: pilltablinks.js
---------------------------------------*/
	$(document).ready(function(){
		//Manage hash in URL to open the right pill
		var hash = window.location.hash;
		// If a hash is provided 
		if(hash && hash.length>0)
		{
			var hash = hash.substring(1); // Remove the #
			// Manage Pill titles
			$('.nav-pills a').each(function( index ) {
				if($(this).attr('id')==hash) {
						$(this).addClass('active');
						$(this).addClass('show');
					}
				else
					{
						$(this).removeClass('active');
						$(this).removeClass('show');
					}
			});
			// Manage Tab content
			$('div.tab-content div').each(function( index ) {
				if($(this).attr('id')==hash) {
						$(this).addClass('active');
						$(this).addClass('show');
					}
				else
					{
						$(this).removeClass('active');
						$(this).removeClass('show');
					}
			});
		}
	});