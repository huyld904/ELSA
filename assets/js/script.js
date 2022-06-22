'use strict';

$(document).ready(function () {
   $('.slider').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: `<button type='button' class='slick-prev pull-left'><span class="icon material-icons-outlined">
      west
      </span></button>`,
      nextArrow: `<button type='button' class='slick-next pull-right'><span class="icon material-icons-outlined">
      east
      </span></button>`,
   });
});

$(document).ready(function () {
   $('.features__list').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      prevArrow: `<button type='button' class='slick-prev pull-left'><span class="icon material-icons-outlined">
       west
       </span></button>`,
      nextArrow: `<button type='button' class='slick-next pull-right'><span class="icon material-icons-outlined">
       east
       </span></button>`,
      responsive: [
         {
            breakpoint: 600,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
            },
         },
         {
            breakpoint: 390,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
            },
         },
      ],
   });
});

$(function () {
   $('.lazy').lazy({
      scrollDirection: 'vertical',
      effect: 'fadeIn',
      visibleOnly: true,
   });
});
