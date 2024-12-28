const inputNameEl = document.querySelector('input');
const outputNaneEl = document.querySelector('span');

inputNameEl.addEventListener('input', () => {
    const fileTrimValue = inputNameEl.value.trim();
    outputNaneEl.textContent = fileTrimValue ? fileTrimValue : 'Anonymous';
});