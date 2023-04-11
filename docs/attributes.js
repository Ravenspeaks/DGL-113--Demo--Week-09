
function getAttribute(olList) {
  for (let i = 0; i < olList.length; i++) {
    const olId = olList[i].getAttribute('id');
    olList[i].innerHTML += `<li>The ol's id is: ${olId}</li>`;
  }
}

function setAttribute(ol, sectionNum) {
  const sectionClass = sectionNum === 1 ? 'setBackColor setFont' : 'setBackColor2 setFont2';
  ol.setAttribute('class', sectionClass);
}


function section1() {
  const olList = document.querySelectorAll('section:nth-of-type(1) ol');
  getAttribute(olList);
  for (let i = 0; i < olList.length; i++) {
    setAttribute(olList[i]);
  }
}

function section2() {
  const olList = document.querySelectorAll('section:nth-of-type(2) ol');
  getAttribute(olList);
  for (let i = 0; i < olList.length; i++) {
    setAttribute(olList[i], 2);
  }
}


section1();
section2();

function mainWindowLoaded() {
  const btnGetAttrib = document.querySelectorAll('button')[0];
  const btnSetAttrib = document.querySelectorAll('button')[1];
  const btnRemoveAttrib = document.querySelectorAll('button')[2];

  btnGetAttrib.addEventListener('click', () => {
    getAttribute(document.querySelectorAll('ol'));
  });

  btnSetAttrib.addEventListener('click', () => {
    const olList1 = document.querySelectorAll('section:nth-of-type(1) ol');
    const olList2 = document.querySelectorAll('section:nth-of-type(2) ol');
    for (let i = 0; i < olList1.length; i++) {
      setAttribute(olList1[i], 1);
    }
    for (let i = 0; i < olList2.length; i++) {
      setAttribute(olList2[i], 2);
    }
  });


  btnRemoveAttrib.addEventListener('click', () => {
    const olList1 = document.querySelectorAll('section:nth-of-type(1) ol');
    const olList2 = document.querySelectorAll('section:nth-of-type(2) ol');
    const olList = [...olList1, ...olList2]; // combine both lists into one

    for (let i = 0; i < olList.length; i++) {
      if (olList[i].hasAttribute('class')) {
        olList[i].removeAttribute('class');
      }
    }
  });
}

window.addEventListener('load', mainWindowLoaded);

