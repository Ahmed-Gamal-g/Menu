// start slider
$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  autoplay: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});
// end slider


var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// start nav active
// $(document).on("click", "ul li", function () {
//   $(this).addClass("active").siblings().removeClass("active");
// });
// end nav active


// start modal nav
let inlineRadio1 = document.getElementById("inlineRadio1");
let inlineRadio2 = document.getElementById("inlineRadio2");

let divText = document.querySelector(".div-text");
let divTextTwo = document.querySelector(".div-text-two");

inlineRadio1.onclick = function () {
  divText.style.display = "none";
  divTextTwo.style.display = "block";
};

inlineRadio2.onclick = function () {
  divTextTwo.style.display = "none";
  divText.style.display = "block";
};
// end modal nav
