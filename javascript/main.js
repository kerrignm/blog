var c = 0;
var t = 0;
function timedCount()
{
    document.getElementById('txt').value = c;
    c = c + 1;
    t = setTimeout("timedCount()", 1000);
}

function stopCount()
{
    c = 0;
    setTimeout("document.getElementById('txt').value = 0", 0);
    clearTimeout(t);
}

function upper()
{
    var x = document.getElementById("fname");
    x.value = x.value.toUpperCase();
}