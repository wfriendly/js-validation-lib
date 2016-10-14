/**
 * Created by Administrator on 2016/10/14.
 */
$(document).ready(function() {
  //按钮倒计时
  $('#getCode').getcode({
    'time': 6, //自定义时长
    'before': function() {
      alert('开始！');	 //开始时执行的回调函数
    },
    'after': function() {
      alert('结束！');	 //结束时执行的回调函数
    }
  });
  
  //身份验证
  $("#verificationIdCard").click(function() {
    var result = identityCodeValid($("#inputIdCard").val());
    $(this).closest('.row').find(".help-block-error").html(result).show();
  });
});