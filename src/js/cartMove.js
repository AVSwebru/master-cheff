(function() {
  if (window.matchMedia('(max-width: 960px)').matches) {
    document.querySelector('.js-mobile-cart-site').appendChild(document.querySelector('.js_show_cart'));
  }
})();