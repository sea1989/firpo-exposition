jQuery(document).ready(function ($) {


  $('.slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1542,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
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

  $('.slider2').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
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

  $('.slider3').slick({
    dots: true
  });

  $(".header__btn-menu").click(function () {
    $(".modals").addClass("active");
    $(".body").addClass("noscroll");
    return false;
  });

  $(".modals-close").click(function () {
    $(".modals").removeClass("active");
    $(".body").removeClass("noscroll");
    return false;
  });

  $(".user").click(function () {
    $(".modal-auth").addClass("active");
    $(".body").addClass("noscroll2");
    return false;
  });

  $(".modal-auth-close").click(function () {
    $(".modal-auth").removeClass("active");
    $(".body").removeClass("noscroll2");
    return false;
  });

  $(".header__btn-search").click(function () {
    $(".modal-search").addClass("active");
    $(".modal-search-input").focus();
    return false;
  });

  $(document).click(function (e) { // событие клика по веб-документу
    var div = $(".modal-search"); // тут указываем ID элемента
    if (!div.is(e.target) // если клик был не по нашему блоку
      && div.has(e.target).length === 0) { // и не по его дочерним элементам
      $(".modal-search").removeClass("active");
    }
  });

  $(document).click(function (e) { // событие клика по веб-документу
    var div = $(".modals"); // тут указываем ID элемента
    if (!div.is(e.target) // если клик был не по нашему блоку
      && div.has(e.target).length === 0) { // и не по его дочерним элементам
      $(".modals").removeClass("active");
      $(".body").removeClass("noscroll");
    }
  });

  $(document).click(function (e) { // событие клика по веб-документу
    var div = $(".modal-auth"); // тут указываем ID элемента
    if (!div.is(e.target) // если клик был не по нашему блоку
      && div.has(e.target).length === 0) { // и не по его дочерним элементам
      $(".modal-auth").removeClass("active");
      $(".body").removeClass("noscroll2");
    }
  });

  $.fn.setCursorPosition = function (pos) {
    if ($(this).get(0).setSelectionRange) {
      $(this).get(0).setSelectionRange(pos, pos);
    } else if ($(this).get(0).createTextRange) {
      var range = $(this).get(0).createTextRange();
      range.collapse(true);
      range.moveEnd('character', pos);
      range.moveStart('character', pos);
      range.select();
    }
  };
  $.mask.definitions['N'] = '[/0-6|9/]';
  $('input[type="tel"]').click(function () {
    $(this).setCursorPosition(3);
  }).mask("+7(N99) 999-99-99");


  $('.popup-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1], // Will preload 0 - before current, and 1 after the current image
      tCounter: '<span class="mfp-counter">%curr% из %total%</span>',
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
      titleSrc: function (item) {
        return item.el.attr('title');
      }
    }
  });

  // function formatState(state) {
  //   if (!state.id) {
  //     return state.text;
  //   }
  //   str = "";
  //   str += "<p style='padding: 17px; font-style: normal;font-weight: 400; font-size: 16px; line-height: 19px; color: #7C8388;'>" + state.text + "</p>";
  //   var $state = $(str);
  //   return $state;
  // };

  $('.js-example-basic-single').select2({
    placeholder: "-- выберите --",
    // templateResult: formatState,
    // containerCssClass: "error",
    // dropdownCssClass: "test"
  });

  $('.js-example-basic-single--nosearch').select2({
    placeholder: "-- выберите --",
    // templateResult: formatState,
    // containerCssClass: "error",
    // dropdownCssClass: "test"
  });

});

const tooltip = document.querySelector('.tooltip');
const rooms = document.querySelectorAll('.room');

const tooltipClose = tooltip.querySelector('.tooltip-close');



rooms.forEach(room => {
  room.addEventListener('click', function (e) {
    let scrollY = window.scrollY;
    var rect = e.target.getBoundingClientRect();
    posX = rect.left, posY = rect.top;

    // tooltip.innerText = this.dataset.title;
    rooms.forEach(room => {
      room.classList.remove('room--active');
    })
    room.classList.add('room--active')
    tooltip.querySelector('.room-id').innerText = this.dataset.title;

    tooltip.style.top = (rect.y - 220 + scrollY) + 'px';
    tooltip.style.left = (rect.x - 158 + rect.width / 2) + 'px';
    tooltip.style.display = 'block';
  })
})


tooltipClose.addEventListener('click', function () {
  rooms.forEach(room => {
    room.classList.remove('room--active');
  });
  tooltip.style.display = 'none';
});
