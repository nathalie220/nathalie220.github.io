$(document).ready(function() {
	
	var total = 0;
	
	$('#a10').click(add10)

	function add10 () {
		total = total + 10
		$('#out').text(total)
	}
	
	$('#a20').click(add20)

	function add20 () {
		total = total + 20
		$('#out').text(total)
	}

	$('#a30').click(add30)

	function add30 () {
		total = total + 30
		$('#out').text(total)

	}

	$('#n10').click(sub10)

	function sub10 () {
		total = total - 10
		$('#out').text(total)
	}

	$('#n20').click(sub20)

	function sub20 () {
		total = total - 20
		$('#out').text(total)
	}

$('#n30').click(sub30)

	function sub30 () {
		total = total - 30
		$('#out').text(total)
}

})

