var update_loop = setInterval(DateandTime, 1000);

function DateandTime() {
    var today = new Date();
    var d = today.getDate();
    var m = today.getMonth() + 1;
    var y = today.getFullYear() + 1;

    var TodayDay = d + "." + m + "." + y;
    document.getElementById("Date").innerHTML = TodayDay;

    var time = new Date();

    if (time.getHours() < 10) {
        var h = "0" + time.getHours();
    }
    else {
        var h = time.getHours();
    };
    if (time.getMinutes() < 10) {
        var m = "0" + time.getMinutes();
    }
    else {
        var m = time.getMinutes();
    };
    if (time.getSeconds() < 10) {
        var s = "0" + time.getSeconds();
    }
    else {
        var s = time.getSeconds();
    };
    var TodayTime = h + ":" + m + ":" + s;
    document.getElementById("Time").innerHTML = TodayTime;
}