
//Back to top
$(".backtop").click(function(){
  $('body,html').animate({scrollTop:0},500);
  return false;
})

//倒计时通用模块
var timeCon = 60*60*24 //小时数
var intDiff = parseInt(timeCon);//倒计时总秒数量

function timer(intDiff){
    window.setInterval(function(){
    var day=0,
        hour=0,
        minute=0,
        second=0;//时间默认值

    if(intDiff > 0){
        day = Math.floor(intDiff / (60 * 60 * 24));
        hour = Math.floor(intDiff / (60 * 60)) - (day * 24);
        minute = Math.floor(intDiff / 60) - (day * 24 * 60) - (hour * 60);
        second = Math.floor(intDiff) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60);
    }

    if (minute <= 9) minute = '0' + minute;
    if (second <= 9) second = '0' + second;

    $('.day_show').html(day);
    $('.hour_show').html(hour);
    $('.minute_show').html(minute);
    $('.second_show').html(second);
    intDiff--;
    }, 1000);
}

timer(intDiff);

//more...






















