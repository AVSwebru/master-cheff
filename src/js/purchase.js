export default (submitCartBtn, cart, ordering) => {
    
    submitCartBtn.addEventListener('click', () => {
        cart.hidden = true;
        ordering.hidden = false;
        window.scrollTo(0, 0);
    });

};