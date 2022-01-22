$(function () {
  $(".nav__icon").on("click", function () {
    $(this).toggleClass("active");
    $("nav ul").slideToggle();
  });

  $(window).on("load resize", function () {
    var w = $(window).width();
    var h = $(window).height();
    var x = 700;
    if (w >= x) {
      $("nav ul").css({ display: "flex", height: "auto" });
    } else {
      $("nav ul").css({ display: "none", height: "auto" });
    }
  });
});

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
