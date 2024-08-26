var imagesList = [
	"https://i.postimg.cc/prHKHRdw/12976761-1023586187708547-324401400041653372-o.jpg",
	"https://i.postimg.cc/WzwgpCFh/art-1.jpg",
	"https://i.postimg.cc/GhbvgLVY/art-2.jpg",
	"https://i.postimg.cc/sfYpJQ6s/art3-1.jpg",
	"https://i.postimg.cc/4NwVDCR0/art4.jpg",
	"https://i.postimg.cc/g0xVyg5T/12240160-940230986044068-3188620818963375039-n.jpg",
	"https://i.postimg.cc/xCKbghPt/Copy-of-Image0981.jpg",
	"https://i.postimg.cc/XqLB65m5/DSC00243.jpg",
	"https://i.postimg.cc/66fvZsqQ/DSC00254.jpg",
	"https://i.postimg.cc/QChKzm4s/Image012.jpg",
	"https://i.postimg.cc/rFytChRN/Image0977.jpg",
	"https://i.postimg.cc/mgtzKtwc/Image0978.jpg",
	"https://i.postimg.cc/BnkL34Ym/Image0979.jpg",
	"https://i.postimg.cc/9f94FKsC/Image0980.jpg",
	"https://i.postimg.cc/wvd1tFdJ/marion2.jpg",
	"https://i.postimg.cc/mkLhjDkg/Project.png",
	"https://i.postimg.cc/Xvtwsw67/49938152-2050984264968729-5032461632249266176-o.jpg",
	"https://i.postimg.cc/fTvfMtmB/10468498-781210581946110-9128400036170453917-o.jpg",
	"https://i.postimg.cc/13twPW93/10849072-805276279539540-3424259445350698921-o.jpg",
	"https://i.postimg.cc/4dC96spY/11206500-857652587635242-3669601751988774945-o.jpg",
	"https://i.postimg.cc/VN0t0d0y/11233574-858275037572997-4490446449098240472-o.jpg",
	"https://i.postimg.cc/G2YvVHbP/12069002-926019240798576-2018753336806008205-o.jpg",
	"https://i.postimg.cc/P53b8g6D/19620871-1411362982264197-6624573594976514647-o.jpg",
]

var currentImage = "s-dynamic-image";

var i = 1;

var initArtsEvents = function() {
	setTimeout(function(){
		var imagesListLength = imagesList.length;
	     //Equivalent: $(document.createElement('img'))
		$('.s-grid-inner-container').css("width", (imagesListLength*40)+"px");
	    for(var i = 0; i < imagesListLength; i++) {
	    	var img = $('<img class = "s-clickable-image">');
	    	img.attr('src', imagesList[i]);
				img.appendTo('.s-grid-inner-container');
	    }
      $('.s-dynamic-image2').addClass("s-clickable-image-dum");
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
}
$( document ).ready(function() {
	initArtsEvents();
});

(function($){
  $(function(){ 

    // $('.button-collapse').sideNav();
    
    // // Swipeable Tabs Demo Init
    // if ($('#tabs-swipe-demo').length) {
    //   $('#tabs-swipe-demo').tabs({ 'swipeable': false });
    // }
    // $(document).ready(function(){
    //   $('.s-img-carousel').carousel();
    // });

  }); // end of document ready
})(jQuery); // end of jQuery name space

var selectHeaderCss = function() {
	var selectedClassElement = window.location.pathname.split("/")[1];
	selectedClassElement = selectedClassElement ? selectedClassElement : "arts";
	$('.s-common-tab').removeClass("header-selected");
	$('.'+selectedClassElement).addClass("header-selected");
	setTimeout(function() {
		if (selectedClassElement == "writes" && window.location.hash) {
			$(window).scrollTop($(window.location.hash).offset().top - 80);
		}
	}, 100);
}

/*************  history changes ***************/
let contentDiv = document.getElementById('s-main-content-render');

let routes = {
	'/': arts,	
	'/arts': arts,
  '/writes': writes,
  '/whoami': whoami,
  '/tosolve': tosolve,
  '/portfolio': portfolio,
  '/resume': resume,
  '/travel': travel,
};

contentDiv.innerHTML = routes[window.location.pathname];
selectHeaderCss();

window.onpopstate = () => {
	contentDiv.innerHTML = routes[window.location.pathname];
	window.location.pathname == "/arts" && initArtsEvents();
	selectHeaderCss();
}

let changeUrlAndContent = (pathName) => {
  window.history.pushState({}, pathName, window.location.origin + pathName);
	contentDiv.innerHTML = routes[pathName];
	pathName == "/arts" && initArtsEvents();
	selectHeaderCss();
}

/*************  end history changes ***************/