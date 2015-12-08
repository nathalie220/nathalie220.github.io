$(document).ready(function () {

	$('button').click(function (){
		var temp = $('input').val();
        temp = parseInt(temp);
        temp = (temp - 32)*5/9
        temp = new Number(temp).toFixed(2); 
        $('.display').text(temp);

        // color
        if (temp >= 21){

        	$('body').css('backgroundColor', 'yellow');
        }
        else {
        	$('body').css('backgroundColor', 'blue');

        }

	});



});
