(() => {
  'use strict';

  function getNodeTree (node, indent) {
    let str = '';
    if (node) {
    // str +=  "<br>\n"; //<br> is for webpage display, \n is for console display
      str += indent +
      `name: ${node.nodeName}; type: ${node.nodeType}; value: ${node.nodeValue};`;
      const attribs = node.attributes;
      // some nodes have attributes but no value and its length could be 0
      if (attribs !== undefined && attribs.length > 0) {
      /* attributes doesn't return an array but a string of key-value pairs.
        So, forEach doesn't work but index notation still works.
        https://developer.mozilla.org/en-US/docs/Web/API/Element/attributes
        */
        /* attribs.forEach (element => {
          console.log(element.name + " " + element.value);
        });
        */
        str += '; attribs: ';
        for (let i = 0; i < attribs.length; i++) {
          str += `type: ${attribs[i].nodeType}; ${attribs[i].name}: ${attribs[i].value}; `;
        }
      }
      str += '\n';
      // show child nodes with block indentation
      const nodes = node.childNodes;
      if (nodes) {
        nodes.forEach(element => {
        // make a recursive call of showNodes() function to drill down
          str += getNodeTree(element, indent + '  ');
        });
      }
    }
    return str;
  }

  function getAndShowNodeTree (node = document) {
    document.getElementById('tree')
      .innerHTML = '';
    document.getElementById('tree')
      .innerHTML = '<pre>\n' + getNodeTree(node, '') + '\n</pre>';
  }

  function showDocumentTree (e) {
    getAndShowNodeTree();
  }

  function showListTree (e) {
    getAndShowNodeTree(document.getElementById('theList'));
  }

  function mainWindowLoaded (e) {
    document.getElementById('showListTree')
      .addEventListener('click', showListTree);

    document.getElementById('showDocumentTree')
      .addEventListener('click', showDocumentTree);
  }

  window.addEventListener('load', mainWindowLoaded);
})();
