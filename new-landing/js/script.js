// slider owlCarousel
$(document).ready(function() {
  $('.owl-carousel').owlCarousel({
  	merge: true,
  	loop: true,
  	dots: false,
  	nav: true,
  	navText : ['<i class="fa fa-chevron-left" aria-hidden="true"></i>','<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
  	video: true,
  	responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      }
    }
  });
});
// arcticModal
$(document).on('click', '.openForm', function () {
   $('#Form').arcticmodal();
   $('.header-form').empty();
   $('.header-form').prepend('Підібрати тур');
   $('.hotel-name').empty();
   $('.hotel-name').prepend('у готель '+$(this).parents('.about-tour').find('.header-about-tour').html());
});
$(document).on('click', '.openFormResort', function () {
   $('#Form').arcticmodal();
   $('.header-form').empty();
   $('.header-form').prepend('замовити');
   $('.hotel-name').empty();
   $('.hotel-name').prepend($(this).parents('.about-tour').find('.tour-name').html());
});
$(document).on('click', '.openFormConsultation', function () {
   $('#Form').arcticmodal();
   $('.header-form').empty();
   $('.header-form').prepend('КОНСУЛЬТАЦІЯ ЕКСПЕРТА');
   $('.hotel-name').empty();
   $('.hotel-name').prepend('Заповніть форму та отримайте відповіді на питання');
});
$(document).on('click', '.openTourForm', function () {
   $('#selectionTourForm').arcticmodal();
});

// placeholder 
function placeholderInput(obj)
{
	if(obj.val()!=''){
		obj.prev().show();
	}else{
		obj.prev().hide();
	}
}
// spoiler advantages
jQuery('.show-more-body').hide();
jQuery('.show-more-title').click(function(){
	jQuery('.show-more-body').slideToggle();
	jQuery('.text-center-show-more').toggle();	
});
// spoiler popular-resorts
if ($(window).width() <= '768'){
jQuery('.hidden-about-tour:lt(2)').show();
// jQuery('.span-about-tour:lt(4)').show();	
}else if($(window).width() <= '1200'){
jQuery('.hidden-about-tour:lt(4)').show();	
}else{
jQuery('.hidden-about-tour:lt(6)').show();	
}

jQuery('.popular-resorts-title').click(function(){
	jQuery('.hidden-about-tour').show();
	jQuery('.text-center-popular-resorts').toggle();	
});
// nav menu
jQuery(document).ready(function($){
     
    /* Подготавливаем иконку меню */
    $('.botton_nav').prepend('<div id="menu-icon"><p>&#9776;</p></div>');
     
    /* Включаем навигацию */
    $("#menu-icon").on("click", function(){
        $(".nav_mob_blok").slideToggle();
    });
 
});

//  show top menu
jQuery(document).ready(function(){

	var h_hght = 100;
	var h_mrg = 0;
    
    $(window).scroll(function(){
    	
    	var top = $(this).scrollTop(); 
    	if(top > h_hght){
    		$('.top-nav').addClass('show_top_nav');	
    	} else {
			$('.top-nav').removeClass('show_top_nav');
    	}
    });
});

//scroll
$(document).ready(function(){
    $(".scroll").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
       //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),
        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    });
});

// Cache selectors
var lastId,
  topMenu = $("#scroll-nav-mob"),
  topMenuHeight = topMenu.outerHeight() + 15,
  // All list items
  menuItems = topMenu.find("a"),
  // Anchors corresponding to menu items
  scrollItems = menuItems.map(function() {
    var item = $($(this).attr("href"));
    if (item.length) {
      return item;
    }
  });

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function(e) {
  var href = $(this).attr("href"),
    offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight + 1;
  $('html, body').stop().animate({
    scrollTop: offsetTop
  }, 1500);
  e.preventDefault();
});

// Bind to scroll
$(window).scroll(function() {
  // Get container scroll position
  var fromTop = $(this).scrollTop() + topMenuHeight;

  // Get id of current scroll item
  var cur = scrollItems.map(function() {
    if ($(this).offset().top < fromTop)
      return this;
  });
  // Get the id of the current element
  cur = cur[cur.length - 1];
  var id = cur && cur.length ? cur[0].id : "";

  if (lastId !== id) {
    lastId = id;
    // Set/remove active class
    menuItems
      .parent().removeClass("active")
      .end().filter("[href='#" + id + "']").parent().addClass("active");
  }
});

// Відправка форм

$(document).on('click', '.call_form', function () {
	name	= $(this).parents('.box-content').find('#name').val();
	phone	= $(this).parents('.box-content').find('#phone').val();
	select	= $(this).parents('.box-content').find('#select-town').val();
	check	= $(this).parents('.box-content').find('#check').is(':checked');
    id		= 0;

			if(name == '' || phone == '' || check != true || select == '')
			{
				if(name == '')
				{
					$(this).parents('.box-content').find('#name-error').empty();
					$(this).parents('.box-content').find('#name-error').addClass('fontError');
					$(this).parents('.box-content').find('#name-error').prepend("Введіть Ваше ім'я").html();
					$(this).parents('.box-content').find('#name').addClass('borderErr');
				}else{
					$(this).parents('.box-content').find('#name-error').empty();
					$(this).parents('.box-content').find('#name-error').removeClass('fontError');
					$(this).parents('.box-content').find('#name-error').prepend("Як до Вас звертатись").html();
					$(this).parents('.box-content').find('#name').removeClass('borderErr');
				}
				if(phone == '')
				{
					$(this).parents('.box-content').find('#phone-error').empty();
					$(this).parents('.box-content').find('#phone-error').addClass('fontError');
					$(this).parents('.box-content').find('#phone-error').prepend("Неправильний формат телефону").html();
					$(this).parents('.box-content').find('#phone').addClass('borderErr');
				}else{
					$(this).parents('.box-content').find('#phone-error').empty();
					$(this).parents('.box-content').find('#phone-error').removeClass('fontError');
					$(this).parents('.box-content').find('#phone-error').prepend("Ваш номер телефону").html();
					$(this).parents('.box-content').find('#phone').removeClass('borderErr');
				}
				if(select == '')
				{
					$(this).parents('.box-content').find('.erroreSelect').show();
					$(this).parents('.box-content').find('.select2').addClass('borderErr');
				}else{
					$(this).parents('.box-content').find('.erroreSelect').hide();
					$(this).parents('.box-content').find('.select2').removeClass('borderErr');
				}
				if(check != true)
				{
					$(this).parents('.box-content').find('#check-error').addClass('check-error');
				}else{
					$(this).parents('.box-content').find('#check-error').removeClass('check-error');
				}				
				
			return false;	
			}else{		
	$.ajax(
        {
            url: '/new-landing/inc/sendEmail.php',
            type: 'POST',
            data: { 'phone': phone,
            		'select': select,
            		'id': id,
            		'name': name}, 
            
			}).done(function (data) {
	        	window.location.href = "/thankYouPage.php";
	        	$.arcticmodal('close');	        	
	        });

			return false;
			
			}
});

$(document).on('click', '.call_modal', function () {
	country       = $(this).parents('.box-content').find('#country').val();
	budget		  = $(this).parents('.box-content').find('#budget').val();
	number_people = $(this).parents('.box-content').find('#number_people').val();
    number_days   = $(this).parents('.box-content').find('#number_days').val();
    phone         = $(this).parents('.box-content').find('#phone').val();
    email         = $(this).parents('.box-content').find('#email').val();
    select		  = $(this).parents('.box-content').find('#select-town').val();
    check		  = $(this).parents('.box-content').find('.selection-form-checkbox').is(':checked');	  
    id			  = 1;

console.log(select);
// Перевірка на правильність вводу e-mail адреси    
//var emailRegular = /^[a-zA-Z0-9.!#$%&'*+/=/?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
//    var emailTest    = emailRegular.test(email);

if(country == '' || phone == '' || select == '' || check != true ) // || email == '' || emailTest != true
			{
			if(country == ''){
				$(this).parents('.box-content').find('.errorName').show();
				$(this).parents('.box-content').find('#country').addClass('borderErr');
			}else{
				$(this).parents('.box-content').find('.errorName').hide();
				$(this).parents('.box-content').find('#country').removeClass('borderErr');
			}
			if(phone == ''){
				$(this).parents('.box-content').find('.errorPhone').show();
				$(this).parents('.box-content').find('#phone').addClass('borderErr');				
			}else{
				$(this).parents('.box-content').find('.errorPhone').hide();
				$(this).parents('.box-content').find('#phone').removeClass('borderErr');
			}
// Перевірка на правильність вводу e-mail адреси
/*			if(email == '' || emailTest != true)
			{
				$(this).parents('.box-content').find('.erroreMail').show();
				$(this).parents('.box-content').find('#email').addClass('borderErr');
			}else{
				$(this).parents('.box-content').find('.erroreMail').hide();
				$(this).parents('.box-content').find('#email').removeClass('borderErr');
			}*/
			if(select == '')
			{
				$(this).parents('.box-content').find('.erroreSelect').show();
				$(this).parents('.box-content').find('.select2').addClass('borderErr');
			}else{
				$(this).parents('.box-content').find('.erroreSelect').hide();
				$(this).parents('.box-content').find('.select2').removeClass('borderErr');
			}
			if(check != true)
			{
				$(this).parents('.box-content').find('#selection-check-error').addClass('check-error');
			}else{
				$(this).parents('.box-content').find('#selection-check-error').removeClass('check-error');
			}
			
			return false;	
			}else{
				
    $.ajax(
        {
            url: '/new-landing/inc/sendEmail.php',
            type: 'POST',
            data: { 'country': country,
            		'budget': budget,
            		'number_people': number_people,
            		'number_days': number_days, 
            		'phone': phone,
            		'id': id,
            		'select': select,
            		'email': email},
          		
			}).done(function (data) {
	        	window.location.href = "/thankYouPage.php";
	        	$.arcticmodal('close');	        	
	        });

			return false;
			
			}
			
});

var data = [{ id: 0, 		text: 'Вінницька' },
			{ id: 1,		text: 'Волинська' },
			{ id: 2,		text: 'Дніпропетровська' },
			{ id: 3,		text: 'Донецька' },
			{ id: 4,		text: 'Житомирська' },
			{ id: 5,		text: 'Закарпатська' },
			{ id: 6,		text: 'Запорізька' },
			{ id: 7,		text: 'Івано-Франківська' },
			{ id: 8,		text: 'Київська' },
			{ id: 9,		text: 'Кіровоградська' },
			{ id: 10,		text: 'Луганська' },
			{ id: 11,		text: 'Львівська' },
			{ id: 12,		text: 'Миколаївська' },
			{ id: 13,		text: 'Одеська' },
			{ id: 14,		text: 'Полтавська' },
			{ id: 15,		text: 'Рівненська' },
			{ id: 16,		text: 'Сумська' },
			{ id: 17,		text: 'Тернопільська' },
			{ id: 18,		text: 'Харківська' },
			{ id: 19,		text: 'Херсонська' },
			{ id: 20,		text: 'Хмельницька' },
			{ id: 21,		text: 'Черкаська' },
			{ id: 22,		text: 'Чернівецька' },
			{ id: 23,		text: 'Чернігівська' }];

var $eventSelect = $(".js-example-basic-single-limit");

$(".js-example-basic-single-limit").change(function (){
	$(this).prev().show();
});

// start select2
$eventSelect.select2({
  placeholder: "Регіон",
  data: data
});

