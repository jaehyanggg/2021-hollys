$(".sub-wrapper").hide()
$(".navi").mouseover(function(){
	$(".sub-wrapper").stop().slideDown(500)
})
$(".navi").mouseout(function(){
	$(".sub-wrapper").stop().slideUp(500)
})

$(window).scroll(function() {
	var sct = $(this).scrollTop()
	if(sct > 200) $("aside.bt-top").addClass('active')
	else $("aside.bt-top").removeClass('active')
})

function topAni() {
	$('html, body').stop().animate({"scrollTop": 0}, 300)
}

var swiperMain = new Swiper('.main-wrapper .swiper-container', {
	pagination: {
		el: '.main-wrapper .swiper-pagination',
		clickable: true
	}
})

var swiperMenu = new Swiper('.menu-wrapper .swiper-container', {
	slidesPerView: 1,
	slidesPerGroup: 1,
	spaceBetween: 0,
	loop: true,
	navigation: {
		nextEl: '.menu-wrapper .bt-next',
		prevEl: '.menu-wrapper .bt-prev',
	},
	pagination: {
		el: '.menu-wrapper .swiper-pagination',
		clickable: true
	},
	breakpoints: {
		768: {
			slidesPerView: 2,
			slidesPerGroup: 2,
			spaceBetween: 20,
		},
		1200: {
			slidesPerView: 3,
			slidesPerGroup: 3,
			spaceBetween: 20,
		},
		1400: {
			slidesPerView: 4,
			slidesPerGroup: 4,
			spaceBetween: 20,
		},
	}
})