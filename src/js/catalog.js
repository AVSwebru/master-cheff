export default (catalogElements) => {
   
    const {catalog, header, catalogOpenBtn, catalogCloseBtn} = catalogElements;

    catalog.style.top = header.getBoundingClientRect().height + 'px';
  
    catalogOpenBtn.addEventListener('click', () => {
        catalog.hidden = (catalog.hidden === true) ? false : true;   
    });

    catalogCloseBtn.addEventListener('click', () => {
        catalog.hidden = true;          
    });

};