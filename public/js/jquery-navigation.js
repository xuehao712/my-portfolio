// var $navigationLinks=$('.primary-menu > ul > li > a');
// var $section=$($(".section").get().reverse());

// var sectionId={};
// $section.each(function(){
//     var id=$(this).attr('id');
//     sectionId[id]=$('.primary-menu >ul >li >a[href=\\#' +id+ ']');
// });

// function highlightNavigation(){

//     var scrollPosition=$(window).scrollTop();

//     $section.each(function(){
//         var currentSection=$(this);

//         var sectionTop=currentSection.offset().top;

//         if(scrollPosition>=sectionTop){
//             var id= currentSection.attr('id');

//             var $navigationLink = sectionId[id];

//             if(!$navigationLink.hasClass('active')){
//                 $navigationLinks.removeClass('active');
//                 $navigationLink.addClass('active');
//             }
//             return false;
//         }
//     });
// }

// $(window).scroll(highlightNavigation);
