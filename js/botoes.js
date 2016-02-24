// click and hold event listener

var timeout_id = 0,
    hold_time = 2000,
    hold_trigger = $('.hold_trigger');

$('#power').mousedown(function() {
    timeout_id = setTimeout(desligar, hold_time);
}).bind('mouseup mouseleave', function() {
    clearTimeout(timeout_id);
});

    var button = document.querySelector('.abrir');
    var dialog = document.querySelector('#modal');

function desligar() {
    dialog.showModal();
}
 $('#close').click(function() {
    dialog.close();
});

 $('#power').click(function() {
    
    if($("#iframe").attr("src") == "inicio.html"){
        $("#iframe").attr("src", "desligado.html")
    }
    else{
        $("#iframe").attr("src", "inicio.html")
    }

});