import './uikit';
import catalogToggler from './catalog';
import menuToggler from './menu';
import searchBarToggler from './search-bar';
import counter from './counter';
import purchase from './purchase';
import './cartMove';

//search-bar toggler
const searchToggler = document.querySelector('.js-search-btn');
const searchBar = document.querySelector('.js-search-bar');
const searchClose = document.querySelector('.js-search-close');
const searchInput = document.querySelector('.js-search-input');

if (searchToggler && searchBar && searchClose && searchInput) {
    searchBarToggler(searchToggler, searchBar, searchClose, searchInput);
}


//catalog toggler
const catalogElements = {
    catalog: document.querySelector('.catalog-full'),
    header: document.querySelector('.header'),
    catalogBar: document.querySelector('.control-bar'),
    catalogOpenBtn: document.querySelector('.js-catalog-btn'),
    catalogCloseBtn: document.querySelector('.js-catalog-close')
};

catalogToggler(catalogElements);


//menu toggler
const menuBtn = document.querySelector('.js-menu-btn');
const menu = document.querySelector('.nav');

menuToggler(menuBtn, menu);


//counters
const counterMinusBtn = document.querySelectorAll('.js-counter-minus');
const counterPlusBtn = document.querySelectorAll('.js-counter-plus');
const counterInput = document.querySelectorAll('.js-counter-input');

counter(counterMinusBtn, counterPlusBtn, counterInput);


//purchase page
const submitCartBtn = document.querySelector('.js-submit-cart');
const cart = document.querySelector('.js-cart');
const ordering = document.querySelector('.js-ordering');
const orderingInfo = document.querySelector('.js-ordering-info');
const btnToCart = document.querySelector('.js-to-cart');

if (submitCartBtn && cart && ordering && orderingInfo && btnToCart) {
    purchase(submitCartBtn, cart, ordering, orderingInfo, btnToCart);
}
