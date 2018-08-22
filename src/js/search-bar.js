export default function(searchElements) {

    const {searchToggler, searchBar, searchClose} = searchElements;

    searchBar.opened = false;

    searchToggler.addEventListener('click', () => {
        (!searchBar.opened) ? showSearchBar(searchBar) : hideSearchBar(searchBar);
        searchBar.opened = !searchBar.opened;
    });

    searchClose.addEventListener('click', () => {
        hideSearchBar(searchBar);
        searchBar.opened = false;
    });

    function hideSearchBar(searchBar) {
        searchBar.classList.remove('search-bar_slide-in');
        searchBar.classList.add('search-bar_slide-out');
    }
    
    function showSearchBar(searchBar) {
        searchBar.classList.remove('search-bar_slide-out');
        searchBar.classList.add('search-bar_slide-in');
    }
    
}

