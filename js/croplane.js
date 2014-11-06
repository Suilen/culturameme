var blockWidth;
var marginLEFT;
var marginTOP;

var originLEFT= $("#c-home-study").offset().left;
var originTOP= $("#c-home-study").offset().top;

function expandBlock(id){
	var el = "#"+id;

	var elLEFT = $(el).offset().left;
	var elTOP= $(el).offset().top;

// calculate margins

	marginLEFT = parseInt($(el).css('margin-left').slice(0, -2)) + (elLEFT - originLEFT);
	marginTOP = parseInt($(el).css('margin-top').slice(0, -2)) + (elTOP - originTOP);

// Set margins
	$(el).css({"margin-top" : marginTOP + "px", "margin-left" : marginLEFT + "px" } );

	blockWidth = $(el).css("width");

	$(el).addClass("c-expanded");
	$(".c-home-topics-i:not("+el+")").fadeOut(600);
	
	$(el).delay(100).fadeTo(300,0.1, function(){
		$('html, body').animate({
       	 scrollTop: originTOP - 100
   		 }, 300);

	}).delay(300).animate({width: "100%", 'margin-left': "0", 'margin-top' : "0"},600).fadeTo(300,1);


	
}


function shrinkBlock(blockID){
	var el = "#"+blockID;

	$(".c-expanded").fadeTo(300,1,function(){

		$(this).animate({width: blockWidth,'margin-left': marginLEFT + "px", 'margin-top' : marginTOP + "px"},600,function(){
			$(".c-home-topics-i:not("+el+")").fadeIn(600);
			$(this).removeClass("c-expanded");
			$(this).css({'margin-left': '', 'margin-top' : ''});
		}).fadeTo(300,1);
	})
}


$('.c-toggle-expand').click(function(){
	var blockID = $(this).attr('data-block');
	var el = "#"+blockID;

	if($(el).hasClass('c-expanded')){
		shrinkBlock(blockID);
	} else {
		expandBlock(blockID);
	}
	

});