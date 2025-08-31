const modal = document.getElementById('modal');
const closeBtn = modal.querySelector('.btn-close');
const closeActionBtn = modal.querySelector('.modal-btn');

// Функція для закриття модального вікна
function closeModal() {
  modal.classList.remove('subscription-open');
  modal.style.display = 'none';
}

// Закриття по кнопці "х"
closeBtn.addEventListener('click', closeModal);

// Закриття по кнопці "Close"
closeActionBtn.addEventListener('click', closeModal);

// Закриття по кліку на фон (крім контенту)
modal.addEventListener('click', e => {
  if (e.target === modal) closeModal();
});

// Відкрити модалку з JS
function openModal() {
  modal.classList.add('subscription-open');
  modal.style.display = 'flex';
}
openModal();
