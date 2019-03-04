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
	"http://i64.tinypic.com/2010pw9.jpg",
	"http://i66.tinypic.com/9qw9sm.jpg",
	"http://i64.tinypic.com/35lgnqa.jpg",
	"http://i65.tinypic.com/aoomr6.jpg"
]

var currentImage = "s-dynamic-image";

var i = 1;

$('.s-dynamic-image2').addClass("s-clickable-image-dum");

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