/*! HTML5 Shiv vpre3.6 | @afarkas @jdalton @jon_neal @rem | MIT/GPL2 Licensed */
(function(g,i){var l=g.html5||{};var c=/^<|^(?:button|form|map|select|textarea|object|iframe|option|optgroup)$/i;var j=/^<|^(?:a|b|button|code|div|fieldset|form|h1|h2|h3|h4|h5|h6|i|iframe|img|input|label|li|link|ol|option|p|param|q|script|select|span|strong|style|table|tbody|td|textarea|tfoot|th|thead|tr|ul)$/i;var b;var d;(function(){var m=i.createElement("a");m.innerHTML="<xyz></xyz>";b=("hidden" in m);if(b&&typeof injectElementWithStyles=="function"){injectElementWithStyles("#modernizr{}",function(n){n.hidden=true;b=(g.getComputedStyle?getComputedStyle(n,null):n.currentStyle).display=="none"})}d=m.childNodes.length==1||(function(){try{(i.createElement)("a")}catch(n){return true}var o=i.createDocumentFragment();return(typeof o.cloneNode=="undefined"||typeof o.createDocumentFragment=="undefined"||typeof o.createElement=="undefined")}())}());function k(m,o){var q=m.createElement("p"),n=m.getElementsByTagName("head")[0]||m.documentElement;q.innerHTML="x<style>"+o+"</style>";return n.insertBefore(q.lastChild,n.firstChild)}function f(){var m=e.elements;return typeof m=="string"?m.split(" "):m}function h(n){var m={},q=n.createElement,o=n.createDocumentFragment,p=o();n.createElement=function(s){if(!e.shivMethods){return q(s)}var r;if(m[s]){r=m[s].cloneNode()}else{if(j.test(s)){r=(m[s]=q(s)).cloneNode()}else{r=q(s)}}return r.canHaveChildren&&!c.test(s)?p.appendChild(r):r};n.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+f().join().replace(/\w+/g,function(r){q(r);p.createElement(r);return'c("'+r+'")'})+");return n}")(e,p)}function a(n){var m;if(n.documentShived){return n}if(e.shivCSS&&!b){m=!!k(n,"article,aside,details,figcaption,figure,footer,header,hgroup,nav,section{display:block}audio{display:none}canvas,video{display:inline-block;*display:inline;*zoom:1}[hidden]{display:none}audio[controls]{display:inline-block;*display:inline;*zoom:1}mark{background:#FF0;color:#000}")}if(!d){m=!h(n)}if(m){n.documentShived=m}return n}var e={elements:l.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:!(l.shivCSS===false),shivMethods:!(l.shivMethods===false),type:"default",shivDocument:a};g.html5=e;a(i)}(this,document));