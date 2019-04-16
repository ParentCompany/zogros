// Home Screen

$(document).ready(function () {
	$("#waterfall-exp").on("keyup", function () {
		var value = $(this).val().toLowerCase();
		$("#dash-content *").filter(function () {
			$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
		});
	});
});

// Social Page

$(document).ready(function () {
	$("#waterfall-exp").on("keyup", function () {
		var value = $(this).val().toLowerCase();
		$("#social-content *").filter(function () {
			$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
		});
	});
});


// XHR Req

var xhr = new XMLHttpRequest();
xhr.open("GET", "https://reqres.in/api/products/3", true);
xhr.onload = function(){
	console.log(xhr.responseText);
};
xhr.send();

// var mydata = JSON.parse(xhr);

var button = document.querySelector('button');
  var dialog = document.querySelector('dialog');
  button.addEventListener('click', function() {
    dialog.showModal();
    /* Or dialog.show(); to show the dialog without a backdrop. */
  });
				