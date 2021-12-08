const add = document.querySelector('.plus-btn');
const inputText = document.getElementById('item-txt').value;

add.addEventListener('click', () => {
    console.log(inputText);
});