$(document).ready(function(){
    $('#btn_01').click(function(){
        alert("button click!");
        $('#div_01').load('/blog/jquery/text.txt');
    });
});