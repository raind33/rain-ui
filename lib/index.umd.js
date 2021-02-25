/* * Copyright © 2019-2021 chenwenbin * Released under the MIT License. */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('vue')) :
	typeof define === 'function' && define.amd ? define(['vue'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.index = factory(global.Vue));
}(this, (function (Vue) { 'use strict';

	function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

	var Vue__default = /*#__PURE__*/_interopDefaultLegacy(Vue);

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

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

	var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
	var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

	// Nashorn ~ JDK8 bug
	var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

	// `Object.prototype.propertyIsEnumerable` method implementation
	// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
	var f = NASHORN_BUG ? function propertyIsEnumerable(V) {
	  var descriptor = getOwnPropertyDescriptor(this, V);
	  return !!descriptor && descriptor.enumerable;
	} : nativePropertyIsEnumerable;

	var objectPropertyIsEnumerable = {
		f: f
	};

	var createPropertyDescriptor = function (bitmap, value) {
	  return {
	    enumerable: !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable: !(bitmap & 4),
	    value: value
	  };
	};

	var toString = {}.toString;

	var classofRaw = function (it) {
	  return toString.call(it).slice(8, -1);
	};

	var split = ''.split;

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var indexedObject = fails(function () {
	  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
	  // eslint-disable-next-line no-prototype-builtins
	  return !Object('z').propertyIsEnumerable(0);
	}) ? function (it) {
	  return classofRaw(it) == 'String' ? split.call(it, '') : Object(it);
	} : Object;

	// `RequireObjectCoercible` abstract operation
	// https://tc39.es/ecma262/#sec-requireobjectcoercible
	var requireObjectCoercible = function (it) {
	  if (it == undefined) throw TypeError("Can't call method on " + it);
	  return it;
	};

	// toObject with fallback for non-array-like ES3 strings



	var toIndexedObject = function (it) {
	  return indexedObject(requireObjectCoercible(it));
	};

	var isObject = function (it) {
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
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

	var hasOwnProperty = {}.hasOwnProperty;

	var has = function (it, key) {
	  return hasOwnProperty.call(it, key);
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

	var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

	// `Object.getOwnPropertyDescriptor` method
	// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
	var f$1 = descriptors ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
	  O = toIndexedObject(O);
	  P = toPrimitive(P, true);
	  if (ie8DomDefine) try {
	    return nativeGetOwnPropertyDescriptor(O, P);
	  } catch (error) { /* empty */ }
	  if (has(O, P)) return createPropertyDescriptor(!objectPropertyIsEnumerable.f.call(O, P), O[P]);
	};

	var objectGetOwnPropertyDescriptor = {
		f: f$1
	};

	var anObject = function (it) {
	  if (!isObject(it)) {
	    throw TypeError(String(it) + ' is not an object');
	  } return it;
	};

	var nativeDefineProperty = Object.defineProperty;

	// `Object.defineProperty` method
	// https://tc39.es/ecma262/#sec-object.defineproperty
	var f$2 = descriptors ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
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
		f: f$2
	};

	var createNonEnumerableProperty = descriptors ? function (object, key, value) {
	  return objectDefineProperty.f(object, key, createPropertyDescriptor(1, value));
	} : function (object, key, value) {
	  object[key] = value;
	  return object;
	};

	var setGlobal = function (key, value) {
	  try {
	    createNonEnumerableProperty(global_1, key, value);
	  } catch (error) {
	    global_1[key] = value;
	  } return value;
	};

	var SHARED = '__core-js_shared__';
	var store = global_1[SHARED] || setGlobal(SHARED, {});

	var sharedStore = store;

	var functionToString = Function.toString;

	// this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper
	if (typeof sharedStore.inspectSource != 'function') {
	  sharedStore.inspectSource = function (it) {
	    return functionToString.call(it);
	  };
	}

	var inspectSource = sharedStore.inspectSource;

	var WeakMap = global_1.WeakMap;

	var nativeWeakMap = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));

	var shared = createCommonjsModule(function (module) {
	(module.exports = function (key, value) {
	  return sharedStore[key] || (sharedStore[key] = value !== undefined ? value : {});
	})('versions', []).push({
	  version: '3.8.3',
	  mode: 'global',
	  copyright: '© 2021 Denis Pushkarev (zloirock.ru)'
	});
	});

	var id = 0;
	var postfix = Math.random();

	var uid = function (key) {
	  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
	};

	var keys = shared('keys');

	var sharedKey = function (key) {
	  return keys[key] || (keys[key] = uid(key));
	};

	var hiddenKeys = {};

	var WeakMap$1 = global_1.WeakMap;
	var set, get, has$1;

	var enforce = function (it) {
	  return has$1(it) ? get(it) : set(it, {});
	};

	var getterFor = function (TYPE) {
	  return function (it) {
	    var state;
	    if (!isObject(it) || (state = get(it)).type !== TYPE) {
	      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
	    } return state;
	  };
	};

	if (nativeWeakMap) {
	  var store$1 = sharedStore.state || (sharedStore.state = new WeakMap$1());
	  var wmget = store$1.get;
	  var wmhas = store$1.has;
	  var wmset = store$1.set;
	  set = function (it, metadata) {
	    metadata.facade = it;
	    wmset.call(store$1, it, metadata);
	    return metadata;
	  };
	  get = function (it) {
	    return wmget.call(store$1, it) || {};
	  };
	  has$1 = function (it) {
	    return wmhas.call(store$1, it);
	  };
	} else {
	  var STATE = sharedKey('state');
	  hiddenKeys[STATE] = true;
	  set = function (it, metadata) {
	    metadata.facade = it;
	    createNonEnumerableProperty(it, STATE, metadata);
	    return metadata;
	  };
	  get = function (it) {
	    return has(it, STATE) ? it[STATE] : {};
	  };
	  has$1 = function (it) {
	    return has(it, STATE);
	  };
	}

	var internalState = {
	  set: set,
	  get: get,
	  has: has$1,
	  enforce: enforce,
	  getterFor: getterFor
	};

	var redefine = createCommonjsModule(function (module) {
	var getInternalState = internalState.get;
	var enforceInternalState = internalState.enforce;
	var TEMPLATE = String(String).split('String');

	(module.exports = function (O, key, value, options) {
	  var unsafe = options ? !!options.unsafe : false;
	  var simple = options ? !!options.enumerable : false;
	  var noTargetGet = options ? !!options.noTargetGet : false;
	  var state;
	  if (typeof value == 'function') {
	    if (typeof key == 'string' && !has(value, 'name')) {
	      createNonEnumerableProperty(value, 'name', key);
	    }
	    state = enforceInternalState(value);
	    if (!state.source) {
	      state.source = TEMPLATE.join(typeof key == 'string' ? key : '');
	    }
	  }
	  if (O === global_1) {
	    if (simple) O[key] = value;
	    else setGlobal(key, value);
	    return;
	  } else if (!unsafe) {
	    delete O[key];
	  } else if (!noTargetGet && O[key]) {
	    simple = true;
	  }
	  if (simple) O[key] = value;
	  else createNonEnumerableProperty(O, key, value);
	// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
	})(Function.prototype, 'toString', function toString() {
	  return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
	});
	});

	var path = global_1;

	var aFunction = function (variable) {
	  return typeof variable == 'function' ? variable : undefined;
	};

	var getBuiltIn = function (namespace, method) {
	  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global_1[namespace])
	    : path[namespace] && path[namespace][method] || global_1[namespace] && global_1[namespace][method];
	};

	var ceil = Math.ceil;
	var floor = Math.floor;

	// `ToInteger` abstract operation
	// https://tc39.es/ecma262/#sec-tointeger
	var toInteger = function (argument) {
	  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
	};

	var min = Math.min;

	// `ToLength` abstract operation
	// https://tc39.es/ecma262/#sec-tolength
	var toLength = function (argument) {
	  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
	};

	var max = Math.max;
	var min$1 = Math.min;

	// Helper for a popular repeating case of the spec:
	// Let integer be ? ToInteger(index).
	// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
	var toAbsoluteIndex = function (index, length) {
	  var integer = toInteger(index);
	  return integer < 0 ? max(integer + length, 0) : min$1(integer, length);
	};

	// `Array.prototype.{ indexOf, includes }` methods implementation
	var createMethod = function (IS_INCLUDES) {
	  return function ($this, el, fromIndex) {
	    var O = toIndexedObject($this);
	    var length = toLength(O.length);
	    var index = toAbsoluteIndex(fromIndex, length);
	    var value;
	    // Array#includes uses SameValueZero equality algorithm
	    // eslint-disable-next-line no-self-compare
	    if (IS_INCLUDES && el != el) while (length > index) {
	      value = O[index++];
	      // eslint-disable-next-line no-self-compare
	      if (value != value) return true;
	    // Array#indexOf ignores holes, Array#includes - not
	    } else for (;length > index; index++) {
	      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

	var arrayIncludes = {
	  // `Array.prototype.includes` method
	  // https://tc39.es/ecma262/#sec-array.prototype.includes
	  includes: createMethod(true),
	  // `Array.prototype.indexOf` method
	  // https://tc39.es/ecma262/#sec-array.prototype.indexof
	  indexOf: createMethod(false)
	};

	var indexOf = arrayIncludes.indexOf;


	var objectKeysInternal = function (object, names) {
	  var O = toIndexedObject(object);
	  var i = 0;
	  var result = [];
	  var key;
	  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while (names.length > i) if (has(O, key = names[i++])) {
	    ~indexOf(result, key) || result.push(key);
	  }
	  return result;
	};

	// IE8- don't enum bug keys
	var enumBugKeys = [
	  'constructor',
	  'hasOwnProperty',
	  'isPrototypeOf',
	  'propertyIsEnumerable',
	  'toLocaleString',
	  'toString',
	  'valueOf'
	];

	var hiddenKeys$1 = enumBugKeys.concat('length', 'prototype');

	// `Object.getOwnPropertyNames` method
	// https://tc39.es/ecma262/#sec-object.getownpropertynames
	var f$3 = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
	  return objectKeysInternal(O, hiddenKeys$1);
	};

	var objectGetOwnPropertyNames = {
		f: f$3
	};

	var f$4 = Object.getOwnPropertySymbols;

	var objectGetOwnPropertySymbols = {
		f: f$4
	};

	// all object keys, includes non-enumerable and symbols
	var ownKeys = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
	  var keys = objectGetOwnPropertyNames.f(anObject(it));
	  var getOwnPropertySymbols = objectGetOwnPropertySymbols.f;
	  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
	};

	var copyConstructorProperties = function (target, source) {
	  var keys = ownKeys(source);
	  var defineProperty = objectDefineProperty.f;
	  var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
	  for (var i = 0; i < keys.length; i++) {
	    var key = keys[i];
	    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
	  }
	};

	var replacement = /#|\.prototype\./;

	var isForced = function (feature, detection) {
	  var value = data[normalize(feature)];
	  return value == POLYFILL ? true
	    : value == NATIVE ? false
	    : typeof detection == 'function' ? fails(detection)
	    : !!detection;
	};

	var normalize = isForced.normalize = function (string) {
	  return String(string).replace(replacement, '.').toLowerCase();
	};

	var data = isForced.data = {};
	var NATIVE = isForced.NATIVE = 'N';
	var POLYFILL = isForced.POLYFILL = 'P';

	var isForced_1 = isForced;

	var getOwnPropertyDescriptor$1 = objectGetOwnPropertyDescriptor.f;






	/*
	  options.target      - name of the target object
	  options.global      - target is the global object
	  options.stat        - export as static methods of target
	  options.proto       - export as prototype methods of target
	  options.real        - real prototype method for the `pure` version
	  options.forced      - export even if the native feature is available
	  options.bind        - bind methods to the target, required for the `pure` version
	  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
	  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
	  options.sham        - add a flag to not completely full polyfills
	  options.enumerable  - export as enumerable property
	  options.noTargetGet - prevent calling a getter on target
	*/
	var _export = function (options, source) {
	  var TARGET = options.target;
	  var GLOBAL = options.global;
	  var STATIC = options.stat;
	  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
	  if (GLOBAL) {
	    target = global_1;
	  } else if (STATIC) {
	    target = global_1[TARGET] || setGlobal(TARGET, {});
	  } else {
	    target = (global_1[TARGET] || {}).prototype;
	  }
	  if (target) for (key in source) {
	    sourceProperty = source[key];
	    if (options.noTargetGet) {
	      descriptor = getOwnPropertyDescriptor$1(target, key);
	      targetProperty = descriptor && descriptor.value;
	    } else targetProperty = target[key];
	    FORCED = isForced_1(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
	    // contained in target
	    if (!FORCED && targetProperty !== undefined) {
	      if (typeof sourceProperty === typeof targetProperty) continue;
	      copyConstructorProperties(sourceProperty, targetProperty);
	    }
	    // add a flag to not completely full polyfills
	    if (options.sham || (targetProperty && targetProperty.sham)) {
	      createNonEnumerableProperty(sourceProperty, 'sham', true);
	    }
	    // extend global
	    redefine(target, key, sourceProperty, options);
	  }
	};

	var aFunction$1 = function (it) {
	  if (typeof it != 'function') {
	    throw TypeError(String(it) + ' is not a function');
	  } return it;
	};

	// optional / simple context binding
	var functionBindContext = function (fn, that, length) {
	  aFunction$1(fn);
	  if (that === undefined) return fn;
	  switch (length) {
	    case 0: return function () {
	      return fn.call(that);
	    };
	    case 1: return function (a) {
	      return fn.call(that, a);
	    };
	    case 2: return function (a, b) {
	      return fn.call(that, a, b);
	    };
	    case 3: return function (a, b, c) {
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function (/* ...args */) {
	    return fn.apply(that, arguments);
	  };
	};

	// `ToObject` abstract operation
	// https://tc39.es/ecma262/#sec-toobject
	var toObject = function (argument) {
	  return Object(requireObjectCoercible(argument));
	};

	// `IsArray` abstract operation
	// https://tc39.es/ecma262/#sec-isarray
	var isArray = Array.isArray || function isArray(arg) {
	  return classofRaw(arg) == 'Array';
	};

	var nativeSymbol = !!Object.getOwnPropertySymbols && !fails(function () {
	  // Chrome 38 Symbol has incorrect toString conversion
	  // eslint-disable-next-line no-undef
	  return !String(Symbol());
	});

	var useSymbolAsUid = nativeSymbol
	  // eslint-disable-next-line no-undef
	  && !Symbol.sham
	  // eslint-disable-next-line no-undef
	  && typeof Symbol.iterator == 'symbol';

	var WellKnownSymbolsStore = shared('wks');
	var Symbol$1 = global_1.Symbol;
	var createWellKnownSymbol = useSymbolAsUid ? Symbol$1 : Symbol$1 && Symbol$1.withoutSetter || uid;

	var wellKnownSymbol = function (name) {
	  if (!has(WellKnownSymbolsStore, name)) {
	    if (nativeSymbol && has(Symbol$1, name)) WellKnownSymbolsStore[name] = Symbol$1[name];
	    else WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
	  } return WellKnownSymbolsStore[name];
	};

	var SPECIES = wellKnownSymbol('species');

	// `ArraySpeciesCreate` abstract operation
	// https://tc39.es/ecma262/#sec-arrayspeciescreate
	var arraySpeciesCreate = function (originalArray, length) {
	  var C;
	  if (isArray(originalArray)) {
	    C = originalArray.constructor;
	    // cross-realm fallback
	    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
	    else if (isObject(C)) {
	      C = C[SPECIES];
	      if (C === null) C = undefined;
	    }
	  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
	};

	var push = [].push;

	// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterOut }` methods implementation
	var createMethod$1 = function (TYPE) {
	  var IS_MAP = TYPE == 1;
	  var IS_FILTER = TYPE == 2;
	  var IS_SOME = TYPE == 3;
	  var IS_EVERY = TYPE == 4;
	  var IS_FIND_INDEX = TYPE == 6;
	  var IS_FILTER_OUT = TYPE == 7;
	  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
	  return function ($this, callbackfn, that, specificCreate) {
	    var O = toObject($this);
	    var self = indexedObject(O);
	    var boundFunction = functionBindContext(callbackfn, that, 3);
	    var length = toLength(self.length);
	    var index = 0;
	    var create = specificCreate || arraySpeciesCreate;
	    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_OUT ? create($this, 0) : undefined;
	    var value, result;
	    for (;length > index; index++) if (NO_HOLES || index in self) {
	      value = self[index];
	      result = boundFunction(value, index, O);
	      if (TYPE) {
	        if (IS_MAP) target[index] = result; // map
	        else if (result) switch (TYPE) {
	          case 3: return true;              // some
	          case 5: return value;             // find
	          case 6: return index;             // findIndex
	          case 2: push.call(target, value); // filter
	        } else switch (TYPE) {
	          case 4: return false;             // every
	          case 7: push.call(target, value); // filterOut
	        }
	      }
	    }
	    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
	  };
	};

	var arrayIteration = {
	  // `Array.prototype.forEach` method
	  // https://tc39.es/ecma262/#sec-array.prototype.foreach
	  forEach: createMethod$1(0),
	  // `Array.prototype.map` method
	  // https://tc39.es/ecma262/#sec-array.prototype.map
	  map: createMethod$1(1),
	  // `Array.prototype.filter` method
	  // https://tc39.es/ecma262/#sec-array.prototype.filter
	  filter: createMethod$1(2),
	  // `Array.prototype.some` method
	  // https://tc39.es/ecma262/#sec-array.prototype.some
	  some: createMethod$1(3),
	  // `Array.prototype.every` method
	  // https://tc39.es/ecma262/#sec-array.prototype.every
	  every: createMethod$1(4),
	  // `Array.prototype.find` method
	  // https://tc39.es/ecma262/#sec-array.prototype.find
	  find: createMethod$1(5),
	  // `Array.prototype.findIndex` method
	  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
	  findIndex: createMethod$1(6),
	  // `Array.prototype.filterOut` method
	  // https://github.com/tc39/proposal-array-filtering
	  filterOut: createMethod$1(7)
	};

	var arrayMethodIsStrict = function (METHOD_NAME, argument) {
	  var method = [][METHOD_NAME];
	  return !!method && fails(function () {
	    // eslint-disable-next-line no-useless-call,no-throw-literal
	    method.call(null, argument || function () { throw 1; }, 1);
	  });
	};

	var defineProperty = Object.defineProperty;
	var cache = {};

	var thrower = function (it) { throw it; };

	var arrayMethodUsesToLength = function (METHOD_NAME, options) {
	  if (has(cache, METHOD_NAME)) return cache[METHOD_NAME];
	  if (!options) options = {};
	  var method = [][METHOD_NAME];
	  var ACCESSORS = has(options, 'ACCESSORS') ? options.ACCESSORS : false;
	  var argument0 = has(options, 0) ? options[0] : thrower;
	  var argument1 = has(options, 1) ? options[1] : undefined;

	  return cache[METHOD_NAME] = !!method && !fails(function () {
	    if (ACCESSORS && !descriptors) return true;
	    var O = { length: -1 };

	    if (ACCESSORS) defineProperty(O, 1, { enumerable: true, get: thrower });
	    else O[1] = 1;

	    method.call(O, argument0, argument1);
	  });
	};

	var $forEach = arrayIteration.forEach;



	var STRICT_METHOD = arrayMethodIsStrict('forEach');
	var USES_TO_LENGTH = arrayMethodUsesToLength('forEach');

	// `Array.prototype.forEach` method implementation
	// https://tc39.es/ecma262/#sec-array.prototype.foreach
	var arrayForEach = (!STRICT_METHOD || !USES_TO_LENGTH) ? function forEach(callbackfn /* , thisArg */) {
	  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	} : [].forEach;

	// `Array.prototype.forEach` method
	// https://tc39.es/ecma262/#sec-array.prototype.foreach
	_export({ target: 'Array', proto: true, forced: [].forEach != arrayForEach }, {
	  forEach: arrayForEach
	});

	var defineProperty$1 = objectDefineProperty.f;

	var FunctionPrototype = Function.prototype;
	var FunctionPrototypeToString = FunctionPrototype.toString;
	var nameRE = /^\s*function ([^ (]*)/;
	var NAME = 'name';

	// Function instances `.name` property
	// https://tc39.es/ecma262/#sec-function-instances-name
	if (descriptors && !(NAME in FunctionPrototype)) {
	  defineProperty$1(FunctionPrototype, NAME, {
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

	// iterable DOM collections
	// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
	var domIterables = {
	  CSSRuleList: 0,
	  CSSStyleDeclaration: 0,
	  CSSValueList: 0,
	  ClientRectList: 0,
	  DOMRectList: 0,
	  DOMStringList: 0,
	  DOMTokenList: 1,
	  DataTransferItemList: 0,
	  FileList: 0,
	  HTMLAllCollection: 0,
	  HTMLCollection: 0,
	  HTMLFormElement: 0,
	  HTMLSelectElement: 0,
	  MediaList: 0,
	  MimeTypeArray: 0,
	  NamedNodeMap: 0,
	  NodeList: 1,
	  PaintRequestList: 0,
	  Plugin: 0,
	  PluginArray: 0,
	  SVGLengthList: 0,
	  SVGNumberList: 0,
	  SVGPathSegList: 0,
	  SVGPointList: 0,
	  SVGStringList: 0,
	  SVGTransformList: 0,
	  SourceBufferList: 0,
	  StyleSheetList: 0,
	  TextTrackCueList: 0,
	  TextTrackList: 0,
	  TouchList: 0
	};

	for (var COLLECTION_NAME in domIterables) {
	  var Collection = global_1[COLLECTION_NAME];
	  var CollectionPrototype = Collection && Collection.prototype;
	  // some Chrome versions have non-configurable methods on DOMTokenList
	  if (CollectionPrototype && CollectionPrototype.forEach !== arrayForEach) try {
	    createNonEnumerableProperty(CollectionPrototype, 'forEach', arrayForEach);
	  } catch (error) {
	    CollectionPrototype.forEach = arrayForEach;
	  }
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
	  name: 'RButton',
	  components: {
	    'r-icon': __vue_component__
	  },
	  // props: ['icon', 'iconPosition']
	  props: {
	    icon: {},
	    loading: {
	      type: Boolean,
	      default: false
	    },
	    iconPosition: {
	      type: String,
	      default: 'left',
	      validator: function validator(value) {
	        return value === 'left' || value === 'right';
	      }
	    }
	  }
	};

	/* script */
 var __vue_script__$1 = script$1;
	/* template */
	var __vue_render__$1 = function() {
	  var _obj;
	  var _vm = this;
	  var _h = _vm.$createElement;
	  var _c = _vm._self._c || _h;
	  return _c(
	    "button",
	    {
	      staticClass: "r-button",
	      class: ((_obj = {}), (_obj["icon-" + _vm.iconPosition] = true), _obj),
	      on: {
	        click: function($event) {
	          return _vm.$emit("click")
	        }
	      }
	    },
	    [
	      _vm.icon && !_vm.loading
	        ? _c("r-icon", { staticClass: "icon", attrs: { name: _vm.icon } })
	        : _vm._e(),
	      _vm._v(" "),
	      _vm.loading
	        ? _c("r-icon", {
	            staticClass: "loading icon",
	            attrs: { name: "loading" }
	          })
	        : _vm._e(),
	      _vm._v(" "),
	      _c("div", { staticClass: "content" }, [_vm._t("default")], 2)
	    ],
	    1
	  )
	};
	var __vue_staticRenderFns__$1 = [];
	__vue_render__$1._withStripped = true;

	  /* style */
	  var __vue_inject_styles__$1 = undefined;
	  /* scoped */
	  var __vue_scope_id__$1 = "data-v-a7964ec8";
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

	function _arrayLikeToArray(arr, len) {
	  if (len == null || len > arr.length) len = arr.length;

	  for (var i = 0, arr2 = new Array(len); i < len; i++) {
	    arr2[i] = arr[i];
	  }

	  return arr2;
	}

	function _unsupportedIterableToArray(o, minLen) {
	  if (!o) return;
	  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
	  var n = Object.prototype.toString.call(o).slice(8, -1);
	  if (n === "Object" && o.constructor) n = o.constructor.name;
	  if (n === "Map" || n === "Set") return Array.from(o);
	  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
	}

	function _createForOfIteratorHelper(o, allowArrayLike) {
	  var it;

	  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
	    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
	      if (it) o = it;
	      var i = 0;

	      var F = function F() {};

	      return {
	        s: F,
	        n: function n() {
	          if (i >= o.length) return {
	            done: true
	          };
	          return {
	            done: false,
	            value: o[i++]
	          };
	        },
	        e: function e(_e) {
	          throw _e;
	        },
	        f: F
	      };
	    }

	    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	  }

	  var normalCompletion = true,
	      didErr = false,
	      err;
	  return {
	    s: function s() {
	      it = o[Symbol.iterator]();
	    },
	    n: function n() {
	      var step = it.next();
	      normalCompletion = step.done;
	      return step;
	    },
	    e: function e(_e2) {
	      didErr = true;
	      err = _e2;
	    },
	    f: function f() {
	      try {
	        if (!normalCompletion && it["return"] != null) it["return"]();
	      } finally {
	        if (didErr) throw err;
	      }
	    }
	  };
	}

	//
	//
	//
	//
	//
	var script$2 = {
	  name: 'RButtonGroup',
	  mounted: function mounted() {
	    var _iterator = _createForOfIteratorHelper(this.$el.children),
	        _step;

	    try {
	      for (_iterator.s(); !(_step = _iterator.n()).done;) {
	        var node = _step.value;
	        var name = node.nodeName.toLowerCase();

	        if (name !== 'button') {
	          console.warn("r-button-group \u7684\u5B50\u5143\u7D20\u5E94\u8BE5\u5168\u662F r-button\uFF0C\u4F46\u662F\u4F60\u5199\u7684\u662F ".concat(name));
	        }
	      }
	    } catch (err) {
	      _iterator.e(err);
	    } finally {
	      _iterator.f();
	    }
	  }
	};

	/* script */
 var __vue_script__$2 = script$2;
	/* template */
	var __vue_render__$2 = function() {
	  var _vm = this;
	  var _h = _vm.$createElement;
	  var _c = _vm._self._c || _h;
	  return _c("div", { staticClass: "r-button-group" }, [_vm._t("default")], 2)
	};
	var __vue_staticRenderFns__$2 = [];
	__vue_render__$2._withStripped = true;

	  /* style */
	  var __vue_inject_styles__$2 = undefined;
	  /* scoped */
	  var __vue_scope_id__$2 = "data-v-70136c5e";
	  /* module identifier */
	  var __vue_module_identifier__$2 = undefined;
	  /* functional template */
	  var __vue_is_functional_template__$2 = false;
	  /* style inject */
	  
	  /* style inject SSR */
	  
	  /* style inject shadow dom */
	  

	  
	  var __vue_component__$2 = /*#__PURE__*/normalizeComponent(
	    { render: __vue_render__$2, staticRenderFns: __vue_staticRenderFns__$2 },
	    __vue_inject_styles__$2,
	    __vue_script__$2,
	    __vue_scope_id__$2,
	    __vue_is_functional_template__$2,
	    __vue_module_identifier__$2,
	    false,
	    undefined,
	    undefined,
	    undefined
	  );

	__vue_component__$2.install = function (Vue) {
	  Vue.component(__vue_component__$2.name, __vue_component__$2);
	};

	var engineUserAgent = getBuiltIn('navigator', 'userAgent') || '';

	var process = global_1.process;
	var versions = process && process.versions;
	var v8 = versions && versions.v8;
	var match, version;

	if (v8) {
	  match = v8.split('.');
	  version = match[0] + match[1];
	} else if (engineUserAgent) {
	  match = engineUserAgent.match(/Edge\/(\d+)/);
	  if (!match || match[1] >= 74) {
	    match = engineUserAgent.match(/Chrome\/(\d+)/);
	    if (match) version = match[1];
	  }
	}

	var engineV8Version = version && +version;

	var SPECIES$1 = wellKnownSymbol('species');

	var arrayMethodHasSpeciesSupport = function (METHOD_NAME) {
	  // We can't use this feature detection in V8 since it causes
	  // deoptimization and serious performance degradation
	  // https://github.com/zloirock/core-js/issues/677
	  return engineV8Version >= 51 || !fails(function () {
	    var array = [];
	    var constructor = array.constructor = {};
	    constructor[SPECIES$1] = function () {
	      return { foo: 1 };
	    };
	    return array[METHOD_NAME](Boolean).foo !== 1;
	  });
	};

	var $filter = arrayIteration.filter;



	var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');
	// Edge 14- issue
	var USES_TO_LENGTH$1 = arrayMethodUsesToLength('filter');

	// `Array.prototype.filter` method
	// https://tc39.es/ecma262/#sec-array.prototype.filter
	// with adding support of @@species
	_export({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH$1 }, {
	  filter: function filter(callbackfn /* , thisArg */) {
	    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	var nativeJoin = [].join;

	var ES3_STRINGS = indexedObject != Object;
	var STRICT_METHOD$1 = arrayMethodIsStrict('join', ',');

	// `Array.prototype.join` method
	// https://tc39.es/ecma262/#sec-array.prototype.join
	_export({ target: 'Array', proto: true, forced: ES3_STRINGS || !STRICT_METHOD$1 }, {
	  join: function join(separator) {
	    return nativeJoin.call(toIndexedObject(this), separator === undefined ? ',' : separator);
	  }
	});

	var $map = arrayIteration.map;



	var HAS_SPECIES_SUPPORT$1 = arrayMethodHasSpeciesSupport('map');
	// FF49- issue
	var USES_TO_LENGTH$2 = arrayMethodUsesToLength('map');

	// `Array.prototype.map` method
	// https://tc39.es/ecma262/#sec-array.prototype.map
	// with adding support of @@species
	_export({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT$1 || !USES_TO_LENGTH$2 }, {
	  map: function map(callbackfn /* , thisArg */) {
	    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	var createProperty = function (object, key, value) {
	  var propertyKey = toPrimitive(key);
	  if (propertyKey in object) objectDefineProperty.f(object, propertyKey, createPropertyDescriptor(0, value));
	  else object[propertyKey] = value;
	};

	var HAS_SPECIES_SUPPORT$2 = arrayMethodHasSpeciesSupport('splice');
	var USES_TO_LENGTH$3 = arrayMethodUsesToLength('splice', { ACCESSORS: true, 0: 0, 1: 2 });

	var max$1 = Math.max;
	var min$2 = Math.min;
	var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
	var MAXIMUM_ALLOWED_LENGTH_EXCEEDED = 'Maximum allowed length exceeded';

	// `Array.prototype.splice` method
	// https://tc39.es/ecma262/#sec-array.prototype.splice
	// with adding support of @@species
	_export({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT$2 || !USES_TO_LENGTH$3 }, {
	  splice: function splice(start, deleteCount /* , ...items */) {
	    var O = toObject(this);
	    var len = toLength(O.length);
	    var actualStart = toAbsoluteIndex(start, len);
	    var argumentsLength = arguments.length;
	    var insertCount, actualDeleteCount, A, k, from, to;
	    if (argumentsLength === 0) {
	      insertCount = actualDeleteCount = 0;
	    } else if (argumentsLength === 1) {
	      insertCount = 0;
	      actualDeleteCount = len - actualStart;
	    } else {
	      insertCount = argumentsLength - 2;
	      actualDeleteCount = min$2(max$1(toInteger(deleteCount), 0), len - actualStart);
	    }
	    if (len + insertCount - actualDeleteCount > MAX_SAFE_INTEGER) {
	      throw TypeError(MAXIMUM_ALLOWED_LENGTH_EXCEEDED);
	    }
	    A = arraySpeciesCreate(O, actualDeleteCount);
	    for (k = 0; k < actualDeleteCount; k++) {
	      from = actualStart + k;
	      if (from in O) createProperty(A, k, O[from]);
	    }
	    A.length = actualDeleteCount;
	    if (insertCount < actualDeleteCount) {
	      for (k = actualStart; k < len - actualDeleteCount; k++) {
	        from = k + actualDeleteCount;
	        to = k + insertCount;
	        if (from in O) O[to] = O[from];
	        else delete O[to];
	      }
	      for (k = len; k > len - actualDeleteCount + insertCount; k--) delete O[k - 1];
	    } else if (insertCount > actualDeleteCount) {
	      for (k = len - actualDeleteCount; k > actualStart; k--) {
	        from = k + actualDeleteCount - 1;
	        to = k + insertCount - 1;
	        if (from in O) O[to] = O[from];
	        else delete O[to];
	      }
	    }
	    for (k = 0; k < insertCount; k++) {
	      O[k + actualStart] = arguments[k + 2];
	    }
	    O.length = len - actualDeleteCount + insertCount;
	    return A;
	  }
	});

	var aPossiblePrototype = function (it) {
	  if (!isObject(it) && it !== null) {
	    throw TypeError("Can't set " + String(it) + ' as a prototype');
	  } return it;
	};

	// `Object.setPrototypeOf` method
	// https://tc39.es/ecma262/#sec-object.setprototypeof
	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var objectSetPrototypeOf = Object.setPrototypeOf || ('__proto__' in {} ? function () {
	  var CORRECT_SETTER = false;
	  var test = {};
	  var setter;
	  try {
	    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
	    setter.call(test, []);
	    CORRECT_SETTER = test instanceof Array;
	  } catch (error) { /* empty */ }
	  return function setPrototypeOf(O, proto) {
	    anObject(O);
	    aPossiblePrototype(proto);
	    if (CORRECT_SETTER) setter.call(O, proto);
	    else O.__proto__ = proto;
	    return O;
	  };
	}() : undefined);

	// makes subclassing work correct for wrapped built-ins
	var inheritIfRequired = function ($this, dummy, Wrapper) {
	  var NewTarget, NewTargetPrototype;
	  if (
	    // it can work only with native `setPrototypeOf`
	    objectSetPrototypeOf &&
	    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
	    typeof (NewTarget = dummy.constructor) == 'function' &&
	    NewTarget !== Wrapper &&
	    isObject(NewTargetPrototype = NewTarget.prototype) &&
	    NewTargetPrototype !== Wrapper.prototype
	  ) objectSetPrototypeOf($this, NewTargetPrototype);
	  return $this;
	};

	// `Object.keys` method
	// https://tc39.es/ecma262/#sec-object.keys
	var objectKeys = Object.keys || function keys(O) {
	  return objectKeysInternal(O, enumBugKeys);
	};

	// `Object.defineProperties` method
	// https://tc39.es/ecma262/#sec-object.defineproperties
	var objectDefineProperties = descriptors ? Object.defineProperties : function defineProperties(O, Properties) {
	  anObject(O);
	  var keys = objectKeys(Properties);
	  var length = keys.length;
	  var index = 0;
	  var key;
	  while (length > index) objectDefineProperty.f(O, key = keys[index++], Properties[key]);
	  return O;
	};

	var html = getBuiltIn('document', 'documentElement');

	var GT = '>';
	var LT = '<';
	var PROTOTYPE = 'prototype';
	var SCRIPT = 'script';
	var IE_PROTO = sharedKey('IE_PROTO');

	var EmptyConstructor = function () { /* empty */ };

	var scriptTag = function (content) {
	  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
	};

	// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
	var NullProtoObjectViaActiveX = function (activeXDocument) {
	  activeXDocument.write(scriptTag(''));
	  activeXDocument.close();
	  var temp = activeXDocument.parentWindow.Object;
	  activeXDocument = null; // avoid memory leak
	  return temp;
	};

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var NullProtoObjectViaIFrame = function () {
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = documentCreateElement('iframe');
	  var JS = 'java' + SCRIPT + ':';
	  var iframeDocument;
	  iframe.style.display = 'none';
	  html.appendChild(iframe);
	  // https://github.com/zloirock/core-js/issues/475
	  iframe.src = String(JS);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(scriptTag('document.F=Object'));
	  iframeDocument.close();
	  return iframeDocument.F;
	};

	// Check for document.domain and active x support
	// No need to use active x approach when document.domain is not set
	// see https://github.com/es-shims/es5-shim/issues/150
	// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
	// avoid IE GC bug
	var activeXDocument;
	var NullProtoObject = function () {
	  try {
	    /* global ActiveXObject */
	    activeXDocument = document.domain && new ActiveXObject('htmlfile');
	  } catch (error) { /* ignore */ }
	  NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
	  var length = enumBugKeys.length;
	  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
	  return NullProtoObject();
	};

	hiddenKeys[IE_PROTO] = true;

	// `Object.create` method
	// https://tc39.es/ecma262/#sec-object.create
	var objectCreate = Object.create || function create(O, Properties) {
	  var result;
	  if (O !== null) {
	    EmptyConstructor[PROTOTYPE] = anObject(O);
	    result = new EmptyConstructor();
	    EmptyConstructor[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = NullProtoObject();
	  return Properties === undefined ? result : objectDefineProperties(result, Properties);
	};

	// a string of all valid unicode whitespaces
	// eslint-disable-next-line max-len
	var whitespaces = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

	var whitespace = '[' + whitespaces + ']';
	var ltrim = RegExp('^' + whitespace + whitespace + '*');
	var rtrim = RegExp(whitespace + whitespace + '*$');

	// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
	var createMethod$2 = function (TYPE) {
	  return function ($this) {
	    var string = String(requireObjectCoercible($this));
	    if (TYPE & 1) string = string.replace(ltrim, '');
	    if (TYPE & 2) string = string.replace(rtrim, '');
	    return string;
	  };
	};

	var stringTrim = {
	  // `String.prototype.{ trimLeft, trimStart }` methods
	  // https://tc39.es/ecma262/#sec-string.prototype.trimstart
	  start: createMethod$2(1),
	  // `String.prototype.{ trimRight, trimEnd }` methods
	  // https://tc39.es/ecma262/#sec-string.prototype.trimend
	  end: createMethod$2(2),
	  // `String.prototype.trim` method
	  // https://tc39.es/ecma262/#sec-string.prototype.trim
	  trim: createMethod$2(3)
	};

	var getOwnPropertyNames = objectGetOwnPropertyNames.f;
	var getOwnPropertyDescriptor$2 = objectGetOwnPropertyDescriptor.f;
	var defineProperty$2 = objectDefineProperty.f;
	var trim = stringTrim.trim;

	var NUMBER = 'Number';
	var NativeNumber = global_1[NUMBER];
	var NumberPrototype = NativeNumber.prototype;

	// Opera ~12 has broken Object#toString
	var BROKEN_CLASSOF = classofRaw(objectCreate(NumberPrototype)) == NUMBER;

	// `ToNumber` abstract operation
	// https://tc39.es/ecma262/#sec-tonumber
	var toNumber = function (argument) {
	  var it = toPrimitive(argument, false);
	  var first, third, radix, maxCode, digits, length, index, code;
	  if (typeof it == 'string' && it.length > 2) {
	    it = trim(it);
	    first = it.charCodeAt(0);
	    if (first === 43 || first === 45) {
	      third = it.charCodeAt(2);
	      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
	    } else if (first === 48) {
	      switch (it.charCodeAt(1)) {
	        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal of /^0b[01]+$/i
	        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal of /^0o[0-7]+$/i
	        default: return +it;
	      }
	      digits = it.slice(2);
	      length = digits.length;
	      for (index = 0; index < length; index++) {
	        code = digits.charCodeAt(index);
	        // parseInt parses a string to a first unavailable symbol
	        // but ToNumber should return NaN if a string contains unavailable symbols
	        if (code < 48 || code > maxCode) return NaN;
	      } return parseInt(digits, radix);
	    }
	  } return +it;
	};

	// `Number` constructor
	// https://tc39.es/ecma262/#sec-number-constructor
	if (isForced_1(NUMBER, !NativeNumber(' 0o1') || !NativeNumber('0b1') || NativeNumber('+0x1'))) {
	  var NumberWrapper = function Number(value) {
	    var it = arguments.length < 1 ? 0 : value;
	    var dummy = this;
	    return dummy instanceof NumberWrapper
	      // check on 1..constructor(foo) case
	      && (BROKEN_CLASSOF ? fails(function () { NumberPrototype.valueOf.call(dummy); }) : classofRaw(dummy) != NUMBER)
	        ? inheritIfRequired(new NativeNumber(toNumber(it)), dummy, NumberWrapper) : toNumber(it);
	  };
	  for (var keys$1 = descriptors ? getOwnPropertyNames(NativeNumber) : (
	    // ES3:
	    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
	    // ES2015 (in case, if modules with ES2015 Number statics required before):
	    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
	    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,' +
	    // ESNext
	    'fromString,range'
	  ).split(','), j = 0, key; keys$1.length > j; j++) {
	    if (has(NativeNumber, key = keys$1[j]) && !has(NumberWrapper, key)) {
	      defineProperty$2(NumberWrapper, key, getOwnPropertyDescriptor$2(NativeNumber, key));
	    }
	  }
	  NumberWrapper.prototype = NumberPrototype;
	  NumberPrototype.constructor = NumberWrapper;
	  redefine(global_1, NUMBER, NumberWrapper);
	}

	var script$3 = {
	  name: 'RCascaderItems',
	  components: {
	    Icon: __vue_component__
	  },
	  props: {
	    items: {
	      type: Array
	    },
	    height: {
	      type: String
	    },
	    loadingItem: {
	      type: Object,
	      default: function _default() {
	        return {};
	      }
	    },
	    selected: {
	      type: Array,
	      default: function _default() {
	        return [];
	      }
	    },
	    loadData: {
	      type: Function
	    },
	    level: {
	      type: Number,
	      default: 0
	    }
	  },
	  computed: {
	    rightItems: function rightItems() {
	      var _this = this;

	      if (this.selected[this.level]) {
	        var selected = this.items.filter(function (item) {
	          return item.name === _this.selected[_this.level].name;
	        });

	        if (selected && selected[0].children && selected[0].children.length > 0) {
	          return selected[0].children;
	        }
	      }

	      return [];
	    }
	  },
	  mounted: function mounted() {},
	  methods: {
	    rightArrowVisible: function rightArrowVisible(item) {
	      return this.loadData ? !item.isLeaf : item.children;
	    },
	    onClickLabel: function onClickLabel(item) {
	      var copy = JSON.parse(JSON.stringify(this.selected));
	      copy[this.level] = item;
	      copy.splice(this.level + 1); // 一句话

	      this.$emit('update:selected', copy);
	    },
	    onUpdateSelected: function onUpdateSelected(newSelected) {
	      this.$emit('update:selected', newSelected);
	    }
	  }
	};

	/* script */
 var __vue_script__$3 = script$3;
	/* template */
	var __vue_render__$3 = function() {
	  var _vm = this;
	  var _h = _vm.$createElement;
	  var _c = _vm._self._c || _h;
	  return _c(
	    "div",
	    { staticClass: "cascaderItem", style: { height: _vm.height } },
	    [
	      _c(
	        "div",
	        { staticClass: "left" },
	        _vm._l(_vm.items, function(item, index) {
	          return _c(
	            "div",
	            {
	              key: index,
	              staticClass: "label",
	              on: {
	                click: function($event) {
	                  return _vm.onClickLabel(item)
	                }
	              }
	            },
	            [
	              _c("span", { staticClass: "name" }, [_vm._v(_vm._s(item.name))]),
	              _vm._v(" "),
	              _c(
	                "span",
	                { staticClass: "icons" },
	                [
	                  item.name === _vm.loadingItem.name
	                    ? [
	                        _c("icon", {
	                          staticClass: "loading",
	                          attrs: { name: "loading" }
	                        })
	                      ]
	                    : [
	                        _vm.rightArrowVisible(item)
	                          ? _c("icon", {
	                              staticClass: "next",
	                              attrs: { name: "right" }
	                            })
	                          : _vm._e()
	                      ]
	                ],
	                2
	              )
	            ]
	          )
	        }),
	        0
	      ),
	      _vm._v(" "),
	      _vm.rightItems.length
	        ? _c(
	            "div",
	            { staticClass: "right" },
	            [
	              _c("r-cascader-items", {
	                ref: "right",
	                attrs: {
	                  items: _vm.rightItems,
	                  height: _vm.height,
	                  "loading-item": _vm.loadingItem,
	                  "load-data": _vm.loadData,
	                  level: _vm.level + 1,
	                  selected: _vm.selected
	                },
	                on: { "update:selected": _vm.onUpdateSelected }
	              })
	            ],
	            1
	          )
	        : _vm._e()
	    ]
	  )
	};
	var __vue_staticRenderFns__$3 = [];
	__vue_render__$3._withStripped = true;

	  /* style */
	  var __vue_inject_styles__$3 = undefined;
	  /* scoped */
	  var __vue_scope_id__$3 = "data-v-30839de3";
	  /* module identifier */
	  var __vue_module_identifier__$3 = undefined;
	  /* functional template */
	  var __vue_is_functional_template__$3 = false;
	  /* style inject */
	  
	  /* style inject SSR */
	  
	  /* style inject shadow dom */
	  

	  
	  var __vue_component__$3 = /*#__PURE__*/normalizeComponent(
	    { render: __vue_render__$3, staticRenderFns: __vue_staticRenderFns__$3 },
	    __vue_inject_styles__$3,
	    __vue_script__$3,
	    __vue_scope_id__$3,
	    __vue_is_functional_template__$3,
	    __vue_module_identifier__$3,
	    false,
	    undefined,
	    undefined,
	    undefined
	  );

	__vue_component__$3.install = function (Vue) {
	  Vue.component(__vue_component__$3.name, __vue_component__$3);
	};

	var onClickDocument = function onClickDocument(e) {
	  var target = e.target;
	  callbacks.forEach(function (item) {
	    if (target === item.el || item.el.contains(target)) ; else {
	      item.callback();
	    }
	  });
	};

	document.addEventListener('click', onClickDocument);
	var callbacks = [];
	var ClickOutside = {
	  bind: function bind(el, binding, vnode) {
	    callbacks.push({
	      el: el,
	      callback: binding.value
	    });
	  }
	};

	var script$4 = {
	  name: 'RCascader',
	  components: {
	    CascaderItems: __vue_component__$3
	  },
	  directives: {
	    ClickOutside: ClickOutside
	  },
	  props: {
	    source: {
	      type: Array
	    },
	    popoverHeight: {
	      type: String
	    },
	    selected: {
	      type: Array,
	      default: function _default() {
	        return [];
	      }
	    },
	    loadData: {
	      type: Function
	    }
	  },
	  data: function data() {
	    return {
	      popoverVisible: false,
	      loadingItem: {}
	    };
	  },
	  updated: function updated() {},
	  methods: {
	    open: function open() {
	      this.popoverVisible = true;
	    },
	    close: function close() {
	      this.popoverVisible = false;
	    },
	    toggle: function toggle() {
	      if (this.popoverVisible === true) {
	        this.close();
	      } else {
	        this.open();
	      }
	    },
	    onUpdateSelected: function onUpdateSelected(newSelected) {
	      var _this = this;

	      this.$emit('update:selected', newSelected);
	      var lastItem = newSelected[newSelected.length - 1];

	      var simplest = function simplest(children, id) {
	        return children.filter(function (item) {
	          return item.id === id;
	        })[0];
	      };

	      var complex = function complex(children, id) {
	        var noChildren = [];
	        var hasChildren = [];
	        children.forEach(function (item) {
	          if (item.children) {
	            hasChildren.push(item);
	          } else {
	            noChildren.push(item);
	          }
	        });
	        var found = simplest(noChildren, id);

	        if (found) {
	          return found;
	        } else {
	          found = simplest(hasChildren, id);

	          if (found) {
	            return found;
	          } else {
	            for (var i = 0; i < hasChildren.length; i++) {
	              found = complex(hasChildren[i].children, id);

	              if (found) {
	                return found;
	              }
	            }

	            return undefined;
	          }
	        }
	      };

	      var updateSource = function updateSource(result) {
	        _this.loadingItem = {};
	        var copy = JSON.parse(JSON.stringify(_this.source));
	        var toUpdate = complex(copy, lastItem.id);
	        toUpdate.children = result;

	        _this.$emit('update:source', copy);
	      };

	      if (!lastItem.isLeaf && this.loadData) {
	        this.loadData(lastItem, updateSource); // 回调:把别人传给我的函数调用一下
	        // 调回调的时候传一个函数,这个函数理论应该被调用

	        this.loadingItem = lastItem;
	      }
	    }
	  },
	  computed: {
	    result: function result() {
	      return this.selected.map(function (item) {
	        return item.name;
	      }).join('/');
	    }
	  }
	};

	/* script */
 var __vue_script__$4 = script$4;
	/* template */
	var __vue_render__$4 = function() {
	  var _vm = this;
	  var _h = _vm.$createElement;
	  var _c = _vm._self._c || _h;
	  return _c(
	    "div",
	    {
	      directives: [
	        {
	          name: "click-outside",
	          rawName: "v-click-outside",
	          value: _vm.close,
	          expression: "close"
	        }
	      ],
	      ref: "cascader",
	      staticClass: "cascader"
	    },
	    [
	      _c("div", { staticClass: "trigger", on: { click: _vm.toggle } }, [
	        _vm._v("\n    " + _vm._s(_vm.result || " ") + "\n  ")
	      ]),
	      _vm._v(" "),
	      _vm.popoverVisible
	        ? _c(
	            "div",
	            { staticClass: "popover-wrapper" },
	            [
	              _c("cascader-items", {
	                staticClass: "popover",
	                attrs: {
	                  items: _vm.source,
	                  loadData: _vm.loadData,
	                  "loading-item": _vm.loadingItem,
	                  height: _vm.popoverHeight,
	                  selected: _vm.selected
	                },
	                on: { "update:selected": _vm.onUpdateSelected }
	              })
	            ],
	            1
	          )
	        : _vm._e()
	    ]
	  )
	};
	var __vue_staticRenderFns__$4 = [];
	__vue_render__$4._withStripped = true;

	  /* style */
	  var __vue_inject_styles__$4 = undefined;
	  /* scoped */
	  var __vue_scope_id__$4 = "data-v-0e2470b7";
	  /* module identifier */
	  var __vue_module_identifier__$4 = undefined;
	  /* functional template */
	  var __vue_is_functional_template__$4 = false;
	  /* style inject */
	  
	  /* style inject SSR */
	  
	  /* style inject shadow dom */
	  

	  
	  var __vue_component__$4 = /*#__PURE__*/normalizeComponent(
	    { render: __vue_render__$4, staticRenderFns: __vue_staticRenderFns__$4 },
	    __vue_inject_styles__$4,
	    __vue_script__$4,
	    __vue_scope_id__$4,
	    __vue_is_functional_template__$4,
	    __vue_module_identifier__$4,
	    false,
	    undefined,
	    undefined,
	    undefined
	  );

	__vue_component__$4.install = function (Vue) {
	  Vue.component(__vue_component__$4.name, __vue_component__$4);
	};

	var $indexOf = arrayIncludes.indexOf;



	var nativeIndexOf = [].indexOf;

	var NEGATIVE_ZERO = !!nativeIndexOf && 1 / [1].indexOf(1, -0) < 0;
	var STRICT_METHOD$2 = arrayMethodIsStrict('indexOf');
	var USES_TO_LENGTH$4 = arrayMethodUsesToLength('indexOf', { ACCESSORS: true, 1: 0 });

	// `Array.prototype.indexOf` method
	// https://tc39.es/ecma262/#sec-array.prototype.indexof
	_export({ target: 'Array', proto: true, forced: NEGATIVE_ZERO || !STRICT_METHOD$2 || !USES_TO_LENGTH$4 }, {
	  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
	    return NEGATIVE_ZERO
	      // convert -0 to +0
	      ? nativeIndexOf.apply(this, arguments) || 0
	      : $indexOf(this, searchElement, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	var script$5 = {
	  name: 'RCollapseItem',
	  props: {
	    title: {
	      type: String,
	      required: true
	    },
	    name: {
	      type: String,
	      required: true
	    }
	  },
	  data: function data() {
	    return {
	      open: false
	    };
	  },
	  inject: ['eventBus'],
	  mounted: function mounted() {
	    var _this = this;

	    this.eventBus && this.eventBus.$on('update:selected', function (names) {
	      if (names.indexOf(_this.name) >= 0) {
	        _this.open = true;
	      } else {
	        _this.open = false;
	      }
	    });
	  },
	  methods: {
	    toggle: function toggle() {
	      if (this.open) {
	        this.eventBus && this.eventBus.$emit('update:removeSelected', this.name);
	      } else {
	        this.eventBus && this.eventBus.$emit('update:addSelected', this.name);
	      }
	    }
	  }
	};

	/* script */
 var __vue_script__$5 = script$5;
	/* template */
	var __vue_render__$5 = function() {
	  var _vm = this;
	  var _h = _vm.$createElement;
	  var _c = _vm._self._c || _h;
	  return _c("div", { staticClass: "collapseItem" }, [
	    _c(
	      "div",
	      {
	        staticClass: "title",
	        attrs: { "data-name": _vm.name },
	        on: { click: _vm.toggle }
	      },
	      [_vm._v("\n    " + _vm._s(_vm.title) + "\n  ")]
	    ),
	    _vm._v(" "),
	    _vm.open
	      ? _c(
	          "div",
	          { ref: "content", staticClass: "content" },
	          [_vm._t("default")],
	          2
	        )
	      : _vm._e()
	  ])
	};
	var __vue_staticRenderFns__$5 = [];
	__vue_render__$5._withStripped = true;

	  /* style */
	  var __vue_inject_styles__$5 = undefined;
	  /* scoped */
	  var __vue_scope_id__$5 = "data-v-c609ef1e";
	  /* module identifier */
	  var __vue_module_identifier__$5 = undefined;
	  /* functional template */
	  var __vue_is_functional_template__$5 = false;
	  /* style inject */
	  
	  /* style inject SSR */
	  
	  /* style inject shadow dom */
	  

	  
	  var __vue_component__$5 = /*#__PURE__*/normalizeComponent(
	    { render: __vue_render__$5, staticRenderFns: __vue_staticRenderFns__$5 },
	    __vue_inject_styles__$5,
	    __vue_script__$5,
	    __vue_scope_id__$5,
	    __vue_is_functional_template__$5,
	    __vue_module_identifier__$5,
	    false,
	    undefined,
	    undefined,
	    undefined
	  );

	__vue_component__$5.install = function (Vue) {
	  Vue.component(__vue_component__$5.name, __vue_component__$5);
	};

	var script$6 = {
	  name: 'RCollapse',
	  props: {
	    single: {
	      type: Boolean,
	      default: false
	    },
	    selected: {
	      type: Array
	    }
	  },
	  data: function data() {
	    return {
	      eventBus: new Vue__default['default']()
	    };
	  },
	  provide: function provide() {
	    return {
	      eventBus: this.eventBus
	    };
	  },
	  mounted: function mounted() {
	    var _this = this;

	    this.eventBus.$emit('update:selected', this.selected);
	    this.eventBus.$on('update:addSelected', function (name) {
	      var selectedCopy = JSON.parse(JSON.stringify(_this.selected));

	      if (_this.single) {
	        selectedCopy = [name];
	      } else {
	        selectedCopy.push(name);
	      }

	      _this.eventBus.$emit('update:selected', selectedCopy);

	      _this.$emit('update:selected', selectedCopy);
	    });
	    this.eventBus.$on('update:removeSelected', function (name) {
	      var selectedCopy = JSON.parse(JSON.stringify(_this.selected));
	      var index = selectedCopy.indexOf(name);
	      selectedCopy.splice(index, 1);

	      _this.eventBus.$emit('update:selected', selectedCopy);

	      _this.$emit('update:selected', selectedCopy);
	    });
	  }
	};

	/* script */
 var __vue_script__$6 = script$6;
	/* template */
	var __vue_render__$6 = function() {
	  var _vm = this;
	  var _h = _vm.$createElement;
	  var _c = _vm._self._c || _h;
	  return _c("div", { staticClass: "collapse" }, [_vm._t("default")], 2)
	};
	var __vue_staticRenderFns__$6 = [];
	__vue_render__$6._withStripped = true;

	  /* style */
	  var __vue_inject_styles__$6 = undefined;
	  /* scoped */
	  var __vue_scope_id__$6 = "data-v-eaf8e58a";
	  /* module identifier */
	  var __vue_module_identifier__$6 = undefined;
	  /* functional template */
	  var __vue_is_functional_template__$6 = false;
	  /* style inject */
	  
	  /* style inject SSR */
	  
	  /* style inject shadow dom */
	  

	  
	  var __vue_component__$6 = /*#__PURE__*/normalizeComponent(
	    { render: __vue_render__$6, staticRenderFns: __vue_staticRenderFns__$6 },
	    __vue_inject_styles__$6,
	    __vue_script__$6,
	    __vue_scope_id__$6,
	    __vue_is_functional_template__$6,
	    __vue_module_identifier__$6,
	    false,
	    undefined,
	    undefined,
	    undefined
	  );

	__vue_component__$6.install = function (Vue) {
	  Vue.component(__vue_component__$6.name, __vue_component__$6);
	};

	var UNSCOPABLES = wellKnownSymbol('unscopables');
	var ArrayPrototype = Array.prototype;

	// Array.prototype[@@unscopables]
	// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
	if (ArrayPrototype[UNSCOPABLES] == undefined) {
	  objectDefineProperty.f(ArrayPrototype, UNSCOPABLES, {
	    configurable: true,
	    value: objectCreate(null)
	  });
	}

	// add a key to Array.prototype[@@unscopables]
	var addToUnscopables = function (key) {
	  ArrayPrototype[UNSCOPABLES][key] = true;
	};

	var $includes = arrayIncludes.includes;



	var USES_TO_LENGTH$5 = arrayMethodUsesToLength('indexOf', { ACCESSORS: true, 1: 0 });

	// `Array.prototype.includes` method
	// https://tc39.es/ecma262/#sec-array.prototype.includes
	_export({ target: 'Array', proto: true, forced: !USES_TO_LENGTH$5 }, {
	  includes: function includes(el /* , fromIndex = 0 */) {
	    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
	addToUnscopables('includes');

	//
	//
	//
	//
	//
	var script$7 = {
	  name: 'RRow',
	  props: {
	    gutter: {
	      type: [Number, String]
	    },
	    align: {
	      type: String,
	      validator: function validator(value) {
	        return ['left', 'right', 'center'].includes(value);
	      }
	    }
	  },
	  computed: {
	    rowStyle: function rowStyle() {
	      var gutter = this.gutter;
	      return {
	        marginLeft: -gutter / 2 + 'px',
	        marginRight: -gutter / 2 + 'px'
	      };
	    },
	    rowClass: function rowClass() {
	      var align = this.align;
	      return [align && "align-".concat(align)];
	    }
	  },
	  mounted: function mounted() {
	    var _this = this;

	    this.$children.forEach(function (vm) {
	      vm.gutter = _this.gutter;
	    });
	  }
	};

	/* script */
 var __vue_script__$7 = script$7;
	/* template */
	var __vue_render__$7 = function() {
	  var _vm = this;
	  var _h = _vm.$createElement;
	  var _c = _vm._self._c || _h;
	  return _c(
	    "div",
	    { staticClass: "row", class: _vm.rowClass, style: _vm.rowStyle },
	    [_vm._t("default")],
	    2
	  )
	};
	var __vue_staticRenderFns__$7 = [];
	__vue_render__$7._withStripped = true;

	  /* style */
	  var __vue_inject_styles__$7 = undefined;
	  /* scoped */
	  var __vue_scope_id__$7 = "data-v-76484be0";
	  /* module identifier */
	  var __vue_module_identifier__$7 = undefined;
	  /* functional template */
	  var __vue_is_functional_template__$7 = false;
	  /* style inject */
	  
	  /* style inject SSR */
	  
	  /* style inject shadow dom */
	  

	  
	  var __vue_component__$7 = /*#__PURE__*/normalizeComponent(
	    { render: __vue_render__$7, staticRenderFns: __vue_staticRenderFns__$7 },
	    __vue_inject_styles__$7,
	    __vue_script__$7,
	    __vue_scope_id__$7,
	    __vue_is_functional_template__$7,
	    __vue_module_identifier__$7,
	    false,
	    undefined,
	    undefined,
	    undefined
	  );

	__vue_component__$7.install = function (Vue) {
	  Vue.component(__vue_component__$7.name, __vue_component__$7);
	};

	//
	//
	//
	//
	//
	var script$8 = {
	  name: 'RContent'
	};

	/* script */
 var __vue_script__$8 = script$8;
	/* template */
	var __vue_render__$8 = function() {
	  var _vm = this;
	  var _h = _vm.$createElement;
	  var _c = _vm._self._c || _h;
	  return _c("div", { staticClass: "content" }, [_vm._t("default")], 2)
	};
	var __vue_staticRenderFns__$8 = [];
	__vue_render__$8._withStripped = true;

	  /* style */
	  var __vue_inject_styles__$8 = undefined;
	  /* scoped */
	  var __vue_scope_id__$8 = "data-v-69f2d5b0";
	  /* module identifier */
	  var __vue_module_identifier__$8 = undefined;
	  /* functional template */
	  var __vue_is_functional_template__$8 = false;
	  /* style inject */
	  
	  /* style inject SSR */
	  
	  /* style inject shadow dom */
	  

	  
	  var __vue_component__$8 = /*#__PURE__*/normalizeComponent(
	    { render: __vue_render__$8, staticRenderFns: __vue_staticRenderFns__$8 },
	    __vue_inject_styles__$8,
	    __vue_script__$8,
	    __vue_scope_id__$8,
	    __vue_is_functional_template__$8,
	    __vue_module_identifier__$8,
	    false,
	    undefined,
	    undefined,
	    undefined
	  );

	__vue_component__$8.install = function (Vue) {
	  Vue.component(__vue_component__$8.name, __vue_component__$8);
	};

	//
	//
	//
	//
	//
	var script$9 = {
	  name: 'RFooter'
	};

	/* script */
 var __vue_script__$9 = script$9;

	/* template */
	var __vue_render__$9 = function() {
	  var _vm = this;
	  var _h = _vm.$createElement;
	  var _c = _vm._self._c || _h;
	  return _c("div", { staticClass: "footer" }, [_vm._t("default")], 2)
	};
	var __vue_staticRenderFns__$9 = [];
	__vue_render__$9._withStripped = true;

	  /* style */
	  var __vue_inject_styles__$9 = undefined;
	  /* scoped */
	  var __vue_scope_id__$9 = undefined;
	  /* module identifier */
	  var __vue_module_identifier__$9 = undefined;
	  /* functional template */
	  var __vue_is_functional_template__$9 = false;
	  /* style inject */
	  
	  /* style inject SSR */
	  
	  /* style inject shadow dom */
	  

	  
	  var __vue_component__$9 = /*#__PURE__*/normalizeComponent(
	    { render: __vue_render__$9, staticRenderFns: __vue_staticRenderFns__$9 },
	    __vue_inject_styles__$9,
	    __vue_script__$9,
	    __vue_scope_id__$9,
	    __vue_is_functional_template__$9,
	    __vue_module_identifier__$9,
	    false,
	    undefined,
	    undefined,
	    undefined
	  );

	__vue_component__$9.install = function (Vue) {
	  Vue.component(__vue_component__$9.name, __vue_component__$9);
	};

	//
	//
	//
	//
	//
	var script$a = {
	  name: 'RHeader'
	};

	/* script */
 var __vue_script__$a = script$a;

	/* template */
	var __vue_render__$a = function() {
	  var _vm = this;
	  var _h = _vm.$createElement;
	  var _c = _vm._self._c || _h;
	  return _c("div", { staticClass: "header" }, [_vm._t("default")], 2)
	};
	var __vue_staticRenderFns__$a = [];
	__vue_render__$a._withStripped = true;

	  /* style */
	  var __vue_inject_styles__$a = undefined;
	  /* scoped */
	  var __vue_scope_id__$a = undefined;
	  /* module identifier */
	  var __vue_module_identifier__$a = undefined;
	  /* functional template */
	  var __vue_is_functional_template__$a = false;
	  /* style inject */
	  
	  /* style inject SSR */
	  
	  /* style inject shadow dom */
	  

	  
	  var __vue_component__$a = /*#__PURE__*/normalizeComponent(
	    { render: __vue_render__$a, staticRenderFns: __vue_staticRenderFns__$a },
	    __vue_inject_styles__$a,
	    __vue_script__$a,
	    __vue_scope_id__$a,
	    __vue_is_functional_template__$a,
	    __vue_module_identifier__$a,
	    false,
	    undefined,
	    undefined,
	    undefined
	  );

	__vue_component__$a.install = function (Vue) {
	  Vue.component(__vue_component__$a.name, __vue_component__$a);
	};

	//
	//
	//
	//
	//
	var script$b = {
	  name: 'RLayout',
	  data: function data() {
	    return {
	      layoutClass: {
	        hasSider: false
	      }
	    };
	  },
	  mounted: function mounted() {
	    var _this = this;

	    this.$children.forEach(function (vm) {
	      if (vm.$options.name === 'RSider') {
	        _this.layoutClass.hasSider = true;
	      }
	    });
	  }
	};

	/* script */
 var __vue_script__$b = script$b;
	/* template */
	var __vue_render__$b = function() {
	  var _vm = this;
	  var _h = _vm.$createElement;
	  var _c = _vm._self._c || _h;
	  return _c(
	    "div",
	    { staticClass: "layout", class: _vm.layoutClass },
	    [_vm._t("default")],
	    2
	  )
	};
	var __vue_staticRenderFns__$b = [];
	__vue_render__$b._withStripped = true;

	  /* style */
	  var __vue_inject_styles__$b = undefined;
	  /* scoped */
	  var __vue_scope_id__$b = "data-v-113058a0";
	  /* module identifier */
	  var __vue_module_identifier__$b = undefined;
	  /* functional template */
	  var __vue_is_functional_template__$b = false;
	  /* style inject */
	  
	  /* style inject SSR */
	  
	  /* style inject shadow dom */
	  

	  
	  var __vue_component__$b = /*#__PURE__*/normalizeComponent(
	    { render: __vue_render__$b, staticRenderFns: __vue_staticRenderFns__$b },
	    __vue_inject_styles__$b,
	    __vue_script__$b,
	    __vue_scope_id__$b,
	    __vue_is_functional_template__$b,
	    __vue_module_identifier__$b,
	    false,
	    undefined,
	    undefined,
	    undefined
	  );

	__vue_component__$b.install = function (Vue) {
	  Vue.component(__vue_component__$b.name, __vue_component__$b);
	};

	//
	//
	//
	//
	//
	//
	//
	//
	var script$c = {
	  name: 'RSider',
	  data: function data() {
	    return {
	      visible: true
	    };
	  },
	  methods: {}
	};

	/* script */
 var __vue_script__$c = script$c;
	/* template */
	var __vue_render__$c = function() {
	  var _vm = this;
	  var _h = _vm.$createElement;
	  var _c = _vm._self._c || _h;
	  return _c("transition", { attrs: { name: "slide" } }, [
	    _vm.visible
	      ? _c(
	          "div",
	          { staticClass: "sider" },
	          [
	            _vm._t("default"),
	            _vm._v(" "),
	            _c(
	              "button",
	              {
	                on: {
	                  click: function($event) {
	                    _vm.visible = false;
	                  }
	                }
	              },
	              [_vm._v("close")]
	            )
	          ],
	          2
	        )
	      : _vm._e()
	  ])
	};
	var __vue_staticRenderFns__$c = [];
	__vue_render__$c._withStripped = true;

	  /* style */
	  var __vue_inject_styles__$c = undefined;
	  /* scoped */
	  var __vue_scope_id__$c = "data-v-4b9f9671";
	  /* module identifier */
	  var __vue_module_identifier__$c = undefined;
	  /* functional template */
	  var __vue_is_functional_template__$c = false;
	  /* style inject */
	  
	  /* style inject SSR */
	  
	  /* style inject shadow dom */
	  

	  
	  var __vue_component__$c = /*#__PURE__*/normalizeComponent(
	    { render: __vue_render__$c, staticRenderFns: __vue_staticRenderFns__$c },
	    __vue_inject_styles__$c,
	    __vue_script__$c,
	    __vue_scope_id__$c,
	    __vue_is_functional_template__$c,
	    __vue_module_identifier__$c,
	    false,
	    undefined,
	    undefined,
	    undefined
	  );

	__vue_component__$c.install = function (Vue) {
	  Vue.component(__vue_component__$c.name, __vue_component__$c);
	};

	//
	//
	//
	//
	//
	//
	var script$d = {
	  name: 'RNav',
	  provide: function provide() {
	    return {
	      root: this,
	      vertical: this.vertical
	    };
	  },
	  props: {
	    selected: {
	      type: String
	    },
	    vertical: {
	      type: Boolean,
	      default: false
	    }
	  },
	  data: function data() {
	    return {
	      items: [],
	      namePath: []
	    };
	  },
	  mounted: function mounted() {
	    this.updateChildren();
	    this.listenToChildren();
	  },
	  updated: function updated() {
	    this.updateChildren();
	  },
	  methods: {
	    addItem: function addItem(vm) {
	      this.items.push(vm);
	    },
	    updateChildren: function updateChildren() {
	      var _this = this;

	      this.items.forEach(function (vm) {
	        if (_this.selected === vm.name) {
	          vm.selected = true;
	        } else {
	          vm.selected = false;
	        }
	      });
	    },
	    listenToChildren: function listenToChildren() {
	      var _this2 = this;

	      this.items.forEach(function (vm) {
	        vm.$on('update:selected', function (name) {
	          _this2.$emit('update:selected', name);
	        });
	      });
	    }
	  }
	};

	/* script */
 var __vue_script__$d = script$d;
	/* template */
	var __vue_render__$d = function() {
	  var _vm = this;
	  var _h = _vm.$createElement;
	  var _c = _vm._self._c || _h;
	  return _c(
	    "div",
	    { staticClass: "r-nav", class: { vertical: _vm.vertical } },
	    [_vm._t("default")],
	    2
	  )
	};
	var __vue_staticRenderFns__$d = [];
	__vue_render__$d._withStripped = true;

	  /* style */
	  var __vue_inject_styles__$d = undefined;
	  /* scoped */
	  var __vue_scope_id__$d = "data-v-0c384658";
	  /* module identifier */
	  var __vue_module_identifier__$d = undefined;
	  /* functional template */
	  var __vue_is_functional_template__$d = false;
	  /* style inject */
	  
	  /* style inject SSR */
	  
	  /* style inject shadow dom */
	  

	  
	  var __vue_component__$d = /*#__PURE__*/normalizeComponent(
	    { render: __vue_render__$d, staticRenderFns: __vue_staticRenderFns__$d },
	    __vue_inject_styles__$d,
	    __vue_script__$d,
	    __vue_scope_id__$d,
	    __vue_is_functional_template__$d,
	    __vue_module_identifier__$d,
	    false,
	    undefined,
	    undefined,
	    undefined
	  );

	__vue_component__$d.install = function (Vue) {
	  Vue.component(__vue_component__$d.name, __vue_component__$d);
	};

	//
	//
	//
	//
	//
	//
	//
	var script$e = {
	  name: 'RNavItem',
	  inject: ['root', 'vertical'],
	  props: {
	    name: {
	      type: String,
	      required: true
	    }
	  },
	  data: function data() {
	    return {
	      selected: false
	    };
	  },
	  created: function created() {
	    this.root.addItem(this);
	  },
	  methods: {
	    onClick: function onClick() {
	      this.root.namePath = [];
	      this.$parent.updateNamePath && this.$parent.updateNamePath();
	      this.$emit('update:selected', this.name);
	    }
	  }
	};

	/* script */
 var __vue_script__$e = script$e;
	/* template */
	var __vue_render__$e = function() {
	  var _vm = this;
	  var _h = _vm.$createElement;
	  var _c = _vm._self._c || _h;
	  return _c(
	    "div",
	    {
	      staticClass: "r-nav-item",
	      class: { selected: _vm.selected, vertical: _vm.vertical },
	      attrs: { "data-name": _vm.name },
	      on: { click: _vm.onClick }
	    },
	    [_vm._t("default")],
	    2
	  )
	};
	var __vue_staticRenderFns__$e = [];
	__vue_render__$e._withStripped = true;

	  /* style */
	  var __vue_inject_styles__$e = undefined;
	  /* scoped */
	  var __vue_scope_id__$e = "data-v-87a7beea";
	  /* module identifier */
	  var __vue_module_identifier__$e = undefined;
	  /* functional template */
	  var __vue_is_functional_template__$e = false;
	  /* style inject */
	  
	  /* style inject SSR */
	  
	  /* style inject shadow dom */
	  

	  
	  var __vue_component__$e = /*#__PURE__*/normalizeComponent(
	    { render: __vue_render__$e, staticRenderFns: __vue_staticRenderFns__$e },
	    __vue_inject_styles__$e,
	    __vue_script__$e,
	    __vue_scope_id__$e,
	    __vue_is_functional_template__$e,
	    __vue_module_identifier__$e,
	    false,
	    undefined,
	    undefined,
	    undefined
	  );

	__vue_component__$e.install = function (Vue) {
	  Vue.component(__vue_component__$e.name, __vue_component__$e);
	};

	var script$f = {
	  components: {
	    RIcon: __vue_component__
	  },
	  directives: {
	    ClickOutside: ClickOutside
	  },
	  name: 'RSubNav',
	  inject: ['root', 'vertical'],
	  props: {
	    name: {
	      type: String,
	      required: true
	    }
	  },
	  data: function data() {
	    return {
	      open: false
	    };
	  },
	  computed: {
	    active: function active() {
	      return this.root.namePath.indexOf(this.name) >= 0;
	    }
	  },
	  methods: {
	    enter: function enter(el, done) {
	      var _el$getBoundingClient = el.getBoundingClientRect(),
	          height = _el$getBoundingClient.height;

	      el.style.height = 0;
	      el.getBoundingClientRect();
	      el.style.height = "".concat(height, "px");
	      el.addEventListener('transitionend', function () {
	        done();
	      });
	    },
	    afterEnter: function afterEnter(el) {
	      el.style.height = 'auto';
	    },
	    leave: function leave(el, done) {
	      var _el$getBoundingClient2 = el.getBoundingClientRect(),
	          height = _el$getBoundingClient2.height;

	      el.style.height = "".concat(height, "px");
	      el.getBoundingClientRect();
	      el.style.height = 0;
	      el.addEventListener('transitionend', function () {
	        done();
	      });
	    },
	    afterLeave: function afterLeave(el) {
	      el.style.height = 'auto';
	    },
	    onClick: function onClick() {
	      this.open = !this.open;
	    },
	    close: function close() {
	      this.open = false;
	    },
	    updateNamePath: function updateNamePath() {
	      this.root.namePath.unshift(this.name);

	      if (this.$parent.updateNamePath) {
	        this.$parent.updateNamePath();
	      }
	    }
	  }
	};

	/* script */
 var __vue_script__$f = script$f;
	/* template */
	var __vue_render__$f = function() {
	  var _vm = this;
	  var _h = _vm.$createElement;
	  var _c = _vm._self._c || _h;
	  return _c(
	    "div",
	    {
	      directives: [
	        {
	          name: "click-outside",
	          rawName: "v-click-outside",
	          value: _vm.close,
	          expression: "close"
	        }
	      ],
	      staticClass: "r-sub-nav",
	      class: { active: _vm.active, vertical: _vm.vertical }
	    },
	    [
	      _c(
	        "span",
	        { staticClass: "r-sub-nav-label", on: { click: _vm.onClick } },
	        [
	          _vm._t("title"),
	          _vm._v(" "),
	          _c(
	            "span",
	            {
	              staticClass: "r-sub-nav-icon",
	              class: { open: _vm.open, vertical: _vm.vertical }
	            },
	            [_c("r-icon", { attrs: { name: "right" } })],
	            1
	          )
	        ],
	        2
	      ),
	      _vm._v(" "),
	      _vm.vertical
	        ? [
	            _c(
	              "transition",
	              {
	                on: {
	                  enter: _vm.enter,
	                  leave: _vm.leave,
	                  "after-leave": _vm.afterLeave,
	                  "after-enter": _vm.afterEnter
	                }
	              },
	              [
	                _c(
	                  "div",
	                  {
	                    directives: [
	                      {
	                        name: "show",
	                        rawName: "v-show",
	                        value: _vm.open,
	                        expression: "open"
	                      }
	                    ],
	                    staticClass: "r-sub-nav-popover",
	                    class: { vertical: _vm.vertical }
	                  },
	                  [_vm._t("default")],
	                  2
	                )
	              ]
	            )
	          ]
	        : [
	            _c(
	              "div",
	              {
	                directives: [
	                  {
	                    name: "show",
	                    rawName: "v-show",
	                    value: _vm.open,
	                    expression: "open"
	                  }
	                ],
	                staticClass: "r-sub-nav-popover"
	              },
	              [_vm._t("default")],
	              2
	            )
	          ]
	    ],
	    2
	  )
	};
	var __vue_staticRenderFns__$f = [];
	__vue_render__$f._withStripped = true;

	  /* style */
	  var __vue_inject_styles__$f = undefined;
	  /* scoped */
	  var __vue_scope_id__$f = "data-v-3419445d";
	  /* module identifier */
	  var __vue_module_identifier__$f = undefined;
	  /* functional template */
	  var __vue_is_functional_template__$f = false;
	  /* style inject */
	  
	  /* style inject SSR */
	  
	  /* style inject shadow dom */
	  

	  
	  var __vue_component__$f = /*#__PURE__*/normalizeComponent(
	    { render: __vue_render__$f, staticRenderFns: __vue_staticRenderFns__$f },
	    __vue_inject_styles__$f,
	    __vue_script__$f,
	    __vue_scope_id__$f,
	    __vue_is_functional_template__$f,
	    __vue_module_identifier__$f,
	    false,
	    undefined,
	    undefined,
	    undefined
	  );

	__vue_component__$f.install = function (Vue) {
	  Vue.component(__vue_component__$f.name, __vue_component__$f);
	};

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	var script$g = {
	  name: 'RSlidesItem',
	  props: {
	    name: {
	      type: String,
	      required: true
	    }
	  },
	  data: function data() {
	    return {
	      selected: undefined,
	      reverse: false,
	      animationEnabled: false
	    };
	  },
	  updated: function updated() {
	    this.animationEnabled = true;
	  },
	  computed: {
	    visible: function visible() {
	      return this.selected === this.name;
	    }
	  }
	};

	/* script */
 var __vue_script__$g = script$g;
	/* template */
	var __vue_render__$g = function() {
	  var _vm = this;
	  var _h = _vm.$createElement;
	  var _c = _vm._self._c || _h;
	  return _c(
	    "div",
	    [
	      _vm.animationEnabled
	        ? [
	            _c("transition", { attrs: { name: "slide" } }, [
	              _vm.visible
	                ? _c(
	                    "div",
	                    {
	                      staticClass: "r-slides-item",
	                      class: { reverse: _vm.reverse }
	                    },
	                    [_vm._t("default")],
	                    2
	                  )
	                : _vm._e()
	            ])
	          ]
	        : [
	            _vm.visible
	              ? _c(
	                  "div",
	                  {
	                    staticClass: "r-slides-item",
	                    class: { reverse: _vm.reverse }
	                  },
	                  [_vm._t("default")],
	                  2
	                )
	              : _vm._e()
	          ]
	    ],
	    2
	  )
	};
	var __vue_staticRenderFns__$g = [];
	__vue_render__$g._withStripped = true;

	  /* style */
	  var __vue_inject_styles__$g = undefined;
	  /* scoped */
	  var __vue_scope_id__$g = "data-v-c40a073c";
	  /* module identifier */
	  var __vue_module_identifier__$g = undefined;
	  /* functional template */
	  var __vue_is_functional_template__$g = false;
	  /* style inject */
	  
	  /* style inject SSR */
	  
	  /* style inject shadow dom */
	  

	  
	  var __vue_component__$g = /*#__PURE__*/normalizeComponent(
	    { render: __vue_render__$g, staticRenderFns: __vue_staticRenderFns__$g },
	    __vue_inject_styles__$g,
	    __vue_script__$g,
	    __vue_scope_id__$g,
	    __vue_is_functional_template__$g,
	    __vue_module_identifier__$g,
	    false,
	    undefined,
	    undefined,
	    undefined
	  );

	__vue_component__$g.install = function (Vue) {
	  Vue.component(__vue_component__$g.name, __vue_component__$g);
	};

	var script$h = {
	  name: 'RSlides',
	  components: {
	    RIcon: __vue_component__
	  },
	  props: {
	    selected: {
	      type: String
	    },
	    autoPlay: {
	      type: Boolean,
	      default: true
	    },
	    autoPlayDelay: {
	      type: Number,
	      default: 3000
	    }
	  },
	  data: function data() {
	    return {
	      childrenLength: 0,
	      lastSelectedIndex: undefined,
	      timerId: undefined,
	      startTouch: undefined
	    };
	  },
	  mounted: function mounted() {
	    this.updateChildren();

	    if (this.autoPlay) {
	      this.playAutomatically();
	    }

	    this.childrenLength = this.items.length;
	  },
	  updated: function updated() {
	    this.updateChildren();
	  },
	  beforeDestroy: function beforeDestroy() {
	    this.pause();
	  },
	  computed: {
	    selectedIndex: function selectedIndex() {
	      var index = this.names.indexOf(this.selected);
	      return index === -1 ? 0 : index;
	    },
	    names: function names() {
	      return this.items.map(function (vm) {
	        return vm.name;
	      });
	    },
	    items: function items() {
	      return this.$children.filter(function (vm) {
	        return vm.$options.name === 'RSlidesItem';
	      });
	    }
	  },
	  methods: {
	    onMouseEnter: function onMouseEnter() {
	      this.pause();
	    },
	    onMouseLeave: function onMouseLeave() {
	      this.playAutomatically();
	    },
	    onTouchStart: function onTouchStart(e) {
	      this.pause();

	      if (e.touches.length > 1) {
	        return;
	      }

	      this.startTouch = e.touches[0];
	    },
	    onTouchEnd: function onTouchEnd(e) {
	      var _this = this;

	      var endTouch = e.changedTouches[0];
	      var _this$startTouch = this.startTouch,
	          x1 = _this$startTouch.clientX,
	          y1 = _this$startTouch.clientY;
	      var x2 = endTouch.clientX,
	          y2 = endTouch.clientY;
	      var distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
	      var deltaY = Math.abs(y2 - y1);
	      var rate = distance / deltaY;

	      if (rate > 2) {
	        if (x2 > x1) {
	          this.select(this.selectedIndex - 1);
	        } else {
	          this.select(this.selectedIndex + 1);
	        }
	      }

	      this.$nextTick(function () {
	        _this.playAutomatically();
	      });
	    },
	    onClickPrev: function onClickPrev() {
	      this.select(this.selectedIndex - 1);
	    },
	    onClickNext: function onClickNext() {
	      this.select(this.selectedIndex + 1);
	    },
	    playAutomatically: function playAutomatically() {
	      var _this2 = this;

	      if (this.timerId) {
	        return;
	      }

	      var run = function run() {
	        var index = _this2.names.indexOf(_this2.getSelected());

	        var newIndex = index + 1;

	        _this2.select(newIndex); // 告诉外界选中 newIndex


	        _this2.timerId = setTimeout(run, _this2.autoPlayDelay);
	      };

	      this.timerId = setTimeout(run, this.autoPlayDelay);
	    },
	    pause: function pause() {
	      window.clearTimeout(this.timerId);
	      this.timerId = undefined;
	    },
	    select: function select(newIndex) {
	      this.lastSelectedIndex = this.selectedIndex;

	      if (newIndex === -1) {
	        newIndex = this.names.length - 1;
	      }

	      if (newIndex === this.names.length) {
	        newIndex = 0;
	      }

	      this.$emit('update:selected', this.names[newIndex]);
	    },
	    getSelected: function getSelected() {
	      var first = this.items[0];
	      return this.selected || first.name;
	    },
	    updateChildren: function updateChildren() {
	      var _this3 = this;

	      var selected = this.getSelected();
	      this.items.forEach(function (vm) {
	        var reverse = !(_this3.selectedIndex > _this3.lastSelectedIndex);

	        if (_this3.timerId) {
	          if (_this3.lastSelectedIndex === _this3.items.length - 1 && _this3.selectedIndex === 0) {
	            reverse = false;
	          }

	          if (_this3.lastSelectedIndex === 0 && _this3.selectedIndex === _this3.items.length - 1) {
	            reverse = true;
	          }
	        }

	        vm.reverse = reverse;

	        _this3.$nextTick(function () {
	          vm.selected = selected;
	        });
	      });
	    }
	  }
	};

	/* script */
 var __vue_script__$h = script$h;
	/* template */
	var __vue_render__$h = function() {
	  var _vm = this;
	  var _h = _vm.$createElement;
	  var _c = _vm._self._c || _h;
	  return _c(
	    "div",
	    {
	      staticClass: "r-slides",
	      on: {
	        mouseenter: _vm.onMouseEnter,
	        mouseleave: _vm.onMouseLeave,
	        touchstart: _vm.onTouchStart,
	        touchend: _vm.onTouchEnd
	      }
	    },
	    [
	      _c("div", { ref: "window", staticClass: "r-slides-window" }, [
	        _c("div", { staticClass: "r-slides-wrapper" }, [_vm._t("default")], 2)
	      ]),
	      _vm._v(" "),
	      _c(
	        "div",
	        { staticClass: "r-slides-dots" },
	        [
	          _c(
	            "span",
	            {
	              attrs: { "data-action": "prev" },
	              on: { click: _vm.onClickPrev }
	            },
	            [_c("r-icon", { attrs: { name: "left" } })],
	            1
	          ),
	          _vm._v(" "),
	          _vm._l(_vm.childrenLength, function(n) {
	            return _c(
	              "span",
	              {
	                key: n,
	                class: { active: _vm.selectedIndex === n - 1 },
	                attrs: { "data-index": n - 1 },
	                on: {
	                  click: function($event) {
	                    return _vm.select(n - 1)
	                  }
	                }
	              },
	              [_vm._v("\n      " + _vm._s(n) + "\n    ")]
	            )
	          }),
	          _vm._v(" "),
	          _c(
	            "span",
	            {
	              attrs: { "data-action": "next" },
	              on: { click: _vm.onClickNext }
	            },
	            [_c("r-icon", { attrs: { name: "right" } })],
	            1
	          )
	        ],
	        2
	      )
	    ]
	  )
	};
	var __vue_staticRenderFns__$h = [];
	__vue_render__$h._withStripped = true;

	  /* style */
	  var __vue_inject_styles__$h = undefined;
	  /* scoped */
	  var __vue_scope_id__$h = "data-v-70e2b298";
	  /* module identifier */
	  var __vue_module_identifier__$h = undefined;
	  /* functional template */
	  var __vue_is_functional_template__$h = false;
	  /* style inject */
	  
	  /* style inject SSR */
	  
	  /* style inject shadow dom */
	  

	  
	  var __vue_component__$h = /*#__PURE__*/normalizeComponent(
	    { render: __vue_render__$h, staticRenderFns: __vue_staticRenderFns__$h },
	    __vue_inject_styles__$h,
	    __vue_script__$h,
	    __vue_scope_id__$h,
	    __vue_is_functional_template__$h,
	    __vue_module_identifier__$h,
	    false,
	    undefined,
	    undefined,
	    undefined
	  );

	__vue_component__$h.install = function (Vue) {
	  Vue.component(__vue_component__$h.name, __vue_component__$h);
	};

	var script$i = {
	  name: 'RTabs',
	  props: {
	    selected: {
	      type: String,
	      required: true
	    },
	    direction: {
	      type: String,
	      default: 'horizontal',
	      validator: function validator(value) {
	        return ['horizontal', 'vertical'].indexOf(value) >= 0;
	      }
	    }
	  },
	  data: function data() {
	    return {
	      eventBus: new Vue__default['default']()
	    };
	  },
	  provide: function provide() {
	    return {
	      eventBus: this.eventBus
	    };
	  },
	  mounted: function mounted() {
	    var _this = this;

	    if (this.$children.length === 0) {
	      console && console.warn && console.warn('tabs的子组件应该是tabs-head和tabs-nav，但你没有写子组件');
	    }

	    this.$children.forEach(function (vm) {
	      if (vm.$options.name === 'RTabsHead') {
	        vm.$children.forEach(function (childVm) {
	          if (childVm.$options.name === 'RTabsItem' && childVm.name === _this.selected) {
	            _this.eventBus.$emit('update:selected', _this.selected, childVm);
	          }
	        });
	      }
	    });
	  }
	};

	/* script */
 var __vue_script__$i = script$i;
	/* template */
	var __vue_render__$i = function() {
	  var _vm = this;
	  var _h = _vm.$createElement;
	  var _c = _vm._self._c || _h;
	  return _c("div", { staticClass: "tabs" }, [_vm._t("default")], 2)
	};
	var __vue_staticRenderFns__$i = [];
	__vue_render__$i._withStripped = true;

	  /* style */
	  var __vue_inject_styles__$i = undefined;
	  /* scoped */
	  var __vue_scope_id__$i = undefined;
	  /* module identifier */
	  var __vue_module_identifier__$i = undefined;
	  /* functional template */
	  var __vue_is_functional_template__$i = false;
	  /* style inject */
	  
	  /* style inject SSR */
	  
	  /* style inject shadow dom */
	  

	  
	  var __vue_component__$i = /*#__PURE__*/normalizeComponent(
	    { render: __vue_render__$i, staticRenderFns: __vue_staticRenderFns__$i },
	    __vue_inject_styles__$i,
	    __vue_script__$i,
	    __vue_scope_id__$i,
	    __vue_is_functional_template__$i,
	    __vue_module_identifier__$i,
	    false,
	    undefined,
	    undefined,
	    undefined
	  );

	__vue_component__$i.install = function (Vue) {
	  Vue.component(__vue_component__$i.name, __vue_component__$i);
	};

	//
	//
	//
	//
	//
	var script$j = {
	  name: 'RTabsBody',
	  inject: ['eventBus'],
	  created: function created() {}
	};

	/* script */
 var __vue_script__$j = script$j;
	/* template */
	var __vue_render__$j = function() {
	  var _vm = this;
	  var _h = _vm.$createElement;
	  var _c = _vm._self._c || _h;
	  return _c("div", { staticClass: "tabs-body" }, [_vm._t("default")], 2)
	};
	var __vue_staticRenderFns__$j = [];
	__vue_render__$j._withStripped = true;

	  /* style */
	  var __vue_inject_styles__$j = undefined;
	  /* scoped */
	  var __vue_scope_id__$j = undefined;
	  /* module identifier */
	  var __vue_module_identifier__$j = undefined;
	  /* functional template */
	  var __vue_is_functional_template__$j = false;
	  /* style inject */
	  
	  /* style inject SSR */
	  
	  /* style inject shadow dom */
	  

	  
	  var __vue_component__$j = /*#__PURE__*/normalizeComponent(
	    { render: __vue_render__$j, staticRenderFns: __vue_staticRenderFns__$j },
	    __vue_inject_styles__$j,
	    __vue_script__$j,
	    __vue_scope_id__$j,
	    __vue_is_functional_template__$j,
	    __vue_module_identifier__$j,
	    false,
	    undefined,
	    undefined,
	    undefined
	  );

	__vue_component__$j.install = function (Vue) {
	  Vue.component(__vue_component__$j.name, __vue_component__$j);
	};

	//
	//
	//
	//
	//
	//
	//
	//
	//
	var script$k = {
	  name: 'RTabsHead',
	  inject: ['eventBus'],
	  mounted: function mounted() {
	    var _this = this;

	    this.eventBus.$on('update:selected', function (item, vm) {
	      _this.updateLinePosition(vm);
	    });
	  },
	  methods: {
	    updateLinePosition: function updateLinePosition(selectedVm) {
	      var _selectedVm$$el$getBo = selectedVm.$el.getBoundingClientRect(),
	          width = _selectedVm$$el$getBo.width,
	          left = _selectedVm$$el$getBo.left;

	      var _this$$refs$head$getB = this.$refs.head.getBoundingClientRect(),
	          left2 = _this$$refs$head$getB.left;

	      this.$refs.line.style.width = "".concat(width, "px");
	      this.$refs.line.style.left = "".concat(left - left2, "px");
	    }
	  }
	};

	/* script */
 var __vue_script__$k = script$k;
	/* template */
	var __vue_render__$k = function() {
	  var _vm = this;
	  var _h = _vm.$createElement;
	  var _c = _vm._self._c || _h;
	  return _c(
	    "div",
	    { ref: "head", staticClass: "tabs-head" },
	    [
	      _vm._t("default"),
	      _vm._v(" "),
	      _c("div", { ref: "line", staticClass: "line" }),
	      _vm._v(" "),
	      _c("div", { staticClass: "actions-wrapper" }, [_vm._t("actions")], 2)
	    ],
	    2
	  )
	};
	var __vue_staticRenderFns__$k = [];
	__vue_render__$k._withStripped = true;

	  /* style */
	  var __vue_inject_styles__$k = undefined;
	  /* scoped */
	  var __vue_scope_id__$k = "data-v-a58b648a";
	  /* module identifier */
	  var __vue_module_identifier__$k = undefined;
	  /* functional template */
	  var __vue_is_functional_template__$k = false;
	  /* style inject */
	  
	  /* style inject SSR */
	  
	  /* style inject shadow dom */
	  

	  
	  var __vue_component__$k = /*#__PURE__*/normalizeComponent(
	    { render: __vue_render__$k, staticRenderFns: __vue_staticRenderFns__$k },
	    __vue_inject_styles__$k,
	    __vue_script__$k,
	    __vue_scope_id__$k,
	    __vue_is_functional_template__$k,
	    __vue_module_identifier__$k,
	    false,
	    undefined,
	    undefined,
	    undefined
	  );

	__vue_component__$k.install = function (Vue) {
	  Vue.component(__vue_component__$k.name, __vue_component__$k);
	};

	//
	//
	//
	//
	//
	var script$l = {
	  name: 'RTabsItem',
	  inject: ['eventBus'],
	  data: function data() {
	    return {
	      active: false
	    };
	  },
	  props: {
	    disabled: {
	      type: Boolean,
	      default: false
	    },
	    name: {
	      type: [String, Number],
	      required: true
	    }
	  },
	  computed: {
	    classes: function classes() {
	      return {
	        active: this.active,
	        disabled: this.disabled
	      };
	    }
	  },
	  created: function created() {
	    var _this = this;

	    if (this.eventBus) {
	      this.eventBus.$on('update:selected', function (name) {
	        _this.active = name === _this.name;
	      });
	    }
	  },
	  methods: {
	    onClick: function onClick() {
	      if (this.disabled) {
	        return;
	      }

	      this.eventBus && this.eventBus.$emit('update:selected', this.name, this);
	      this.$emit('click', this);
	    }
	  }
	};

	/* script */
 var __vue_script__$l = script$l;
	/* template */
	var __vue_render__$l = function() {
	  var _vm = this;
	  var _h = _vm.$createElement;
	  var _c = _vm._self._c || _h;
	  return _c(
	    "div",
	    {
	      staticClass: "tabs-item",
	      class: _vm.classes,
	      attrs: { "data-name": _vm.name },
	      on: { click: _vm.onClick }
	    },
	    [_vm._t("default")],
	    2
	  )
	};
	var __vue_staticRenderFns__$l = [];
	__vue_render__$l._withStripped = true;

	  /* style */
	  var __vue_inject_styles__$l = undefined;
	  /* scoped */
	  var __vue_scope_id__$l = "data-v-780f62d2";
	  /* module identifier */
	  var __vue_module_identifier__$l = undefined;
	  /* functional template */
	  var __vue_is_functional_template__$l = false;
	  /* style inject */
	  
	  /* style inject SSR */
	  
	  /* style inject shadow dom */
	  

	  
	  var __vue_component__$l = /*#__PURE__*/normalizeComponent(
	    { render: __vue_render__$l, staticRenderFns: __vue_staticRenderFns__$l },
	    __vue_inject_styles__$l,
	    __vue_script__$l,
	    __vue_scope_id__$l,
	    __vue_is_functional_template__$l,
	    __vue_module_identifier__$l,
	    false,
	    undefined,
	    undefined,
	    undefined
	  );

	__vue_component__$l.install = function (Vue) {
	  Vue.component(__vue_component__$l.name, __vue_component__$l);
	};

	//
	//
	//
	//
	//
	var script$m = {
	  name: 'RTabsPane',
	  inject: ['eventBus'],
	  data: function data() {
	    return {
	      active: false
	    };
	  },
	  props: {
	    name: {
	      type: [String, Number],
	      required: true
	    }
	  },
	  computed: {
	    classes: function classes() {
	      return {
	        active: this.active
	      };
	    }
	  },
	  created: function created() {
	    var _this = this;

	    this.eventBus.$on('update:selected', function (name) {
	      _this.active = name === _this.name;
	    });
	  }
	};

	/* script */
 var __vue_script__$m = script$m;
	/* template */
	var __vue_render__$m = function() {
	  var _vm = this;
	  var _h = _vm.$createElement;
	  var _c = _vm._self._c || _h;
	  return _vm.active
	    ? _c(
	        "div",
	        { staticClass: "tabs-pane", class: _vm.classes },
	        [_vm._t("default")],
	        2
	      )
	    : _vm._e()
	};
	var __vue_staticRenderFns__$m = [];
	__vue_render__$m._withStripped = true;

	  /* style */
	  var __vue_inject_styles__$m = undefined;
	  /* scoped */
	  var __vue_scope_id__$m = "data-v-4318bd2e";
	  /* module identifier */
	  var __vue_module_identifier__$m = undefined;
	  /* functional template */
	  var __vue_is_functional_template__$m = false;
	  /* style inject */
	  
	  /* style inject SSR */
	  
	  /* style inject shadow dom */
	  

	  
	  var __vue_component__$m = /*#__PURE__*/normalizeComponent(
	    { render: __vue_render__$m, staticRenderFns: __vue_staticRenderFns__$m },
	    __vue_inject_styles__$m,
	    __vue_script__$m,
	    __vue_scope_id__$m,
	    __vue_is_functional_template__$m,
	    __vue_module_identifier__$m,
	    false,
	    undefined,
	    undefined,
	    undefined
	  );

	__vue_component__$m.install = function (Vue) {
	  Vue.component(__vue_component__$m.name, __vue_component__$m);
	};

	//
	var script$n = {
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
 var __vue_script__$n = script$n;
	/* template */
	var __vue_render__$n = function() {
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
	var __vue_staticRenderFns__$n = [];
	__vue_render__$n._withStripped = true;

	  /* style */
	  var __vue_inject_styles__$n = undefined;
	  /* scoped */
	  var __vue_scope_id__$n = "data-v-355157fc";
	  /* module identifier */
	  var __vue_module_identifier__$n = undefined;
	  /* functional template */
	  var __vue_is_functional_template__$n = false;
	  /* style inject */
	  
	  /* style inject SSR */
	  
	  /* style inject shadow dom */
	  

	  
	  var __vue_component__$n = /*#__PURE__*/normalizeComponent(
	    { render: __vue_render__$n, staticRenderFns: __vue_staticRenderFns__$n },
	    __vue_inject_styles__$n,
	    __vue_script__$n,
	    __vue_scope_id__$n,
	    __vue_is_functional_template__$n,
	    __vue_module_identifier__$n,
	    false,
	    undefined,
	    undefined,
	    undefined
	  );

	__vue_component__$n.install = function (Vue) {
	  Vue.component(__vue_component__$n.name, __vue_component__$n);
	};

	// `Array.prototype.{ reduce, reduceRight }` methods implementation
	var createMethod$3 = function (IS_RIGHT) {
	  return function (that, callbackfn, argumentsLength, memo) {
	    aFunction$1(callbackfn);
	    var O = toObject(that);
	    var self = indexedObject(O);
	    var length = toLength(O.length);
	    var index = IS_RIGHT ? length - 1 : 0;
	    var i = IS_RIGHT ? -1 : 1;
	    if (argumentsLength < 2) while (true) {
	      if (index in self) {
	        memo = self[index];
	        index += i;
	        break;
	      }
	      index += i;
	      if (IS_RIGHT ? index < 0 : length <= index) {
	        throw TypeError('Reduce of empty array with no initial value');
	      }
	    }
	    for (;IS_RIGHT ? index >= 0 : length > index; index += i) if (index in self) {
	      memo = callbackfn(memo, self[index], index, O);
	    }
	    return memo;
	  };
	};

	var arrayReduce = {
	  // `Array.prototype.reduce` method
	  // https://tc39.es/ecma262/#sec-array.prototype.reduce
	  left: createMethod$3(false),
	  // `Array.prototype.reduceRight` method
	  // https://tc39.es/ecma262/#sec-array.prototype.reduceright
	  right: createMethod$3(true)
	};

	var engineIsNode = classofRaw(global_1.process) == 'process';

	var $reduce = arrayReduce.left;





	var STRICT_METHOD$3 = arrayMethodIsStrict('reduce');
	var USES_TO_LENGTH$6 = arrayMethodUsesToLength('reduce', { 1: 0 });
	// Chrome 80-82 has a critical bug
	// https://bugs.chromium.org/p/chromium/issues/detail?id=1049982
	var CHROME_BUG = !engineIsNode && engineV8Version > 79 && engineV8Version < 83;

	// `Array.prototype.reduce` method
	// https://tc39.es/ecma262/#sec-array.prototype.reduce
	_export({ target: 'Array', proto: true, forced: !STRICT_METHOD$3 || !USES_TO_LENGTH$6 || CHROME_BUG }, {
	  reduce: function reduce(callbackfn /* , initialValue */) {
	    return $reduce(this, callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	var FAILS_ON_PRIMITIVES = fails(function () { objectKeys(1); });

	// `Object.keys` method
	// https://tc39.es/ecma262/#sec-object.keys
	_export({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {
	  keys: function keys(it) {
	    return objectKeys(toObject(it));
	  }
	});

	var script$o = {
	  name: 'RPager',
	  components: {
	    RIcon: __vue_component__
	  },
	  props: {
	    totalPage: {
	      type: Number,
	      required: true
	    },
	    currentPage: {
	      type: Number,
	      required: true
	    },
	    hideIfOnePage: {
	      type: Boolean,
	      default: true
	    }
	  },
	  computed: {
	    pages: function pages() {
	      var _this = this;

	      // 依赖了 totalPage 和 currentPage
	      return unique([1, this.totalPage, this.currentPage, this.currentPage - 1, this.currentPage - 2, this.currentPage + 1, this.currentPage + 2].filter(function (n) {
	        return n >= 1 && n <= _this.totalPage;
	      }).sort(function (a, b) {
	        return a - b;
	      })).reduce(function (prev, current, index, array) {
	        prev.push(current);
	        array[index + 1] !== undefined && array[index + 1] - array[index] > 1 && prev.push('...');
	        return prev;
	      }, []);
	    }
	  },
	  methods: {
	    onClickPage: function onClickPage(n) {
	      if (n >= 1 && n <= this.totalPage) {
	        this.$emit('update:currentPage', n);
	      }
	    }
	  }
	};

	function unique(array) {
	  // return [...new Set(array)]
	  // array = [1 1 2 3 4 5 20]
	  var object = {};
	  array.map(function (number) {
	    object[number] = true;
	  });
	  return Object.keys(object).map(function (s) {
	    return parseInt(s, 10);
	  });
	}

	/* script */
 var __vue_script__$o = script$o;
	/* template */
	var __vue_render__$o = function() {
	  var _vm = this;
	  var _h = _vm.$createElement;
	  var _c = _vm._self._c || _h;
	  return _c(
	    "div",
	    {
	      staticClass: "r-pager",
	      class: { hide: _vm.hideIfOnePage === true && _vm.totalPage <= 1 }
	    },
	    [
	      _c(
	        "span",
	        {
	          staticClass: "r-pager-nav prev",
	          class: { disabled: _vm.currentPage === 1 },
	          on: {
	            click: function($event) {
	              return _vm.onClickPage(_vm.currentPage - 1)
	            }
	          }
	        },
	        [_c("r-icon", { attrs: { name: "left" } })],
	        1
	      ),
	      _vm._v(" "),
	      _vm._l(_vm.pages, function(page, index) {
	        return [
	          page === _vm.currentPage
	            ? [
	                _c(
	                  "span",
	                  { key: index, staticClass: "r-pager-item current" },
	                  [_vm._v(_vm._s(page))]
	                )
	              ]
	            : page === "..."
	            ? [
	                _c("r-icon", {
	                  key: index,
	                  staticClass: "r-pager-separator",
	                  attrs: { name: "dot" }
	                })
	              ]
	            : [
	                _c(
	                  "span",
	                  {
	                    key: index,
	                    staticClass: "r-pager-item other",
	                    on: {
	                      click: function($event) {
	                        return _vm.onClickPage(page)
	                      }
	                    }
	                  },
	                  [_vm._v(_vm._s(page))]
	                )
	              ]
	        ]
	      }),
	      _vm._v(" "),
	      _c(
	        "span",
	        {
	          staticClass: "r-pager-nav next",
	          class: { disabled: _vm.currentPage === _vm.totalPage },
	          on: {
	            click: function($event) {
	              return _vm.onClickPage(_vm.currentPage + 1)
	            }
	          }
	        },
	        [_c("r-icon", { attrs: { name: "right" } })],
	        1
	      )
	    ],
	    2
	  )
	};
	var __vue_staticRenderFns__$o = [];
	__vue_render__$o._withStripped = true;

	  /* style */
	  var __vue_inject_styles__$o = undefined;
	  /* scoped */
	  var __vue_scope_id__$o = "data-v-157f4be1";
	  /* module identifier */
	  var __vue_module_identifier__$o = undefined;
	  /* functional template */
	  var __vue_is_functional_template__$o = false;
	  /* style inject */
	  
	  /* style inject SSR */
	  
	  /* style inject shadow dom */
	  

	  
	  var __vue_component__$o = /*#__PURE__*/normalizeComponent(
	    { render: __vue_render__$o, staticRenderFns: __vue_staticRenderFns__$o },
	    __vue_inject_styles__$o,
	    __vue_script__$o,
	    __vue_scope_id__$o,
	    __vue_is_functional_template__$o,
	    __vue_module_identifier__$o,
	    false,
	    undefined,
	    undefined,
	    undefined
	  );

	__vue_component__$o.install = function (Vue) {
	  Vue.component(__vue_component__$o.name, __vue_component__$o);
	};

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	var script$p = {
	  name: 'RPopover',
	  props: {
	    position: {
	      type: String,
	      default: 'top',
	      validator: function validator(value) {
	        return ['top', 'bottom', 'left', 'right'].indexOf(value) >= 0;
	      }
	    },
	    trigger: {
	      type: String,
	      default: 'click',
	      validator: function validator(value) {
	        return ['click', 'hover'].indexOf(value) >= 0;
	      }
	    }
	  },
	  data: function data() {
	    return {
	      visible: false
	    };
	  },
	  mounted: function mounted() {
	    this.addPopoverListeners();
	  },
	  beforeDestroy: function beforeDestroy() {
	    this.putBackContent();
	    this.removePopoverListeners();
	  },
	  computed: {
	    openEvent: function openEvent() {
	      if (this.trigger === 'click') {
	        return 'click';
	      } else {
	        return 'mouseenter';
	      }
	    },
	    closeEvent: function closeEvent() {
	      if (this.trigger === 'click') {
	        return 'click';
	      } else {
	        return 'mouseleave';
	      }
	    }
	  },
	  methods: {
	    addPopoverListeners: function addPopoverListeners() {
	      if (this.trigger === 'click') {
	        this.$refs.popover.addEventListener('click', this.onClick);
	      } else {
	        this.$refs.popover.addEventListener('mouseenter', this.open);
	        this.$refs.popover.addEventListener('mouseleave', this.close);
	      }
	    },
	    removePopoverListeners: function removePopoverListeners() {
	      if (this.trigger === 'click') {
	        this.$refs.popover.removeEventListener('click', this.onClick);
	      } else {
	        this.$refs.popover.removeEventListener('mouseenter', this.open);
	        this.$refs.popover.removeEventListener('mouseleave', this.close);
	      }
	    },
	    putBackContent: function putBackContent() {
	      var _this$$refs = this.$refs,
	          contentWrapper = _this$$refs.contentWrapper,
	          popover = _this$$refs.popover;

	      if (!contentWrapper) {
	        return;
	      }

	      popover.appendChild(contentWrapper);
	    },
	    positionContent: function positionContent() {
	      var _this$$refs2 = this.$refs,
	          contentWrapper = _this$$refs2.contentWrapper,
	          triggerWrapper = _this$$refs2.triggerWrapper;
	      document.body.appendChild(contentWrapper);

	      var _triggerWrapper$getBo = triggerWrapper.getBoundingClientRect(),
	          width = _triggerWrapper$getBo.width,
	          height = _triggerWrapper$getBo.height,
	          top = _triggerWrapper$getBo.top,
	          left = _triggerWrapper$getBo.left;

	      var _contentWrapper$getBo = contentWrapper.getBoundingClientRect(),
	          height2 = _contentWrapper$getBo.height;

	      var positions = {
	        top: {
	          top: top + window.scrollY,
	          left: left + window.scrollX
	        },
	        bottom: {
	          top: top + height + window.scrollY,
	          left: left + window.scrollX
	        },
	        left: {
	          top: top + window.scrollY + (height - height2) / 2,
	          left: left + window.scrollX
	        },
	        right: {
	          top: top + window.scrollY + (height - height2) / 2,
	          left: left + window.scrollX + width
	        }
	      };
	      contentWrapper.style.left = positions[this.position].left + 'px';
	      contentWrapper.style.top = positions[this.position].top + 'px';
	    },
	    onClickDocument: function onClickDocument(e) {
	      if (this.$refs.popover && (this.$refs.popover === e.target || this.$refs.popover.contains(e.target))) {
	        return;
	      }

	      if (this.$refs.contentWrapper && (this.$refs.contentWrapper === e.target || this.$refs.contentWrapper.contains(e.target))) {
	        return;
	      }

	      this.close();
	    },
	    open: function open() {
	      var _this = this;

	      this.visible = true;
	      this.$nextTick(function () {
	        _this.positionContent();

	        document.addEventListener('click', _this.onClickDocument);
	      });
	    },
	    close: function close() {
	      this.visible = false;
	      document.removeEventListener('click', this.onClickDocument);
	    },
	    onClick: function onClick(event) {
	      if (this.$refs.triggerWrapper.contains(event.target)) {
	        if (this.visible === true) {
	          this.close();
	        } else {
	          this.open();
	        }
	      }
	    }
	  }
	};

	/* script */
 var __vue_script__$p = script$p;
	/* template */
	var __vue_render__$p = function() {
	  var _obj;
	  var _vm = this;
	  var _h = _vm.$createElement;
	  var _c = _vm._self._c || _h;
	  return _c("div", { ref: "popover", staticClass: "popover" }, [
	    _vm.visible
	      ? _c(
	          "div",
	          {
	            ref: "contentWrapper",
	            staticClass: "content-wrapper",
	            class:
	              ((_obj = {}), (_obj["position-" + _vm.position] = true), _obj)
	          },
	          [_vm._t("content", null, { close: _vm.close })],
	          2
	        )
	      : _vm._e(),
	    _vm._v(" "),
	    _c(
	      "span",
	      { ref: "triggerWrapper", staticStyle: { display: "inline-block" } },
	      [_vm._t("default")],
	      2
	    )
	  ])
	};
	var __vue_staticRenderFns__$p = [];
	__vue_render__$p._withStripped = true;

	  /* style */
	  var __vue_inject_styles__$p = undefined;
	  /* scoped */
	  var __vue_scope_id__$p = "data-v-0c731118";
	  /* module identifier */
	  var __vue_module_identifier__$p = undefined;
	  /* functional template */
	  var __vue_is_functional_template__$p = false;
	  /* style inject */
	  
	  /* style inject SSR */
	  
	  /* style inject shadow dom */
	  

	  
	  var __vue_component__$p = /*#__PURE__*/normalizeComponent(
	    { render: __vue_render__$p, staticRenderFns: __vue_staticRenderFns__$p },
	    __vue_inject_styles__$p,
	    __vue_script__$p,
	    __vue_scope_id__$p,
	    __vue_is_functional_template__$p,
	    __vue_module_identifier__$p,
	    false,
	    undefined,
	    undefined,
	    undefined
	  );

	__vue_component__$p.install = function (Vue) {
	  Vue.component(__vue_component__$p.name, __vue_component__$p);
	};

	//
	//
	//
	//
	//
	//
	//
	//
	var script$q = {
	  name: 'RSticky',
	  props: {
	    distance: {
	      type: Number,
	      default: 0
	    }
	  },
	  data: function data() {
	    return {
	      sticky: false,
	      left: undefined,
	      width: undefined,
	      height: undefined,
	      top: undefined
	    };
	  },
	  mounted: function mounted() {
	    this.windowScrollHandler = this._windowScrollHandler.bind(this);
	    window.addEventListener('scroll', this.windowScrollHandler);
	  },
	  beforeDestroy: function beforeDestroy() {
	    window.removeEventListener('scroll', this.windowScrollHandler);
	  },
	  created: function created() {
	    this.timerId = null;
	  },
	  computed: {
	    classes: function classes() {
	      return {
	        sticky: this.sticky
	      };
	    }
	  },
	  methods: {
	    offsetTop: function offsetTop() {
	      var _this$$refs$wrapper$g = this.$refs.wrapper.getBoundingClientRect(),
	          top = _this$$refs$wrapper$g.top;

	      return {
	        top: top + window.scrollY
	      };
	    },
	    _windowScrollHandler: function _windowScrollHandler() {
	      var _this$offsetTop = this.offsetTop(),
	          top = _this$offsetTop.top;

	      if (window.scrollY > top - this.distance) {
	        var _this$$refs$wrapper$g2 = this.$refs.wrapper.getBoundingClientRect(),
	            height = _this$$refs$wrapper$g2.height,
	            left = _this$$refs$wrapper$g2.left,
	            width = _this$$refs$wrapper$g2.width;

	        this.height = height + 'px';
	        this.left = left + 'px';
	        this.width = width + 'px';
	        this.top = this.distance + 'px';
	        this.sticky = true;
	      } else {
	        this.height = undefined;
	        this.left = undefined;
	        this.width = undefined;
	        this.top = undefined;
	        this.sticky = false;
	      }
	    }
	  }
	};

	/* script */
 var __vue_script__$q = script$q;
	/* template */
	var __vue_render__$q = function() {
	  var _vm = this;
	  var _h = _vm.$createElement;
	  var _c = _vm._self._c || _h;
	  return _c(
	    "div",
	    {
	      ref: "wrapper",
	      staticClass: "r-sticky-wrapper",
	      style: { height: _vm.height }
	    },
	    [
	      _c(
	        "div",
	        {
	          staticClass: "r-sticky",
	          class: _vm.classes,
	          style: { left: _vm.left, width: _vm.width, top: _vm.top }
	        },
	        [_vm._t("default")],
	        2
	      )
	    ]
	  )
	};
	var __vue_staticRenderFns__$q = [];
	__vue_render__$q._withStripped = true;

	  /* style */
	  var __vue_inject_styles__$q = undefined;
	  /* scoped */
	  var __vue_scope_id__$q = "data-v-c22c5c7c";
	  /* module identifier */
	  var __vue_module_identifier__$q = undefined;
	  /* functional template */
	  var __vue_is_functional_template__$q = false;
	  /* style inject */
	  
	  /* style inject SSR */
	  
	  /* style inject shadow dom */
	  

	  
	  var __vue_component__$q = /*#__PURE__*/normalizeComponent(
	    { render: __vue_render__$q, staticRenderFns: __vue_staticRenderFns__$q },
	    __vue_inject_styles__$q,
	    __vue_script__$q,
	    __vue_scope_id__$q,
	    __vue_is_functional_template__$q,
	    __vue_module_identifier__$q,
	    false,
	    undefined,
	    undefined,
	    undefined
	  );

	__vue_component__$q.install = function (Vue) {
	  Vue.component(__vue_component__$q.name, __vue_component__$q);
	};

	var script$r = {
	  components: {
	    RIcon: __vue_component__,
	    vnodes: {
	      functional: true,
	      render: function render(h, context) {
	        return context.props.vnodes;
	      }
	    }
	  },
	  name: 'RTable',
	  data: function data() {
	    return {
	      expendedIds: [],
	      columns: []
	    };
	  },
	  props: {
	    height: {
	      type: Number
	    },
	    expendField: {
	      type: String
	    },
	    orderBy: {
	      type: Object,
	      default: function _default() {
	        return {};
	      }
	    },
	    loading: {
	      type: Boolean,
	      default: false
	    },
	    striped: {
	      type: Boolean,
	      default: true
	    },
	    selectedItems: {
	      type: Array,
	      default: function _default() {
	        return [];
	      }
	    },
	    compact: {
	      type: Boolean,
	      default: false
	    },
	    dataSource: {
	      type: Array,
	      required: true,
	      validator: function validator(array) {
	        return !(array.filter(function (item) {
	          return item.id === undefined;
	        }).length > 0);
	      }
	    },
	    numberVisible: {
	      type: Boolean,
	      default: false
	    },
	    bordered: {
	      type: Boolean,
	      default: false
	    },
	    checkable: {
	      type: Boolean,
	      default: false
	    }
	  },
	  mounted: function mounted() {
	    this.columns = this.$slots.default.map(function (node) {
	      var _node$componentOption = node.componentOptions.propsData,
	          text = _node$componentOption.text,
	          field = _node$componentOption.field,
	          width = _node$componentOption.width;
	      var render = node.data.scopedSlots && node.data.scopedSlots.default;
	      return {
	        text: text,
	        field: field,
	        width: width,
	        render: render
	      };
	    });
	    var table2 = this.$refs.table.cloneNode(false);
	    this.table2 = table2;
	    table2.classList.add('r-table-copy');
	    var tHead = this.$refs.table.children[0];

	    var _tHead$getBoundingCli = tHead.getBoundingClientRect(),
	        height = _tHead$getBoundingCli.height;

	    this.$refs.tableWrapper.style.marginTop = height + 'px';
	    this.$refs.tableWrapper.style.height = this.height - height + 'px';
	    table2.appendChild(tHead);
	    this.$refs.wrapper.appendChild(table2);

	    if (this.$scopedSlots.default) {
	      var div = this.$refs.actions[0];

	      var _div$getBoundingClien = div.getBoundingClientRect(),
	          width = _div$getBoundingClien.width;

	      var parent = div.parentNode;
	      var styles = getComputedStyle(parent);
	      var paddingRight = styles.getPropertyValue('padding-right');
	      var borderLeft = styles.getPropertyValue('border-left-width');
	      var borderRight = styles.getPropertyValue('border-right-width');
	      var width2 = width + parseInt(paddingRight) + parseInt(paddingRight) + parseInt(borderLeft) + parseInt(borderRight) + 'px';
	      this.$refs.actionsHeader.style.width = width2;
	      this.$refs.actions.map(function (div) {
	        div.parentNode.style.width = width2;
	      });
	    }
	  },
	  beforeDestroy: function beforeDestroy() {
	    this.table2.remove();
	  },
	  computed: {
	    areAllItemsSelected: function areAllItemsSelected() {
	      var a = this.dataSource.map(function (item) {
	        return item.id;
	      }).sort();
	      var b = this.selectedItems.map(function (item) {
	        return item.id;
	      }).sort();

	      if (a.length !== b.length) {
	        return false;
	      }

	      var equal = true;

	      for (var i = 0; i < a.length; i++) {
	        if (a[i] !== b[i]) {
	          equal = false;
	          break;
	        }
	      }

	      return equal;
	    },
	    expendedCellColSpan: function expendedCellColSpan() {
	      var result = 0;

	      if (this.checkable) {
	        result += 1;
	      }

	      if (this.expendField) {
	        result += 1;
	      }

	      return result;
	    }
	  },
	  watch: {
	    selectedItems: function selectedItems() {
	      if (this.selectedItems.length === this.dataSource.length) {
	        this.$refs.allChecked.indeterminate = false;
	      } else if (this.selectedItems.length === 0) {
	        this.$refs.allChecked.indeterminate = false;
	      } else {
	        this.$refs.allChecked.indeterminate = true;
	      }
	    }
	  },
	  methods: {
	    inExpendedIds: function inExpendedIds(id) {
	      return this.expendedIds.indexOf(id) >= 0;
	    },
	    expendItem: function expendItem(id) {
	      if (this.inExpendedIds(id)) {
	        this.expendedIds.splice(this.expendedIds.indexOf(id), 1);
	      } else {
	        this.expendedIds.push(id);
	      }
	    },
	    changeOrderBy: function changeOrderBy(key) {
	      var copy = JSON.parse(JSON.stringify(this.orderBy));
	      var oldValue = copy[key];

	      if (oldValue === 'asc') {
	        copy[key] = 'desc';
	      } else if (oldValue === 'desc') {
	        copy[key] = true;
	      } else {
	        copy[key] = 'asc';
	      }

	      this.$emit('update:orderBy', copy);
	    },
	    inSelectedItems: function inSelectedItems(item) {
	      return this.selectedItems.filter(function (i) {
	        return i.id === item.id;
	      }).length > 0;
	    },
	    onChangeItem: function onChangeItem(item, index, e) {
	      var selected = e.target.checked;
	      var copy = JSON.parse(JSON.stringify(this.selectedItems));

	      if (selected) {
	        copy.push(item);
	      } else {
	        copy = copy.filter(function (i) {
	          return i.id !== item.id;
	        });
	      }

	      this.$emit('update:selectedItems', copy);
	    },
	    onChangeAllItems: function onChangeAllItems(e) {
	      var selected = e.target.checked;
	      this.$emit('update:selectedItems', selected ? this.dataSource : []);
	    }
	  }
	};

	/* script */
 var __vue_script__$r = script$r;
	/* template */
	var __vue_render__$r = function() {
	  var _vm = this;
	  var _h = _vm.$createElement;
	  var _c = _vm._self._c || _h;
	  return _c("div", { ref: "wrapper", staticClass: "r-table-wrapper" }, [
	    _c(
	      "div",
	      { ref: "tableWrapper", style: { height: _vm.height, overflow: "auto" } },
	      [
	        _c(
	          "table",
	          {
	            ref: "table",
	            staticClass: "r-table",
	            class: {
	              bordered: _vm.bordered,
	              compact: _vm.compact,
	              striped: _vm.striped
	            }
	          },
	          [
	            _c("thead", [
	              _c(
	                "tr",
	                [
	                  _vm.expendField
	                    ? _c("th", {
	                        staticClass: "r-table-center",
	                        style: { width: "50px" }
	                      })
	                    : _vm._e(),
	                  _vm._v(" "),
	                  _vm.checkable
	                    ? _c(
	                        "th",
	                        {
	                          staticClass: "r-table-center",
	                          style: { width: "50px" }
	                        },
	                        [
	                          _c("input", {
	                            ref: "allChecked",
	                            attrs: { type: "checkbox" },
	                            domProps: { checked: _vm.areAllItemsSelected },
	                            on: { change: _vm.onChangeAllItems }
	                          })
	                        ]
	                      )
	                    : _vm._e(),
	                  _vm._v(" "),
	                  _vm.numberVisible
	                    ? _c("th", { style: { width: "50px" } }, [_vm._v("#")])
	                    : _vm._e(),
	                  _vm._v(" "),
	                  _vm._l(_vm.columns, function(column) {
	                    return _c(
	                      "th",
	                      {
	                        key: column.field,
	                        style: { width: column.width + "px" }
	                      },
	                      [
	                        _c("div", { staticClass: "r-table-header" }, [
	                          _vm._v(
	                            "\n            " +
	                              _vm._s(column.text) +
	                              "\n            "
	                          ),
	                          column.field in _vm.orderBy
	                            ? _c(
	                                "span",
	                                {
	                                  staticClass: "r-table-sorter",
	                                  on: {
	                                    click: function($event) {
	                                      return _vm.changeOrderBy(column.field)
	                                    }
	                                  }
	                                },
	                                [
	                                  _c("r-icon", {
	                                    class: {
	                                      active:
	                                        _vm.orderBy[column.field] === "asc"
	                                    },
	                                    attrs: { name: "asc" }
	                                  }),
	                                  _vm._v(" "),
	                                  _c("r-icon", {
	                                    class: {
	                                      active:
	                                        _vm.orderBy[column.field] === "desc"
	                                    },
	                                    attrs: { name: "desc" }
	                                  })
	                                ],
	                                1
	                              )
	                            : _vm._e()
	                        ])
	                      ]
	                    )
	                  }),
	                  _vm._v(" "),
	                  _vm.$scopedSlots.default
	                    ? _c("th", { ref: "actionsHeader" })
	                    : _vm._e()
	                ],
	                2
	              )
	            ]),
	            _vm._v(" "),
	            _c(
	              "tbody",
	              [
	                _vm._l(_vm.dataSource, function(item, index) {
	                  return [
	                    _c(
	                      "tr",
	                      { key: item.id },
	                      [
	                        _vm.expendField
	                          ? _c(
	                              "td",
	                              {
	                                staticClass: "r-table-center",
	                                style: { width: "50px" }
	                              },
	                              [
	                                _c("r-icon", {
	                                  staticClass: "r-table-expendIcon",
	                                  attrs: { name: "right" },
	                                  on: {
	                                    click: function($event) {
	                                      return _vm.expendItem(item.id)
	                                    }
	                                  }
	                                })
	                              ],
	                              1
	                            )
	                          : _vm._e(),
	                        _vm._v(" "),
	                        _vm.checkable
	                          ? _c(
	                              "td",
	                              {
	                                staticClass: "r-table-center",
	                                style: { width: "50px" }
	                              },
	                              [
	                                _c("input", {
	                                  attrs: { type: "checkbox" },
	                                  domProps: {
	                                    checked: _vm.inSelectedItems(item)
	                                  },
	                                  on: {
	                                    change: function($event) {
	                                      return _vm.onChangeItem(
	                                        item,
	                                        index,
	                                        $event
	                                      )
	                                    }
	                                  }
	                                })
	                              ]
	                            )
	                          : _vm._e(),
	                        _vm._v(" "),
	                        _vm.numberVisible
	                          ? _c("td", { style: { width: "50px" } }, [
	                              _vm._v(_vm._s(index + 1))
	                            ])
	                          : _vm._e(),
	                        _vm._v(" "),
	                        _vm._l(_vm.columns, function(column) {
	                          return [
	                            _c(
	                              "td",
	                              {
	                                key: column.field,
	                                style: { width: column.width + "px" }
	                              },
	                              [
	                                column.render
	                                  ? [
	                                      _c("vnodes", {
	                                        attrs: {
	                                          vnodes: column.render({
	                                            value: item[column.field]
	                                          })
	                                        }
	                                      })
	                                    ]
	                                  : [
	                                      _vm._v(
	                                        "\n                " +
	                                          _vm._s(item[column.field]) +
	                                          "\n              "
	                                      )
	                                    ]
	                              ],
	                              2
	                            )
	                          ]
	                        }),
	                        _vm._v(" "),
	                        _vm.$scopedSlots.default
	                          ? _c("td", [
	                              _c(
	                                "div",
	                                {
	                                  ref: "actions",
	                                  refInFor: true,
	                                  staticStyle: { display: "inline-block" }
	                                },
	                                [_vm._t("default", null, { item: item })],
	                                2
	                              )
	                            ])
	                          : _vm._e()
	                      ],
	                      2
	                    ),
	                    _vm._v(" "),
	                    _vm.inExpendedIds(item.id)
	                      ? _c("tr", { key: item.id + "-expend" }, [
	                          _c(
	                            "td",
	                            {
	                              attrs: {
	                                colspan:
	                                  _vm.columns.length + _vm.expendedCellColSpan
	                              }
	                            },
	                            [
	                              _vm._v(
	                                "\n            " +
	                                  _vm._s(item[_vm.expendField] || "空") +
	                                  "\n          "
	                              )
	                            ]
	                          )
	                        ])
	                      : _vm._e()
	                  ]
	                })
	              ],
	              2
	            )
	          ]
	        )
	      ]
	    ),
	    _vm._v(" "),
	    _vm.loading
	      ? _c(
	          "div",
	          { staticClass: "r-table-loading" },
	          [_c("r-icon", { attrs: { name: "loading" } })],
	          1
	        )
	      : _vm._e()
	  ])
	};
	var __vue_staticRenderFns__$r = [];
	__vue_render__$r._withStripped = true;

	  /* style */
	  var __vue_inject_styles__$r = undefined;
	  /* scoped */
	  var __vue_scope_id__$r = "data-v-56a7a246";
	  /* module identifier */
	  var __vue_module_identifier__$r = undefined;
	  /* functional template */
	  var __vue_is_functional_template__$r = false;
	  /* style inject */
	  
	  /* style inject SSR */
	  
	  /* style inject shadow dom */
	  

	  
	  var __vue_component__$r = /*#__PURE__*/normalizeComponent(
	    { render: __vue_render__$r, staticRenderFns: __vue_staticRenderFns__$r },
	    __vue_inject_styles__$r,
	    __vue_script__$r,
	    __vue_scope_id__$r,
	    __vue_is_functional_template__$r,
	    __vue_module_identifier__$r,
	    false,
	    undefined,
	    undefined,
	    undefined
	  );

	__vue_component__$r.install = function (Vue) {
	  Vue.component(__vue_component__$r.name, __vue_component__$r);
	};

	function _defineProperty(obj, key, value) {
	  if (key in obj) {
	    Object.defineProperty(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }

	  return obj;
	}

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	// 构造组件的选项
	var script$s = {
	  name: 'RToast',
	  props: {
	    autoClose: {
	      type: [Boolean, Number],
	      default: 5,
	      validator: function validator(value) {
	        return value === false || typeof value === 'number';
	      }
	    },
	    closeButton: {
	      type: Object,
	      default: function _default() {
	        return {
	          text: '关闭',
	          callback: undefined
	        };
	      }
	    },
	    enableHtml: {
	      type: Boolean,
	      default: false
	    },
	    position: {
	      type: String,
	      default: 'top',
	      validator: function validator(value) {
	        return ['top', 'bottom', 'middle'].indexOf(value) >= 0;
	      }
	    }
	  },
	  mounted: function mounted() {
	    this.updateStyles();
	    this.execAutoClose();
	  },
	  computed: {
	    toastClasses: function toastClasses() {
	      return _defineProperty({}, "position-".concat(this.position), true);
	    }
	  },
	  methods: {
	    updateStyles: function updateStyles() {
	      var _this = this;

	      this.$nextTick(function () {
	        _this.$refs.line.style.height = "".concat(_this.$refs.toast.getBoundingClientRect().height, "px");
	      });
	    },
	    execAutoClose: function execAutoClose() {
	      var _this2 = this;

	      if (this.autoClose) {
	        setTimeout(function () {
	          _this2.close();
	        }, this.autoClose * 1000);
	      }
	    },
	    close: function close() {
	      this.$el.remove();
	      this.$emit('close');
	      this.$destroy();
	    },
	    onClickClose: function onClickClose() {
	      this.close();

	      if (this.closeButton && typeof this.closeButton.callback === 'function') {
	        this.closeButton.callback(this); // this === toast实例
	      }
	    }
	  }
	};

	/* script */
 var __vue_script__$s = script$s;
	/* template */
	var __vue_render__$s = function() {
	  var _vm = this;
	  var _h = _vm.$createElement;
	  var _c = _vm._self._c || _h;
	  return _c("div", { staticClass: "r-wrapper", class: _vm.toastClasses }, [
	    _c("div", { ref: "toast", staticClass: "r-toast" }, [
	      _c(
	        "div",
	        { staticClass: "message" },
	        [
	          !_vm.enableHtml
	            ? _vm._t("default")
	            : _c("div", {
	                domProps: { innerHTML: _vm._s(_vm.$slots.default[0]) }
	              })
	        ],
	        2
	      ),
	      _vm._v(" "),
	      _c("div", { ref: "line", staticClass: "line" }),
	      _vm._v(" "),
	      _vm.closeButton
	        ? _c(
	            "span",
	            { staticClass: "close", on: { click: _vm.onClickClose } },
	            [_vm._v("\n      " + _vm._s(_vm.closeButton.text) + "\n    ")]
	          )
	        : _vm._e()
	    ])
	  ])
	};
	var __vue_staticRenderFns__$s = [];
	__vue_render__$s._withStripped = true;

	  /* style */
	  var __vue_inject_styles__$s = undefined;
	  /* scoped */
	  var __vue_scope_id__$s = "data-v-56c7c43b";
	  /* module identifier */
	  var __vue_module_identifier__$s = undefined;
	  /* functional template */
	  var __vue_is_functional_template__$s = false;
	  /* style inject */
	  
	  /* style inject SSR */
	  
	  /* style inject shadow dom */
	  

	  
	  var __vue_component__$s = /*#__PURE__*/normalizeComponent(
	    { render: __vue_render__$s, staticRenderFns: __vue_staticRenderFns__$s },
	    __vue_inject_styles__$s,
	    __vue_script__$s,
	    __vue_scope_id__$s,
	    __vue_is_functional_template__$s,
	    __vue_module_identifier__$s,
	    false,
	    undefined,
	    undefined,
	    undefined
	  );

	__vue_component__$s.install = function (Vue) {
	  Vue.component(__vue_component__$s.name, __vue_component__$s);
	};

	var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
	var MAX_SAFE_INTEGER$1 = 0x1FFFFFFFFFFFFF;
	var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';

	// We can't use this feature detection in V8 since it causes
	// deoptimization and serious performance degradation
	// https://github.com/zloirock/core-js/issues/679
	var IS_CONCAT_SPREADABLE_SUPPORT = engineV8Version >= 51 || !fails(function () {
	  var array = [];
	  array[IS_CONCAT_SPREADABLE] = false;
	  return array.concat()[0] !== array;
	});

	var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

	var isConcatSpreadable = function (O) {
	  if (!isObject(O)) return false;
	  var spreadable = O[IS_CONCAT_SPREADABLE];
	  return spreadable !== undefined ? !!spreadable : isArray(O);
	};

	var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

	// `Array.prototype.concat` method
	// https://tc39.es/ecma262/#sec-array.prototype.concat
	// with adding support of @@isConcatSpreadable and @@species
	_export({ target: 'Array', proto: true, forced: FORCED }, {
	  concat: function concat(arg) { // eslint-disable-line no-unused-vars
	    var O = toObject(this);
	    var A = arraySpeciesCreate(O, 0);
	    var n = 0;
	    var i, k, length, len, E;
	    for (i = -1, length = arguments.length; i < length; i++) {
	      E = i === -1 ? O : arguments[i];
	      if (isConcatSpreadable(E)) {
	        len = toLength(E.length);
	        if (n + len > MAX_SAFE_INTEGER$1) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
	        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
	      } else {
	        if (n >= MAX_SAFE_INTEGER$1) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
	        createProperty(A, n++, E);
	      }
	    }
	    A.length = n;
	    return A;
	  }
	});

	var iteratorClose = function (iterator) {
	  var returnMethod = iterator['return'];
	  if (returnMethod !== undefined) {
	    return anObject(returnMethod.call(iterator)).value;
	  }
	};

	// call something on iterator step with safe closing on error
	var callWithSafeIterationClosing = function (iterator, fn, value, ENTRIES) {
	  try {
	    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch (error) {
	    iteratorClose(iterator);
	    throw error;
	  }
	};

	var iterators = {};

	var ITERATOR = wellKnownSymbol('iterator');
	var ArrayPrototype$1 = Array.prototype;

	// check on default Array iterator
	var isArrayIteratorMethod = function (it) {
	  return it !== undefined && (iterators.Array === it || ArrayPrototype$1[ITERATOR] === it);
	};

	var TO_STRING_TAG = wellKnownSymbol('toStringTag');
	var test = {};

	test[TO_STRING_TAG] = 'z';

	var toStringTagSupport = String(test) === '[object z]';

	var TO_STRING_TAG$1 = wellKnownSymbol('toStringTag');
	// ES3 wrong here
	var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

	// fallback for IE11 Script Access Denied error
	var tryGet = function (it, key) {
	  try {
	    return it[key];
	  } catch (error) { /* empty */ }
	};

	// getting tag from ES6+ `Object.prototype.toString`
	var classof = toStringTagSupport ? classofRaw : function (it) {
	  var O, tag, result;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG$1)) == 'string' ? tag
	    // builtinTag case
	    : CORRECT_ARGUMENTS ? classofRaw(O)
	    // ES3 arguments fallback
	    : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
	};

	var ITERATOR$1 = wellKnownSymbol('iterator');

	var getIteratorMethod = function (it) {
	  if (it != undefined) return it[ITERATOR$1]
	    || it['@@iterator']
	    || iterators[classof(it)];
	};

	// `Array.from` method implementation
	// https://tc39.es/ecma262/#sec-array.from
	var arrayFrom = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
	  var O = toObject(arrayLike);
	  var C = typeof this == 'function' ? this : Array;
	  var argumentsLength = arguments.length;
	  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
	  var mapping = mapfn !== undefined;
	  var iteratorMethod = getIteratorMethod(O);
	  var index = 0;
	  var length, result, step, iterator, next, value;
	  if (mapping) mapfn = functionBindContext(mapfn, argumentsLength > 2 ? arguments[2] : undefined, 2);
	  // if the target is not iterable or it's an array with the default iterator - use a simple case
	  if (iteratorMethod != undefined && !(C == Array && isArrayIteratorMethod(iteratorMethod))) {
	    iterator = iteratorMethod.call(O);
	    next = iterator.next;
	    result = new C();
	    for (;!(step = next.call(iterator)).done; index++) {
	      value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
	      createProperty(result, index, value);
	    }
	  } else {
	    length = toLength(O.length);
	    result = new C(length);
	    for (;length > index; index++) {
	      value = mapping ? mapfn(O[index], index) : O[index];
	      createProperty(result, index, value);
	    }
	  }
	  result.length = index;
	  return result;
	};

	var ITERATOR$2 = wellKnownSymbol('iterator');
	var SAFE_CLOSING = false;

	try {
	  var called = 0;
	  var iteratorWithReturn = {
	    next: function () {
	      return { done: !!called++ };
	    },
	    'return': function () {
	      SAFE_CLOSING = true;
	    }
	  };
	  iteratorWithReturn[ITERATOR$2] = function () {
	    return this;
	  };
	  // eslint-disable-next-line no-throw-literal
	  Array.from(iteratorWithReturn, function () { throw 2; });
	} catch (error) { /* empty */ }

	var checkCorrectnessOfIteration = function (exec, SKIP_CLOSING) {
	  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
	  var ITERATION_SUPPORT = false;
	  try {
	    var object = {};
	    object[ITERATOR$2] = function () {
	      return {
	        next: function () {
	          return { done: ITERATION_SUPPORT = true };
	        }
	      };
	    };
	    exec(object);
	  } catch (error) { /* empty */ }
	  return ITERATION_SUPPORT;
	};

	var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function (iterable) {
	  Array.from(iterable);
	});

	// `Array.from` method
	// https://tc39.es/ecma262/#sec-array.from
	_export({ target: 'Array', stat: true, forced: INCORRECT_ITERATION }, {
	  from: arrayFrom
	});

	var min$3 = Math.min;
	var nativeLastIndexOf = [].lastIndexOf;
	var NEGATIVE_ZERO$1 = !!nativeLastIndexOf && 1 / [1].lastIndexOf(1, -0) < 0;
	var STRICT_METHOD$4 = arrayMethodIsStrict('lastIndexOf');
	// For preventing possible almost infinite loop in non-standard implementations, test the forward version of the method
	var USES_TO_LENGTH$7 = arrayMethodUsesToLength('indexOf', { ACCESSORS: true, 1: 0 });
	var FORCED$1 = NEGATIVE_ZERO$1 || !STRICT_METHOD$4 || !USES_TO_LENGTH$7;

	// `Array.prototype.lastIndexOf` method implementation
	// https://tc39.es/ecma262/#sec-array.prototype.lastindexof
	var arrayLastIndexOf = FORCED$1 ? function lastIndexOf(searchElement /* , fromIndex = @[*-1] */) {
	  // convert -0 to +0
	  if (NEGATIVE_ZERO$1) return nativeLastIndexOf.apply(this, arguments) || 0;
	  var O = toIndexedObject(this);
	  var length = toLength(O.length);
	  var index = length - 1;
	  if (arguments.length > 1) index = min$3(index, toInteger(arguments[1]));
	  if (index < 0) index = length + index;
	  for (;index >= 0; index--) if (index in O && O[index] === searchElement) return index || 0;
	  return -1;
	} : nativeLastIndexOf;

	// `Array.prototype.lastIndexOf` method
	// https://tc39.es/ecma262/#sec-array.prototype.lastindexof
	_export({ target: 'Array', proto: true, forced: arrayLastIndexOf !== [].lastIndexOf }, {
	  lastIndexOf: arrayLastIndexOf
	});

	// `String.prototype.{ codePointAt, at }` methods implementation
	var createMethod$4 = function (CONVERT_TO_STRING) {
	  return function ($this, pos) {
	    var S = String(requireObjectCoercible($this));
	    var position = toInteger(pos);
	    var size = S.length;
	    var first, second;
	    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
	    first = S.charCodeAt(position);
	    return first < 0xD800 || first > 0xDBFF || position + 1 === size
	      || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
	        ? CONVERT_TO_STRING ? S.charAt(position) : first
	        : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
	  };
	};

	var stringMultibyte = {
	  // `String.prototype.codePointAt` method
	  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
	  codeAt: createMethod$4(false),
	  // `String.prototype.at` method
	  // https://github.com/mathiasbynens/String.prototype.at
	  charAt: createMethod$4(true)
	};

	var correctPrototypeGetter = !fails(function () {
	  function F() { /* empty */ }
	  F.prototype.constructor = null;
	  return Object.getPrototypeOf(new F()) !== F.prototype;
	});

	var IE_PROTO$1 = sharedKey('IE_PROTO');
	var ObjectPrototype = Object.prototype;

	// `Object.getPrototypeOf` method
	// https://tc39.es/ecma262/#sec-object.getprototypeof
	var objectGetPrototypeOf = correctPrototypeGetter ? Object.getPrototypeOf : function (O) {
	  O = toObject(O);
	  if (has(O, IE_PROTO$1)) return O[IE_PROTO$1];
	  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectPrototype : null;
	};

	var ITERATOR$3 = wellKnownSymbol('iterator');
	var BUGGY_SAFARI_ITERATORS = false;

	var returnThis = function () { return this; };

	// `%IteratorPrototype%` object
	// https://tc39.es/ecma262/#sec-%iteratorprototype%-object
	var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

	if ([].keys) {
	  arrayIterator = [].keys();
	  // Safari 8 has buggy iterators w/o `next`
	  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
	  else {
	    PrototypeOfArrayIteratorPrototype = objectGetPrototypeOf(objectGetPrototypeOf(arrayIterator));
	    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
	  }
	}

	var NEW_ITERATOR_PROTOTYPE = IteratorPrototype == undefined || fails(function () {
	  var test = {};
	  // FF44- legacy iterators case
	  return IteratorPrototype[ITERATOR$3].call(test) !== test;
	});

	if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	if (!has(IteratorPrototype, ITERATOR$3)) {
	  createNonEnumerableProperty(IteratorPrototype, ITERATOR$3, returnThis);
	}

	var iteratorsCore = {
	  IteratorPrototype: IteratorPrototype,
	  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
	};

	var defineProperty$3 = objectDefineProperty.f;



	var TO_STRING_TAG$2 = wellKnownSymbol('toStringTag');

	var setToStringTag = function (it, TAG, STATIC) {
	  if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG$2)) {
	    defineProperty$3(it, TO_STRING_TAG$2, { configurable: true, value: TAG });
	  }
	};

	var IteratorPrototype$1 = iteratorsCore.IteratorPrototype;





	var returnThis$1 = function () { return this; };

	var createIteratorConstructor = function (IteratorConstructor, NAME, next) {
	  var TO_STRING_TAG = NAME + ' Iterator';
	  IteratorConstructor.prototype = objectCreate(IteratorPrototype$1, { next: createPropertyDescriptor(1, next) });
	  setToStringTag(IteratorConstructor, TO_STRING_TAG, false);
	  iterators[TO_STRING_TAG] = returnThis$1;
	  return IteratorConstructor;
	};

	var IteratorPrototype$2 = iteratorsCore.IteratorPrototype;
	var BUGGY_SAFARI_ITERATORS$1 = iteratorsCore.BUGGY_SAFARI_ITERATORS;
	var ITERATOR$4 = wellKnownSymbol('iterator');
	var KEYS = 'keys';
	var VALUES = 'values';
	var ENTRIES = 'entries';

	var returnThis$2 = function () { return this; };

	var defineIterator = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
	  createIteratorConstructor(IteratorConstructor, NAME, next);

	  var getIterationMethod = function (KIND) {
	    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
	    if (!BUGGY_SAFARI_ITERATORS$1 && KIND in IterablePrototype) return IterablePrototype[KIND];
	    switch (KIND) {
	      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
	      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
	      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
	    } return function () { return new IteratorConstructor(this); };
	  };

	  var TO_STRING_TAG = NAME + ' Iterator';
	  var INCORRECT_VALUES_NAME = false;
	  var IterablePrototype = Iterable.prototype;
	  var nativeIterator = IterablePrototype[ITERATOR$4]
	    || IterablePrototype['@@iterator']
	    || DEFAULT && IterablePrototype[DEFAULT];
	  var defaultIterator = !BUGGY_SAFARI_ITERATORS$1 && nativeIterator || getIterationMethod(DEFAULT);
	  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
	  var CurrentIteratorPrototype, methods, KEY;

	  // fix native
	  if (anyNativeIterator) {
	    CurrentIteratorPrototype = objectGetPrototypeOf(anyNativeIterator.call(new Iterable()));
	    if (IteratorPrototype$2 !== Object.prototype && CurrentIteratorPrototype.next) {
	      if (objectGetPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype$2) {
	        if (objectSetPrototypeOf) {
	          objectSetPrototypeOf(CurrentIteratorPrototype, IteratorPrototype$2);
	        } else if (typeof CurrentIteratorPrototype[ITERATOR$4] != 'function') {
	          createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR$4, returnThis$2);
	        }
	      }
	      // Set @@toStringTag to native iterators
	      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true);
	    }
	  }

	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
	    INCORRECT_VALUES_NAME = true;
	    defaultIterator = function values() { return nativeIterator.call(this); };
	  }

	  // define iterator
	  if (IterablePrototype[ITERATOR$4] !== defaultIterator) {
	    createNonEnumerableProperty(IterablePrototype, ITERATOR$4, defaultIterator);
	  }
	  iterators[NAME] = defaultIterator;

	  // export additional methods
	  if (DEFAULT) {
	    methods = {
	      values: getIterationMethod(VALUES),
	      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
	      entries: getIterationMethod(ENTRIES)
	    };
	    if (FORCED) for (KEY in methods) {
	      if (BUGGY_SAFARI_ITERATORS$1 || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
	        redefine(IterablePrototype, KEY, methods[KEY]);
	      }
	    } else _export({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS$1 || INCORRECT_VALUES_NAME }, methods);
	  }

	  return methods;
	};

	var charAt = stringMultibyte.charAt;



	var STRING_ITERATOR = 'String Iterator';
	var setInternalState = internalState.set;
	var getInternalState = internalState.getterFor(STRING_ITERATOR);

	// `String.prototype[@@iterator]` method
	// https://tc39.es/ecma262/#sec-string.prototype-@@iterator
	defineIterator(String, 'String', function (iterated) {
	  setInternalState(this, {
	    type: STRING_ITERATOR,
	    string: String(iterated),
	    index: 0
	  });
	// `%StringIteratorPrototype%.next` method
	// https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next
	}, function next() {
	  var state = getInternalState(this);
	  var string = state.string;
	  var index = state.index;
	  var point;
	  if (index >= string.length) return { value: undefined, done: true };
	  point = charAt(string, index);
	  state.index += point.length;
	  return { value: point, done: false };
	});

	function _arrayWithoutHoles(arr) {
	  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
	}

	function _iterableToArray(iter) {
	  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
	}

	function _nonIterableSpread() {
	  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	}

	function _toConsumableArray(arr) {
	  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
	}

	function core(method, url, options) {
	  var xhr = new XMLHttpRequest();
	  xhr.open(method, url);

	  xhr.onload = function () {
	    options.success && options.success(xhr.response);
	  };

	  xhr.onerror = function () {
	    options.fail && options.fail(xhr, xhr.status);
	  };

	  xhr.send(options.data);
	}

	var http = {
	  get: function get() {},
	  post: function post(url, options) {
	    return core('post', url, options);
	  },
	  put: function put() {},
	  delete: function _delete() {},
	  patch: function patch() {}
	};

	var script$t = {
	  name: 'RUploader',
	  components: {
	    RIcon: __vue_component__
	  },
	  props: {
	    name: {
	      type: String,
	      required: true
	    },
	    action: {
	      type: String,
	      required: true
	    },
	    method: {
	      type: String,
	      default: 'POST'
	    },
	    parseResponse: {
	      type: Function,
	      required: true
	    },
	    fileList: {
	      type: Array,
	      default: function _default() {
	        return [];
	      }
	    },
	    sizeLimit: {
	      type: Number
	    }
	  },
	  data: function data() {
	    return {
	      url: 'about:blank'
	    };
	  },
	  methods: {
	    onClickUpload: function onClickUpload() {
	      var _this = this;

	      console.log('oooooooooooooooo');
	      var input = this.createInput();
	      input.addEventListener('change', function (e) {
	        _this.uploadFiles(input.files); // 单文件


	        input.remove();
	      });
	      input.click();
	    },
	    onRemoveFile: function onRemoveFile(file) {
	      var answer = window.confirm('你确定要删除这玩意吗');

	      if (answer) {
	        var copy = _toConsumableArray(this.fileList);

	        var index = copy.indexOf(file);
	        copy.splice(index, 1);
	        this.$emit('update:fileList', copy);
	      }
	    },
	    beforeUploadFiles: function beforeUploadFiles(rawFiles, newNames) {
	      rawFiles = Array.from(rawFiles);

	      for (var i = 0; i < rawFiles.length; i++) {
	        var size = rawFiles[i].size;

	        if (size > this.sizeLimit) {
	          this.$emit('error', '文件大于2MB');
	          return false;
	        }
	      }

	      var x = rawFiles.map(function (rawFile, i) {
	        var type = rawFile.type,
	            size = rawFile.size;
	        return {
	          name: newNames[i],
	          type: type,
	          size: size,
	          status: 'uploading'
	        };
	      });
	      this.$emit('update:fileList', [].concat(_toConsumableArray(this.fileList), _toConsumableArray(x)));
	      return true;
	    },
	    afterUploadFiles: function afterUploadFiles(newName, url) {
	      var file = this.fileList.filter(function (f) {
	        return f.name === newName;
	      })[0];
	      var index = this.fileList.indexOf(file);
	      var fileCopy = JSON.parse(JSON.stringify(file));
	      fileCopy.url = url;
	      fileCopy.status = 'success';

	      var fileListCopy = _toConsumableArray(this.fileList);

	      fileListCopy.splice(index, 1, fileCopy);
	      this.$emit('update:fileList', fileListCopy);
	      this.$emit('uploaded');
	    },
	    uploadFiles: function uploadFiles(rawFiles) {
	      var _this2 = this;

	      var newNames = [];

	      for (var i = 0; i < rawFiles.length; i++) {
	        var rawFile = rawFiles[i];
	        var name = rawFile.name;
	        var newName = this.generateName(name);
	        newNames[i] = newName;
	      }

	      if (!this.beforeUploadFiles(rawFiles, newNames)) {
	        return;
	      }

	      var _loop = function _loop(_i) {
	        var rawFile = rawFiles[_i];
	        var newName = newNames[_i];
	        var formData = new FormData();
	        formData.append(_this2.name, rawFile);

	        _this2.doUploadFiles(formData, function (response) {
	          var url = _this2.parseResponse(response);

	          _this2.url = url;

	          _this2.afterUploadFiles(newName, url);
	        }, function (xhr) {
	          _this2.uploadError(xhr, newName);
	        });
	      };

	      for (var _i = 0; _i < rawFiles.length; _i++) {
	        _loop(_i);
	      }
	    },
	    uploadError: function uploadError(xhr, newName) {
	      var file = this.fileList.filter(function (f) {
	        return f.name === newName;
	      })[0];
	      var index = this.fileList.indexOf(file);
	      var fileCopy = JSON.parse(JSON.stringify(file));
	      fileCopy.status = 'fail'; // fileCopy.failMessage = '尺寸过大'

	      var fileListCopy = _toConsumableArray(this.fileList);

	      fileListCopy.splice(index, 1, fileCopy);
	      this.$emit('update:fileList', fileListCopy);
	      var error = '';

	      if (xhr.status === 0) {
	        error = '网络无法连接';
	      }

	      this.$emit('error', error);
	    },
	    generateName: function generateName(name) {
	      while (this.fileList.filter(function (f) {
	        return f.name === name;
	      }).length > 0) {
	        var dotIndex = name.lastIndexOf('.');
	        var nameWithoutExtension = name.substring(0, dotIndex);
	        var extension = name.substring(dotIndex);
	        name = nameWithoutExtension + '(1)' + extension;
	      }

	      return name;
	    },
	    doUploadFiles: function doUploadFiles(formData, success, fail) {
	      http[this.method.toLowerCase()](this.action, {
	        success: success,
	        fail: fail,
	        data: formData
	      });
	    },
	    createInput: function createInput() {
	      this.$refs.temp.innerHTML = '';
	      var input = document.createElement('input');
	      input.accept = 'image/*';
	      input.type = 'file';
	      input.multiple = true;
	      this.$refs.temp.appendChild(input);
	      return input;
	    }
	  }
	};

	/* script */
 var __vue_script__$t = script$t;
	/* template */
	var __vue_render__$t = function() {
	  var _vm = this;
	  var _h = _vm.$createElement;
	  var _c = _vm._self._c || _h;
	  return _c("div", { staticClass: "r-uploader" }, [
	    _c("div", { on: { click: _vm.onClickUpload } }, [_vm._t("default")], 2),
	    _vm._v(" "),
	    _c(
	      "ol",
	      { staticClass: "r-uploader-fileList" },
	      _vm._l(_vm.fileList, function(file) {
	        var _obj;
	        return _c(
	          "li",
	          { key: file.name },
	          [
	            file.status === "uploading"
	              ? [
	                  _c("r-icon", {
	                    staticClass: "r-uploader-spin",
	                    attrs: { name: "loading" }
	                  })
	                ]
	              : file.type.indexOf("image") === 0
	              ? [
	                  _c("img", {
	                    staticClass: "r-uploader-image",
	                    attrs: { src: file.url, width: "32", height: "32", alt: "" }
	                  })
	                ]
	              : [_c("div", { staticClass: "r-uploader-defaultImage" })],
	            _vm._v(" "),
	            _c(
	              "span",
	              {
	                staticClass: "r-uploader-name",
	                class: ((_obj = {}), (_obj[file.status] = file.status), _obj)
	              },
	              [_vm._v(_vm._s(file.name))]
	            ),
	            _vm._v(" "),
	            _c(
	              "button",
	              {
	                staticClass: "r-uploader-remove",
	                on: {
	                  click: function($event) {
	                    return _vm.onRemoveFile(file)
	                  }
	                }
	              },
	              [_vm._v("x")]
	            )
	          ],
	          2
	        )
	      }),
	      0
	    ),
	    _vm._v(" "),
	    _c("div", {
	      ref: "temp",
	      staticStyle: { width: "0", height: "0", overflow: "hidden" }
	    })
	  ])
	};
	var __vue_staticRenderFns__$t = [];
	__vue_render__$t._withStripped = true;

	  /* style */
	  var __vue_inject_styles__$t = undefined;
	  /* scoped */
	  var __vue_scope_id__$t = "data-v-56e23410";
	  /* module identifier */
	  var __vue_module_identifier__$t = undefined;
	  /* functional template */
	  var __vue_is_functional_template__$t = false;
	  /* style inject */
	  
	  /* style inject SSR */
	  
	  /* style inject shadow dom */
	  

	  
	  var __vue_component__$t = /*#__PURE__*/normalizeComponent(
	    { render: __vue_render__$t, staticRenderFns: __vue_staticRenderFns__$t },
	    __vue_inject_styles__$t,
	    __vue_script__$t,
	    __vue_scope_id__$t,
	    __vue_is_functional_template__$t,
	    __vue_module_identifier__$t,
	    false,
	    undefined,
	    undefined,
	    undefined
	  );

	__vue_component__$t.install = function (Vue) {
	  Vue.component(__vue_component__$t.name, __vue_component__$t);
	};

	var components = [__vue_component__$1, __vue_component__$2, __vue_component__$4, __vue_component__$3, __vue_component__$5, __vue_component__$6, // Col,
	// Row,
	__vue_component__$8, __vue_component__$9, __vue_component__$a, __vue_component__$b, __vue_component__$c, __vue_component__$d, __vue_component__$e, __vue_component__$f, __vue_component__$g, __vue_component__$h, __vue_component__$i, __vue_component__$j, __vue_component__$k, __vue_component__$l, __vue_component__$m, __vue_component__, __vue_component__$n, __vue_component__$o, __vue_component__$p, __vue_component__$q, __vue_component__$r, __vue_component__$s, __vue_component__$t];

	var install = function install(Vue) {
	  if (install.installed) return;
	  components.forEach(function (component) {
	    Vue.component(component.name, component);
	  });
	};

	if (typeof window !== 'undefined' && window.Vue) {
	  install(window.Vue);
	}

	var index = {
	  install: install,
	  Button: __vue_component__$1,
	  ButtonGroup: __vue_component__$2,
	  Cascader: __vue_component__$4,
	  CascaderItems: __vue_component__$3,
	  CollapseItem: __vue_component__$5,
	  Collapse: __vue_component__$6,
	  // Col,
	  // Row,
	  Content: __vue_component__$8,
	  Footer: __vue_component__$9,
	  Header: __vue_component__$a,
	  Layout: __vue_component__$b,
	  Sider: __vue_component__$c,
	  Nav: __vue_component__$d,
	  NavItem: __vue_component__$e,
	  SubNav: __vue_component__$f,
	  SlidesItem: __vue_component__$g,
	  Slides: __vue_component__$h,
	  Tabs: __vue_component__$i,
	  TabsBody: __vue_component__$j,
	  TabsHead: __vue_component__$k,
	  TabsItem: __vue_component__$l,
	  TabsPane: __vue_component__$m,
	  Icon: __vue_component__,
	  Input: __vue_component__$n,
	  Pager: __vue_component__$o,
	  Popover: __vue_component__$p,
	  Sticky: __vue_component__$q,
	  Table: __vue_component__$r,
	  Toast: __vue_component__$s,
	  Uploader: __vue_component__$t
	};

	return index;

})));
