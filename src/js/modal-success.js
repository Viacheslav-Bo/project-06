const form = document.querySelector('form');
const modal = document.getElementById('modal');
const closeBtn = modal.querySelector('.btn-close');
const closeActionBtn = modal.querySelector('.modal-btn');

function openModal() {
  modal.classList.add('subscription-open');
}

function closeModal() {
  modal.classList.remove('subscription-open');
}

closeBtn.addEventListener('click', e => {
  e.stopPropagation();
  closeModal();
});
closeActionBtn.addEventListener('click', e => {
  e.stopPropagation();
  closeModal();
});
modal.addEventListener('click', e => {
  if (e.target.classList.contains('modal-section')) {
    closeModal();
  }
});

form.addEventListener('submit', e => {
  e.preventDefault();
  openModal();
});
