$( document ).ready(function() {

	$( "a" ).click(function() {
				
		event.preventDefault();
		
		alert("Where do you think you're going?");
		
		$( this ).fadeOut( "slow" );

	
	});
	
	$( "button" ).click(function() {
		
		$(".ow").fadeIn("fast", function() {
		
			
			$(this).fadeOut("fast");
		}
		
		
		);
		
		
		
	});
	
	$( "a" ).addClass( "test" );
	
	
});