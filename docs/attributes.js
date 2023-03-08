(() => {
  // get and show the attribute of an element
  function getAttribute () {
    const sect1Ol = document.querySelector('section ol'); // get the section1's ol
    const sectOlId = sect1Ol.getAttribute('id');
    sect1Ol.innerHTML += `<li>The ol's id is: ${sectOlId}</li>`;
  }

  // set the attribute of an element
  function setAttribute () {
    const sect1Ol = document.querySelector('section ol'); // get the section1's ol
    sect1Ol.setAttribute('class', 'setFont setBackColor');
    // ol.setAttribute("class", "setBackColor"); //this will overwrite the early assignment
  }

  // if the element has the attribute, remove it.
  function removeAttribute () {
    const sect1Ol = document.querySelector('section ol'); // get the section1's ol
    if (sect1Ol.hasAttribute('class')) {
      sect1Ol.removeAttribute('class');
    }
  }

  function mainWindowLoaded (e) {
    const btnGetAttrib = document.querySelectorAll('button')[0];
    const btnSetAttrib = document.querySelectorAll('button')[1];
    const btnRemoveAttrib = document.querySelectorAll('button')[2];
    btnGetAttrib.addEventListener('click', getAttribute);
    btnSetAttrib.addEventListener('click', setAttribute);
    btnRemoveAttrib.addEventListener('click', removeAttribute);
  }

  window.addEventListener('load', mainWindowLoaded);
})();
