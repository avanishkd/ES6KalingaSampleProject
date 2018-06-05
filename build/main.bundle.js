/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Lead = function () {
    function Lead(MID, name, description) {
        _classCallCheck(this, Lead);

        this.MID = MID;
        this.name = name;
        this.description = description;
    }

    _createClass(Lead, [{
        key: "leadDetails",
        get: function get() {
            var MID = this.MID;
            var name = this.name;
            var description = this.description;
            return { MID: MID, name: name, description: description };
        }
    }]);

    return Lead;
}();

exports.default = Lead;

/***/ },
/* 1 */
/***/ function(module, exports) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Track = function () {
    function Track(name, description) {
        _classCallCheck(this, Track);

        this.name = name;
        this.description = description;
    }

    _createClass(Track, [{
        key: "trackDetails",
        get: function get() {

            var name = this.name;
            var description = this.description;
            return { name: name, description: description };
        }
    }]);

    return Track;
}();

exports.default = Track;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.leadsArr = undefined;

var _leads = __webpack_require__(0);

var _leads2 = _interopRequireDefault(_leads);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var url = "leads.json";
console.log("in getLeads from json");
console.log(url);

var leadsArr = exports.leadsArr = [];
fetch(url).then(function (response) {
  return response.json();
}).then(function (leads) {
  console.log(leads);
  var result = leads.map(function (e) {
    return Object.keys(e).map(function (k) {
      return e[k];
    });
  });
  result.forEach(function (lead) {
    leadsArr.push(new _leads2.default(lead[0], lead[1], lead[2]));
  });
  console.log(leadsArr[0]);

  var html = '';
  leads.forEach(function (lead) {
    html += "<tr><td>" + lead.mid + "</td><td>" + lead.name + "</td><td>" + lead.Description + "%</td></tr>";
  });
  //document.getElementById("leads").innerHTML = html;
}).catch(function (e) {
  return console.log(e);
});

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tracksArr = undefined;

var _tracks = __webpack_require__(1);

var _tracks2 = _interopRequireDefault(_tracks);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var url = "tracks.json";
console.log("in getTracks from json");
console.log(url);

var tracksArr = exports.tracksArr = [];
fetch(url).then(function (response) {
  return response.json();
}).then(function (tracks) {
  console.log(tracks);
  var result = tracks.map(function (e) {
    return Object.keys(e).map(function (k) {
      return e[k];
    });
  });
  result.forEach(function (track) {
    tracksArr.push(new _tracks2.default(track[0], track[1]));
  });
  console.log(tracksArr);

  var html = '';
  leads.forEach(function (track) {
    html += "<tr><td>" + track.name + "</td><td>" + track.description + "%</td></tr>";
  });
  //document.getElementById("leads").innerHTML = html;
}).catch(function (e) {
  return console.log(e);
});

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

var _getLeadsFromJSON = __webpack_require__(2);

var _leads = __webpack_require__(0);

var _leads2 = _interopRequireDefault(_leads);

var _getTracksFromJSON = __webpack_require__(3);

var _tracks = __webpack_require__(1);

var _tracks2 = _interopRequireDefault(_tracks);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.getElementById('leadsBtn').addEventListener('click', function () {

    var html = '';
    console.log(_getLeadsFromJSON.leadsArr);
    _getLeadsFromJSON.leadsArr.forEach(function (lead) {
        return html += '<tr><td>' + lead.MID + '</td><td>' + lead.name + '</td>><td>' + lead.description + '</td></tr>';
    });
    document.getElementById("displayDetails").innerHTML = html;
});
document.getElementById('tracksBtn').addEventListener('click', function () {

    var html = '';
    console.log(_getTracksFromJSON.tracksArr);
    _getTracksFromJSON.tracksArr.forEach(function (track) {
        return html += '<tr><td>' + track.name + '</td>><td>' + track.description + '</td></tr>';
    });
    document.getElementById("displayDetails").innerHTML = html;
});

/***/ }
/******/ ]);
//# sourceMappingURL=main.bundle.js.map