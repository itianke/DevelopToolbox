
// 返回页面顶部   
$(document).ready(function(){   
  $('.top').click(function() {    
     $(document).scrollTo(0,500);    
  }); 
}); 

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


/**
* author zlz
* date 20150821
* function 检查手机号格式是否正确
* @param  {num} 手机号字符串
* @return int {0：num为空；1: 格式有误；2：验证通过}
*/
var checkPhone = function(phone) {
  var phoneReg = /^(13[0-9]|14[0-9]|15[0-9]|18[0-9]|17[0-9])\d{8}$/i;
  var result = false; //phone为空
  if (phoneReg.test(phone)) {
      result = true;
  }
  return result;
};

/**
* author zlz
* date 20150821
* function 检查值是否大于指定长度
* @param {[string]} [str] [检测值]
* @param {[int]} [len] [指定长度]
* @return int {0：为空；1: 不为空}
*/
var checkValLength = function(str, len) {
  var result = false;
  if (str.length > len - 1) {
      result = true;
  }
  return result;
}

/**
* author zlz
* date 20150821
* function 检查值是否为空
* @param  {[string]} [val] [检测值]
* @return int {0：为空；1: 不为空}
*/
var checkIsNull = function(val) {
  var result = false;
  if (val == "" || val == null || val == undefined || val == "" || val.length == 0) {
      result = true;
  }
  return result;
};

/**
* author keetian
* date 20151121
* function 个位数字补零
* @param n为数字
* @return 返回值为字符串
*/
var toDub = function(n) {
  return n < 10 ? '0' + n : '' + n;
};




