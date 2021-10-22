var lastScrollTop = 0;
navbar = document.getElementById('nav');
window.addEventListener('scroll',function(){
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if(scrollTop > lastScrollTop){
        navbar.style.top="-80px";
    }else{
        navbar.style.top="0";
    }
    lastScrollTop = scrollTop;

});

var typed = new Typed('#animate', {
    strings: [
        "Modern",
        "Better",
        "Fancy"
    ],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true,
  });
  
  $('.tabs-order div').click(function(){
      $('.tabs-order div').siblings().removeClass("active");
      this.classList.add("active");
      var tabId = $(this).attr("id");
      $(".tabs .tab-content").hide();
    //  $(".tabs .tab-content #"+tabId+"-content").css("display","block");
    $("#"+tabId+"-content").css("display","block");
});

$(".theVideo").hide();
$(".video .vid-play").click(function(){
    $(".theVideo").hide().fadeIn(3000);
    $('body').css("overflow","hidden");
});
$(".theVideo").click(function(){
    $(this).fadeOut();
    $('body').css({
        "overflow":"visible",
        "overflow-x": "hidden",
    });
});

$('.testimonials-slider').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });


$(".main-form").hide();
$(".theForm").click(function(){
  $(".main-form").show();
});

$(".form-close").click(function(){
  $(".main-form").hide();
});

$('.main-form .form-header .col div').click(function(){
  $(this).siblings().removeClass("active");
  this.classList.add("active");
  var formId = $(this).attr("id");
  $(".login-form").hide();
  $(".signup-form").hide();
//  $(".tabs .tab-content #"+tabId+"-content").css("display","block");
$("#"+formId+"-content").css("display","block");
});
