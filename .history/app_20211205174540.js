const add = document.querySelector('.plus-btn');
const inputText = document.querySelector('#item-txt');
const list = document.querySelector('#items-list');

add.addEventListener('click', (e) => {
    
    // Check that there is an input text
    if (inputText.value !== "") {
        e.preventDefault();

        // Create li
        const newLi = document.createElement('li');
        newLi.innerHTML = inputText.value;
        list.app
    }
});