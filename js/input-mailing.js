const form = document.querySelector('.mailing__form');
let formData = JSON.parse(localStorage.getItem('mailing')) || {};

fillFormTextarea();

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', onFormInput);

function onFormInput(e) {
  formData[e.target.name] = e.target.value.trim();

  localStorage.setItem('mailing', JSON.stringify(formData));
}

function onFormSubmit(e) {
  e.preventDefault();

  if (form.mail.value === '') {
    return alert('Введіть будь ласка свій email');
  }
  // console.log(form.value);

  e.currentTarget.reset();

  console.log(formData);
  formData = {};

  localStorage.removeItem('mailing');
}

function fillFormTextarea() {
  const saveMessage = JSON.parse(localStorage.getItem('mailing'));

  if (saveMessage) {
    form.value = saveMessage.email || '';
  }
}
