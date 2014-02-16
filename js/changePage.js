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