$(document).ready(function () {

	var total = 0 


	$('#clickme').click(function () {
		total = total + 1
		$('#click-num').text(total)

		if (total == 5) {
			$('body').css('background-color' , 'red')
		} else if (total == 10) {
			$('body').css('background-color', 'green')
		} else if (total == 15) {
			$('body').css('background-color' , 'blue')
		} else {
			$('body').css('background-color' , 'black')		
		}

	})
})
