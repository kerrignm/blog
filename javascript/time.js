function showtime()
{
    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth()+1;
    var day = now.getDate();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    time = year + '/' + month + '/' + day + '/' + hours + ':' + minutes + ':' + seconds;
    var div_showtime = document.getElementById('showtime');
    div_showtime.innerHTML = time;
}

function letstart()
{
    taskId = setInterval(showtime, 500);
}

window.onload = function()
{
    //var div_showtime = document.getElementById('showtime');
    //div_showtime.onclick=letstart;
    letstart();
}
