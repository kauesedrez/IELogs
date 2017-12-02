var logs="";
	if(typeof console === "undefined" || typeof console.log === "undefined"){
		console = {};	
		console.log = function(msg){
			logs+=msg;
		}
	}
