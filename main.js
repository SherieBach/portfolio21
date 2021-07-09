window.onscroll = function () {
    scrollFunction()
};

function openNav(x) {
    x.classList.toggle('active');
    document.getElementById("mySidenav").style.width = "100%";
    document.getElementById("mySidenav").style.height = "50%";
}

function closeNav(x) {
    document.getElementById("mySidenav").style.width = "0";
    x.classList.toggle('close')
}

const enterNavButton = document.getElementById('enterBtn');
const containerMainPage = document.getElementById('card-container');
const links = document.querySelectorAll('a');
const cards = document.querySelectorAll('.card-inner');
let cardArray = Array.from(cards);
let linksArray = Array.from(links);

// Enter btn scroll
enterNavButton.onclick = function (){
     containerMainPage.scrollIntoView();
};

// Prevent flip animation on links
linksArray.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.stopPropagation();
    });
});

//Card flip animation
    cardArray.forEach((card) => {
        card.addEventListener('click', () => {
            card.classList.toggle('is-flipped')
        });
    });

// Scroll to top arrow button
backToTopBtn = document.getElementById("toTopButton");

function scrollFunction() {
    if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 500) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";

    }
}
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// Carousel
let indexView = 0;
let t = 0;
slideShow(indexView);


function show(n) {
    event.stopPropagation();
    slideShow(indexView += n);
}

function slideShow(n) {

    let i;
    let slides = document.getElementsByClassName('imageSlides');


    if (n > slides.length) {
        indexView = 1;
    }
    if (n < 1) {
        indexView = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
        slides[indexView - 1].style.display = "flex";

}
