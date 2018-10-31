export default (submitCartBtn, cart, ordering, orderingInfo, btnToCart) => {
  submitCartBtn.addEventListener('click', () => {
    cart.hidden = true;
    ordering.hidden = false;
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
    setTimeout(() => {
      orderingInfo.setAttribute('data-uk-sticky', 'offset: 70; bottom: #main; media: @l');
    }, 0);
  });

  btnToCart.addEventListener('click', () => {
    cart.hidden = false;
    ordering.hidden = true;
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  });
};
