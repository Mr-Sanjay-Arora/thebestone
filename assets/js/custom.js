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

$('.more-category').on('click',function(){
    $('.more-category').toggleClass('show');
    $('.list-more-category').toggleClass('hide');
})