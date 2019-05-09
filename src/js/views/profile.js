import {DOMstrings} from "./base";
import {actorsList} from "../models/actors";
import {renderCastView} from "../index";

export const goHomeBtn = () => {
    document.querySelector(DOMstrings.goHome).addEventListener('click', renderCastView)
};
export const renderActor = (actor) => {
    const markup = `
<header class="profile">
     <nav class="tab">
        <div class="align">
            <a class="tablinks active" >Overview</a>
            <a class="tablinks go-back" ><i class="icon back"></i>
                <span>Go back<br> to cast</span></a>
            <hr/>
        </div>
    </nav>
</header>
<main class="profile">
    <section class="tabcontent high visible"">
        <div class="withPreview slider-container wrapper">
            <main class="grid-item main">
                <div class="gridItems">
                </div>
            </main>
        </div>
    </section>   
    <div class="head-info">
        <h1> ${actorsList[actor - 1].name}</h1>
        <p class="small-text">${actorsList[actor - 1].role}</p>
    </div>
    <section>
        <div class="movie-info reg-text">
            <div>
                 <div class="movie-rating info">
                        <p class="movie-rating_item">
                                ${actorsList[actor - 1].descr}
                        </p>
                 </div>
            </div>
        </div>
    </section>
</main>
     <div id="imagesModal" class="modal">
    <a href="#" class="btn-close" aria-label="Close">
        <span>
            <svg class="close-svg" viewBox="0 0 24 24"><polygon fill="#F3F3F3"
                                                                points="17.8,16.7 16.6,17.9 12,13.3 7.4,17.9 6.2,16.7 10.8,12.1 6.2,7.5 7.4,6.3 12,11 16.6,6.4 17.8,7.6 13.2,12.2"></polygon></svg>
        </span>
    </a>
    <img class="modal-image"/>
    <div class="modal-caption"></div>
</div>        
`;

    DOMstrings.mainContainer.innerHTML = markup;
    let images = actorsList[actor - 1].images.length;
    for (let i = images - 1; i >= 0; i--) {
        let img = actorsList[actor - 1].images[i];
        document.querySelector(DOMstrings.sliderItems).insertAdjacentHTML('afterbegin', `
        <span class="slide"><img src="${img}" data-src="${img}"/></span>`);
    }


};

