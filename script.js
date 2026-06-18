/* DRAWER */

const menuBtn =
document.getElementById('menuBtn');

const drawer =
document.getElementById('drawer');

const overlay =
document.getElementById('overlay');

menuBtn.addEventListener('click', () => {

    drawer.classList.toggle('active');

    overlay.style.display =
        drawer.classList.contains('active')
        ? 'block'
        : 'none';

});

overlay.addEventListener('click', () => {

    drawer.classList.remove('active');

    overlay.style.display = 'none';

});

/* DROPDOWN */

const appsBtn =
document.getElementById('appsBtn');

const dropdownMenu =
document.getElementById('dropdownMenu');

appsBtn.addEventListener('click', () => {

    dropdownMenu.style.display =
        dropdownMenu.style.display === 'block'
        ? 'none'
        : 'block';

});

/* TABS */

const tabButtons =
document.querySelectorAll('.tab-btn');

tabButtons.forEach(button => {

    button.addEventListener('click', () => {

        tabButtons.forEach(btn => {

            btn.classList.remove('active');

        });

        button.classList.add('active');

    });

});

/* DELETE + UNDO */

let deletedCard = null;
let deletedCardParent = null;

function deleteCard(button){

    deletedCard =
        button.closest('.card');

    deletedCardParent =
        deletedCard.parentNode;

    deletedCard.remove();

    document.getElementById('undoBox')
    .style.display = 'flex';

}

function undoDelete(){

    if(deletedCard){

        deletedCardParent
        .appendChild(deletedCard);

        deletedCard = null;

        document.getElementById('undoBox')
        .style.display = 'none';

    }

}
