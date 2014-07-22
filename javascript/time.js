function formatTime(t)
{
    return (t-t%10)/10 + '' + t%10;
}

function showTime()
{
    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth() + 1;
    var day = now.getDate();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var time = year + '/' + formatTime(month) + '/' + formatTime(day) + '/' + formatTime(hours) + ':' + formatTime(minutes) + ':' + formatTime(seconds);
    var divShowtime = document.getElementById('showtime');
    if(divShowtime == null)
    {
        clearInterval(taskId);
        alert("no showtime element!");
    }
    else
    {
        divShowtime.innerHTML = time;
    }
}

function startShowTime()
{
    taskId = setInterval(showTime, 500);
}
