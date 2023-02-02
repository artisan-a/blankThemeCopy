/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/scripts/spin.js":
/*!**************************************!*\
  !*** ./resources/js/scripts/spin.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function (t, e) {
  "object" == ( false ? undefined : _typeof(exports)) ? module.exports = e() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function () {
  "use strict";

  function t(t, e) {
    var i,
        n = document.createElement(t || "div");

    for (i in e) {
      n[i] = e[i];
    }

    return n;
  }

  function e(t) {
    for (var e = 1, i = arguments.length; i > e; e++) {
      t.appendChild(arguments[e]);
    }

    return t;
  }

  function i(t, e, i, n) {
    var r = ["opacity", e, ~~(100 * t), i, n].join("-"),
        o = .01 + 100 * (i / n),
        a = Math.max(1 - (1 - t) / e * (100 - o), t),
        s = u.substring(0, u.indexOf("Animation")).toLowerCase(),
        l = s && "-" + s + "-" || "";
    return c[r] || (p.insertRule("@" + l + "keyframes " + r + "{" + "0%{opacity:" + a + "}" + o + "%{opacity:" + t + "}" + (o + .01) + "%{opacity:1}" + (o + e) % 100 + "%{opacity:" + t + "}" + "100%{opacity:" + a + "}" + "}", p.cssRules.length), c[r] = 1), r;
  }

  function n(t, e) {
    var i,
        n,
        r = t.style;

    for (e = e.charAt(0).toUpperCase() + e.slice(1), n = 0; d.length > n; n++) {
      if (i = d[n] + e, void 0 !== r[i]) return i;
    }

    return void 0 !== r[e] ? e : void 0;
  }

  function r(t, e) {
    for (var i in e) {
      t.style[n(t, i) || i] = e[i];
    }

    return t;
  }

  function o(t) {
    for (var e = 1; arguments.length > e; e++) {
      var i = arguments[e];

      for (var n in i) {
        void 0 === t[n] && (t[n] = i[n]);
      }
    }

    return t;
  }

  function a(t, e) {
    return "string" == typeof t ? t : t[e % t.length];
  }

  function s(t) {
    this.opts = o(t || {}, s.defaults, f);
  }

  function l() {
    function i(e, i) {
      return t("<" + e + ' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">', i);
    }

    p.addRule(".spin-vml", "behavior:url(#default#VML)"), s.prototype.lines = function (t, n) {
      function o() {
        return r(i("group", {
          coordsize: d + " " + d,
          coordorigin: -u + " " + -u
        }), {
          width: d,
          height: d
        });
      }

      function s(t, s, l) {
        e(p, e(r(o(), {
          rotation: 360 / n.lines * t + "deg",
          left: ~~s
        }), e(r(i("roundrect", {
          arcsize: n.corners
        }), {
          width: u,
          height: n.width,
          left: n.radius,
          top: -n.width >> 1,
          filter: l
        }), i("fill", {
          color: a(n.color, t),
          opacity: n.opacity
        }), i("stroke", {
          opacity: 0
        }))));
      }

      var l,
          u = n.length + n.width,
          d = 2 * u,
          c = 2 * -(n.width + n.length) + "px",
          p = r(o(), {
        position: "absolute",
        top: c,
        left: c
      });
      if (n.shadow) for (l = 1; n.lines >= l; l++) {
        s(l, -2, "progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");
      }

      for (l = 1; n.lines >= l; l++) {
        s(l);
      }

      return e(t, p);
    }, s.prototype.opacity = function (t, e, i, n) {
      var r = t.firstChild;
      n = n.shadow && n.lines || 0, r && r.childNodes.length > e + n && (r = r.childNodes[e + n], r = r && r.firstChild, r = r && r.firstChild, r && (r.opacity = i));
    };
  }

  var u,
      d = ["webkit", "Moz", "ms", "O"],
      c = {},
      p = function () {
    var i = t("style", {
      type: "text/css"
    });
    return e(document.getElementsByTagName("head")[0], i), i.sheet || i.styleSheet;
  }(),
      f = {
    lines: 12,
    length: 7,
    width: 5,
    radius: 10,
    rotate: 0,
    corners: 1,
    color: "#000",
    direction: 1,
    speed: 1,
    trail: 100,
    opacity: .25,
    fps: 20,
    zIndex: 2e9,
    className: "spinner",
    top: "50%",
    left: "50%",
    position: "absolute"
  };

  s.defaults = {}, o(s.prototype, {
    spin: function spin(e) {
      this.stop();
      var i = this,
          n = i.opts,
          o = i.el = r(t(0, {
        className: n.className
      }), {
        position: n.position,
        width: 0,
        zIndex: n.zIndex
      });

      if (n.radius + n.length + n.width, r(o, {
        left: n.left,
        top: n.top
      }), e && e.insertBefore(o, e.firstChild || null), o.setAttribute("role", "progressbar"), i.lines(o, i.opts), !u) {
        var a,
            s = 0,
            l = (n.lines - 1) * (1 - n.direction) / 2,
            d = n.fps,
            c = d / n.speed,
            p = (1 - n.opacity) / (c * n.trail / 100),
            f = c / n.lines;

        (function h() {
          s++;

          for (var t = 0; n.lines > t; t++) {
            a = Math.max(1 - (s + (n.lines - t) * f) % c * p, n.opacity), i.opacity(o, t * n.direction + l, a, n);
          }

          i.timeout = i.el && setTimeout(h, ~~(1e3 / d));
        })();
      }

      return i;
    },
    stop: function stop() {
      var t = this.el;
      return t && (clearTimeout(this.timeout), t.parentNode && t.parentNode.removeChild(t), this.el = void 0), this;
    },
    lines: function lines(n, o) {
      function s(e, i) {
        return r(t(), {
          position: "absolute",
          width: o.length + o.width + "px",
          height: o.width + "px",
          background: e,
          boxShadow: i,
          transformOrigin: "left",
          transform: "rotate(" + ~~(360 / o.lines * d + o.rotate) + "deg) translate(" + o.radius + "px" + ",0)",
          borderRadius: (o.corners * o.width >> 1) + "px"
        });
      }

      for (var l, d = 0, c = (o.lines - 1) * (1 - o.direction) / 2; o.lines > d; d++) {
        l = r(t(), {
          position: "absolute",
          top: 1 + ~(o.width / 2) + "px",
          transform: o.hwaccel ? "translate3d(0,0,0)" : "",
          opacity: o.opacity,
          animation: u && i(o.opacity, o.trail, c + d * o.direction, o.lines) + " " + 1 / o.speed + "s linear infinite"
        }), o.shadow && e(l, r(s("#000", "0 0 4px #000"), {
          top: "2px"
        })), e(n, e(l, s(a(o.color, d), "0 0 1px rgba(0,0,0,.1)")));
      }

      return n;
    },
    opacity: function opacity(t, e, i) {
      t.childNodes.length > e && (t.childNodes[e].style.opacity = i);
    }
  });
  var h = r(t("group"), {
    behavior: "url(#default#VML)"
  });
  return !n(h, "transform") && h.adj ? l() : u = n(h, "animation"), s;
});

/***/ }),

/***/ 2:
/*!********************************************!*\
  !*** multi ./resources/js/scripts/spin.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Library/WebServer/Documents/snm-waste-management/resources/js/scripts/spin.js */"./resources/js/scripts/spin.js");


/***/ })

/******/ });