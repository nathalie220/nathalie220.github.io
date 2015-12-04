$(document).ready(function ()) {


$('#clickme').click (calculateFortune)

function calculateFortune () {
	var hometown = $('#hometown').val();
	var partner = $('#partner').valu()
	var numKids = $('#numKids').valu()
	var jobTitle = $('#jobTitle').val();

	var fortuneStr = " You will be a " + jobTitle + " living in " + hometown + " married to " + partner + " with " + numKids + " kids. " 

	$('#output').text(fortuneStr)

	}
})