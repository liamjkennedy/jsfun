$( document ).ready(function() {

	$( "a" ).click(function() {
		
		alert("I'm afraid I can't allow that, Dave");
		
		$( "a" ).removeClass( "test" );
		
		event.preventDefault();
	
	});
	
	$( "button" ).click(function() {
		
		alert("AGH! Please .. you're hurting me!");
		
	});
	
	$( "a" ).addClass( "test" );
	
});