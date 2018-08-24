export default function(catalogElements) {
   
    const {catalog, controlBar, catalogOpenBtn, catalogCloseBtn} = catalogElements;

    catalog.style.top = controlBar.getBoundingClientRect().height + 'px';
  
    catalogOpenBtn.addEventListener('click', () => {
        catalog.hidden = (catalog.hidden === true) ? false : true;   
    });

    catalogCloseBtn.addEventListener('click', () => {
        catalog.hidden = true;          
    });

}