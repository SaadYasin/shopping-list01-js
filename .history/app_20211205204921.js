const addBtn = document.querySelector('#btn');
const inputText = document.querySelector('#item-txt');
const list = document.querySelector('.container ul');
const listLine = document.querySelector('.list-line');

addBtn.addEventListener('click', (e) => {
    
    // Check that there is an input text
    if (inputText.value !== "") {
        e.preventDefault();

        // Create li
        const newLi = document.createElement('li');
        newLi.innerHTML = inputText.value;
        list.appendChild(newLi);

        // Create delete button
        const trashBtn = document.getElementsByClassName
        trashBtn.innerHTML = 'x';
        newLi.appendChild(trashBtn);
        
    }
});