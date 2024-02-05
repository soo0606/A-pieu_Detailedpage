// blusherswiper
var swiper = new Swiper(".blusherSwiper", {
  slidesPerView: 1,
  loop: true,
  pagination: {
    el: ".blusherswiper-pagination",
    clickable: true,
  },
});
// info-slide-menu
var clickCount = 0;

$('.p-i-title-box').on('click', function(){
  if($(this).find('.arrow').hasClass('on')){
    $(this).find('.arrow').removeClass('on');
    $(this).siblings(".info-slide-box").slideUp(300);
  }
  else {
    $(this).find('.arrow').addClass('on');
    $(this).siblings(".info-slide-box").slideDown(300);
  }
  clickCount = clickCount + 1;
  });
  // top-btn
window.onscroll = function() {
  scrollFunction();
};
function scrollFunction() {
  const scrollTOPButton = document.querySelector(".top-btn-box");
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    scrollTOPButton.classList.remove('active');
  } else {
    scrollTOPButton.classList.add('active');
  }
}