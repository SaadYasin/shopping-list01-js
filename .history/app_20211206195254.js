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

    // Create a DIV to contain the new List of text field & two icons (trash & done)
    const listDiv = document.createElement('div');
    listDiv.classList.add('list');

    // Create the LI (list of text field & two icons (trash & done))
    const newLi = document.createElement('li');     // Create an 'li' tag
    newLi.innerText = listInput.value;                        // Dummy text just for test
    newLi.classList.add('item');                    // Giving the 'li' tag a class name

    listDiv.appendChild(newLi);                     // Appending the newly created 'li' tag to the above newly created 'div'

    // DONE button
    const doneBtn = document.createElement('button');
    doneBtn.innerHTML = '<i class="fas fa-check"></i>'
    doneBtn.classList.add('done-btn');              // Give it a class name
    listDiv.appendChild(doneBtn);                   // Append it to the newly created 'div'

    // TRASH button
    const trash = document.createElement('button');
    trash.innerHTML = '<i class="far fa-trash-alt"></i>';
    trash.classList.add('trash-btn');               // Give it a class name
    listDiv.appendChild(trash);                     // Append it to the newly created 'div'

    // Append to list DIV (existing 'ul' block)
    itemsList.appendChild(listDiv);
}

