const formEl = document.querySelector('.login-form');
formEl.addEventListener('submit', event => {
event.preventDefault();

const {email, password} = formEl.elements;

if (email.value.trim() === '' || password.value.trim() === '') {
    alert('All form  must be filled in');
    return;
}

const formData = {
    [formEl.elements.email.name]: formEl.elements.email.value,
    [formEl.elements.password.name]: formEl.elements.password.value,
};

    console.log(formData);

    formEl.reset();

});
