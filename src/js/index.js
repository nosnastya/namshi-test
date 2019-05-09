import {DOMstrings, renderHome, renderLoader, clearLoader, clearView} from './views/base';
import {actorsList} from "./models/actors";
import {renderActor, goHomeBtn} from "./views/profile";

export let actorsRendered = false;


//Open image preview
export const openImage = () => {
    let modal = document.getElementById(DOMstrings.imagesModal);
    let imgs = document.querySelectorAll(DOMstrings.sliderImages);
    let modalImg = document.querySelector(DOMstrings.modalImage);
    let captionText = document.querySelector(DOMstrings.modalCaption);
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].onclick = function () {
            modal.classList.add('active');
            modalImg.src = this.getAttribute('data-src');
            captionText.innerHTML = this.alt;
        };
    }
    let span = document.querySelector(DOMstrings.btnClose);

    span.onclick = function () {
        modal.classList.add('out');
        setTimeout(function () {

            modal.classList.remove('active');
            modal.classList.remove('out');
        }, 300);

    }
};

//slider events
export const addSlidersEvents = () => {
    const slider = document.querySelector('.gridItems');
    let isDown = false;
    let startX;
    let scrollLeft;
    slider.addEventListener('mousedown', (e) => {
        isDown = true;
        slider.classList.add('active');
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });
    slider.addEventListener('mouseleave', () => {
        isDown = false;
        slider.classList.remove('active');
    });
    slider.addEventListener('mouseup', () => {
        isDown = false;
        slider.classList.remove('active');
    });
    slider.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 3; //scroll-fast
        slider.scrollLeft = scrollLeft - walk;
    });
};


//main UI functions
let UIController = (function () {
    //check which actor was clicked, generate his template and update url

    return {

        stickyHeader: function () {
            let header = document.querySelector(DOMstrings.headSticky);
            if (window.pageYOffset > 72) {
                header.classList.add("fixed-header");
            } else {
                header.classList.remove("fixed-header");
            }
        },
        addRating: function() {
            document.querySelector(DOMstrings.ratingBtnUp).addEventListener('click', function (e) {
                document.querySelector(DOMstrings.ratingBtnUp).classList.toggle('active');
                if ( document.querySelector(DOMstrings.ratingBtnDown).classList.contains('active')) {
                    document.querySelector(DOMstrings.ratingBtnDown).classList.remove('active');
                }            })
        },
        removeRating: function() {
            document.querySelector(DOMstrings.ratingBtnDown).addEventListener('click', function (e) {
                document.querySelector(DOMstrings.ratingBtnDown).classList.toggle('active');
                if ( document.querySelector(DOMstrings.ratingBtnUp).classList.contains('active')) {
                    document.querySelector(DOMstrings.ratingBtnUp).classList.remove('active');
                }
            })
        },
        makeTabs: function () {

            let tabLinks = document.querySelectorAll(DOMstrings.tabLinks);
            let tabContent = document.querySelectorAll(DOMstrings.tabContent);
            renderCast(actorsList, renderCastSlider);
            for (let i = 0; i < tabLinks.length; i++) {
                if (tabLinks[i].classList.contains('active')) {
                    tabContent[i].classList.add('visible');
                }

            }

            for (let i = 0; i < tabLinks.length; i++) {

                document.querySelectorAll(DOMstrings.tabLinks)[i].addEventListener('click', function (e) {

                    for (i = 0; i < tabContent.length; i++) {
                        tabContent[i].classList.remove('visible');
                    }

                    for (i = 0; i < tabLinks.length; i++) {
                        tabLinks[i].classList.remove("active");
                    }

                    let clickedTab = e.target || e.srcElement;

                    clickedTab.classList.add('active');

                    let showContent = clickedTab.getAttribute('href');

                    if (showContent === '#tab2' && !actorsRendered) {
                        renderCast(actorsList, renderCastList);
                        actorsRendered = true;
                        getClickedActorId();
                    }
                    document.querySelector(showContent).classList.add('visible');

                });
            }


        },
        triggerMenu: function () {
            let dropdown = document.querySelector(DOMstrings.dropdownContent);

            document.querySelector(DOMstrings.dropdownTrigger).addEventListener('click', function () {
                dropdown.classList.toggle("show");
            });

        },
        triggerReadMore: function () {
            let hidden = false;
            let hiddenInfo = document.querySelectorAll(DOMstrings.movieReadMore);
            document.getElementById(DOMstrings.movieReadMoreBtn).addEventListener('click', function () {
                document.querySelector(DOMstrings.movieReadMoreBtnText).innerText = hidden ? 'More about this movie' : 'Show less';
                for (let i = 0; i < hiddenInfo.length; i++) {
                    hiddenInfo[i].classList.toggle("show");
                }
                document.querySelector(DOMstrings.movieReadMoreBtnIcon).classList.toggle("top");
                hidden = !hidden;
            })
        },

        init: function () {
            this.makeTabs();
            this.triggerMenu();
            this.triggerReadMore();
            addSlidersEvents();
            this.removeRating();
            this.addRating();
            openImage();
            window.onscroll = function () {
                UIController.stickyHeader()
            };
        }
    }
})();
const renderActorPage = (id) => {
    if (window.location.href.indexOf("actor") > 1) {
        actorsRendered = false;
        renderActorsView(id);
    }
};

//render cast for tab1 or tab2
const renderCast = (cast, func) => {
    let length = cast.length - 1;
    for (let i = length; i >= 0; i--) {
        func(cast[i]);
    }
};

//render cast inside tab2
const renderCastList = id => {
    const markup = `
         <div class="cast-item">
         <a id="${id.id}">
                            <img src="${id.images[0]}" alt="${id.name}">
                            <div  class="cast-item-details">
                                <strong>${id.name}</strong>
                                <span>${id.role}</span>
                            </div>
                            </a>
                        </div>
    `;
    document.querySelector(DOMstrings.castList).insertAdjacentHTML('afterbegin', markup);
};

//render cast inside slider for tab1
const renderCastSlider = id => {
    const markup = `
   <div class="slide">
        <div class="cast-item">
            <a id="${id.id}">
                <img src="${id.images[0]}" alt="${id.name}">
                <div class="cast-item-details">
                    <strong>${id.name}</strong>
                    <span>${id.role}</span>
                </div>
            </a>
        </div>
    </div>
    `;
    document.querySelector(DOMstrings.sliderItemsCast).insertAdjacentHTML('afterbegin', markup);
};

const getClickedActorId = () =>{
    const resultsArr = Array.from(document.querySelectorAll(DOMstrings.actorItem));
    resultsArr.forEach(id => id.addEventListener('click', function (e) {
        let actorsId = id.getAttribute('id');
        renderActorsView(actorsId);
        // const stateObject = {page: "actor-profile"};
        // const pageTitle = "Profile page";
        // const url = `/#actor-${actorsId}`;
        // history.pushState(stateObject, pageTitle, url);
        renderActorPage(actorsId);
    }));
};

//render view for tab1
export const renderHomeView = () => {
    clearView();
    renderLoader();
    setTimeout(() => {
        clearLoader();
        renderHome();
        UIController.init();
        getClickedActorId();
    }, 600)
};

//render view for tab2
export const renderCastView = () => {
    clearView();
    renderLoader();
    setTimeout(() => {
        clearLoader();
        renderHome();
        UIController.init();
        renderCast(actorsList, renderCastList);
        actorsRendered = true;
        document.getElementById('tablink2').click();
        getClickedActorId();
    }, 600);
};

//render view for actor page
const renderActorsView = id => {
    clearView();
    renderLoader();
    setTimeout(() => {
        clearLoader();
        renderActor(id);
        goHomeBtn();
        openImage();
        addSlidersEvents();
    }, 600)
};


window.addEventListener('load', () => {
    renderHomeView();
});
