/* * Copyright © 2019-2021 chenwenbin * Released under the MIT License. */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.input = factory());
}(this, (function () { 'use strict';

  var fails = function (exec) {
    try {
      return !!exec();
    } catch (error) {
      return true;
    }
  };

  // Detect IE8's incomplete defineProperty implementation
  var descriptors = !fails(function () {
    return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
  });

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  var check = function (it) {
    return it && it.Math == Math && it;
  };

  // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
  var global_1 =
    // eslint-disable-next-line no-undef
    check(typeof globalThis == 'object' && globalThis) ||
    check(typeof window == 'object' && window) ||
    check(typeof self == 'object' && self) ||
    check(typeof commonjsGlobal == 'object' && commonjsGlobal) ||
    // eslint-disable-next-line no-new-func
    (function () { return this; })() || Function('return this')();

  var isObject = function (it) {
    return typeof it === 'object' ? it !== null : typeof it === 'function';
  };

  var document$1 = global_1.document;
  // typeof document.createElement is 'object' in old IE
  var EXISTS = isObject(document$1) && isObject(document$1.createElement);

  var documentCreateElement = function (it) {
    return EXISTS ? document$1.createElement(it) : {};
  };

  // Thank's IE8 for his funny defineProperty
  var ie8DomDefine = !descriptors && !fails(function () {
    return Object.defineProperty(documentCreateElement('div'), 'a', {
      get: function () { return 7; }
    }).a != 7;
  });

  var anObject = function (it) {
    if (!isObject(it)) {
      throw TypeError(String(it) + ' is not an object');
    } return it;
  };

  // `ToPrimitive` abstract operation
  // https://tc39.es/ecma262/#sec-toprimitive
  // instead of the ES6 spec version, we didn't implement @@toPrimitive case
  // and the second argument - flag - preferred type is a string
  var toPrimitive = function (input, PREFERRED_STRING) {
    if (!isObject(input)) return input;
    var fn, val;
    if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
    if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
    if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
    throw TypeError("Can't convert object to primitive value");
  };

  var nativeDefineProperty = Object.defineProperty;

  // `Object.defineProperty` method
  // https://tc39.es/ecma262/#sec-object.defineproperty
  var f = descriptors ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
    anObject(O);
    P = toPrimitive(P, true);
    anObject(Attributes);
    if (ie8DomDefine) try {
      return nativeDefineProperty(O, P, Attributes);
    } catch (error) { /* empty */ }
    if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
    if ('value' in Attributes) O[P] = Attributes.value;
    return O;
  };

  var objectDefineProperty = {
  	f: f
  };

  var defineProperty = objectDefineProperty.f;

  var FunctionPrototype = Function.prototype;
  var FunctionPrototypeToString = FunctionPrototype.toString;
  var nameRE = /^\s*function ([^ (]*)/;
  var NAME = 'name';

  // Function instances `.name` property
  // https://tc39.es/ecma262/#sec-function-instances-name
  if (descriptors && !(NAME in FunctionPrototype)) {
    defineProperty(FunctionPrototype, NAME, {
      configurable: true,
      get: function () {
        try {
          return FunctionPrototypeToString.call(this).match(nameRE)[1];
        } catch (error) {
          return '';
        }
      }
    });
  }

  require("core-js/modules/es.array.index-of.js");

  !function (t) {
    var c,
        _e,
        l,
        a,
        o,
        _d,
        n = '<svg><symbol id="r-upload" viewBox="0 0 1024 1024"><path d="M892.586667 388.693333A213.333333 213.333333 0 0 0 682.666667 213.333333a202.666667 202.666667 0 0 0-76.373334 14.506667A298.666667 298.666667 0 0 0 85.333333 407.04 170.666667 170.666667 0 0 0 170.666667 725.333333h170.666666a42.666667 42.666667 0 0 0 0-85.333333H170.666667a85.333333 85.333333 0 0 1-28.16-165.546667 42.666667 42.666667 0 0 0 28.16-40.106666A49.066667 49.066667 0 0 0 170.666667 426.666667a213.333333 213.333333 0 0 1 388.693333-121.173334 42.666667 42.666667 0 0 0 57.173333 11.946667A128 128 0 0 1 810.666667 426.666667a42.666667 42.666667 0 0 0 42.666666 42.666666 85.333333 85.333333 0 0 1 0 170.666667h-170.666666a42.666667 42.666667 0 0 0 0 85.333333h170.666666a170.666667 170.666667 0 0 0 39.253334-336.64z"  ></path><path d="M627.626667 524.373333l-85.333334-85.333333a42.666667 42.666667 0 0 0-14.08-8.96 42.666667 42.666667 0 0 0-32.426666 0 42.666667 42.666667 0 0 0-14.08 8.96l-85.333334 85.333333a42.666667 42.666667 0 0 0 60.586667 60.586667l12.373333-12.8V853.333333a42.666667 42.666667 0 0 0 85.333334 0v-281.173333l12.373333 12.8a42.666667 42.666667 0 0 0 60.586667 0 42.666667 42.666667 0 0 0 0-60.586667z"  ></path></symbol><symbol id="r-dot" viewBox="0 0 1024 1024"><path d="M162.8 515m-98.3 0a98.3 98.3 0 1 0 196.6 0 98.3 98.3 0 1 0-196.6 0Z"  ></path><path d="M511.9 515m-98.3 0a98.3 98.3 0 1 0 196.6 0 98.3 98.3 0 1 0-196.6 0Z"  ></path><path d="M762.8 515a98.3 98.3 0 1 0 196.6 0 98.3 98.3 0 1 0-196.6 0Z"  ></path></symbol><symbol id="r-error" viewBox="0 0 1024 1024"><path d="M512.8540625 990.1240625c-64.4175 0-126.9253125-12.6234375-185.784375-37.51875-56.8359375-24.0403125-107.874375-58.449375-151.696875-102.2709375C131.55125 806.511875 97.1421875 755.474375 73.101875 698.6375c-24.8953125-58.8590625-37.51875-121.3659375-37.51875-185.784375 0-64.4175 12.6234375-126.9253125 37.51875-185.784375 24.0403125-56.836875 58.4484375-107.874375 102.2709375-151.696875 43.8215625-43.8225 94.86-78.230625 151.696875-102.2709375 58.86-24.89625 121.366875-37.51875 185.784375-37.51875 64.4184375 0 126.9253125 12.6225 185.784375 37.51875 56.836875 24.0403125 107.874375 58.4484375 151.6978125 102.2709375 43.8215625 43.8225 78.230625 94.86 102.2709375 151.696875 24.8953125 58.86 37.51875 121.366875 37.51875 185.784375 0 64.4184375-12.6234375 126.9253125-37.51875 185.784375-24.0403125 56.836875-58.449375 107.874375-102.2709375 151.6978125-43.8225 43.8215625-94.8609375 78.230625-151.6978125 102.2709375C639.779375 977.500625 577.2725 990.1240625 512.8540625 990.1240625zM512.8540625 95.5821875c-230.0840625 0-417.2709375 187.186875-417.2709375 417.2709375 0 230.0840625 187.186875 417.2709375 417.2709375 417.2709375S930.125 742.9371875 930.125 512.853125C930.125 282.7690625 742.938125 95.5821875 512.8540625 95.5821875z"  ></path><path d="M510.125 661.0625c-16.5684375 0-30-13.4315625-30-30L480.125 225.125c0-16.5684375 13.4315625-30 30-30s30 13.4315625 30 30l0 405.9375C540.125 647.6309375 526.6934375 661.0625 510.125 661.0625z"  ></path><path d="M510.59375 779.65625m-29.53125 0a29.53125 29.53125 0 1 0 59.0625 0 29.53125 29.53125 0 1 0-59.0625 0Z"  ></path></symbol><symbol id="r-loading" viewBox="0 0 1024 1024"><path d="M512 64q14.016 0 23.008 8.992T544 96v192q0 14.016-8.992 23.008T512 320t-23.008-8.992T480 288V96q0-14.016 8.992-23.008T512 64z m0 640q14.016 0 23.008 8.992T544 736v192q0 14.016-8.992 23.008T512 960t-23.008-8.992T480 928v-192q0-14.016 8.992-23.008T512 704z m448-192q0 14.016-8.992 23.008T928 544h-192q-14.016 0-23.008-8.992T704 512t8.992-23.008T736 480h192q14.016 0 23.008 8.992T960 512z m-640 0q0 14.016-8.992 23.008T288 544H96q-14.016 0-23.008-8.992T64 512t8.992-23.008T96 480h192q14.016 0 23.008 8.992T320 512zM195.008 195.008q10.016-8.992 23.008-8.992t22.016 8.992l136 136q8.992 10.016 8.992 22.496t-9.504 22.016-22.016 9.504-22.496-8.992l-136-136q-8.992-8.992-8.992-22.016t8.992-23.008zM648 648q10.016-10.016 22.496-10.016t22.496 10.016l136 136q8.992 8.992 8.992 22.016t-9.504 22.496-22.496 9.504-22.016-8.992l-136-136q-10.016-10.016-10.016-22.496t10.016-22.496z m180.992-452.992q8.992 10.016 8.992 23.008t-8.992 22.016l-136 136q-10.016 8.992-22.496 8.992t-22.016-9.504-9.504-22.016 8.992-22.496l136-136q8.992-8.992 22.016-8.992t23.008 8.992zM376 648q10.016 10.016 10.016 22.496t-10.016 22.496l-136 136q-8.992 8.992-22.016 8.992t-22.496-9.504-9.504-22.496 8.992-22.016l136-136q10.016-10.016 22.496-10.016t22.496 10.016z"  ></path></symbol><symbol id="r-left" viewBox="0 0 1024 1024"><path d="M481.233 904c8.189 0 16.379-3.124 22.628-9.372 12.496-12.497 12.496-32.759 0-45.256L166.488 512l337.373-337.373c12.496-12.497 12.496-32.758 0-45.255-12.498-12.497-32.758-12.497-45.256 0l-360 360c-12.496 12.497-12.496 32.758 0 45.255l360 360c6.249 6.249 14.439 9.373 22.628 9.373z"  ></path></symbol><symbol id="r-right" viewBox="0 0 1024 1024"><path d="M331.00355468 892.3311122c7.81334972 0 15.61915819-3.01615551 21.52478978-9.03338407l299.61729712-305.23488457c17.81642723-18.14971285 27.6083753-42.15378282 27.56765704-67.58750981-0.03920998-25.433727-9.90354503-49.40763499-27.77577149-67.50305686l-299.4740299-303.2170777c-11.70418945-11.85047315-30.80097501-11.97262786-42.65295494-0.26391368-11.85198139 11.7056977-11.97111961 30.80248325-0.26542191 42.65446319L609.01764204 485.36282787c13.7159648 13.88637749 13.75065006 36.51658817 0.07841997 50.44519215L309.48178141 841.04139633c-11.6695042 11.8881749-11.49155027 30.9834522 0.39662313 42.65144817a30.04995226 30.04995226 0 0 0 21.12515014 8.6382677z"  ></path></symbol><symbol id="r-download" viewBox="0 0 1024 1024"><path d="M857.6 956.8H166.4c-54.4 0-102.4-48-102.4-105.6v-182.4c0-19.2 12.8-32 32-32s32 12.8 32 32v182.4c0 22.4 16 41.6 38.4 41.6h694.4c19.2 0 38.4-19.2 38.4-41.6v-182.4c0-19.2 12.8-32 32-32s32 12.8 32 32v182.4c-3.2 57.6-48 105.6-105.6 105.6z"  ></path><path d="M512 758.4c-19.2 0-32-12.8-32-32v-640c0-19.2 12.8-32 32-32s32 12.8 32 32v640c0 16-12.8 32-32 32z"  ></path><path d="M512 764.8c-9.6 0-16-3.2-22.4-9.6l-208-208c-12.8-12.8-12.8-32 0-44.8s32-12.8 44.8 0l185.6 185.6 185.6-185.6c12.8-12.8 32-12.8 44.8 0s12.8 32 0 44.8l-208 208c-6.4 6.4-12.8 9.6-22.4 9.6z"  ></path></symbol><symbol id="r-settings" viewBox="0 0 1024 1024"><path d="M537.6 928.814545h-93.090909c-25.6 0-46.545455-20.945455-46.545455-46.545454v-60.509091c-21.410909-6.283636-41.890909-14.894545-60.974545-25.134545l-43.287273 42.356363c-18.152727 18.152727-47.709091 18.152727-65.861818 0l-65.861818-65.861818c-18.152727-18.152727-18.152727-47.709091 0-65.861818l42.821818-42.821818c-10.705455-19.781818-19.083636-40.029091-25.367273-60.974546l-60.509091-0.698182c-25.6 0-46.545455-20.945455-46.545454-46.545454v-93.090909c0-25.6 20.945455-46.545455 46.545454-46.545455h60.509091c6.283636-21.410909 14.894545-41.890909 25.134546-60.974545l-42.356364-43.287273c-8.843636-8.843636-13.730909-20.48-13.730909-33.047273 0-12.334545 4.887273-24.203636 13.730909-32.814545L228.072727 180.596364c18.152727-18.152727 47.709091-18.152727 65.861818 0l42.821819 42.821818c19.781818-10.705455 40.029091-19.083636 60.974545-25.367273l0.698182-60.509091c0-25.6 20.945455-46.545455 46.545454-46.545454h93.09091c25.6 0 46.545455 20.945455 46.545454 46.545454v60.509091c21.643636 6.516364 41.890909 14.894545 60.974546 25.134546l43.287272-42.356364c18.152727-18.152727 47.709091-18.152727 65.861818 0l65.861819 65.861818a46.289455 46.289455 0 0 1 0 65.861818l-42.821819 42.821818c10.705455 19.781818 19.083636 40.261818 25.367273 60.974546l60.509091 0.698182c25.6 0 46.545455 20.945455 46.545455 46.545454v93.090909c0 25.6-20.945455 46.545455-46.545455 46.545455h-60.509091c-6.516364 21.410909-14.894545 41.890909-25.134545 60.974545l42.356363 43.287273c18.152727 18.152727 18.152727 47.709091 0 65.861818l-65.861818 65.861818c-18.152727 18.152727-47.709091 18.152727-65.861818 0l-42.821818-42.821818c-19.781818 10.705455-40.261818 19.083636-60.974546 25.367273l-0.698181 60.509091a46.545455 46.545455 0 0 1-46.545455 46.545454z m-201.541818-178.967272c7.68 0 15.592727 1.861818 22.807273 5.818182 16.523636 8.843636 33.978182 16.058182 51.665454 21.410909 20.247273 6.050909 33.745455 23.970909 33.745455 44.683636v60.509091h93.090909v-60.509091c0-20.712727 13.498182-38.632727 33.745454-44.683636 17.92-5.352727 35.141818-12.567273 51.665455-21.410909 18.385455-10.007273 40.727273-6.981818 55.389091 7.68L721.454545 806.167273l65.861819-65.861818-42.821819-42.821819c-14.661818-14.661818-17.687273-37.003636-7.68-55.621818 8.843636-16.523636 16.058182-33.978182 21.41091-51.665454 6.050909-20.247273 23.970909-33.745455 44.683636-33.745455h60.509091v-93.090909h-60.509091c-20.712727 0-38.632727-13.498182-44.683636-33.745455-5.352727-17.687273-12.567273-35.141818-21.41091-51.665454-10.007273-18.618182-6.981818-40.96 7.68-55.621818l42.821819-42.821818L721.454545 213.876364l-42.821818 42.821818c-14.661818 14.661818-37.003636 17.687273-55.621818 7.68-16.290909-8.843636-33.745455-16.058182-51.665454-21.410909a46.498909 46.498909 0 0 1-33.745455-44.683637v-60.509091h-93.090909v60.509091c0 20.712727-13.498182 38.632727-33.745455 44.683637-17.92 5.352727-35.374545 12.567273-51.665454 21.410909-18.618182 10.007273-40.96 6.981818-55.621818-7.68L260.654545 213.876364l-65.861818 65.861818 42.821818 42.821818c14.661818 14.661818 17.687273 37.003636 7.68 55.621818-8.843636 16.523636-16.058182 33.978182-21.410909 51.665455-6.050909 20.247273-23.970909 33.745455-44.683636 33.745454H118.690909v93.090909h60.509091c20.712727 0 38.632727 13.498182 44.683636 33.745455 5.352727 17.92 12.567273 35.141818 21.410909 51.665454 10.007273 18.618182 6.981818 40.96-7.68 55.389091l-42.821818 42.821819 65.861818 65.861818 42.821819-42.821818c8.843636-8.843636 20.712727-13.498182 32.581818-13.498182z"  ></path><path d="M491.054545 707.723636c-109.149091 0-197.818182-88.669091-197.818181-197.818181 0-16.756364 2.094545-33.28 6.283636-49.338182a23.272727 23.272727 0 0 1 28.392727-16.756364c12.567273 3.258182 20.014545 15.825455 16.756364 28.392727-3.258182 12.334545-4.887273 25.134545-4.887273 37.934546 0 83.316364 67.956364 151.272727 151.272727 151.272727s151.272727-67.956364 151.272728-151.272727-67.956364-151.272727-151.272728-151.272727c-30.254545 0-59.578182 8.843636-84.48 25.832727a23.249455 23.249455 0 0 1-32.34909-6.283637 23.249455 23.249455 0 0 1 6.283636-32.34909 196.980364 196.980364 0 0 1 110.545454-33.745455c109.149091 0 197.818182 88.669091 197.818182 197.818182s-88.669091 197.585455-197.818182 197.585454z"  ></path></symbol><symbol id="r-praise" viewBox="0 0 1024 1024"><path d="M894.88 398.72c-16.23-21.64-41.04-34.05-68.08-34.05H543.19l32.26-121.22c7.51-28.19 1.61-57.62-16.16-80.74-17.77-23.13-44.7-36.4-73.87-36.4-42.17 0-79.19 28.46-90.04 69.21l-30.06 112.93c-8.84 33.19-38.99 56.37-73.33 56.38l-103.39-0.63c-42.2 0-76.54 34.33-76.54 76.54v380.41c0 42.2 34.33 76.54 76.54 76.54h532.1c37.54 0 71.12-25.17 81.67-61.21l106.08-362.83c7.6-25.97 2.64-53.27-13.57-74.93zM267.06 847.85H188.6c-14.73 0-26.7-11.98-26.7-26.7V440.73c0-14.72 11.98-26.7 26.55-26.7l78.61 0.49v433.33z m593.56-388.2L754.54 822.48c-4.37 14.94-18.29 25.37-33.83 25.37H316.89V412.17c46.11-9.33 84.13-44.11 96.58-90.89l30.06-112.93c5.04-18.95 22.27-32.19 41.88-32.19 13.57 0 26.1 6.17 34.36 16.93 8.27 10.75 11.01 24.44 7.52 37.56l-36.28 136.31c-3.05 11.45-0.66 23.38 6.55 32.78 7.21 9.39 18.15 14.78 30 14.78H826.8c11.21 0 21.49 5.15 28.2 14.11 6.71 8.95 8.77 20.27 5.62 31.02z"  ></path></symbol></svg>',
        i = (i = document.getElementsByTagName("script"))[i.length - 1];

    if (!i) return;
    i = i.getAttribute("data-injectcss");

    if (i && !t.__iconfont__svg__cssinject__) {
      t.__iconfont__svg__cssinject__ = !0;

      try {
        document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
      } catch (t) {
        console && console.log(t);
      }
    }

    function h() {
      o || (o = !0, l());
    }

    c = function c() {
      var t, c, e, l;
      (l = document.createElement("div")).innerHTML = n, n = null, (e = l.getElementsByTagName("svg")[0]) && (e.setAttribute("aria-hidden", "true"), e.style.position = "absolute", e.style.width = 0, e.style.height = 0, e.style.overflow = "hidden", t = e, (c = document.body).firstChild ? (l = t, (e = c.firstChild).parentNode.insertBefore(l, e)) : c.appendChild(t));
    }, document.addEventListener ? ~["complete", "loaded", "interactive"].indexOf(document.readyState) ? setTimeout(c, 0) : (_e = function e() {
      document.removeEventListener("DOMContentLoaded", _e, !1), c();
    }, document.addEventListener("DOMContentLoaded", _e, !1)) : document.attachEvent && (l = c, a = t.document, o = !1, (_d = function d() {
      try {
        a.documentElement.doScroll("left");
      } catch (t) {
        return void setTimeout(_d, 50);
      }

      h();
    })(), a.onreadystatechange = function () {
      "complete" == a.readyState && (a.onreadystatechange = null, h());
    });
  }(window);

  //
  var script = {
    name: 'RIcon',
    props: ['name']
  };

  function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
      if (typeof shadowMode !== 'boolean') {
          createInjectorSSR = createInjector;
          createInjector = shadowMode;
          shadowMode = false;
      }
      // Vue.extend constructor export interop.
      var options = typeof script === 'function' ? script.options : script;
      // render functions
      if (template && template.render) {
          options.render = template.render;
          options.staticRenderFns = template.staticRenderFns;
          options._compiled = true;
          // functional template
          if (isFunctionalTemplate) {
              options.functional = true;
          }
      }
      // scopedId
      if (scopeId) {
          options._scopeId = scopeId;
      }
      let hook;
      if (moduleIdentifier) {
          // server build
          hook = function (context) {
              // 2.3 injection
              context =
                  context || // cached call
                      (this.$vnode && this.$vnode.ssrContext) || // stateful
                      (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
              // 2.2 with runInNewContext: true
              if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                  context = __VUE_SSR_CONTEXT__;
              }
              // inject component styles
              if (style) {
                  style.call(this, createInjectorSSR(context));
              }
              // register component module identifier for async chunk inference
              if (context && context._registeredComponents) {
                  context._registeredComponents.add(moduleIdentifier);
              }
          };
          // used by ssr in case component is cached and beforeCreate
          // never gets called
          options._ssrRegister = hook;
      }
      else if (style) {
          hook = shadowMode
              ? function (context) {
                  style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
              }
              : function (context) {
                  style.call(this, createInjector(context));
              };
      }
      if (hook) {
          if (options.functional) {
              // register for functional component in vue file
              var originalRender = options.render;
              options.render = function renderWithStyleInjection(h, context) {
                  hook.call(context);
                  return originalRender(h, context);
              };
          }
          else {
              // inject component registration as beforeCreate hook
              var existing = options.beforeCreate;
              options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
          }
      }
      return script;
  }

  /* script */
  var __vue_script__ = script;
  /* template */
  var __vue_render__ = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "svg",
      {
        staticClass: "r-icon",
        on: {
          click: function($event) {
            return _vm.$emit("click", $event)
          }
        }
      },
      [_c("use", { attrs: { "xlink:href": "#r-" + _vm.name } })]
    )
  };
  var __vue_staticRenderFns__ = [];
  __vue_render__._withStripped = true;

    /* style */
    var __vue_inject_styles__ = undefined;
    /* scoped */
    var __vue_scope_id__ = "data-v-d0743446";
    /* module identifier */
    var __vue_module_identifier__ = undefined;
    /* functional template */
    var __vue_is_functional_template__ = false;
    /* style inject */
    
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    var __vue_component__ = /*#__PURE__*/normalizeComponent(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      false,
      undefined,
      undefined,
      undefined
    );

  __vue_component__.install = function (Vue) {
    Vue.component(__vue_component__.name, __vue_component__);
  };

  //
  var script$1 = {
    components: {
      Icon: __vue_component__
    },
    name: 'RInput',
    props: {
      value: {
        type: String
      },
      disabled: {
        type: Boolean,
        default: false
      },
      readonly: {
        type: Boolean,
        default: false
      },
      error: {
        type: String
      }
    }
  };

  /* script */
  var __vue_script__$1 = script$1;
  /* template */
  var __vue_render__$1 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "div",
      { staticClass: "wrapper", class: { error: _vm.error } },
      [
        _c("input", {
          attrs: { type: "text", disabled: _vm.disabled, readonly: _vm.readonly },
          domProps: { value: _vm.value },
          on: {
            change: function($event) {
              return _vm.$emit("change", $event.target.value)
            },
            input: function($event) {
              return _vm.$emit("input", $event.target.value)
            },
            focus: function($event) {
              return _vm.$emit("focus", $event.target.value)
            },
            blur: function($event) {
              return _vm.$emit("blur", $event.target.value)
            }
          }
        }),
        _vm._v(" "),
        _vm.error
          ? [
              _c("icon", { staticClass: "icon-error", attrs: { name: "error" } }),
              _vm._v(" "),
              _c("span", { staticClass: "errorMessage" }, [
                _vm._v(_vm._s(_vm.error))
              ])
            ]
          : _vm._e()
      ],
      2
    )
  };
  var __vue_staticRenderFns__$1 = [];
  __vue_render__$1._withStripped = true;

    /* style */
    var __vue_inject_styles__$1 = undefined;
    /* scoped */
    var __vue_scope_id__$1 = "data-v-355157fc";
    /* module identifier */
    var __vue_module_identifier__$1 = undefined;
    /* functional template */
    var __vue_is_functional_template__$1 = false;
    /* style inject */
    
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    var __vue_component__$1 = /*#__PURE__*/normalizeComponent(
      { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
      __vue_inject_styles__$1,
      __vue_script__$1,
      __vue_scope_id__$1,
      __vue_is_functional_template__$1,
      __vue_module_identifier__$1,
      false,
      undefined,
      undefined,
      undefined
    );

  __vue_component__$1.install = function (Vue) {
    Vue.component(__vue_component__$1.name, __vue_component__$1);
  };

  return __vue_component__$1;

})));
