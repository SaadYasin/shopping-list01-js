// Selectors
const listInput = document.querySelector('.list-input')
const addBtn = document.querySelector('.btn-add-item');
const shoppingList = document.querySelector('.shopping-list');

// Event Listeners
listInput.addEventListener('click', addItem);

// Functions
function addItem(e) {
    
    // Prevent default behavior - form submitting
    e.preventDefault();

    // Create List DIV
    const listDiv = document.createElement('div');
    listDiv.classList.add('list');

    // Create LI
    const newLi = document.createElement('li');
    newLi.innerHTML = 'hey';
    newLi.classList.add('item');

    listDiv.appendChild(newLi);

    // DONE button
    const doneBtn = document.createElement('button');
    doneBtn.innerHTML = '<i class="far fa-trash-alt"></i>'
    doneBtn
}

