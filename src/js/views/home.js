import favicon from '../../img/favicon.png';
import posterPreview1 from '../../img/poster-preview-1.jpg';
import posterPreview2 from '../../img/poster-preview-2.jpg';
import posterPreview3 from '../../img/poster-preview-3.jpg';
import posterPreview4 from '../../img/poster-preview-4.jpg';
import posterPreview5 from '../../img/poster-preview-5.jpg';
import posterPreview6 from '../../img/poster-preview-6.jpg';
import poster1 from '../../img/poster-1.jpg';
import poster2 from '../../img/poster-2.jpg';
import poster3 from '../../img/poster-3.jpg';
import poster4 from '../../img/poster-4.jpg';
import poster5 from '../../img/poster-5.jpg';
import poster6 from '../../img/poster-6.jpg';
export const home = `
<header class="header">
        <div class="head">
            <div class="head-info">
                <h1>Fight Club</h1>
                <p class="small-text">1999 ‧ Drama/Black-comedy ‧ 2h 31m</p>
            </div>
            <div class="head-menu">
                <button class="dropdown-trigger corner">
                    <i class="ico menu-icon"></i>
                </button>
                <div class="dropdown-content">
                    <ul>
                        <li class="dropdown-item">
                            <a href="#">
                                <i class="ico share"></i>
                                <span>Share</span>
                            </a>
                        </li>
                        <li class="dropdown-item">
                            <a href="#">
                                <i class="ico feedback"></i>
                                <span>Send feedback</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <nav class="head-sticky tab">
            <div class="align">
                <a class="tablinks active" id="tablink1" href="#tab1">Overview</a>
                <a class="tablinks" id="tablink2" href="#tab2">Cast</a>
                <hr/>
            </div>
        </nav>
    </header>
    <main>
        <!---Tab 1- Movie Info--->
        <section class="tabcontent" id="tab1">
            <div class="slider-container wrapper withPreview">
                <main class="grid-item main">
                    <div class="gridItems">
                        <div class="slide">
                            <img src="${posterPreview1}" data-src="${poster1}"
                                 alt="Poster 1">
                        </div>
                        <div class="slide">
                            <img src="${posterPreview2}" data-src="${poster2}"
                                 alt="Poster 2">

                        </div>
                        <div class="slide">
                            <img src="${posterPreview3}" data-src="${poster3}"
                                 alt="Poster 3">
                        </div>
                        <div class="slide">
                            <img src="${posterPreview4}" data-src="${poster4}"
                                 alt="Poster 4">
                        </div>
                        <div class="slide">
                            <img src="${posterPreview5}" data-src="${poster5}"
                                 alt="Poster 5">
                        </div>
                        <div class="slide">
                            <img src="${posterPreview6}" data-src="${poster6}"
                                 alt="Poster 6">

                        </div>
                    </div>
                </main>
            </div>
            <div class="movie-info reg-text">
                <div>
                    <div class="movie-rating stats">
                        <a class="movie-rating_item" role="link" href="https://www.imdb.com/title/tt0137523/">
                            <span>8.8/10</span>
                            <span>IMDb</span></a>
                        <a class="movie-rating_item" role="link" href="https://www.rottentomatoes.com/m/fight_club">
                            <span>79%</span>
                            <span>Rotten Tomatoes</span>
                        </a>
                    </div>
                    <div class="movie-rating google">
                        <div class="movie-rating_item">
                            <p>94% liked this film</p>
                            <div class="grey-text">Google users</div>
                        </div>
                        <div class="movie-rating_item icons">
                        <button class="movie-rating_google-icon up">
                            <svg class="y3x7uc TfceZe" aria-label="Like" viewBox="0 0 24 24">
                                <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z"></path>
                            </svg>

                        </button>
                            <button class="movie-rating_google-icon down">
                            <svg class="y3x7uc" aria-label="Dislike" viewBox="0 0 24 24">
                                <path d="M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v1.91l.01.01L1 14c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z"></path>
                            </svg>
                        </button>
                        </div>
                    </div>
                    <div class="movie-rating info">
                        <p class="movie-rating_item">
                            A depressed man (Edward Norton) suffering from insomnia meets a strange soap salesman named
                            Tyler Durden (Brad Pitt) and soon finds himself living in his squalid house after his
                            perfect
                            apartment is destroyed.The two bored men form an underground club with strict rules and
                            fight
                            other men who are fed up with their mundane lives.
                            <span class="movie-more"> Their perfect partnership frays when Marla
                        (Helena Bonham Carter), a fellow support group crasher, attracts Tyler's attention.</span>

                        </p>
                        <div class="movie-rating_item add">
                            <div class="movie-more">
                                <span>Initial release: </span>
                                <span class="grey-text">September 21, 1999 (USA)</span>
                            </div>
                            <div>
                                <span>Director: </span>
                                <span class="grey-text">David Fincher</span>
                            </div>
                            <div class="movie-more ">
                                <span>Screenplay: </span>
                                <span class="grey-text">Jim Uhls</span>
                            </div>
                            <div class="movie-more ">
                                <span>Box office: </span>
                                <span class="grey-text">100.9 million USD</span>
                            </div>
                        </div>
                    </div>
                    <div class="movie-rating_item">
                        <button id="movieReadMore">
                            <i class="icon top"></i>
                            <span class="movieReadMoreInner">More about this movie</span>
                        </button>
                    </div>

                </div>
            </div>
              <div class="with slider-container wrapper castItems">
                <main class="grid-item main">
                    <div class="gridItems">
                      
                    </div>
                </main>
            </div>
        </section>
        <!---Tab 2- CAST --->
        <section class="tabcontent" id="tab2">
            <div class="cast-list">

            </div>
        </section>
    </main>
    <!---Modal for images --->
    <div id="imagesModal" class="modal">
        <a href="#" class="btn-close" aria-label="Close">
        <span>
            <svg class="close-svg" viewBox="0 0 24 24"><polygon fill="#F3F3F3"
                                                                points="17.8,16.7 16.6,17.9 12,13.3 7.4,17.9 6.2,16.7 10.8,12.1 6.2,7.5 7.4,6.3 12,11 16.6,6.4 17.8,7.6 13.2,12.2"></polygon></svg>
        </span>
        </a>
        <img class="modal-image"/>
        <div class="modal-caption"></div>
    </div>`;
