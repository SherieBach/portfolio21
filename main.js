const myScript = function(){

const cards = document.querySelectorAll('.card-inner');
    cards.forEach((cards) => {
        cards.addEventListener('click', () => {
            cards.classList.toggle('is-flipped')
    });



});






};

myScript();
