function RatingWidget(elem_id) {
    
    // Private function
    //  -- returns the css class for a rating
    var rating2css = function(rating) {
	var classes = [];
	
	for(var i=0; i < Math.floor(rating); i++){
	    classes.push("rating_full");
	}
	
	if(rating != Math.ceil(rating)) {
	    classes.push("rating_half");
	}
	
	for(var i=0; i<(5 - Math.ceil(rating)); i++) {
	    classes.push("rating_empty");
	}
	return classes;
    };

    // Private function
    //  -- returns the textual description for a rating
    var rating2txt = function(rating) {
	if(rating >= 1 && rating < 2) {
	    return "Improvement desired";
	} else if(rating >= 2 && rating < 3) {
	    return "Fair";
	} else if(rating >= 3 && rating < 4) {
	    return "Good";
	} else if(rating >= 4 && rating < 5) {
	    return "Great!";
	} else if(rating >= 5) {
	    return "Amazing!";
	}	
    };

    // Initialize the jQuery slider
    $( "#" + elem_id + " #slider" ).slider({
	
	slide: function(event, ui) {

            var rating = 0.5 * Math.round(ui.value / 0.5);
            var classes = rating2css(rating);

	    $.each(classes, function(i,e) {
		
		if( !$('#' + elem_id + ' #ratings #star'+(i+1)).hasClass( e ) ) {
		    $.each( $('#' + elem_id + ' #ratings #star'+(i+1)).attr('class').split(' '), function(j,c) {
			$('#' + elem_id + ' #ratings #star'+(i+1)).removeClass(c);
		    });
		    $('#' + elem_id + ' #ratings #star'+(i+1)).addClass(e);
		    $('#' + elem_id + ' #rating_desc').html(rating2txt(rating));
		}
	    });
	},

	change: function(event, ui) {
	    
	    var rating = 0.5 * Math.round(ui.value / 0.5);
	    var classes = rating2css(rating);
	    
	    $.each(classes, function(i,e) {
		
		if( !$('#' + elem_id + ' #ratings #star'+(i+1)).hasClass( e ) ) {
		    $.each( $('#' + elem_id + ' #ratings #star'+(i+1)).attr('class').split(' '), function(j,c) {
			$('#' + elem_id + ' #ratings #star'+(i+1)).removeClass(c);
		    });
		    $('#' + elem_id + ' #ratings #star'+(i+1)).addClass(e);
		    $('#' + elem_id + ' #rating_desc').html(rating2txt(rating));
		}
	    });
	},

	min: 1,
	//min: 0,
	max: 5,
	step: 0.5
    });
    $( "#" + elem_id + " #slider" ).slider("option", "value", 0);
}

$(document).ready(function() {
    var rating_widget1 = new RatingWidget("rating1");
    var rating_widget2 = new RatingWidget("rating2");
});
