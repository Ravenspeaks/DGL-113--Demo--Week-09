(() => {
  /**
   * This JS file is based on the textbook listing 13.5.
   * It shows how to make a menu (table of content) based on the existing
   * page content. Pay attention to the following:
   * 1. Use DOM query to extract existing items (h2s)
   * 2. Use the extracted data to create a UL and its li items and hyperlinks
   * 3. Mark the targets for navigation
   */
  function makeMenu () {
    // get all the H2 heading elements
    const h2s = document.getElementsByTagName('h2');
    // create a new page element for the menu
    const menu = document.createElement('div');
    // create a UL element and append it to the menu div
    const menuUl = document.createElement('ul');
    menuUl.setAttribute('class', 'list-group');
    menu.appendChild(menuUl);
    // cycle through h2 headings
    for (let i = 0; i < h2s.length; i++) {
      // get text node of h2 element
      const itemText = h2s[i].childNodes[0].nodeValue;
      // add a list item
      const menuLi = document.createElement('li');
      menuLi.setAttribute('class', 'list-group-item');
      // add it to the menu list
      menuUl.appendChild(menuLi);
      // the list item contains a link
      let menuLiA = document.createElement('a');
      menuLiA = menuLi.appendChild(menuLiA);
      // set the href of the link
      menuLiA.setAttribute('href', '#item' + i);
      // set the text of the link
      const menuText = document.createTextNode(itemText);
      menuLiA.appendChild(menuText);

      // create matching anchor element
      const anc = document.createElement('a');
      anc.setAttribute('name', 'item' + i);
      // add anchor before the heading
      document.getElementById('section1').insertBefore(anc, h2s[i]);
      // h2s[i].setAttribute("id", "item" + i);
    }
    // add menu to the top of the section
    document.querySelector('h1').parentElement.appendChild(menu);
  }

  function mainWindowLoaded (e) {
    const button = document.querySelector('button');
    button.addEventListener('click', makeMenu);
  }

  window.addEventListener('load', mainWindowLoaded);
})();
