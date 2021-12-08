// Selectors
const listInput = document.querySelector('.list-input')
const addBtn = document.querySelector('.btn-add-item');
const itemsList = document.querySelector('#items-list');

// Event Listeners
addBtn.addEventListener('click', addItem);

// Functions
function addItem(e) {
    
    // Prevent default behavior - form submitting
    e.preventDefault();

    // Create a DIV to contain the new List of text field & two 
    const listDiv = document.createElement('div');
    listDiv.classList.add('list');

    // Create LI
    const newLi = document.createElement('li');
    newLi.innerText = 'hey';
    newLi.classList.add('item');

    listDiv.appendChild(newLi);

    // DONE button
    const doneBtn = document.createElement('button');
    doneBtn.innerHTML = '<i class="fas fa-check"></i>'
    doneBtn.classList.add('done-btn');
    listDiv.appendChild(doneBtn);

    // TRASH button
    const trash = document.createElement('button');
    trash.innerHTML = '<i class="far fa-trash-alt"></i>';
    trash.classList.add('trash-btn');
    listDiv.appendChild(trash);

    // Append to list DIV
    itemsList.appendChild(listDiv);
}

