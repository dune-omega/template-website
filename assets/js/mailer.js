// create data
$(document).on('click', '.submitform',function(){
	var data = $('#form-data').serialize();

	 $.post('phpfunc/actions_mailer.php?ac=book_condo', data ,function(data){
		
        $('.mainstatus').html(data);
        
	});
	
})

$(document).on('click', '.submitreg',function(){
	var data = $('#registration-form').serialize();

	 $.post('phpfunc/actions_mailer.php?ac=reg', data ,function(data){
		
        $('.statusmain').html(data);
        
	});
	
})

$(document).on('click', '.submitcontact',function(){
	var data = $('#template-contactform').serialize();

	 $.post('phpfunc/actions_mailer.php?ac=contact', data ,function(data){
		
        $('.statusmain').html(data);
        
	});
	
})