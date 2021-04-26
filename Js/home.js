// select2
$(document).ready(function () {
  const carStatus = $("#tinh-trang");
  const carBrand = $("#hang-xe");
  const carLine = $("#dong-xe");
  const priceRange = $("#khoang-gia");

  let lastPosition = 0;

  // swiper
  var heroSlide = new Swiper("#hero", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  var topRatingCarSlide = new Swiper("#list-xep-hang", {
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      1024: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 3,
      },
      640: {
        slidesPerView: 2,
      },
      320: {
        slidesPerView: 1.5,
      },
    },
  });

  // search tabs
  $("#hop-tim-kiem").tabs();

  const statusList = [
    {
      id: 1,
      text: "Đã qua sử dụng",
    },
    {
      id: 2,
      text: "Mới",
    },
  ];

  const brandList = [
    {
      id: 1,
      text: "Toyota",
    },
    {
      id: 2,
      text: "Mercedes",
    },
    {
      id: 3,
      text: "RollRoyce",
    },
  ];

  const lineList = [
    {
      id: 1,
      text: "Camry",
    },
    {
      id: 2,
      text: "Maybach",
    },
    {
      id: 3,
      text: "Phantom",
    },
  ];

  const priceRanges = [
    {
      id: 1,
      text: "Từ 100 đến dưới 200 triệu",
    },
    {
      id: 2,
      text: "Từ 200 đến dưới 300 triệu",
    },
    {
      id: 3,
      text: "Từ 300 đến dưới 400 triệu",
    },
  ];

  carStatus.select2({
    data: statusList,
    placeholder: "TÌNH TRẠNG",
  });

  carBrand.select2({
    data: brandList,
    placeholder: "HÃNG XE",
  });

  carLine.select2({
    data: lineList,
    placeholder: "DÒNG XE",
  });

  carLine.select2({
    data: lineList,
    placeholder: "DÒNG XE",
  });

  priceRange.select2({
    data: priceRanges,
    placeholder: "KHOẢNG GIÁ",
  });

  // bảng giá xe
  $("#list-logo")
    .not("#tat-ca-danh-sach")
    .on("click", ".car-brand", function (e) {
      e.preventDefault();
      e.stopPropagation();
      $(".car-brand").not($(this)).removeClass("active");
      $(this).toggleClass("active");
      $(".popup").addClass("hidden");
      if ($(this).hasClass("active")) {
        // load du lieu tu ajax
        const itemHeight = $(this).outerHeight() - 2;
        const rowHeight =
          $(this).offset().top - $(e.delegateTarget).offset().top;
        $(this)
          .siblings(".popup")
          .css("top", itemHeight + rowHeight)
          .removeClass("hidden");
      } // neu co it nhat mot car brand active thi moi load du lieu
    }); // click vao mot car-brand, toggle class active, toggle class hidden cua popup, load giu lieu cho popup qua ajax

  $(window).on("click", function (e) {
    $(".car-brand").removeClass("active");
    $(".popup").addClass("hidden");
  });

  $(window).on("scroll", function (e) {
    const scroll = $(this).scrollTop();
    if (scroll == 0) {
      $("header").css("top", "11px");
      $("header nav").removeClass("bg-white shadow-lg");
      $("#menu-header__behind").addClass("shadow-lg");
      $("#menu-header__top").addClass("xl:flex");
    } // khi keo len top, hien thi top menu desktop, container max width 1140px
    if (scroll > 0) {
      $("header").css("top", 0);
      $("header nav").addClass("bg-white shadow-lg");
      $("#menu-header__behind").removeClass("shadow-lg");
      $("#menu-header__top").removeClass("xl:flex");

      if (scroll > lastPosition) {
        $("header").css("top", "-100%");
      } else {
        $("header").css("top", 0);
      }
      lastPosition = scroll;
    }
  });
});
