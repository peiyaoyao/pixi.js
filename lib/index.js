'use strict';

exports.__esModule = true;
exports.loader = exports.prepare = exports.mesh = exports.loaders = exports.interaction = exports.filters = exports.extras = exports.extract = exports.accessibility = undefined;

var _polyfill = require('./polyfill');

Object.keys(_polyfill).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _polyfill[key];
    }
  });
});

var _deprecation = require('./deprecation');

Object.keys(_deprecation).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _deprecation[key];
    }
  });
});

var _core = require('./core');

Object.keys(_core).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _core[key];
    }
  });
});

var _accessibility = require('./accessibility');

var accessibility = _interopRequireWildcard(_accessibility);

var _extract = require('./extract');

var extract = _interopRequireWildcard(_extract);

var _extras = require('./extras');

var extras = _interopRequireWildcard(_extras);

var _filters = require('./filters');

var filters = _interopRequireWildcard(_filters);

var _interaction = require('./interaction');

var interaction = _interopRequireWildcard(_interaction);

var _loaders = require('./loaders');

var loaders = _interopRequireWildcard(_loaders);

var _mesh = require('./mesh');

var mesh = _interopRequireWildcard(_mesh);

var _prepare = require('./prepare');

var prepare = _interopRequireWildcard(_prepare);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// import * as particles from './particles';
// import polyfills. Done as an export to make sure polyfills are imported first
_core.utils.mixins.performMixins();

/**
 * Alias for {@link PIXI.loaders.shared}.
 * @name loader
 * @memberof PIXI
 * @type {PIXI.loader.Loader}
 */


// handle mixins now, after all code has been added, including deprecation


// export libs


// export core
var loader = loaders.shared || null;

exports.accessibility = accessibility;
exports.extract = extract;
exports.extras = extras;
exports.filters = filters;
exports.interaction = interaction;
exports.loaders = loaders;
exports.mesh = mesh;
exports.prepare = prepare;
exports.loader = loader;

// Always export pixi globally.

global.PIXI = exports; // eslint-disable-line
//# sourceMappingURL=index.js.map