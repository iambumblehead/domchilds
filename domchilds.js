// Filename: domchilds.js  
// Timestamp: 2015.12.20-00:24:10 (last modified)
// Author(s): Bumblehead (www.bumblehead.com)  

var domchilds = module.exports = (function (o) {

  o.rm = function (elem, fn) {
    fn = typeof fn === 'function' ? fn : function () {};
    
    if (elem && elem.hasChildNodes()) {
      while (elem.childNodes.length) {
        fn(elem.removeChild(elem.firstChild));
      }
    }
  };

  o.getFirstElem = function (elem, ec) {
    if ((ec = elem && elem.firstChild)) {
      do {
        if (ec.nodeType === 1) return ec;
      } while ((ec = ec.nextSibling));
    }
  };

  o.getLastElem = function (elem, ec) {
    if ((ec = elem && elem.lastChild)) {
      do {
        if (ec.nodeType === 1) return ec;
      } while ((ec = ec.previousSibling));
    }
  };

  o.getFromHTMLStr = (function (doc, elem) {
    elem = doc && doc.createElement('i');
    return function (htmlstr, celem, ec) {
      celem = elem.cloneNode();
      celem.innerHTML = htmlstr;
      ec = document.createDocumentFragment();
      o.rm(celem, function (child) {
        ec.appendChild(child);
      });
      return ec;
    };
  }(typeof document === 'object' && document));

  return o;
  
}({}));
