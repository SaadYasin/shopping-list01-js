const inputText = document.querySelector('#txt');
const myButton = document.querySelector('#btn-add');
const list = document.querySelector('.container ul');

myButton.addEventListener('click', (e) => {
    if (inputText.value !== "") {
        e.preventDefault();

        // Create li
        const myLi = document.createElement('li');
        myLi.innerHTML = inputText.value;
        list.appendChild(myLi);


// const addBtn = document.querySelector('#btn');
// const inputText = document.querySelector('#item-txt');
// const list = document.querySelector('.container ul');

// addBtn.addEventListener('click', (e) => {
    
//     // Check that there is an input text
//     if (inputText.value !== "") {
//         e.preventDefault();

//         // Create li
//         const newLi = document.createElement('li');
//         newLi.innerHTML = inputText.value;
//         list.appendChild(newLi);
//     }
// });