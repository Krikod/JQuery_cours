/*DAZ3D
	decide66@hotmail.com
	Melanie66
	orders 2612
	(unity)
	Blender avec Linux*/

/*$(document).ready(function()
	{	
		$("#btn").click( function(){
			$("h1").text("Salut");

			$("p").text("Kristen !");
		})

		$("btn").on("click", function(){
			$("h1").text("Salut");

			$("p").text("Kristen !");
		})	

	});*/

	$(document).ready(function()
	{
		$(".btn").click(function()
		{
			var titre = $(this).prev().find(".trip");
			console.log(titre);

			var toggle = $(this).prev().find(".ok");
			console.log(toggle);

			$("li:last-child").slideToggle(800);
			titre.css("color", "red");
		})
	});
/*
// Lancer AJAX
$(document).ready(function()
{
	var data = 'plop';

	$.ajax({
		method: 'post',
		url:    'controller.php',
		data:   data,

		success: function(response)
		{
			alert(response.msg);
		},

		error: function()
		{
			alert("ça a planté !")
		},

	})
})





// identique en PHP à :
//                     count([1, 2, 3])
$('h1').css({
	color: ; etc.
})