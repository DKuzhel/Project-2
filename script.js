jQuery('document').ready(function(){
	//jQuery('body').append('<a href="http://google.com">Перейти на сайт</a>');
	//jQuery('div').remove();
	//jQuery('div, p, hr').remove();
	//var p_clon, p1, p2;
	//p_clon=jQuery('p').clone();
	//jQuery('body').append(p_clon);
	//p1=5;
	//p2=13;
	//p3=p1+p2;
	//alert(Math.sqrt(p3));
	
	//jQuery('button').on('click', function(){
	jQuery('input').on('keyup', function(){	
		var p1, p2, p3;
		p1=jQuery('#p1').val();
		p2=jQuery('#p2').val();
		p1=parseInt(p1);
		p2=parseInt(p2);
		p3=p1+p2;
		//alert('Ответ: '+p3);
		jQuery('#rez').html(p3);
	});
	
})
