
// Types based on botstrap types - info, success, warning, danger
function message(type, text, delay){
	if(!delay){
		delay = 1;
	}
	
	setTimeout(function(){ $("#game-messages-section").append($('<p class="terminal-message">' + text + '</p>').fadeIn('slow'));	 }, delay);	
}

function button(event, text, delay){
	if(!delay){
		delay = 1;
	}

	setTimeout(function(){ $("#game-controls-section").prepend($('<button class="btn btn-default" onclick="' + event + '">' + text + '</button>').fadeIn('slow'));	 }, delay);
}


function introduction(event){

	// Hide the button
	$(event.target).remove();

	message("info", "Initialising . . . ",1000);
	message("info", "Loading OS . . . ", 2000);
	message("info", "Load failed", 4000);
	message("info", "Loading objectives . . . ",5000);
	message("info", "Load failed", 8000);
	message("info", "Booting in emergency failsafe mode . . ",9000);
	message("info", "Boot successfull",12000);
	message("info", "Creating build menu . . . ",15000);
	message("info", "Build menu ready",17000);

	setTimeout(function(){ $("#build-menu").removeClass("hidden"); }, 17000);


	

}

