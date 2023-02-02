/*!
 * Ladda 0.9.8 (2015-08-04, 11:30)
 * http://lab.hakim.se/ladda
 * MIT licensed
 *
 * Copyright (C) 2015 Hakim El Hattab, http://hakim.se
 */
(function (t, e) {
    "object" == typeof exports ? module.exports = e(require("spin.js")) : "function" == typeof define && define.amd ? define(["spin"], e) : t.Ladda = e(t.Spinner)
})(this, function (t) {
    "use strict";

    function e(t) {
        if (t === void 0) return console.warn("Ladda button target must be defined."), void 0;
        if (/ladda-button/i.test(t.className) || (t.className += " ladda-button"), t.hasAttribute("data-style") || t.setAttribute("data-style", "expand-right"), !t.querySelector(".ladda-label")) {
            var e = document.createElement("span");
            e.className = "ladda-label", u(t, e)
        }
        var a, n = t.querySelector(".ladda-spinner");
        n || (n = document.createElement("span"), n.className = "ladda-spinner"), t.appendChild(n);
        var r, i = {
            start: function () {
                return a || (a = o(t)), t.setAttribute("disabled", ""), t.setAttribute("data-loading", ""), clearTimeout(r), a.spin(n), this.setProgress(0), this
            },
            startAfter: function (t) {
                return clearTimeout(r), r = setTimeout(function () {
                    i.start()
                }, t), this
            },
            stop: function () {
                return t.removeAttribute("disabled"), t.removeAttribute("data-loading"), clearTimeout(r), a && (r = setTimeout(function () {
                    a.stop()
                }, 1e3)), this
            },
            toggle: function () {
                return this.isLoading() ? this.stop() : this.start(), this
            },
            setProgress: function (e) {
                e = Math.max(Math.min(e, 1), 0);
                var a = t.querySelector(".ladda-progress");
                0 === e && a && a.parentNode ? a.parentNode.removeChild(a) : (a || (a = document.createElement("div"), a.className = "ladda-progress", t.appendChild(a)), a.style.width = (e || 0) * t.offsetWidth + "px")
            },
            enable: function () {
                return this.stop(), this
            },
            disable: function () {
                return this.stop(), t.setAttribute("disabled", ""), this
            },
            isLoading: function () {
                return t.hasAttribute("data-loading")
            },
            remove: function () {
                clearTimeout(r), t.removeAttribute("disabled", ""), t.removeAttribute("data-loading", ""), a && (a.stop(), a = null);
                for (var e = 0, n = d.length; n > e; e++)
                    if (i === d[e]) {
                        d.splice(e, 1);
                        break
                    }
            }
        };
        return d.push(i), i
    }

    function a(t, e) {
        for (; t.parentNode && t.tagName !== e;) t = t.parentNode;
        return e === t.tagName ? t : void 0
    }

    function n(t) {
        for (var e = ["input", "textarea", "select"], a = [], n = 0; e.length > n; n++)
            for (var r = t.getElementsByTagName(e[n]), i = 0; r.length > i; i++) r[i].hasAttribute("required") && a.push(r[i]);
        return a
    }

    function r(t, r) {
        r = r || {};
        var i = [];
        "string" == typeof t ? i = s(document.querySelectorAll(t)) : "object" == typeof t && "string" == typeof t.nodeName && (i = [t]);
        for (var o = 0, u = i.length; u > o; o++)(function () {
            var t = i[o];
            if ("function" == typeof t.addEventListener) {
                var s = e(t),
                    u = -1;
                t.addEventListener("click", function () {
                    var e = !0,
                        i = a(t, "FORM");
                    if (i !== void 0)
                        for (var o = n(i), d = 0; o.length > d; d++) "" === o[d].value.replace(/^\s+|\s+$/g, "") && (e = !1), "checkbox" !== o[d].type && "radio" !== o[d].type || o[d].checked || (e = !1), "email" === o[d].type && (e = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(o[d].value));
                    e && (s.startAfter(1), "number" == typeof r.timeout && (clearTimeout(u), u = setTimeout(s.stop, r.timeout)), "function" == typeof r.callback && r.callback.apply(null, [s]))
                }, !1)
            }
        })()
    }

    function i() {
        for (var t = 0, e = d.length; e > t; t++) d[t].stop()
    }

    function o(e) {
        var a, n, r = e.offsetHeight;
        0 === r && (r = parseFloat(window.getComputedStyle(e).height)), r > 32 && (r *= .8), e.hasAttribute("data-spinner-size") && (r = parseInt(e.getAttribute("data-spinner-size"), 10)), e.hasAttribute("data-spinner-color") && (a = e.getAttribute("data-spinner-color")), e.hasAttribute("data-spinner-lines") && (n = parseInt(e.getAttribute("data-spinner-lines"), 10));
        var i = .2 * r,
            o = .6 * i,
            s = 7 > i ? 2 : 3;
        return new t({
            color: a || "#fff",
            lines: n || 12,
            radius: i,
            length: o,
            width: s,
            zIndex: "auto",
            top: "auto",
            left: "auto",
            className: ""
        })
    }

    function s(t) {
        for (var e = [], a = 0; t.length > a; a++) e.push(t[a]);
        return e
    }

    function u(t, e) {
        var a = document.createRange();
        a.selectNodeContents(t), a.surroundContents(e), t.appendChild(e)
    }
    var d = [];
    return {
        bind: r,
        create: e,
        stopAll: i
    }
});