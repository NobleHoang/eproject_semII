// click back to top
var showScroll = 1000;
$(window).scroll(function(){
   if ($(this).scrollTop() >= showScroll){
        $('#backtop').fadeIn();
   }else{
    $('#backtop').fadeOut();
   }
   $('#backtop').click(function(){
    $('html,body').animate({scrollTop:0} ,1000);
   })
});
// form dk gửi thông tin
// $(document).ready(function () {
//    $("#myBtn").click(function (e) {
//        if($("#tHoten").val()=="")
//        {
//            $('#error').HTML;
//        }
//        re =/^\w+@\w+(\.\w+){1,3}$/;
//        if(re.test($("#tEmail").val())==false)
//        {
//            alert("Email sai định dạng");
//            return false;
//        }
//        re =/^(\d{3})(\d{3})(\d{4})$/
//        if(re.test($("#tPhone").val())==false)
//        {
//            alert("số điên thoại sai định dạng");
//            return false;
//        }
//        if($('input[name="gioitinh"]:checked').val() == undefined)
//        {
//            alert("Bạn chưa chọn giới tính");
//            return false;
//        }
//        // return true;
//        $("#showHoten").html($("#tHoten").val());
//        $("#showEmail").html($("#tEmail").val());
//        $("#showPhone").html($("#tPhone").val());

//        $("#my-modal").modal();
//        //alert("test");
//    });
// });

