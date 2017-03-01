//$( function() {
//    $( "#slider-range" ).slider({
//        range: true,
//        min: 0,
//        max: 20,
//        values: [ 7, 14 ],
//        slide: function( event, ui ) {
//            $( "#amount" ).val(  ui.values[ 0 ] + " - " + ui.values[ 1 ] + " " );
//        }
//    });
//    $( "#amount" ).val(  $( "#slider-range" ).slider( "values", 0 ) +
//        " - " + $( "#slider-range" ).slider( "values", 1 ) + " " );
//} );

$( function() {
    $( "#slider-range" ).slider({
        range: true,
        min: 0,
        max: 20,
        values: [ 7, 14 ],
        slide: function( event, ui ) {
            $( "#amount" ).val( ui.values[ 0 ] + " - " + ui.values[ 1 ] );
        }
    });
    $( "#amount" ).val(  $( "#slider-range" ).slider( "values", 0 ) +
        " - " + $( "#slider-range" ).slider( "values", 1 ) );
} );

$( function() {
    $( "#slider-range-max" ).slider({
        range: "max",
        min: 1,
        max: 10,
        value: 2,
        slide: function( event, ui ) {
            $( "#num" ).val( ui.value );
        }
    });
    $( "#num" ).val( $( "#slider-range-max" ).slider( "value" ) );
} );