
// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
$("#sizePicker").submit(function (event) {
    event.preventDefault();
    makeGrid();
});
var height, width, color;

function makeGrid() {
// debugger;

    width = $("#inputWeight").val();
    height = $("#inputHeight").val();
    table = $("#pixelCanvas");
    table.html('');
    for (var i = 1; i <= width; i++) {
        $("#pixelCanvas").append('<tr id=row'+i+'></tr>');

        for (let j = 1; j <= height; j++) {
           $('#row' + i).append('<td id=col'+j+'></td>')
            // $('tr').filter(':last').append('<td id='+j+' ></td>');
        }
    }
    // codes to add color
    $("td").click(addColor);
    function addColor() {
        color = $("#colorPicker").val();

        if ($(this).attr("style")) {
            $(this).removeAttr("style");
        } else {
            $(this).attr("style", 'background-color:' + color);
        }
    }
}





