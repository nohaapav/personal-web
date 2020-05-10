!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=8)}([function(t,e,n){t.exports=n(5)()},function(t,e,n){"use strict";t.exports=n(3)},function(t,e,n){"use strict";(function(t){var n=function(){if("undefined"!=typeof Map)return Map;function t(t,e){var n=-1;return t.some((function(t,r){return t[0]===e&&(n=r,!0)})),n}return function(){function e(){this.__entries__=[]}return Object.defineProperty(e.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),e.prototype.get=function(e){var n=t(this.__entries__,e),r=this.__entries__[n];return r&&r[1]},e.prototype.set=function(e,n){var r=t(this.__entries__,e);~r?this.__entries__[r][1]=n:this.__entries__.push([e,n])},e.prototype.delete=function(e){var n=this.__entries__,r=t(n,e);~r&&n.splice(r,1)},e.prototype.has=function(e){return!!~t(this.__entries__,e)},e.prototype.clear=function(){this.__entries__.splice(0)},e.prototype.forEach=function(t,e){void 0===e&&(e=null);for(var n=0,r=this.__entries__;n<r.length;n++){var o=r[n];t.call(e,o[1],o[0])}},e}()}(),r="undefined"!=typeof window&&"undefined"!=typeof document&&window.document===document,o=void 0!==t&&t.Math===Math?t:"undefined"!=typeof self&&self.Math===Math?self:"undefined"!=typeof window&&window.Math===Math?window:Function("return this")(),i="function"==typeof requestAnimationFrame?requestAnimationFrame.bind(o):function(t){return setTimeout((function(){return t(Date.now())}),1e3/60)};var u=["top","right","bottom","left","width","height","size","weight"],c="undefined"!=typeof MutationObserver,a=function(){function t(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=function(t,e){var n=!1,r=!1,o=0;function u(){n&&(n=!1,t()),r&&a()}function c(){i(u)}function a(){var t=Date.now();if(n){if(t-o<2)return;r=!0}else n=!0,r=!1,setTimeout(c,e);o=t}return a}(this.refresh.bind(this),20)}return t.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},t.prototype.removeObserver=function(t){var e=this.observers_,n=e.indexOf(t);~n&&e.splice(n,1),!e.length&&this.connected_&&this.disconnect_()},t.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},t.prototype.updateObservers_=function(){var t=this.observers_.filter((function(t){return t.gatherActive(),t.hasActive()}));return t.forEach((function(t){return t.broadcastActive()})),t.length>0},t.prototype.connect_=function(){r&&!this.connected_&&(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),c?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},t.prototype.disconnect_=function(){r&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},t.prototype.onTransitionEnd_=function(t){var e=t.propertyName,n=void 0===e?"":e;u.some((function(t){return!!~n.indexOf(t)}))&&this.refresh()},t.getInstance=function(){return this.instance_||(this.instance_=new t),this.instance_},t.instance_=null,t}(),s=function(t,e){for(var n=0,r=Object.keys(e);n<r.length;n++){var o=r[n];Object.defineProperty(t,o,{value:e[o],enumerable:!1,writable:!1,configurable:!0})}return t},f=function(t){return t&&t.ownerDocument&&t.ownerDocument.defaultView||o},l=b(0,0,0,0);function h(t){return parseFloat(t)||0}function p(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return e.reduce((function(e,n){return e+h(t["border-"+n+"-width"])}),0)}function d(t){var e=t.clientWidth,n=t.clientHeight;if(!e&&!n)return l;var r=f(t).getComputedStyle(t),o=function(t){for(var e={},n=0,r=["top","right","bottom","left"];n<r.length;n++){var o=r[n],i=t["padding-"+o];e[o]=h(i)}return e}(r),i=o.left+o.right,u=o.top+o.bottom,c=h(r.width),a=h(r.height);if("border-box"===r.boxSizing&&(Math.round(c+i)!==e&&(c-=p(r,"left","right")+i),Math.round(a+u)!==n&&(a-=p(r,"top","bottom")+u)),!function(t){return t===f(t).document.documentElement}(t)){var s=Math.round(c+i)-e,d=Math.round(a+u)-n;1!==Math.abs(s)&&(c-=s),1!==Math.abs(d)&&(a-=d)}return b(o.left,o.top,c,a)}var v="undefined"!=typeof SVGGraphicsElement?function(t){return t instanceof f(t).SVGGraphicsElement}:function(t){return t instanceof f(t).SVGElement&&"function"==typeof t.getBBox};function y(t){return r?v(t)?function(t){var e=t.getBBox();return b(0,0,e.width,e.height)}(t):d(t):l}function b(t,e,n,r){return{x:t,y:e,width:n,height:r}}var m=function(){function t(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=b(0,0,0,0),this.target=t}return t.prototype.isActive=function(){var t=y(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},t.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},t}(),g=function(t,e){var n,r,o,i,u,c,a,f=(r=(n=e).x,o=n.y,i=n.width,u=n.height,c="undefined"!=typeof DOMRectReadOnly?DOMRectReadOnly:Object,a=Object.create(c.prototype),s(a,{x:r,y:o,width:i,height:u,top:o,right:r+i,bottom:u+o,left:r}),a);s(this,{target:t,contentRect:f})},_=function(){function t(t,e,r){if(this.activeObservations_=[],this.observations_=new n,"function"!=typeof t)throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=e,this.callbackCtx_=r}return t.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof f(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)||(e.set(t,new m(t)),this.controller_.addObserver(this),this.controller_.refresh())}},t.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof f(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)&&(e.delete(t),e.size||this.controller_.removeObserver(this))}},t.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},t.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach((function(e){e.isActive()&&t.activeObservations_.push(e)}))},t.prototype.broadcastActive=function(){if(this.hasActive()){var t=this.callbackCtx_,e=this.activeObservations_.map((function(t){return new g(t.target,t.broadcastRect())}));this.callback_.call(t,e,t),this.clearActive()}},t.prototype.clearActive=function(){this.activeObservations_.splice(0)},t.prototype.hasActive=function(){return this.activeObservations_.length>0},t}(),w="undefined"!=typeof WeakMap?new WeakMap:new n,O=function t(e){if(!(this instanceof t))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=a.getInstance(),r=new _(e,n,this);w.set(this,r)};["observe","unobserve","disconnect"].forEach((function(t){O.prototype[t]=function(){var e;return(e=w.get(this))[t].apply(e,arguments)}}));var E=void 0!==o.ResizeObserver?o.ResizeObserver:O;e.a=E}).call(this,n(7))},function(t,e,n){"use strict";
/** @license React v16.13.1
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(4),o="function"==typeof Symbol&&Symbol.for,i=o?Symbol.for("react.element"):60103,u=o?Symbol.for("react.portal"):60106,c=o?Symbol.for("react.fragment"):60107,a=o?Symbol.for("react.strict_mode"):60108,s=o?Symbol.for("react.profiler"):60114,f=o?Symbol.for("react.provider"):60109,l=o?Symbol.for("react.context"):60110,h=o?Symbol.for("react.forward_ref"):60112,p=o?Symbol.for("react.suspense"):60113,d=o?Symbol.for("react.memo"):60115,v=o?Symbol.for("react.lazy"):60116,y="function"==typeof Symbol&&Symbol.iterator;function b(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function _(t,e,n){this.props=t,this.context=e,this.refs=g,this.updater=n||m}function w(){}function O(t,e,n){this.props=t,this.context=e,this.refs=g,this.updater=n||m}_.prototype.isReactComponent={},_.prototype.setState=function(t,e){if("object"!=typeof t&&"function"!=typeof t&&null!=t)throw Error(b(85));this.updater.enqueueSetState(this,t,e,"setState")},_.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")},w.prototype=_.prototype;var E=O.prototype=new w;E.constructor=O,r(E,_.prototype),E.isPureReactComponent=!0;var S={current:null},j=Object.prototype.hasOwnProperty,k={key:!0,ref:!0,__self:!0,__source:!0};function x(t,e,n){var r,o={},u=null,c=null;if(null!=e)for(r in void 0!==e.ref&&(c=e.ref),void 0!==e.key&&(u=""+e.key),e)j.call(e,r)&&!k.hasOwnProperty(r)&&(o[r]=e[r]);var a=arguments.length-2;if(1===a)o.children=n;else if(1<a){for(var s=Array(a),f=0;f<a;f++)s[f]=arguments[f+2];o.children=s}if(t&&t.defaultProps)for(r in a=t.defaultProps)void 0===o[r]&&(o[r]=a[r]);return{$$typeof:i,type:t,key:u,ref:c,props:o,_owner:S.current}}function R(t){return"object"==typeof t&&null!==t&&t.$$typeof===i}var P=/\/+/g,T=[];function M(t,e,n,r){if(T.length){var o=T.pop();return o.result=t,o.keyPrefix=e,o.func=n,o.context=r,o.count=0,o}return{result:t,keyPrefix:e,func:n,context:r,count:0}}function C(t){t.result=null,t.keyPrefix=null,t.func=null,t.context=null,t.count=0,10>T.length&&T.push(t)}function A(t,e,n){return null==t?0:function t(e,n,r,o){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var a=!1;if(null===e)a=!0;else switch(c){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case i:case u:a=!0}}if(a)return r(o,e,""===n?"."+$(e,0):n),1;if(a=0,n=""===n?".":n+":",Array.isArray(e))for(var s=0;s<e.length;s++){var f=n+$(c=e[s],s);a+=t(c,f,r,o)}else if(null===e||"object"!=typeof e?f=null:f="function"==typeof(f=y&&e[y]||e["@@iterator"])?f:null,"function"==typeof f)for(e=f.call(e),s=0;!(c=e.next()).done;)a+=t(c=c.value,f=n+$(c,s++),r,o);else if("object"===c)throw r=""+e,Error(b(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r,""));return a}(t,"",e,n)}function $(t,e){return"object"==typeof t&&null!==t&&null!=t.key?function(t){var e={"=":"=0",":":"=2"};return"$"+(""+t).replace(/[=:]/g,(function(t){return e[t]}))}(t.key):e.toString(36)}function q(t,e){t.func.call(t.context,e,t.count++)}function D(t,e,n){var r=t.result,o=t.keyPrefix;t=t.func.call(t.context,e,t.count++),Array.isArray(t)?F(t,r,n,(function(t){return t})):null!=t&&(R(t)&&(t=function(t,e){return{$$typeof:i,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}(t,o+(!t.key||e&&e.key===t.key?"":(""+t.key).replace(P,"$&/")+"/")+n)),r.push(t))}function F(t,e,n,r,o){var i="";null!=n&&(i=(""+n).replace(P,"$&/")+"/"),A(t,D,e=M(e,i,r,o)),C(e)}var H={current:null};function I(){var t=H.current;if(null===t)throw Error(b(321));return t}var W={ReactCurrentDispatcher:H,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:S,IsSomeRendererActing:{current:!1},assign:r};e.Children={map:function(t,e,n){if(null==t)return t;var r=[];return F(t,r,null,e,n),r},forEach:function(t,e,n){if(null==t)return t;A(t,q,e=M(null,null,e,n)),C(e)},count:function(t){return A(t,(function(){return null}),null)},toArray:function(t){var e=[];return F(t,e,null,(function(t){return t})),e},only:function(t){if(!R(t))throw Error(b(143));return t}},e.Component=_,e.Fragment=c,e.Profiler=s,e.PureComponent=O,e.StrictMode=a,e.Suspense=p,e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=W,e.cloneElement=function(t,e,n){if(null==t)throw Error(b(267,t));var o=r({},t.props),u=t.key,c=t.ref,a=t._owner;if(null!=e){if(void 0!==e.ref&&(c=e.ref,a=S.current),void 0!==e.key&&(u=""+e.key),t.type&&t.type.defaultProps)var s=t.type.defaultProps;for(f in e)j.call(e,f)&&!k.hasOwnProperty(f)&&(o[f]=void 0===e[f]&&void 0!==s?s[f]:e[f])}var f=arguments.length-2;if(1===f)o.children=n;else if(1<f){s=Array(f);for(var l=0;l<f;l++)s[l]=arguments[l+2];o.children=s}return{$$typeof:i,type:t.type,key:u,ref:c,props:o,_owner:a}},e.createContext=function(t,e){return void 0===e&&(e=null),(t={$$typeof:l,_calculateChangedBits:e,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:f,_context:t},t.Consumer=t},e.createElement=x,e.createFactory=function(t){var e=x.bind(null,t);return e.type=t,e},e.createRef=function(){return{current:null}},e.forwardRef=function(t){return{$$typeof:h,render:t}},e.isValidElement=R,e.lazy=function(t){return{$$typeof:v,_ctor:t,_status:-1,_result:null}},e.memo=function(t,e){return{$$typeof:d,type:t,compare:void 0===e?null:e}},e.useCallback=function(t,e){return I().useCallback(t,e)},e.useContext=function(t,e){return I().useContext(t,e)},e.useDebugValue=function(){},e.useEffect=function(t,e){return I().useEffect(t,e)},e.useImperativeHandle=function(t,e,n){return I().useImperativeHandle(t,e,n)},e.useLayoutEffect=function(t,e){return I().useLayoutEffect(t,e)},e.useMemo=function(t,e){return I().useMemo(t,e)},e.useReducer=function(t,e,n){return I().useReducer(t,e,n)},e.useRef=function(t){return I().useRef(t)},e.useState=function(t){return I().useState(t)},e.version="16.13.1"},function(t,e,n){"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;function u(t){if(null==t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}t.exports=function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(e).map((function(t){return e[t]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(t){r[t]=t})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(t){return!1}}()?Object.assign:function(t,e){for(var n,c,a=u(t),s=1;s<arguments.length;s++){for(var f in n=Object(arguments[s]))o.call(n,f)&&(a[f]=n[f]);if(r){c=r(n);for(var l=0;l<c.length;l++)i.call(n,c[l])&&(a[c[l]]=n[c[l]])}}return a}},function(t,e,n){"use strict";var r=n(6);function o(){}function i(){}i.resetWarningCache=o,t.exports=function(){function t(t,e,n,o,i,u){if(u!==r){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function e(){return t}t.isRequired=t;var n={array:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:i,resetWarningCache:o};return n.PropTypes=n,n}},function(t,e,n){"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){"use strict";n.r(e);var r=n(1),o=n.n(r),i=n(0),u=n.n(i),c=n(2);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function s(){return(s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function f(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),r.forEach((function(e){a(t,e,n[e])}))}return t}function l(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}function h(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var u,c=t[Symbol.iterator]();!(r=(u=c.next()).done)&&(n.push(u.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var p={cursor:"pointer"},d=function(t){var e=t.index,n=t.onClick,r=t.photo,i=t.margin,u=t.direction,c=t.top,a=t.left,l=t.key,h={margin:i,display:"block"};"column"===u&&(h.position="absolute",h.left=a,h.top=c);return o.a.createElement("img",s({key:l,style:n?f({},h,p):h},r,{onClick:n?function(t){n(t,{photo:r,index:e})}:null}))},v=u.a.shape({key:u.a.string,src:u.a.string.isRequired,width:u.a.number.isRequired,height:u.a.number.isRequired,alt:u.a.string,title:u.a.string,srcSet:u.a.oneOfType([u.a.string,u.a.array]),sizes:u.a.oneOfType([u.a.string,u.a.array])});d.propTypes={index:u.a.number.isRequired,onClick:u.a.func,photo:v.isRequired,margin:u.a.number,top:function(t){if("column"===t.direction&&"number"!=typeof t.top)return new Error("top is a required number when direction is set to `column`")},left:function(t){if("column"===t.direction&&"number"!=typeof t.left)return new Error("left is a required number when direction is set to `column`")},direction:u.a.string};var y=function(t,e){return e||(e=0),Number(Math.round(t+"e"+e)+"e-"+e)},b=function(t){var e=t.width,n=t.height;return y(e/n,2)};function m(t){this.content=[],this.scoreFunction=t}m.prototype={push:function(t){this.content.push(t),this.bubbleUp(this.content.length-1)},pop:function(){var t=this.content[0],e=this.content.pop();return this.content.length>0&&(this.content[0]=e,this.sinkDown(0)),t},remove:function(t){for(var e=this.content.length,n=0;n<e;n++)if(this.content[n]==t){var r=this.content.pop();if(n==e-1)break;this.content[n]=r,this.bubbleUp(n),this.sinkDown(n);break}},size:function(){return this.content.length},bubbleUp:function(t){for(var e=this.content[t],n=this.scoreFunction(e);t>0;){var r=Math.floor((t+1)/2)-1,o=this.content[r];if(n>=this.scoreFunction(o))break;this.content[r]=e,this.content[t]=o,t=r}},sinkDown:function(t){for(var e=this.content.length,n=this.content[t],r=this.scoreFunction(n);;){var o=2*(t+1),i=o-1,u=null;if(i<e){var c=this.content[i],a=this.scoreFunction(c);a<r&&(u=i)}if(o<e){var s=this.content[o];this.scoreFunction(s)<(null==u?r:a)&&(u=o)}if(null==u)break;this.content[t]=this.content[u],this.content[u]=n,t=u}}};var g=function(t,e,n){return function(t,e){for(var n=[],r=e;r;)n.push(r),t[r],r=t[r];return n.reverse()}(function(t,e,n){var r={},o={},i={};i[e]=0;var u=new m((function(t){return t.weight}));for(u.push({id:e,weight:0});u.size();){var c=u.pop(),a=c.id;if(!o[a]){var s=t(a)||{};for(var f in o[a]=1,s){var l=c.weight+s[f];(void 0===i[f]||i[f]>l)&&(i[f]=l,u.push({id:f,weight:l}),r[f]=a)}}}if(void 0===i[n])throw new Error("There is no path from ".concat(e," to ").concat(n));return r}(t,e,n),n)},_=function(t,e,n){return(e-t.length*(2*n))/t.reduce((function(t,e){return t+b(e)}),0)},w=function(t,e,n,r,o,i){var u=t.slice(e,n),c=_(u,r,i);return Math.pow(Math.abs(c-o),2)},O=function(t){var e=t.containerWidth,n=t.limitNodeSearch,r=t.targetRowHeight,o=t.margin,i=t.photos,u=function(t,e,n,r,o){return function(i){var u={};u[+(i=+i)]=0;for(var c=i+1;c<n.length+1&&!(c-i>r);++c)u[c.toString()]=w(n,i,c,e,t,o);return u}}(r,e,i,n,o),c=g(u,"0",i.length);c=c.map((function(t){return+t}));for(var a=1;a<c.length;++a)for(var s=i.slice(c[a-1],c[a]),f=_(s,e,o),l=c[a-1];l<c[a];++l)i[l].width=y(f*b(i[l]),1),i[l].height=f;return i},E=o.a.memo((function(t){var e=t.photos,n=t.onClick,i=t.direction,u=t.margin,a=t.limitNodeSearch,s=t.targetRowHeight,p=t.columns,v=t.renderImage,b=h(Object(r.useState)(0),2),m=b[0],g=b[1],_=Object(r.useRef)(null);Object(r.useLayoutEffect)((function(){var t=null,e=new c.a((function(e){var n=e[0].contentRect.width;m!==n&&(t=window.requestAnimationFrame((function(){g(Math.floor(n))})))}));return e.observe(_.current),function(){e.disconnect(),window.cancelAnimationFrame(t)}}));var w=function(t,r){var o=r.index;n(t,{index:o,photo:e[o],previous:e[o-1]||null,next:e[o+1]||null})};if(!m)return o.a.createElement("div",{ref:_}," ");var E,S,j=m-1;"row"===i&&("function"==typeof a&&(a=a(m)),"function"==typeof s&&(s=s(m)),void 0===a&&(a=2,m>=450&&(a=function(t){var e=t.targetRowHeight,n=t.containerWidth;return y(n/e/1.5)+8}({containerWidth:m,targetRowHeight:s}))),E={display:"flex",flexWrap:"wrap",flexDirection:"row"},S=O({containerWidth:j,limitNodeSearch:a,targetRowHeight:s,margin:u,photos:e})),"column"===i&&("function"==typeof p&&(p=p(m)),void 0===p&&(p=1,m>=500&&(p=2),m>=900&&(p=3),m>=1500&&(p=4)),E={position:"relative"},S=function(t){for(var e=t.photos,n=t.columns,r=t.containerWidth,o=t.margin,i=(r-2*o*n)/n,u=e.map((function(t){var e=t.height/t.width*i;return f({},t,{width:y(i,1),height:y(e,1)})})),c=[],a=[],s=0;s<n;s++)c[s]=y(s*(i+2*o),1),a[s]=0;return u.map((function(t){var e=a.reduce((function(t,e,n){return t=e<a[t]?n:t}),0);t.top=a[e],t.left=c[e],a[e]=a[e]+t.height+2*o;var n=a.reduce((function(t,e,n){return t=e>a[t]?n:t}),0);return t.containerHeight=a[n],t}))}({containerWidth:j,columns:p,margin:u,photos:e}),E.height=S[S.length-1].containerHeight);var k=v||d;return o.a.createElement("div",{className:"react-photo-gallery--gallery"},o.a.createElement("div",{ref:_,style:E},S.map((function(t,e){var r=t.left,o=t.top,c=t.containerHeight,a=l(t,["left","top","containerHeight"]);return k({left:r,top:o,key:t.key||t.src,containerHeight:c,index:e,margin:u,direction:i,onClick:n?w:null,photo:a})}))))}));E.propTypes={photos:u.a.arrayOf(v).isRequired,direction:u.a.string,onClick:u.a.func,columns:u.a.oneOfType([u.a.func,u.a.number]),targetRowHeight:u.a.oneOfType([u.a.func,u.a.number]),limitNodeSearch:u.a.oneOfType([u.a.func,u.a.number]),margin:u.a.number,renderImage:u.a.func},E.defaultProps={margin:2,direction:"row",targetRowHeight:300};var S=E;window.Gallery=S}]);