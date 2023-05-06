$('.banner-slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  dot: true,
  autoplay: true,
  autoplaySpeed: 3000,
  speed: 2000,
  arrows: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    }]
});

$(document).ready(function () {
  $('.btn-kind button').click(function () {
    $('.btn-kind button').removeClass("active");
    $(this).addClass("active");
  });
  $('.btn-kind button').click(function (event) {
    const dataValue = $(this).attr('data');
    const allCols = $('.data-list > li');
    if (dataValue === 'all') {
      allCols.show();
      return;
    }
    const shownCols = $(`.data-list > li[data=${dataValue}]`);
    const hiddenCols = allCols.not(shownCols);
    shownCols.show();
    hiddenCols.hide();
  });
  $('.edit').click(function () {
    $(this).toggleClass("active");
  });
  $('.logout').click(function () {
    $('body').removeClass('logined')
    localStorage.removeItem("userLogin"); 
  });
});
const loginUser = JSON.parse(localStorage.getItem("userLogin"));
const logined= loginUser[0].isUser
if(logined===''){
  return;
}
const addBody=document.querySelector('body');
addBody.classList.add('logined')
const btnEl=document.querySelector('.btnlogin')
const welcomeMessage = document.createElement('span');
welcomeMessage.classList.add('success')
welcomeMessage.textContent = `${logined}`;
btnEl.appendChild(welcomeMessage);




