$(document).ready(function () {
  var flag = 0;
   $(document).mouseleave(function(){
     if (!flag) {
       $('.popup').fadeIn();
       flag = 1;
     }
     
   });
  $(document).mouseup(function (b){
        var div = $(".popup_cont");
        if (!div.is(b.target)
            && div.has(b.target).length === 0) {
            $('.popup').fadeOut();
        }
    });
   $('.close').click(function () {
     $('.popup').fadeOut();
   });
// $.ajax({
//     type: 'GET',
//         url: "",
//         dataType: "json",
//         success: function (location) {
//        var lg = navigator.language||navigator.browserLanguage;
//           var ar = lg.split("-")
//           var name_city = 'name_'+ar[0];
//           $('.city').html(location.city[name_city]);
//         }
//       });
});