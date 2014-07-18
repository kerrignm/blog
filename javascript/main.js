var c = 0;
var t = 0;
function timedCount()
{
    c = document.getElementById('txt').value;
    c = c + 1;
    document.getElementById('txt').value = c;
    t = setTimeout("timedCount()", 1000);
}

function stopCount()
{
    c = 0;
    setTimeout("document.getElementById('txt').value = 0", 0);
    clearTimeout(t);
}
