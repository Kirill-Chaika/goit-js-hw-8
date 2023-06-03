
import throttle from 'lodash.throttle'

const form = document.querySelector('.feedback-form');
const email = document.querySelector('.feedback-form input');
const message = document.querySelector('.feedback-form textarea');
const STORAGE_KEY = 'feedback-form-state'

form.addEventListener('submit', onSubmitForm);
form.addEventListener('input', throttle(onFormData, 500));

// const formData = {};

function onFormData(e) {
  // formData[e.target.name] = e.target.value;
  const formDate = {
    email: email.value,
    message: message.value,
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formDate));
}

function onSubmitForm(evt) {
  console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
  evt.preventDefault();
  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function populateTextarea() {
  const data = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (data) {
    email.value = data.email;
    message.value = data.message;
  }
};
populateTextarea();
