const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', function() {
    const name = nameInput.value;
    nameOutput.textContent = name ? name : 'Anonymous';
  });