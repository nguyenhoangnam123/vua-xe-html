// swiper
var swiper = new Swiper("#hero", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// select2
$(document).ready(function () {
  const carStatus = $("#tinh-trang");
  const carBrand = $("#hang-xe");
  const carLine = $("#dong-xe");
  const priceRange = $("#khoang-gia");

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
});
