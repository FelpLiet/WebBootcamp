const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const product = document.querySelector('product').value;
    const quantity = document.querySelector('quantity').value;
    const list = document.querySelector('list');
    const item = document.createElement('li');
    item.textContent = `${quantity} ${product}`;
    list.appendChild(item);
    form.reset();
    });

const input = document.querySelector('input[type="text"]');
input.addEventListener('input', (event) => {
    const h1 = document.querySelector('h1');
    h1.innerText = `Welcome, ${input.value}`;
    if(input.value === '') {
        h1.innerText = 'Enter Your Username';
    }
});