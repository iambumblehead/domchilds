// Filename: domchildstest.js  
// Timestamp: 2014.04.18-13:44:37 (last modified)  
// Author(s): Bumblehead (www.bumblehead.com)  
// Requires: domchilds.js

var domchildstest = {
  init : function () {
    var containerElem = document.getElementById('Container'),
        bttnElemAsHTML = document.getElementById('BttnAsHTML'),
        bttnElemFirst = document.getElementById('BttnFirst'),
        bttnElemLast = document.getElementById('BttnLast'),
        bttnElemRm = document.getElementById('BttnRm');

    bttnElemAsHTML.onclick = function (e) {
      containerElem.appendChild(
        domchilds.getFromHTMLStr('<span>a new span element</span>')
      );
      console.log('HTML', domchilds.getFromHTMLStr('<span>a new span element</span>'));
      e.preventDefault();
    };

    bttnElemFirst.onclick = function (e) {
      console.log(domchilds.getFirstElem(containerElem));
      
      e.preventDefault();
    };

    bttnElemLast.onclick = function (e) {
      console.log(domchilds.getLastElem(containerElem));

      e.preventDefault();
    };

    bttnElemRm.onclick = function (e) {
      domchilds.rm(containerElem);

      e.preventDefault();
    };
  }
};
