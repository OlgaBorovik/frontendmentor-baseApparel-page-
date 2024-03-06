const form = document.querySelector(".section__form");
const input = document.querySelector('.form__input');
const submitBtn = document.querySelector('.form__btn');
const errorIcon = document.querySelector('.error-icon')
const errorText = document.querySelector('.attention')



form.addEventListener('submit', validateEmail)
submitBtn.addEventListener('click', validateEmail)

function validateEmail(e) {
    e.preventDefault()
    const inputValue = input.value.trim()

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputValue))
  {
    errorIcon.classList.add('hidden')
    errorText.classList.add('hidden')
    
  } else {
    errorIcon.classList.remove('hidden')
    errorText.classList.remove('hidden')
    }
}

