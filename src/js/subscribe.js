const form = document.querySelector('.subscribe-form');
if (form) {
  const input = form.querySelector('#subscribe-email');
  const validMsg = form.querySelector('.text-valid');
  const invalidMsg = form.querySelector('.text-invalid');

  if (input && validMsg && invalidMsg) {
    const hideMsgs = () => {
      validMsg.style.display = 'none';
      invalidMsg.style.display = 'none';
    };

    hideMsgs();

    input.addEventListener('input', hideMsgs);

    form.addEventListener('submit', e => {
      e.preventDefault();
      hideMsgs();

      if (!input.value.trim()) {
        input.reportValidity();
        input.focus();
        return;
      }

      if (input.checkValidity()) {
        validMsg.style.display = 'block';
        form.reset();
        input.blur();
      } else {
        invalidMsg.style.display = 'block';
        input.focus();
      }
    });
  }
}
