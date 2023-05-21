const input = document.getElementById('validation-input');

input.addEventListener('blur', () => {
    const expectedLength = Number(input.getAttribute('data-length'));
    const enteredValue = input.value.length;

    if (expectedLength === enteredValue) {
        input.classList.remove('invalid');
        input.classList.add('valid');
    } else {
        input.classList.remove('valid');
        input.classList.add('invalid');
    }
})