export default (catalogElements) => {

    const {catalog, header, catalogBar, catalogOpenBtn, catalogCloseBtn} = catalogElements;

    catalog.style.top = header.getBoundingClientRect().height + catalogBar.getBoundingClientRect() + 'px';

    catalogOpenBtn.addEventListener('click', () => {
        console.log('test')
        if (catalog.hidden === true) {
            catalog.hidden = false;
            catalog.classList.add('uk-animation-slide-top');
        } else {
            catalog.hidden = true;
        }
    });

    catalogCloseBtn.addEventListener('click', () => {
        catalog.hidden = true;
    });

};
