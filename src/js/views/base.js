import {home} from "./home";

// Exporting DOM Elements

export const DOMstrings = {
    mainContainer: document.getElementById('app'),
    mainContainerActor: document.getElementById('actor'),
    castList: '.cast-list',
    actorItem: '.cast-item a',
    tabContent: '.tabcontent',
    tabLinks: '.tablinks',
    headSticky: '.header',
    dropdownTrigger: '.dropdown-trigger',
    dropdownContent: '.dropdown-content',
    sliderItems: '.gridItems',
    sliderItemsCast: '.castItems .gridItems',
    sliderImages: '.slide img',
    imagesModal: 'imagesModal',
    modalContent: '.modal-content',
    modalCaption: '.modal-caption',
    modalImage: '.modal-image',
    btnClose: '.btn-close',
    movieReadMoreBtn: 'movieReadMore',
    movieReadMoreBtnText: '.movieReadMoreInner',
    movieReadMoreBtnIcon: '.icon',
    movieReadMore: '.movie-more',
    castProfile: '.cast-profile',
    goHome: '.go-back'
};

export const elementStrings = {
    loader: 'loader'
};

// Render the loader
export const renderLoader = () => {
    const loader = `
  <div class="${elementStrings.loader}">
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
  </div>
  `;
    DOMstrings.mainContainer.insertAdjacentHTML('afterbegin', loader);
};

// Clear the loader
export const clearLoader = () => {
    const loader = document.querySelector(`.${elementStrings.loader}`);
    if (loader) {
        loader.classList.add('hide');
        loader.parentElement.removeChild(loader);
    }
};

// Home
export const renderHome = () => {
    const markup = home;
    DOMstrings.mainContainer.insertAdjacentHTML('afterbegin', markup);

};
// Clear view
export const clearView = () => {
    const markup = '';
    DOMstrings.mainContainer.innerHTML = markup;
};
