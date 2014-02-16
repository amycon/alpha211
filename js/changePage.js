// JavaScript Document

   function image1Animation(){
	
	/* var myWidth= $('#p1_1').width();
	  var myHeight= $('#p1_1').height();
   alert(myWidth);
   alert(height);*/
    $('#p1_1').fadeIn('slow');
	$("#p1_1").delay(1300);
	$('#p1_1').fadeOut('slow');
	$("#p1_2").delay(2600);
	$('#p1_2').fadeIn('slow');
	$("#p1_2").delay(3900);
	$('#p1_2').fadeOut('slow');
  
   }
//Hide all pages
	function hideAnyPage(){
		$("#swiffycontainer").fadeOut("slow");
		$("#aboutusPage").fadeOut("slow");
		$("#productsPage").fadeOut("slow");
		$("#designPage").fadeOut("slow");
		$("#contactusPage").fadeOut("slow");
		$("#whiteBg").fadeOut("slow");
		$("#whiteBg").fadeOut("slow");
	}
	//Home
	function homeMe(){
			$('#nav > li > a').removeClass( "current" );
			$('#homeMe').addClass( "current" );
			hideAnyPage();
			$("#swiffycontainer").delay(1300);
			$("#swiffycontainer").fadeIn("slow");
		}
	//About US
	function aboutus(){
			$('#nav > li > a').removeClass( "current" );
			$('#aboutus').addClass( "current" );
			
			hideAnyPage();
			
			$("#whiteBg").delay(1200);
			$("#whiteBg").fadeIn("slow");
			
			$("#aboutusPage").delay(1300);
			$("#aboutusPage").fadeIn("slow");
			
		}
	// Products
		function products(){
			$('#nav > li > a').removeClass( "current" );
			$('#products').addClass( "current" );
			hideAnyPage();
			$("#whiteBg").delay(1200);
			$("#whiteBg").fadeIn("slow");
			$("#productsPage").delay(1300);
			$("#productsPage").fadeIn("slow");
			/*window.setTimeout(function() {
				 $('div.gallery img').slidingGallery({'slideSpeed':'slow','Lzoom':zoomFunc, 'Pzoom':zoomFunc,'Lshrink':shrinkFunc,'Pshrink':shrinkFunc, container:$("div.gallery") });
			}, 1600);*/
					
		}
	// Design
		function design(){
			$('#nav > li > a').removeClass( "current" );
			$('#design').addClass( "current" );
			hideAnyPage();
			$("#whiteBg").delay(1200);
			$("#whiteBg").fadeIn("slow");
			$("#designPage").delay(1300);
			$("#designPage").fadeIn("slow");
		}		
	// contactUs
		function contactus(){
			$('#nav > li > a').removeClass( "current" );
			$('#contactus').addClass( "current" );
			hideAnyPage();
			$("#whiteBg").delay(1200);
			$("#whiteBg").fadeIn("slow");
			$("#contactusPage").delay(1300);
			$("#contactusPage").fadeIn("slow");
		}	
		
var productsArray = {
				"title #1" : ["images/Product/p1_1.png", "images/Product/p1_2.jpg", "images/Product/p1_3.jpg", "images/Product/p1_4.jpg", "images/Product/p1_5.jpg", "images/Product/p1_1.png", "images/Product/p1_2.jpg", "images/Product/p1_3.jpg", "images/Product/p1_4.jpg", "images/Product/p1_5.jpg"], 
				"title #2" : ["images/Product/p1_1.png", "images/Product/p1_2.jpg", "images/Product/p1_3.jpg", "images/Product/p1_4.jpg", "images/Product/p1_5.jpg"], 
				"title #3" : ["images/Product/p1_1.png", "images/Product/p1_2.jpg", "images/Product/p1_3.jpg", "images/Product/p1_4.jpg", "images/Product/p1_5.jpg"], 
				"title #4" : ["images/Product/p1_1.png", "images/Product/p1_2.jpg", "images/Product/p1_3.jpg", "images/Product/p1_4.jpg", "images/Product/p1_5.jpg"], 
				"title #5" : ["images/Product/p1_1.png", "images/Product/p1_2.jpg", "images/Product/p1_3.jpg", "images/Product/p1_4.jpg", "images/Product/p1_5.jpg"], 
				"title #6" : ["images/Product/p1_1.png", "images/Product/p1_2.jpg", "images/Product/p1_3.jpg", "images/Product/p1_4.jpg", "images/Product/p1_5.jpg"], 
				"title #7" : ["images/Product/p1_1.png", "images/Product/p1_2.jpg", "images/Product/p1_3.jpg", "images/Product/p1_4.jpg", "images/Product/p1_5.jpg"]
				};
				
var timeoutId = null;

function showProducts(productId, currentImg) {
	$(".product-preview").show();
	var list = productsArray[productId];
	if (currentImg > list.length) {
		$(".product-preview").hide();
		window.clearTimeout(timeoutId);
		timeoutId = null;
		return;
	}
	currentImg = currentImg || 1;
	var img = list[currentImg -1];
	var picIndex = currentImg > 5 ? currentImg - 5 : currentImg;
	$(".product-preview .pic").removeClass('animated bounceIn');
	$(".product-preview .pic").hide();
	$(".product-preview .pic" + picIndex).html('<img src="' + img + '">');
	$(".product-preview .pic" + picIndex).addClass('animated bounceIn');
	$(".product-preview .pic" + picIndex).show();

	if (timeoutId) {
		window.clearTimeout(timeoutId);
	}
	timeoutId = setTimeout(function(){
			showProducts(productId, currentImg + 1);
		}, 2000);
}