window.onscroll = function () {
    scrollFunction()
};

/*function openNav(x) {
    x.classList.toggle('active');
    document.getElementById("mySidenav").style.width = "100%";
    document.getElementById("mySidenav").style.height = "50%";
}

function closeNav(x) {
    document.getElementById("mySidenav").style.width = "0";
    x.classList.toggle('close')
}*/

const enterNavButton = document.getElementById('enterBtn');
const containerMainPage = document.getElementById('card-container');
const links = document.querySelectorAll('a');
const cards = document.querySelectorAll('.card-inner');
let cardArray = Array.from(cards);
let linksArray = Array.from(links);

//svg image animation
let rects = Array.from(document.getElementsByClassName('rec'));

let sortedRects = rects.sort((a, b) => a.id - b.id);
console.log(sortedRects);

sortedRects.forEach((rect, i) => {
    rect.style.animationDelay = i * 200 + 'ms';
    rect.classList.add('animate');

    console.log('runs', rect);
});

// Enter btn scroll
enterNavButton.onclick = function () {
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


let observedElements = document.querySelectorAll('.card-visual--front');

const options = {
    threshold: 0.5
}

const inViewCallback = entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('scrolled');
        } else {

        }
    });
}

let observer = new IntersectionObserver(inViewCallback, options);

observedElements.forEach(element => {
    observer.observe(element) // run the observer
});


function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// CardSlide
let indexView = 0;
slideShow(indexView);

function show(n) { // next & prev btn
    event.stopPropagation();
    slideShow(indexView += n);
}

function slideShow() {

    let i;
    let slides = document.getElementsByClassName('imageSlides');
    let slidesArray = Array.from(slides);

    for (i = 0; i < slidesArray.length; i++) {
        slides[i].style.display = 'none';
    }
    slidesArray[Math.abs(indexView % slidesArray.length)].style.display = "flex";
}
