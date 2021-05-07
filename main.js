const myScript = function () {

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
};

myScript();
