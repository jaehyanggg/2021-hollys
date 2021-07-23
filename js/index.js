$(".navi").mouseover(function(){
	$("ul.small").stop().slideDown(500)
})
$(".navi").mouseout(function(){
	$("ul.small").stop().slideUp(500)
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


function Gallery(parent, imgs) {
	this.$parent = $(parent);
	this.imgs = imgs;
	var obj = this;
	var html = '';
	html += '<div class="gallery">';
	html += '<div class="img-wrap">';
	html += '<img src="" alt="big" class="w-100">';
	html += '</div>';
	html += '<div class="thumb-wrap">';
	for(var i=0; i<this.imgs.length; i++) {
		html += '<div class="thumb">';
		html += '<img src="'+imgs[i].src+'" alt="thumb" class="w-100">';
		html += '</div>';
	}
	html += '</div>';
	html += '</div>';
	this.$photosWrap = $(html).appendTo(this.$parent);
	
	this.$photosWrap.find('.thumb').click(function() {
		var idx = $(this).index();
		$('.md-wrapper').find('h1').text(obj.imgs[idx].name);
		$('.md-wrapper').find('h2').text(obj.imgs[idx].eng);
		$('.md-wrapper').find('.p1').text(obj.imgs[idx].info1);
		$('.md-wrapper').find('.p2').text(obj.imgs[idx].info2);
		$('.md-wrapper').find('.p3').text(obj.imgs[idx].info3);
		$('.md-wrapper').find('.p4').text(obj.imgs[idx].info4);

		var src = $(this).find('img').attr('src');
		$(this).parent().prev().find('img').attr('src', src);
	});
	
	// 시작하자마자 0번째 그림 클릭되어있게
	this.$photosWrap.find('.thumb').eq(0).trigger('click');
	return this;
}


var gallery = new Gallery('.photos-wrap', [ 
	{ src:'../img/md01.png', name: '우디 보틀 텀블러 (라벤더)', eng: 'Woody Bottle Tumbler (Lavender)', info1: '보틀 모양의 이중 구조의 스테인리스 제품으로 우드패턴의 뚜껑이 특징, 뚜껑에 실리콘 스트랩이 달려있어 휴대가 편리함', info2: '-  보온·보냉 텀블러', info3: '-  용량: 600ml(20oz)', info4: '-  전자레인지, 식기세척기 사용금지'},
	{ src:'../img/md02.png', name: '우디 트라이앵글 텀블러 (라벤더)', eng: 'Woody Triangle Tumbler (Lavender)', info1: '트라이앵글 모양의 이중 구조의 스테인리스 제품으로 우드 패턴이 특징, 뚜껑에 실리콘 스트랩이 달려있어 휴대가 편리함', info2: '-  보온·보냉 텀블러', info3: '-  용량: 500ml(17oz)', info4: '-  전자레인지, 식기세척기 사용금지'},
	{ src:'../img/md03.png', name: '미르 컵 텀블러 16oz (레드)', eng: 'MiiR Cup Tumbler 12oz _Red', info1: 'HOLLYS COFFEE X MiiR더블 월 구조의 뚜껑이 있는 컵 형태의 텀블러로 ‘Product to Project’를 통해 제품의 가격 중 일부가 물 정화 및 위생 사업 기부 프로젝트에 사용 됩니다.', info2: '-  뚜껑이 밀폐되는 타입이 아니기 때문에 뜨거운 음료 사용 시 화상의 위험이 있습니다.', info3: '-  용량: 473ml(16oz)', info4: '-  전자레인지, 식기세척기 사용금지'},
	{ src:'../img/md04.png', name: '미르 와이드마우스 16oz (레드)', eng: 'MiiR Wide Mouth Tumbler 16oz _Red', info1: 'HOLLYS COFFEE X MiiR이름과 같이 입구 부분이 넓어 음용 및 세척이 용이하며, 뚜껑에 손잡이가 달려있어 편의성을 갖추며 ‘Product to Project’를 통해 제품의 가격 중 일부가 물 정화 및 위생 사업 기부 프로젝트에 사용 됩니다.', info2: '- 보온·보냉 텀블러', info3: '-  용량: 473ml(16oz)', info4: '-  전자레인지, 식기세척기 사용금지'},
	{ src:'../img/md05.png', name: '투-톤 글라스컵 (핑크)', eng: 'Two-tone Glass (Pink)', info1: '투톤의 컬러 배합이 특징인 유리컵', info2: '-  용량: 300ml', info3: '-  급격한 온도변화로 인한 파손주의', info4: '-  전자레인지, 식기세척기 사용금지'},
	{ src:'../img/md06.png', name: '하프 더블 월 글라스 컵 (옐로우)', eng: 'Half Double Wall Glass (Yellow)', info1: '손으로 잡는 부분이 이중으로 되어있어서 차가운 음료를 담았을 때, 표면에 물이 손에 닿지 안아 음용시 편리한 유리컵', info2: '-  용량: 360ml', info3: '-  급격한 온도변화로 인한 파손주의', info4: '-  전자레인지, 식기세척기 사용금지'},
	{ src:'../img/md07.png', name: '하프 더블 월 글라스 컵 (그린)', eng: 'Half Double Wall Glass (Green)', info1: '손으로 잡는 부분이 이중으로 되어있어서 차가운 음료를 담았을 때, 표면에 물이 손에 닿지 안아 음용시 편리한 유리컵', info2: '-  용량: 360ml', info3: '-  급격한 온도변화로 인한 파손주의', info4: '-  전자레인지, 식기세척기 사용금지'},
 ]);