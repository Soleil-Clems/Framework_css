$(document).ready(function () {
 
   $('.open-modal').click(function () {
     var target = $(this).data('target');
     $(target).fadeIn();
   });
 
   $('.modal').click(function (e) {
     if (e.target === this) {
       $(this).fadeOut();
     }
   });
 
   $('.close').click(function () {
     $(this).parents('.modal').fadeOut();
   });
 
   $(document).keyup(function (e) {
     if (e.key === "Escape") {
       $('.modal').fadeOut();
     }
   });
 });
 