// This is a small program. There are only two sections. This first section is what runs
// as soon as the page loads and is where you should call your functions.
$(document).ready(function(){
    const $display = $('#display');

    // TODO: Call your apply function(s) here
    applyFilterNoBackground(reddify);
    applyFilterNoBackground(decreaseBlue);
    applyFilter(increaseGreenByBlue);




    render($display, image);
});

/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////

// TODO 1, 2 & 4: Create the applyFilter function here
function applyFilter(filterFunction){
for(var r = 0; r < image.length; r++){
    var row = image[r];
    for( var c = 0; c < row.length; c++){
        var rgbString = image[r][c];
        var rgbNumbers = rgbStringToArray(rgbString);
        filterFunction(rgbNumbers);
        rgbString = rgbArrayToString(rgbNumbers);
        image[r][c] = rgbString;
}

   }
}

// TODO 6: Create the applyFilterNoBackground function
function applyFilterNoBackground(filterFunction){
    var backgroundColor = image [0][0];
    for(var r = 0; r < image.length; r++){
        var row = image[r];
        for( var c = 0; c < row.length; c++){
            if(backgroundColor !== image[r][c]){
                var rgbString = image[r][c];
                var rgbNumbers = rgbStringToArray(rgbString);
                filterFunction(rgbNumbers);
                rgbString = rgbArrayToString(rgbNumbers);
                image[r][c] = rgbString;

            }     
    }
       }
    }

// TODO 3 & 5: Create filter functions
function reddify(array){
    array[RED] = 200;
}
function keepInBounds(number){
    var max = 255;
    var min = 0;
    var result = Math.min(number, max);
    result = Math.max(result, min); 
    return result;

}
function decreaseBlue(array){ // this function takes 50 from the value
     array [BLUE] = keepInBounds (array[BLUE] - 50);
    }
    function increaseGreenByBlue(array){ // this function increases the green value by the blue value
        array [GREEN] = keepInBounds(array[GREEN] += array [BLUE]);

    }
// CHALLENGE code goes below here
