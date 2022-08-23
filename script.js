'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
let showModal = document.querySelectorAll('.show-modal');
let btnClose = document.querySelector('.close-modal');

function openModal() {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

function hideModal() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

for (let i = 0; i < showModal.length; i++) {
    showModal[i].addEventListener('click', openModal)
}

btnClose.addEventListener('click', hideModal);
overlay.addEventListener('click', hideModal);

document.addEventListener('keydown', function(e) {
    console.log(e.key);
    
    if (e.key === 'Escape' && !modal.classList.contains('hidden') && !overlay.classList.contains('hidden')) {
        hideModal();
    }

})