// Filename: domchilds.js  
// Timestamp: 2014.04.18-13:48:23 (last modified)  
// Author(s): Bumblehead (www.bumblehead.com)  

var domchilds = module.exports = {

  rm : function (elem) {
    if (elem && elem.hasChildNodes()) {
      while (elem.childNodes.length) {
        elem.removeChild(elem.firstChild);
      }
    }
  },

  getFirstElem : function (elem, ec) {
    if ((ec = elem && elem.firstChild)) {
      do {
        if (ec.nodeType === 1) return ec;
      } while ((ec = ec.nextSibling));
    }
  },

  getLastElem : function (elem, ec) {
    if ((ec = elem && elem.lastChild)) {
      do {
        if (ec.nodeType === 1) return ec;
      } while ((ec = ec.previousSibling));
    }
  },

  getFromHTMLStr : (function (doc, elem) {
    elem = doc && doc.createElement('i');
    return function (htmlstr, celem, ec) {
      celem = elem.cloneNode();
      celem.innerHTML = htmlstr;
      ec = this.getFirstElem(celem);
      celem.removeChild(ec);
      return ec;
    };
  }(document))

};
