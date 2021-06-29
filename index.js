const addButton = document.querySelector('.add');
const newTaskInput = document.querySelector('.toDoInput');
const toDoList = document.querySelector('ul');
let checkBoxState = false;

function createRemoveButton(listItemElement) {
    let removeButton = document.createElement('button');
    removeButton.classList.add('remove');
    removeButton.textContent = "Remove";

    listItemElement.appendChild(removeButton);
    
    removeButton.addEventListener('click', function() {
        listItemElement.remove();
    });
};

function createCheckBox(listItemElement) {
    let checkBox = document.createElement('input');
    checkBox.classList.add('checkBoxInput');
    checkBox.setAttribute("type", "checkbox");

    listItemElement.appendChild(checkBox);

    checkBox.addEventListener('click', function() {
        listItemElement.style.textDecoration = "line-through";
        checkBoxState = true;
    });

};

function createListItem(task) {
    let li = document.createElement('li');
    li.textContent = task;
    toDoList.appendChild(li);
    createRemoveButton(li);
    createCheckBox(li);
};

addButton.addEventListener('click', function() {
    createListItem(newTaskInput.value);
    newTaskInput.value = '';
});


