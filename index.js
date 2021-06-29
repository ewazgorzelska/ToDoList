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
        listItemElement.firstChild.style.textDecoration = "line-through";
        checkBoxState = true;
    });
};

function createRequest(listItemElement) {
    let xhr = new XMLHttpRequest();
    let url = 'submit.php';
    const data = listItemElement.firstChild.textContent;

    xhr.open("POST", url, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(data);
};

function createSendButton(listItemElement) {
    const sendButton = document.createElement('button');
    sendButton.classList.add = 'send';
    listItemElement.appendChild(sendButton);
    sendButton.textContent = 'Send';

    sendButton.addEventListener('click', createRequest(listItemElement));
};

function createListItem(task) {
    let li = document.createElement('li');
    toDoList.appendChild(li);

    let contentDiv = document.createElement('div');
    li.appendChild(contentDiv);
    contentDiv.textContent = task;
    createRemoveButton(li);
    createCheckBox(li);
    createSendButton(li);
};

addButton.addEventListener('click', function() {
    createListItem(newTaskInput.value);
    newTaskInput.value = '';
});


