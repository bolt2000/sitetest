$(document).ready(function()
	{
		console.log('aaaa');
		$('.responsive-accordion > li:first').find('.responsive-accordion-head').addClass('active');
		$('.responsive-accordion > li:first').find('.responsive-accordion-panel').addClass('active').css('display','block');
		$('.responsive-accordion > li:first').find('.responsive-accordion-head .responsive-accordion-minus').css('display','block');
		$('.responsive-accordion > li:first').find('.responsive-accordion-head .responsive-accordion-plus').css('display','none');

	});
$(document).ready(function()
	{
		$(document).on('click', '.modal_btn', function()
			{
				$('#small-modal').arcticmodal();
			});
	});
$(document).ready(function()
	{
		$(document).on('click', '.modal_btn_new', function()
			{
				$('#small-modal-new').arcticmodal();
			});
	});
$(document).ready(function()
	{
		$(document).on('click', '.modal_btn_new_two', function()
			{
				$('#small-modal-new-two').arcticmodal();
			});
	});
$(document).ready(function()
	{
		$(document).on('click', '.call_btn', function()
			{
				$('#small-modal-call').arcticmodal();
			});
	});
$(document).ready(function()
	{
		$(document).on('click', '.modal_btn_smm', function()
			{
				$('#small-modal-smm').arcticmodal();
			});
	});
$(document).ready(function()
	{
		$(document).on('click', '.modal_btn_free', function()
			{
				$('#small-modal-free').arcticmodal();
			});
	});
$(document).ready(function()
	{
		$(document).on('click', '.modal_down', function()
			{
				$('#modal_down').arcticmodal();
			});
	});
$(document).ready(function()
	{
		$(document).on('click', '.zadat_vopros_days', function()
			{
				$('#zadat_vopros_days').arcticmodal();
			});
	});
$(document).ready(function()
	{
		$(document).on('click', '.zapis_days', function()
			{
				$('#zapis_days').arcticmodal();
			});
	});
(function($)
	{
		$(function()
			{

				//   $('select').selectbox();

			})
	})(jQuery)

$(window).load(function()
	{

		// подключаем метод .each для прохождения по всем изображениям
		$('#gallery_wrapper ul img').each(function()
			{

				createCanvas(this);
			});

		function createCanvas(image)
		{
			// подключаем canvas
			var canvas = document.createElement('canvas');
			var ctx = canvas.getContext("2d");

			// определяем размер изображения
			canvas.width = image.width;
			canvas.height = image.height;

			// после того, как мы получаем ссылку на изображение мы используем метод
			// drawImage, чтобы рисовать и манипулировать canvas'ом
			ctx.drawImage(image, 0, 0);

			// отсюда начинается код, который будет выполять проход по изображению,
			// каждый пискель 4 байта. Тем самым мы получим доступ к кажому пискелю и
			//сможем задать свой цвет. Здесь можно экспериментировать и сделать не только
			// черно-белое изображение, но и в разных цветовых тонах: зеленых, красных, синих, сепии и т.д.

			var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height),
			pixelData = imageData.data;

			// пишем цикл для прохода по массиву, который мы создали выше
			for (var y = 0; y < canvas.height; y++)
			{
				for (var x = 0; x < canvas.width; x++)
				{


					var i = (y * 4 * canvas.width) + (x * 4);
					var red = pixelData[i];
					var green = pixelData[i + 1];
					var blue = pixelData[i + 2];

					// формула черно-белого варианта, мы задаем этот результат для каждого пикселя и цвета: зеленый, красный, синий
					var grayScale = (red * 0.3) + (green * 0.59) + (blue * .11);

					pixelData[i] = grayScale;
					pixelData[i + 1] = grayScale;
					pixelData[i + 2] = grayScale;
				}
			}

			// обновляем наш результат и помещаем его в canvas.
			ctx.putImageData(imageData, 0, 0, 0, 0, imageData.width, imageData.height);

			// Вставляем canvas в DOM элемент перед основной картинкой:
			image.parentNode.insertBefore(canvas, image);
		}
	});
$(window).load(function()
	{

		// подключаем метод .each для прохождения по всем изображениям
		$('#gallery_wrapper_about ul img').each(function()
			{

				createCanvas(this);
			});

		function createCanvas(image)
		{
			// подключаем canvas
			var canvas = document.createElement('canvas');
			var ctx = canvas.getContext("2d");

			// определяем размер изображения
			canvas.width = image.width;
			canvas.height = image.height;

			// после того, как мы получаем ссылку на изображение мы используем метод
			// drawImage, чтобы рисовать и манипулировать canvas'ом
			ctx.drawImage(image, 0, 0);

			// отсюда начинается код, который будет выполять проход по изображению,
			// каждый пискель 4 байта. Тем самым мы получим доступ к кажому пискелю и
			//сможем задать свой цвет. Здесь можно экспериментировать и сделать не только
			// черно-белое изображение, но и в разных цветовых тонах: зеленых, красных, синих, сепии и т.д.

			var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height),
			pixelData = imageData.data;

			// пишем цикл для прохода по массиву, который мы создали выше
			for (var y = 0; y < canvas.height; y++)
			{
				for (var x = 0; x < canvas.width; x++)
				{


					var i = (y * 4 * canvas.width) + (x * 4);
					var red = pixelData[i];
					var green = pixelData[i + 1];
					var blue = pixelData[i + 2];

					// формула черно-белого варианта, мы задаем этот результат для каждого пикселя и цвета: зеленый, красный, синий
					var grayScale = (red * 0.3) + (green * 0.59) + (blue * .11);

					pixelData[i] = grayScale;
					pixelData[i + 1] = grayScale;
					pixelData[i + 2] = grayScale;
				}
			}

			// обновляем наш результат и помещаем его в canvas.
			ctx.putImageData(imageData, 0, 0, 0, 0, imageData.width, imageData.height);

			// Вставляем canvas в DOM элемент перед основной картинкой:
			image.parentNode.insertBefore(canvas, image);
		}
	});


function initialize()
{
	var latlng = new google.maps.LatLng(50.449418, 30.425482);
	var settings =
	{
		zoom: 19,
		center: latlng,
		mapTypeControl: true,
		mapTypeControlOptions:
		{
			style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
		},
		navigationControl: true,
		navigationControlOptions:
		{
			style: google.maps.NavigationControlStyle.SMALL
		},
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	var map = new google.maps.Map(document.getElementById("map_canvas"), settings);
	var contentString = '<div id="content">'+
	'<div id="siteNotice">'+
	'</div>'+
	'<h1 id="firstHeading" class="firstHeading">WebPromo</h1>'+
	'<div id="bodyContent">'+
	'<p>Можно вставить описание</p>'+
	'</div>'+
	'</div>';
	var infowindow = new google.maps.InfoWindow(
		{
			content: contentString
		});

	var companyImage = new google.maps.MarkerImage('/wp-content/themes/WebPromo/images/web_promo.png',
		new google.maps.Size(100,50),
		new google.maps.Point(0,0),
		new google.maps.Point(50,50)
	);


	var companyPos = new google.maps.LatLng(50.449418, 30.425482);

	var companyMarker = new google.maps.Marker(
		{
			position: companyPos,
			map: map,
			icon: companyImage,
			title:"WebPromo",
			zIndex: 3
		});

	google.maps.event.addListener(companyMarker, 'click', function()
		{
			infowindow.open(map,companyMarker);
		});
}


function initialize_two()
{
	var latlng = new google.maps.LatLng(50.4510032, 30.44549);
	var settings =
	{
		zoom: 18,
		center: latlng,
		mapTypeControl: true,
		mapTypeControlOptions:
		{
			style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
		},
		navigationControl: true,
		navigationControlOptions:
		{
			style: google.maps.NavigationControlStyle.SMALL
		},
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	var map = new google.maps.Map(document.getElementById("map_canvas"), settings);
	var contentString = '<div id="content">'+
	'<div id="siteNotice">'+
	'</div>'+
	'<h1 id="firstHeading" class="firstHeading">WebPromo</h1>'+
	'<div id="bodyContent">'+
	'<p>Можно вставить описание</p>'+
	'</div>'+
	'</div>';
	var infowindow = new google.maps.InfoWindow(
		{
			content: contentString
		});

	var companyImage = new google.maps.MarkerImage('/wp-content/themes/WebPromo/images/web_promo.png',
		new google.maps.Size(100,50),
		new google.maps.Point(0,0),
		new google.maps.Point(50,50)
	);

	var companyPos = new google.maps.LatLng(50.4510032, 30.44549);

	var companyMarker = new google.maps.Marker(
		{
			position: companyPos,
			map: map,
			icon: companyImage,
			title:"WebPromo",
			zIndex: 3
		});

	google.maps.event.addListener(companyMarker, 'click', function()
		{
			infowindow.open(map,companyMarker);
		});
}


function initialize_kz()
{
	var latlng = new google.maps.LatLng(43.2500289, 76.94512);
	var settings =
	{
		zoom: 18,
		center: latlng,
		mapTypeControl: true,
		mapTypeControlOptions:
		{
			style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
		},
		navigationControl: true,
		navigationControlOptions:
		{
			style: google.maps.NavigationControlStyle.SMALL
		},
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	var map = new google.maps.Map(document.getElementById("map_canvas"), settings);
	var contentString = '<div id="content">'+
	'<div id="siteNotice">'+
	'</div>'+
	'<h1 id="firstHeading" class="firstHeading">WebPromo</h1>'+
	'<div id="bodyContent">'+
	'<p>Можно вставить описание</p>'+
	'</div>'+
	'</div>';
	var infowindow = new google.maps.InfoWindow(
		{
			content: contentString
		});

	var companyImage = new google.maps.MarkerImage('/wp-content/themes/WebPromo/images/web_promo.png',
		new google.maps.Size(100,50),
		new google.maps.Point(0,0),
		new google.maps.Point(50,50)
	);

	var companyPos = new google.maps.LatLng(43.2500289, 76.94512);

	var companyMarker = new google.maps.Marker(
		{
			position: companyPos,
			map: map,
			icon: companyImage,
			title:"WebPromo",
			zIndex: 3
		});

	google.maps.event.addListener(companyMarker, 'click', function()
		{
			infowindow.open(map,companyMarker);
		});
}


function initialize_three()
{
	var latlng = new google.maps.LatLng(50.449452, 30.4245365);
	var settings =
	{
		zoom: 19,
		center: latlng,
		mapTypeControl: false,
		mapTypeControlOptions:
		{
			style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
		},
		navigationControl: false,
		navigationControlOptions:
		{
			style: google.maps.NavigationControlStyle.SMALL
		},
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	var map = new google.maps.Map(document.getElementById("map_canvas"), settings);
	var contentString = '<div id="content">'+
	'<div id="siteNotice">'+
	'</div>'+
	'<h1 id="firstHeading" class="firstHeading">WebPromo</h1>'+
	'<div id="bodyContent">'+
	'<p>Можно вставить описание</p>'+
	'</div>'+
	'</div>';
	var infowindow = new google.maps.InfoWindow(
		{
			content: contentString
		});

	var companyImage = new google.maps.MarkerImage('/wp-content/themes/WebPromo/images/web_promo.png',
		new google.maps.Size(100,50),
		new google.maps.Point(0,0),
		new google.maps.Point(50,50)
	);


	var companyPos = new google.maps.LatLng(50.449418, 30.425482);

	var companyMarker = new google.maps.Marker(
		{
			position: companyPos,
			map: map,
			icon: companyImage,
			title:"WebPromo",
			zIndex: 3
		});

	google.maps.event.addListener(companyMarker, 'click', function()
		{
			infowindow.open(map,companyMarker);
		});
}
function initialize_new_land()
{
	var latlng = new google.maps.LatLng(50.44941, 30.42548);
	var settings =
	{
		zoom: 19,
		center: latlng,
		mapTypeControl: false,
		mapTypeControlOptions:
		{
			style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
		},
		navigationControl: false,
		navigationControlOptions:
		{
			style: google.maps.NavigationControlStyle.SMALL
		},
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	var map = new google.maps.Map(document.getElementById("map_canvas"), settings);
	var contentString = '<div id="content">'+
	'<div id="siteNotice">'+
	'</div>'+
	'<h1 id="firstHeading" class="firstHeading">Webpromoexperts</h1>'+
	'<div id="bodyContent">'+
	'<p>Можно вставить описание</p>'+
	'</div>'+
	'</div>';
	var infowindow = new google.maps.InfoWindow(
		{
			content: contentString
		});

	var companyImage = new google.maps.MarkerImage('wp-content/themes/WebPromo/new-new-landing/images/map-point.png',
		new google.maps.Size(100,50),
		new google.maps.Point(0,0),
		new google.maps.Point(50,50)
	);


	var companyPos = new google.maps.LatLng(50.449418, 30.425482);

	var companyMarker = new google.maps.Marker(
		{
			position: companyPos,
			map: map,
			icon: companyImage,
			title:"Webpromoexperts",
			zIndex: 3
		});

	google.maps.event.addListener(companyMarker, 'click', function()
		{
			infowindow.open(map,companyMarker);
		});
}
