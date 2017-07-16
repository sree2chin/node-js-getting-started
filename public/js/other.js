var imagesList = [
	"http://i64.tinypic.com/zn9b9j.jpg",
	"http://i65.tinypic.com/2usj2f8.jpg",
	"http://i65.tinypic.com/2dh70xj.jpg",
	"http://i66.tinypic.com/2dkbdx4.jpg",
	"http://i64.tinypic.com/99fhfl.jpg",
	"http://i68.tinypic.com/t024cp.jpg",
	"http://i66.tinypic.com/2vhvu6c.jpg",
	"http://i68.tinypic.com/2lm01lz.jpg",
	"http://i65.tinypic.com/2f0eyyp.jpg",
	"http://i68.tinypic.com/103yfc9.jpg",
	"http://i63.tinypic.com/2m5i4vp.jpg",
	"http://i67.tinypic.com/5lb1gp.jpg",
	"http://i64.tinypic.com/6c69.jpg",
	"http://i67.tinypic.com/2n8soxt.jpg",
	"http://i63.tinypic.com/v79zyb.jpg",
	"http://i66.tinypic.com/2nu0yoj.jpg",
	"http://i68.tinypic.com/2lt4x05.jpg",
	"http://i68.tinypic.com/4ubd5y.jpg",
	"http://i65.tinypic.com/10e1sfq.jpg",
	"http://i64.tinypic.com/2010pw9.jpg"
]

$( document ).ready(function() {
	setTimeout(function(){
		var imagesListLength = imagesList.length;
	     //Equivalent: $(document.createElement('img'))
		$('.s-grid-inner-container').css("width", (imagesListLength*50)+"px");
	    for(var i = 0; i < imagesListLength; i++) {
	    	var img = $('<img class = "s-clickable-image">');
	    	img.attr('src', imagesList[i]);
			img.appendTo('.s-grid-inner-container');
	    }
	    $(document).on("click",".s-clickable-image",function() {
	    	var newSrc = $(this)[0].src;
	    	$('#s-dynamic-img-href').attr('href', newSrc);
	    	$('.s-dynamic-image').removeClass("s-clickable-image-open");
	    	$('.s-dynamic-image').addClass("s-clickable-image-close");
	    	setTimeout(function(){
	    		$('.s-dynamic-image').attr("src", newSrc);
	    		$('.s-dynamic-image').removeClass("s-clickable-image-close");
	    		$('.s-dynamic-image').addClass("s-clickable-image-open");
	    	},500)
	    	
	    });
	}, 100)  

});
