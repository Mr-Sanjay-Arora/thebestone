$('.btn-account-login').on('click',function(){
    $('.modal-login').modal('show');
})

$('.cart-browse').on('click',function(){
    $('.cart-modal').modal('show');
})

  $('.store-categories').slick({
    infinite: false,
    // autoplay: true,
    slidesToShow: 9,
    slidesToScroll: 6,
    speed: 300,
    arrows: true,
  });

$('.store-categories-inner').slick({
    infinite: true,
    autoplay: true,
    slidesToShow: 10,
    slidesToScroll: 6,
    speed: 3000,
    arrows: true,
  });

$('.product-image-slider').slick({
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    dots: true
  });

$('.more-category').on('click',function(){
    $('.more-category').toggleClass('show');
    $('.list-more-category').toggleClass('hide');
})

$('.close-tooltip').on('click',function(){
    $('.location-tooltip').css('display','none');
})