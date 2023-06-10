/*
 * 01. Javascript API
 * 02. Browser Object Model
 * 03. Document Object Model
 * 04. BOM > DOM > CSSOM
 * 05. window object Contains BOM and DOM
 * 06. All functions and objects are cross browser compatible. see www.mdn.org
 */

/*BOM Object - use firefox console to see interactive result */

let a = window; // Global Object, that holds everythings

// Global Functions 

window.addEventListener();
window.alert();
window.atob();
window.blur();
window.btoa();
window.BeforeLoadEvent();
window.cancelAnimationFrame();
window.cancleIdleCallBack();
window.captureEvents();
window.clearInterval();
window.clearTimeout();
window.close();
window.confirm();
window.createImageBitmap();
window.fetch()
window.find()
window.focus()
window.getComputedStyle()
window.getSelection()
window.matchMedia()
window.moveBy()
window.moveTo()
window.open()
window.openDatabase()
window.postMessage()
window.print()
window.prompt()
window.queueMicrotask()
window.releaseEvents()
window.requestAnimationFrame()
window.requestIdleCallBack()
window.resizeBy()
window.resizeTo()
window.scroll()
window.scrollBy()
window.scrollTo()
window.setInterval()
window.setTimeout()
window.showDirectoryPicker()
window.showOpenFilePicker()
window.showSaveFilePicker()
window.stop()
window.webkitCancelAnimationFrame()
window.webkitRequestAnimationFrame()
window.webkitRequestFileSystem()
window.webkitResolveLocalFileSystemURl()





// Window > Objects
window.caches
window.chrome
window.clientInformation
window.cookieStore
window.crypto
window.customElements
window.external
window.frames
window.history
window.indexedDB
window.localStorage
window.location 
window.locationbar
window.menubar
window.navigator
window.parent
window.performance
window.personalbar
window.screen
window.scrollbars
window.self
window.sessionStorage
window.speechSynthesis
window.statusbar
window.styleMedia
window.toolbar
window.top
window.trustedType
window.visualViewPort


// DOM
window.document






// Global Events
window.onabort;
window.onbeforeunload;
window.onblur;
window.onchange;
window.onclick;
window.oncontextmenu;
window.ondblclick;
window.ondrag;
window.ondragend;
window.ondragenter;
window.ondragleave;
window.ondragover;
window.ondragstart;
window.ondragstart;
window.ondrop;
window.onload;
window.onfocus;
window.onhashchange;
window.oninput;
window.onmessage;
window.onkeydown;
window.onkeypress;
window.onkeyup;
window.onmousedown;
window.onmousemove;
window.onmouseout;
window.onmouseover;
window.onmouseup;
window.onmousewheel;
window.onoffline;
window.onresize;
window.onscroll;
window.onunload;


// BOM - Browser Object Model
let b = window.location;
let c = window.navigator;
let d = window.screen;
let e = window.frames;
let f = window.cookie;
let g = window.history;
let h = window.XMLHttpRequest;

//DOM - Document Object Model
let i = window.document; 

// Javascript - more object available. We have listed cross browser compatible objects only
window.Attr;
window.Array;
window.ArrayBuffer;
window.Boolean;
window.DataView;
window.Date;
window.Error;
window.EvalError;
window.Float32Array;
window.Float64Array;
window.Function;
window.Infinity;
window.Int16Array;
window.Int32Array;
window.Int8Array;
window.JSON;
window.map;
window.Math;
window.NaN;
window.null;
window.Number;
window.Object;
window.promise;
window.Proxy;
window.Range;
window.RangeError;
window.ReferenceError;
window.RegExp;
window.Set;
window.Storage;
window.String;
window.Symbol;
window.SyntaxError;
window.TypeError;
window.Uint16Array;
window.Uint32Array;
window.Uint8Array;
window.Uint8ClampedArray;
window.undefined;

/* We can assign custom variable to window*/

window.fn = fnName;

(function(window){
    const math = {
        add: function(a,b){
            
        },
    }
    
})(window);






















