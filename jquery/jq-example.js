$(document).ready(function(){
    alert("document ready!");
    $('#btn_01').click(function(){
        alert("button click!");
        $('#div_01').load('/blog/jquery/text.txt');
    });
});