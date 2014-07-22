function formatetime(t)
{
    if(t > 10)
    {
        return (t-t%10)/10 + '' + t%10;
    }
    else
    {
        return t;
    }
}

function showtime()
{
    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth() + 1;
    var day = now.getDate();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    time = year + '/' + formatetime(month) + '/' + formatetime(day) + '/' + formatetime(hours) + ':' + formatetime(minutes) + ':' + formatetime(seconds);
    var div_showtime = document.getElementById('showtime');
    div_showtime.innerHTML = time;
}

function letstart()
{
    taskId = setInterval(showtime, 500);
}

window.onload = function()
{
    letstart();
}
