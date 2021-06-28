window.onscroll = function () {
    scrollFunction()
};


const cards = document.querySelectorAll('.card-inner');
let cardArray = Array.from(cards);
console.log(cardArray, 'hej');
cardArray.forEach((card) => {
    card.addEventListener('click', () => {
        card.classList.toggle('is-flipped')
        console.log('after toggle');
        // let otherCards = cardArray.filter( activeCard => activeCard.id !== card.id );
        // console.log(otherCards);
        // otherCards.forEach((notClicked) => {
        //     notClicked.classList.remove('is-flipped');
        // });
    });

});

/*    let mouseCursor = document.querySelector('#cursor-letter-ark');

    window.addEventListener('mousemove', cursor);

    function cursor(e) {
        mouseCursor.style.top = e.pageY + 'px';
        mouseCursor.style.left = e.pageX + 'px';
    }*/


// Scroll to top button
backToTopBtn = document.getElementById("toTopButton");

function scrollFunction() {
    if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 500) {
        backToTopBtn.style.display = "block";
        console.log("block");
    } else {
        backToTopBtn.style.display = "none";
        console.log("none");

    }
}
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// CAROUSEL VIEW

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
