$( document ).ready(function() {

	$( "a" ).click(function() {
				
		event.preventDefault();
		
		alert("Where do you think you're going?");
		
		$( this ).hide( "slow" );

	
	});
	
	$( "button" ).click(function() {
		
		alert("AGH!");
		
	});
	
	$( "a" ).addClass( "test" );
	
	
});