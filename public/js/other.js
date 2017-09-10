var imagesList = [
	"https://scontent.fblr2-1.fna.fbcdn.net/v/t31.0-8/12976761_1023586187708547_324401400041653372_o.jpg?oh=1e782cee934e55e55344257724d9f89b&oe=5A6128FF",
	"http://i65.tinypic.com/2usj2f8.jpg",
	"http://i65.tinypic.com/2dh70xj.jpg",
	"https://scontent.fblr2-1.fna.fbcdn.net/v/t31.0-8/272455_166644810069360_508545_o.jpg?oh=82daf889bc37aff3bb7ef8d17f3d88e8&oe=5A47BFEE",
	"https://scontent.fblr2-1.fna.fbcdn.net/v/t1.0-9/162608_118670814866760_7377334_n.jpg?oh=8d2a2e4d1469e7ac715536ad6abd3691&oe=5A57138F",
	"https://scontent.fblr2-1.fna.fbcdn.net/v/t1.0-9/155052_118670754866766_7975489_n.jpg?oh=6b3aa2361f0111ccbf2f43ec2ed2f05f&oe=5A4972ED",
	"https://scontent.fblr2-1.fna.fbcdn.net/v/t1.0-9/162885_118670794866762_8072200_n.jpg?oh=a1a0aaea3dff6b5066fcfae15609ec12&oe=5A60701E",
	"https://scontent.fblr2-1.fna.fbcdn.net/v/t31.0-8/10273267_682997565100746_6021297001666310574_o.jpg?oh=24c530f55ae21c8cc729675d7e16a606&oe=5A579DD6",
	"https://scontent.fblr2-1.fna.fbcdn.net/v/t1.0-9/261589_166644503402724_6764003_n.jpg?oh=827db514770f10a8409de67462dcaf78&oe=5A54CEDB",
	"https://scontent.fblr2-1.fna.fbcdn.net/v/t1.0-9/68169_118671158200059_316188_n.jpg?oh=0536893cf17c680861bfd6253b8eb49b&oe=5A510DFB",
	"http://i63.tinypic.com/2m5i4vp.jpg",
	"http://i67.tinypic.com/5lb1gp.jpg",
	"http://i64.tinypic.com/6c69.jpg",
	"http://i67.tinypic.com/2n8soxt.jpg",
	"http://i63.tinypic.com/v79zyb.jpg",
	"http://i66.tinypic.com/2nu0yoj.jpg",
	"http://i68.tinypic.com/2lt4x05.jpg",
	"http://i68.tinypic.com/4ubd5y.jpg",
	"http://i65.tinypic.com/10e1sfq.jpg",
	"http://i64.tinypic.com/2010pw9.jpg",
	"http://i66.tinypic.com/9qw9sm.jpg",
	"http://i64.tinypic.com/35lgnqa.jpg"
]

var currentImage = "s-dynamic-image";

var i = 1;

$('.s-dynamic-image2').addClass("s-clickable-image-dum");

$( document ).ready(function() {
	setTimeout(function(){
		var imagesListLength = imagesList.length;
	     //Equivalent: $(document.createElement('img'))
		$('.s-grid-inner-container').css("width", (imagesListLength*40)+"px");
	    for(var i = 0; i < imagesListLength; i++) {
	    	var img = $('<img class = "s-clickable-image">');
	    	img.attr('src', imagesList[i]);
			img.appendTo('.s-grid-inner-container');
	    }
	    $(document).on("click",".s-clickable-image",function() {
	    	var tempCurrentImage = currentImage;
	    	var tempCurrentImage2 = currentImage == "s-dynamic-image" ? "s-dynamic-image2" : "s-dynamic-image";
	    	var newSrc = $(this)[0].src;
	    	if($('.'+tempCurrentImage).attr("src") != newSrc) {
	    		$('#s-dynamic-img-href').attr('href', newSrc);
		    	
		    	//remove the current div classes
		    	$('.'+tempCurrentImage).removeClass("s-clickable-image-open");
		    	$('.'+tempCurrentImage).addClass("s-clickable-image-close");
		    	setTimeout(function(){
		    		$('.'+tempCurrentImage).removeClass("s-clickable-image-close");
		    		$('.'+tempCurrentImage).addClass("s-clickable-image-dum");
		    	},500)
		    	// add new classes to the new div
		    	setTimeout(function(){
		    		$('.'+tempCurrentImage2).attr("src", newSrc);
		    		$('.'+tempCurrentImage2).addClass("s-clickable-image-dum");
		    		$('.'+tempCurrentImage2).removeClass("s-clickable-image-dum");
		    		// $('.'+tempCurrentImage2).removeClass("s-clickable-image-dum");
		    		$('.'+tempCurrentImage2).addClass("s-clickable-image-open");

		    		currentImage = tempCurrentImage2;
		    	},250)
		    	
		    	
		    	// setTimeout(function(){
		    	// 	$('.s-dynamic-image').attr("src", newSrc);
		    	// 	$('.s-dynamic-image').removeClass("s-clickable-image-close");
		    	// 	$('.s-dynamic-image').addClass("s-clickable-image-open");
		    	// },500)
	    	}
	    });
	}, 100)  
	
	setInterval(function() {
		$(".s-log-each-row").removeClass("s-log-each-row-bg");
		$(".s-log-each-row-log-" + ((i++)%5)).addClass("s-log-each-row-bg");
		if(i>5) { i = 1;}
	}, 2000)

	$(document).on("click",".s-common-tab",function() {
		var classList = $(this).context.classList;
		for(var key in classList) {
			if(classList[key] != "s-portfolio-tab") {
				$(".card").removeClass("s-maximize");
			}
		}
	});

	$(document).on("click",".s-portfolio-tab",function() {
		setTimeout(function(){
			
			$(".card").addClass("s-minimize");
			setTimeout(function(){
				$(".card").addClass("s-maximize");
			}, 100)
		}, 0)
	});

});
