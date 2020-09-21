(function($){
// swiper
var mySwiper = new Swiper('.swiper-container', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      },
      autoplay: {
        delay: 5000,
    },
  });
  // chart swiper
  var swiper = new Swiper('.swiper-container2', {
        slidesPerView: 4,
        spaceBetween: 24,
        mousewheel: {
                 invert: true,
             },
          autoplay: {
      delay: 5000,
    },
        breakpoints: {
          600: {
            slidesPerView: 1.4,
            spaceBetween: 24
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 24
          },
          960: {
            slidesPerView: 3,
            spaceBetween: 24
          }}
  });
      // chart tab menu
  let movBtn = $(".movie_title > ul > li");
  
  let movCont = $(".movie_chart > div");
  movCont.hide().eq(0).show();
  
  movBtn.click(function(e){
      e.preventDefault();
      let target = $(this);
      let index = target.index();
      movBtn.removeClass("active");
      target.addClass("active");
      movCont.css('display','none');
      movCont.eq(index).css('display','block')
  });
  // notice tab
      let tabMenu = $(".notice");
  //  hide content
      tabMenu.find("ul>li>ul").hide();
      tabMenu.find("li.active>ul").show();
  
      function tabList(e){
          e.preventDefault();
          let target = $(this);
          target.next().show().parent("li").addClass("active").siblings("li").removeClass("active").find("ul").hide();
      }
  
      tabMenu.find("ul>li>a").click(tabList).focus(tabList);

    })(jQuery);