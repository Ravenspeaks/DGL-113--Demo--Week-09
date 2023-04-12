(() => {
  // add a new item to the default (end) of the list
  function addatDefault() {
    const node = document.createElement('li');
    node.innerHTML = prompt('Enter a new item');
    const parent = document.querySelector('#section1 ol');
    parent.appendChild(node);
    countListItems();
  }

  // add a new item to the given position of the list
  function addatPosition() {
    const node = document.createElement('li');
    node.innerHTML = prompt('Enter a new item');
    const count = document.querySelectorAll('#section1 li').length;
    const position = Number(prompt(`Please enter the rank of this item 1~${count}.`));
    const target = document.querySelectorAll('#section1 li')[position - 1]; // 0  based
    target.insertAdjacentElement('beforebegin', node);
    countListItems();
  }

  // Remove the item where the event is occurred
  function removeItem(e) {
    const parent = e.target.parentElement;
    parent.removeChild(e.target);
    countListItems();
  }

  /** add a new item to the end of the list. Afterward, evt handlers attached
   * to elements in #section1 will be disabled.
   */
  function addinnerHTML() {
    const htmlStr =
      '<p>Added using innerHTML of section 1. This will affect event handlers on the elements in section 1.</p>';
    const parent = document.querySelector('#section1');
    parent.innerHTML += htmlStr;
    countListItems();
  }

  function mainWindowLoaded(e) {
    const btnAddDefault = document.querySelectorAll('button')[0];
    const btnAddAnyPos = document.querySelectorAll('button')[1];
    const btnAddInnerHTML = document.querySelectorAll('button')[2];
    const toDoList = document.querySelector('#toDoList');

    btnAddDefault.addEventListener('click', addatDefault);
    btnAddAnyPos.addEventListener('click', addatPosition);
    btnAddInnerHTML.addEventListener('click', addinnerHTML);
    toDoList.addEventListener('click', removeItem);
  }

  // this function finds and shows the number of items in the to-do-list
  function countListItems() {
    const listItems = document.querySelectorAll('#section1 li');
    // alert("The ordered list contains " + listItems.length + " items");
    const span = document.querySelector('#section1 p span');
    span.innerHTML = listItems.length;
  }

  window.addEventListener('load', mainWindowLoaded);
  window.addEventListener('load', countListItems);
})();
