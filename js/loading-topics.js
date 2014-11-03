
(function() {
  var topics = "data/topics.json";
 

// render data with mustache 
  $.getJSON( topics, function( data ) {
		var s = 0;
 		var w = 0;
 		var p = 0;
 		var c = 0;
 		// console.log(data[7])
 		$('.c-topic-items').empty();
 	$.each( data, function(arrayID,item) {	
 		var template = $('#topic-template').html();

		var rendered = Mustache.render(template,item);
		// console.log(item.contentarea);

		if(item.contentarea === 'c'){
 			c++;
 			if ( c <=7 ){$('#c-home-connect .c-topic-items').append(rendered);}		

 		}else if(item.contentarea === 's'){
 			s++;
			 
			if ( s <= 7 ){$('#c-home-study .c-topic-items').append(rendered);}

 		} else if(item.contentarea === 'w'){
 			w++;
			 
			if ( w <=7 ){$('#c-home-work .c-topic-items').append(rendered);}

 		}else if(item.contentarea === 'p'){
 			p++;

			if ( p <=7 ){$('#c-home-play .c-topic-items').append(rendered);}

 		}
      	 
        });
	});

	

})();
