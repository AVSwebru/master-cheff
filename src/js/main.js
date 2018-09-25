import './uikit';
import './sprite';

//search-bar toggler
import searchBarToggler from './search-bar';

const searchToggler = document.querySelector('.js-search-btn');
const searchBar = document.querySelector('.js-search-bar');
const searchClose = document.querySelector('.js-search-close');

if (searchToggler && searchBar && searchClose) {
    searchBarToggler(searchToggler, searchBar, searchClose);
}


//catalog toggler
import catalogToggler from './catalog';

const catalogElements = {
    catalog: document.querySelector('.catalog-full'),
    header: document.querySelector('.header'),
    catalogOpenBtn: document.querySelector('.js-catalog-btn'),
    catalogCloseBtn: document.querySelector('.js-catalog-close')
};

catalogToggler(catalogElements);


//menu toggler
import menuToggler from './menu';

const menuBtn = document.querySelector('.js-menu-btn');
const menu = document.querySelector('.nav');

menuToggler(menuBtn, menu);


//counters
import counter from './counter';

const counterMinusBtn = document.querySelectorAll('.js-counter-minus');
const counterPlusBtn = document.querySelectorAll('.js-counter-plus');
const counterInput = document.querySelectorAll('.js-counter-input');

counter(counterMinusBtn, counterPlusBtn, counterInput);

//purchase page
import purchase from './purchase';

const submitCartBtn = document.querySelector('.js-submit-cart');
const cart = document.querySelector('.js-cart');
const ordering = document.querySelector('.js-ordering');

if (submitCartBtn && cart && ordering) {
    purchase(submitCartBtn, cart, ordering);
}
