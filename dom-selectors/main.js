const button = document.getElementById('addItem');
const input = document.getElementById('userInput');
const ul = document.getElementById('taskList');
const items = document.querySelectorAll('li');

function inputLength() {
  return input.value.length;
}

function deleteItem(event) {
  // console.log(event.target);
  const delItem = event.target.parentNode;
  // console.log('delitem: ', delItem);
  let confirm = prompt('Do you want to delete this item? Y/N');

  if (confirm !== 'y' && confirm !== 'n') {
    confirm = prompt('Please enter Y or N.');
  } else if (confirm === 'y') {
    delItem.parentNode.removeChild(delItem);
  } else {
    return false;
  }
  return false;
}

function markDone(event) {
  const doneClass = 'done';
  // console.log(event.target);
  event.target.classList.toggle(doneClass);
}

function createDeleteButton(item) {
  const deleteButton = document.createElement('button');
  const deleteText = document.createTextNode('Delete!');
  deleteButton.appendChild(deleteText);
  deleteButton.addEventListener('click', deleteItem);
  item.appendChild(deleteButton);
  return item;
}

function createListElement() {
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  li.addEventListener('click', markDone);
  createDeleteButton(li);

  input.value = '';
}

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}
function addListAfterKeyPress(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
}

for (let i = 0; i < items.length; i += 1) {
  items[i].addEventListener('click', markDone);
}

button.addEventListener('click', addListAfterClick);
input.addEventListener('keypress', addListAfterKeyPress);
