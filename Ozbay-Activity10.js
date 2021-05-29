$(function(){
    $("#birthday").datepicker();
});
var pls = [
    "ActionScript", 
    "AppleAcript", 
    "Asp",
    "JavaScript",
    "Lisp",
    "Perl",
    "PHP",
    "Python"
    ];
$( "#pl" ).autocomplete({
    source: pls 
    });

/*HTML Validation */
/*$('input[type="text"]')
	.on('invalid', function(){
		return this.setCustomValidity('Please fill this field.');
	})
	.on('input', function(){
		return this.setCustomValidity('');
	});
$('input[type="email"]')
	.on('invalid', function(){
		return this.setCustomValidity('Please add an @ sign to the email address.');
	})
	.on('input', function(){
		return this.setCustomValidity('');
	});*/
