window.RssApp_wall = function (e) {
    var t = {};

    function n(r) {
        if (t[r]) return t[r].exports;
        var a = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(a.exports, a, a.exports, n), a.l = !0, a.exports
    }
    return n.m = e, n.c = t, n.d = function (e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: r
        })
    }, n.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function (e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e)
            for (var a in e) n.d(r, a, function (t) {
                return e[t]
            }.bind(null, a));
        return r
    }, n.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "/v1", n(n.s = 113)
}([function (e, t, n) {
    "use strict";
    e.exports = n(45)
}, function (e, t) {
    e.exports = function (e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }, e.exports.__esModule = !0, e.exports.default = e.exports
}, function (e, t, n) {
    var r = n(49),
        a = n(50),
        o = n(34),
        i = n(51);
    e.exports = function (e, t) {
        return r(e) || a(e, t) || o(e, t) || i()
    }, e.exports.__esModule = !0, e.exports.default = e.exports
}, function (e, t, n) {
    "use strict";
    n.d(t, "g", (function () {
        return r
    })), n.d(t, "h", (function () {
        return a
    })), n.d(t, "i", (function () {
        return o
    })), n.d(t, "d", (function () {
        return i
    })), n.d(t, "e", (function () {
        return l
    })), n.d(t, "j", (function () {
        return u
    })), n.d(t, "f", (function () {
        return s
    })), n.d(t, "b", (function () {
        return p
    })), n.d(t, "c", (function () {
        return m
    })), n.d(t, "a", (function () {
        return h
    })), n.d(t, "k", (function () {
        return g
    }));
    var r = function (e) {
        return /<([A-Za-z][A-Za-z0-9]*)\b[^>]*>(.*?)<\/\1>/.test(e)
    };

    function a(e) {
        return "string" == typeof e && e.includes("<blockquote") && e.includes("</blockquote>") && e.includes("twitter")
    }

    function o(e) {
        return "string" == typeof e && e.includes("youtube")
    }
    var i = function (e) {
        return 0 === e.indexOf("http://") ? e.replace("http://", "https://") : 0 === e.indexOf("//") ? e.replace("//", "https://") : e
    },
        l = "onerror=\"this.src.indexOf('https://') === 0 && !this.src.includes('ipxy') ? this.src=this.src.replace('https://', 'http://') : this.style.display='none'\"",
        u = function (e) {
            return e.replace(/<img.+?src="(.+?)".+?>/gm, (function (e, t) {
                return 0 === t.indexOf("http://") ? e.replace("http://", "https://") : 0 === t.indexOf("//") ? e.replace("//", "https://") : e
            }))
        };

    function c() {
        return -1 !== navigator.userAgent.indexOf("MSIE") ? "MSIE" : -1 !== navigator.userAgent.indexOf("Edge") ? "Edge" : -1 !== navigator.userAgent.indexOf("Firefox") ? "Firefox" : -1 !== navigator.userAgent.indexOf("Opera") ? "Opera" : -1 !== navigator.userAgent.indexOf("Chrome") ? "Chrome" : -1 !== navigator.userAgent.indexOf("Safari") ? "Safari" : ""
    }
    var s = function () {
        return "Edge" === c()
    },
        f = /<div style=.+?><iframe.+<\/iframe><\/div>/i,
        d = /<video.+<\/video>/i;

    function p(e) {
        if (f.test(e)) {
            var t = "";
            return [e.replace(f, (function (e) {
                return t = e, ""
            })), t]
        }
        return [e]
    }

    function m(e) {
        if (d.test(e)) {
            var t = "";
            return [e.replace(d, (function (e) {
                return t = e, ""
            })), t]
        }
        return [e]
    }

    function h(e) {
        var t = document.createElement("DIV");
        t.innerHTML = e;
        var n = (t.textContent || t.innerText || "").replace("?", "").trim();
        return t.remove(), n
    }

    function g(e, t) {
        for (var n = Math.ceil(e.length / t) || 1, r = new Array(t).fill(0).map((function () {
            return []
        })), a = 0; a < t; a++)
            for (var o = 0; o < n; o++) e[o * t + a] && r[a].push(e[o * t + a]);
        return r
    }
}, function (e, t, n) {
    "use strict";
    t.a = function (e) {
        var t = {};
        "string" == typeof e && e.length > 0 && "".concat(e, " ").replace(/([a-zA-Z-]+)[:|\s]{1,2}([a-zA-Z0-9- #'"`.:_*/%+!,\(\))]+)?;?\s/g, (function (e, n, r) {
            var a = -1 !== n.indexOf("-") ? n.replace(/-([a-zA-Z])/, (function (e, t) {
                return t.toUpperCase()
            })) : n;
            return t[a] = r, r
        }));
        return t
    }
}, function (e, t, n) {
    "use strict";
    n.d(t, "a", (function () {
        return u
    }));
    var r = n(23),
        a = n.n(r),
        o = n(0),
        i = n.n(o),
        l = ["rel", "target", "customTarget", "referrerPolicy", "href"],
        u = i.a.createContext({});
    t.b = function (e) {
        var t = e.rel,
            n = e.target,
            r = e.customTarget,
            o = e.referrerPolicy,
            c = e.href,
            s = a()(e, l),
            f = "none" === n ? null : c,
            d = i.a.useContext(u);
        return i.a.createElement("a", Object.assign({}, s, {
            href: f,
            referrerPolicy: o,
            target: "custom" === n || "none" === n ? r || "_blank" : "new" === n ? "_blank" : "_self",
            rel: (t || "noopener noreferrer") + (d.nofollow ? " nofollow" : "")
        }))
    }
}, function (e, t) {
    function n(t) {
        return e.exports = n = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        }, e.exports.__esModule = !0, e.exports.default = e.exports, n(t)
    }
    e.exports = n, e.exports.__esModule = !0, e.exports.default = e.exports
}, function (e, t, n) {
    "use strict";

    function r(e) {
        var t, n, a = "";
        if ("string" == typeof e || "number" == typeof e) a += e;
        else if ("object" == typeof e)
            if (Array.isArray(e))
                for (t = 0; t < e.length; t++) e[t] && (n = r(e[t])) && (a && (a += " "), a += n);
            else
                for (t in e) e[t] && (a && (a += " "), a += t);
        return a
    }
    t.a = function () {
        for (var e, t, n = 0, a = ""; n < arguments.length;)(e = arguments[n++]) && (t = r(e)) && (a && (a += " "), a += t);
        return a
    }
}, function (e, t) {
    e.exports = function (e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }, e.exports.__esModule = !0, e.exports.default = e.exports
}, , function (e, t, n) {
    "use strict";

    function r(e, t) {
        return "".concat(e, "?utm_source=").concat(encodeURIComponent(t.utmSource), "&utm_medium=").concat(encodeURIComponent(t.utmMedium), "&utm_content=").concat(encodeURIComponent(t.utmContent), "&utm_term=").concat(encodeURIComponent(t.utmTerm), "&utm_campaign=").concat(encodeURIComponent(t.utmCampaign))
    }
    n.d(t, "a", (function () {
        return r
    }))
}, function (e, t) {
    e.exports = function (e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }, e.exports.__esModule = !0, e.exports.default = e.exports
}, function (e, t) {
    function n(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }
    e.exports = function (e, t, r) {
        return t && n(e.prototype, t), r && n(e, r), Object.defineProperty(e, "prototype", {
            writable: !1
        }), e
    }, e.exports.__esModule = !0, e.exports.default = e.exports
}, function (e, t, n) {
    var r = n(30);
    e.exports = function (e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }), Object.defineProperty(e, "prototype", {
            writable: !1
        }), t && r(e, t)
    }, e.exports.__esModule = !0, e.exports.default = e.exports
}, function (e, t, n) {
    var r = n(44).default,
        a = n(8);
    e.exports = function (e, t) {
        if (t && ("object" === r(t) || "function" == typeof t)) return t;
        if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
        return a(e)
    }, e.exports.__esModule = !0, e.exports.default = e.exports
}, function (e, t, n) {
    "use strict";
    var r = n(1),
        a = n.n(r),
        o = n(2),
        i = n.n(o),
        l = n(0),
        u = n.n(l),
        c = n(4),
        s = n(3),
        f = n(25),
        d = n(24);

    function p(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function m(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? p(Object(n), !0).forEach((function (t) {
                a()(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : p(Object(n)).forEach((function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }
    t.a = function (e) {
        var t = e.parent,
            n = e.className,
            r = e.style,
            a = e.children,
            o = e.settings,
            p = o.color,
            h = o.fontHeight,
            g = o.fontSize,
            v = o.clipLines,
            y = o.textAlign,
            b = o.fontBold,
            w = o.fontItalic,
            x = e.customStyles,
            k = e.imageUrl,
            E = e.showVideoImage,
            C = Object(l.useState)(null),
            T = i()(C, 2),
            S = T[0],
            O = T[1],
            P = Object(l.useRef)(),
            _ = Object(l.useRef)(),
            j = a || "",
            M = Object(f.a)(a).onVideoClick,
            N = Object(s.h)(j),
            D = Object(s.i)(j),
            z = j.includes("<img");
        N && (j = j.replace('data-width="550"', "")), j && z && (j = (j = (j = Object(s.j)(j)).replace("<img", "<img ".concat(s.e))).replace("<img", '<img referrerpolicy="no-referrer"'));
        var R = Object(s.b)(j),
            L = i()(R, 2),
            F = L[0],
            I = L[1];
        j = F;
        var U = Object(s.c)(j),
            A = i()(U, 2),
            B = A[0],
            H = A[1];
        return j = B, N || (j = Object(s.a)(j)), u.a.useEffect((function () {
            setTimeout((function () {
                return O(!1)
            }), 100)
        }), []), u.a.useEffect((function () {
            var e = null,
                n = t && t.current,
                r = n && (n.getRootNode().host || n.parentNode);
            if (j && r) {
                var a = /<script.*?src="(.*?)"/gi.exec(j);
                if (a && a[0] && a[1]) {
                    var o = document.createElement("script"),
                        l = i()(a, 2);
                    o.src = l[1], e = o.src.replace(/[^\w\s]/gi, ""), o.id = e, o.async = !0, o.onload = function () {
                        setTimeout((function () {
                            return O(!0)
                        }), 100)
                    }, r.appendChild(o)
                }
            }
            return function () {
                if (r) {
                    var t = r.querySelector("#".concat(e));
                    t && r.removeChild(t)
                }
            }
        }), [S]), u.a.createElement(u.a.Fragment, null, u.a.createElement("div", {
            className: ["rssapp-card-description", n].filter(Boolean).join(" "),
            style: m({
                fontSize: "".concat(g, "px"),
                lineHeight: "".concat(h, "px"),
                color: p
            }, r || {})
        }, (I || H) && u.a.createElement(u.a.Fragment, null, D && E ? u.a.createElement(d.a, {
            imageRef: _,
            imageUrl: k,
            imageClick: M
        }) : u.a.createElement("div", {
            dangerouslySetInnerHTML: {
                __html: I || H
            }
        })), j && u.a.createElement("p", {
            style: m({
                paddingTop: I ? "8px" : void 0,
                fontSize: "".concat(g, "px"),
                lineHeight: "".concat(h, "px"),
                color: p,
                WebkitLineClamp: N ? void 0 : v,
                textAlign: y || "left",
                fontWeight: b ? 700 : 400,
                fontStyle: w ? "italic" : "initial"
            }, Object(c.a)(x)),
            ref: P,
            className: "rssapp-card-description",
            dangerouslySetInnerHTML: {
                __html: j
            }
        })), u.a.createElement("style", {
            jsx: !0
        }, "\n        .rssapp-card-description > p {\n          font-weight: 400;\n          margin: 0;\n          overflow: hidden;\n          text-overflow: ellipsis;\n          display: -webkit-box;\n          -webkit-line-clamp: 5;\n          -webkit-box-orient: vertical;\n        }\n      "))
    }
}, function (e, t, n) {
    "use strict";
    var r = n(1),
        a = n.n(r),
        o = n(0),
        i = n.n(o),
        l = n(7),
        u = n(4),
        c = n(5);

    function s(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function f(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? s(Object(n), !0).forEach((function (t) {
                a()(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach((function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }
    t.a = function (e) {
        var t = e.url,
            n = e.children,
            r = e.settings,
            a = r.color,
            o = r.fontHeight,
            s = r.fontSize,
            d = r.linkTarget,
            p = r.clipLines,
            m = r.customTarget,
            h = r.textAlign,
            g = r.fontBold,
            v = r.fontItalic,
            y = e.className,
            b = e.style,
            w = e.customStyles;
        return i.a.createElement(i.a.Fragment, null, i.a.createElement("div", {
            className: Object(l.a)("rssapp-card-title", y),
            style: f(f({}, b || {}), {}, {
                fontSize: "".concat(s, "px"),
                lineHeight: "".concat(o, "px"),
                color: a,
                textAlign: h
            })
        }, i.a.createElement(c.b, {
            href: t,
            target: d,
            customTarget: m,
            rel: "noopener noreferrer",
            style: f({
                fontSize: "".concat(s, "px"),
                lineHeight: "".concat(o, "px"),
                color: a,
                WebkitLineClamp: p,
                fontWeight: g ? 600 : 400,
                fontStyle: v ? "italic" : "initial"
            }, Object(u.a)(w))
        }, n)), i.a.createElement("style", {
            jsx: !0
        }, "\n        .rssapp-card-title > a {\n          color: inherit;\n          text-decoration: none;\n          background-color: transparent;\n          font-weight: 600;\n\n          overflow: hidden;\n          text-overflow: ellipsis;\n          display: -webkit-box;\n          -webkit-line-clamp: 5;\n          -webkit-box-orient: vertical;\n        }\n      "))
    }
}, function (e, t, n) {
    "use strict";
    var r = n(1),
        a = n.n(r),
        o = n(0),
        i = n.n(o),
        l = n(7),
        u = n(39),
        c = n(20);

    function s(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function f(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? s(Object(n), !0).forEach((function (t) {
                a()(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach((function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }
    t.a = function (e) {
        var t = e.style,
            n = e.custom,
            r = (n = void 0 === n ? {} : n).cardSourceColor,
            a = n.cardSourceUppercase,
            o = e.settings,
            s = o.cardFooterColor,
            d = o.cardFooterFontSize,
            p = o.dateFormat,
            m = e.date,
            h = e.isFree,
            g = e.siteUrl,
            v = e.className,
            y = e.isListWidget,
            b = d || 12;
        return i.a.createElement("div", {
            className: Object(l.a)("rssapp-card-footer", v),
            style: f({
                display: "flex",
                alignItems: "center",
                fontSize: b,
                lineHeight: "".concat(2.2 * b, "px"),
                color: s
            }, t || {})
        }, i.a.createElement(u.a, {
            url: g,
            isFree: h,
            style: {
                color: r,
                fontSize: b,
                textTransform: a ? "uppercase" : void 0,
                lineHeight: "inherit"
            },
            isListWidget: y
        }), m && Object(c.b)(m) ? i.a.createElement(i.a.Fragment, null, i.a.createElement("span", {
            style: {
                margin: "0px 9px",
                width: 2,
                height: 2,
                borderRadius: "50%",
                background: s || r
            }
        }), i.a.createElement(c.a, {
            createdAt: m,
            dateFormat: p,
            style: {
                lineHeight: "inherit"
            }
        })) : null)
    }
}, function (e, t, n) {
    "use strict";
    var r = n(1),
        a = n.n(r),
        o = n(0),
        i = n.n(o),
        l = n(7);
    var u = [{
        icon: function (e) {
            return i.a.createElement("svg", Object.assign({
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "none"
            }, e), i.a.createElement("path", {
                d: "M11.4987 0H8.94816C7.43457 0 5.75102 0.638225 5.75102 2.83785C5.75841 3.60429 5.75102 4.33831 5.75102 5.1644H4V7.95792H5.80521V16H9.12237V7.90485H11.3118L11.5099 5.15656H9.06521C9.06521 5.15656 9.07069 3.934 9.06521 3.57897C9.06521 2.70972 9.96739 2.7595 10.0217 2.7595C10.451 2.7595 11.2857 2.76076 11.5 2.7595V0H11.4987Z",
                fill: "white"
            }))
        },
        value: "facebook",
        href: function (e) {
            return "https://facebook.com/sharer/sharer.php?u=".concat(e)
        },
        background: "#3C5A9A"
    }, {
        icon: function (e) {
            return i.a.createElement("svg", Object.assign({
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "none"
            }, e), i.a.createElement("path", {
                d: "M16 2.5423C15.4115 2.80411 14.7794 2.98111 14.1148 3.06066C14.7931 2.65346 15.3127 2.00818 15.558 1.24019C14.9137 1.62386 14.2086 1.89396 13.4732 2.03876C12.8748 1.39926 12.0215 1 11.0774 1C9.26523 1 7.79558 2.47281 7.79558 4.29064C7.79558 4.54821 7.82452 4.79949 7.88014 5.04075C5.15222 4.9033 2.73373 3.59325 1.11491 1.60263C0.832245 2.0888 0.670448 2.65405 0.670448 3.25715C0.670448 4.39866 1.24998 5.40582 2.13056 5.99579C1.60927 5.9796 1.09942 5.83853 0.64363 5.58438V5.62596C0.64363 7.22047 1.77485 8.55001 3.27649 8.85239C3.00064 8.92816 2.71115 8.96775 2.41166 8.96775C2.19992 8.96775 1.99448 8.94766 1.79379 8.90981C2.21148 10.2167 3.42367 11.168 4.85955 11.1949C3.73621 12.0777 2.32074 12.604 0.783396 12.604C0.518607 12.604 0.25691 12.5882 0 12.5571C1.45279 13.4911 3.17773 14.0363 5.03139 14.0363C11.0684 14.0363 14.3701 9.02203 14.3701 4.67364C14.3701 4.53088 14.367 4.38919 14.3601 4.248C15.0034 3.78153 15.5587 3.20394 16 2.5423Z",
                fill: "white"
            }))
        },
        value: "twitter",
        href: function (e, t) {
            return "https://twitter.com/intent/tweet/?text=".concat(t, "&url=").concat(e)
        },
        background: "#34AADF"
    }, {
        icon: function (e) {
            return i.a.createElement("svg", Object.assign({
                width: "16",
                height: "16",
                viewBox: "-1.5 0 16 16",
                fill: "none"
            }, e), i.a.createElement("path", {
                d: "M5.68704 0.0544063C2.8967 0.353775 0.117661 2.50019 0.00469219 5.57295C-0.0687377 7.44824 0.716398 8.8547 2.59169 9.25009C2.80633 8.36329 2.84587 7.88317 2.84587 7.88317C2.84587 7.88317 2.02119 7.09238 1.93646 6.58967C1.24735 2.54538 6.83368 -0.21672 9.76523 2.60751C11.7874 4.56752 10.4543 10.5944 7.18953 9.96745C4.06028 9.36871 8.72026 4.57317 6.22364 3.62988C4.19585 2.86169 3.11699 5.97399 4.07723 7.51602C3.51238 10.1708 2.29797 12.6731 2.78938 16C4.38789 14.8986 4.9245 12.786 5.36508 10.5831C6.16716 11.0463 6.59644 11.5321 7.61881 11.6055C11.392 11.8823 13.4989 8.01873 12.9848 4.44891C12.5217 1.28577 9.21168 -0.32404 5.68704 0.0544063Z",
                fill: "white"
            }))
        },
        value: "pinterest",
        href: function (e, t, n) {
            return "https://pinterest.com/pin/create/button/?url=".concat(e, "&media=").concat(n, "&description=").concat(t)
        },
        background: "#CA2127"
    }, {
        icon: function (e) {
            return i.a.createElement("svg", Object.assign({
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "none"
            }, e), i.a.createElement("path", {
                d: "M15.9997 8.22004C15.9639 7.25261 15.1517 6.49717 14.1813 6.53001C13.7513 6.54494 13.3423 6.72111 13.0317 7.01672C11.6642 6.08511 10.0578 5.57452 8.40655 5.53869L9.18587 1.79137L11.7567 2.33182C11.8284 2.99171 12.4196 3.46945 13.0795 3.39779C13.7394 3.32613 14.2171 2.73492 14.1455 2.07503C14.0738 1.41515 13.4826 0.937401 12.8227 1.00906C12.4435 1.04788 12.1031 1.26884 11.915 1.59729L8.97089 1.00906C8.77083 0.964274 8.57078 1.08968 8.52599 1.29272C8.52599 1.29571 8.52599 1.29571 8.52599 1.2987L7.63917 5.46703C5.96706 5.4939 4.33974 6.00748 2.95427 6.94506C2.2496 6.28218 1.13884 6.31503 0.475968 7.02269C-0.186905 7.72737 -0.154059 8.83812 0.553602 9.501C0.690954 9.62939 0.849207 9.73987 1.02538 9.8175C1.01343 9.99367 1.01343 10.1698 1.02538 10.346C1.02538 13.0363 4.16058 15.225 8.02734 15.225C11.8941 15.225 15.0293 13.0393 15.0293 10.346C15.0412 10.1698 15.0412 9.99367 15.0293 9.8175C15.6325 9.51593 16.0117 8.89486 15.9997 8.22004ZM3.9874 9.42336C3.9874 8.76049 4.52785 8.22004 5.19072 8.22004C5.8536 8.22004 6.39405 8.76049 6.39405 9.42336C6.39405 10.0862 5.8536 10.6267 5.19072 10.6267C4.52486 10.6207 3.9874 10.0862 3.9874 9.42336ZM10.9655 12.7258C10.1115 13.3678 9.06644 13.6962 7.99748 13.6514C6.92852 13.6962 5.88345 13.3678 5.02948 12.7258C4.91602 12.5884 4.93692 12.3824 5.07427 12.2689C5.19371 12.1704 5.36391 12.1704 5.48633 12.2689C6.20892 12.7974 7.08976 13.0662 7.98554 13.0244C8.88131 13.0721 9.76514 12.8154 10.4967 12.2928C10.6281 12.1644 10.8431 12.1674 10.9714 12.2988C11.0998 12.4302 11.0969 12.6452 10.9655 12.7736V12.7258ZM10.7505 10.6685C10.0876 10.6685 9.54717 10.128 9.54717 9.46517C9.54717 8.80229 10.0876 8.26184 10.7505 8.26184C11.4134 8.26184 11.9538 8.80229 11.9538 9.46517C11.9807 10.128 11.4641 10.6864 10.8013 10.7133C10.7803 10.7133 10.7624 10.7133 10.7415 10.7133L10.7505 10.6685Z",
                fill: "white"
            }))
        },
        value: "reddit",
        href: function (e, t) {
            return "https://reddit.com/submit/?url=".concat(e, "&resubmit=true&title=").concat(t)
        },
        background: "#FF4500"
    }, {
        icon: function (e) {
            return i.a.createElement("svg", Object.assign({
                width: "16",
                height: "16",
                viewBox: "0 1 16 17",
                fill: "none"
            }, e), i.a.createElement("rect", {
                x: "0.386719",
                y: "5.24609",
                width: "3.22581",
                height: "10.752",
                fill: "white"
            }), i.a.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M9.03049 6.5992L9.353 6.20819C9.65407 5.80285 10.6046 4.99219 11.9982 4.99219C13.7401 4.99219 15.9982 5.82419 15.9982 8.57619V15.9362H12.7078V10.1762C12.7508 9.45085 12.4498 8.00019 10.9014 8.00019C9.83616 8.00019 9.29857 8.71746 9.03049 9.39449V16.0002H5.80469V5.24818H9.03049V6.5992Z",
                fill: "white"
            }), i.a.createElement("ellipse", {
                cx: "2",
                cy: "1.984",
                rx: "2",
                ry: "1.984",
                fill: "white"
            }))
        },
        value: "linkdin",
        href: function (e) {
            return "https://www.linkedin.com/shareArticle?mini=true&url=".concat(e, "&title=&summary=&source=")
        },
        background: "linear-gradient(135deg, #2489BE 14.64%, #0575B3 85.36%)"
    }, {
        icon: function (e) {
            return i.a.createElement("svg", Object.assign({
                width: "16",
                height: "16",
                viewBox: "0.5 0.5 16.5 16.5",
                fill: "none"
            }, e), i.a.createElement("path", {
                d: "M0.980933 7.09703C0.980933 7.09703 8.05735 4.02377 10.5116 2.9416C11.4524 2.50877 14.6429 1.12358 14.6429 1.12358C14.6429 1.12358 16.1155 0.517618 15.9927 1.98931C15.9518 2.59533 15.6246 4.7163 15.2974 7.01047C14.8065 10.2569 14.2747 13.8063 14.2747 13.8063C14.2747 13.8063 14.1929 14.8019 13.4976 14.9751C12.8022 15.1482 11.6569 14.3691 11.4524 14.1959C11.2887 14.0661 8.38456 12.1182 7.32106 11.1659C7.03472 10.9062 6.70751 10.3868 7.36194 9.78078C8.83451 8.35234 10.5934 6.57763 11.6569 5.45221C12.1477 4.93275 12.6386 3.72076 10.5934 5.19245C7.68921 7.31348 4.82592 9.30463 4.82592 9.30463C4.82592 9.30463 4.17144 9.73746 2.94433 9.34788C1.71716 8.95836 0.285519 8.4389 0.285519 8.4389C0.285519 8.4389 -0.696122 7.78963 0.980933 7.09703Z",
                fill: "white"
            }))
        },
        value: "telegram",
        href: function (e, t) {
            return "https://telegram.me/share/url?url=".concat(e, "&text=").concat(t)
        },
        background: "#2DAAE1"
    }, {
        icon: function (e) {
            return i.a.createElement("svg", Object.assign({
                width: "16",
                height: "16",
                viewBox: "0 0.5 16 16",
                fill: "none"
            }, e), i.a.createElement("path", {
                d: "M13.6689 2.32515C12.1648 0.826562 10.1645 0.000842306 8.03339 0C3.64234 0 0.0685551 3.55643 0.0667978 7.92788C0.0662337 9.32522 0.433069 10.6892 1.13021 11.8915L0 16L4.22319 14.8975C5.38681 15.5291 6.69687 15.862 8.03022 15.8625H8.0335C12.4241 15.8625 15.9982 12.3057 16 7.93418C16.0008 5.81574 15.173 3.82375 13.6689 2.32515ZM8.0335 14.5235H8.03078C6.84263 14.523 5.67728 14.2054 4.66065 13.605L4.41884 13.4622L1.91273 14.1164L2.58167 11.6847L2.42419 11.4354C1.76137 10.3862 1.4113 9.1735 1.41182 7.92839C1.41326 4.29505 4.38367 1.33905 8.03606 1.33905C9.80463 1.33972 11.4672 2.02609 12.7173 3.27165C13.9675 4.5172 14.6556 6.1729 14.6549 7.93368C14.6535 11.5673 11.6831 14.5235 8.0335 14.5235ZM11.6655 9.58813C11.4664 9.48897 10.4878 9.0097 10.3053 8.94359C10.1229 8.87746 9.99018 8.84441 9.85743 9.04276C9.72477 9.24107 9.34329 9.6873 9.22714 9.8195C9.11103 9.95172 8.99492 9.96826 8.79587 9.86909C8.5968 9.76993 7.95542 9.56074 7.19511 8.88584C6.60338 8.3606 6.20385 7.71181 6.08774 7.51346C5.97163 7.31513 6.0754 7.20794 6.17504 7.10915C6.26458 7.02041 6.37409 6.87778 6.47363 6.7621C6.57314 6.64645 6.60633 6.56377 6.67268 6.43157C6.73904 6.29935 6.70585 6.18365 6.65608 6.0845C6.60633 5.98534 6.20821 5.01025 6.04234 4.61361C5.88078 4.22732 5.71663 4.27959 5.59445 4.27352C5.47847 4.26777 5.34563 4.26656 5.21295 4.26656C5.08026 4.26656 4.8646 4.31613 4.68215 4.51446C4.49969 4.71279 3.98546 5.19206 3.98546 6.16713C3.98546 7.1422 4.69872 8.08422 4.79826 8.21642C4.89779 8.34864 6.20188 10.3496 8.1987 11.2077C8.67364 11.4118 9.0444 11.5337 9.33351 11.625C9.81036 11.7758 10.2443 11.7545 10.5873 11.7035C10.9697 11.6467 11.765 11.2243 11.9309 10.7615C12.0968 10.2988 12.0968 9.90215 12.047 9.81952C11.9972 9.73689 11.8646 9.6873 11.6655 9.58813Z",
                fill: "white"
            }))
        },
        value: "whatsapp",
        href: function (e) {
            return "https://wa.me/?text=".concat(e)
        },
        background: "linear-gradient(180deg, #61FD7D 0%, #2BB826 100%)"
    }, {
        icon: function (e) {
            return i.a.createElement("svg", Object.assign({
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "none"
            }, e), i.a.createElement("path", {
                d: "M3.5368 12.2175L0.165911 3.84565C0.0865293 3.6485 0.231668 3.43359 0.4442 3.43359H3.00731C3.13081 3.43359 3.24169 3.50927 3.28669 3.62428L4.84759 7.61344C4.94707 7.86768 5.30685 7.86768 5.40634 7.61344L6.96724 3.62428C7.01224 3.50927 7.12312 3.43359 7.24662 3.43359H9.74884C9.96113 3.43359 10.1063 3.64806 10.0273 3.84513L5.63484 14.8124C5.58925 14.9262 5.47897 15.0008 5.35634 15.0008H2.92077C2.70671 15.0008 2.56153 14.7831 2.64383 14.5855L3.53545 12.4449C3.56573 12.3722 3.56621 12.2905 3.5368 12.2175Z",
                fill: "white"
            }), i.a.createElement("path", {
                d: "M12.838 0.190876C12.8829 0.0757693 12.9938 0 13.1174 0H15.5618C15.773 0 15.9181 0.212404 15.8413 0.409124L13.2959 6.92742C13.2509 7.04253 13.14 7.1183 13.0164 7.1183H10.572C10.3608 7.1183 10.2158 6.9059 10.2926 6.70918L12.838 0.190876Z",
                fill: "white"
            }), i.a.createElement("ellipse", {
                cx: "10.8094",
                cy: "10.232",
                rx: "1.91489",
                ry: "1.97024",
                fill: "white"
            }))
        },
        value: "yahoo",
        href: function (e) {
            return "https://compose.mail.yahoo.com/?body=".concat(e)
        },
        background: "#5B00C6"
    }, {
        icon: function (e) {
            return i.a.createElement("svg", Object.assign({
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "none"
            }, e), i.a.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M0 3.79104C0 2.80188 0.826551 2 1.84615 2H14.1538C15.1734 2 16 2.80188 16 3.79104V12.209C16 13.1981 15.1734 14 14.1538 14H1.84615C0.826552 14 0 13.1981 0 12.209V3.79104ZM14.1538 5.40299L8.509 9.90141C8.28409 10.0806 7.96051 10.0825 7.73343 9.90586L1.72308 5.2306V12.5075H14.1538V5.40299ZM2.46277 3.49254L8.12308 7.85075L13.7976 3.49254H2.46277Z",
                fill: "white"
            }))
        },
        value: "email",
        href: function (e) {
            return "mailto:info@example.com?&subject=&body=".concat(e)
        },
        background: "#FF0000"
    }, {
        icon: function (e) {
            return i.a.createElement("svg", Object.assign({
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "none"
            }, e), i.a.createElement("path", {
                d: "M11.4263 12.7802C11.1288 12.9221 10.5599 13.0455 10.1355 13.0561C8.85458 13.0904 8.60596 12.1564 8.59564 11.4793V6.49841H11.8087V4.07577H8.60676V0H6.26359C6.22501 0 6.15767 0.0337703 6.14815 0.119448C6.01106 1.36684 5.42755 3.55619 3 4.43161V6.49831H4.61937V11.7259C4.61937 13.5159 5.93971 16.0589 9.42526 15.999C10.6013 15.9788 11.9074 15.4866 12.1958 15.0616L11.4263 12.7802Z",
                fill: "white"
            }))
        },
        value: "thumblr",
        href: function (e, t) {
            return "https://www.tumblr.com/share?v=3&u=".concat(e, "&t=").concat(t, "}")
        },
        background: "#314358"
    }, {
        icon: function (e) {
            return i.a.createElement("svg", Object.assign({
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "none"
            }, e), i.a.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M15.6316 3.67105C15.7442 3.27632 15.6316 3 15.1064 3H13.3556C12.9055 3 12.7054 3.25 12.5928 3.52632C12.5928 3.52632 11.705 5.81579 10.4419 7.28947C10.0292 7.72368 9.85417 7.85526 9.62907 7.85526C9.51653 7.85526 9.35396 7.72368 9.35396 7.32895V3.67105C9.35396 3.19737 9.2289 3 8.85375 3H6.10258C5.82747 3 5.65239 3.22368 5.65239 3.42105C5.65239 3.86842 6.27766 3.97368 6.35269 5.21053V7.92105C6.35269 8.51316 6.25265 8.61842 6.02755 8.61842C5.4398 8.61842 3.98919 6.32895 3.13883 3.69737C2.96375 3.21053 2.80118 3 2.35099 3H0.600254C0.100042 3 0 3.25 0 3.52632C0 4.01316 0.587748 6.43421 2.76367 9.63158C4.21428 11.8158 6.25265 13 8.10343 13C9.2164 13 9.35396 12.7368 9.35396 12.2895V10.6316C9.35396 10.1053 9.454 10 9.81665 10C10.0793 10 10.5169 10.1316 11.5549 11.1842C12.7429 12.4342 12.943 13 13.6058 13H15.3565C15.8567 13 16.1068 12.7368 15.9568 12.2237C15.7942 11.7105 15.2314 10.9605 14.4811 10.0658C14.0685 9.55263 13.4557 9.01316 13.2806 8.73684C13.018 8.38158 13.093 8.22368 13.2806 7.92105C13.2806 7.9079 15.419 4.75 15.6316 3.67105Z",
                fill: "white"
            }))
        },
        value: "vk",
        href: function (e) {
            return "https://vk.com/share.php?url=".concat(e)
        },
        background: "#5181B8"
    }];
    t.a = function (e) {
        var t = e.url,
            n = e.title,
            r = e.enclosureImage,
            o = e.style,
            c = e.settings,
            s = c.rounded,
            f = c.map,
            d = e.size,
            p = e.className;
        return Object.keys(f).filter((function (e) {
            return Boolean(f[e])
        })).length > 0 ? i.a.createElement(i.a.Fragment, null, i.a.createElement("div", {
            className: Object(l.a)("rssapp-card-social", a()({
                rounded: s
            }, d, Boolean(d)), p),
            style: o
        }, u.map((function (e) {
            var a = e.icon,
                o = e.value,
                l = e.href,
                u = e.background;
            return i.a.createElement(i.a.Fragment, {
                key: "social-item-".concat(o)
            }, f[o] ? i.a.createElement("a", {
                className: "rssapp-card-social-item",
                href: l(t, n, r),
                target: "_blank",
                rel: "noopener noreferrer",
                "aria-label": "",
                style: {
                    background: u
                }
            }, i.a.createElement(a, null)) : null)
        }))), i.a.createElement("style", {
            jsx: !0
        }, "\n        .rssapp-card-social {\n          display: flex;\n          // min-height: 30px;\n          flex-wrap: wrap;\n          margin: -4px -8px;\n        }\n\n        .rssapp-card-social-item {\n          margin: 4px 8px;\n          width: 30px;\n          height: 30px;\n          display: flex;\n          align-items: center;\n          justify-content: center;\n          border-radius: 5px;\n        }\n        .rssapp-card-social-item svg {\n          width: 16px;\n          height: 16px;\n        }\n        .rssapp-card-social.rounded > .rssapp-card-social-item {\n          border-radius: 50%;\n        }\n        .rssapp-card-social.small {\n          margin: -4px -5px;\n        }\n        .rssapp-card-social.small > .rssapp-card-social-item {\n          width: 24px;\n          height: 24px;\n          margin: 4px 5px;\n        }\n        .rssapp-card-social.small > .rssapp-card-social-item svg {\n          width: 12px;\n          width: 12px;\n        }\n      ")) : null
    }
}, function (e, t, n) {
    "use strict";
    var r = n(40),
        a = n.n(r),
        o = n(2),
        i = n.n(o),
        l = n(23),
        u = n.n(l),
        c = n(0),
        s = n.n(c),
        f = n(3),
        d = ["src", "isLazy"];
    t.a = function (e) {
        var t = e.src,
            n = e.isLazy,
            r = u()(e, d),
            o = Object(c.useState)(Object(f.d)(t)),
            l = i()(o, 2),
            p = l[0],
            m = l[1];
        return p ? s.a.createElement("img", a()({}, r, {
            loading: n ? "lazy" : void 0,
            src: p,
            onError: function () {
                p && 0 === p.indexOf("https://") && p !== t ? m(t) : m(null)
            }
        })) : null
    }
}, function (e, t, n) {
    "use strict";
    var r = n(11),
        a = n.n(r),
        o = n(12),
        i = n.n(o),
        l = n(8),
        u = n.n(l),
        c = n(13),
        s = n.n(c),
        f = n(14),
        d = n.n(f),
        p = n(6),
        m = n.n(p),
        h = n(1),
        g = n.n(h),
        v = n(0),
        y = n.n(v);

    function b(e, t) {
        if (t.length < e) throw new TypeError(e + " argument" + (e > 1 ? "s" : "") + " required, but only " + t.length + " present")
    }

    function w(e) {
        return b(1, arguments), e instanceof Date || "object" == typeof e && "[object Date]" === Object.prototype.toString.call(e)
    }

    function x(e) {
        b(1, arguments);
        var t = Object.prototype.toString.call(e);
        return e instanceof Date || "object" == typeof e && "[object Date]" === t ? new Date(e.getTime()) : "number" == typeof e || "[object Number]" === t ? new Date(e) : ("string" != typeof e && "[object String]" !== t || "undefined" == typeof console || (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"), console.warn((new Error).stack)), new Date(NaN))
    }

    function k(e) {
        if (b(1, arguments), !w(e) && "number" != typeof e) return !1;
        var t = x(e);
        return !isNaN(Number(t))
    }
    var E = {
        lessThanXSeconds: {
            one: "less than a second",
            other: "less than {{count}} seconds"
        },
        xSeconds: {
            one: "1 second",
            other: "{{count}} seconds"
        },
        halfAMinute: "half a minute",
        lessThanXMinutes: {
            one: "less than a minute",
            other: "less than {{count}} minutes"
        },
        xMinutes: {
            one: "1 minute",
            other: "{{count}} minutes"
        },
        aboutXHours: {
            one: "about 1 hour",
            other: "about {{count}} hours"
        },
        xHours: {
            one: "1 hour",
            other: "{{count}} hours"
        },
        xDays: {
            one: "1 day",
            other: "{{count}} days"
        },
        aboutXWeeks: {
            one: "about 1 week",
            other: "about {{count}} weeks"
        },
        xWeeks: {
            one: "1 week",
            other: "{{count}} weeks"
        },
        aboutXMonths: {
            one: "about 1 month",
            other: "about {{count}} months"
        },
        xMonths: {
            one: "1 month",
            other: "{{count}} months"
        },
        aboutXYears: {
            one: "about 1 year",
            other: "about {{count}} years"
        },
        xYears: {
            one: "1 year",
            other: "{{count}} years"
        },
        overXYears: {
            one: "over 1 year",
            other: "over {{count}} years"
        },
        almostXYears: {
            one: "almost 1 year",
            other: "almost {{count}} years"
        }
    },
        C = function (e, t, n) {
            var r, a = E[e];
            return r = "string" == typeof a ? a : 1 === t ? a.one : a.other.replace("{{count}}", t.toString()), null != n && n.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r
        };

    function T(e) {
        return function () {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                n = t.width ? String(t.width) : e.defaultWidth,
                r = e.formats[n] || e.formats[e.defaultWidth];
            return r
        }
    }
    var S = {
        date: T({
            formats: {
                full: "EEEE, MMMM do, y",
                long: "MMMM do, y",
                medium: "MMM d, y",
                short: "MM/dd/yyyy"
            },
            defaultWidth: "full"
        }),
        time: T({
            formats: {
                full: "h:mm:ss a zzzz",
                long: "h:mm:ss a z",
                medium: "h:mm:ss a",
                short: "h:mm a"
            },
            defaultWidth: "full"
        }),
        dateTime: T({
            formats: {
                full: "{{date}} 'at' {{time}}",
                long: "{{date}} 'at' {{time}}",
                medium: "{{date}}, {{time}}",
                short: "{{date}}, {{time}}"
            },
            defaultWidth: "full"
        })
    },
        O = {
            lastWeek: "'last' eeee 'at' p",
            yesterday: "'yesterday at' p",
            today: "'today at' p",
            tomorrow: "'tomorrow at' p",
            nextWeek: "eeee 'at' p",
            other: "P"
        };

    function P(e) {
        return function (t, n) {
            var r, a = n || {};
            if ("formatting" === (a.context ? String(a.context) : "standalone") && e.formattingValues) {
                var o = e.defaultFormattingWidth || e.defaultWidth,
                    i = a.width ? String(a.width) : o;
                r = e.formattingValues[i] || e.formattingValues[o]
            } else {
                var l = e.defaultWidth,
                    u = a.width ? String(a.width) : e.defaultWidth;
                r = e.values[u] || e.values[l]
            }
            return r[e.argumentCallback ? e.argumentCallback(t) : t]
        }
    }

    function _(e) {
        return function (t) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                r = n.width,
                a = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth],
                o = t.match(a);
            if (!o) return null;
            var i, l = o[0],
                u = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth],
                c = Array.isArray(u) ? M(u, (function (e) {
                    return e.test(l)
                })) : j(u, (function (e) {
                    return e.test(l)
                }));
            i = e.valueCallback ? e.valueCallback(c) : c, i = n.valueCallback ? n.valueCallback(i) : i;
            var s = t.slice(l.length);
            return {
                value: i,
                rest: s
            }
        }
    }

    function j(e, t) {
        for (var n in e)
            if (e.hasOwnProperty(n) && t(e[n])) return n
    }

    function M(e, t) {
        for (var n = 0; n < e.length; n++)
            if (t(e[n])) return n
    }
    var N, D = {
        code: "en-US",
        formatDistance: C,
        formatLong: S,
        formatRelative: function (e, t, n, r) {
            return O[e]
        },
        localize: {
            ordinalNumber: function (e, t) {
                var n = Number(e),
                    r = n % 100;
                if (r > 20 || r < 10) switch (r % 10) {
                    case 1:
                        return n + "st";
                    case 2:
                        return n + "nd";
                    case 3:
                        return n + "rd"
                }
                return n + "th"
            },
            era: P({
                values: {
                    narrow: ["B", "A"],
                    abbreviated: ["BC", "AD"],
                    wide: ["Before Christ", "Anno Domini"]
                },
                defaultWidth: "wide"
            }),
            quarter: P({
                values: {
                    narrow: ["1", "2", "3", "4"],
                    abbreviated: ["Q1", "Q2", "Q3", "Q4"],
                    wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
                },
                defaultWidth: "wide",
                argumentCallback: function (e) {
                    return e - 1
                }
            }),
            month: P({
                values: {
                    narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
                    abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                    wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
                },
                defaultWidth: "wide"
            }),
            day: P({
                values: {
                    narrow: ["S", "M", "T", "W", "T", "F", "S"],
                    short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
                    abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                    wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
                },
                defaultWidth: "wide"
            }),
            dayPeriod: P({
                values: {
                    narrow: {
                        am: "a",
                        pm: "p",
                        midnight: "mi",
                        noon: "n",
                        morning: "morning",
                        afternoon: "afternoon",
                        evening: "evening",
                        night: "night"
                    },
                    abbreviated: {
                        am: "AM",
                        pm: "PM",
                        midnight: "midnight",
                        noon: "noon",
                        morning: "morning",
                        afternoon: "afternoon",
                        evening: "evening",
                        night: "night"
                    },
                    wide: {
                        am: "a.m.",
                        pm: "p.m.",
                        midnight: "midnight",
                        noon: "noon",
                        morning: "morning",
                        afternoon: "afternoon",
                        evening: "evening",
                        night: "night"
                    }
                },
                defaultWidth: "wide",
                formattingValues: {
                    narrow: {
                        am: "a",
                        pm: "p",
                        midnight: "mi",
                        noon: "n",
                        morning: "in the morning",
                        afternoon: "in the afternoon",
                        evening: "in the evening",
                        night: "at night"
                    },
                    abbreviated: {
                        am: "AM",
                        pm: "PM",
                        midnight: "midnight",
                        noon: "noon",
                        morning: "in the morning",
                        afternoon: "in the afternoon",
                        evening: "in the evening",
                        night: "at night"
                    },
                    wide: {
                        am: "a.m.",
                        pm: "p.m.",
                        midnight: "midnight",
                        noon: "noon",
                        morning: "in the morning",
                        afternoon: "in the afternoon",
                        evening: "in the evening",
                        night: "at night"
                    }
                },
                defaultFormattingWidth: "wide"
            })
        },
        match: {
            ordinalNumber: (N = {
                matchPattern: /^(\d+)(th|st|nd|rd)?/i,
                parsePattern: /\d+/i,
                valueCallback: function (e) {
                    return parseInt(e, 10)
                }
            }, function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = e.match(N.matchPattern);
                if (!n) return null;
                var r = n[0],
                    a = e.match(N.parsePattern);
                if (!a) return null;
                var o = N.valueCallback ? N.valueCallback(a[0]) : a[0];
                o = t.valueCallback ? t.valueCallback(o) : o;
                var i = e.slice(r.length);
                return {
                    value: o,
                    rest: i
                }
            }),
            era: _({
                matchPatterns: {
                    narrow: /^(b|a)/i,
                    abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
                    wide: /^(before christ|before common era|anno domini|common era)/i
                },
                defaultMatchWidth: "wide",
                parsePatterns: {
                    any: [/^b/i, /^(a|c)/i]
                },
                defaultParseWidth: "any"
            }),
            quarter: _({
                matchPatterns: {
                    narrow: /^[1234]/i,
                    abbreviated: /^q[1234]/i,
                    wide: /^[1234](th|st|nd|rd)? quarter/i
                },
                defaultMatchWidth: "wide",
                parsePatterns: {
                    any: [/1/i, /2/i, /3/i, /4/i]
                },
                defaultParseWidth: "any",
                valueCallback: function (e) {
                    return e + 1
                }
            }),
            month: _({
                matchPatterns: {
                    narrow: /^[jfmasond]/i,
                    abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
                    wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
                },
                defaultMatchWidth: "wide",
                parsePatterns: {
                    narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
                    any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
                },
                defaultParseWidth: "any"
            }),
            day: _({
                matchPatterns: {
                    narrow: /^[smtwf]/i,
                    short: /^(su|mo|tu|we|th|fr|sa)/i,
                    abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
                    wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
                },
                defaultMatchWidth: "wide",
                parsePatterns: {
                    narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
                    any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
                },
                defaultParseWidth: "any"
            }),
            dayPeriod: _({
                matchPatterns: {
                    narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
                    any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
                },
                defaultMatchWidth: "any",
                parsePatterns: {
                    any: {
                        am: /^a/i,
                        pm: /^p/i,
                        midnight: /^mi/i,
                        noon: /^no/i,
                        morning: /morning/i,
                        afternoon: /afternoon/i,
                        evening: /evening/i,
                        night: /night/i
                    }
                },
                defaultParseWidth: "any"
            })
        },
        options: {
            weekStartsOn: 0,
            firstWeekContainsDate: 1
        }
    };

    function z(e) {
        if (null === e || !0 === e || !1 === e) return NaN;
        var t = Number(e);
        return isNaN(t) ? t : t < 0 ? Math.ceil(t) : Math.floor(t)
    }

    function R(e, t) {
        b(2, arguments);
        var n = x(e).getTime(),
            r = z(t);
        return new Date(n + r)
    }

    function L(e, t) {
        b(2, arguments);
        var n = z(t);
        return R(e, -n)
    }

    function F(e) {
        b(1, arguments);
        var t = 1,
            n = x(e),
            r = n.getUTCDay(),
            a = (r < t ? 7 : 0) + r - t;
        return n.setUTCDate(n.getUTCDate() - a), n.setUTCHours(0, 0, 0, 0), n
    }

    function I(e) {
        b(1, arguments);
        var t = x(e),
            n = t.getUTCFullYear(),
            r = new Date(0);
        r.setUTCFullYear(n + 1, 0, 4), r.setUTCHours(0, 0, 0, 0);
        var a = F(r),
            o = new Date(0);
        o.setUTCFullYear(n, 0, 4), o.setUTCHours(0, 0, 0, 0);
        var i = F(o);
        return t.getTime() >= a.getTime() ? n + 1 : t.getTime() >= i.getTime() ? n : n - 1
    }

    function U(e) {
        b(1, arguments);
        var t = I(e),
            n = new Date(0);
        n.setUTCFullYear(t, 0, 4), n.setUTCHours(0, 0, 0, 0);
        var r = F(n);
        return r
    }

    function A(e, t) {
        b(1, arguments);
        var n = t || {},
            r = n.locale,
            a = r && r.options && r.options.weekStartsOn,
            o = null == a ? 0 : z(a),
            i = null == n.weekStartsOn ? o : z(n.weekStartsOn);
        if (!(i >= 0 && i <= 6)) throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
        var l = x(e),
            u = l.getUTCDay(),
            c = (u < i ? 7 : 0) + u - i;
        return l.setUTCDate(l.getUTCDate() - c), l.setUTCHours(0, 0, 0, 0), l
    }

    function B(e, t) {
        b(1, arguments);
        var n = x(e),
            r = n.getUTCFullYear(),
            a = t || {},
            o = a.locale,
            i = o && o.options && o.options.firstWeekContainsDate,
            l = null == i ? 1 : z(i),
            u = null == a.firstWeekContainsDate ? l : z(a.firstWeekContainsDate);
        if (!(u >= 1 && u <= 7)) throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
        var c = new Date(0);
        c.setUTCFullYear(r + 1, 0, u), c.setUTCHours(0, 0, 0, 0);
        var s = A(c, t),
            f = new Date(0);
        f.setUTCFullYear(r, 0, u), f.setUTCHours(0, 0, 0, 0);
        var d = A(f, t);
        return n.getTime() >= s.getTime() ? r + 1 : n.getTime() >= d.getTime() ? r : r - 1
    }

    function H(e, t) {
        b(1, arguments);
        var n = t || {},
            r = n.locale,
            a = r && r.options && r.options.firstWeekContainsDate,
            o = null == a ? 1 : z(a),
            i = null == n.firstWeekContainsDate ? o : z(n.firstWeekContainsDate),
            l = B(e, t),
            u = new Date(0);
        u.setUTCFullYear(l, 0, i), u.setUTCHours(0, 0, 0, 0);
        var c = A(u, t);
        return c
    }

    function W(e, t) {
        for (var n = e < 0 ? "-" : "", r = Math.abs(e).toString(); r.length < t;) r = "0" + r;
        return n + r
    }
    var V = {
        y: function (e, t) {
            var n = e.getUTCFullYear(),
                r = n > 0 ? n : 1 - n;
            return W("yy" === t ? r % 100 : r, t.length)
        },
        M: function (e, t) {
            var n = e.getUTCMonth();
            return "M" === t ? String(n + 1) : W(n + 1, 2)
        },
        d: function (e, t) {
            return W(e.getUTCDate(), t.length)
        },
        a: function (e, t) {
            var n = e.getUTCHours() / 12 >= 1 ? "pm" : "am";
            switch (t) {
                case "a":
                case "aa":
                    return n.toUpperCase();
                case "aaa":
                    return n;
                case "aaaaa":
                    return n[0];
                case "aaaa":
                default:
                    return "am" === n ? "a.m." : "p.m."
            }
        },
        h: function (e, t) {
            return W(e.getUTCHours() % 12 || 12, t.length)
        },
        H: function (e, t) {
            return W(e.getUTCHours(), t.length)
        },
        m: function (e, t) {
            return W(e.getUTCMinutes(), t.length)
        },
        s: function (e, t) {
            return W(e.getUTCSeconds(), t.length)
        },
        S: function (e, t) {
            var n = t.length,
                r = e.getUTCMilliseconds();
            return W(Math.floor(r * Math.pow(10, n - 3)), t.length)
        }
    },
        Q = "midnight",
        q = "noon",
        $ = "morning",
        Y = "afternoon",
        K = "evening",
        G = "night";

    function X(e, t) {
        var n = e > 0 ? "-" : "+",
            r = Math.abs(e),
            a = Math.floor(r / 60),
            o = r % 60;
        if (0 === o) return n + String(a);
        var i = t || "";
        return n + String(a) + i + W(o, 2)
    }

    function Z(e, t) {
        return e % 60 == 0 ? (e > 0 ? "-" : "+") + W(Math.abs(e) / 60, 2) : J(e, t)
    }

    function J(e, t) {
        var n = t || "",
            r = e > 0 ? "-" : "+",
            a = Math.abs(e);
        return r + W(Math.floor(a / 60), 2) + n + W(a % 60, 2)
    }
    var ee = {
        G: function (e, t, n) {
            var r = e.getUTCFullYear() > 0 ? 1 : 0;
            switch (t) {
                case "G":
                case "GG":
                case "GGG":
                    return n.era(r, {
                        width: "abbreviated"
                    });
                case "GGGGG":
                    return n.era(r, {
                        width: "narrow"
                    });
                case "GGGG":
                default:
                    return n.era(r, {
                        width: "wide"
                    })
            }
        },
        y: function (e, t, n) {
            if ("yo" === t) {
                var r = e.getUTCFullYear(),
                    a = r > 0 ? r : 1 - r;
                return n.ordinalNumber(a, {
                    unit: "year"
                })
            }
            return V.y(e, t)
        },
        Y: function (e, t, n, r) {
            var a = B(e, r),
                o = a > 0 ? a : 1 - a;
            return "YY" === t ? W(o % 100, 2) : "Yo" === t ? n.ordinalNumber(o, {
                unit: "year"
            }) : W(o, t.length)
        },
        R: function (e, t) {
            return W(I(e), t.length)
        },
        u: function (e, t) {
            return W(e.getUTCFullYear(), t.length)
        },
        Q: function (e, t, n) {
            var r = Math.ceil((e.getUTCMonth() + 1) / 3);
            switch (t) {
                case "Q":
                    return String(r);
                case "QQ":
                    return W(r, 2);
                case "Qo":
                    return n.ordinalNumber(r, {
                        unit: "quarter"
                    });
                case "QQQ":
                    return n.quarter(r, {
                        width: "abbreviated",
                        context: "formatting"
                    });
                case "QQQQQ":
                    return n.quarter(r, {
                        width: "narrow",
                        context: "formatting"
                    });
                case "QQQQ":
                default:
                    return n.quarter(r, {
                        width: "wide",
                        context: "formatting"
                    })
            }
        },
        q: function (e, t, n) {
            var r = Math.ceil((e.getUTCMonth() + 1) / 3);
            switch (t) {
                case "q":
                    return String(r);
                case "qq":
                    return W(r, 2);
                case "qo":
                    return n.ordinalNumber(r, {
                        unit: "quarter"
                    });
                case "qqq":
                    return n.quarter(r, {
                        width: "abbreviated",
                        context: "standalone"
                    });
                case "qqqqq":
                    return n.quarter(r, {
                        width: "narrow",
                        context: "standalone"
                    });
                case "qqqq":
                default:
                    return n.quarter(r, {
                        width: "wide",
                        context: "standalone"
                    })
            }
        },
        M: function (e, t, n) {
            var r = e.getUTCMonth();
            switch (t) {
                case "M":
                case "MM":
                    return V.M(e, t);
                case "Mo":
                    return n.ordinalNumber(r + 1, {
                        unit: "month"
                    });
                case "MMM":
                    return n.month(r, {
                        width: "abbreviated",
                        context: "formatting"
                    });
                case "MMMMM":
                    return n.month(r, {
                        width: "narrow",
                        context: "formatting"
                    });
                case "MMMM":
                default:
                    return n.month(r, {
                        width: "wide",
                        context: "formatting"
                    })
            }
        },
        L: function (e, t, n) {
            var r = e.getUTCMonth();
            switch (t) {
                case "L":
                    return String(r + 1);
                case "LL":
                    return W(r + 1, 2);
                case "Lo":
                    return n.ordinalNumber(r + 1, {
                        unit: "month"
                    });
                case "LLL":
                    return n.month(r, {
                        width: "abbreviated",
                        context: "standalone"
                    });
                case "LLLLL":
                    return n.month(r, {
                        width: "narrow",
                        context: "standalone"
                    });
                case "LLLL":
                default:
                    return n.month(r, {
                        width: "wide",
                        context: "standalone"
                    })
            }
        },
        w: function (e, t, n, r) {
            var a = function (e, t) {
                b(1, arguments);
                var n = x(e),
                    r = A(n, t).getTime() - H(n, t).getTime();
                return Math.round(r / 6048e5) + 1
            }(e, r);
            return "wo" === t ? n.ordinalNumber(a, {
                unit: "week"
            }) : W(a, t.length)
        },
        I: function (e, t, n) {
            var r = function (e) {
                b(1, arguments);
                var t = x(e),
                    n = F(t).getTime() - U(t).getTime();
                return Math.round(n / 6048e5) + 1
            }(e);
            return "Io" === t ? n.ordinalNumber(r, {
                unit: "week"
            }) : W(r, t.length)
        },
        d: function (e, t, n) {
            return "do" === t ? n.ordinalNumber(e.getUTCDate(), {
                unit: "date"
            }) : V.d(e, t)
        },
        D: function (e, t, n) {
            var r = function (e) {
                b(1, arguments);
                var t = x(e),
                    n = t.getTime();
                t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
                var r = t.getTime(),
                    a = n - r;
                return Math.floor(a / 864e5) + 1
            }(e);
            return "Do" === t ? n.ordinalNumber(r, {
                unit: "dayOfYear"
            }) : W(r, t.length)
        },
        E: function (e, t, n) {
            var r = e.getUTCDay();
            switch (t) {
                case "E":
                case "EE":
                case "EEE":
                    return n.day(r, {
                        width: "abbreviated",
                        context: "formatting"
                    });
                case "EEEEE":
                    return n.day(r, {
                        width: "narrow",
                        context: "formatting"
                    });
                case "EEEEEE":
                    return n.day(r, {
                        width: "short",
                        context: "formatting"
                    });
                case "EEEE":
                default:
                    return n.day(r, {
                        width: "wide",
                        context: "formatting"
                    })
            }
        },
        e: function (e, t, n, r) {
            var a = e.getUTCDay(),
                o = (a - r.weekStartsOn + 8) % 7 || 7;
            switch (t) {
                case "e":
                    return String(o);
                case "ee":
                    return W(o, 2);
                case "eo":
                    return n.ordinalNumber(o, {
                        unit: "day"
                    });
                case "eee":
                    return n.day(a, {
                        width: "abbreviated",
                        context: "formatting"
                    });
                case "eeeee":
                    return n.day(a, {
                        width: "narrow",
                        context: "formatting"
                    });
                case "eeeeee":
                    return n.day(a, {
                        width: "short",
                        context: "formatting"
                    });
                case "eeee":
                default:
                    return n.day(a, {
                        width: "wide",
                        context: "formatting"
                    })
            }
        },
        c: function (e, t, n, r) {
            var a = e.getUTCDay(),
                o = (a - r.weekStartsOn + 8) % 7 || 7;
            switch (t) {
                case "c":
                    return String(o);
                case "cc":
                    return W(o, t.length);
                case "co":
                    return n.ordinalNumber(o, {
                        unit: "day"
                    });
                case "ccc":
                    return n.day(a, {
                        width: "abbreviated",
                        context: "standalone"
                    });
                case "ccccc":
                    return n.day(a, {
                        width: "narrow",
                        context: "standalone"
                    });
                case "cccccc":
                    return n.day(a, {
                        width: "short",
                        context: "standalone"
                    });
                case "cccc":
                default:
                    return n.day(a, {
                        width: "wide",
                        context: "standalone"
                    })
            }
        },
        i: function (e, t, n) {
            var r = e.getUTCDay(),
                a = 0 === r ? 7 : r;
            switch (t) {
                case "i":
                    return String(a);
                case "ii":
                    return W(a, t.length);
                case "io":
                    return n.ordinalNumber(a, {
                        unit: "day"
                    });
                case "iii":
                    return n.day(r, {
                        width: "abbreviated",
                        context: "formatting"
                    });
                case "iiiii":
                    return n.day(r, {
                        width: "narrow",
                        context: "formatting"
                    });
                case "iiiiii":
                    return n.day(r, {
                        width: "short",
                        context: "formatting"
                    });
                case "iiii":
                default:
                    return n.day(r, {
                        width: "wide",
                        context: "formatting"
                    })
            }
        },
        a: function (e, t, n) {
            var r = e.getUTCHours() / 12 >= 1 ? "pm" : "am";
            switch (t) {
                case "a":
                case "aa":
                    return n.dayPeriod(r, {
                        width: "abbreviated",
                        context: "formatting"
                    });
                case "aaa":
                    return n.dayPeriod(r, {
                        width: "abbreviated",
                        context: "formatting"
                    }).toLowerCase();
                case "aaaaa":
                    return n.dayPeriod(r, {
                        width: "narrow",
                        context: "formatting"
                    });
                case "aaaa":
                default:
                    return n.dayPeriod(r, {
                        width: "wide",
                        context: "formatting"
                    })
            }
        },
        b: function (e, t, n) {
            var r, a = e.getUTCHours();
            switch (r = 12 === a ? q : 0 === a ? Q : a / 12 >= 1 ? "pm" : "am", t) {
                case "b":
                case "bb":
                    return n.dayPeriod(r, {
                        width: "abbreviated",
                        context: "formatting"
                    });
                case "bbb":
                    return n.dayPeriod(r, {
                        width: "abbreviated",
                        context: "formatting"
                    }).toLowerCase();
                case "bbbbb":
                    return n.dayPeriod(r, {
                        width: "narrow",
                        context: "formatting"
                    });
                case "bbbb":
                default:
                    return n.dayPeriod(r, {
                        width: "wide",
                        context: "formatting"
                    })
            }
        },
        B: function (e, t, n) {
            var r, a = e.getUTCHours();
            switch (r = a >= 17 ? K : a >= 12 ? Y : a >= 4 ? $ : G, t) {
                case "B":
                case "BB":
                case "BBB":
                    return n.dayPeriod(r, {
                        width: "abbreviated",
                        context: "formatting"
                    });
                case "BBBBB":
                    return n.dayPeriod(r, {
                        width: "narrow",
                        context: "formatting"
                    });
                case "BBBB":
                default:
                    return n.dayPeriod(r, {
                        width: "wide",
                        context: "formatting"
                    })
            }
        },
        h: function (e, t, n) {
            if ("ho" === t) {
                var r = e.getUTCHours() % 12;
                return 0 === r && (r = 12), n.ordinalNumber(r, {
                    unit: "hour"
                })
            }
            return V.h(e, t)
        },
        H: function (e, t, n) {
            return "Ho" === t ? n.ordinalNumber(e.getUTCHours(), {
                unit: "hour"
            }) : V.H(e, t)
        },
        K: function (e, t, n) {
            var r = e.getUTCHours() % 12;
            return "Ko" === t ? n.ordinalNumber(r, {
                unit: "hour"
            }) : W(r, t.length)
        },
        k: function (e, t, n) {
            var r = e.getUTCHours();
            return 0 === r && (r = 24), "ko" === t ? n.ordinalNumber(r, {
                unit: "hour"
            }) : W(r, t.length)
        },
        m: function (e, t, n) {
            return "mo" === t ? n.ordinalNumber(e.getUTCMinutes(), {
                unit: "minute"
            }) : V.m(e, t)
        },
        s: function (e, t, n) {
            return "so" === t ? n.ordinalNumber(e.getUTCSeconds(), {
                unit: "second"
            }) : V.s(e, t)
        },
        S: function (e, t) {
            return V.S(e, t)
        },
        X: function (e, t, n, r) {
            var a = (r._originalDate || e).getTimezoneOffset();
            if (0 === a) return "Z";
            switch (t) {
                case "X":
                    return Z(a);
                case "XXXX":
                case "XX":
                    return J(a);
                case "XXXXX":
                case "XXX":
                default:
                    return J(a, ":")
            }
        },
        x: function (e, t, n, r) {
            var a = (r._originalDate || e).getTimezoneOffset();
            switch (t) {
                case "x":
                    return Z(a);
                case "xxxx":
                case "xx":
                    return J(a);
                case "xxxxx":
                case "xxx":
                default:
                    return J(a, ":")
            }
        },
        O: function (e, t, n, r) {
            var a = (r._originalDate || e).getTimezoneOffset();
            switch (t) {
                case "O":
                case "OO":
                case "OOO":
                    return "GMT" + X(a, ":");
                case "OOOO":
                default:
                    return "GMT" + J(a, ":")
            }
        },
        z: function (e, t, n, r) {
            var a = (r._originalDate || e).getTimezoneOffset();
            switch (t) {
                case "z":
                case "zz":
                case "zzz":
                    return "GMT" + X(a, ":");
                case "zzzz":
                default:
                    return "GMT" + J(a, ":")
            }
        },
        t: function (e, t, n, r) {
            var a = r._originalDate || e;
            return W(Math.floor(a.getTime() / 1e3), t.length)
        },
        T: function (e, t, n, r) {
            return W((r._originalDate || e).getTime(), t.length)
        }
    };

    function te(e, t) {
        switch (e) {
            case "P":
                return t.date({
                    width: "short"
                });
            case "PP":
                return t.date({
                    width: "medium"
                });
            case "PPP":
                return t.date({
                    width: "long"
                });
            case "PPPP":
            default:
                return t.date({
                    width: "full"
                })
        }
    }

    function ne(e, t) {
        switch (e) {
            case "p":
                return t.time({
                    width: "short"
                });
            case "pp":
                return t.time({
                    width: "medium"
                });
            case "ppp":
                return t.time({
                    width: "long"
                });
            case "pppp":
            default:
                return t.time({
                    width: "full"
                })
        }
    }
    var re = {
        p: ne,
        P: function (e, t) {
            var n, r = e.match(/(P+)(p+)?/) || [],
                a = r[1],
                o = r[2];
            if (!o) return te(e, t);
            switch (a) {
                case "P":
                    n = t.dateTime({
                        width: "short"
                    });
                    break;
                case "PP":
                    n = t.dateTime({
                        width: "medium"
                    });
                    break;
                case "PPP":
                    n = t.dateTime({
                        width: "long"
                    });
                    break;
                case "PPPP":
                default:
                    n = t.dateTime({
                        width: "full"
                    })
            }
            return n.replace("{{date}}", te(a, t)).replace("{{time}}", ne(o, t))
        }
    };

    function ae(e) {
        var t = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
        return t.setUTCFullYear(e.getFullYear()), e.getTime() - t.getTime()
    }
    var oe = ["D", "DD"],
        ie = ["YY", "YYYY"];

    function le(e) {
        return -1 !== oe.indexOf(e)
    }

    function ue(e) {
        return -1 !== ie.indexOf(e)
    }

    function ce(e, t, n) {
        if ("YYYY" === e) throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t, "`) for formatting years to the input `").concat(n, "`; see: https://git.io/fxCyr"));
        if ("YY" === e) throw new RangeError("Use `yy` instead of `YY` (in `".concat(t, "`) for formatting years to the input `").concat(n, "`; see: https://git.io/fxCyr"));
        if ("D" === e) throw new RangeError("Use `d` instead of `D` (in `".concat(t, "`) for formatting days of the month to the input `").concat(n, "`; see: https://git.io/fxCyr"));
        if ("DD" === e) throw new RangeError("Use `dd` instead of `DD` (in `".concat(t, "`) for formatting days of the month to the input `").concat(n, "`; see: https://git.io/fxCyr"))
    }
    var se = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
        fe = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
        de = /^'([^]*?)'?$/,
        pe = /''/g,
        me = /[a-zA-Z]/;

    function he(e, t, n) {
        b(2, arguments);
        var r = String(t),
            a = n || {},
            o = a.locale || D,
            i = o.options && o.options.firstWeekContainsDate,
            l = null == i ? 1 : z(i),
            u = null == a.firstWeekContainsDate ? l : z(a.firstWeekContainsDate);
        if (!(u >= 1 && u <= 7)) throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
        var c = o.options && o.options.weekStartsOn,
            s = null == c ? 0 : z(c),
            f = null == a.weekStartsOn ? s : z(a.weekStartsOn);
        if (!(f >= 0 && f <= 6)) throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
        if (!o.localize) throw new RangeError("locale must contain localize property");
        if (!o.formatLong) throw new RangeError("locale must contain formatLong property");
        var d = x(e);
        if (!k(d)) throw new RangeError("Invalid time value");
        var p = ae(d),
            m = L(d, p),
            h = {
                firstWeekContainsDate: u,
                weekStartsOn: f,
                locale: o,
                _originalDate: d
            },
            g = r.match(fe).map((function (e) {
                var t = e[0];
                return "p" === t || "P" === t ? (0, re[t])(e, o.formatLong, h) : e
            })).join("").match(se).map((function (n) {
                if ("''" === n) return "'";
                var r = n[0];
                if ("'" === r) return ge(n);
                var i = ee[r];
                if (i) return !a.useAdditionalWeekYearTokens && ue(n) && ce(n, t, e), !a.useAdditionalDayOfYearTokens && le(n) && ce(n, t, e), i(m, n, o.localize, h);
                if (r.match(me)) throw new RangeError("Format string contains an unescaped latin alphabet character `" + r + "`");
                return n
            })).join("");
        return g
    }

    function ge(e) {
        return e.match(de)[1].replace(pe, "'")
    }

    function ve(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function ye(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? ve(Object(n), !0).forEach((function (t) {
                g()(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ve(Object(n)).forEach((function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }

    function be(e) {
        var t = function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () { }))), !0
            } catch (e) {
                return !1
            }
        }();
        return function () {
            var n, r = m()(e);
            if (t) {
                var a = m()(this).constructor;
                n = Reflect.construct(r, arguments, a)
            } else n = r.apply(this, arguments);
            return d()(this, n)
        }
    }
    n.d(t, "b", (function () {
        return we
    }));
    var we = function (e) {
        var t = new Date(e),
            n = new Date,
            r = Math.floor((n.getTime() - t.getTime()) / 1e3);
        return r < 0 ? "" : r >= 604800 ? t.toString().substring(4, 10) : r >= 86400 ? "".concat(Math.floor(r / 86400), "d") : r >= 3600 ? "".concat(Math.floor(r / 3600), "h") : r >= 60 ? "".concat(Math.floor(r / 60), "m") : "".concat(r, "s")
    };

    function xe(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "time-ago",
            n = t || "time-ago";
        return "time-ago" === n ? we(e) : he(new Date(e), t)
    }
    var ke = function (e) {
        s()(n, e);
        var t = be(n);

        function n(e) {
            var r;
            return a()(this, n), r = t.call(this, e), g()(u()(r), "interval", void 0), g()(u()(r), "refreshTime", void 0), r.state = {
                time: xe(e.createdAt, e.dateFormat)
            }, r.interval = null, r.refreshTime = 1e3, r
        }
        return i()(n, [{
            key: "componentDidMount",
            value: function () {
                "time-ago" === this.props.dateFormat && this.refreshRate()
            }
        }, {
            key: "componentDidUpdate",
            value: function (e) {
                e.dateFormat !== this.props.dateFormat && this.setState({
                    time: xe(this.props.createdAt, this.props.dateFormat)
                })
            }
        }, {
            key: "componentWillUnmount",
            value: function () {
                "time-ago" === this.props.dateFormat && clearInterval(this.interval)
            }
        }, {
            key: "refreshRate",
            value: function () {
                switch (this.state.time.replace(/[0-9]/g, "")) {
                    case "s":
                        this.refreshTime = 1e3;
                        break;
                    case "m":
                        this.refreshTime = 6e4;
                        break;
                    case "h":
                        this.refreshTime = 36e5;
                        break;
                    case "d":
                        this.refreshTime = 216e6;
                        break;
                    default:
                        this.refreshTime = 31104e7
                }
                this.interval = setInterval(this.updateDisplayedTime.bind(this), this.refreshTime)
            }
        }, {
            key: "updateDisplayedTime",
            value: function () {
                var e = this.props,
                    t = e.createdAt,
                    n = e.dateFormat,
                    r = void 0 === n ? "time-ago" : n;
                this.setState({
                    time: xe(t, r)
                })
            }
        }, {
            key: "render",
            value: function () {
                var e = this.state.time;
                return e ? y.a.createElement("span", {
                    className: "card-time",
                    style: ye({
                        lineHeight: "normal",
                        whiteSpace: "nowrap"
                    }, this.props.style || {})
                }, e) : null
            }
        }]), n
    }(v.Component);
    t.a = ke
}, function (e, t, n) {
    "use strict";
    e.exports = function (e) {
        var t = [];
        return t.toString = function () {
            return this.map((function (t) {
                var n = function (e, t) {
                    var n = e[1] || "",
                        r = e[3];
                    if (!r) return n;
                    if (t && "function" == typeof btoa) {
                        var a = (i = r, l = btoa(unescape(encodeURIComponent(JSON.stringify(i)))), u = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(l), "/*# ".concat(u, " */")),
                            o = r.sources.map((function (e) {
                                return "/*# sourceURL=".concat(r.sourceRoot).concat(e, " */")
                            }));
                        return [n].concat(o).concat([a]).join("\n")
                    }
                    var i, l, u;
                    return [n].join("\n")
                }(t, e);
                return t[2] ? "@media ".concat(t[2], "{").concat(n, "}") : n
            })).join("")
        }, t.i = function (e, n) {
            "string" == typeof e && (e = [
                [null, e, ""]
            ]);
            for (var r = {}, a = 0; a < this.length; a++) {
                var o = this[a][0];
                null != o && (r[o] = !0)
            }
            for (var i = 0; i < e.length; i++) {
                var l = e[i];
                null != l[0] && r[l[0]] || (n && !l[2] ? l[2] = n : n && (l[2] = "(".concat(l[2], ") and (").concat(n, ")")), t.push(l))
            }
        }, t
    }
}, function (e, t, n) {
    var r, a, o = n(38),
        i = {},
        l = (r = function () {
            return window && document && document.all && !window.atob
        }, function () {
            return void 0 === a && (a = r.apply(this, arguments)), a
        }),
        u = function (e) {
            var t = {};
            return function (n) {
                if (void 0 === t[n]) {
                    var r = e.call(this, n);
                    if (r instanceof window.HTMLIFrameElement) try {
                        r = r.contentDocument.head
                    } catch (e) {
                        r = null
                    }
                    t[n] = r
                }
                return t[n]
            }
        }((function (e) {
            return document.querySelector(e)
        })),
        c = null,
        s = 0,
        f = n(65);

    function d(e, t) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n],
                a = i[r.id];
            if (a) {
                a.refs++;
                for (var o = 0; o < a.parts.length; o++) a.parts[o](r.parts[o]);
                for (; o < r.parts.length; o++) a.parts.push(y(r.parts[o], t))
            } else {
                var l = [];
                for (o = 0; o < r.parts.length; o++) l.push(y(r.parts[o], t));
                i[r.id] = {
                    id: r.id,
                    refs: 1,
                    parts: l
                }
            }
        }
    }

    function p(e, t) {
        for (var n = [], r = {}, a = 0; a < e.length; a++) {
            var o = e[a],
                i = t.base ? o[0] + t.base : o[0],
                l = {
                    css: o[1],
                    media: o[2],
                    sourceMap: o[3]
                };
            r[i] ? r[i].parts.push(l) : n.push(r[i] = {
                id: i,
                parts: [l]
            })
        }
        return n
    }

    function m(e, t) {
        if (!u(e.insertInto)) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
        o.styleElements.push(t)
    }

    function h(e) {
        var t = o.styleElements.indexOf(e);
        o.styleElements.splice(t, 1)
    }

    function g(e) {
        var t = document.createElement("style");
        return e.attrs.type = "text/css", v(t, e.attrs), m(e, t), t
    }

    function v(e, t) {
        Object.keys(t).forEach((function (n) {
            e.setAttribute(n, t[n])
        }))
    }

    function y(e, t) {
        var n, r, a, o;
        if (t.transform && e.css) {
            if (!(o = t.transform(e.css))) return function () { };
            e.css = o
        }
        if (t.singleton) {
            var i = s++;
            n = c || (c = g(t)), r = x.bind(null, n, i, !1), a = x.bind(null, n, i, !0)
        } else e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = function (e) {
            var t = document.createElement("link");
            return e.attrs.type = "text/css", e.attrs.rel = "stylesheet", v(t, e.attrs), m(e, t), t
        }(t), r = E.bind(null, n, t), a = function () {
            h(n), n.href && URL.revokeObjectURL(n.href)
        }) : (n = g(t), r = k.bind(null, n), a = function () {
            h(n)
        });
        return r(e),
            function (t) {
                if (t) {
                    if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
                    r(e = t)
                } else a()
            }
    }
    e.exports = function (e, t) {
        if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
        (t = t || {}).attrs = "object" == typeof t.attrs ? t.attrs : {}, t.singleton || (t.singleton = l()), t.insertInto || (t.insertInto = "head"), t.insertAt || (t.insertAt = "bottom");
        var n = p(e, t);
        return d(n, t),
            function (e) {
                for (var r = [], a = 0; a < n.length; a++) {
                    var o = n[a];
                    (l = i[o.id]).refs--, r.push(l)
                }
                e && d(p(e, t), t);
                for (a = 0; a < r.length; a++) {
                    var l;
                    if (0 === (l = r[a]).refs) {
                        for (var u = 0; u < l.parts.length; u++) l.parts[u]();
                        delete i[l.id]
                    }
                }
            }
    };
    var b, w = (b = [], function (e, t) {
        return b[e] = t, b.filter(Boolean).join("\n")
    });

    function x(e, t, n, r) {
        var a = n ? "" : r.css;
        if (e.styleSheet) e.styleSheet.cssText = w(t, a);
        else {
            var o = document.createTextNode(a),
                i = e.childNodes;
            i[t] && e.removeChild(i[t]), i.length ? e.insertBefore(o, i[t]) : e.appendChild(o)
        }
    }

    function k(e, t) {
        var n = t.css,
            r = t.media;
        if (r && e.setAttribute("media", r), e.styleSheet) e.styleSheet.cssText = n;
        else {
            for (; e.firstChild;) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(n))
        }
    }

    function E(e, t, n) {
        var r = n.css,
            a = n.sourceMap,
            o = void 0 === t.convertToAbsoluteUrls && a;
        (t.convertToAbsoluteUrls || o) && (r = f(r)), a && (r += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(a)))) + " */");
        var i = new Blob([r], {
            type: "text/css"
        }),
            l = e.href;
        e.href = URL.createObjectURL(i), l && URL.revokeObjectURL(l)
    }
}, function (e, t, n) {
    var r = n(60);
    e.exports = function (e, t) {
        if (null == e) return {};
        var n, a, o = r(e, t);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            for (a = 0; a < i.length; a++) n = i[a], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
        }
        return o
    }, e.exports.__esModule = !0, e.exports.default = e.exports
}, function (e, t, n) {
    "use strict";
    var r = n(1),
        a = n.n(r),
        o = n(0),
        i = n.n(o);
    var l = function (e) {
        return i.a.createElement("svg", Object.assign({
            width: "27",
            height: "30",
            viewBox: "0 0 27 30",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
        }, e), i.a.createElement("path", {
            d: "M0 15V4C0 1.73524 2.41345 0.287171 4.41176 1.35294L25.0368 12.3529C27.1544 13.4824 27.1544 16.5176 25.0368 17.6471L4.41177 28.6471C2.41345 29.7128 0 28.2648 0 26V15Z",
            fill: "white"
        }))
    },
        u = n(19);
    n(66);

    function c(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function s(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? c(Object(n), !0).forEach((function (t) {
                a()(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach((function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }
    t.a = function (e) {
        var t = e.imageRef,
            n = e.imageUrl,
            r = e.imageClick,
            a = e.lazy,
            o = e.radius,
            c = e.styles;
        return i.a.createElement("button", {
            ref: t,
            className: "rss-widget-video-button",
            type: "button",
            onClick: function () {
                return r(t)
            }
        }, i.a.createElement("div", {
            className: "rss-widget-play-arrow-box"
        }, i.a.createElement(l, {
            className: "rss-widget-play-arrow"
        })), i.a.createElement(u.a, {
            className: "rss-widget-video-image",
            src: n,
            referrerPolicy: "no-referrer",
            style: s({
                borderRadius: o
            }, c),
            isLazy: a
        }))
    }
}, function (e, t, n) {
    "use strict";
    var r = n(2),
        a = n.n(r),
        o = n(3);
    t.a = function (e) {
        if (Object(o.i)(e)) {
            return {
                onVideoClick: function (t) {
                    var n = e.replace(/src="([a-zA-Z0-9- @#'"`.:_*/%+!,\(\))]+)?"/i, 'src="$1?autoplay=1"'),
                        r = (n = n.replace(/allow="([a-zA-Z0-9- ;]+)?"/i, 'allow="$1; autoplay; accelerometer;"')).match(/<div style=[^]+?<\/div>/);
                    n = a()(r, 1)[0];
                    var o = document.createElement("div");
                    o.innerHTML = n, t.current.replaceWith(o)
                }
            }
        }
        return {
            onVideoClick: null
        }
    }
}, function (e, t, n) {
    "use strict";
    var r = n(2),
        a = n.n(r);

    function o(e) {
        var t = {};
        return document.cookie.split(";").forEach((function (e) {
            var n = e.split("="),
                r = a()(n, 2),
                o = r[0],
                i = r[1];
            t[o.trim()] = i
        })), t[e]
    }
    var i = function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            n = o("token"),
            r = "".concat(e, "?");
        return r += Object.entries(t).map((function (e) {
            var t = a()(e, 2),
                n = t[0],
                r = t[1];
            return "".concat(n, "=").concat(r)
        })).join("&"), fetch(r, {
            method: "GET",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                Authorization: n ? "Bearer ".concat(n) : "",
                referer: document.location && document.location.href,
                Parent: document.location && document.location.ancestorOrigins && document.location.ancestorOrigins[0] || ""
            }
        }).then((function (e) {
            return e.json()
        }))
    };
    t.a = function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        return i("".concat(t, "/api/widget/").concat(e.type, "/").concat(e.id))
    }
}, function (e, t, n) {
    "use strict";
    var r = n(0),
        a = n.n(r),
        o = {
            Roboto: "https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap",
            "Open Sans": "https://fonts.googleapis.com/css?family=Open+Sans:400,600&display=swap",
            Lato: "https://fonts.googleapis.com/css?family=Lato:400,600&display=swap"
        };
    t.a = function (e, t) {
        a.a.useEffect((function () {
            var n = t && t.contentDocument ? t.contentDocument.head : document.head;
            if (n && e && e in o) {
                var r = document.createElement("link");
                r.type = "text/css", r.rel = "stylesheet", r.href = o[e], n.appendChild(r)
            }
        }), [t, e])
    }
}, function (e, t, n) {
    "use strict";
    var r = n(1),
        a = n.n(r),
        o = n(2),
        i = n.n(o),
        l = n(0),
        u = n.n(l);

    function c(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function s(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? c(Object(n), !0).forEach((function (t) {
                a()(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach((function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }
    t.a = function (e, t) {
        var n = u.a.useState(e),
            r = i()(n, 2),
            a = r[0],
            o = r[1];
        return u.a.useEffect((function () {
            o(e)
        }), [e]), u.a.useEffect((function () {
            window["$rssapp-".concat(t.type, ":").concat(t.id, "_utils")] || (window["$rssapp-".concat(t.type, ":").concat(t.id, "_utils")] = []);
            var n = {
                setState: o,
                reload: t.reload,
                preview: t.preview
            };
            window["$rssapp-".concat(t.type, ":").concat(t.id, "_utils")].push(n);
            var r = function (e) {
                window["$rssapp-".concat(t.type, ":").concat(t.id, "_utils")].forEach((function (n) {
                    return t.preview ? n.preview && n.setState(e) : n.setState(e)
                }))
            };
            return window["$rssapp-".concat(t.type, ":").concat(t.id)] = {
                reload: function () {
                    window["$rssapp-".concat(t.type, ":").concat(t.id, "_utils")].forEach((function (e) {
                        return e.reload()
                    }))
                },
                setSettings: function (t, n) {
                    var o = "function" == typeof t ? t(a.settings) : t,
                        i = s(s({}, a || e), {}, {
                            settings: o
                        });
                    n && (i.feed = n), r(i)
                },
                setFeed: function (e) {
                    r(s(s({}, a), {}, {
                        feed: e
                    }))
                },
                reset: function () {
                    r(e)
                },
                resize: function () {
                    t.resizeRef && t.resizeRef.current && t.resizeRef.current()
                }
            },
                function () {
                    window["$rssapp-".concat(t.type, ":").concat(t.id, "_utils")] = window["$rssapp-".concat(t.type, ":").concat(t.id, "_utils")].filter((function (e) {
                        return e !== n
                    }))
                }
        }), [a, t, e]), a
    }
}, function (e, t, n) {
    var r = n(52),
        a = n(53),
        o = n(34),
        i = n(54);
    e.exports = function (e) {
        return r(e) || a(e) || o(e) || i()
    }, e.exports.__esModule = !0, e.exports.default = e.exports
}, function (e, t) {
    function n(t, r) {
        return e.exports = n = Object.setPrototypeOf || function (e, t) {
            return e.__proto__ = t, e
        }, e.exports.__esModule = !0, e.exports.default = e.exports, n(t, r)
    }
    e.exports = n, e.exports.__esModule = !0, e.exports.default = e.exports
}, , function (e, t, n) {
    "use strict";
    var r = n(0),
        a = n.n(r);
    n(68);
    t.a = function (e) {
        var t, n = e.showHeader,
            r = e.showTitle,
            o = e.title,
            i = e.titleFontSize,
            l = e.titleColor,
            u = e.titleBackground,
            c = e.showHeaderDescription,
            s = e.description,
            f = e.descriptionSize,
            d = e.descriptionColor,
            p = e.showHeaderIcon,
            m = e.icon,
            h = e.headerIconAlign,
            g = e.headerIconRounded,
            v = e.showHeaderBackground,
            y = e.headerBackgroundColor,
            b = e.headerBackgroundPadding,
            w = e.showHeaderBackgroundBorder,
            x = e.headerBackgroundBorderRadius,
            k = e.headerBackgroundBorderColor,
            E = e.headerAlign,
            C = e.headerBottomPadding,
            T = e.titlePaddingBottom,
            S = e.widthSize,
            O = function (e) {
                return "right" === e ? "row-reverse" : "center" === e ? "column" : "row"
            },
            P = function (e) {
                return "right" === e ? "flex-end" : "center" === e ? "center" : "flex-start"
            },
            _ = function (e) {
                return "center" === e && "right" === E ? "flex-end" : "center" === e && "left" === E ? "flex-start" : "center" === e && "center" === E ? "center" : "flex-start"
            },
            j = r || p || c || v ? C || T : 0;
        return n ? a.a.createElement("div", {
            className: S ? "rssapp-header-wrapper rssapp-header-container" : "rssapp-header-container",
            style: v ? {
                maxWidth: S || "100%",
                backgroundColor: y || u,
                padding: b,
                borderRadius: v ? x : "unset",
                border: w ? "1px solid ".concat(k) : "unset",
                marginBottom: j,
                flexDirection: O(h),
                alignItems: _(h)
            } : {
                maxWidth: S || "100%",
                marginBottom: j,
                flexDirection: O(h),
                alignItems: _(h)
            }
        }, p && ("center" === h || "center" !== E || !r) && a.a.createElement("div", {
            className: "rssapp-header-icon-box",
            style: {
                flexDirection: O(h),
                alignSelf: _(h)
            }
        }, m ? a.a.createElement("img", {
            className: "rssapp-header-icon",
            src: m,
            alt: o,
            style: {
                borderRadius: g ? "50%" : "unset",
                marginRight: "row" === O(h) ? "16px" : "unset",
                marginLeft: "row-reverse" === O(h) ? "16px" : "unset",
                marginBottom: "column" === O(h) ? "8px" : "unset"
            }
        }) : a.a.createElement("div", {
            className: "rssapp-header-no-icon",
            style: {
                borderRadius: g ? "50%" : "unset",
                marginRight: "row" === O(h) ? "16px" : "unset",
                marginLeft: "row-reverse" === O(h) ? "16px" : "unset",
                marginBottom: "column" === O(h) ? "8px" : "unset"
            }
        }, o.slice(0, 1))), a.a.createElement("div", {
            style: {
                width: "100%"
            }
        }, r && a.a.createElement("div", {
            className: "rssapp-title-header",
            style: {
                flexDirection: "center" !== h && "center" === E ? O(h) : "unset",
                alignSelf: P(E),
                marginBottom: c ? 8 : "unset",
                lineHeight: "".concat(i, "px"),
                fontSize: "".concat(i, "px"),
                color: "".concat(l),
                justifyContent: P(E),
                textAlign: E
            }
        }, p && "center" !== h && "center" === E && a.a.createElement("div", {
            className: "rssapp-header-icon-box",
            style: {
                flexDirection: O(h),
                alignSelf: _(h)
            }
        }, m ? a.a.createElement("img", {
            className: "rssapp-header-icon",
            src: m,
            alt: o,
            style: {
                borderRadius: g ? "50%" : "unset",
                marginRight: "row" === O(h) ? "16px" : "unset",
                marginLeft: "row-reverse" === O(h) ? "16px" : "unset"
            }
        }) : a.a.createElement("div", {
            className: "rssapp-header-no-icon",
            style: {
                borderRadius: g ? "50%" : "unset",
                marginRight: "row" === O(h) ? "16px" : "unset",
                marginLeft: "row-reverse" === O(h) ? "16px" : "unset"
            }
        }, o.slice(0, 1))), o), c && a.a.createElement("div", {
            className: "rssapp-header-description",
            style: r ? {
                lineHeight: "".concat(1.25 * f, "px"),
                fontSize: "".concat(f, "px"),
                color: "".concat(d),
                justifyContent: P(E),
                textAlign: E
            } : {
                flexDirection: "center" !== h && "center" === E ? O(h) : "unset",
                alignSelf: P(E),
                lineHeight: "".concat(1.25 * f, "px"),
                fontSize: "".concat(f, "px"),
                color: "".concat(d),
                justifyContent: P(E),
                textAlign: E
            }
        }, p && !r && "center" !== h && "center" === E && "left" !== h && "center" !== E && a.a.createElement("div", {
            className: "rssapp-header-icon-box",
            style: {
                flexDirection: O(h),
                alignSelf: _(h)
            }
        }, m ? "center" !== E && a.a.createElement("img", {
            className: "rssapp-header-icon",
            src: m,
            alt: o,
            style: {
                borderRadius: g ? "50%" : "unset",
                marginRight: "row" === O(h) ? "16px" : "unset",
                marginLeft: "row-reverse" === O(h) ? "16px" : "unset"
            }
        }) : a.a.createElement("div", {
            className: "rssapp-header-no-icon",
            style: {
                borderRadius: g ? "50%" : "unset",
                marginRight: "row" === O(h) ? "16px" : "unset",
                marginLeft: "row-reverse" === O(h) ? "16px" : "unset"
            }
        }, o.slice(0, 1))), (t = s) ? t.split("\n").map((function (e, t) {
            return a.a.createElement(a.a.Fragment, {
                key: "".concat(e, "-").concat(t)
            }, e, a.a.createElement("br", null))
        })) : null))) : null
    }
}, function (e, t, n) {
    "use strict";
    /*
    object-assign
    (c) Sindre Sorhus
    @license MIT
    */
    var r = Object.getOwnPropertySymbols,
        a = Object.prototype.hasOwnProperty,
        o = Object.prototype.propertyIsEnumerable;

    function i(e) {
        if (null == e) throw new TypeError("Object.assign cannot be called with null or undefined");
        return Object(e)
    }
    e.exports = function () {
        try {
            if (!Object.assign) return !1;
            var e = new String("abc");
            if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1;
            for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n;
            if ("0123456789" !== Object.getOwnPropertyNames(t).map((function (e) {
                return t[e]
            })).join("")) return !1;
            var r = {};
            return "abcdefghijklmnopqrst".split("").forEach((function (e) {
                r[e] = e
            })), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("")
        } catch (e) {
            return !1
        }
    }() ? Object.assign : function (e, t) {
        for (var n, l, u = i(e), c = 1; c < arguments.length; c++) {
            for (var s in n = Object(arguments[c])) a.call(n, s) && (u[s] = n[s]);
            if (r) {
                l = r(n);
                for (var f = 0; f < l.length; f++) o.call(n, l[f]) && (u[l[f]] = n[l[f]])
            }
        }
        return u
    }
}, function (e, t, n) {
    var r = n(35);
    e.exports = function (e, t) {
        if (e) {
            if ("string" == typeof e) return r(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? r(e, t) : void 0
        }
    }, e.exports.__esModule = !0, e.exports.default = e.exports
}, function (e, t) {
    e.exports = function (e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r
    }, e.exports.__esModule = !0, e.exports.default = e.exports
}, function (e, t, n) {
    var r = n(6),
        a = n(30),
        o = n(46),
        i = n(47);

    function l(t) {
        var n = "function" == typeof Map ? new Map : void 0;
        return e.exports = l = function (e) {
            if (null === e || !o(e)) return e;
            if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
            if (void 0 !== n) {
                if (n.has(e)) return n.get(e);
                n.set(e, t)
            }

            function t() {
                return i(e, arguments, r(this).constructor)
            }
            return t.prototype = Object.create(e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), a(t, e)
        }, e.exports.__esModule = !0, e.exports.default = e.exports, l(t)
    }
    e.exports = l, e.exports.__esModule = !0, e.exports.default = e.exports
}, function (e, t, n) {
    "use strict";
    var r = n(11),
        a = n.n(r),
        o = n(12),
        i = n.n(o),
        l = n(13),
        u = n.n(l),
        c = n(14),
        s = n.n(c),
        f = n(6),
        d = n.n(f),
        p = n(36),
        m = n.n(p),
        h = n(26),
        g = n(3),
        v = n(1),
        y = n.n(v),
        b = n(29),
        w = n.n(b);

    function x(e, t) {
        var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
        if (!n) {
            if (Array.isArray(e) || (n = function (e, t) {
                if (!e) return;
                if ("string" == typeof e) return k(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n) return Array.from(e);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return k(e, t)
            }(e)) || t && e && "number" == typeof e.length) {
                n && (e = n);
                var r = 0,
                    a = function () { };
                return {
                    s: a,
                    n: function () {
                        return r >= e.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: e[r++]
                        }
                    },
                    e: function (e) {
                        throw e
                    },
                    f: a
                }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var o, i = !0,
            l = !1;
        return {
            s: function () {
                n = n.call(e)
            },
            n: function () {
                var e = n.next();
                return i = e.done, e
            },
            e: function (e) {
                l = !0, o = e
            },
            f: function () {
                try {
                    i || null == n.return || n.return()
                } finally {
                    if (l) throw o
                }
            }
        }
    }

    function k(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function E(e) {
        if (!e.attributes) return {};
        var t, n, r = {
            type: e.localName.replace("rssapp-", "")
        },
            a = x(w()(e.attributes).map((function (e) {
                return y()({}, e.name, e.value)
            })));
        try {
            for (a.s(); !(n = a.n()).done;) {
                t = n.value;
                var o = Object.keys(t)[0];
                r[o.replace(/-([a-z])/g, (function (e) {
                    return e[1].toUpperCase()
                }))] = t[o]
            }
        } catch (e) {
            a.e(e)
        } finally {
            a.f()
        }
        return r
    }
    var C = function () {
        try {
            return n(38).styleElements
        } catch (e) {
            return []
        }
    };

    function T(e) {
        var t = function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () { }))), !0
            } catch (e) {
                return !1
            }
        }();
        return function () {
            var n, r = d()(e);
            if (t) {
                var a = d()(this).constructor;
                n = Reflect.construct(r, arguments, a)
            } else n = r.apply(this, arguments);
            return s()(this, n)
        }
    }
    var S = n(0),
        O = n(55),
        P = n(59),
        _ = '\n<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="utf-8">\n    <title>RSS Feed Widget</title>\n    <meta name="viewport"\n          content="width=device-width, initial-scale=1, shrink-to-fit=no">\n    <meta http-equiv="X-UA-Compatible" content="IE=edge">\n    <style type="text/css">\n        body {\n          overflow: hidden;\n          margin: 0;\n        }\n    </style>\n</head>\n<body>\n    <div id="app"></div>\n</body>\n</html>\n        ',
        j = "\ndisplay: block !important;\nborder: none;\nwidth: 100%;\nheight: 100%;\noverflow: hidden;\n";
    t.a = {
        create: function (e, t) {
            var n, r = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
            customElements && customElements.get && customElements.define || console.error("Custom elements does not working");
            var o = {
                attachedCallback: "webComponentAttached",
                connectedCallback: "webComponentConnected",
                disconnectedCallback: "webComponentDisconnected",
                attributeChangedCallback: "webComponentAttributeChanged",
                adoptedCallback: "webComponentAdopted"
            };

            function l(e) {
                n.webComponentConstructed && n.webComponentConstructed.apply(n, [e])
            }

            function c(e, t) {
                var r = t || [],
                    a = o[e];
                a && n && n[a] && n[a].apply(n, r)
            }
            var s = function (t) {
                u()(s, t);
                var o = T(s);

                function s() {
                    return a()(this, s), o.apply(this, arguments)
                }
                return i()(s, [{
                    key: "connectedCallback",
                    value: function () {
                        var t = this,
                            a = this,
                            o = a,
                            i = E(a);
                        Object(h.a)({
                            id: i.id,
                            type: i.type
                        }, i.url || "https://rss.app").then((function (u) {
                            if (i.data = u, o = document.createElement("div"), u.feed && (u.feed.items || []).every((function (e) {
                                return Object(g.h)(e.formattedDescription)
                            }))) {
                                var s = document.createElement("iframe");
                                s.setAttribute("frameborder", "0"), s.setAttribute("style", j), "feed" === i.type && (s.style.width = "600px"), "grid" === i.type && (t.style.width = "100%"), a.append(s);
                                var f = C();
                                s.contentWindow.document.open("text/html", "replace"), s.contentWindow.document.write(_), s.contentWindow.document.close(), o = s.contentWindow.document.getElementById("app"), f.forEach((function (e) {
                                    s.contentDocument.head.appendChild(e.cloneNode(!0))
                                })), window.requestAnimationFrame((function e() {
                                    var t = o.getBoundingClientRect().height || o.offsetHeight;
                                    s.style.height = "".concat(t, "px"), window.requestAnimationFrame(e)
                                })), i.iframe = s
                            } else if (r) {
                                var d = a.attachShadow({
                                    mode: "open"
                                });
                                o = document.createElement("div"), C().forEach((function (e) {
                                    d.appendChild(e.cloneNode(d))
                                })), d.appendChild(o), P(d), i.shadowRoot = d
                            }
                            return O.render(S.cloneElement(e, i), o, (function () {
                                (n = this).addObserver(a), l(a), c("connectedCallback")
                            })), u
                        })).catch((function (e) {
                            return console.log(e)
                        }))
                    }
                }, {
                    key: "disconnectedCallback",
                    value: function () {
                        c("disconnectedCallback")
                    }
                }, {
                    key: "attributeChangedCallback",
                    value: function (e, t, n, r) {
                        c("attributeChangedCallback", [e, t, n, r])
                    }
                }, {
                    key: "adoptedCallback",
                    value: function (e, t) {
                        c("adoptedCallback", [e, t])
                    }
                }]), s
            }(m()(HTMLElement));
            customElements.get(t) || customElements.define(t, s)
        }
    }
}, function (e, t) {
    e.exports = {
        styleElements: []
    }
}, function (e, t, n) {
    "use strict";
    var r = n(0),
        a = n.n(r);
    t.a = function (e) {
        var t = e.url,
            n = e.style,
            r = e.isFree,
            o = e.isListWidget,
            i = a.a.useMemo((function () {
                try {
                    return new URL(t)
                } catch (e) {
                    return ""
                }
            }), [t]),
            l = null;
        if (i) {
            var u = i.hostname.replace("www.", "").replace("ww2.", "");
            l = r ? a.a.createElement("span", {
                className: "rssapp-hostname",
                style: n
            }, o ? a.a.createElement("a", {
                className: "rssapp-hostname_link",
                href: "https://rss.app/rss-widgets"
            }, "RSS.app Widgets") : a.a.createElement(a.a.Fragment, null, "Try", " ", a.a.createElement("a", {
                className: "rssapp-hostname_link",
                href: "https://rss.app/rss-widgets"
            }, "rss.app widgets"), " ", "for free")) : a.a.createElement("span", {
                className: "rssapp-hostname",
                style: n
            }, u)
        }
        return a.a.createElement(a.a.Fragment, null, l, a.a.createElement("style", {
            jsx: !0
        }, "\n          .rssapp-hostname {\n            line-height: normal;\n            letter-spacing: 0.1px;\n            display: block !important;\n            overflow: hidden;\n            white-space: nowrap;\n            text-overflow: ellipsis;\n          }\n          .rssapp-hostname_link {\n            color: inherit;\n            outline: unset;\n            text-decoration: unset;\n          }\n        "))
    }
}, function (e, t) {
    function n() {
        return e.exports = n = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }, e.exports.__esModule = !0, e.exports.default = e.exports, n.apply(this, arguments)
    }
    e.exports = n, e.exports.__esModule = !0, e.exports.default = e.exports
}, function (e, t, n) {
    "use strict";
    n.d(t, "a", (function () {
        return r
    }));
    var r = function () {
        if ("undefined" == typeof window) return function () {
            return Math.random() < .5
        };
        var e = new Uint8Array(1);
        return function () {
            return window.crypto.getRandomValues(e), e[0] > 127
        }
    }()
}, , , function (e, t) {
    function n(t) {
        return e.exports = n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, e.exports.__esModule = !0, e.exports.default = e.exports, n(t)
    }
    e.exports = n, e.exports.__esModule = !0, e.exports.default = e.exports
}, function (e, t, n) {
    "use strict";
    /** @license React v16.14.0
     * react.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    var r = n(33),
        a = "function" == typeof Symbol && Symbol.for,
        o = a ? Symbol.for("react.element") : 60103,
        i = a ? Symbol.for("react.portal") : 60106,
        l = a ? Symbol.for("react.fragment") : 60107,
        u = a ? Symbol.for("react.strict_mode") : 60108,
        c = a ? Symbol.for("react.profiler") : 60114,
        s = a ? Symbol.for("react.provider") : 60109,
        f = a ? Symbol.for("react.context") : 60110,
        d = a ? Symbol.for("react.forward_ref") : 60112,
        p = a ? Symbol.for("react.suspense") : 60113,
        m = a ? Symbol.for("react.memo") : 60115,
        h = a ? Symbol.for("react.lazy") : 60116,
        g = "function" == typeof Symbol && Symbol.iterator;

    function v(e) {
        for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
        return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    var y = {
        isMounted: function () {
            return !1
        },
        enqueueForceUpdate: function () { },
        enqueueReplaceState: function () { },
        enqueueSetState: function () { }
    },
        b = {};

    function w(e, t, n) {
        this.props = e, this.context = t, this.refs = b, this.updater = n || y
    }

    function x() { }

    function k(e, t, n) {
        this.props = e, this.context = t, this.refs = b, this.updater = n || y
    }
    w.prototype.isReactComponent = {}, w.prototype.setState = function (e, t) {
        if ("object" != typeof e && "function" != typeof e && null != e) throw Error(v(85));
        this.updater.enqueueSetState(this, e, t, "setState")
    }, w.prototype.forceUpdate = function (e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate")
    }, x.prototype = w.prototype;
    var E = k.prototype = new x;
    E.constructor = k, r(E, w.prototype), E.isPureReactComponent = !0;
    var C = {
        current: null
    },
        T = Object.prototype.hasOwnProperty,
        S = {
            key: !0,
            ref: !0,
            __self: !0,
            __source: !0
        };

    function O(e, t, n) {
        var r, a = {},
            i = null,
            l = null;
        if (null != t)
            for (r in void 0 !== t.ref && (l = t.ref), void 0 !== t.key && (i = "" + t.key), t) T.call(t, r) && !S.hasOwnProperty(r) && (a[r] = t[r]);
        var u = arguments.length - 2;
        if (1 === u) a.children = n;
        else if (1 < u) {
            for (var c = Array(u), s = 0; s < u; s++) c[s] = arguments[s + 2];
            a.children = c
        }
        if (e && e.defaultProps)
            for (r in u = e.defaultProps) void 0 === a[r] && (a[r] = u[r]);
        return {
            $$typeof: o,
            type: e,
            key: i,
            ref: l,
            props: a,
            _owner: C.current
        }
    }

    function P(e) {
        return "object" == typeof e && null !== e && e.$$typeof === o
    }
    var _ = /\/+/g,
        j = [];

    function M(e, t, n, r) {
        if (j.length) {
            var a = j.pop();
            return a.result = e, a.keyPrefix = t, a.func = n, a.context = r, a.count = 0, a
        }
        return {
            result: e,
            keyPrefix: t,
            func: n,
            context: r,
            count: 0
        }
    }

    function N(e) {
        e.result = null, e.keyPrefix = null, e.func = null, e.context = null, e.count = 0, 10 > j.length && j.push(e)
    }

    function D(e, t, n) {
        return null == e ? 0 : function e(t, n, r, a) {
            var l = typeof t;
            "undefined" !== l && "boolean" !== l || (t = null);
            var u = !1;
            if (null === t) u = !0;
            else switch (l) {
                case "string":
                case "number":
                    u = !0;
                    break;
                case "object":
                    switch (t.$$typeof) {
                        case o:
                        case i:
                            u = !0
                    }
            }
            if (u) return r(a, t, "" === n ? "." + z(t, 0) : n), 1;
            if (u = 0, n = "" === n ? "." : n + ":", Array.isArray(t))
                for (var c = 0; c < t.length; c++) {
                    var s = n + z(l = t[c], c);
                    u += e(l, s, r, a)
                } else if (null === t || "object" != typeof t ? s = null : s = "function" == typeof (s = g && t[g] || t["@@iterator"]) ? s : null, "function" == typeof s)
                for (t = s.call(t), c = 0; !(l = t.next()).done;) u += e(l = l.value, s = n + z(l, c++), r, a);
            else if ("object" === l) throw r = "" + t, Error(v(31, "[object Object]" === r ? "object with keys {" + Object.keys(t).join(", ") + "}" : r, ""));
            return u
        }(e, "", t, n)
    }

    function z(e, t) {
        return "object" == typeof e && null !== e && null != e.key ? function (e) {
            var t = {
                "=": "=0",
                ":": "=2"
            };
            return "$" + ("" + e).replace(/[=:]/g, (function (e) {
                return t[e]
            }))
        }(e.key) : t.toString(36)
    }

    function R(e, t) {
        e.func.call(e.context, t, e.count++)
    }

    function L(e, t, n) {
        var r = e.result,
            a = e.keyPrefix;
        e = e.func.call(e.context, t, e.count++), Array.isArray(e) ? F(e, r, n, (function (e) {
            return e
        })) : null != e && (P(e) && (e = function (e, t) {
            return {
                $$typeof: o,
                type: e.type,
                key: t,
                ref: e.ref,
                props: e.props,
                _owner: e._owner
            }
        }(e, a + (!e.key || t && t.key === e.key ? "" : ("" + e.key).replace(_, "$&/") + "/") + n)), r.push(e))
    }

    function F(e, t, n, r, a) {
        var o = "";
        null != n && (o = ("" + n).replace(_, "$&/") + "/"), D(e, L, t = M(t, o, r, a)), N(t)
    }
    var I = {
        current: null
    };

    function U() {
        var e = I.current;
        if (null === e) throw Error(v(321));
        return e
    }
    var A = {
        ReactCurrentDispatcher: I,
        ReactCurrentBatchConfig: {
            suspense: null
        },
        ReactCurrentOwner: C,
        IsSomeRendererActing: {
            current: !1
        },
        assign: r
    };
    t.Children = {
        map: function (e, t, n) {
            if (null == e) return e;
            var r = [];
            return F(e, r, null, t, n), r
        },
        forEach: function (e, t, n) {
            if (null == e) return e;
            D(e, R, t = M(null, null, t, n)), N(t)
        },
        count: function (e) {
            return D(e, (function () {
                return null
            }), null)
        },
        toArray: function (e) {
            var t = [];
            return F(e, t, null, (function (e) {
                return e
            })), t
        },
        only: function (e) {
            if (!P(e)) throw Error(v(143));
            return e
        }
    }, t.Component = w, t.Fragment = l, t.Profiler = c, t.PureComponent = k, t.StrictMode = u, t.Suspense = p, t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = A, t.cloneElement = function (e, t, n) {
        if (null == e) throw Error(v(267, e));
        var a = r({}, e.props),
            i = e.key,
            l = e.ref,
            u = e._owner;
        if (null != t) {
            if (void 0 !== t.ref && (l = t.ref, u = C.current), void 0 !== t.key && (i = "" + t.key), e.type && e.type.defaultProps) var c = e.type.defaultProps;
            for (s in t) T.call(t, s) && !S.hasOwnProperty(s) && (a[s] = void 0 === t[s] && void 0 !== c ? c[s] : t[s])
        }
        var s = arguments.length - 2;
        if (1 === s) a.children = n;
        else if (1 < s) {
            c = Array(s);
            for (var f = 0; f < s; f++) c[f] = arguments[f + 2];
            a.children = c
        }
        return {
            $$typeof: o,
            type: e.type,
            key: i,
            ref: l,
            props: a,
            _owner: u
        }
    }, t.createContext = function (e, t) {
        return void 0 === t && (t = null), (e = {
            $$typeof: f,
            _calculateChangedBits: t,
            _currentValue: e,
            _currentValue2: e,
            _threadCount: 0,
            Provider: null,
            Consumer: null
        }).Provider = {
            $$typeof: s,
            _context: e
        }, e.Consumer = e
    }, t.createElement = O, t.createFactory = function (e) {
        var t = O.bind(null, e);
        return t.type = e, t
    }, t.createRef = function () {
        return {
            current: null
        }
    }, t.forwardRef = function (e) {
        return {
            $$typeof: d,
            render: e
        }
    }, t.isValidElement = P, t.lazy = function (e) {
        return {
            $$typeof: h,
            _ctor: e,
            _status: -1,
            _result: null
        }
    }, t.memo = function (e, t) {
        return {
            $$typeof: m,
            type: e,
            compare: void 0 === t ? null : t
        }
    }, t.useCallback = function (e, t) {
        return U().useCallback(e, t)
    }, t.useContext = function (e, t) {
        return U().useContext(e, t)
    }, t.useDebugValue = function () { }, t.useEffect = function (e, t) {
        return U().useEffect(e, t)
    }, t.useImperativeHandle = function (e, t, n) {
        return U().useImperativeHandle(e, t, n)
    }, t.useLayoutEffect = function (e, t) {
        return U().useLayoutEffect(e, t)
    }, t.useMemo = function (e, t) {
        return U().useMemo(e, t)
    }, t.useReducer = function (e, t, n) {
        return U().useReducer(e, t, n)
    }, t.useRef = function (e) {
        return U().useRef(e)
    }, t.useState = function (e) {
        return U().useState(e)
    }, t.version = "16.14.0"
}, function (e, t) {
    e.exports = function (e) {
        return -1 !== Function.toString.call(e).indexOf("[native code]")
    }, e.exports.__esModule = !0, e.exports.default = e.exports
}, function (e, t, n) {
    var r = n(30),
        a = n(48);

    function o(t, n, i) {
        return a() ? (e.exports = o = Reflect.construct, e.exports.__esModule = !0, e.exports.default = e.exports) : (e.exports = o = function (e, t, n) {
            var a = [null];
            a.push.apply(a, t);
            var o = new (Function.bind.apply(e, a));
            return n && r(o, n.prototype), o
        }, e.exports.__esModule = !0, e.exports.default = e.exports), o.apply(null, arguments)
    }
    e.exports = o, e.exports.__esModule = !0, e.exports.default = e.exports
}, function (e, t) {
    e.exports = function () {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () { }))), !0
        } catch (e) {
            return !1
        }
    }, e.exports.__esModule = !0, e.exports.default = e.exports
}, function (e, t) {
    e.exports = function (e) {
        if (Array.isArray(e)) return e
    }, e.exports.__esModule = !0, e.exports.default = e.exports
}, function (e, t) {
    e.exports = function (e, t) {
        var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
        if (null != n) {
            var r, a, o = [],
                i = !0,
                l = !1;
            try {
                for (n = n.call(e); !(i = (r = n.next()).done) && (o.push(r.value), !t || o.length !== t); i = !0);
            } catch (e) {
                l = !0, a = e
            } finally {
                try {
                    i || null == n.return || n.return()
                } finally {
                    if (l) throw a
                }
            }
            return o
        }
    }, e.exports.__esModule = !0, e.exports.default = e.exports
}, function (e, t) {
    e.exports = function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }, e.exports.__esModule = !0, e.exports.default = e.exports
}, function (e, t, n) {
    var r = n(35);
    e.exports = function (e) {
        if (Array.isArray(e)) return r(e)
    }, e.exports.__esModule = !0, e.exports.default = e.exports
}, function (e, t) {
    e.exports = function (e) {
        if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
    }, e.exports.__esModule = !0, e.exports.default = e.exports
}, function (e, t) {
    e.exports = function () {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }, e.exports.__esModule = !0, e.exports.default = e.exports
}, function (e, t, n) {
    "use strict";
    ! function e() {
        if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE) {
            0;
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)
            } catch (e) {
                console.error(e)
            }
        }
    }(), e.exports = n(56)
}, function (e, t, n) {
    "use strict";
    /** @license React v16.14.0
     * react-dom.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    var r = n(0),
        a = n(33),
        o = n(57);

    function i(e) {
        for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
        return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    if (!r) throw Error(i(227));

    function l(e, t, n, r, a, o, i, l, u) {
        var c = Array.prototype.slice.call(arguments, 3);
        try {
            t.apply(n, c)
        } catch (e) {
            this.onError(e)
        }
    }
    var u = !1,
        c = null,
        s = !1,
        f = null,
        d = {
            onError: function (e) {
                u = !0, c = e
            }
        };

    function p(e, t, n, r, a, o, i, s, f) {
        u = !1, c = null, l.apply(d, arguments)
    }
    var m = null,
        h = null,
        g = null;

    function v(e, t, n) {
        var r = e.type || "unknown-event";
        e.currentTarget = g(n),
            function (e, t, n, r, a, o, l, d, m) {
                if (p.apply(this, arguments), u) {
                    if (!u) throw Error(i(198));
                    var h = c;
                    u = !1, c = null, s || (s = !0, f = h)
                }
            }(r, t, void 0, e), e.currentTarget = null
    }
    var y = null,
        b = {};

    function w() {
        if (y)
            for (var e in b) {
                var t = b[e],
                    n = y.indexOf(e);
                if (!(-1 < n)) throw Error(i(96, e));
                if (!k[n]) {
                    if (!t.extractEvents) throw Error(i(97, e));
                    for (var r in k[n] = t, n = t.eventTypes) {
                        var a = void 0,
                            o = n[r],
                            l = t,
                            u = r;
                        if (E.hasOwnProperty(u)) throw Error(i(99, u));
                        E[u] = o;
                        var c = o.phasedRegistrationNames;
                        if (c) {
                            for (a in c) c.hasOwnProperty(a) && x(c[a], l, u);
                            a = !0
                        } else o.registrationName ? (x(o.registrationName, l, u), a = !0) : a = !1;
                        if (!a) throw Error(i(98, r, e))
                    }
                }
            }
    }

    function x(e, t, n) {
        if (C[e]) throw Error(i(100, e));
        C[e] = t, T[e] = t.eventTypes[n].dependencies
    }
    var k = [],
        E = {},
        C = {},
        T = {};

    function S(e) {
        var t, n = !1;
        for (t in e)
            if (e.hasOwnProperty(t)) {
                var r = e[t];
                if (!b.hasOwnProperty(t) || b[t] !== r) {
                    if (b[t]) throw Error(i(102, t));
                    b[t] = r, n = !0
                }
            } n && w()
    }
    var O = !("undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement),
        P = null,
        _ = null,
        j = null;

    function M(e) {
        if (e = h(e)) {
            if ("function" != typeof P) throw Error(i(280));
            var t = e.stateNode;
            t && (t = m(t), P(e.stateNode, e.type, t))
        }
    }

    function N(e) {
        _ ? j ? j.push(e) : j = [e] : _ = e
    }

    function D() {
        if (_) {
            var e = _,
                t = j;
            if (j = _ = null, M(e), t)
                for (e = 0; e < t.length; e++) M(t[e])
        }
    }

    function z(e, t) {
        return e(t)
    }

    function R(e, t, n, r, a) {
        return e(t, n, r, a)
    }

    function L() { }
    var F = z,
        I = !1,
        U = !1;

    function A() {
        null === _ && null === j || (L(), D())
    }

    function B(e, t, n) {
        if (U) return e(t, n);
        U = !0;
        try {
            return F(e, t, n)
        } finally {
            U = !1, A()
        }
    }
    var H = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
        W = Object.prototype.hasOwnProperty,
        V = {},
        Q = {};

    function q(e, t, n, r, a, o) {
        this.acceptsBooleans = 2 === t || 3 === t || 4 === t, this.attributeName = r, this.attributeNamespace = a, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o
    }
    var $ = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function (e) {
        $[e] = new q(e, 0, !1, e, null, !1)
    })), [
        ["acceptCharset", "accept-charset"],
        ["className", "class"],
        ["htmlFor", "for"],
        ["httpEquiv", "http-equiv"]
    ].forEach((function (e) {
        var t = e[0];
        $[t] = new q(t, 1, !1, e[1], null, !1)
    })), ["contentEditable", "draggable", "spellCheck", "value"].forEach((function (e) {
        $[e] = new q(e, 2, !1, e.toLowerCase(), null, !1)
    })), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach((function (e) {
        $[e] = new q(e, 2, !1, e, null, !1)
    })), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function (e) {
        $[e] = new q(e, 3, !1, e.toLowerCase(), null, !1)
    })), ["checked", "multiple", "muted", "selected"].forEach((function (e) {
        $[e] = new q(e, 3, !0, e, null, !1)
    })), ["capture", "download"].forEach((function (e) {
        $[e] = new q(e, 4, !1, e, null, !1)
    })), ["cols", "rows", "size", "span"].forEach((function (e) {
        $[e] = new q(e, 6, !1, e, null, !1)
    })), ["rowSpan", "start"].forEach((function (e) {
        $[e] = new q(e, 5, !1, e.toLowerCase(), null, !1)
    }));
    var Y = /[\-:]([a-z])/g;

    function K(e) {
        return e[1].toUpperCase()
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function (e) {
        var t = e.replace(Y, K);
        $[t] = new q(t, 1, !1, e, null, !1)
    })), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function (e) {
        var t = e.replace(Y, K);
        $[t] = new q(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1)
    })), ["xml:base", "xml:lang", "xml:space"].forEach((function (e) {
        var t = e.replace(Y, K);
        $[t] = new q(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1)
    })), ["tabIndex", "crossOrigin"].forEach((function (e) {
        $[e] = new q(e, 1, !1, e.toLowerCase(), null, !1)
    })), $.xlinkHref = new q("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0), ["src", "href", "action", "formAction"].forEach((function (e) {
        $[e] = new q(e, 1, !1, e.toLowerCase(), null, !0)
    }));
    var G = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

    function X(e, t, n, r) {
        var a = $.hasOwnProperty(t) ? $[t] : null;
        (null !== a ? 0 === a.type : !r && (2 < t.length && ("o" === t[0] || "O" === t[0]) && ("n" === t[1] || "N" === t[1]))) || (function (e, t, n, r) {
            if (null == t || function (e, t, n, r) {
                if (null !== n && 0 === n.type) return !1;
                switch (typeof t) {
                    case "function":
                    case "symbol":
                        return !0;
                    case "boolean":
                        return !r && (null !== n ? !n.acceptsBooleans : "data-" !== (e = e.toLowerCase().slice(0, 5)) && "aria-" !== e);
                    default:
                        return !1
                }
            }(e, t, n, r)) return !0;
            if (r) return !1;
            if (null !== n) switch (n.type) {
                case 3:
                    return !t;
                case 4:
                    return !1 === t;
                case 5:
                    return isNaN(t);
                case 6:
                    return isNaN(t) || 1 > t
            }
            return !1
        }(t, n, a, r) && (n = null), r || null === a ? function (e) {
            return !!W.call(Q, e) || !W.call(V, e) && (H.test(e) ? Q[e] = !0 : (V[e] = !0, !1))
        }(t) && (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : a.mustUseProperty ? e[a.propertyName] = null === n ? 3 !== a.type && "" : n : (t = a.attributeName, r = a.attributeNamespace, null === n ? e.removeAttribute(t) : (n = 3 === (a = a.type) || 4 === a && !0 === n ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
    }
    G.hasOwnProperty("ReactCurrentDispatcher") || (G.ReactCurrentDispatcher = {
        current: null
    }), G.hasOwnProperty("ReactCurrentBatchConfig") || (G.ReactCurrentBatchConfig = {
        suspense: null
    });
    var Z = /^(.*)[\\\/]/,
        J = "function" == typeof Symbol && Symbol.for,
        ee = J ? Symbol.for("react.element") : 60103,
        te = J ? Symbol.for("react.portal") : 60106,
        ne = J ? Symbol.for("react.fragment") : 60107,
        re = J ? Symbol.for("react.strict_mode") : 60108,
        ae = J ? Symbol.for("react.profiler") : 60114,
        oe = J ? Symbol.for("react.provider") : 60109,
        ie = J ? Symbol.for("react.context") : 60110,
        le = J ? Symbol.for("react.concurrent_mode") : 60111,
        ue = J ? Symbol.for("react.forward_ref") : 60112,
        ce = J ? Symbol.for("react.suspense") : 60113,
        se = J ? Symbol.for("react.suspense_list") : 60120,
        fe = J ? Symbol.for("react.memo") : 60115,
        de = J ? Symbol.for("react.lazy") : 60116,
        pe = J ? Symbol.for("react.block") : 60121,
        me = "function" == typeof Symbol && Symbol.iterator;

    function he(e) {
        return null === e || "object" != typeof e ? null : "function" == typeof (e = me && e[me] || e["@@iterator"]) ? e : null
    }

    function ge(e) {
        if (null == e) return null;
        if ("function" == typeof e) return e.displayName || e.name || null;
        if ("string" == typeof e) return e;
        switch (e) {
            case ne:
                return "Fragment";
            case te:
                return "Portal";
            case ae:
                return "Profiler";
            case re:
                return "StrictMode";
            case ce:
                return "Suspense";
            case se:
                return "SuspenseList"
        }
        if ("object" == typeof e) switch (e.$$typeof) {
            case ie:
                return "Context.Consumer";
            case oe:
                return "Context.Provider";
            case ue:
                var t = e.render;
                return t = t.displayName || t.name || "", e.displayName || ("" !== t ? "ForwardRef(" + t + ")" : "ForwardRef");
            case fe:
                return ge(e.type);
            case pe:
                return ge(e.render);
            case de:
                if (e = 1 === e._status ? e._result : null) return ge(e)
        }
        return null
    }

    function ve(e) {
        var t = "";
        do {
            e: switch (e.tag) {
                case 3:
                case 4:
                case 6:
                case 7:
                case 10:
                case 9:
                    var n = "";
                    break e;
                default:
                    var r = e._debugOwner,
                        a = e._debugSource,
                        o = ge(e.type);
                    n = null, r && (n = ge(r.type)), r = o, o = "", a ? o = " (at " + a.fileName.replace(Z, "") + ":" + a.lineNumber + ")" : n && (o = " (created by " + n + ")"), n = "\n    in " + (r || "Unknown") + o
            }
            t += n,
                e = e.return
        } while (e);
        return t
    }

    function ye(e) {
        switch (typeof e) {
            case "boolean":
            case "number":
            case "object":
            case "string":
            case "undefined":
                return e;
            default:
                return ""
        }
    }

    function be(e) {
        var t = e.type;
        return (e = e.nodeName) && "input" === e.toLowerCase() && ("checkbox" === t || "radio" === t)
    }

    function we(e) {
        e._valueTracker || (e._valueTracker = function (e) {
            var t = be(e) ? "checked" : "value",
                n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                r = "" + e[t];
            if (!e.hasOwnProperty(t) && void 0 !== n && "function" == typeof n.get && "function" == typeof n.set) {
                var a = n.get,
                    o = n.set;
                return Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                        return a.call(this)
                    },
                    set: function (e) {
                        r = "" + e, o.call(this, e)
                    }
                }), Object.defineProperty(e, t, {
                    enumerable: n.enumerable
                }), {
                    getValue: function () {
                        return r
                    },
                    setValue: function (e) {
                        r = "" + e
                    },
                    stopTracking: function () {
                        e._valueTracker = null, delete e[t]
                    }
                }
            }
        }(e))
    }

    function xe(e) {
        if (!e) return !1;
        var t = e._valueTracker;
        if (!t) return !0;
        var n = t.getValue(),
            r = "";
        return e && (r = be(e) ? e.checked ? "true" : "false" : e.value), (e = r) !== n && (t.setValue(e), !0)
    }

    function ke(e, t) {
        var n = t.checked;
        return a({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != n ? n : e._wrapperState.initialChecked
        })
    }

    function Ee(e, t) {
        var n = null == t.defaultValue ? "" : t.defaultValue,
            r = null != t.checked ? t.checked : t.defaultChecked;
        n = ye(null != t.value ? t.value : n), e._wrapperState = {
            initialChecked: r,
            initialValue: n,
            controlled: "checkbox" === t.type || "radio" === t.type ? null != t.checked : null != t.value
        }
    }

    function Ce(e, t) {
        null != (t = t.checked) && X(e, "checked", t, !1)
    }

    function Te(e, t) {
        Ce(e, t);
        var n = ye(t.value),
            r = t.type;
        if (null != n) "number" === r ? (0 === n && "" === e.value || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
        else if ("submit" === r || "reset" === r) return void e.removeAttribute("value");
        t.hasOwnProperty("value") ? Oe(e, t.type, n) : t.hasOwnProperty("defaultValue") && Oe(e, t.type, ye(t.defaultValue)), null == t.checked && null != t.defaultChecked && (e.defaultChecked = !!t.defaultChecked)
    }

    function Se(e, t, n) {
        if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var r = t.type;
            if (!("submit" !== r && "reset" !== r || void 0 !== t.value && null !== t.value)) return;
            t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t
        }
        "" !== (n = e.name) && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, "" !== n && (e.name = n)
    }

    function Oe(e, t, n) {
        "number" === t && e.ownerDocument.activeElement === e || (null == n ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
    }

    function Pe(e, t) {
        return e = a({
            children: void 0
        }, t), (t = function (e) {
            var t = "";
            return r.Children.forEach(e, (function (e) {
                null != e && (t += e)
            })), t
        }(t.children)) && (e.children = t), e
    }

    function _e(e, t, n, r) {
        if (e = e.options, t) {
            t = {};
            for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
            for (n = 0; n < e.length; n++) a = t.hasOwnProperty("$" + e[n].value), e[n].selected !== a && (e[n].selected = a), a && r && (e[n].defaultSelected = !0)
        } else {
            for (n = "" + ye(n), t = null, a = 0; a < e.length; a++) {
                if (e[a].value === n) return e[a].selected = !0, void (r && (e[a].defaultSelected = !0));
                null !== t || e[a].disabled || (t = e[a])
            }
            null !== t && (t.selected = !0)
        }
    }

    function je(e, t) {
        if (null != t.dangerouslySetInnerHTML) throw Error(i(91));
        return a({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue
        })
    }

    function Me(e, t) {
        var n = t.value;
        if (null == n) {
            if (n = t.children, t = t.defaultValue, null != n) {
                if (null != t) throw Error(i(92));
                if (Array.isArray(n)) {
                    if (!(1 >= n.length)) throw Error(i(93));
                    n = n[0]
                }
                t = n
            }
            null == t && (t = ""), n = t
        }
        e._wrapperState = {
            initialValue: ye(n)
        }
    }

    function Ne(e, t) {
        var n = ye(t.value),
            r = ye(t.defaultValue);
        null != n && ((n = "" + n) !== e.value && (e.value = n), null == t.defaultValue && e.defaultValue !== n && (e.defaultValue = n)), null != r && (e.defaultValue = "" + r)
    }

    function De(e) {
        var t = e.textContent;
        t === e._wrapperState.initialValue && "" !== t && null !== t && (e.value = t)
    }
    var ze = "http://www.w3.org/1999/xhtml",
        Re = "http://www.w3.org/2000/svg";

    function Le(e) {
        switch (e) {
            case "svg":
                return "http://www.w3.org/2000/svg";
            case "math":
                return "http://www.w3.org/1998/Math/MathML";
            default:
                return "http://www.w3.org/1999/xhtml"
        }
    }

    function Fe(e, t) {
        return null == e || "http://www.w3.org/1999/xhtml" === e ? Le(t) : "http://www.w3.org/2000/svg" === e && "foreignObject" === t ? "http://www.w3.org/1999/xhtml" : e
    }
    var Ie, Ue = function (e) {
        return "undefined" != typeof MSApp && MSApp.execUnsafeLocalFunction ? function (t, n, r, a) {
            MSApp.execUnsafeLocalFunction((function () {
                return e(t, n)
            }))
        } : e
    }((function (e, t) {
        if (e.namespaceURI !== Re || "innerHTML" in e) e.innerHTML = t;
        else {
            for ((Ie = Ie || document.createElement("div")).innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Ie.firstChild; e.firstChild;) e.removeChild(e.firstChild);
            for (; t.firstChild;) e.appendChild(t.firstChild)
        }
    }));

    function Ae(e, t) {
        if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType) return void (n.nodeValue = t)
        }
        e.textContent = t
    }

    function Be(e, t) {
        var n = {};
        return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
    }
    var He = {
        animationend: Be("Animation", "AnimationEnd"),
        animationiteration: Be("Animation", "AnimationIteration"),
        animationstart: Be("Animation", "AnimationStart"),
        transitionend: Be("Transition", "TransitionEnd")
    },
        We = {},
        Ve = {};

    function Qe(e) {
        if (We[e]) return We[e];
        if (!He[e]) return e;
        var t, n = He[e];
        for (t in n)
            if (n.hasOwnProperty(t) && t in Ve) return We[e] = n[t];
        return e
    }
    O && (Ve = document.createElement("div").style, "AnimationEvent" in window || (delete He.animationend.animation, delete He.animationiteration.animation, delete He.animationstart.animation), "TransitionEvent" in window || delete He.transitionend.transition);
    var qe = Qe("animationend"),
        $e = Qe("animationiteration"),
        Ye = Qe("animationstart"),
        Ke = Qe("transitionend"),
        Ge = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
        Xe = new ("function" == typeof WeakMap ? WeakMap : Map);

    function Ze(e) {
        var t = Xe.get(e);
        return void 0 === t && (t = new Map, Xe.set(e, t)), t
    }

    function Je(e) {
        var t = e,
            n = e;
        if (e.alternate)
            for (; t.return;) t = t.return;
        else {
            e = t;
            do {
                0 != (1026 & (t = e).effectTag) && (n = t.return), e = t.return
            } while (e)
        }
        return 3 === t.tag ? n : null
    }

    function et(e) {
        if (13 === e.tag) {
            var t = e.memoizedState;
            if (null === t && (null !== (e = e.alternate) && (t = e.memoizedState)), null !== t) return t.dehydrated
        }
        return null
    }

    function tt(e) {
        if (Je(e) !== e) throw Error(i(188))
    }

    function nt(e) {
        if (!(e = function (e) {
            var t = e.alternate;
            if (!t) {
                if (null === (t = Je(e))) throw Error(i(188));
                return t !== e ? null : e
            }
            for (var n = e, r = t; ;) {
                var a = n.return;
                if (null === a) break;
                var o = a.alternate;
                if (null === o) {
                    if (null !== (r = a.return)) {
                        n = r;
                        continue
                    }
                    break
                }
                if (a.child === o.child) {
                    for (o = a.child; o;) {
                        if (o === n) return tt(a), e;
                        if (o === r) return tt(a), t;
                        o = o.sibling
                    }
                    throw Error(i(188))
                }
                if (n.return !== r.return) n = a, r = o;
                else {
                    for (var l = !1, u = a.child; u;) {
                        if (u === n) {
                            l = !0, n = a, r = o;
                            break
                        }
                        if (u === r) {
                            l = !0, r = a, n = o;
                            break
                        }
                        u = u.sibling
                    }
                    if (!l) {
                        for (u = o.child; u;) {
                            if (u === n) {
                                l = !0, n = o, r = a;
                                break
                            }
                            if (u === r) {
                                l = !0, r = o, n = a;
                                break
                            }
                            u = u.sibling
                        }
                        if (!l) throw Error(i(189))
                    }
                }
                if (n.alternate !== r) throw Error(i(190))
            }
            if (3 !== n.tag) throw Error(i(188));
            return n.stateNode.current === n ? e : t
        }(e))) return null;
        for (var t = e; ;) {
            if (5 === t.tag || 6 === t.tag) return t;
            if (t.child) t.child.return = t, t = t.child;
            else {
                if (t === e) break;
                for (; !t.sibling;) {
                    if (!t.return || t.return === e) return null;
                    t = t.return
                }
                t.sibling.return = t.return, t = t.sibling
            }
        }
        return null
    }

    function rt(e, t) {
        if (null == t) throw Error(i(30));
        return null == e ? t : Array.isArray(e) ? Array.isArray(t) ? (e.push.apply(e, t), e) : (e.push(t), e) : Array.isArray(t) ? [e].concat(t) : [e, t]
    }

    function at(e, t, n) {
        Array.isArray(e) ? e.forEach(t, n) : e && t.call(n, e)
    }
    var ot = null;

    function it(e) {
        if (e) {
            var t = e._dispatchListeners,
                n = e._dispatchInstances;
            if (Array.isArray(t))
                for (var r = 0; r < t.length && !e.isPropagationStopped(); r++) v(e, t[r], n[r]);
            else t && v(e, t, n);
            e._dispatchListeners = null, e._dispatchInstances = null, e.isPersistent() || e.constructor.release(e)
        }
    }

    function lt(e) {
        if (null !== e && (ot = rt(ot, e)), e = ot, ot = null, e) {
            if (at(e, it), ot) throw Error(i(95));
            if (s) throw e = f, s = !1, f = null, e
        }
    }

    function ut(e) {
        return (e = e.target || e.srcElement || window).correspondingUseElement && (e = e.correspondingUseElement), 3 === e.nodeType ? e.parentNode : e
    }

    function ct(e) {
        if (!O) return !1;
        var t = (e = "on" + e) in document;
        return t || ((t = document.createElement("div")).setAttribute(e, "return;"), t = "function" == typeof t[e]), t
    }
    var st = [];

    function ft(e) {
        e.topLevelType = null, e.nativeEvent = null, e.targetInst = null, e.ancestors.length = 0, 10 > st.length && st.push(e)
    }

    function dt(e, t, n, r) {
        if (st.length) {
            var a = st.pop();
            return a.topLevelType = e, a.eventSystemFlags = r, a.nativeEvent = t, a.targetInst = n, a
        }
        return {
            topLevelType: e,
            eventSystemFlags: r,
            nativeEvent: t,
            targetInst: n,
            ancestors: []
        }
    }

    function pt(e) {
        var t = e.targetInst,
            n = t;
        do {
            if (!n) {
                e.ancestors.push(n);
                break
            }
            var r = n;
            if (3 === r.tag) r = r.stateNode.containerInfo;
            else {
                for (; r.return;) r = r.return;
                r = 3 !== r.tag ? null : r.stateNode.containerInfo
            }
            if (!r) break;
            5 !== (t = n.tag) && 6 !== t || e.ancestors.push(n), n = On(r)
        } while (n);
        for (n = 0; n < e.ancestors.length; n++) {
            t = e.ancestors[n];
            var a = ut(e.nativeEvent);
            r = e.topLevelType;
            var o = e.nativeEvent,
                i = e.eventSystemFlags;
            0 === n && (i |= 64);
            for (var l = null, u = 0; u < k.length; u++) {
                var c = k[u];
                c && (c = c.extractEvents(r, t, o, a, i)) && (l = rt(l, c))
            }
            lt(l)
        }
    }

    function mt(e, t, n) {
        if (!n.has(e)) {
            switch (e) {
                case "scroll":
                    Yt(t, "scroll", !0);
                    break;
                case "focus":
                case "blur":
                    Yt(t, "focus", !0), Yt(t, "blur", !0), n.set("blur", null), n.set("focus", null);
                    break;
                case "cancel":
                case "close":
                    ct(e) && Yt(t, e, !0);
                    break;
                case "invalid":
                case "submit":
                case "reset":
                    break;
                default:
                    -1 === Ge.indexOf(e) && $t(e, t)
            }
            n.set(e, null)
        }
    }
    var ht, gt, vt, yt = !1,
        bt = [],
        wt = null,
        xt = null,
        kt = null,
        Et = new Map,
        Ct = new Map,
        Tt = [],
        St = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput close cancel copy cut paste click change contextmenu reset submit".split(" "),
        Ot = "focus blur dragenter dragleave mouseover mouseout pointerover pointerout gotpointercapture lostpointercapture".split(" ");

    function Pt(e, t, n, r, a) {
        return {
            blockedOn: e,
            topLevelType: t,
            eventSystemFlags: 32 | n,
            nativeEvent: a,
            container: r
        }
    }

    function _t(e, t) {
        switch (e) {
            case "focus":
            case "blur":
                wt = null;
                break;
            case "dragenter":
            case "dragleave":
                xt = null;
                break;
            case "mouseover":
            case "mouseout":
                kt = null;
                break;
            case "pointerover":
            case "pointerout":
                Et.delete(t.pointerId);
                break;
            case "gotpointercapture":
            case "lostpointercapture":
                Ct.delete(t.pointerId)
        }
    }

    function jt(e, t, n, r, a, o) {
        return null === e || e.nativeEvent !== o ? (e = Pt(t, n, r, a, o), null !== t && (null !== (t = Pn(t)) && gt(t)), e) : (e.eventSystemFlags |= r, e)
    }

    function Mt(e) {
        var t = On(e.target);
        if (null !== t) {
            var n = Je(t);
            if (null !== n)
                if (13 === (t = n.tag)) {
                    if (null !== (t = et(n))) return e.blockedOn = t, void o.unstable_runWithPriority(e.priority, (function () {
                        vt(n)
                    }))
                } else if (3 === t && n.stateNode.hydrate) return void (e.blockedOn = 3 === n.tag ? n.stateNode.containerInfo : null)
        }
        e.blockedOn = null
    }

    function Nt(e) {
        if (null !== e.blockedOn) return !1;
        var t = Zt(e.topLevelType, e.eventSystemFlags, e.container, e.nativeEvent);
        if (null !== t) {
            var n = Pn(t);
            return null !== n && gt(n), e.blockedOn = t, !1
        }
        return !0
    }

    function Dt(e, t, n) {
        Nt(e) && n.delete(t)
    }

    function zt() {
        for (yt = !1; 0 < bt.length;) {
            var e = bt[0];
            if (null !== e.blockedOn) {
                null !== (e = Pn(e.blockedOn)) && ht(e);
                break
            }
            var t = Zt(e.topLevelType, e.eventSystemFlags, e.container, e.nativeEvent);
            null !== t ? e.blockedOn = t : bt.shift()
        }
        null !== wt && Nt(wt) && (wt = null), null !== xt && Nt(xt) && (xt = null), null !== kt && Nt(kt) && (kt = null), Et.forEach(Dt), Ct.forEach(Dt)
    }

    function Rt(e, t) {
        e.blockedOn === t && (e.blockedOn = null, yt || (yt = !0, o.unstable_scheduleCallback(o.unstable_NormalPriority, zt)))
    }

    function Lt(e) {
        function t(t) {
            return Rt(t, e)
        }
        if (0 < bt.length) {
            Rt(bt[0], e);
            for (var n = 1; n < bt.length; n++) {
                var r = bt[n];
                r.blockedOn === e && (r.blockedOn = null)
            }
        }
        for (null !== wt && Rt(wt, e), null !== xt && Rt(xt, e), null !== kt && Rt(kt, e), Et.forEach(t), Ct.forEach(t), n = 0; n < Tt.length; n++)(r = Tt[n]).blockedOn === e && (r.blockedOn = null);
        for (; 0 < Tt.length && null === (n = Tt[0]).blockedOn;) Mt(n), null === n.blockedOn && Tt.shift()
    }
    var Ft = {},
        It = new Map,
        Ut = new Map,
        At = ["abort", "abort", qe, "animationEnd", $e, "animationIteration", Ye, "animationStart", "canplay", "canPlay", "canplaythrough", "canPlayThrough", "durationchange", "durationChange", "emptied", "emptied", "encrypted", "encrypted", "ended", "ended", "error", "error", "gotpointercapture", "gotPointerCapture", "load", "load", "loadeddata", "loadedData", "loadedmetadata", "loadedMetadata", "loadstart", "loadStart", "lostpointercapture", "lostPointerCapture", "playing", "playing", "progress", "progress", "seeking", "seeking", "stalled", "stalled", "suspend", "suspend", "timeupdate", "timeUpdate", Ke, "transitionEnd", "waiting", "waiting"];

    function Bt(e, t) {
        for (var n = 0; n < e.length; n += 2) {
            var r = e[n],
                a = e[n + 1],
                o = "on" + (a[0].toUpperCase() + a.slice(1));
            o = {
                phasedRegistrationNames: {
                    bubbled: o,
                    captured: o + "Capture"
                },
                dependencies: [r],
                eventPriority: t
            }, Ut.set(r, t), It.set(r, o), Ft[a] = o
        }
    }
    Bt("blur blur cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focus focus input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "), 0), Bt("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "), 1), Bt(At, 2);
    for (var Ht = "change selectionchange textInput compositionstart compositionend compositionupdate".split(" "), Wt = 0; Wt < Ht.length; Wt++) Ut.set(Ht[Wt], 0);
    var Vt = o.unstable_UserBlockingPriority,
        Qt = o.unstable_runWithPriority,
        qt = !0;

    function $t(e, t) {
        Yt(t, e, !1)
    }

    function Yt(e, t, n) {
        var r = Ut.get(t);
        switch (void 0 === r ? 2 : r) {
            case 0:
                r = Kt.bind(null, t, 1, e);
                break;
            case 1:
                r = Gt.bind(null, t, 1, e);
                break;
            default:
                r = Xt.bind(null, t, 1, e)
        }
        n ? e.addEventListener(t, r, !0) : e.addEventListener(t, r, !1)
    }

    function Kt(e, t, n, r) {
        I || L();
        var a = Xt,
            o = I;
        I = !0;
        try {
            R(a, e, t, n, r)
        } finally {
            (I = o) || A()
        }
    }

    function Gt(e, t, n, r) {
        Qt(Vt, Xt.bind(null, e, t, n, r))
    }

    function Xt(e, t, n, r) {
        if (qt)
            if (0 < bt.length && -1 < St.indexOf(e)) e = Pt(null, e, t, n, r), bt.push(e);
            else {
                var a = Zt(e, t, n, r);
                if (null === a) _t(e, r);
                else if (-1 < St.indexOf(e)) e = Pt(a, e, t, n, r), bt.push(e);
                else if (! function (e, t, n, r, a) {
                    switch (t) {
                        case "focus":
                            return wt = jt(wt, e, t, n, r, a), !0;
                        case "dragenter":
                            return xt = jt(xt, e, t, n, r, a), !0;
                        case "mouseover":
                            return kt = jt(kt, e, t, n, r, a), !0;
                        case "pointerover":
                            var o = a.pointerId;
                            return Et.set(o, jt(Et.get(o) || null, e, t, n, r, a)), !0;
                        case "gotpointercapture":
                            return o = a.pointerId, Ct.set(o, jt(Ct.get(o) || null, e, t, n, r, a)), !0
                    }
                    return !1
                }(a, e, t, n, r)) {
                    _t(e, r), e = dt(e, r, null, t);
                    try {
                        B(pt, e)
                    } finally {
                        ft(e)
                    }
                }
            }
    }

    function Zt(e, t, n, r) {
        if (null !== (n = On(n = ut(r)))) {
            var a = Je(n);
            if (null === a) n = null;
            else {
                var o = a.tag;
                if (13 === o) {
                    if (null !== (n = et(a))) return n;
                    n = null
                } else if (3 === o) {
                    if (a.stateNode.hydrate) return 3 === a.tag ? a.stateNode.containerInfo : null;
                    n = null
                } else a !== n && (n = null)
            }
        }
        e = dt(e, r, n, t);
        try {
            B(pt, e)
        } finally {
            ft(e)
        }
        return null
    }
    var Jt = {
        animationIterationCount: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0
    },
        en = ["Webkit", "ms", "Moz", "O"];

    function tn(e, t, n) {
        return null == t || "boolean" == typeof t || "" === t ? "" : n || "number" != typeof t || 0 === t || Jt.hasOwnProperty(e) && Jt[e] ? ("" + t).trim() : t + "px"
    }

    function nn(e, t) {
        for (var n in e = e.style, t)
            if (t.hasOwnProperty(n)) {
                var r = 0 === n.indexOf("--"),
                    a = tn(n, t[n], r);
                "float" === n && (n = "cssFloat"), r ? e.setProperty(n, a) : e[n] = a
            }
    }
    Object.keys(Jt).forEach((function (e) {
        en.forEach((function (t) {
            t = t + e.charAt(0).toUpperCase() + e.substring(1), Jt[t] = Jt[e]
        }))
    }));
    var rn = a({
        menuitem: !0
    }, {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    });

    function an(e, t) {
        if (t) {
            if (rn[e] && (null != t.children || null != t.dangerouslySetInnerHTML)) throw Error(i(137, e, ""));
            if (null != t.dangerouslySetInnerHTML) {
                if (null != t.children) throw Error(i(60));
                if ("object" != typeof t.dangerouslySetInnerHTML || !("__html" in t.dangerouslySetInnerHTML)) throw Error(i(61))
            }
            if (null != t.style && "object" != typeof t.style) throw Error(i(62, ""))
        }
    }

    function on(e, t) {
        if (-1 === e.indexOf("-")) return "string" == typeof t.is;
        switch (e) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
                return !1;
            default:
                return !0
        }
    }
    var ln = ze;

    function un(e, t) {
        var n = Ze(e = 9 === e.nodeType || 11 === e.nodeType ? e : e.ownerDocument);
        t = T[t];
        for (var r = 0; r < t.length; r++) mt(t[r], e, n)
    }

    function cn() { }

    function sn(e) {
        if (void 0 === (e = e || ("undefined" != typeof document ? document : void 0))) return null;
        try {
            return e.activeElement || e.body
        } catch (t) {
            return e.body
        }
    }

    function fn(e) {
        for (; e && e.firstChild;) e = e.firstChild;
        return e
    }

    function dn(e, t) {
        var n, r = fn(e);
        for (e = 0; r;) {
            if (3 === r.nodeType) {
                if (n = e + r.textContent.length, e <= t && n >= t) return {
                    node: r,
                    offset: t - e
                };
                e = n
            }
            e: {
                for (; r;) {
                    if (r.nextSibling) {
                        r = r.nextSibling;
                        break e
                    }
                    r = r.parentNode
                }
                r = void 0
            }
            r = fn(r)
        }
    }

    function pn() {
        for (var e = window, t = sn(); t instanceof e.HTMLIFrameElement;) {
            try {
                var n = "string" == typeof t.contentWindow.location.href
            } catch (e) {
                n = !1
            }
            if (!n) break;
            t = sn((e = t.contentWindow).document)
        }
        return t
    }

    function mn(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t && ("input" === t && ("text" === e.type || "search" === e.type || "tel" === e.type || "url" === e.type || "password" === e.type) || "textarea" === t || "true" === e.contentEditable)
    }
    var hn = null,
        gn = null;

    function vn(e, t) {
        switch (e) {
            case "button":
            case "input":
            case "select":
            case "textarea":
                return !!t.autoFocus
        }
        return !1
    }

    function yn(e, t) {
        return "textarea" === e || "option" === e || "noscript" === e || "string" == typeof t.children || "number" == typeof t.children || "object" == typeof t.dangerouslySetInnerHTML && null !== t.dangerouslySetInnerHTML && null != t.dangerouslySetInnerHTML.__html
    }
    var bn = "function" == typeof setTimeout ? setTimeout : void 0,
        wn = "function" == typeof clearTimeout ? clearTimeout : void 0;

    function xn(e) {
        for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t) break
        }
        return e
    }

    function kn(e) {
        e = e.previousSibling;
        for (var t = 0; e;) {
            if (8 === e.nodeType) {
                var n = e.data;
                if ("$" === n || "$!" === n || "$?" === n) {
                    if (0 === t) return e;
                    t--
                } else "/$" === n && t++
            }
            e = e.previousSibling
        }
        return null
    }
    var En = Math.random().toString(36).slice(2),
        Cn = "__reactInternalInstance$" + En,
        Tn = "__reactEventHandlers$" + En,
        Sn = "__reactContainere$" + En;

    function On(e) {
        var t = e[Cn];
        if (t) return t;
        for (var n = e.parentNode; n;) {
            if (t = n[Sn] || n[Cn]) {
                if (n = t.alternate, null !== t.child || null !== n && null !== n.child)
                    for (e = kn(e); null !== e;) {
                        if (n = e[Cn]) return n;
                        e = kn(e)
                    }
                return t
            }
            n = (e = n).parentNode
        }
        return null
    }

    function Pn(e) {
        return !(e = e[Cn] || e[Sn]) || 5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag ? null : e
    }

    function _n(e) {
        if (5 === e.tag || 6 === e.tag) return e.stateNode;
        throw Error(i(33))
    }

    function jn(e) {
        return e[Tn] || null
    }

    function Mn(e) {
        do {
            e = e.return
        } while (e && 5 !== e.tag);
        return e || null
    }

    function Nn(e, t) {
        var n = e.stateNode;
        if (!n) return null;
        var r = m(n);
        if (!r) return null;
        n = r[t];
        e: switch (t) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
                (r = !r.disabled) || (r = !("button" === (e = e.type) || "input" === e || "select" === e || "textarea" === e)), e = !r;
                break e;
            default:
                e = !1
        }
        if (e) return null;
        if (n && "function" != typeof n) throw Error(i(231, t, typeof n));
        return n
    }

    function Dn(e, t, n) {
        (t = Nn(e, n.dispatchConfig.phasedRegistrationNames[t])) && (n._dispatchListeners = rt(n._dispatchListeners, t), n._dispatchInstances = rt(n._dispatchInstances, e))
    }

    function zn(e) {
        if (e && e.dispatchConfig.phasedRegistrationNames) {
            for (var t = e._targetInst, n = []; t;) n.push(t), t = Mn(t);
            for (t = n.length; 0 < t--;) Dn(n[t], "captured", e);
            for (t = 0; t < n.length; t++) Dn(n[t], "bubbled", e)
        }
    }

    function Rn(e, t, n) {
        e && n && n.dispatchConfig.registrationName && (t = Nn(e, n.dispatchConfig.registrationName)) && (n._dispatchListeners = rt(n._dispatchListeners, t), n._dispatchInstances = rt(n._dispatchInstances, e))
    }

    function Ln(e) {
        e && e.dispatchConfig.registrationName && Rn(e._targetInst, null, e)
    }

    function Fn(e) {
        at(e, zn)
    }
    var In = null,
        Un = null,
        An = null;

    function Bn() {
        if (An) return An;
        var e, t, n = Un,
            r = n.length,
            a = "value" in In ? In.value : In.textContent,
            o = a.length;
        for (e = 0; e < r && n[e] === a[e]; e++);
        var i = r - e;
        for (t = 1; t <= i && n[r - t] === a[o - t]; t++);
        return An = a.slice(e, 1 < t ? 1 - t : void 0)
    }

    function Hn() {
        return !0
    }

    function Wn() {
        return !1
    }

    function Vn(e, t, n, r) {
        for (var a in this.dispatchConfig = e, this._targetInst = t, this.nativeEvent = n, e = this.constructor.Interface) e.hasOwnProperty(a) && ((t = e[a]) ? this[a] = t(n) : "target" === a ? this.target = r : this[a] = n[a]);
        return this.isDefaultPrevented = (null != n.defaultPrevented ? n.defaultPrevented : !1 === n.returnValue) ? Hn : Wn, this.isPropagationStopped = Wn, this
    }

    function Qn(e, t, n, r) {
        if (this.eventPool.length) {
            var a = this.eventPool.pop();
            return this.call(a, e, t, n, r), a
        }
        return new this(e, t, n, r)
    }

    function qn(e) {
        if (!(e instanceof this)) throw Error(i(279));
        e.destructor(), 10 > this.eventPool.length && this.eventPool.push(e)
    }

    function $n(e) {
        e.eventPool = [], e.getPooled = Qn, e.release = qn
    }
    a(Vn.prototype, {
        preventDefault: function () {
            this.defaultPrevented = !0;
            var e = this.nativeEvent;
            e && (e.preventDefault ? e.preventDefault() : "unknown" != typeof e.returnValue && (e.returnValue = !1), this.isDefaultPrevented = Hn)
        },
        stopPropagation: function () {
            var e = this.nativeEvent;
            e && (e.stopPropagation ? e.stopPropagation() : "unknown" != typeof e.cancelBubble && (e.cancelBubble = !0), this.isPropagationStopped = Hn)
        },
        persist: function () {
            this.isPersistent = Hn
        },
        isPersistent: Wn,
        destructor: function () {
            var e, t = this.constructor.Interface;
            for (e in t) this[e] = null;
            this.nativeEvent = this._targetInst = this.dispatchConfig = null, this.isPropagationStopped = this.isDefaultPrevented = Wn, this._dispatchInstances = this._dispatchListeners = null
        }
    }), Vn.Interface = {
        type: null,
        target: null,
        currentTarget: function () {
            return null
        },
        eventPhase: null,
        bubbles: null,
        cancelable: null,
        timeStamp: function (e) {
            return e.timeStamp || Date.now()
        },
        defaultPrevented: null,
        isTrusted: null
    }, Vn.extend = function (e) {
        function t() { }

        function n() {
            return r.apply(this, arguments)
        }
        var r = this;
        t.prototype = r.prototype;
        var o = new t;
        return a(o, n.prototype), n.prototype = o, n.prototype.constructor = n, n.Interface = a({}, r.Interface, e), n.extend = r.extend, $n(n), n
    }, $n(Vn);
    var Yn = Vn.extend({
        data: null
    }),
        Kn = Vn.extend({
            data: null
        }),
        Gn = [9, 13, 27, 32],
        Xn = O && "CompositionEvent" in window,
        Zn = null;
    O && "documentMode" in document && (Zn = document.documentMode);
    var Jn = O && "TextEvent" in window && !Zn,
        er = O && (!Xn || Zn && 8 < Zn && 11 >= Zn),
        tr = String.fromCharCode(32),
        nr = {
            beforeInput: {
                phasedRegistrationNames: {
                    bubbled: "onBeforeInput",
                    captured: "onBeforeInputCapture"
                },
                dependencies: ["compositionend", "keypress", "textInput", "paste"]
            },
            compositionEnd: {
                phasedRegistrationNames: {
                    bubbled: "onCompositionEnd",
                    captured: "onCompositionEndCapture"
                },
                dependencies: "blur compositionend keydown keypress keyup mousedown".split(" ")
            },
            compositionStart: {
                phasedRegistrationNames: {
                    bubbled: "onCompositionStart",
                    captured: "onCompositionStartCapture"
                },
                dependencies: "blur compositionstart keydown keypress keyup mousedown".split(" ")
            },
            compositionUpdate: {
                phasedRegistrationNames: {
                    bubbled: "onCompositionUpdate",
                    captured: "onCompositionUpdateCapture"
                },
                dependencies: "blur compositionupdate keydown keypress keyup mousedown".split(" ")
            }
        },
        rr = !1;

    function ar(e, t) {
        switch (e) {
            case "keyup":
                return -1 !== Gn.indexOf(t.keyCode);
            case "keydown":
                return 229 !== t.keyCode;
            case "keypress":
            case "mousedown":
            case "blur":
                return !0;
            default:
                return !1
        }
    }

    function or(e) {
        return "object" == typeof (e = e.detail) && "data" in e ? e.data : null
    }
    var ir = !1;
    var lr = {
        eventTypes: nr,
        extractEvents: function (e, t, n, r) {
            var a;
            if (Xn) e: {
                switch (e) {
                    case "compositionstart":
                        var o = nr.compositionStart;
                        break e;
                    case "compositionend":
                        o = nr.compositionEnd;
                        break e;
                    case "compositionupdate":
                        o = nr.compositionUpdate;
                        break e
                }
                o = void 0
            }
            else ir ? ar(e, n) && (o = nr.compositionEnd) : "keydown" === e && 229 === n.keyCode && (o = nr.compositionStart);
            return o ? (er && "ko" !== n.locale && (ir || o !== nr.compositionStart ? o === nr.compositionEnd && ir && (a = Bn()) : (Un = "value" in (In = r) ? In.value : In.textContent, ir = !0)), o = Yn.getPooled(o, t, n, r), a ? o.data = a : null !== (a = or(n)) && (o.data = a), Fn(o), a = o) : a = null, (e = Jn ? function (e, t) {
                switch (e) {
                    case "compositionend":
                        return or(t);
                    case "keypress":
                        return 32 !== t.which ? null : (rr = !0, tr);
                    case "textInput":
                        return (e = t.data) === tr && rr ? null : e;
                    default:
                        return null
                }
            }(e, n) : function (e, t) {
                if (ir) return "compositionend" === e || !Xn && ar(e, t) ? (e = Bn(), An = Un = In = null, ir = !1, e) : null;
                switch (e) {
                    case "paste":
                        return null;
                    case "keypress":
                        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                            if (t.char && 1 < t.char.length) return t.char;
                            if (t.which) return String.fromCharCode(t.which)
                        }
                        return null;
                    case "compositionend":
                        return er && "ko" !== t.locale ? null : t.data;
                    default:
                        return null
                }
            }(e, n)) ? ((t = Kn.getPooled(nr.beforeInput, t, n, r)).data = e, Fn(t)) : t = null, null === a ? t : null === t ? a : [a, t]
        }
    },
        ur = {
            color: !0,
            date: !0,
            datetime: !0,
            "datetime-local": !0,
            email: !0,
            month: !0,
            number: !0,
            password: !0,
            range: !0,
            search: !0,
            tel: !0,
            text: !0,
            time: !0,
            url: !0,
            week: !0
        };

    function cr(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return "input" === t ? !!ur[e.type] : "textarea" === t
    }
    var sr = {
        change: {
            phasedRegistrationNames: {
                bubbled: "onChange",
                captured: "onChangeCapture"
            },
            dependencies: "blur change click focus input keydown keyup selectionchange".split(" ")
        }
    };

    function fr(e, t, n) {
        return (e = Vn.getPooled(sr.change, e, t, n)).type = "change", N(n), Fn(e), e
    }
    var dr = null,
        pr = null;

    function mr(e) {
        lt(e)
    }

    function hr(e) {
        if (xe(_n(e))) return e
    }

    function gr(e, t) {
        if ("change" === e) return t
    }
    var vr = !1;

    function yr() {
        dr && (dr.detachEvent("onpropertychange", br), pr = dr = null)
    }

    function br(e) {
        if ("value" === e.propertyName && hr(pr))
            if (e = fr(pr, e, ut(e)), I) lt(e);
            else {
                I = !0;
                try {
                    z(mr, e)
                } finally {
                    I = !1, A()
                }
            }
    }

    function wr(e, t, n) {
        "focus" === e ? (yr(), pr = n, (dr = t).attachEvent("onpropertychange", br)) : "blur" === e && yr()
    }

    function xr(e) {
        if ("selectionchange" === e || "keyup" === e || "keydown" === e) return hr(pr)
    }

    function kr(e, t) {
        if ("click" === e) return hr(t)
    }

    function Er(e, t) {
        if ("input" === e || "change" === e) return hr(t)
    }
    O && (vr = ct("input") && (!document.documentMode || 9 < document.documentMode));
    var Cr = {
        eventTypes: sr,
        _isInputEventSupported: vr,
        extractEvents: function (e, t, n, r) {
            var a = t ? _n(t) : window,
                o = a.nodeName && a.nodeName.toLowerCase();
            if ("select" === o || "input" === o && "file" === a.type) var i = gr;
            else if (cr(a))
                if (vr) i = Er;
                else {
                    i = xr;
                    var l = wr
                }
            else (o = a.nodeName) && "input" === o.toLowerCase() && ("checkbox" === a.type || "radio" === a.type) && (i = kr);
            if (i && (i = i(e, t))) return fr(i, n, r);
            l && l(e, a, t), "blur" === e && (e = a._wrapperState) && e.controlled && "number" === a.type && Oe(a, "number", a.value)
        }
    },
        Tr = Vn.extend({
            view: null,
            detail: null
        }),
        Sr = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey"
        };

    function Or(e) {
        var t = this.nativeEvent;
        return t.getModifierState ? t.getModifierState(e) : !!(e = Sr[e]) && !!t[e]
    }

    function Pr() {
        return Or
    }
    var _r = 0,
        jr = 0,
        Mr = !1,
        Nr = !1,
        Dr = Tr.extend({
            screenX: null,
            screenY: null,
            clientX: null,
            clientY: null,
            pageX: null,
            pageY: null,
            ctrlKey: null,
            shiftKey: null,
            altKey: null,
            metaKey: null,
            getModifierState: Pr,
            button: null,
            buttons: null,
            relatedTarget: function (e) {
                return e.relatedTarget || (e.fromElement === e.srcElement ? e.toElement : e.fromElement)
            },
            movementX: function (e) {
                if ("movementX" in e) return e.movementX;
                var t = _r;
                return _r = e.screenX, Mr ? "mousemove" === e.type ? e.screenX - t : 0 : (Mr = !0, 0)
            },
            movementY: function (e) {
                if ("movementY" in e) return e.movementY;
                var t = jr;
                return jr = e.screenY, Nr ? "mousemove" === e.type ? e.screenY - t : 0 : (Nr = !0, 0)
            }
        }),
        zr = Dr.extend({
            pointerId: null,
            width: null,
            height: null,
            pressure: null,
            tangentialPressure: null,
            tiltX: null,
            tiltY: null,
            twist: null,
            pointerType: null,
            isPrimary: null
        }),
        Rr = {
            mouseEnter: {
                registrationName: "onMouseEnter",
                dependencies: ["mouseout", "mouseover"]
            },
            mouseLeave: {
                registrationName: "onMouseLeave",
                dependencies: ["mouseout", "mouseover"]
            },
            pointerEnter: {
                registrationName: "onPointerEnter",
                dependencies: ["pointerout", "pointerover"]
            },
            pointerLeave: {
                registrationName: "onPointerLeave",
                dependencies: ["pointerout", "pointerover"]
            }
        },
        Lr = {
            eventTypes: Rr,
            extractEvents: function (e, t, n, r, a) {
                var o = "mouseover" === e || "pointerover" === e,
                    i = "mouseout" === e || "pointerout" === e;
                if (o && 0 == (32 & a) && (n.relatedTarget || n.fromElement) || !i && !o) return null;
                (o = r.window === r ? r : (o = r.ownerDocument) ? o.defaultView || o.parentWindow : window, i) ? (i = t, null !== (t = (t = n.relatedTarget || n.toElement) ? On(t) : null) && (t !== Je(t) || 5 !== t.tag && 6 !== t.tag) && (t = null)) : i = null;
                if (i === t) return null;
                if ("mouseout" === e || "mouseover" === e) var l = Dr,
                    u = Rr.mouseLeave,
                    c = Rr.mouseEnter,
                    s = "mouse";
                else "pointerout" !== e && "pointerover" !== e || (l = zr, u = Rr.pointerLeave, c = Rr.pointerEnter, s = "pointer");
                if (e = null == i ? o : _n(i), o = null == t ? o : _n(t), (u = l.getPooled(u, i, n, r)).type = s + "leave", u.target = e, u.relatedTarget = o, (n = l.getPooled(c, t, n, r)).type = s + "enter", n.target = o, n.relatedTarget = e, s = t, (r = i) && s) e: {
                    for (c = s, i = 0, e = l = r; e; e = Mn(e)) i++;
                    for (e = 0, t = c; t; t = Mn(t)) e++;
                    for (; 0 < i - e;) l = Mn(l),
                        i--;
                    for (; 0 < e - i;) c = Mn(c),
                        e--;
                    for (; i--;) {
                        if (l === c || l === c.alternate) break e;
                        l = Mn(l), c = Mn(c)
                    }
                    l = null
                }
                else l = null;
                for (c = l, l = []; r && r !== c && (null === (i = r.alternate) || i !== c);) l.push(r), r = Mn(r);
                for (r = []; s && s !== c && (null === (i = s.alternate) || i !== c);) r.push(s), s = Mn(s);
                for (s = 0; s < l.length; s++) Rn(l[s], "bubbled", u);
                for (s = r.length; 0 < s--;) Rn(r[s], "captured", n);
                return 0 == (64 & a) ? [u] : [u, n]
            }
        };
    var Fr = "function" == typeof Object.is ? Object.is : function (e, t) {
        return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
    },
        Ir = Object.prototype.hasOwnProperty;

    function Ur(e, t) {
        if (Fr(e, t)) return !0;
        if ("object" != typeof e || null === e || "object" != typeof t || null === t) return !1;
        var n = Object.keys(e),
            r = Object.keys(t);
        if (n.length !== r.length) return !1;
        for (r = 0; r < n.length; r++)
            if (!Ir.call(t, n[r]) || !Fr(e[n[r]], t[n[r]])) return !1;
        return !0
    }
    var Ar = O && "documentMode" in document && 11 >= document.documentMode,
        Br = {
            select: {
                phasedRegistrationNames: {
                    bubbled: "onSelect",
                    captured: "onSelectCapture"
                },
                dependencies: "blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ")
            }
        },
        Hr = null,
        Wr = null,
        Vr = null,
        Qr = !1;

    function qr(e, t) {
        var n = t.window === t ? t.document : 9 === t.nodeType ? t : t.ownerDocument;
        return Qr || null == Hr || Hr !== sn(n) ? null : ("selectionStart" in (n = Hr) && mn(n) ? n = {
            start: n.selectionStart,
            end: n.selectionEnd
        } : n = {
            anchorNode: (n = (n.ownerDocument && n.ownerDocument.defaultView || window).getSelection()).anchorNode,
            anchorOffset: n.anchorOffset,
            focusNode: n.focusNode,
            focusOffset: n.focusOffset
        }, Vr && Ur(Vr, n) ? null : (Vr = n, (e = Vn.getPooled(Br.select, Wr, e, t)).type = "select", e.target = Hr, Fn(e), e))
    }
    var $r = {
        eventTypes: Br,
        extractEvents: function (e, t, n, r, a, o) {
            if (!(o = !(a = o || (r.window === r ? r.document : 9 === r.nodeType ? r : r.ownerDocument)))) {
                e: {
                    a = Ze(a),
                        o = T.onSelect;
                    for (var i = 0; i < o.length; i++)
                        if (!a.has(o[i])) {
                            a = !1;
                            break e
                        } a = !0
                }
                o = !a
            }
            if (o) return null;
            switch (a = t ? _n(t) : window, e) {
                case "focus":
                    (cr(a) || "true" === a.contentEditable) && (Hr = a, Wr = t, Vr = null);
                    break;
                case "blur":
                    Vr = Wr = Hr = null;
                    break;
                case "mousedown":
                    Qr = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    return Qr = !1, qr(n, r);
                case "selectionchange":
                    if (Ar) break;
                case "keydown":
                case "keyup":
                    return qr(n, r)
            }
            return null
        }
    },
        Yr = Vn.extend({
            animationName: null,
            elapsedTime: null,
            pseudoElement: null
        }),
        Kr = Vn.extend({
            clipboardData: function (e) {
                return "clipboardData" in e ? e.clipboardData : window.clipboardData
            }
        }),
        Gr = Tr.extend({
            relatedTarget: null
        });

    function Xr(e) {
        var t = e.keyCode;
        return "charCode" in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : e = t, 10 === e && (e = 13), 32 <= e || 13 === e ? e : 0
    }
    var Zr = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
    },
        Jr = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta"
        },
        ea = Tr.extend({
            key: function (e) {
                if (e.key) {
                    var t = Zr[e.key] || e.key;
                    if ("Unidentified" !== t) return t
                }
                return "keypress" === e.type ? 13 === (e = Xr(e)) ? "Enter" : String.fromCharCode(e) : "keydown" === e.type || "keyup" === e.type ? Jr[e.keyCode] || "Unidentified" : ""
            },
            location: null,
            ctrlKey: null,
            shiftKey: null,
            altKey: null,
            metaKey: null,
            repeat: null,
            locale: null,
            getModifierState: Pr,
            charCode: function (e) {
                return "keypress" === e.type ? Xr(e) : 0
            },
            keyCode: function (e) {
                return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
            },
            which: function (e) {
                return "keypress" === e.type ? Xr(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
            }
        }),
        ta = Dr.extend({
            dataTransfer: null
        }),
        na = Tr.extend({
            touches: null,
            targetTouches: null,
            changedTouches: null,
            altKey: null,
            metaKey: null,
            ctrlKey: null,
            shiftKey: null,
            getModifierState: Pr
        }),
        ra = Vn.extend({
            propertyName: null,
            elapsedTime: null,
            pseudoElement: null
        }),
        aa = Dr.extend({
            deltaX: function (e) {
                return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
            },
            deltaY: function (e) {
                return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
            },
            deltaZ: null,
            deltaMode: null
        }),
        oa = {
            eventTypes: Ft,
            extractEvents: function (e, t, n, r) {
                var a = It.get(e);
                if (!a) return null;
                switch (e) {
                    case "keypress":
                        if (0 === Xr(n)) return null;
                    case "keydown":
                    case "keyup":
                        e = ea;
                        break;
                    case "blur":
                    case "focus":
                        e = Gr;
                        break;
                    case "click":
                        if (2 === n.button) return null;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        e = Dr;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        e = ta;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        e = na;
                        break;
                    case qe:
                    case $e:
                    case Ye:
                        e = Yr;
                        break;
                    case Ke:
                        e = ra;
                        break;
                    case "scroll":
                        e = Tr;
                        break;
                    case "wheel":
                        e = aa;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        e = Kr;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        e = zr;
                        break;
                    default:
                        e = Vn
                }
                return Fn(t = e.getPooled(a, t, n, r)), t
            }
        };
    if (y) throw Error(i(101));
    y = Array.prototype.slice.call("ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" ")), w(), m = jn, h = Pn, g = _n, S({
        SimpleEventPlugin: oa,
        EnterLeaveEventPlugin: Lr,
        ChangeEventPlugin: Cr,
        SelectEventPlugin: $r,
        BeforeInputEventPlugin: lr
    });
    var ia = [],
        la = -1;

    function ua(e) {
        0 > la || (e.current = ia[la], ia[la] = null, la--)
    }

    function ca(e, t) {
        la++, ia[la] = e.current, e.current = t
    }
    var sa = {},
        fa = {
            current: sa
        },
        da = {
            current: !1
        },
        pa = sa;

    function ma(e, t) {
        var n = e.type.contextTypes;
        if (!n) return sa;
        var r = e.stateNode;
        if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
        var a, o = {};
        for (a in n) o[a] = t[a];
        return r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o
    }

    function ha(e) {
        return null != (e = e.childContextTypes)
    }

    function ga() {
        ua(da), ua(fa)
    }

    function va(e, t, n) {
        if (fa.current !== sa) throw Error(i(168));
        ca(fa, t), ca(da, n)
    }

    function ya(e, t, n) {
        var r = e.stateNode;
        if (e = t.childContextTypes, "function" != typeof r.getChildContext) return n;
        for (var o in r = r.getChildContext())
            if (!(o in e)) throw Error(i(108, ge(t) || "Unknown", o));
        return a({}, n, {}, r)
    }

    function ba(e) {
        return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || sa, pa = fa.current, ca(fa, e), ca(da, da.current), !0
    }

    function wa(e, t, n) {
        var r = e.stateNode;
        if (!r) throw Error(i(169));
        n ? (e = ya(e, t, pa), r.__reactInternalMemoizedMergedChildContext = e, ua(da), ua(fa), ca(fa, e)) : ua(da), ca(da, n)
    }
    var xa = o.unstable_runWithPriority,
        ka = o.unstable_scheduleCallback,
        Ea = o.unstable_cancelCallback,
        Ca = o.unstable_requestPaint,
        Ta = o.unstable_now,
        Sa = o.unstable_getCurrentPriorityLevel,
        Oa = o.unstable_ImmediatePriority,
        Pa = o.unstable_UserBlockingPriority,
        _a = o.unstable_NormalPriority,
        ja = o.unstable_LowPriority,
        Ma = o.unstable_IdlePriority,
        Na = {},
        Da = o.unstable_shouldYield,
        za = void 0 !== Ca ? Ca : function () { },
        Ra = null,
        La = null,
        Fa = !1,
        Ia = Ta(),
        Ua = 1e4 > Ia ? Ta : function () {
            return Ta() - Ia
        };

    function Aa() {
        switch (Sa()) {
            case Oa:
                return 99;
            case Pa:
                return 98;
            case _a:
                return 97;
            case ja:
                return 96;
            case Ma:
                return 95;
            default:
                throw Error(i(332))
        }
    }

    function Ba(e) {
        switch (e) {
            case 99:
                return Oa;
            case 98:
                return Pa;
            case 97:
                return _a;
            case 96:
                return ja;
            case 95:
                return Ma;
            default:
                throw Error(i(332))
        }
    }

    function Ha(e, t) {
        return e = Ba(e), xa(e, t)
    }

    function Wa(e, t, n) {
        return e = Ba(e), ka(e, t, n)
    }

    function Va(e) {
        return null === Ra ? (Ra = [e], La = ka(Oa, qa)) : Ra.push(e), Na
    }

    function Qa() {
        if (null !== La) {
            var e = La;
            La = null, Ea(e)
        }
        qa()
    }

    function qa() {
        if (!Fa && null !== Ra) {
            Fa = !0;
            var e = 0;
            try {
                var t = Ra;
                Ha(99, (function () {
                    for (; e < t.length; e++) {
                        var n = t[e];
                        do {
                            n = n(!0)
                        } while (null !== n)
                    }
                })), Ra = null
            } catch (t) {
                throw null !== Ra && (Ra = Ra.slice(e + 1)), ka(Oa, Qa), t
            } finally {
                Fa = !1
            }
        }
    }

    function $a(e, t, n) {
        return 1073741821 - (1 + ((1073741821 - e + t / 10) / (n /= 10) | 0)) * n
    }

    function Ya(e, t) {
        if (e && e.defaultProps)
            for (var n in t = a({}, t), e = e.defaultProps) void 0 === t[n] && (t[n] = e[n]);
        return t
    }
    var Ka = {
        current: null
    },
        Ga = null,
        Xa = null,
        Za = null;

    function Ja() {
        Za = Xa = Ga = null
    }

    function eo(e) {
        var t = Ka.current;
        ua(Ka), e.type._context._currentValue = t
    }

    function to(e, t) {
        for (; null !== e;) {
            var n = e.alternate;
            if (e.childExpirationTime < t) e.childExpirationTime = t, null !== n && n.childExpirationTime < t && (n.childExpirationTime = t);
            else {
                if (!(null !== n && n.childExpirationTime < t)) break;
                n.childExpirationTime = t
            }
            e = e.return
        }
    }

    function no(e, t) {
        Ga = e, Za = Xa = null, null !== (e = e.dependencies) && null !== e.firstContext && (e.expirationTime >= t && (ji = !0), e.firstContext = null)
    }

    function ro(e, t) {
        if (Za !== e && !1 !== t && 0 !== t)
            if ("number" == typeof t && 1073741823 !== t || (Za = e, t = 1073741823), t = {
                context: e,
                observedBits: t,
                next: null
            }, null === Xa) {
                if (null === Ga) throw Error(i(308));
                Xa = t, Ga.dependencies = {
                    expirationTime: 0,
                    firstContext: t,
                    responders: null
                }
            } else Xa = Xa.next = t;
        return e._currentValue
    }
    var ao = !1;

    function oo(e) {
        e.updateQueue = {
            baseState: e.memoizedState,
            baseQueue: null,
            shared: {
                pending: null
            },
            effects: null
        }
    }

    function io(e, t) {
        e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
            baseState: e.baseState,
            baseQueue: e.baseQueue,
            shared: e.shared,
            effects: e.effects
        })
    }

    function lo(e, t) {
        return (e = {
            expirationTime: e,
            suspenseConfig: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null
        }).next = e
    }

    function uo(e, t) {
        if (null !== (e = e.updateQueue)) {
            var n = (e = e.shared).pending;
            null === n ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
        }
    }

    function co(e, t) {
        var n = e.alternate;
        null !== n && io(n, e), null === (n = (e = e.updateQueue).baseQueue) ? (e.baseQueue = t.next = t, t.next = t) : (t.next = n.next, n.next = t)
    }

    function so(e, t, n, r) {
        var o = e.updateQueue;
        ao = !1;
        var i = o.baseQueue,
            l = o.shared.pending;
        if (null !== l) {
            if (null !== i) {
                var u = i.next;
                i.next = l.next, l.next = u
            }
            i = l, o.shared.pending = null, null !== (u = e.alternate) && (null !== (u = u.updateQueue) && (u.baseQueue = l))
        }
        if (null !== i) {
            u = i.next;
            var c = o.baseState,
                s = 0,
                f = null,
                d = null,
                p = null;
            if (null !== u)
                for (var m = u; ;) {
                    if ((l = m.expirationTime) < r) {
                        var h = {
                            expirationTime: m.expirationTime,
                            suspenseConfig: m.suspenseConfig,
                            tag: m.tag,
                            payload: m.payload,
                            callback: m.callback,
                            next: null
                        };
                        null === p ? (d = p = h, f = c) : p = p.next = h, l > s && (s = l)
                    } else {
                        null !== p && (p = p.next = {
                            expirationTime: 1073741823,
                            suspenseConfig: m.suspenseConfig,
                            tag: m.tag,
                            payload: m.payload,
                            callback: m.callback,
                            next: null
                        }), ou(l, m.suspenseConfig);
                        e: {
                            var g = e,
                                v = m;
                            switch (l = t, h = n, v.tag) {
                                case 1:
                                    if ("function" == typeof (g = v.payload)) {
                                        c = g.call(h, c, l);
                                        break e
                                    }
                                    c = g;
                                    break e;
                                case 3:
                                    g.effectTag = -4097 & g.effectTag | 64;
                                case 0:
                                    if (null == (l = "function" == typeof (g = v.payload) ? g.call(h, c, l) : g)) break e;
                                    c = a({}, c, l);
                                    break e;
                                case 2:
                                    ao = !0
                            }
                        }
                        null !== m.callback && (e.effectTag |= 32, null === (l = o.effects) ? o.effects = [m] : l.push(m))
                    }
                    if (null === (m = m.next) || m === u) {
                        if (null === (l = o.shared.pending)) break;
                        m = i.next = l.next, l.next = u, o.baseQueue = i = l, o.shared.pending = null
                    }
                }
            null === p ? f = c : p.next = d, o.baseState = f, o.baseQueue = p, iu(s), e.expirationTime = s, e.memoizedState = c
        }
    }

    function fo(e, t, n) {
        if (e = t.effects, t.effects = null, null !== e)
            for (t = 0; t < e.length; t++) {
                var r = e[t],
                    a = r.callback;
                if (null !== a) {
                    if (r.callback = null, r = a, a = n, "function" != typeof r) throw Error(i(191, r));
                    r.call(a)
                }
            }
    }
    var po = G.ReactCurrentBatchConfig,
        mo = (new r.Component).refs;

    function ho(e, t, n, r) {
        n = null == (n = n(r, t = e.memoizedState)) ? t : a({}, t, n), e.memoizedState = n, 0 === e.expirationTime && (e.updateQueue.baseState = n)
    }
    var go = {
        isMounted: function (e) {
            return !!(e = e._reactInternalFiber) && Je(e) === e
        },
        enqueueSetState: function (e, t, n) {
            e = e._reactInternalFiber;
            var r = ql(),
                a = po.suspense;
            (a = lo(r = $l(r, e, a), a)).payload = t, null != n && (a.callback = n), uo(e, a), Yl(e, r)
        },
        enqueueReplaceState: function (e, t, n) {
            e = e._reactInternalFiber;
            var r = ql(),
                a = po.suspense;
            (a = lo(r = $l(r, e, a), a)).tag = 1, a.payload = t, null != n && (a.callback = n), uo(e, a), Yl(e, r)
        },
        enqueueForceUpdate: function (e, t) {
            e = e._reactInternalFiber;
            var n = ql(),
                r = po.suspense;
            (r = lo(n = $l(n, e, r), r)).tag = 2, null != t && (r.callback = t), uo(e, r), Yl(e, n)
        }
    };

    function vo(e, t, n, r, a, o, i) {
        return "function" == typeof (e = e.stateNode).shouldComponentUpdate ? e.shouldComponentUpdate(r, o, i) : !t.prototype || !t.prototype.isPureReactComponent || (!Ur(n, r) || !Ur(a, o))
    }

    function yo(e, t, n) {
        var r = !1,
            a = sa,
            o = t.contextType;
        return "object" == typeof o && null !== o ? o = ro(o) : (a = ha(t) ? pa : fa.current, o = (r = null != (r = t.contextTypes)) ? ma(e, a) : sa), t = new t(n, o), e.memoizedState = null !== t.state && void 0 !== t.state ? t.state : null, t.updater = go, e.stateNode = t, t._reactInternalFiber = e, r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = a, e.__reactInternalMemoizedMaskedChildContext = o), t
    }

    function bo(e, t, n, r) {
        e = t.state, "function" == typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, r), "function" == typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && go.enqueueReplaceState(t, t.state, null)
    }

    function wo(e, t, n, r) {
        var a = e.stateNode;
        a.props = n, a.state = e.memoizedState, a.refs = mo, oo(e);
        var o = t.contextType;
        "object" == typeof o && null !== o ? a.context = ro(o) : (o = ha(t) ? pa : fa.current, a.context = ma(e, o)), so(e, n, a, r), a.state = e.memoizedState, "function" == typeof (o = t.getDerivedStateFromProps) && (ho(e, t, o, n), a.state = e.memoizedState), "function" == typeof t.getDerivedStateFromProps || "function" == typeof a.getSnapshotBeforeUpdate || "function" != typeof a.UNSAFE_componentWillMount && "function" != typeof a.componentWillMount || (t = a.state, "function" == typeof a.componentWillMount && a.componentWillMount(), "function" == typeof a.UNSAFE_componentWillMount && a.UNSAFE_componentWillMount(), t !== a.state && go.enqueueReplaceState(a, a.state, null), so(e, n, a, r), a.state = e.memoizedState), "function" == typeof a.componentDidMount && (e.effectTag |= 4)
    }
    var xo = Array.isArray;

    function ko(e, t, n) {
        if (null !== (e = n.ref) && "function" != typeof e && "object" != typeof e) {
            if (n._owner) {
                if (n = n._owner) {
                    if (1 !== n.tag) throw Error(i(309));
                    var r = n.stateNode
                }
                if (!r) throw Error(i(147, e));
                var a = "" + e;
                return null !== t && null !== t.ref && "function" == typeof t.ref && t.ref._stringRef === a ? t.ref : ((t = function (e) {
                    var t = r.refs;
                    t === mo && (t = r.refs = {}), null === e ? delete t[a] : t[a] = e
                })._stringRef = a, t)
            }
            if ("string" != typeof e) throw Error(i(284));
            if (!n._owner) throw Error(i(290, e))
        }
        return e
    }

    function Eo(e, t) {
        if ("textarea" !== e.type) throw Error(i(31, "[object Object]" === Object.prototype.toString.call(t) ? "object with keys {" + Object.keys(t).join(", ") + "}" : t, ""))
    }

    function Co(e) {
        function t(t, n) {
            if (e) {
                var r = t.lastEffect;
                null !== r ? (r.nextEffect = n, t.lastEffect = n) : t.firstEffect = t.lastEffect = n, n.nextEffect = null, n.effectTag = 8
            }
        }

        function n(n, r) {
            if (!e) return null;
            for (; null !== r;) t(n, r), r = r.sibling;
            return null
        }

        function r(e, t) {
            for (e = new Map; null !== t;) null !== t.key ? e.set(t.key, t) : e.set(t.index, t), t = t.sibling;
            return e
        }

        function a(e, t) {
            return (e = Su(e, t)).index = 0, e.sibling = null, e
        }

        function o(t, n, r) {
            return t.index = r, e ? null !== (r = t.alternate) ? (r = r.index) < n ? (t.effectTag = 2, n) : r : (t.effectTag = 2, n) : n
        }

        function l(t) {
            return e && null === t.alternate && (t.effectTag = 2), t
        }

        function u(e, t, n, r) {
            return null === t || 6 !== t.tag ? ((t = _u(n, e.mode, r)).return = e, t) : ((t = a(t, n)).return = e, t)
        }

        function c(e, t, n, r) {
            return null !== t && t.elementType === n.type ? ((r = a(t, n.props)).ref = ko(e, t, n), r.return = e, r) : ((r = Ou(n.type, n.key, n.props, null, e.mode, r)).ref = ko(e, t, n), r.return = e, r)
        }

        function s(e, t, n, r) {
            return null === t || 4 !== t.tag || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation ? ((t = ju(n, e.mode, r)).return = e, t) : ((t = a(t, n.children || [])).return = e, t)
        }

        function f(e, t, n, r, o) {
            return null === t || 7 !== t.tag ? ((t = Pu(n, e.mode, r, o)).return = e, t) : ((t = a(t, n)).return = e, t)
        }

        function d(e, t, n) {
            if ("string" == typeof t || "number" == typeof t) return (t = _u("" + t, e.mode, n)).return = e, t;
            if ("object" == typeof t && null !== t) {
                switch (t.$$typeof) {
                    case ee:
                        return (n = Ou(t.type, t.key, t.props, null, e.mode, n)).ref = ko(e, null, t), n.return = e, n;
                    case te:
                        return (t = ju(t, e.mode, n)).return = e, t
                }
                if (xo(t) || he(t)) return (t = Pu(t, e.mode, n, null)).return = e, t;
                Eo(e, t)
            }
            return null
        }

        function p(e, t, n, r) {
            var a = null !== t ? t.key : null;
            if ("string" == typeof n || "number" == typeof n) return null !== a ? null : u(e, t, "" + n, r);
            if ("object" == typeof n && null !== n) {
                switch (n.$$typeof) {
                    case ee:
                        return n.key === a ? n.type === ne ? f(e, t, n.props.children, r, a) : c(e, t, n, r) : null;
                    case te:
                        return n.key === a ? s(e, t, n, r) : null
                }
                if (xo(n) || he(n)) return null !== a ? null : f(e, t, n, r, null);
                Eo(e, n)
            }
            return null
        }

        function m(e, t, n, r, a) {
            if ("string" == typeof r || "number" == typeof r) return u(t, e = e.get(n) || null, "" + r, a);
            if ("object" == typeof r && null !== r) {
                switch (r.$$typeof) {
                    case ee:
                        return e = e.get(null === r.key ? n : r.key) || null, r.type === ne ? f(t, e, r.props.children, a, r.key) : c(t, e, r, a);
                    case te:
                        return s(t, e = e.get(null === r.key ? n : r.key) || null, r, a)
                }
                if (xo(r) || he(r)) return f(t, e = e.get(n) || null, r, a, null);
                Eo(t, r)
            }
            return null
        }

        function h(a, i, l, u) {
            for (var c = null, s = null, f = i, h = i = 0, g = null; null !== f && h < l.length; h++) {
                f.index > h ? (g = f, f = null) : g = f.sibling;
                var v = p(a, f, l[h], u);
                if (null === v) {
                    null === f && (f = g);
                    break
                }
                e && f && null === v.alternate && t(a, f), i = o(v, i, h), null === s ? c = v : s.sibling = v, s = v, f = g
            }
            if (h === l.length) return n(a, f), c;
            if (null === f) {
                for (; h < l.length; h++) null !== (f = d(a, l[h], u)) && (i = o(f, i, h), null === s ? c = f : s.sibling = f, s = f);
                return c
            }
            for (f = r(a, f); h < l.length; h++) null !== (g = m(f, a, h, l[h], u)) && (e && null !== g.alternate && f.delete(null === g.key ? h : g.key), i = o(g, i, h), null === s ? c = g : s.sibling = g, s = g);
            return e && f.forEach((function (e) {
                return t(a, e)
            })), c
        }

        function g(a, l, u, c) {
            var s = he(u);
            if ("function" != typeof s) throw Error(i(150));
            if (null == (u = s.call(u))) throw Error(i(151));
            for (var f = s = null, h = l, g = l = 0, v = null, y = u.next(); null !== h && !y.done; g++, y = u.next()) {
                h.index > g ? (v = h, h = null) : v = h.sibling;
                var b = p(a, h, y.value, c);
                if (null === b) {
                    null === h && (h = v);
                    break
                }
                e && h && null === b.alternate && t(a, h), l = o(b, l, g), null === f ? s = b : f.sibling = b, f = b, h = v
            }
            if (y.done) return n(a, h), s;
            if (null === h) {
                for (; !y.done; g++, y = u.next()) null !== (y = d(a, y.value, c)) && (l = o(y, l, g), null === f ? s = y : f.sibling = y, f = y);
                return s
            }
            for (h = r(a, h); !y.done; g++, y = u.next()) null !== (y = m(h, a, g, y.value, c)) && (e && null !== y.alternate && h.delete(null === y.key ? g : y.key), l = o(y, l, g), null === f ? s = y : f.sibling = y, f = y);
            return e && h.forEach((function (e) {
                return t(a, e)
            })), s
        }
        return function (e, r, o, u) {
            var c = "object" == typeof o && null !== o && o.type === ne && null === o.key;
            c && (o = o.props.children);
            var s = "object" == typeof o && null !== o;
            if (s) switch (o.$$typeof) {
                case ee:
                    e: {
                        for (s = o.key, c = r; null !== c;) {
                            if (c.key === s) {
                                switch (c.tag) {
                                    case 7:
                                        if (o.type === ne) {
                                            n(e, c.sibling), (r = a(c, o.props.children)).return = e, e = r;
                                            break e
                                        }
                                        break;
                                    default:
                                        if (c.elementType === o.type) {
                                            n(e, c.sibling), (r = a(c, o.props)).ref = ko(e, c, o), r.return = e, e = r;
                                            break e
                                        }
                                }
                                n(e, c);
                                break
                            }
                            t(e, c), c = c.sibling
                        }
                        o.type === ne ? ((r = Pu(o.props.children, e.mode, u, o.key)).return = e, e = r) : ((u = Ou(o.type, o.key, o.props, null, e.mode, u)).ref = ko(e, r, o), u.return = e, e = u)
                    }
                    return l(e);
                case te:
                    e: {
                        for (c = o.key; null !== r;) {
                            if (r.key === c) {
                                if (4 === r.tag && r.stateNode.containerInfo === o.containerInfo && r.stateNode.implementation === o.implementation) {
                                    n(e, r.sibling), (r = a(r, o.children || [])).return = e, e = r;
                                    break e
                                }
                                n(e, r);
                                break
                            }
                            t(e, r), r = r.sibling
                        } (r = ju(o, e.mode, u)).return = e,
                            e = r
                    }
                    return l(e)
            }
            if ("string" == typeof o || "number" == typeof o) return o = "" + o, null !== r && 6 === r.tag ? (n(e, r.sibling), (r = a(r, o)).return = e, e = r) : (n(e, r), (r = _u(o, e.mode, u)).return = e, e = r), l(e);
            if (xo(o)) return h(e, r, o, u);
            if (he(o)) return g(e, r, o, u);
            if (s && Eo(e, o), void 0 === o && !c) switch (e.tag) {
                case 1:
                case 0:
                    throw e = e.type, Error(i(152, e.displayName || e.name || "Component"))
            }
            return n(e, r)
        }
    }
    var To = Co(!0),
        So = Co(!1),
        Oo = {},
        Po = {
            current: Oo
        },
        _o = {
            current: Oo
        },
        jo = {
            current: Oo
        };

    function Mo(e) {
        if (e === Oo) throw Error(i(174));
        return e
    }

    function No(e, t) {
        switch (ca(jo, t), ca(_o, e), ca(Po, Oo), e = t.nodeType) {
            case 9:
            case 11:
                t = (t = t.documentElement) ? t.namespaceURI : Fe(null, "");
                break;
            default:
                t = Fe(t = (e = 8 === e ? t.parentNode : t).namespaceURI || null, e = e.tagName)
        }
        ua(Po), ca(Po, t)
    }

    function Do() {
        ua(Po), ua(_o), ua(jo)
    }

    function zo(e) {
        Mo(jo.current);
        var t = Mo(Po.current),
            n = Fe(t, e.type);
        t !== n && (ca(_o, e), ca(Po, n))
    }

    function Ro(e) {
        _o.current === e && (ua(Po), ua(_o))
    }
    var Lo = {
        current: 0
    };

    function Fo(e) {
        for (var t = e; null !== t;) {
            if (13 === t.tag) {
                var n = t.memoizedState;
                if (null !== n && (null === (n = n.dehydrated) || "$?" === n.data || "$!" === n.data)) return t
            } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
                if (0 != (64 & t.effectTag)) return t
            } else if (null !== t.child) {
                t.child.return = t, t = t.child;
                continue
            }
            if (t === e) break;
            for (; null === t.sibling;) {
                if (null === t.return || t.return === e) return null;
                t = t.return
            }
            t.sibling.return = t.return, t = t.sibling
        }
        return null
    }

    function Io(e, t) {
        return {
            responder: e,
            props: t
        }
    }
    var Uo = G.ReactCurrentDispatcher,
        Ao = G.ReactCurrentBatchConfig,
        Bo = 0,
        Ho = null,
        Wo = null,
        Vo = null,
        Qo = !1;

    function qo() {
        throw Error(i(321))
    }

    function $o(e, t) {
        if (null === t) return !1;
        for (var n = 0; n < t.length && n < e.length; n++)
            if (!Fr(e[n], t[n])) return !1;
        return !0
    }

    function Yo(e, t, n, r, a, o) {
        if (Bo = o, Ho = t, t.memoizedState = null, t.updateQueue = null, t.expirationTime = 0, Uo.current = null === e || null === e.memoizedState ? vi : yi, e = n(r, a), t.expirationTime === Bo) {
            o = 0;
            do {
                if (t.expirationTime = 0, !(25 > o)) throw Error(i(301));
                o += 1, Vo = Wo = null, t.updateQueue = null, Uo.current = bi, e = n(r, a)
            } while (t.expirationTime === Bo)
        }
        if (Uo.current = gi, t = null !== Wo && null !== Wo.next, Bo = 0, Vo = Wo = Ho = null, Qo = !1, t) throw Error(i(300));
        return e
    }

    function Ko() {
        var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return null === Vo ? Ho.memoizedState = Vo = e : Vo = Vo.next = e, Vo
    }

    function Go() {
        if (null === Wo) {
            var e = Ho.alternate;
            e = null !== e ? e.memoizedState : null
        } else e = Wo.next;
        var t = null === Vo ? Ho.memoizedState : Vo.next;
        if (null !== t) Vo = t, Wo = e;
        else {
            if (null === e) throw Error(i(310));
            e = {
                memoizedState: (Wo = e).memoizedState,
                baseState: Wo.baseState,
                baseQueue: Wo.baseQueue,
                queue: Wo.queue,
                next: null
            }, null === Vo ? Ho.memoizedState = Vo = e : Vo = Vo.next = e
        }
        return Vo
    }

    function Xo(e, t) {
        return "function" == typeof t ? t(e) : t
    }

    function Zo(e) {
        var t = Go(),
            n = t.queue;
        if (null === n) throw Error(i(311));
        n.lastRenderedReducer = e;
        var r = Wo,
            a = r.baseQueue,
            o = n.pending;
        if (null !== o) {
            if (null !== a) {
                var l = a.next;
                a.next = o.next, o.next = l
            }
            r.baseQueue = a = o, n.pending = null
        }
        if (null !== a) {
            a = a.next, r = r.baseState;
            var u = l = o = null,
                c = a;
            do {
                var s = c.expirationTime;
                if (s < Bo) {
                    var f = {
                        expirationTime: c.expirationTime,
                        suspenseConfig: c.suspenseConfig,
                        action: c.action,
                        eagerReducer: c.eagerReducer,
                        eagerState: c.eagerState,
                        next: null
                    };
                    null === u ? (l = u = f, o = r) : u = u.next = f, s > Ho.expirationTime && (Ho.expirationTime = s, iu(s))
                } else null !== u && (u = u.next = {
                    expirationTime: 1073741823,
                    suspenseConfig: c.suspenseConfig,
                    action: c.action,
                    eagerReducer: c.eagerReducer,
                    eagerState: c.eagerState,
                    next: null
                }), ou(s, c.suspenseConfig), r = c.eagerReducer === e ? c.eagerState : e(r, c.action);
                c = c.next
            } while (null !== c && c !== a);
            null === u ? o = r : u.next = l, Fr(r, t.memoizedState) || (ji = !0), t.memoizedState = r, t.baseState = o, t.baseQueue = u, n.lastRenderedState = r
        }
        return [t.memoizedState, n.dispatch]
    }

    function Jo(e) {
        var t = Go(),
            n = t.queue;
        if (null === n) throw Error(i(311));
        n.lastRenderedReducer = e;
        var r = n.dispatch,
            a = n.pending,
            o = t.memoizedState;
        if (null !== a) {
            n.pending = null;
            var l = a = a.next;
            do {
                o = e(o, l.action), l = l.next
            } while (l !== a);
            Fr(o, t.memoizedState) || (ji = !0), t.memoizedState = o, null === t.baseQueue && (t.baseState = o), n.lastRenderedState = o
        }
        return [o, r]
    }

    function ei(e) {
        var t = Ko();
        return "function" == typeof e && (e = e()), t.memoizedState = t.baseState = e, e = (e = t.queue = {
            pending: null,
            dispatch: null,
            lastRenderedReducer: Xo,
            lastRenderedState: e
        }).dispatch = hi.bind(null, Ho, e), [t.memoizedState, e]
    }

    function ti(e, t, n, r) {
        return e = {
            tag: e,
            create: t,
            destroy: n,
            deps: r,
            next: null
        }, null === (t = Ho.updateQueue) ? (t = {
            lastEffect: null
        }, Ho.updateQueue = t, t.lastEffect = e.next = e) : null === (n = t.lastEffect) ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e), e
    }

    function ni() {
        return Go().memoizedState
    }

    function ri(e, t, n, r) {
        var a = Ko();
        Ho.effectTag |= e, a.memoizedState = ti(1 | t, n, void 0, void 0 === r ? null : r)
    }

    function ai(e, t, n, r) {
        var a = Go();
        r = void 0 === r ? null : r;
        var o = void 0;
        if (null !== Wo) {
            var i = Wo.memoizedState;
            if (o = i.destroy, null !== r && $o(r, i.deps)) return void ti(t, n, o, r)
        }
        Ho.effectTag |= e, a.memoizedState = ti(1 | t, n, o, r)
    }

    function oi(e, t) {
        return ri(516, 4, e, t)
    }

    function ii(e, t) {
        return ai(516, 4, e, t)
    }

    function li(e, t) {
        return ai(4, 2, e, t)
    }

    function ui(e, t) {
        return "function" == typeof t ? (e = e(), t(e), function () {
            t(null)
        }) : null != t ? (e = e(), t.current = e, function () {
            t.current = null
        }) : void 0
    }

    function ci(e, t, n) {
        return n = null != n ? n.concat([e]) : null, ai(4, 2, ui.bind(null, t, e), n)
    }

    function si() { }

    function fi(e, t) {
        return Ko().memoizedState = [e, void 0 === t ? null : t], e
    }

    function di(e, t) {
        var n = Go();
        t = void 0 === t ? null : t;
        var r = n.memoizedState;
        return null !== r && null !== t && $o(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
    }

    function pi(e, t) {
        var n = Go();
        t = void 0 === t ? null : t;
        var r = n.memoizedState;
        return null !== r && null !== t && $o(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e)
    }

    function mi(e, t, n) {
        var r = Aa();
        Ha(98 > r ? 98 : r, (function () {
            e(!0)
        })), Ha(97 < r ? 97 : r, (function () {
            var r = Ao.suspense;
            Ao.suspense = void 0 === t ? null : t;
            try {
                e(!1), n()
            } finally {
                Ao.suspense = r
            }
        }))
    }

    function hi(e, t, n) {
        var r = ql(),
            a = po.suspense;
        a = {
            expirationTime: r = $l(r, e, a),
            suspenseConfig: a,
            action: n,
            eagerReducer: null,
            eagerState: null,
            next: null
        };
        var o = t.pending;
        if (null === o ? a.next = a : (a.next = o.next, o.next = a), t.pending = a, o = e.alternate, e === Ho || null !== o && o === Ho) Qo = !0, a.expirationTime = Bo, Ho.expirationTime = Bo;
        else {
            if (0 === e.expirationTime && (null === o || 0 === o.expirationTime) && null !== (o = t.lastRenderedReducer)) try {
                var i = t.lastRenderedState,
                    l = o(i, n);
                if (a.eagerReducer = o, a.eagerState = l, Fr(l, i)) return
            } catch (e) { }
            Yl(e, r)
        }
    }
    var gi = {
        readContext: ro,
        useCallback: qo,
        useContext: qo,
        useEffect: qo,
        useImperativeHandle: qo,
        useLayoutEffect: qo,
        useMemo: qo,
        useReducer: qo,
        useRef: qo,
        useState: qo,
        useDebugValue: qo,
        useResponder: qo,
        useDeferredValue: qo,
        useTransition: qo
    },
        vi = {
            readContext: ro,
            useCallback: fi,
            useContext: ro,
            useEffect: oi,
            useImperativeHandle: function (e, t, n) {
                return n = null != n ? n.concat([e]) : null, ri(4, 2, ui.bind(null, t, e), n)
            },
            useLayoutEffect: function (e, t) {
                return ri(4, 2, e, t)
            },
            useMemo: function (e, t) {
                var n = Ko();
                return t = void 0 === t ? null : t, e = e(), n.memoizedState = [e, t], e
            },
            useReducer: function (e, t, n) {
                var r = Ko();
                return t = void 0 !== n ? n(t) : t, r.memoizedState = r.baseState = t, e = (e = r.queue = {
                    pending: null,
                    dispatch: null,
                    lastRenderedReducer: e,
                    lastRenderedState: t
                }).dispatch = hi.bind(null, Ho, e), [r.memoizedState, e]
            },
            useRef: function (e) {
                return e = {
                    current: e
                }, Ko().memoizedState = e
            },
            useState: ei,
            useDebugValue: si,
            useResponder: Io,
            useDeferredValue: function (e, t) {
                var n = ei(e),
                    r = n[0],
                    a = n[1];
                return oi((function () {
                    var n = Ao.suspense;
                    Ao.suspense = void 0 === t ? null : t;
                    try {
                        a(e)
                    } finally {
                        Ao.suspense = n
                    }
                }), [e, t]), r
            },
            useTransition: function (e) {
                var t = ei(!1),
                    n = t[0];
                return t = t[1], [fi(mi.bind(null, t, e), [t, e]), n]
            }
        },
        yi = {
            readContext: ro,
            useCallback: di,
            useContext: ro,
            useEffect: ii,
            useImperativeHandle: ci,
            useLayoutEffect: li,
            useMemo: pi,
            useReducer: Zo,
            useRef: ni,
            useState: function () {
                return Zo(Xo)
            },
            useDebugValue: si,
            useResponder: Io,
            useDeferredValue: function (e, t) {
                var n = Zo(Xo),
                    r = n[0],
                    a = n[1];
                return ii((function () {
                    var n = Ao.suspense;
                    Ao.suspense = void 0 === t ? null : t;
                    try {
                        a(e)
                    } finally {
                        Ao.suspense = n
                    }
                }), [e, t]), r
            },
            useTransition: function (e) {
                var t = Zo(Xo),
                    n = t[0];
                return t = t[1], [di(mi.bind(null, t, e), [t, e]), n]
            }
        },
        bi = {
            readContext: ro,
            useCallback: di,
            useContext: ro,
            useEffect: ii,
            useImperativeHandle: ci,
            useLayoutEffect: li,
            useMemo: pi,
            useReducer: Jo,
            useRef: ni,
            useState: function () {
                return Jo(Xo)
            },
            useDebugValue: si,
            useResponder: Io,
            useDeferredValue: function (e, t) {
                var n = Jo(Xo),
                    r = n[0],
                    a = n[1];
                return ii((function () {
                    var n = Ao.suspense;
                    Ao.suspense = void 0 === t ? null : t;
                    try {
                        a(e)
                    } finally {
                        Ao.suspense = n
                    }
                }), [e, t]), r
            },
            useTransition: function (e) {
                var t = Jo(Xo),
                    n = t[0];
                return t = t[1], [di(mi.bind(null, t, e), [t, e]), n]
            }
        },
        wi = null,
        xi = null,
        ki = !1;

    function Ei(e, t) {
        var n = Cu(5, null, null, 0);
        n.elementType = "DELETED", n.type = "DELETED", n.stateNode = t, n.return = e, n.effectTag = 8, null !== e.lastEffect ? (e.lastEffect.nextEffect = n, e.lastEffect = n) : e.firstEffect = e.lastEffect = n
    }

    function Ci(e, t) {
        switch (e.tag) {
            case 5:
                var n = e.type;
                return null !== (t = 1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t) && (e.stateNode = t, !0);
            case 6:
                return null !== (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) && (e.stateNode = t, !0);
            case 13:
            default:
                return !1
        }
    }

    function Ti(e) {
        if (ki) {
            var t = xi;
            if (t) {
                var n = t;
                if (!Ci(e, t)) {
                    if (!(t = xn(n.nextSibling)) || !Ci(e, t)) return e.effectTag = -1025 & e.effectTag | 2, ki = !1, void (wi = e);
                    Ei(wi, n)
                }
                wi = e, xi = xn(t.firstChild)
            } else e.effectTag = -1025 & e.effectTag | 2, ki = !1, wi = e
        }
    }

    function Si(e) {
        for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;) e = e.return;
        wi = e
    }

    function Oi(e) {
        if (e !== wi) return !1;
        if (!ki) return Si(e), ki = !0, !1;
        var t = e.type;
        if (5 !== e.tag || "head" !== t && "body" !== t && !yn(t, e.memoizedProps))
            for (t = xi; t;) Ei(e, t), t = xn(t.nextSibling);
        if (Si(e), 13 === e.tag) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(i(317));
            e: {
                for (e = e.nextSibling, t = 0; e;) {
                    if (8 === e.nodeType) {
                        var n = e.data;
                        if ("/$" === n) {
                            if (0 === t) {
                                xi = xn(e.nextSibling);
                                break e
                            }
                            t--
                        } else "$" !== n && "$!" !== n && "$?" !== n || t++
                    }
                    e = e.nextSibling
                }
                xi = null
            }
        } else xi = wi ? xn(e.stateNode.nextSibling) : null;
        return !0
    }

    function Pi() {
        xi = wi = null, ki = !1
    }
    var _i = G.ReactCurrentOwner,
        ji = !1;

    function Mi(e, t, n, r) {
        t.child = null === e ? So(t, null, n, r) : To(t, e.child, n, r)
    }

    function Ni(e, t, n, r, a) {
        n = n.render;
        var o = t.ref;
        return no(t, a), r = Yo(e, t, n, r, o, a), null === e || ji ? (t.effectTag |= 1, Mi(e, t, r, a), t.child) : (t.updateQueue = e.updateQueue, t.effectTag &= -517, e.expirationTime <= a && (e.expirationTime = 0), Yi(e, t, a))
    }

    function Di(e, t, n, r, a, o) {
        if (null === e) {
            var i = n.type;
            return "function" != typeof i || Tu(i) || void 0 !== i.defaultProps || null !== n.compare || void 0 !== n.defaultProps ? ((e = Ou(n.type, null, r, null, t.mode, o)).ref = t.ref, e.return = t, t.child = e) : (t.tag = 15, t.type = i, zi(e, t, i, r, a, o))
        }
        return i = e.child, a < o && (a = i.memoizedProps, (n = null !== (n = n.compare) ? n : Ur)(a, r) && e.ref === t.ref) ? Yi(e, t, o) : (t.effectTag |= 1, (e = Su(i, r)).ref = t.ref, e.return = t, t.child = e)
    }

    function zi(e, t, n, r, a, o) {
        return null !== e && Ur(e.memoizedProps, r) && e.ref === t.ref && (ji = !1, a < o) ? (t.expirationTime = e.expirationTime, Yi(e, t, o)) : Li(e, t, n, r, o)
    }

    function Ri(e, t) {
        var n = t.ref;
        (null === e && null !== n || null !== e && e.ref !== n) && (t.effectTag |= 128)
    }

    function Li(e, t, n, r, a) {
        var o = ha(n) ? pa : fa.current;
        return o = ma(t, o), no(t, a), n = Yo(e, t, n, r, o, a), null === e || ji ? (t.effectTag |= 1, Mi(e, t, n, a), t.child) : (t.updateQueue = e.updateQueue, t.effectTag &= -517, e.expirationTime <= a && (e.expirationTime = 0), Yi(e, t, a))
    }

    function Fi(e, t, n, r, a) {
        if (ha(n)) {
            var o = !0;
            ba(t)
        } else o = !1;
        if (no(t, a), null === t.stateNode) null !== e && (e.alternate = null, t.alternate = null, t.effectTag |= 2), yo(t, n, r), wo(t, n, r, a), r = !0;
        else if (null === e) {
            var i = t.stateNode,
                l = t.memoizedProps;
            i.props = l;
            var u = i.context,
                c = n.contextType;
            "object" == typeof c && null !== c ? c = ro(c) : c = ma(t, c = ha(n) ? pa : fa.current);
            var s = n.getDerivedStateFromProps,
                f = "function" == typeof s || "function" == typeof i.getSnapshotBeforeUpdate;
            f || "function" != typeof i.UNSAFE_componentWillReceiveProps && "function" != typeof i.componentWillReceiveProps || (l !== r || u !== c) && bo(t, i, r, c), ao = !1;
            var d = t.memoizedState;
            i.state = d, so(t, r, i, a), u = t.memoizedState, l !== r || d !== u || da.current || ao ? ("function" == typeof s && (ho(t, n, s, r), u = t.memoizedState), (l = ao || vo(t, n, l, r, d, u, c)) ? (f || "function" != typeof i.UNSAFE_componentWillMount && "function" != typeof i.componentWillMount || ("function" == typeof i.componentWillMount && i.componentWillMount(), "function" == typeof i.UNSAFE_componentWillMount && i.UNSAFE_componentWillMount()), "function" == typeof i.componentDidMount && (t.effectTag |= 4)) : ("function" == typeof i.componentDidMount && (t.effectTag |= 4), t.memoizedProps = r, t.memoizedState = u), i.props = r, i.state = u, i.context = c, r = l) : ("function" == typeof i.componentDidMount && (t.effectTag |= 4), r = !1)
        } else i = t.stateNode, io(e, t), l = t.memoizedProps, i.props = t.type === t.elementType ? l : Ya(t.type, l), u = i.context, "object" == typeof (c = n.contextType) && null !== c ? c = ro(c) : c = ma(t, c = ha(n) ? pa : fa.current), (f = "function" == typeof (s = n.getDerivedStateFromProps) || "function" == typeof i.getSnapshotBeforeUpdate) || "function" != typeof i.UNSAFE_componentWillReceiveProps && "function" != typeof i.componentWillReceiveProps || (l !== r || u !== c) && bo(t, i, r, c), ao = !1, u = t.memoizedState, i.state = u, so(t, r, i, a), d = t.memoizedState, l !== r || u !== d || da.current || ao ? ("function" == typeof s && (ho(t, n, s, r), d = t.memoizedState), (s = ao || vo(t, n, l, r, u, d, c)) ? (f || "function" != typeof i.UNSAFE_componentWillUpdate && "function" != typeof i.componentWillUpdate || ("function" == typeof i.componentWillUpdate && i.componentWillUpdate(r, d, c), "function" == typeof i.UNSAFE_componentWillUpdate && i.UNSAFE_componentWillUpdate(r, d, c)), "function" == typeof i.componentDidUpdate && (t.effectTag |= 4), "function" == typeof i.getSnapshotBeforeUpdate && (t.effectTag |= 256)) : ("function" != typeof i.componentDidUpdate || l === e.memoizedProps && u === e.memoizedState || (t.effectTag |= 4), "function" != typeof i.getSnapshotBeforeUpdate || l === e.memoizedProps && u === e.memoizedState || (t.effectTag |= 256), t.memoizedProps = r, t.memoizedState = d), i.props = r, i.state = d, i.context = c, r = s) : ("function" != typeof i.componentDidUpdate || l === e.memoizedProps && u === e.memoizedState || (t.effectTag |= 4), "function" != typeof i.getSnapshotBeforeUpdate || l === e.memoizedProps && u === e.memoizedState || (t.effectTag |= 256), r = !1);
        return Ii(e, t, n, r, o, a)
    }

    function Ii(e, t, n, r, a, o) {
        Ri(e, t);
        var i = 0 != (64 & t.effectTag);
        if (!r && !i) return a && wa(t, n, !1), Yi(e, t, o);
        r = t.stateNode, _i.current = t;
        var l = i && "function" != typeof n.getDerivedStateFromError ? null : r.render();
        return t.effectTag |= 1, null !== e && i ? (t.child = To(t, e.child, null, o), t.child = To(t, null, l, o)) : Mi(e, t, l, o), t.memoizedState = r.state, a && wa(t, n, !0), t.child
    }

    function Ui(e) {
        var t = e.stateNode;
        t.pendingContext ? va(0, t.pendingContext, t.pendingContext !== t.context) : t.context && va(0, t.context, !1), No(e, t.containerInfo)
    }
    var Ai, Bi, Hi, Wi = {
        dehydrated: null,
        retryTime: 0
    };

    function Vi(e, t, n) {
        var r, a = t.mode,
            o = t.pendingProps,
            i = Lo.current,
            l = !1;
        if ((r = 0 != (64 & t.effectTag)) || (r = 0 != (2 & i) && (null === e || null !== e.memoizedState)), r ? (l = !0, t.effectTag &= -65) : null !== e && null === e.memoizedState || void 0 === o.fallback || !0 === o.unstable_avoidThisFallback || (i |= 1), ca(Lo, 1 & i), null === e) {
            if (void 0 !== o.fallback && Ti(t), l) {
                if (l = o.fallback, (o = Pu(null, a, 0, null)).return = t, 0 == (2 & t.mode))
                    for (e = null !== t.memoizedState ? t.child.child : t.child, o.child = e; null !== e;) e.return = o, e = e.sibling;
                return (n = Pu(l, a, n, null)).return = t, o.sibling = n, t.memoizedState = Wi, t.child = o, n
            }
            return a = o.children, t.memoizedState = null, t.child = So(t, null, a, n)
        }
        if (null !== e.memoizedState) {
            if (a = (e = e.child).sibling, l) {
                if (o = o.fallback, (n = Su(e, e.pendingProps)).return = t, 0 == (2 & t.mode) && (l = null !== t.memoizedState ? t.child.child : t.child) !== e.child)
                    for (n.child = l; null !== l;) l.return = n, l = l.sibling;
                return (a = Su(a, o)).return = t, n.sibling = a, n.childExpirationTime = 0, t.memoizedState = Wi, t.child = n, a
            }
            return n = To(t, e.child, o.children, n), t.memoizedState = null, t.child = n
        }
        if (e = e.child, l) {
            if (l = o.fallback, (o = Pu(null, a, 0, null)).return = t, o.child = e, null !== e && (e.return = o), 0 == (2 & t.mode))
                for (e = null !== t.memoizedState ? t.child.child : t.child, o.child = e; null !== e;) e.return = o, e = e.sibling;
            return (n = Pu(l, a, n, null)).return = t, o.sibling = n, n.effectTag |= 2, o.childExpirationTime = 0, t.memoizedState = Wi, t.child = o, n
        }
        return t.memoizedState = null, t.child = To(t, e, o.children, n)
    }

    function Qi(e, t) {
        e.expirationTime < t && (e.expirationTime = t);
        var n = e.alternate;
        null !== n && n.expirationTime < t && (n.expirationTime = t), to(e.return, t)
    }

    function qi(e, t, n, r, a, o) {
        var i = e.memoizedState;
        null === i ? e.memoizedState = {
            isBackwards: t,
            rendering: null,
            renderingStartTime: 0,
            last: r,
            tail: n,
            tailExpiration: 0,
            tailMode: a,
            lastEffect: o
        } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailExpiration = 0, i.tailMode = a, i.lastEffect = o)
    }

    function $i(e, t, n) {
        var r = t.pendingProps,
            a = r.revealOrder,
            o = r.tail;
        if (Mi(e, t, r.children, n), 0 != (2 & (r = Lo.current))) r = 1 & r | 2, t.effectTag |= 64;
        else {
            if (null !== e && 0 != (64 & e.effectTag)) e: for (e = t.child; null !== e;) {
                if (13 === e.tag) null !== e.memoizedState && Qi(e, n);
                else if (19 === e.tag) Qi(e, n);
                else if (null !== e.child) {
                    e.child.return = e, e = e.child;
                    continue
                }
                if (e === t) break e;
                for (; null === e.sibling;) {
                    if (null === e.return || e.return === t) break e;
                    e = e.return
                }
                e.sibling.return = e.return, e = e.sibling
            }
            r &= 1
        }
        if (ca(Lo, r), 0 == (2 & t.mode)) t.memoizedState = null;
        else switch (a) {
            case "forwards":
                for (n = t.child, a = null; null !== n;) null !== (e = n.alternate) && null === Fo(e) && (a = n), n = n.sibling;
                null === (n = a) ? (a = t.child, t.child = null) : (a = n.sibling, n.sibling = null), qi(t, !1, a, n, o, t.lastEffect);
                break;
            case "backwards":
                for (n = null, a = t.child, t.child = null; null !== a;) {
                    if (null !== (e = a.alternate) && null === Fo(e)) {
                        t.child = a;
                        break
                    }
                    e = a.sibling, a.sibling = n, n = a, a = e
                }
                qi(t, !0, n, null, o, t.lastEffect);
                break;
            case "together":
                qi(t, !1, null, null, void 0, t.lastEffect);
                break;
            default:
                t.memoizedState = null
        }
        return t.child
    }

    function Yi(e, t, n) {
        null !== e && (t.dependencies = e.dependencies);
        var r = t.expirationTime;
        if (0 !== r && iu(r), t.childExpirationTime < n) return null;
        if (null !== e && t.child !== e.child) throw Error(i(153));
        if (null !== t.child) {
            for (n = Su(e = t.child, e.pendingProps), t.child = n, n.return = t; null !== e.sibling;) e = e.sibling, (n = n.sibling = Su(e, e.pendingProps)).return = t;
            n.sibling = null
        }
        return t.child
    }

    function Ki(e, t) {
        switch (e.tailMode) {
            case "hidden":
                t = e.tail;
                for (var n = null; null !== t;) null !== t.alternate && (n = t), t = t.sibling;
                null === n ? e.tail = null : n.sibling = null;
                break;
            case "collapsed":
                n = e.tail;
                for (var r = null; null !== n;) null !== n.alternate && (r = n), n = n.sibling;
                null === r ? t || null === e.tail ? e.tail = null : e.tail.sibling = null : r.sibling = null
        }
    }

    function Gi(e, t, n) {
        var r = t.pendingProps;
        switch (t.tag) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
                return null;
            case 1:
                return ha(t.type) && ga(), null;
            case 3:
                return Do(), ua(da), ua(fa), (n = t.stateNode).pendingContext && (n.context = n.pendingContext, n.pendingContext = null), null !== e && null !== e.child || !Oi(t) || (t.effectTag |= 4), null;
            case 5:
                Ro(t), n = Mo(jo.current);
                var o = t.type;
                if (null !== e && null != t.stateNode) Bi(e, t, o, r, n), e.ref !== t.ref && (t.effectTag |= 128);
                else {
                    if (!r) {
                        if (null === t.stateNode) throw Error(i(166));
                        return null
                    }
                    if (e = Mo(Po.current), Oi(t)) {
                        r = t.stateNode, o = t.type;
                        var l = t.memoizedProps;
                        switch (r[Cn] = t, r[Tn] = l, o) {
                            case "iframe":
                            case "object":
                            case "embed":
                                $t("load", r);
                                break;
                            case "video":
                            case "audio":
                                for (e = 0; e < Ge.length; e++) $t(Ge[e], r);
                                break;
                            case "source":
                                $t("error", r);
                                break;
                            case "img":
                            case "image":
                            case "link":
                                $t("error", r), $t("load", r);
                                break;
                            case "form":
                                $t("reset", r), $t("submit", r);
                                break;
                            case "details":
                                $t("toggle", r);
                                break;
                            case "input":
                                Ee(r, l), $t("invalid", r), un(n, "onChange");
                                break;
                            case "select":
                                r._wrapperState = {
                                    wasMultiple: !!l.multiple
                                }, $t("invalid", r), un(n, "onChange");
                                break;
                            case "textarea":
                                Me(r, l), $t("invalid", r), un(n, "onChange")
                        }
                        for (var u in an(o, l), e = null, l)
                            if (l.hasOwnProperty(u)) {
                                var c = l[u];
                                "children" === u ? "string" == typeof c ? r.textContent !== c && (e = ["children", c]) : "number" == typeof c && r.textContent !== "" + c && (e = ["children", "" + c]) : C.hasOwnProperty(u) && null != c && un(n, u)
                            } switch (o) {
                                case "input":
                                    we(r), Se(r, l, !0);
                                    break;
                                case "textarea":
                                    we(r), De(r);
                                    break;
                                case "select":
                                case "option":
                                    break;
                                default:
                                    "function" == typeof l.onClick && (r.onclick = cn)
                            }
                        n = e, t.updateQueue = n, null !== n && (t.effectTag |= 4)
                    } else {
                        switch (u = 9 === n.nodeType ? n : n.ownerDocument, e === ln && (e = Le(o)), e === ln ? "script" === o ? ((e = u.createElement("div")).innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : "string" == typeof r.is ? e = u.createElement(o, {
                            is: r.is
                        }) : (e = u.createElement(o), "select" === o && (u = e, r.multiple ? u.multiple = !0 : r.size && (u.size = r.size))) : e = u.createElementNS(e, o), e[Cn] = t, e[Tn] = r, Ai(e, t), t.stateNode = e, u = on(o, r), o) {
                            case "iframe":
                            case "object":
                            case "embed":
                                $t("load", e), c = r;
                                break;
                            case "video":
                            case "audio":
                                for (c = 0; c < Ge.length; c++) $t(Ge[c], e);
                                c = r;
                                break;
                            case "source":
                                $t("error", e), c = r;
                                break;
                            case "img":
                            case "image":
                            case "link":
                                $t("error", e), $t("load", e), c = r;
                                break;
                            case "form":
                                $t("reset", e), $t("submit", e), c = r;
                                break;
                            case "details":
                                $t("toggle", e), c = r;
                                break;
                            case "input":
                                Ee(e, r), c = ke(e, r), $t("invalid", e), un(n, "onChange");
                                break;
                            case "option":
                                c = Pe(e, r);
                                break;
                            case "select":
                                e._wrapperState = {
                                    wasMultiple: !!r.multiple
                                }, c = a({}, r, {
                                    value: void 0
                                }), $t("invalid", e), un(n, "onChange");
                                break;
                            case "textarea":
                                Me(e, r), c = je(e, r), $t("invalid", e), un(n, "onChange");
                                break;
                            default:
                                c = r
                        }
                        an(o, c);
                        var s = c;
                        for (l in s)
                            if (s.hasOwnProperty(l)) {
                                var f = s[l];
                                "style" === l ? nn(e, f) : "dangerouslySetInnerHTML" === l ? null != (f = f ? f.__html : void 0) && Ue(e, f) : "children" === l ? "string" == typeof f ? ("textarea" !== o || "" !== f) && Ae(e, f) : "number" == typeof f && Ae(e, "" + f) : "suppressContentEditableWarning" !== l && "suppressHydrationWarning" !== l && "autoFocus" !== l && (C.hasOwnProperty(l) ? null != f && un(n, l) : null != f && X(e, l, f, u))
                            } switch (o) {
                                case "input":
                                    we(e), Se(e, r, !1);
                                    break;
                                case "textarea":
                                    we(e), De(e);
                                    break;
                                case "option":
                                    null != r.value && e.setAttribute("value", "" + ye(r.value));
                                    break;
                                case "select":
                                    e.multiple = !!r.multiple, null != (n = r.value) ? _e(e, !!r.multiple, n, !1) : null != r.defaultValue && _e(e, !!r.multiple, r.defaultValue, !0);
                                    break;
                                default:
                                    "function" == typeof c.onClick && (e.onclick = cn)
                            }
                        vn(o, r) && (t.effectTag |= 4)
                    }
                    null !== t.ref && (t.effectTag |= 128)
                }
                return null;
            case 6:
                if (e && null != t.stateNode) Hi(0, t, e.memoizedProps, r);
                else {
                    if ("string" != typeof r && null === t.stateNode) throw Error(i(166));
                    n = Mo(jo.current), Mo(Po.current), Oi(t) ? (n = t.stateNode, r = t.memoizedProps, n[Cn] = t, n.nodeValue !== r && (t.effectTag |= 4)) : ((n = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(r))[Cn] = t, t.stateNode = n)
                }
                return null;
            case 13:
                return ua(Lo), r = t.memoizedState, 0 != (64 & t.effectTag) ? (t.expirationTime = n, t) : (n = null !== r, r = !1, null === e ? void 0 !== t.memoizedProps.fallback && Oi(t) : (r = null !== (o = e.memoizedState), n || null === o || null !== (o = e.child.sibling) && (null !== (l = t.firstEffect) ? (t.firstEffect = o, o.nextEffect = l) : (t.firstEffect = t.lastEffect = o, o.nextEffect = null), o.effectTag = 8)), n && !r && 0 != (2 & t.mode) && (null === e && !0 !== t.memoizedProps.unstable_avoidThisFallback || 0 != (1 & Lo.current) ? Ol === wl && (Ol = xl) : (Ol !== wl && Ol !== xl || (Ol = kl), 0 !== Nl && null !== Cl && (Du(Cl, Sl), zu(Cl, Nl)))), (n || r) && (t.effectTag |= 4), null);
            case 4:
                return Do(), null;
            case 10:
                return eo(t), null;
            case 17:
                return ha(t.type) && ga(), null;
            case 19:
                if (ua(Lo), null === (r = t.memoizedState)) return null;
                if (o = 0 != (64 & t.effectTag), null === (l = r.rendering)) {
                    if (o) Ki(r, !1);
                    else if (Ol !== wl || null !== e && 0 != (64 & e.effectTag))
                        for (l = t.child; null !== l;) {
                            if (null !== (e = Fo(l))) {
                                for (t.effectTag |= 64, Ki(r, !1), null !== (o = e.updateQueue) && (t.updateQueue = o, t.effectTag |= 4), null === r.lastEffect && (t.firstEffect = null), t.lastEffect = r.lastEffect, r = t.child; null !== r;) l = n, (o = r).effectTag &= 2, o.nextEffect = null, o.firstEffect = null, o.lastEffect = null, null === (e = o.alternate) ? (o.childExpirationTime = 0, o.expirationTime = l, o.child = null, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null) : (o.childExpirationTime = e.childExpirationTime, o.expirationTime = e.expirationTime, o.child = e.child, o.memoizedProps = e.memoizedProps, o.memoizedState = e.memoizedState, o.updateQueue = e.updateQueue, l = e.dependencies, o.dependencies = null === l ? null : {
                                    expirationTime: l.expirationTime,
                                    firstContext: l.firstContext,
                                    responders: l.responders
                                }), r = r.sibling;
                                return ca(Lo, 1 & Lo.current | 2), t.child
                            }
                            l = l.sibling
                        }
                } else {
                    if (!o)
                        if (null !== (e = Fo(l))) {
                            if (t.effectTag |= 64, o = !0, null !== (n = e.updateQueue) && (t.updateQueue = n, t.effectTag |= 4), Ki(r, !0), null === r.tail && "hidden" === r.tailMode && !l.alternate) return null !== (t = t.lastEffect = r.lastEffect) && (t.nextEffect = null), null
                        } else 2 * Ua() - r.renderingStartTime > r.tailExpiration && 1 < n && (t.effectTag |= 64, o = !0, Ki(r, !1), t.expirationTime = t.childExpirationTime = n - 1);
                    r.isBackwards ? (l.sibling = t.child, t.child = l) : (null !== (n = r.last) ? n.sibling = l : t.child = l, r.last = l)
                }
                return null !== r.tail ? (0 === r.tailExpiration && (r.tailExpiration = Ua() + 500), n = r.tail, r.rendering = n, r.tail = n.sibling, r.lastEffect = t.lastEffect, r.renderingStartTime = Ua(), n.sibling = null, t = Lo.current, ca(Lo, o ? 1 & t | 2 : 1 & t), n) : null
        }
        throw Error(i(156, t.tag))
    }

    function Xi(e) {
        switch (e.tag) {
            case 1:
                ha(e.type) && ga();
                var t = e.effectTag;
                return 4096 & t ? (e.effectTag = -4097 & t | 64, e) : null;
            case 3:
                if (Do(), ua(da), ua(fa), 0 != (64 & (t = e.effectTag))) throw Error(i(285));
                return e.effectTag = -4097 & t | 64, e;
            case 5:
                return Ro(e), null;
            case 13:
                return ua(Lo), 4096 & (t = e.effectTag) ? (e.effectTag = -4097 & t | 64, e) : null;
            case 19:
                return ua(Lo), null;
            case 4:
                return Do(), null;
            case 10:
                return eo(e), null;
            default:
                return null
        }
    }

    function Zi(e, t) {
        return {
            value: e,
            source: t,
            stack: ve(t)
        }
    }
    Ai = function (e, t) {
        for (var n = t.child; null !== n;) {
            if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
            else if (4 !== n.tag && null !== n.child) {
                n.child.return = n, n = n.child;
                continue
            }
            if (n === t) break;
            for (; null === n.sibling;) {
                if (null === n.return || n.return === t) return;
                n = n.return
            }
            n.sibling.return = n.return, n = n.sibling
        }
    }, Bi = function (e, t, n, r, o) {
        var i = e.memoizedProps;
        if (i !== r) {
            var l, u, c = t.stateNode;
            switch (Mo(Po.current), e = null, n) {
                case "input":
                    i = ke(c, i), r = ke(c, r), e = [];
                    break;
                case "option":
                    i = Pe(c, i), r = Pe(c, r), e = [];
                    break;
                case "select":
                    i = a({}, i, {
                        value: void 0
                    }), r = a({}, r, {
                        value: void 0
                    }), e = [];
                    break;
                case "textarea":
                    i = je(c, i), r = je(c, r), e = [];
                    break;
                default:
                    "function" != typeof i.onClick && "function" == typeof r.onClick && (c.onclick = cn)
            }
            for (l in an(n, r), n = null, i)
                if (!r.hasOwnProperty(l) && i.hasOwnProperty(l) && null != i[l])
                    if ("style" === l)
                        for (u in c = i[l]) c.hasOwnProperty(u) && (n || (n = {}), n[u] = "");
                    else "dangerouslySetInnerHTML" !== l && "children" !== l && "suppressContentEditableWarning" !== l && "suppressHydrationWarning" !== l && "autoFocus" !== l && (C.hasOwnProperty(l) ? e || (e = []) : (e = e || []).push(l, null));
            for (l in r) {
                var s = r[l];
                if (c = null != i ? i[l] : void 0, r.hasOwnProperty(l) && s !== c && (null != s || null != c))
                    if ("style" === l)
                        if (c) {
                            for (u in c) !c.hasOwnProperty(u) || s && s.hasOwnProperty(u) || (n || (n = {}), n[u] = "");
                            for (u in s) s.hasOwnProperty(u) && c[u] !== s[u] && (n || (n = {}), n[u] = s[u])
                        } else n || (e || (e = []), e.push(l, n)), n = s;
                    else "dangerouslySetInnerHTML" === l ? (s = s ? s.__html : void 0, c = c ? c.__html : void 0, null != s && c !== s && (e = e || []).push(l, s)) : "children" === l ? c === s || "string" != typeof s && "number" != typeof s || (e = e || []).push(l, "" + s) : "suppressContentEditableWarning" !== l && "suppressHydrationWarning" !== l && (C.hasOwnProperty(l) ? (null != s && un(o, l), e || c === s || (e = [])) : (e = e || []).push(l, s))
            }
            n && (e = e || []).push("style", n), o = e, (t.updateQueue = o) && (t.effectTag |= 4)
        }
    }, Hi = function (e, t, n, r) {
        n !== r && (t.effectTag |= 4)
    };
    var Ji = "function" == typeof WeakSet ? WeakSet : Set;

    function el(e, t) {
        var n = t.source,
            r = t.stack;
        null === r && null !== n && (r = ve(n)), null !== n && ge(n.type), t = t.value, null !== e && 1 === e.tag && ge(e.type);
        try {
            console.error(t)
        } catch (e) {
            setTimeout((function () {
                throw e
            }))
        }
    }

    function tl(e) {
        var t = e.ref;
        if (null !== t)
            if ("function" == typeof t) try {
                t(null)
            } catch (t) {
                yu(e, t)
            } else t.current = null
    }

    function nl(e, t) {
        switch (t.tag) {
            case 0:
            case 11:
            case 15:
            case 22:
                return;
            case 1:
                if (256 & t.effectTag && null !== e) {
                    var n = e.memoizedProps,
                        r = e.memoizedState;
                    t = (e = t.stateNode).getSnapshotBeforeUpdate(t.elementType === t.type ? n : Ya(t.type, n), r), e.__reactInternalSnapshotBeforeUpdate = t
                }
                return;
            case 3:
            case 5:
            case 6:
            case 4:
            case 17:
                return
        }
        throw Error(i(163))
    }

    function rl(e, t) {
        if (null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)) {
            var n = t = t.next;
            do {
                if ((n.tag & e) === e) {
                    var r = n.destroy;
                    n.destroy = void 0, void 0 !== r && r()
                }
                n = n.next
            } while (n !== t)
        }
    }

    function al(e, t) {
        if (null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)) {
            var n = t = t.next;
            do {
                if ((n.tag & e) === e) {
                    var r = n.create;
                    n.destroy = r()
                }
                n = n.next
            } while (n !== t)
        }
    }

    function ol(e, t, n) {
        switch (n.tag) {
            case 0:
            case 11:
            case 15:
            case 22:
                return void al(3, n);
            case 1:
                if (e = n.stateNode, 4 & n.effectTag)
                    if (null === t) e.componentDidMount();
                    else {
                        var r = n.elementType === n.type ? t.memoizedProps : Ya(n.type, t.memoizedProps);
                        e.componentDidUpdate(r, t.memoizedState, e.__reactInternalSnapshotBeforeUpdate)
                    } return void (null !== (t = n.updateQueue) && fo(n, t, e));
            case 3:
                if (null !== (t = n.updateQueue)) {
                    if (e = null, null !== n.child) switch (n.child.tag) {
                        case 5:
                            e = n.child.stateNode;
                            break;
                        case 1:
                            e = n.child.stateNode
                    }
                    fo(n, t, e)
                }
                return;
            case 5:
                return e = n.stateNode, void (null === t && 4 & n.effectTag && vn(n.type, n.memoizedProps) && e.focus());
            case 6:
            case 4:
            case 12:
                return;
            case 13:
                return void (null === n.memoizedState && (n = n.alternate, null !== n && (n = n.memoizedState, null !== n && (n = n.dehydrated, null !== n && Lt(n)))));
            case 19:
            case 17:
            case 20:
            case 21:
                return
        }
        throw Error(i(163))
    }

    function il(e, t, n) {
        switch ("function" == typeof ku && ku(t), t.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
            case 22:
                if (null !== (e = t.updateQueue) && null !== (e = e.lastEffect)) {
                    var r = e.next;
                    Ha(97 < n ? 97 : n, (function () {
                        var e = r;
                        do {
                            var n = e.destroy;
                            if (void 0 !== n) {
                                var a = t;
                                try {
                                    n()
                                } catch (e) {
                                    yu(a, e)
                                }
                            }
                            e = e.next
                        } while (e !== r)
                    }))
                }
                break;
            case 1:
                tl(t), "function" == typeof (n = t.stateNode).componentWillUnmount && function (e, t) {
                    try {
                        t.props = e.memoizedProps, t.state = e.memoizedState, t.componentWillUnmount()
                    } catch (t) {
                        yu(e, t)
                    }
                }(t, n);
                break;
            case 5:
                tl(t);
                break;
            case 4:
                sl(e, t, n)
        }
    }

    function ll(e) {
        var t = e.alternate;
        e.return = null, e.child = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.alternate = null, e.firstEffect = null, e.lastEffect = null, e.pendingProps = null, e.memoizedProps = null, e.stateNode = null, null !== t && ll(t)
    }

    function ul(e) {
        return 5 === e.tag || 3 === e.tag || 4 === e.tag
    }

    function cl(e) {
        e: {
            for (var t = e.return; null !== t;) {
                if (ul(t)) {
                    var n = t;
                    break e
                }
                t = t.return
            }
            throw Error(i(160))
        }
        switch (t = n.stateNode, n.tag) {
            case 5:
                var r = !1;
                break;
            case 3:
            case 4:
                t = t.containerInfo, r = !0;
                break;
            default:
                throw Error(i(161))
        }
        16 & n.effectTag && (Ae(t, ""), n.effectTag &= -17); e: t: for (n = e; ;) {
            for (; null === n.sibling;) {
                if (null === n.return || ul(n.return)) {
                    n = null;
                    break e
                }
                n = n.return
            }
            for (n.sibling.return = n.return, n = n.sibling; 5 !== n.tag && 6 !== n.tag && 18 !== n.tag;) {
                if (2 & n.effectTag) continue t;
                if (null === n.child || 4 === n.tag) continue t;
                n.child.return = n, n = n.child
            }
            if (!(2 & n.effectTag)) {
                n = n.stateNode;
                break e
            }
        }
        r ? function e(t, n, r) {
            var a = t.tag,
                o = 5 === a || 6 === a;
            if (o) t = o ? t.stateNode : t.stateNode.instance, n ? 8 === r.nodeType ? r.parentNode.insertBefore(t, n) : r.insertBefore(t, n) : (8 === r.nodeType ? (n = r.parentNode).insertBefore(t, r) : (n = r).appendChild(t), null !== (r = r._reactRootContainer) && void 0 !== r || null !== n.onclick || (n.onclick = cn));
            else if (4 !== a && null !== (t = t.child))
                for (e(t, n, r), t = t.sibling; null !== t;) e(t, n, r), t = t.sibling
        }(e, n, t) : function e(t, n, r) {
            var a = t.tag,
                o = 5 === a || 6 === a;
            if (o) t = o ? t.stateNode : t.stateNode.instance, n ? r.insertBefore(t, n) : r.appendChild(t);
            else if (4 !== a && null !== (t = t.child))
                for (e(t, n, r), t = t.sibling; null !== t;) e(t, n, r), t = t.sibling
        }(e, n, t)
    }

    function sl(e, t, n) {
        for (var r, a, o = t, l = !1; ;) {
            if (!l) {
                l = o.return;
                e: for (; ;) {
                    if (null === l) throw Error(i(160));
                    switch (r = l.stateNode, l.tag) {
                        case 5:
                            a = !1;
                            break e;
                        case 3:
                        case 4:
                            r = r.containerInfo, a = !0;
                            break e
                    }
                    l = l.return
                }
                l = !0
            }
            if (5 === o.tag || 6 === o.tag) {
                e: for (var u = e, c = o, s = n, f = c; ;)
                    if (il(u, f, s), null !== f.child && 4 !== f.tag) f.child.return = f, f = f.child;
                    else {
                        if (f === c) break e;
                        for (; null === f.sibling;) {
                            if (null === f.return || f.return === c) break e;
                            f = f.return
                        }
                        f.sibling.return = f.return, f = f.sibling
                    } a ? (u = r, c = o.stateNode, 8 === u.nodeType ? u.parentNode.removeChild(c) : u.removeChild(c)) : r.removeChild(o.stateNode)
            }
            else if (4 === o.tag) {
                if (null !== o.child) {
                    r = o.stateNode.containerInfo, a = !0, o.child.return = o, o = o.child;
                    continue
                }
            } else if (il(e, o, n), null !== o.child) {
                o.child.return = o, o = o.child;
                continue
            }
            if (o === t) break;
            for (; null === o.sibling;) {
                if (null === o.return || o.return === t) return;
                4 === (o = o.return).tag && (l = !1)
            }
            o.sibling.return = o.return, o = o.sibling
        }
    }

    function fl(e, t) {
        switch (t.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
            case 22:
                return void rl(3, t);
            case 1:
                return;
            case 5:
                var n = t.stateNode;
                if (null != n) {
                    var r = t.memoizedProps,
                        a = null !== e ? e.memoizedProps : r;
                    e = t.type;
                    var o = t.updateQueue;
                    if (t.updateQueue = null, null !== o) {
                        for (n[Tn] = r, "input" === e && "radio" === r.type && null != r.name && Ce(n, r), on(e, a), t = on(e, r), a = 0; a < o.length; a += 2) {
                            var l = o[a],
                                u = o[a + 1];
                            "style" === l ? nn(n, u) : "dangerouslySetInnerHTML" === l ? Ue(n, u) : "children" === l ? Ae(n, u) : X(n, l, u, t)
                        }
                        switch (e) {
                            case "input":
                                Te(n, r);
                                break;
                            case "textarea":
                                Ne(n, r);
                                break;
                            case "select":
                                t = n._wrapperState.wasMultiple, n._wrapperState.wasMultiple = !!r.multiple, null != (e = r.value) ? _e(n, !!r.multiple, e, !1) : t !== !!r.multiple && (null != r.defaultValue ? _e(n, !!r.multiple, r.defaultValue, !0) : _e(n, !!r.multiple, r.multiple ? [] : "", !1))
                        }
                    }
                }
                return;
            case 6:
                if (null === t.stateNode) throw Error(i(162));
                return void (t.stateNode.nodeValue = t.memoizedProps);
            case 3:
                return void ((t = t.stateNode).hydrate && (t.hydrate = !1, Lt(t.containerInfo)));
            case 12:
                return;
            case 13:
                if (n = t, null === t.memoizedState ? r = !1 : (r = !0, n = t.child, zl = Ua()), null !== n) e: for (e = n; ;) {
                    if (5 === e.tag) o = e.stateNode, r ? "function" == typeof (o = o.style).setProperty ? o.setProperty("display", "none", "important") : o.display = "none" : (o = e.stateNode, a = null != (a = e.memoizedProps.style) && a.hasOwnProperty("display") ? a.display : null, o.style.display = tn("display", a));
                    else if (6 === e.tag) e.stateNode.nodeValue = r ? "" : e.memoizedProps;
                    else {
                        if (13 === e.tag && null !== e.memoizedState && null === e.memoizedState.dehydrated) {
                            (o = e.child.sibling).return = e, e = o;
                            continue
                        }
                        if (null !== e.child) {
                            e.child.return = e, e = e.child;
                            continue
                        }
                    }
                    if (e === n) break;
                    for (; null === e.sibling;) {
                        if (null === e.return || e.return === n) break e;
                        e = e.return
                    }
                    e.sibling.return = e.return, e = e.sibling
                }
                return void dl(t);
            case 19:
                return void dl(t);
            case 17:
                return
        }
        throw Error(i(163))
    }

    function dl(e) {
        var t = e.updateQueue;
        if (null !== t) {
            e.updateQueue = null;
            var n = e.stateNode;
            null === n && (n = e.stateNode = new Ji), t.forEach((function (t) {
                var r = wu.bind(null, e, t);
                n.has(t) || (n.add(t), t.then(r, r))
            }))
        }
    }
    var pl = "function" == typeof WeakMap ? WeakMap : Map;

    function ml(e, t, n) {
        (n = lo(n, null)).tag = 3, n.payload = {
            element: null
        };
        var r = t.value;
        return n.callback = function () {
            Ll || (Ll = !0, Fl = r), el(e, t)
        }, n
    }

    function hl(e, t, n) {
        (n = lo(n, null)).tag = 3;
        var r = e.type.getDerivedStateFromError;
        if ("function" == typeof r) {
            var a = t.value;
            n.payload = function () {
                return el(e, t), r(a)
            }
        }
        var o = e.stateNode;
        return null !== o && "function" == typeof o.componentDidCatch && (n.callback = function () {
            "function" != typeof r && (null === Il ? Il = new Set([this]) : Il.add(this), el(e, t));
            var n = t.stack;
            this.componentDidCatch(t.value, {
                componentStack: null !== n ? n : ""
            })
        }), n
    }
    var gl, vl = Math.ceil,
        yl = G.ReactCurrentDispatcher,
        bl = G.ReactCurrentOwner,
        wl = 0,
        xl = 3,
        kl = 4,
        El = 0,
        Cl = null,
        Tl = null,
        Sl = 0,
        Ol = wl,
        Pl = null,
        _l = 1073741823,
        jl = 1073741823,
        Ml = null,
        Nl = 0,
        Dl = !1,
        zl = 0,
        Rl = null,
        Ll = !1,
        Fl = null,
        Il = null,
        Ul = !1,
        Al = null,
        Bl = 90,
        Hl = null,
        Wl = 0,
        Vl = null,
        Ql = 0;

    function ql() {
        return 0 != (48 & El) ? 1073741821 - (Ua() / 10 | 0) : 0 !== Ql ? Ql : Ql = 1073741821 - (Ua() / 10 | 0)
    }

    function $l(e, t, n) {
        if (0 == (2 & (t = t.mode))) return 1073741823;
        var r = Aa();
        if (0 == (4 & t)) return 99 === r ? 1073741823 : 1073741822;
        if (0 != (16 & El)) return Sl;
        if (null !== n) e = $a(e, 0 | n.timeoutMs || 5e3, 250);
        else switch (r) {
            case 99:
                e = 1073741823;
                break;
            case 98:
                e = $a(e, 150, 100);
                break;
            case 97:
            case 96:
                e = $a(e, 5e3, 250);
                break;
            case 95:
                e = 2;
                break;
            default:
                throw Error(i(326))
        }
        return null !== Cl && e === Sl && --e, e
    }

    function Yl(e, t) {
        if (50 < Wl) throw Wl = 0, Vl = null, Error(i(185));
        if (null !== (e = Kl(e, t))) {
            var n = Aa();
            1073741823 === t ? 0 != (8 & El) && 0 == (48 & El) ? Jl(e) : (Xl(e), 0 === El && Qa()) : Xl(e), 0 == (4 & El) || 98 !== n && 99 !== n || (null === Hl ? Hl = new Map([
                [e, t]
            ]) : (void 0 === (n = Hl.get(e)) || n > t) && Hl.set(e, t))
        }
    }

    function Kl(e, t) {
        e.expirationTime < t && (e.expirationTime = t);
        var n = e.alternate;
        null !== n && n.expirationTime < t && (n.expirationTime = t);
        var r = e.return,
            a = null;
        if (null === r && 3 === e.tag) a = e.stateNode;
        else
            for (; null !== r;) {
                if (n = r.alternate, r.childExpirationTime < t && (r.childExpirationTime = t), null !== n && n.childExpirationTime < t && (n.childExpirationTime = t), null === r.return && 3 === r.tag) {
                    a = r.stateNode;
                    break
                }
                r = r.return
            }
        return null !== a && (Cl === a && (iu(t), Ol === kl && Du(a, Sl)), zu(a, t)), a
    }

    function Gl(e) {
        var t = e.lastExpiredTime;
        if (0 !== t) return t;
        if (!Nu(e, t = e.firstPendingTime)) return t;
        var n = e.lastPingedTime;
        return 2 >= (e = n > (e = e.nextKnownPendingLevel) ? n : e) && t !== e ? 0 : e
    }

    function Xl(e) {
        if (0 !== e.lastExpiredTime) e.callbackExpirationTime = 1073741823, e.callbackPriority = 99, e.callbackNode = Va(Jl.bind(null, e));
        else {
            var t = Gl(e),
                n = e.callbackNode;
            if (0 === t) null !== n && (e.callbackNode = null, e.callbackExpirationTime = 0, e.callbackPriority = 90);
            else {
                var r = ql();
                if (1073741823 === t ? r = 99 : 1 === t || 2 === t ? r = 95 : r = 0 >= (r = 10 * (1073741821 - t) - 10 * (1073741821 - r)) ? 99 : 250 >= r ? 98 : 5250 >= r ? 97 : 95, null !== n) {
                    var a = e.callbackPriority;
                    if (e.callbackExpirationTime === t && a >= r) return;
                    n !== Na && Ea(n)
                }
                e.callbackExpirationTime = t, e.callbackPriority = r, t = 1073741823 === t ? Va(Jl.bind(null, e)) : Wa(r, Zl.bind(null, e), {
                    timeout: 10 * (1073741821 - t) - Ua()
                }), e.callbackNode = t
            }
        }
    }

    function Zl(e, t) {
        if (Ql = 0, t) return Ru(e, t = ql()), Xl(e), null;
        var n = Gl(e);
        if (0 !== n) {
            if (t = e.callbackNode, 0 != (48 & El)) throw Error(i(327));
            if (hu(), e === Cl && n === Sl || nu(e, n), null !== Tl) {
                var r = El;
                El |= 16;
                for (var a = au(); ;) try {
                    uu();
                    break
                } catch (t) {
                    ru(e, t)
                }
                if (Ja(), El = r, yl.current = a, 1 === Ol) throw t = Pl, nu(e, n), Du(e, n), Xl(e), t;
                if (null === Tl) switch (a = e.finishedWork = e.current.alternate, e.finishedExpirationTime = n, r = Ol, Cl = null, r) {
                    case wl:
                    case 1:
                        throw Error(i(345));
                    case 2:
                        Ru(e, 2 < n ? 2 : n);
                        break;
                    case xl:
                        if (Du(e, n), n === (r = e.lastSuspendedTime) && (e.nextKnownPendingLevel = fu(a)), 1073741823 === _l && 10 < (a = zl + 500 - Ua())) {
                            if (Dl) {
                                var o = e.lastPingedTime;
                                if (0 === o || o >= n) {
                                    e.lastPingedTime = n, nu(e, n);
                                    break
                                }
                            }
                            if (0 !== (o = Gl(e)) && o !== n) break;
                            if (0 !== r && r !== n) {
                                e.lastPingedTime = r;
                                break
                            }
                            e.timeoutHandle = bn(du.bind(null, e), a);
                            break
                        }
                        du(e);
                        break;
                    case kl:
                        if (Du(e, n), n === (r = e.lastSuspendedTime) && (e.nextKnownPendingLevel = fu(a)), Dl && (0 === (a = e.lastPingedTime) || a >= n)) {
                            e.lastPingedTime = n, nu(e, n);
                            break
                        }
                        if (0 !== (a = Gl(e)) && a !== n) break;
                        if (0 !== r && r !== n) {
                            e.lastPingedTime = r;
                            break
                        }
                        if (1073741823 !== jl ? r = 10 * (1073741821 - jl) - Ua() : 1073741823 === _l ? r = 0 : (r = 10 * (1073741821 - _l) - 5e3, 0 > (r = (a = Ua()) - r) && (r = 0), (n = 10 * (1073741821 - n) - a) < (r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * vl(r / 1960)) - r) && (r = n)), 10 < r) {
                            e.timeoutHandle = bn(du.bind(null, e), r);
                            break
                        }
                        du(e);
                        break;
                    case 5:
                        if (1073741823 !== _l && null !== Ml) {
                            o = _l;
                            var l = Ml;
                            if (0 >= (r = 0 | l.busyMinDurationMs) ? r = 0 : (a = 0 | l.busyDelayMs, r = (o = Ua() - (10 * (1073741821 - o) - (0 | l.timeoutMs || 5e3))) <= a ? 0 : a + r - o), 10 < r) {
                                Du(e, n), e.timeoutHandle = bn(du.bind(null, e), r);
                                break
                            }
                        }
                        du(e);
                        break;
                    default:
                        throw Error(i(329))
                }
                if (Xl(e), e.callbackNode === t) return Zl.bind(null, e)
            }
        }
        return null
    }

    function Jl(e) {
        var t = e.lastExpiredTime;
        if (t = 0 !== t ? t : 1073741823, 0 != (48 & El)) throw Error(i(327));
        if (hu(), e === Cl && t === Sl || nu(e, t), null !== Tl) {
            var n = El;
            El |= 16;
            for (var r = au(); ;) try {
                lu();
                break
            } catch (t) {
                ru(e, t)
            }
            if (Ja(), El = n, yl.current = r, 1 === Ol) throw n = Pl, nu(e, t), Du(e, t), Xl(e), n;
            if (null !== Tl) throw Error(i(261));
            e.finishedWork = e.current.alternate, e.finishedExpirationTime = t, Cl = null, du(e), Xl(e)
        }
        return null
    }

    function eu(e, t) {
        var n = El;
        El |= 1;
        try {
            return e(t)
        } finally {
            0 === (El = n) && Qa()
        }
    }

    function tu(e, t) {
        var n = El;
        El &= -2, El |= 8;
        try {
            return e(t)
        } finally {
            0 === (El = n) && Qa()
        }
    }

    function nu(e, t) {
        e.finishedWork = null, e.finishedExpirationTime = 0;
        var n = e.timeoutHandle;
        if (-1 !== n && (e.timeoutHandle = -1, wn(n)), null !== Tl)
            for (n = Tl.return; null !== n;) {
                var r = n;
                switch (r.tag) {
                    case 1:
                        null != (r = r.type.childContextTypes) && ga();
                        break;
                    case 3:
                        Do(), ua(da), ua(fa);
                        break;
                    case 5:
                        Ro(r);
                        break;
                    case 4:
                        Do();
                        break;
                    case 13:
                    case 19:
                        ua(Lo);
                        break;
                    case 10:
                        eo(r)
                }
                n = n.return
            }
        Cl = e, Tl = Su(e.current, null), Sl = t, Ol = wl, Pl = null, jl = _l = 1073741823, Ml = null, Nl = 0, Dl = !1
    }

    function ru(e, t) {
        for (; ;) {
            try {
                if (Ja(), Uo.current = gi, Qo)
                    for (var n = Ho.memoizedState; null !== n;) {
                        var r = n.queue;
                        null !== r && (r.pending = null), n = n.next
                    }
                if (Bo = 0, Vo = Wo = Ho = null, Qo = !1, null === Tl || null === Tl.return) return Ol = 1, Pl = t, Tl = null;
                e: {
                    var a = e,
                        o = Tl.return,
                        i = Tl,
                        l = t;
                    if (t = Sl, i.effectTag |= 2048, i.firstEffect = i.lastEffect = null, null !== l && "object" == typeof l && "function" == typeof l.then) {
                        var u = l;
                        if (0 == (2 & i.mode)) {
                            var c = i.alternate;
                            c ? (i.updateQueue = c.updateQueue, i.memoizedState = c.memoizedState, i.expirationTime = c.expirationTime) : (i.updateQueue = null, i.memoizedState = null)
                        }
                        var s = 0 != (1 & Lo.current),
                            f = o;
                        do {
                            var d;
                            if (d = 13 === f.tag) {
                                var p = f.memoizedState;
                                if (null !== p) d = null !== p.dehydrated;
                                else {
                                    var m = f.memoizedProps;
                                    d = void 0 !== m.fallback && (!0 !== m.unstable_avoidThisFallback || !s)
                                }
                            }
                            if (d) {
                                var h = f.updateQueue;
                                if (null === h) {
                                    var g = new Set;
                                    g.add(u), f.updateQueue = g
                                } else h.add(u);
                                if (0 == (2 & f.mode)) {
                                    if (f.effectTag |= 64, i.effectTag &= -2981, 1 === i.tag)
                                        if (null === i.alternate) i.tag = 17;
                                        else {
                                            var v = lo(1073741823, null);
                                            v.tag = 2, uo(i, v)
                                        } i.expirationTime = 1073741823;
                                    break e
                                }
                                l = void 0, i = t;
                                var y = a.pingCache;
                                if (null === y ? (y = a.pingCache = new pl, l = new Set, y.set(u, l)) : void 0 === (l = y.get(u)) && (l = new Set, y.set(u, l)), !l.has(i)) {
                                    l.add(i);
                                    var b = bu.bind(null, a, u, i);
                                    u.then(b, b)
                                }
                                f.effectTag |= 4096, f.expirationTime = t;
                                break e
                            }
                            f = f.return
                        } while (null !== f);
                        l = Error((ge(i.type) || "A React component") + " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display." + ve(i))
                    }
                    5 !== Ol && (Ol = 2),
                        l = Zi(l, i),
                        f = o; do {
                            switch (f.tag) {
                                case 3:
                                    u = l, f.effectTag |= 4096, f.expirationTime = t, co(f, ml(f, u, t));
                                    break e;
                                case 1:
                                    u = l;
                                    var w = f.type,
                                        x = f.stateNode;
                                    if (0 == (64 & f.effectTag) && ("function" == typeof w.getDerivedStateFromError || null !== x && "function" == typeof x.componentDidCatch && (null === Il || !Il.has(x)))) {
                                        f.effectTag |= 4096, f.expirationTime = t, co(f, hl(f, u, t));
                                        break e
                                    }
                            }
                            f = f.return
                        } while (null !== f)
                }
                Tl = su(Tl)
            } catch (e) {
                t = e;
                continue
            }
            break
        }
    }

    function au() {
        var e = yl.current;
        return yl.current = gi, null === e ? gi : e
    }

    function ou(e, t) {
        e < _l && 2 < e && (_l = e), null !== t && e < jl && 2 < e && (jl = e, Ml = t)
    }

    function iu(e) {
        e > Nl && (Nl = e)
    }

    function lu() {
        for (; null !== Tl;) Tl = cu(Tl)
    }

    function uu() {
        for (; null !== Tl && !Da();) Tl = cu(Tl)
    }

    function cu(e) {
        var t = gl(e.alternate, e, Sl);
        return e.memoizedProps = e.pendingProps, null === t && (t = su(e)), bl.current = null, t
    }

    function su(e) {
        Tl = e;
        do {
            var t = Tl.alternate;
            if (e = Tl.return, 0 == (2048 & Tl.effectTag)) {
                if (t = Gi(t, Tl, Sl), 1 === Sl || 1 !== Tl.childExpirationTime) {
                    for (var n = 0, r = Tl.child; null !== r;) {
                        var a = r.expirationTime,
                            o = r.childExpirationTime;
                        a > n && (n = a), o > n && (n = o), r = r.sibling
                    }
                    Tl.childExpirationTime = n
                }
                if (null !== t) return t;
                null !== e && 0 == (2048 & e.effectTag) && (null === e.firstEffect && (e.firstEffect = Tl.firstEffect), null !== Tl.lastEffect && (null !== e.lastEffect && (e.lastEffect.nextEffect = Tl.firstEffect), e.lastEffect = Tl.lastEffect), 1 < Tl.effectTag && (null !== e.lastEffect ? e.lastEffect.nextEffect = Tl : e.firstEffect = Tl, e.lastEffect = Tl))
            } else {
                if (null !== (t = Xi(Tl))) return t.effectTag &= 2047, t;
                null !== e && (e.firstEffect = e.lastEffect = null, e.effectTag |= 2048)
            }
            if (null !== (t = Tl.sibling)) return t;
            Tl = e
        } while (null !== Tl);
        return Ol === wl && (Ol = 5), null
    }

    function fu(e) {
        var t = e.expirationTime;
        return t > (e = e.childExpirationTime) ? t : e
    }

    function du(e) {
        var t = Aa();
        return Ha(99, pu.bind(null, e, t)), null
    }

    function pu(e, t) {
        do {
            hu()
        } while (null !== Al);
        if (0 != (48 & El)) throw Error(i(327));
        var n = e.finishedWork,
            r = e.finishedExpirationTime;
        if (null === n) return null;
        if (e.finishedWork = null, e.finishedExpirationTime = 0, n === e.current) throw Error(i(177));
        e.callbackNode = null, e.callbackExpirationTime = 0, e.callbackPriority = 90, e.nextKnownPendingLevel = 0;
        var a = fu(n);
        if (e.firstPendingTime = a, r <= e.lastSuspendedTime ? e.firstSuspendedTime = e.lastSuspendedTime = e.nextKnownPendingLevel = 0 : r <= e.firstSuspendedTime && (e.firstSuspendedTime = r - 1), r <= e.lastPingedTime && (e.lastPingedTime = 0), r <= e.lastExpiredTime && (e.lastExpiredTime = 0), e === Cl && (Tl = Cl = null, Sl = 0), 1 < n.effectTag ? null !== n.lastEffect ? (n.lastEffect.nextEffect = n, a = n.firstEffect) : a = n : a = n.firstEffect, null !== a) {
            var o = El;
            El |= 32, bl.current = null, hn = qt;
            var l = pn();
            if (mn(l)) {
                if ("selectionStart" in l) var u = {
                    start: l.selectionStart,
                    end: l.selectionEnd
                };
                else e: {
                    var c = (u = (u = l.ownerDocument) && u.defaultView || window).getSelection && u.getSelection();
                    if (c && 0 !== c.rangeCount) {
                        u = c.anchorNode;
                        var s = c.anchorOffset,
                            f = c.focusNode;
                        c = c.focusOffset;
                        try {
                            u.nodeType, f.nodeType
                        } catch (e) {
                            u = null;
                            break e
                        }
                        var d = 0,
                            p = -1,
                            m = -1,
                            h = 0,
                            g = 0,
                            v = l,
                            y = null;
                        t: for (; ;) {
                            for (var b; v !== u || 0 !== s && 3 !== v.nodeType || (p = d + s), v !== f || 0 !== c && 3 !== v.nodeType || (m = d + c), 3 === v.nodeType && (d += v.nodeValue.length), null !== (b = v.firstChild);) y = v, v = b;
                            for (; ;) {
                                if (v === l) break t;
                                if (y === u && ++h === s && (p = d), y === f && ++g === c && (m = d), null !== (b = v.nextSibling)) break;
                                y = (v = y).parentNode
                            }
                            v = b
                        }
                        u = -1 === p || -1 === m ? null : {
                            start: p,
                            end: m
                        }
                    } else u = null
                }
                u = u || {
                    start: 0,
                    end: 0
                }
            } else u = null;
            gn = {
                activeElementDetached: null,
                focusedElem: l,
                selectionRange: u
            }, qt = !1, Rl = a;
            do {
                try {
                    mu()
                } catch (e) {
                    if (null === Rl) throw Error(i(330));
                    yu(Rl, e), Rl = Rl.nextEffect
                }
            } while (null !== Rl);
            Rl = a;
            do {
                try {
                    for (l = e, u = t; null !== Rl;) {
                        var w = Rl.effectTag;
                        if (16 & w && Ae(Rl.stateNode, ""), 128 & w) {
                            var x = Rl.alternate;
                            if (null !== x) {
                                var k = x.ref;
                                null !== k && ("function" == typeof k ? k(null) : k.current = null)
                            }
                        }
                        switch (1038 & w) {
                            case 2:
                                cl(Rl), Rl.effectTag &= -3;
                                break;
                            case 6:
                                cl(Rl), Rl.effectTag &= -3, fl(Rl.alternate, Rl);
                                break;
                            case 1024:
                                Rl.effectTag &= -1025;
                                break;
                            case 1028:
                                Rl.effectTag &= -1025, fl(Rl.alternate, Rl);
                                break;
                            case 4:
                                fl(Rl.alternate, Rl);
                                break;
                            case 8:
                                sl(l, s = Rl, u), ll(s)
                        }
                        Rl = Rl.nextEffect
                    }
                } catch (e) {
                    if (null === Rl) throw Error(i(330));
                    yu(Rl, e), Rl = Rl.nextEffect
                }
            } while (null !== Rl);
            if (k = gn, x = pn(), w = k.focusedElem, u = k.selectionRange, x !== w && w && w.ownerDocument && function e(t, n) {
                return !(!t || !n) && (t === n || (!t || 3 !== t.nodeType) && (n && 3 === n.nodeType ? e(t, n.parentNode) : "contains" in t ? t.contains(n) : !!t.compareDocumentPosition && !!(16 & t.compareDocumentPosition(n))))
            }(w.ownerDocument.documentElement, w)) {
                null !== u && mn(w) && (x = u.start, void 0 === (k = u.end) && (k = x), "selectionStart" in w ? (w.selectionStart = x, w.selectionEnd = Math.min(k, w.value.length)) : (k = (x = w.ownerDocument || document) && x.defaultView || window).getSelection && (k = k.getSelection(), s = w.textContent.length, l = Math.min(u.start, s), u = void 0 === u.end ? l : Math.min(u.end, s), !k.extend && l > u && (s = u, u = l, l = s), s = dn(w, l), f = dn(w, u), s && f && (1 !== k.rangeCount || k.anchorNode !== s.node || k.anchorOffset !== s.offset || k.focusNode !== f.node || k.focusOffset !== f.offset) && ((x = x.createRange()).setStart(s.node, s.offset), k.removeAllRanges(), l > u ? (k.addRange(x), k.extend(f.node, f.offset)) : (x.setEnd(f.node, f.offset), k.addRange(x))))), x = [];
                for (k = w; k = k.parentNode;) 1 === k.nodeType && x.push({
                    element: k,
                    left: k.scrollLeft,
                    top: k.scrollTop
                });
                for ("function" == typeof w.focus && w.focus(), w = 0; w < x.length; w++)(k = x[w]).element.scrollLeft = k.left, k.element.scrollTop = k.top
            }
            qt = !!hn, gn = hn = null, e.current = n, Rl = a;
            do {
                try {
                    for (w = e; null !== Rl;) {
                        var E = Rl.effectTag;
                        if (36 & E && ol(w, Rl.alternate, Rl), 128 & E) {
                            x = void 0;
                            var C = Rl.ref;
                            if (null !== C) {
                                var T = Rl.stateNode;
                                switch (Rl.tag) {
                                    case 5:
                                        x = T;
                                        break;
                                    default:
                                        x = T
                                }
                                "function" == typeof C ? C(x) : C.current = x
                            }
                        }
                        Rl = Rl.nextEffect
                    }
                } catch (e) {
                    if (null === Rl) throw Error(i(330));
                    yu(Rl, e), Rl = Rl.nextEffect
                }
            } while (null !== Rl);
            Rl = null, za(), El = o
        } else e.current = n;
        if (Ul) Ul = !1, Al = e, Bl = t;
        else
            for (Rl = a; null !== Rl;) t = Rl.nextEffect, Rl.nextEffect = null, Rl = t;
        if (0 === (t = e.firstPendingTime) && (Il = null), 1073741823 === t ? e === Vl ? Wl++ : (Wl = 0, Vl = e) : Wl = 0, "function" == typeof xu && xu(n.stateNode, r), Xl(e), Ll) throw Ll = !1, e = Fl, Fl = null, e;
        return 0 != (8 & El) || Qa(), null
    }

    function mu() {
        for (; null !== Rl;) {
            var e = Rl.effectTag;
            0 != (256 & e) && nl(Rl.alternate, Rl), 0 == (512 & e) || Ul || (Ul = !0, Wa(97, (function () {
                return hu(), null
            }))), Rl = Rl.nextEffect
        }
    }

    function hu() {
        if (90 !== Bl) {
            var e = 97 < Bl ? 97 : Bl;
            return Bl = 90, Ha(e, gu)
        }
    }

    function gu() {
        if (null === Al) return !1;
        var e = Al;
        if (Al = null, 0 != (48 & El)) throw Error(i(331));
        var t = El;
        for (El |= 32, e = e.current.firstEffect; null !== e;) {
            try {
                var n = e;
                if (0 != (512 & n.effectTag)) switch (n.tag) {
                    case 0:
                    case 11:
                    case 15:
                    case 22:
                        rl(5, n), al(5, n)
                }
            } catch (t) {
                if (null === e) throw Error(i(330));
                yu(e, t)
            }
            n = e.nextEffect, e.nextEffect = null, e = n
        }
        return El = t, Qa(), !0
    }

    function vu(e, t, n) {
        uo(e, t = ml(e, t = Zi(n, t), 1073741823)), null !== (e = Kl(e, 1073741823)) && Xl(e)
    }

    function yu(e, t) {
        if (3 === e.tag) vu(e, e, t);
        else
            for (var n = e.return; null !== n;) {
                if (3 === n.tag) {
                    vu(n, e, t);
                    break
                }
                if (1 === n.tag) {
                    var r = n.stateNode;
                    if ("function" == typeof n.type.getDerivedStateFromError || "function" == typeof r.componentDidCatch && (null === Il || !Il.has(r))) {
                        uo(n, e = hl(n, e = Zi(t, e), 1073741823)), null !== (n = Kl(n, 1073741823)) && Xl(n);
                        break
                    }
                }
                n = n.return
            }
    }

    function bu(e, t, n) {
        var r = e.pingCache;
        null !== r && r.delete(t), Cl === e && Sl === n ? Ol === kl || Ol === xl && 1073741823 === _l && Ua() - zl < 500 ? nu(e, Sl) : Dl = !0 : Nu(e, n) && (0 !== (t = e.lastPingedTime) && t < n || (e.lastPingedTime = n, Xl(e)))
    }

    function wu(e, t) {
        var n = e.stateNode;
        null !== n && n.delete(t), 0 === (t = 0) && (t = $l(t = ql(), e, null)), null !== (e = Kl(e, t)) && Xl(e)
    }
    gl = function (e, t, n) {
        var r = t.expirationTime;
        if (null !== e) {
            var a = t.pendingProps;
            if (e.memoizedProps !== a || da.current) ji = !0;
            else {
                if (r < n) {
                    switch (ji = !1, t.tag) {
                        case 3:
                            Ui(t), Pi();
                            break;
                        case 5:
                            if (zo(t), 4 & t.mode && 1 !== n && a.hidden) return t.expirationTime = t.childExpirationTime = 1, null;
                            break;
                        case 1:
                            ha(t.type) && ba(t);
                            break;
                        case 4:
                            No(t, t.stateNode.containerInfo);
                            break;
                        case 10:
                            r = t.memoizedProps.value, a = t.type._context, ca(Ka, a._currentValue), a._currentValue = r;
                            break;
                        case 13:
                            if (null !== t.memoizedState) return 0 !== (r = t.child.childExpirationTime) && r >= n ? Vi(e, t, n) : (ca(Lo, 1 & Lo.current), null !== (t = Yi(e, t, n)) ? t.sibling : null);
                            ca(Lo, 1 & Lo.current);
                            break;
                        case 19:
                            if (r = t.childExpirationTime >= n, 0 != (64 & e.effectTag)) {
                                if (r) return $i(e, t, n);
                                t.effectTag |= 64
                            }
                            if (null !== (a = t.memoizedState) && (a.rendering = null, a.tail = null), ca(Lo, Lo.current), !r) return null
                    }
                    return Yi(e, t, n)
                }
                ji = !1
            }
        } else ji = !1;
        switch (t.expirationTime = 0, t.tag) {
            case 2:
                if (r = t.type, null !== e && (e.alternate = null, t.alternate = null, t.effectTag |= 2), e = t.pendingProps, a = ma(t, fa.current), no(t, n), a = Yo(null, t, r, e, a, n), t.effectTag |= 1, "object" == typeof a && null !== a && "function" == typeof a.render && void 0 === a.$$typeof) {
                    if (t.tag = 1, t.memoizedState = null, t.updateQueue = null, ha(r)) {
                        var o = !0;
                        ba(t)
                    } else o = !1;
                    t.memoizedState = null !== a.state && void 0 !== a.state ? a.state : null, oo(t);
                    var l = r.getDerivedStateFromProps;
                    "function" == typeof l && ho(t, r, l, e), a.updater = go, t.stateNode = a, a._reactInternalFiber = t, wo(t, r, e, n), t = Ii(null, t, r, !0, o, n)
                } else t.tag = 0, Mi(null, t, a, n), t = t.child;
                return t;
            case 16:
                e: {
                    if (a = t.elementType, null !== e && (e.alternate = null, t.alternate = null, t.effectTag |= 2), e = t.pendingProps, function (e) {
                        if (-1 === e._status) {
                            e._status = 0;
                            var t = e._ctor;
                            t = t(), e._result = t, t.then((function (t) {
                                0 === e._status && (t = t.default, e._status = 1, e._result = t)
                            }), (function (t) {
                                0 === e._status && (e._status = 2, e._result = t)
                            }))
                        }
                    }(a), 1 !== a._status) throw a._result;
                    switch (a = a._result, t.type = a, o = t.tag = function (e) {
                        if ("function" == typeof e) return Tu(e) ? 1 : 0;
                        if (null != e) {
                            if ((e = e.$$typeof) === ue) return 11;
                            if (e === fe) return 14
                        }
                        return 2
                    }(a), e = Ya(a, e), o) {
                        case 0:
                            t = Li(null, t, a, e, n);
                            break e;
                        case 1:
                            t = Fi(null, t, a, e, n);
                            break e;
                        case 11:
                            t = Ni(null, t, a, e, n);
                            break e;
                        case 14:
                            t = Di(null, t, a, Ya(a.type, e), r, n);
                            break e
                    }
                    throw Error(i(306, a, ""))
                }
                return t;
            case 0:
                return r = t.type, a = t.pendingProps, Li(e, t, r, a = t.elementType === r ? a : Ya(r, a), n);
            case 1:
                return r = t.type, a = t.pendingProps, Fi(e, t, r, a = t.elementType === r ? a : Ya(r, a), n);
            case 3:
                if (Ui(t), r = t.updateQueue, null === e || null === r) throw Error(i(282));
                if (r = t.pendingProps, a = null !== (a = t.memoizedState) ? a.element : null, io(e, t), so(t, r, null, n), (r = t.memoizedState.element) === a) Pi(), t = Yi(e, t, n);
                else {
                    if ((a = t.stateNode.hydrate) && (xi = xn(t.stateNode.containerInfo.firstChild), wi = t, a = ki = !0), a)
                        for (n = So(t, null, r, n), t.child = n; n;) n.effectTag = -3 & n.effectTag | 1024, n = n.sibling;
                    else Mi(e, t, r, n), Pi();
                    t = t.child
                }
                return t;
            case 5:
                return zo(t), null === e && Ti(t), r = t.type, a = t.pendingProps, o = null !== e ? e.memoizedProps : null, l = a.children, yn(r, a) ? l = null : null !== o && yn(r, o) && (t.effectTag |= 16), Ri(e, t), 4 & t.mode && 1 !== n && a.hidden ? (t.expirationTime = t.childExpirationTime = 1, t = null) : (Mi(e, t, l, n), t = t.child), t;
            case 6:
                return null === e && Ti(t), null;
            case 13:
                return Vi(e, t, n);
            case 4:
                return No(t, t.stateNode.containerInfo), r = t.pendingProps, null === e ? t.child = To(t, null, r, n) : Mi(e, t, r, n), t.child;
            case 11:
                return r = t.type, a = t.pendingProps, Ni(e, t, r, a = t.elementType === r ? a : Ya(r, a), n);
            case 7:
                return Mi(e, t, t.pendingProps, n), t.child;
            case 8:
            case 12:
                return Mi(e, t, t.pendingProps.children, n), t.child;
            case 10:
                e: {
                    r = t.type._context,
                        a = t.pendingProps,
                        l = t.memoizedProps,
                        o = a.value;
                    var u = t.type._context;
                    if (ca(Ka, u._currentValue), u._currentValue = o, null !== l)
                        if (u = l.value, 0 === (o = Fr(u, o) ? 0 : 0 | ("function" == typeof r._calculateChangedBits ? r._calculateChangedBits(u, o) : 1073741823))) {
                            if (l.children === a.children && !da.current) {
                                t = Yi(e, t, n);
                                break e
                            }
                        } else
                            for (null !== (u = t.child) && (u.return = t); null !== u;) {
                                var c = u.dependencies;
                                if (null !== c) {
                                    l = u.child;
                                    for (var s = c.firstContext; null !== s;) {
                                        if (s.context === r && 0 != (s.observedBits & o)) {
                                            1 === u.tag && ((s = lo(n, null)).tag = 2, uo(u, s)), u.expirationTime < n && (u.expirationTime = n), null !== (s = u.alternate) && s.expirationTime < n && (s.expirationTime = n), to(u.return, n), c.expirationTime < n && (c.expirationTime = n);
                                            break
                                        }
                                        s = s.next
                                    }
                                } else l = 10 === u.tag && u.type === t.type ? null : u.child;
                                if (null !== l) l.return = u;
                                else
                                    for (l = u; null !== l;) {
                                        if (l === t) {
                                            l = null;
                                            break
                                        }
                                        if (null !== (u = l.sibling)) {
                                            u.return = l.return, l = u;
                                            break
                                        }
                                        l = l.return
                                    }
                                u = l
                            }
                    Mi(e, t, a.children, n),
                        t = t.child
                }
                return t;
            case 9:
                return a = t.type, r = (o = t.pendingProps).children, no(t, n), r = r(a = ro(a, o.unstable_observedBits)), t.effectTag |= 1, Mi(e, t, r, n), t.child;
            case 14:
                return o = Ya(a = t.type, t.pendingProps), Di(e, t, a, o = Ya(a.type, o), r, n);
            case 15:
                return zi(e, t, t.type, t.pendingProps, r, n);
            case 17:
                return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : Ya(r, a), null !== e && (e.alternate = null, t.alternate = null, t.effectTag |= 2), t.tag = 1, ha(r) ? (e = !0, ba(t)) : e = !1, no(t, n), yo(t, r, a), wo(t, r, a, n), Ii(null, t, r, !0, e, n);
            case 19:
                return $i(e, t, n)
        }
        throw Error(i(156, t.tag))
    };
    var xu = null,
        ku = null;

    function Eu(e, t, n, r) {
        this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.effectTag = 0, this.lastEffect = this.firstEffect = this.nextEffect = null, this.childExpirationTime = this.expirationTime = 0, this.alternate = null
    }

    function Cu(e, t, n, r) {
        return new Eu(e, t, n, r)
    }

    function Tu(e) {
        return !(!(e = e.prototype) || !e.isReactComponent)
    }

    function Su(e, t) {
        var n = e.alternate;
        return null === n ? ((n = Cu(e.tag, t, e.key, e.mode)).elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.effectTag = 0, n.nextEffect = null, n.firstEffect = null, n.lastEffect = null), n.childExpirationTime = e.childExpirationTime, n.expirationTime = e.expirationTime, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = null === t ? null : {
            expirationTime: t.expirationTime,
            firstContext: t.firstContext,
            responders: t.responders
        }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
    }

    function Ou(e, t, n, r, a, o) {
        var l = 2;
        if (r = e, "function" == typeof e) Tu(e) && (l = 1);
        else if ("string" == typeof e) l = 5;
        else e: switch (e) {
            case ne:
                return Pu(n.children, a, o, t);
            case le:
                l = 8, a |= 7;
                break;
            case re:
                l = 8, a |= 1;
                break;
            case ae:
                return (e = Cu(12, n, t, 8 | a)).elementType = ae, e.type = ae, e.expirationTime = o, e;
            case ce:
                return (e = Cu(13, n, t, a)).type = ce, e.elementType = ce, e.expirationTime = o, e;
            case se:
                return (e = Cu(19, n, t, a)).elementType = se, e.expirationTime = o, e;
            default:
                if ("object" == typeof e && null !== e) switch (e.$$typeof) {
                    case oe:
                        l = 10;
                        break e;
                    case ie:
                        l = 9;
                        break e;
                    case ue:
                        l = 11;
                        break e;
                    case fe:
                        l = 14;
                        break e;
                    case de:
                        l = 16, r = null;
                        break e;
                    case pe:
                        l = 22;
                        break e
                }
                throw Error(i(130, null == e ? e : typeof e, ""))
        }
        return (t = Cu(l, n, t, a)).elementType = e, t.type = r, t.expirationTime = o, t
    }

    function Pu(e, t, n, r) {
        return (e = Cu(7, e, r, t)).expirationTime = n, e
    }

    function _u(e, t, n) {
        return (e = Cu(6, e, null, t)).expirationTime = n, e
    }

    function ju(e, t, n) {
        return (t = Cu(4, null !== e.children ? e.children : [], e.key, t)).expirationTime = n, t.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation
        }, t
    }

    function Mu(e, t, n) {
        this.tag = t, this.current = null, this.containerInfo = e, this.pingCache = this.pendingChildren = null, this.finishedExpirationTime = 0, this.finishedWork = null, this.timeoutHandle = -1, this.pendingContext = this.context = null, this.hydrate = n, this.callbackNode = null, this.callbackPriority = 90, this.lastExpiredTime = this.lastPingedTime = this.nextKnownPendingLevel = this.lastSuspendedTime = this.firstSuspendedTime = this.firstPendingTime = 0
    }

    function Nu(e, t) {
        var n = e.firstSuspendedTime;
        return e = e.lastSuspendedTime, 0 !== n && n >= t && e <= t
    }

    function Du(e, t) {
        var n = e.firstSuspendedTime,
            r = e.lastSuspendedTime;
        n < t && (e.firstSuspendedTime = t), (r > t || 0 === n) && (e.lastSuspendedTime = t), t <= e.lastPingedTime && (e.lastPingedTime = 0), t <= e.lastExpiredTime && (e.lastExpiredTime = 0)
    }

    function zu(e, t) {
        t > e.firstPendingTime && (e.firstPendingTime = t);
        var n = e.firstSuspendedTime;
        0 !== n && (t >= n ? e.firstSuspendedTime = e.lastSuspendedTime = e.nextKnownPendingLevel = 0 : t >= e.lastSuspendedTime && (e.lastSuspendedTime = t + 1), t > e.nextKnownPendingLevel && (e.nextKnownPendingLevel = t))
    }

    function Ru(e, t) {
        var n = e.lastExpiredTime;
        (0 === n || n > t) && (e.lastExpiredTime = t)
    }

    function Lu(e, t, n, r) {
        var a = t.current,
            o = ql(),
            l = po.suspense;
        o = $l(o, a, l);
        e: if (n) {
            t: {
                if (Je(n = n._reactInternalFiber) !== n || 1 !== n.tag) throw Error(i(170));
                var u = n; do {
                    switch (u.tag) {
                        case 3:
                            u = u.stateNode.context;
                            break t;
                        case 1:
                            if (ha(u.type)) {
                                u = u.stateNode.__reactInternalMemoizedMergedChildContext;
                                break t
                            }
                    }
                    u = u.return
                } while (null !== u);
                throw Error(i(171))
            }
            if (1 === n.tag) {
                var c = n.type;
                if (ha(c)) {
                    n = ya(n, c, u);
                    break e
                }
            }
            n = u
        }
        else n = sa;
        return null === t.context ? t.context = n : t.pendingContext = n, (t = lo(o, l)).payload = {
            element: e
        }, null !== (r = void 0 === r ? null : r) && (t.callback = r), uo(a, t), Yl(a, o), o
    }

    function Fu(e) {
        if (!(e = e.current).child) return null;
        switch (e.child.tag) {
            case 5:
            default:
                return e.child.stateNode
        }
    }

    function Iu(e, t) {
        null !== (e = e.memoizedState) && null !== e.dehydrated && e.retryTime < t && (e.retryTime = t)
    }

    function Uu(e, t) {
        Iu(e, t), (e = e.alternate) && Iu(e, t)
    }

    function Au(e, t, n) {
        var r = new Mu(e, t, n = null != n && !0 === n.hydrate),
            a = Cu(3, null, null, 2 === t ? 7 : 1 === t ? 3 : 0);
        r.current = a, a.stateNode = r, oo(a), e[Sn] = r.current, n && 0 !== t && function (e, t) {
            var n = Ze(t);
            St.forEach((function (e) {
                mt(e, t, n)
            })), Ot.forEach((function (e) {
                mt(e, t, n)
            }))
        }(0, 9 === e.nodeType ? e : e.ownerDocument), this._internalRoot = r
    }

    function Bu(e) {
        return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType && (8 !== e.nodeType || " react-mount-point-unstable " !== e.nodeValue))
    }

    function Hu(e, t, n, r, a) {
        var o = n._reactRootContainer;
        if (o) {
            var i = o._internalRoot;
            if ("function" == typeof a) {
                var l = a;
                a = function () {
                    var e = Fu(i);
                    l.call(e)
                }
            }
            Lu(t, i, e, a)
        } else {
            if (o = n._reactRootContainer = function (e, t) {
                if (t || (t = !(!(t = e ? 9 === e.nodeType ? e.documentElement : e.firstChild : null) || 1 !== t.nodeType || !t.hasAttribute("data-reactroot"))), !t)
                    for (var n; n = e.lastChild;) e.removeChild(n);
                return new Au(e, 0, t ? {
                    hydrate: !0
                } : void 0)
            }(n, r), i = o._internalRoot, "function" == typeof a) {
                var u = a;
                a = function () {
                    var e = Fu(i);
                    u.call(e)
                }
            }
            tu((function () {
                Lu(t, i, e, a)
            }))
        }
        return Fu(i)
    }

    function Wu(e, t, n) {
        var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
        return {
            $$typeof: te,
            key: null == r ? null : "" + r,
            children: e,
            containerInfo: t,
            implementation: n
        }
    }

    function Vu(e, t) {
        var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
        if (!Bu(t)) throw Error(i(200));
        return Wu(e, t, null, n)
    }
    Au.prototype.render = function (e) {
        Lu(e, this._internalRoot, null, null)
    }, Au.prototype.unmount = function () {
        var e = this._internalRoot,
            t = e.containerInfo;
        Lu(null, e, null, (function () {
            t[Sn] = null
        }))
    }, ht = function (e) {
        if (13 === e.tag) {
            var t = $a(ql(), 150, 100);
            Yl(e, t), Uu(e, t)
        }
    }, gt = function (e) {
        13 === e.tag && (Yl(e, 3), Uu(e, 3))
    }, vt = function (e) {
        if (13 === e.tag) {
            var t = ql();
            Yl(e, t = $l(t, e, null)), Uu(e, t)
        }
    }, P = function (e, t, n) {
        switch (t) {
            case "input":
                if (Te(e, n), t = n.name, "radio" === n.type && null != t) {
                    for (n = e; n.parentNode;) n = n.parentNode;
                    for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                        var r = n[t];
                        if (r !== e && r.form === e.form) {
                            var a = jn(r);
                            if (!a) throw Error(i(90));
                            xe(r), Te(r, a)
                        }
                    }
                }
                break;
            case "textarea":
                Ne(e, n);
                break;
            case "select":
                null != (t = n.value) && _e(e, !!n.multiple, t, !1)
        }
    }, z = eu, R = function (e, t, n, r, a) {
        var o = El;
        El |= 4;
        try {
            return Ha(98, e.bind(null, t, n, r, a))
        } finally {
            0 === (El = o) && Qa()
        }
    }, L = function () {
        0 == (49 & El) && (function () {
            if (null !== Hl) {
                var e = Hl;
                Hl = null, e.forEach((function (e, t) {
                    Ru(t, e), Xl(t)
                })), Qa()
            }
        }(), hu())
    }, F = function (e, t) {
        var n = El;
        El |= 2;
        try {
            return e(t)
        } finally {
            0 === (El = n) && Qa()
        }
    };
    var Qu, qu, $u = {
        Events: [Pn, _n, jn, S, E, Fn, function (e) {
            at(e, Ln)
        }, N, D, Xt, lt, hu, {
                current: !1
            }]
    };
    qu = (Qu = {
        findFiberByHostInstance: On,
        bundleType: 0,
        version: "16.14.0",
        rendererPackageName: "react-dom"
    }).findFiberByHostInstance,
        function (e) {
            if ("undefined" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) return !1;
            var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
            if (t.isDisabled || !t.supportsFiber) return !0;
            try {
                var n = t.inject(e);
                xu = function (e) {
                    try {
                        t.onCommitFiberRoot(n, e, void 0, 64 == (64 & e.current.effectTag))
                    } catch (e) { }
                }, ku = function (e) {
                    try {
                        t.onCommitFiberUnmount(n, e)
                    } catch (e) { }
                }
            } catch (e) { }
        }(a({}, Qu, {
            overrideHookState: null,
            overrideProps: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: G.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (e) {
                return null === (e = nt(e)) ? null : e.stateNode
            },
            findFiberByHostInstance: function (e) {
                return qu ? qu(e) : null
            },
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null
        })), t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = $u, t.createPortal = Vu, t.findDOMNode = function (e) {
            if (null == e) return null;
            if (1 === e.nodeType) return e;
            var t = e._reactInternalFiber;
            if (void 0 === t) {
                if ("function" == typeof e.render) throw Error(i(188));
                throw Error(i(268, Object.keys(e)))
            }
            return e = null === (e = nt(t)) ? null : e.stateNode
        }, t.flushSync = function (e, t) {
            if (0 != (48 & El)) throw Error(i(187));
            var n = El;
            El |= 1;
            try {
                return Ha(99, e.bind(null, t))
            } finally {
                El = n, Qa()
            }
        }, t.hydrate = function (e, t, n) {
            if (!Bu(t)) throw Error(i(200));
            return Hu(null, e, t, !0, n)
        }, t.render = function (e, t, n) {
            if (!Bu(t)) throw Error(i(200));
            return Hu(null, e, t, !1, n)
        }, t.unmountComponentAtNode = function (e) {
            if (!Bu(e)) throw Error(i(40));
            return !!e._reactRootContainer && (tu((function () {
                Hu(null, null, e, !1, (function () {
                    e._reactRootContainer = null, e[Sn] = null
                }))
            })), !0)
        }, t.unstable_batchedUpdates = eu, t.unstable_createPortal = function (e, t) {
            return Vu(e, t, 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null)
        }, t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
            if (!Bu(n)) throw Error(i(200));
            if (null == e || void 0 === e._reactInternalFiber) throw Error(i(38));
            return Hu(e, t, n, !1, r)
        }, t.version = "16.14.0"
}, function (e, t, n) {
    "use strict";
    e.exports = n(58)
}, function (e, t, n) {
    "use strict";
    /** @license React v0.19.1
     * scheduler.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    var r, a, o, i, l;
    if ("undefined" == typeof window || "function" != typeof MessageChannel) {
        var u = null,
            c = null,
            s = function () {
                if (null !== u) try {
                    var e = t.unstable_now();
                    u(!0, e), u = null
                } catch (e) {
                    throw setTimeout(s, 0), e
                }
            },
            f = Date.now();
        t.unstable_now = function () {
            return Date.now() - f
        }, r = function (e) {
            null !== u ? setTimeout(r, 0, e) : (u = e, setTimeout(s, 0))
        }, a = function (e, t) {
            c = setTimeout(e, t)
        }, o = function () {
            clearTimeout(c)
        }, i = function () {
            return !1
        }, l = t.unstable_forceFrameRate = function () { }
    } else {
        var d = window.performance,
            p = window.Date,
            m = window.setTimeout,
            h = window.clearTimeout;
        if ("undefined" != typeof console) {
            var g = window.cancelAnimationFrame;
            "function" != typeof window.requestAnimationFrame && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"), "function" != typeof g && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills")
        }
        if ("object" == typeof d && "function" == typeof d.now) t.unstable_now = function () {
            return d.now()
        };
        else {
            var v = p.now();
            t.unstable_now = function () {
                return p.now() - v
            }
        }
        var y = !1,
            b = null,
            w = -1,
            x = 5,
            k = 0;
        i = function () {
            return t.unstable_now() >= k
        }, l = function () { }, t.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported") : x = 0 < e ? Math.floor(1e3 / e) : 5
        };
        var E = new MessageChannel,
            C = E.port2;
        E.port1.onmessage = function () {
            if (null !== b) {
                var e = t.unstable_now();
                k = e + x;
                try {
                    b(!0, e) ? C.postMessage(null) : (y = !1, b = null)
                } catch (e) {
                    throw C.postMessage(null), e
                }
            } else y = !1
        }, r = function (e) {
            b = e, y || (y = !0, C.postMessage(null))
        }, a = function (e, n) {
            w = m((function () {
                e(t.unstable_now())
            }), n)
        }, o = function () {
            h(w), w = -1
        }
    }

    function T(e, t) {
        var n = e.length;
        e.push(t);
        e: for (; ;) {
            var r = n - 1 >>> 1,
                a = e[r];
            if (!(void 0 !== a && 0 < P(a, t))) break e;
            e[r] = t, e[n] = a, n = r
        }
    }

    function S(e) {
        return void 0 === (e = e[0]) ? null : e
    }

    function O(e) {
        var t = e[0];
        if (void 0 !== t) {
            var n = e.pop();
            if (n !== t) {
                e[0] = n;
                e: for (var r = 0, a = e.length; r < a;) {
                    var o = 2 * (r + 1) - 1,
                        i = e[o],
                        l = o + 1,
                        u = e[l];
                    if (void 0 !== i && 0 > P(i, n)) void 0 !== u && 0 > P(u, i) ? (e[r] = u, e[l] = n, r = l) : (e[r] = i, e[o] = n, r = o);
                    else {
                        if (!(void 0 !== u && 0 > P(u, n))) break e;
                        e[r] = u, e[l] = n, r = l
                    }
                }
            }
            return t
        }
        return null
    }

    function P(e, t) {
        var n = e.sortIndex - t.sortIndex;
        return 0 !== n ? n : e.id - t.id
    }
    var _ = [],
        j = [],
        M = 1,
        N = null,
        D = 3,
        z = !1,
        R = !1,
        L = !1;

    function F(e) {
        for (var t = S(j); null !== t;) {
            if (null === t.callback) O(j);
            else {
                if (!(t.startTime <= e)) break;
                O(j), t.sortIndex = t.expirationTime, T(_, t)
            }
            t = S(j)
        }
    }

    function I(e) {
        if (L = !1, F(e), !R)
            if (null !== S(_)) R = !0, r(U);
            else {
                var t = S(j);
                null !== t && a(I, t.startTime - e)
            }
    }

    function U(e, n) {
        R = !1, L && (L = !1, o()), z = !0;
        var r = D;
        try {
            for (F(n), N = S(_); null !== N && (!(N.expirationTime > n) || e && !i());) {
                var l = N.callback;
                if (null !== l) {
                    N.callback = null, D = N.priorityLevel;
                    var u = l(N.expirationTime <= n);
                    n = t.unstable_now(), "function" == typeof u ? N.callback = u : N === S(_) && O(_), F(n)
                } else O(_);
                N = S(_)
            }
            if (null !== N) var c = !0;
            else {
                var s = S(j);
                null !== s && a(I, s.startTime - n), c = !1
            }
            return c
        } finally {
            N = null, D = r, z = !1
        }
    }

    function A(e) {
        switch (e) {
            case 1:
                return -1;
            case 2:
                return 250;
            case 5:
                return 1073741823;
            case 4:
                return 1e4;
            default:
                return 5e3
        }
    }
    var B = l;
    t.unstable_IdlePriority = 5, t.unstable_ImmediatePriority = 1, t.unstable_LowPriority = 4, t.unstable_NormalPriority = 3, t.unstable_Profiling = null, t.unstable_UserBlockingPriority = 2, t.unstable_cancelCallback = function (e) {
        e.callback = null
    }, t.unstable_continueExecution = function () {
        R || z || (R = !0, r(U))
    }, t.unstable_getCurrentPriorityLevel = function () {
        return D
    }, t.unstable_getFirstCallbackNode = function () {
        return S(_)
    }, t.unstable_next = function (e) {
        switch (D) {
            case 1:
            case 2:
            case 3:
                var t = 3;
                break;
            default:
                t = D
        }
        var n = D;
        D = t;
        try {
            return e()
        } finally {
            D = n
        }
    }, t.unstable_pauseExecution = function () { }, t.unstable_requestPaint = B, t.unstable_runWithPriority = function (e, t) {
        switch (e) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                e = 3
        }
        var n = D;
        D = e;
        try {
            return t()
        } finally {
            D = n
        }
    }, t.unstable_scheduleCallback = function (e, n, i) {
        var l = t.unstable_now();
        if ("object" == typeof i && null !== i) {
            var u = i.delay;
            u = "number" == typeof u && 0 < u ? l + u : l, i = "number" == typeof i.timeout ? i.timeout : A(e)
        } else i = A(e), u = l;
        return e = {
            id: M++,
            callback: n,
            priorityLevel: e,
            startTime: u,
            expirationTime: i = u + i,
            sortIndex: -1
        }, u > l ? (e.sortIndex = u, T(j, e), null === S(_) && e === S(j) && (L ? o() : L = !0, a(I, u - l))) : (e.sortIndex = i, T(_, e), R || z || (R = !0, r(U))), e
    }, t.unstable_shouldYield = function () {
        var e = t.unstable_now();
        F(e);
        var n = S(_);
        return n !== N && null !== N && null !== n && null !== n.callback && n.startTime <= e && n.expirationTime < N.expirationTime || i()
    }, t.unstable_wrapCallback = function (e) {
        var t = D;
        return function () {
            var n = D;
            D = t;
            try {
                return e.apply(this, arguments)
            } finally {
                D = n
            }
        }
    }
}, function (e, t) {
    var n = ["onAbort", "onAnimationCancel", "onAnimationEnd", "onAnimationIteration", "onAuxClick", "onBlur", "onChange", "onClick", "onClose", "onContextMenu", "onDoubleClick", "onError", "onFocus", "onGotPointerCapture", "onInput", "onKeyDown", "onKeyPress", "onKeyUp", "onLoad", "onLoadEnd", "onLoadStart", "onLostPointerCapture", "onMouseDown", "onMouseMove", "onMouseOut", "onMouseOver", "onMouseUp", "onPointerCancel", "onPointerDown", "onPointerEnter", "onPointerLeave", "onPointerMove", "onPointerOut", "onPointerOver", "onPointerUp", "onReset", "onResize", "onScroll", "onSelect", "onSelectionChange", "onSelectStart", "onSubmit", "onTouchCancel", "onTouchMove", "onTouchStart", "onTransitionCancel", "onTransitionEnd", "onDrag", "onDragEnd", "onDragEnter", "onDragExit", "onDragLeave", "onDragOver", "onDragStart", "onDrop", "onFocusOut", "onTouchEnd"],
        r = {
            onDoubleClick: "dblclick"
        },
        a = {
            onInput: "onChange",
            onFocusOut: "onBlur",
            onSelectionChange: "onSelect"
        };

    function o(e) {
        for (var t in e)
            if (e.hasOwnProperty(t) && -1 !== t.indexOf("_reactInternal")) return e[t]
    }

    function i(e) {
        if (e) return e.memoizedProps ? e.memoizedProps : e._currentElement && e._currentElement.props ? e._currentElement.props : void 0
    }

    function l(e, t, n) {
        e.persist = function () {
            e.isPersistent = function () {
                return !0
            }
        }, n[t] && n[t](e)
    }
    e.exports = function (e) {
        var t = [];
        return n.forEach((function (n) {
            var u = function (e) {
                if (r[e]) return r[e];
                return e.replace(/^on/, "").toLowerCase()
            }(n);

            function c(t) {
                for (var r = t.path || t.composedPath && t.composedPath() || function (e) {
                    var t = [];
                    for (; e;) {
                        if (t.push(e), "HTML" === e.tagName) return t.push(document), t.push(window), t;
                        e = e.parentElement
                    }
                }(t.target), u = 0; u < r.length; u++) {
                    var c = r[u],
                        s = o(c),
                        f = i(s);
                    if (s && f && l(t, n, f), s && f && a[n] && l(t, a[n], f), t.cancelBubble) break;
                    if (c === e) break
                }
            }
            e.addEventListener(u, c, !1), t.push((function () {
                e.removeEventListener(u, c, !1)
            }))
        })),
            function () {
                t.forEach((function (e) {
                    e()
                }))
            }
    }
}, function (e, t) {
    e.exports = function (e, t) {
        if (null == e) return {};
        var n, r, a = {},
            o = Object.keys(e);
        for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
        return a
    }, e.exports.__esModule = !0, e.exports.default = e.exports
}, function (e, t, n) {
    "use strict";
    var r = n(0),
        a = n.n(r);

    function o(e) {
        var t = e.siteUrl,
            n = void 0 === t ? "" : t,
            r = e.style,
            o = e.isFree,
            i = a.a.useMemo((function () {
                try {
                    return new URL(n)
                } catch (e) {
                    return ""
                }
            }), [n]);
        if (i) {
            var l = i.hostname.replace("www.", "").replace("ww2.", "");
            return o ? a.a.createElement(a.a.Fragment, null, a.a.createElement("span", {
                className: "rssapp-hostname",
                style: r
            }, "Try", " ", a.a.createElement("a", {
                className: "rssapp-hostname_link",
                href: "https://rss.app/rss-widgets"
            }, "rss.app widgets"), " ", "for free"), a.a.createElement("style", {
                jsx: !0
            }, "\n              .rssapp-hostname {\n                line-height: normal;\n                letter-spacing: 0.1px;\n                display: block !important;\n                overflow: hidden;\n                white-space: nowrap;\n                text-overflow: ellipsis;\n              }\n              .rssapp-hostname_link {\n                color: inherit;\n                outline: unset;\n                text-decoration: unset;\n              }\n            ")) : a.a.createElement("span", {
                className: "rssapp-hostname",
                style: r
            }, l)
        }
        return a.a.createElement(a.a.Fragment, null)
    }
    o.defaultProps = {
        style: void 0
    }, t.a = o
}, function (e, t, n) {
    "use strict";
    var r = n(2),
        a = n.n(r),
        o = n(0),
        i = n.n(o);
    t.a = function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e,
            n = i.a.useState(e),
            r = a()(n, 2),
            o = r[0],
            l = r[1];
        i.a.useEffect((function () {
            l(e)
        }), [e]);
        var u = i.a.useCallback((function () {
            var e = o + t;
            return l(e), e
        }), [o, t]);
        return [o, u]
    }
}, function (e, t, n) {
    "use strict";
    var r = n(1),
        a = n.n(r),
        o = n(0),
        i = n.n(o),
        l = n(7);
    t.a = function (e) {
        var t = e.style,
            n = e.className,
            r = e.settings,
            o = e.onClick;
        return i.a.createElement(i.a.Fragment, null, i.a.createElement("button", {
            type: "button",
            className: Object(l.a)("rssapp-load-more-btn", a()({}, "rssapp-load-more-btn_modern", "modern" === r.variant), n),
            onClick: o,
            style: t
        }, r.paginationLabel ? r.paginationLabel : "Load more", i.a.createElement("svg", {
            width: "16",
            height: "17",
            viewBox: "0 0 16 17",
            fill: "none",
            style: {
                marginLeft: 8
            }
        }, i.a.createElement("path", {
            d: "M12.1969 5.5L8 9.26606L3.80314 5.5L2 7.11773L8 12.5L14 7.11773L12.1969 5.5Z",
            fill: r.color
        }))), i.a.createElement("style", {
            jsx: !0
        }, "\n        .rssapp-load-more-btn {\n          height: fit-content;\n          display: flex;\n          align-items: center;\n\n          background: none;\n          border: none;\n          outline: none;\n          font-size: 14px;\n          font-weight: 600;\n          line-height: 19px;\n          color: ".concat(r.color, ";\n          font-family: ").concat(r.fontFamily, ";\n          cursor: pointer;\n          letter-spacing: 0.0015em;\n        }\n        .rssapp-load-more-btn:focus {\n          outline: none;\n        }\n        .rssapp-load-more-btn.rssapp-load-more-btn_modern {\n          padding: 13.5px 40px;\n          background: ").concat(r.backgroundColor, ";\n          border-radius: 4px;\n        }\n        .rssapp-load-more-btn.rssapp-load-more-btn_modern:hover {\n          filter: brightness(0.85);\n        }\n        .rssapp-load-more-btn.rssapp-load-more-btn_modern > svg {\n          display: none;\n        }\n      ")))
    }
}, , function (e, t) {
    e.exports = function (e) {
        var t = "undefined" != typeof window && window.location;
        if (!t) throw new Error("fixUrls requires window.location");
        if (!e || "string" != typeof e) return e;
        var n = t.protocol + "//" + t.host,
            r = n + t.pathname.replace(/\/[^\/]*$/, "/");
        return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, (function (e, t) {
            var a, o = t.trim().replace(/^"(.*)"$/, (function (e, t) {
                return t
            })).replace(/^'(.*)'$/, (function (e, t) {
                return t
            }));
            return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(o) ? e : (a = 0 === o.indexOf("//") ? o : 0 === o.indexOf("/") ? n + o : r + o.replace(/^\.\//, ""), "url(" + JSON.stringify(a) + ")")
        }))
    }
}, function (e, t, n) {
    var r = n(67);
    "string" == typeof r && (r = [
        [e.i, r, ""]
    ]);
    var a = {
        transform: void 0
    };
    n(22)(r, a);
    r.locals && (e.exports = r.locals)
}, function (e, t, n) {
    (e.exports = n(21)(!1)).push([e.i, ".rss-widget-video-button{display:block;position:relative;width:100%;height:100%;aspect-ratio:16/9;border:unset;background:unset;padding:unset;cursor:pointer}.rss-widget-video-image{display:block;width:100%;height:100%;object-fit:cover}.rss-widget-play-arrow-box{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);z-index:2;width:60px;height:60px;display:flex;align-items:center;justify-content:center;background:rgba(66,66,66,.8);border-radius:50%}.rss-widget-play-arrow{margin-left:8px}.rss-widget-video-button:hover>.rss-widget-play-arrow-box{background:#424242}", ""])
}, function (e, t, n) {
    var r = n(69);
    "string" == typeof r && (r = [
        [e.i, r, ""]
    ]);
    var a = {
        transform: void 0
    };
    n(22)(r, a);
    r.locals && (e.exports = r.locals)
}, function (e, t, n) {
    (e.exports = n(21)(!1)).push([e.i, ".rssapp-header-wrapper{margin:0 auto}.rssapp-header-container{display:flex;align-items:flex-start}.rssapp-title-header{display:flex;align-items:center;justify-content:center}.rssapp-header-icon-box{display:flex;align-self:flex-start;justify-content:center}.rssapp-header-icon{display:block;width:50px;height:50px}.rssapp-header-no-icon{display:flex;align-items:center;justify-content:center;width:50px;height:50px;background-color:#ff7c33;color:#fff;font-size:24px;font-weight:600;line-height:24px}.rssapp-header-description{letter-spacing:.1px}", ""])
}, , function (e, t, n) {
    "use strict";
    n.d(t, "a", (function () {
        return d
    }));
    var r = n(1),
        a = n.n(r),
        o = n(2),
        i = n.n(o),
        l = n(0),
        u = n.n(l),
        c = n(3);
    n(75);

    function s(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function f(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? s(Object(n), !0).forEach((function (t) {
                a()(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach((function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }

    function d(e) {
        var t = e.dom,
            n = e.width,
            r = e.height,
            a = e.padding,
            o = e.cardStyle,
            s = e.responsive,
            d = e.formattedDescription || "",
            p = Object(l.useState)(!1),
            m = i()(p, 2),
            h = m[0],
            g = m[1],
            v = Object(l.useRef)(),
            y = d.includes("<img");
        return d && y && (d = (d = (d = Object(c.j)(d)).replace("<img", "<img ".concat(c.e))).replace("<img", '<img referrerpolicy="no-referrer"')), Object(l.useEffect)((function () {
            var e = null;
            if (d) {
                var n = /<script.*?src="(.*?)"/gi.exec(d);
                if (n && n[0] && n[1]) {
                    var r = document.createElement("script"),
                        a = i()(n, 2);
                    r.src = a[1], e = r.src.replace(/[^\w\s]/gi, ""), r.id = e, r.async = !0, r.onload = function () {
                        setTimeout((function () {
                            return g(!0)
                        }), 100)
                    }, t.appendChild(r)
                }
            }
        }), []), u.a.createElement("div", {
            className: "twitter-card-container",
            style: {
                margin: s ? "auto" : void 0
            }
        }, u.a.createElement("div", {
            className: "ra-twitter-wrapper",
            style: {
                paddingLeft: a,
                paddingRight: a,
                boxSizing: "border-box"
            }
        }, u.a.createElement("div", {
            style: f({
                minWidth: "300px",
                maxWidth: "100%",
                width: n,
                height: r,
                backgroundColor: h ? "transparent" : "#fff"
            }, o)
        }, u.a.createElement("div", {
            ref: v,
            className: "body-card",
            dangerouslySetInnerHTML: {
                __html: d
            }
        }))))
    }
}, , , , function (e, t, n) {
    var r = n(76);
    "string" == typeof r && (r = [
        [e.i, r, ""]
    ]);
    var a = {
        transform: void 0
    };
    n(22)(r, a);
    r.locals && (e.exports = r.locals)
}, function (e, t, n) {
    (e.exports = n(21)(!1)).push([e.i, "twitter-widget{margin:0 !important}.twitter-card-container{font-size:13px;max-width:600px;width:100%;border-radius:5px}.twitter-card-container a{color:#2b7bb9}.twitter-card-container .ra-twitter-wrapper{min-width:300px !important;border-radius:5px}", ""])
}, , , function (e, t, n) {
    "use strict";
    var r = n(1),
        a = n.n(r),
        o = n(2),
        i = n.n(o),
        l = n(0),
        u = n.n(l),
        c = n(3),
        s = n(19),
        f = n(18),
        d = n(25),
        p = (n(102), n(5)),
        m = n(16),
        h = n(17),
        g = n(4),
        v = n(24);

    function y(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function b(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? y(Object(n), !0).forEach((function (t) {
                a()(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : y(Object(n)).forEach((function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }
    var w = function (e) {
        var t = e.title,
            n = e.url,
            r = e.date,
            a = e.dom,
            o = e.siteUrl,
            y = e.enclosure,
            w = e.embed,
            x = e.isFree,
            k = e.formattedDescription,
            E = void 0 === k ? "" : k,
            C = e.showVideoImage,
            T = E || "",
            S = Object(d.a)(E).onVideoClick,
            O = Object(l.useRef)(),
            P = Object(l.useRef)(),
            _ = Object(l.useRef)(),
            j = T.includes("<iframe") && T.includes("</iframe>") || T.includes("<blockquote") && T.includes("</blockquote>"),
            M = Object(c.h)(T),
            N = Object(c.i)(T),
            D = y && y.url,
            z = T.includes("<img");
        M && (T = T.replace('data-width="550"', "")), T && z && (T = (T = (T = Object(c.j)(T)).replace("<img", "<img ".concat(c.e))).replace("<img", '<img referrerpolicy="no-referrer"'));
        var R = Object(c.b)(T),
            L = i()(R, 2),
            F = L[0],
            I = L[1];
        T = F;
        var U = Object(c.c)(T),
            A = i()(U, 2),
            B = A[0],
            H = A[1];
        T = B, M || (T = Object(c.a)(T)), Object(l.useEffect)((function () {
            var e = null;
            if (T) {
                var t = /<script.*?src="(.*?)"/gi.exec(T);
                if (t && t[0] && t[1]) {
                    var n = document.createElement("script"),
                        r = i()(t, 2);
                    n.src = r[1], e = n.src.replace(/[^\w\s]/gi, ""), n.id = e, n.async = !0, a.appendChild(n)
                }
            }
            return function () {
                if (a) {
                    var t = a.querySelector("#".concat(e));
                    t && a.removeChild(t)
                }
            }
        }), []);
        var W = M ? "rssapp-card-container-twitter" : "";
        return u.a.createElement("div", {
            className: "rssapp-card-container rssapp-card-container_classic ".concat(W)
        }, u.a.createElement("div", {
            className: "rssapp-card",
            ref: P,
            style: b({
                backgroundColor: w.cardBackground,
                boxSizing: "border-box",
                borderRadius: w.cardBorderRadius,
                border: w.cardShowBorder ? "solid 1px ".concat(w.cardBorderColor) : void 0,
                height: w.autoHeight ? "auto" : "".concat(w.height, "px")
            }, Object(g.a)(w.cardCustomCss))
        }, u.a.createElement("div", {
            className: "rssapp-card-body"
        }, w.cardShowTitle ? u.a.createElement(m.a, {
            url: n,
            customStyles: w.titleCustomCss,
            settings: {
                color: w.cardTitleColor,
                fontSize: w.cardTitleFontSize,
                fontHeight: w.cardTitleFontHeight,
                linkTarget: w.linkTarget,
                customTarget: w.customTarget,
                textAlign: w.cardTitleAlign,
                clipLines: w.cardTitleLines,
                fontBold: w.cardTitleBold,
                fontItalic: w.cardTitleItalic
            }
        }, t) : null, D && !j && w.cardShowImage ? u.a.createElement("div", {
            className: "rssapp-image-container"
        }, w.cardImageLink ? u.a.createElement(p.b, {
            href: n,
            target: w.linkTarget,
            customTarget: w.customTarget,
            rel: "noopener noreferrer"
        }, u.a.createElement(s.a, {
            src: D,
            referrerPolicy: "no-referrer",
            style: b({
                width: "100%",
                borderRadius: w.cardImageRadius
            }, Object(g.a)(w.imageCustomCss)),
            isLazy: w.cardImageLazy
        })) : u.a.createElement(s.a, {
            src: D,
            referrerPolicy: "no-referrer",
            style: b({
                width: "100%",
                borderRadius: w.cardImageRadius
            }, Object(g.a)(w.imageCustomCss)),
            isLazy: w.cardImageLazy
        })) : null, w.cardShowDescription && (I || H) && u.a.createElement(u.a.Fragment, null, N && C ? u.a.createElement(v.a, {
            imageRef: _,
            imageUrl: D,
            imageClick: S,
            lazy: w.lazy,
            radius: w.cardImageRadius
        }) : u.a.createElement("div", {
            dangerouslySetInnerHTML: {
                __html: I || H
            },
            style: b({}, Object(g.a)(w.descriptionCustomCss))
        })), T && w.cardShowDescription ? u.a.createElement("div", {
            style: b({
                paddingTop: I ? "8px" : void 0,
                fontSize: "".concat(w.cardDescriptionFontSize, "px"),
                lineHeight: "".concat(w.cardDescriptionFontHeight, "px"),
                color: w.cardDescriptionColor,
                WebkitLineClamp: M ? void 0 : w.cardDescriptionLines,
                textAlign: w.cardDescriptionAlign || "left"
            }, Object(g.a)(w.descriptionCustomCss)),
            ref: O,
            className: "rssapp-card-description",
            dangerouslySetInnerHTML: {
                __html: T
            }
        }) : null, !w.cardShowFooter && u.a.createElement("div", {
            style: {
                paddingTop: 8
            }
        }), w.cardSocialSharing && u.a.createElement(f.a, {
            style: {
                marginTop: 16
            },
            size: "small",
            url: n,
            title: t,
            enclosureImage: D,
            settings: {
                rounded: w.cardSocialSharingRounded,
                map: w.cardSocialSharingMap
            }
        }), w.cardShowFooter && u.a.createElement(h.a, {
            style: {
                marginTop: 16,
                marginBottom: 4
            },
            siteUrl: o,
            isFree: x,
            date: r,
            settings: {
                cardFooterColor: w.cardFooterColor,
                dateFormat: w.dateFormat
            }
        }))))
    },
        x = n(71),
        k = n(20),
        E = n(61);
    n(104);

    function C(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function T(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? C(Object(n), !0).forEach((function (t) {
                a()(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : C(Object(n)).forEach((function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }
    var S = function (e) {
        var t = Object(l.useRef)(),
            n = Object(l.useRef)(),
            r = e.title,
            a = e.url,
            o = e.date,
            h = e.siteUrl,
            y = e.enclosure,
            b = e.responsive,
            w = e.width,
            C = e.height,
            S = e.embed,
            O = e.isFree,
            P = e.formattedDescription,
            _ = void 0 === P ? "" : P,
            j = e.showVideoImage,
            M = _ || "",
            N = Object(d.a)(_).onVideoClick,
            D = M.includes("<iframe") && M.includes("</iframe>"),
            z = Object(c.h)(M),
            R = Object(c.i)(M);
        if (z) return u.a.createElement(x.a, e);
        var L = y && y.url,
            F = M.includes("<img");
        M && F && (M = (M = (M = Object(c.j)(M)).replace("<img", "<img ".concat(c.e))).replace("<img", '<img referrerpolicy="no-referrer"'));
        var I = Object(c.b)(M),
            U = i()(I, 2),
            A = U[0],
            B = U[1];
        M = A;
        var H = Object(c.c)(M),
            W = i()(H, 2),
            V = W[0],
            Q = W[1];
        return M = V, M = Object(c.a)(M), u.a.createElement("div", {
            className: "rssapp-card-container rssapp-card-container_modern",
            ref: t,
            style: T({
                width: w,
                height: C,
                boxSizing: b ? "border-box" : "content-box",
                minWidth: b ? 220 : 0
            }, Object(g.a)(S.cardCustomCss))
        }, u.a.createElement("div", {
            className: "rssapp-card",
            style: T({
                borderRadius: S.cardBorderRadius,
                border: S.cardShowBorder ? "solid 1px ".concat(S.cardBorderColor) : void 0,
                backgroundColor: S.cardBackground,
                position: "relative",
                height: S.autoHeight ? "auto" : "".concat(S.height, "px")
            }, Object(g.a)(S.cardCustomCss))
        }, u.a.createElement("div", {
            className: "rssapp-card-body"
        }, L && !z && !D && S.cardShowImage ? u.a.createElement("div", {
            className: "rssapp-card-image-container"
        }, S.cardImageLink ? u.a.createElement(p.b, {
            href: a,
            target: S.linkTarget,
            customTarget: S.customTarget,
            rel: "noopener noreferrer"
        }, u.a.createElement(s.a, {
            isLazy: S.cardImageLazy,
            src: L,
            referrerPolicy: "no-referrer",
            height: S.cardImageHeight,
            style: T({
                width: "100%"
            }, Object(g.a)(S.imageCustomCss))
        })) : u.a.createElement(s.a, {
            isLazy: S.cardImageLazy,
            src: L,
            referrerPolicy: "no-referrer",
            height: S.cardImageHeight,
            style: T({
                width: "100%"
            }, Object(g.a)(S.imageCustomCss))
        })) : null, S.cardShowDescription && (B || Q) && u.a.createElement(u.a.Fragment, null, R && j ? u.a.createElement("div", {
            style: {
                position: "relative"
            }
        }, u.a.createElement(v.a, {
            imageRef: n,
            imageUrl: L,
            imageClick: N,
            lazy: S.lazy,
            radius: S.cardImageRadius
        })) : u.a.createElement("div", {
            dangerouslySetInnerHTML: {
                __html: B || Q
            },
            style: T({}, Object(g.a)(S.descriptionCustomCss))
        })), u.a.createElement("div", {
            className: "rssapp-card-summary-container",
            style: {
                padding: "0 16px"
            }
        }, S.cardShowTitle ? u.a.createElement(m.a, {
            url: a,
            customStyles: S.titleCustomCss,
            settings: {
                color: S.cardTitleColor,
                fontSize: S.cardTitleFontSize,
                fontHeight: S.cardTitleFontHeight,
                linkTarget: S.linkTarget,
                customTarget: S.customTarget,
                textAlign: S.cardTitleAlign,
                clipLines: S.cardTitleLines,
                fontBold: S.cardTitleBold,
                fontItalic: S.cardTitleItalic
            }
        }, r) : null, M && S.cardShowDescription ? u.a.createElement("div", {
            style: T({
                fontSize: "".concat(S.cardDescriptionFontSize, "px"),
                lineHeight: "".concat(S.cardDescriptionFontHeight, "px"),
                WebkitLineClamp: S.cardDescriptionLines,
                color: S.cardDescriptionColor,
                textAlign: S.cardDescriptionAlign || "left"
            }, Object(g.a)(S.descriptionCustomCss)),
            className: "rssapp-card-description",
            dangerouslySetInnerHTML: {
                __html: M
            }
        }) : null, S.cardSocialSharing && u.a.createElement(f.a, {
            size: "small",
            style: {
                marginTop: 16
            },
            url: a,
            title: r,
            enclosureImage: L,
            settings: {
                rounded: S.cardSocialSharingRounded,
                map: S.cardSocialSharingMap
            }
        }), u.a.createElement("div", {
            style: {
                paddingTop: 10
            }
        }), S.cardShowFooter ? u.a.createElement("div", {
            className: "rssapp-card-footer",
            style: {
                display: "flex",
                alignItems: "center",
                fontSize: "12px",
                color: S.cardFooterColor
            }
        }, u.a.createElement(E.a, {
            siteUrl: h,
            isFree: O,
            style: {
                lineHeight: "normal",
                display: "block !important",
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis"
            }
        }), o && Object(k.b)(o) ? u.a.createElement(u.a.Fragment, null, u.a.createElement("span", {
            style: {
                margin: "5px",
                width: 2,
                height: 2,
                borderRadius: "50%",
                background: S.cardFooterColor
            }
        }), u.a.createElement(k.a, {
            createdAt: o,
            dateFormat: S.dateFormat
        })) : null) : null))))
    };
    n(106), n(108);
    var O = function (e, t) {
        u.a.useEffect((function () {
            var n = t || window;
            return n.addEventListener("resize", e),
                function () {
                    n.removeEventListener("resize", e)
                }
        }), [e])
    };

    function P(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function _(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? P(Object(n), !0).forEach((function (t) {
                a()(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : P(Object(n)).forEach((function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }
    var j = function (e) {
        var t = e.forceColumns,
            n = e.children,
            r = e.colWidth,
            a = e.minWidth,
            o = e.maxColumns,
            l = e.loading,
            s = e.style,
            f = e.parent,
            d = e.padding,
            p = e.innerRef,
            m = u.a.useRef(null),
            h = u.a.useState(void 0),
            g = i()(h, 2),
            v = g[0],
            y = g[1],
            b = u.a.useState(1),
            w = i()(b, 2),
            x = w[0],
            k = w[1],
            E = u.a.useCallback((function () {
                var e = t ? t > x ? x : t : x || 1,
                    n = "100%";
                if (m.current) {
                    var i = m.current.clientWidth;
                    if (r) {
                        var l = Math.floor(i / r);
                        o && l > o && (l = o), k(l), y(r || void 0), n = "".concat(Math.max(r * e - (d || 0), a), "px")
                    } else {
                        var u = Math.floor(i / a);
                        o && u > o && (u = o);
                        var c = Math.floor(i / u);
                        y(c || void 0), k(u), n = "".concat(Math.max(c * e, a), "px")
                    }
                }
                return n
            }), [r, a]),
            C = u.a.useCallback((function () {
                E()
            }), [E]);
        O(C, f), u.a.useEffect((function () {
            p && p(E)
        }), [p, E]), u.a.useEffect((function () {
            l || E()
        }), [l, E]);
        var T = u.a.Children.toArray(n),
            S = t ? t > x ? x : t : x || 1,
            P = Object(c.k)(T, S);
        return u.a.createElement("div", {
            ref: m,
            className: "RssGrid",
            style: _({
                opacity: l || !v ? 0 : void 0,
                width: "100%"
            }, s || {})
        }, P.map((function (e, t) {
            return u.a.createElement("div", {
                className: "RssGrid-col",
                key: "grid-col-".concat(t),
                style: {
                    width: v
                }
            }, e.map((function (e, t) {
                return u.a.createElement("div", {
                    className: "RssGrid-item",
                    key: "wall-grid-item-".concat(t)
                }, e)
            })))
        })))
    },
        M = n(27),
        N = n(15);

    function D(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function z(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? D(Object(n), !0).forEach((function (t) {
                a()(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : D(Object(n)).forEach((function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }
    var R = function (e) {
        var t = e.title,
            n = e.url,
            r = e.date,
            a = e.siteUrl,
            o = e.enclosure,
            l = e.embed,
            c = e.description,
            s = e.isFree,
            d = u.a.useState(!1),
            v = i()(d, 2),
            y = v[0],
            b = v[1],
            w = o && o.url,
            x = l.cardSocialSharing,
            k = l.cardShowFooter,
            E = !y && l.cardShowImage && w;
        return u.a.createElement(u.a.Fragment, null, u.a.createElement("div", {
            className: "rssapp-gallery-card",
            style: z({
                borderRadius: l.cardBorderRadius,
                border: l.cardShowBorder ? "solid 1px ".concat(l.cardBorderColor) : void 0
            }, Object(g.a)(l.cardCustomCss))
        }, u.a.createElement("div", {
            className: "rssapp-gallery-card-content"
        }, u.a.createElement("div", {
            style: {
                height: "100%",
                position: "relative"
            }
        }, u.a.createElement("div", {
            className: "rssapp-gallery-card-collapse"
        }, l.cardShowTitle ? u.a.createElement(m.a, {
            url: n,
            customStyles: l.titleCustomCss,
            settings: {
                color: l.cardTitleColor,
                fontSize: l.cardTitleFontSize,
                fontHeight: l.cardTitleFontHeight,
                linkTarget: l.linkTarget,
                customTarget: l.customTarget,
                textAlign: l.cardTitleAlign,
                clipLines: l.cardTitleLines,
                fontBold: l.cardTitleBold,
                fontItalic: l.cardTitleItalic
            }
        }, t) : null, l.cardShowDescription && u.a.createElement(N.a, {
            className: "rssapp-gallery-card-description",
            customStyles: l.descriptionCustomCss,
            settings: {
                clipLines: l.cardDescriptionLines,
                color: l.cardDescriptionColor,
                fontSize: l.cardDescriptionFontSize,
                fontHeight: l.cardDescriptionFontHeight,
                textAlign: l.cardDescriptionAlign
            }
        }, c))), x && u.a.createElement(f.a, {
            style: {
                marginTop: 16
            },
            url: n,
            title: t,
            enclosureImage: w,
            settings: {
                rounded: l.cardSocialSharingRounded,
                map: l.cardSocialSharingMap
            }
        }), k && u.a.createElement(h.a, {
            style: {
                marginTop: 16
            },
            siteUrl: a,
            date: r,
            isFree: s,
            settings: {
                cardFooterColor: l.cardFooterColor,
                dateFormat: l.dateFormat
            }
        })), E && u.a.createElement("img", {
            loading: l.cardImageLazy ? "lazy" : void 0,
            src: w,
            alt: "",
            referrerPolicy: "no-referrer",
            className: "rssapp-gallery-card-image",
            onError: function () {
                return b(!0)
            },
            style: z({}, Object(g.a)(l.imageCustomCss))
        }), l.cardImageGradient && u.a.createElement("div", {
            className: "rssapp-gallery-card-gradient"
        }), l.cardImageLink && u.a.createElement(p.b, {
            className: "rssapp-gallery-overlay-link",
            href: n,
            target: l.linkTarget,
            customTarget: l.customTarget
        })), u.a.createElement("style", {
            jsx: !0
        }, "\n        .rssapp-gallery-card {\n          display: block;\n          width: ".concat(l.responsive ? "100%" : "".concat(l.width, "px"), ";\n          padding: 14px;\n\n          padding-top: ").concat(l.height - 56, "px;\n          position: relative;\n          overflow: hidden;\n          box-sizing: border-box;\n          min-width: ").concat(l.responsive ? 220 : 0, ";\n          text-decoration: none;\n        }\n        .rssapp-gallery-card:hover .rssapp-gallery-card-description {\n          margin-top: 8px;\n          max-height: 500px;\n          height: auto;\n          visibility: visible;\n          opacity: 1;\n          transition: opacity 0.3s, max-height 1s, margin 0.3s;\n        }\n        .rssapp-gallery-card-collapse {\n          position: absolute;\n          bottom: 14px;\n          left: 0;\n          right: 0;\n        }\n        .rssapp-gallery-card-content {\n          z-index: 3;\n          position: relative;\n        }\n        .rssapp-gallery-card-description {\n          display: block;\n          margin-top: 0px;\n          height: auto;\n          max-height: 0px;\n          visibility: hidden;\n          overflow: hidden;\n          opacity: 0;\n          transition: opacity 0.3s, max-height 0.2s, margin 0.2s;\n          cursor: pointer;\n        }\n        .rssapp-gallery-card-image {\n          z-index: 1;\n          position: absolute;\n          top: 0;\n          bottom: 0;\n          left: 0;\n          right: 0;\n\n          width: -webkit-fill-available;\n          height: 100%;\n          object-fit: cover;\n          user-select: none;\n        }\n        .rssapp-gallery-card-gradient {\n          z-index: 2;\n          position: absolute;\n          top: 0;\n          bottom: 0;\n          left: 0;\n          right: 0;\n\n          background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, ").concat(l.cardImageGradientColor || "#000000", " 57.81%, ").concat(l.cardImageGradientColor || "#000000", " 100%);\n          opacity: 0.6;\n          user-select: none;\n        }\n        .rssapp-gallery-overlay-link {\n          z-index: 2;\n          position: absolute;\n          top: 0;\n          bottom: 0;\n          left: 0;\n          right: 0;\n        }\n\n        @media (hover: none) {\n          .rssapp-gallery-card-description {\n            margin-top: 8px;\n            max-height: 500px;\n            height: auto;\n            visibility: visible;\n            opacity: 1;\n          }\n        }\n      ")))
    },
        L = n(62),
        F = n(63),
        I = n(28),
        U = n(7);

    function A(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function B(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? A(Object(n), !0).forEach((function (t) {
                a()(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : A(Object(n)).forEach((function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }
    var H = function (e) {
        var t = e.title,
            n = e.url,
            r = e.date,
            a = e.siteUrl,
            o = e.enclosure,
            l = e.embed,
            c = e.description,
            s = e.index,
            d = e.isFree,
            v = u.a.useState(!1),
            y = i()(v, 2),
            b = y[0],
            w = y[1],
            x = o && o.url,
            k = l.cardShowImage && x && !b,
            E = l.cardShowTitle,
            C = l.cardShowDescription,
            T = l.cardSocialSharing,
            S = l.cardShowFooter,
            O = function (e) {
                return [0, 2, 9, 11, 16, 18, 25, 27, 32, 34, 41, 43, 48, 50, 57, 59, 64, 66, 73, 75, 80, 82, 89, 91, 96, 98].includes(e)
            }(s);
        return u.a.createElement(u.a.Fragment, null, u.a.createElement("div", {
            className: Object(U.a)("rssapp-pinterest-card", {
                large: O
            }),
            style: B({
                height: l.autoHeight ? "auto" : "".concat(l.height, "px")
            }, Object(g.a)(l.cardCustomCss))
        }, k && u.a.createElement("div", {
            className: "rssapp-pinterest-card-imgBox"
        }, l.cardImageLink && n ? u.a.createElement(p.b, {
            href: n,
            target: l.linkTarget,
            customTarget: l.customTarget,
            rel: "noopener noreferrer"
        }, u.a.createElement(u.a.Fragment, null, u.a.createElement("img", {
            loading: l.cardImageLazy ? "lazy" : void 0,
            style: B({
                borderRadius: l.cardImageRadius
            }, Object(g.a)(l.imageCustomCss)),
            src: x,
            alt: t,
            referrerPolicy: "no-referrer",
            className: "rssapp-pinterest-card-image",
            onError: function () {
                w(!0)
            }
        }), u.a.createElement("div", {
            className: "rssapp-pinterest-card-bg"
        }))) : u.a.createElement(u.a.Fragment, null, u.a.createElement("img", {
            loading: l.cardImageLazy ? "lazy" : void 0,
            style: B({
                borderRadius: l.cardImageRadius
            }, Object(g.a)(l.imageCustomCss)),
            src: x,
            alt: t,
            referrerPolicy: "no-referrer",
            className: "rssapp-pinterest-card-image",
            onError: function () {
                w(!0)
            }
        }), u.a.createElement("div", {
            className: "rssapp-pinterest-card-bg"
        })), T && u.a.createElement(f.a, {
            className: "rssapp-pinterest-card-social",
            url: n,
            title: t,
            enclosureImage: x,
            settings: {
                rounded: l.cardSocialSharingRounded,
                map: l.cardSocialSharingMap
            }
        })), E ? u.a.createElement(m.a, {
            style: {
                marginTop: k ? 10 : 0
            },
            customStyles: l.titleCustomCss,
            url: n,
            settings: {
                color: l.cardTitleColor,
                fontSize: l.cardTitleFontSize,
                fontHeight: l.cardTitleFontHeight,
                linkTarget: l.linkTarget,
                customTarget: l.customTarget,
                textAlign: l.cardTitleAlign,
                clipLines: l.cardTitleLines,
                fontBold: l.cardTitleBold,
                fontItalic: l.cardTitleItalic
            }
        }, t) : null, C && u.a.createElement(N.a, {
            style: {
                marginTop: 6
            },
            customStyles: l.descriptionCustomCss,
            settings: {
                clipLines: l.cardDescriptionLines,
                color: l.cardDescriptionColor,
                fontSize: l.cardDescriptionFontSize,
                fontHeight: l.cardDescriptionFontHeight,
                textAlign: l.cardDescriptionAlign
            }
        }, c), !k && T && u.a.createElement(f.a, {
            style: {
                marginTop: 6
            },
            url: n,
            title: t,
            enclosureImage: x,
            settings: {
                rounded: l.cardSocialSharingRounded,
                map: l.cardSocialSharingMap
            }
        }), S && u.a.createElement(h.a, {
            style: {
                marginTop: 6
            },
            siteUrl: a,
            isFree: d,
            date: r,
            settings: {
                cardFooterColor: l.cardFooterColor,
                dateFormat: l.dateFormat
            }
        })), u.a.createElement("style", {
            jsx: !0
        }, "\n        .rssapp-pinterest-card {\n          display: block;\n          width: ".concat(l.responsive ? "100%" : "".concat(l.width, "px"), ";\n\n          border-radius: 4px;\n          position: relative;\n          overflow: hidden;\n          box-sizing: border-box;\n          min-width: ").concat(l.responsive ? 220 : 0, "px;\n          text-decoration: none;\n        }\n        .rssapp-pinterest-card:hover .rssapp-pinterest-card-social {\n         opacity: 1;\n         visibility: initial;\n        }\n        .rssapp-pinterest-card.large {}\n        .rssapp-pinterest-card-imgBox {\n         position: relative;\n           height: 200px;\n        }\n        .rssapp-pinterest-card-social {\n         visibility: hidden;\n         z-index: 3;\n         opacity: 0;\n         transition: opacity 0.3s, visibility 0.3s;\n         position: absolute;\n         bottom: 16px;\n         left: 10px;\n         right: 10px;\n        }\n        .rssapp-pinterest-card-image {\n          width: 100%;\n          height: 200px;\n          border-radius: ").concat(l.cardBorderRadius, "px;\n          object-fit: cover;\n        }\n        .rssapp-pinterest-card-bg {\n          top: 0;\n          left: 0;\n          right: 0;\n          bottom: 0;\n          height: 200px;\n          position: absolute;\n          border-radius: ").concat(l.cardBorderRadius, "px;\n          z-index: 2;\n          user-select: none;\n        }\n        \n         .rssapp-pinterest-card.large .rssapp-pinterest-card-imgBox {\n          height: 375px;\n        }\n        .rssapp-pinterest-card.large .rssapp-pinterest-card-image {\n          height: 375px;\n        }\n        .rssapp-pinterest-card.large .rssapp-pinterest-card-bg {\n          height: 375px;\n        }\n      ")))
    },
        W = n(41),
        V = n(10),
        Q = n(32);
    t.a = function (e) {
        var t, n, r = e.parent,
            o = e.data,
            l = e.iframe,
            s = e.id,
            f = e.reload,
            d = e.preview,
            m = e.overview,
            h = e.nofollow,
            g = u.a.useRef(null),
            v = u.a.useState(Object(W.a)()),
            y = i()(v, 1)[0],
            b = Object(I.a)(o, {
                id: s,
                reload: f,
                preview: d,
                type: m ? "wall-overview" : "wall",
                resizeRef: g
            }),
            x = "free" === (null == b ? void 0 : b.status),
            k = b,
            E = r.current,
            C = E && (E.getRootNode().host || E.parentNode),
            T = k && k.feed || {},
            O = T.items,
            P = void 0 === O ? [] : O,
            _ = T.title,
            N = T.description,
            D = T.imageUrl,
            z = T.siteUrl,
            U = (k || {}).settings,
            A = void 0 === U ? {} : U,
            B = "social" === A.cardStyle,
            q = u.a.useRef(A.columnsCount).current,
            $ = {
                default: 4,
                1100: 3,
                700: 2,
                500: 1
            },
            Y = "",
            K = P.every((function (e) {
                return Object(c.h)(e.formattedDescription)
            }));
        if (K && (n = {
            default: 4
        }, a()(n, 2 * (300 + A.padding) + 2 * A.padding, 1), a()(n, 3 * (300 + A.padding) + 2 * A.padding, 2), a()(n, 4 * (300 + A.padding) + 2 * A.padding, 3), a()(n, 5 * (300 + A.padding) + 2 * A.padding, 4), a()(n, 6 * (300 + A.padding) + 2 * A.padding, 5), a()(n, 7 * (300 + A.padding) + 2 * A.padding, 6), a()(n, 8 * (300 + A.padding) + 2 * A.padding, 7), $ = n), !A.responsive) {
            Y = (A.width + A.padding) * q + A.padding + 2 || "", $ = {
                default: A.columnsCount
            };
            for (var G = A.columnsCount; G > 1; G -= 1) $[(A.width + A.padding) * G + 2 * A.padding] = G - 1
        }
        Object(M.a)(A.fontFamily, l);
        var X = {
            modern: S,
            classic: w,
            gallery: R,
            social: H
        }[A.cardStyle] || w,
            Z = Object(L.a)(A.paginationLimit),
            J = i()(Z, 2),
            ee = J[0],
            te = J[1],
            ne = P.slice(0, A.showPagination ? ee : A.postsCount).slice(0, A.postsCount),
            re = A.showPagination && ee < A.postsCount && ee < P.length,
            ae = encodeURIComponent(window.location !== (null === (t = window.parent) || void 0 === t ? void 0 : t.location) ? document.referrer : document.location.href);
        return u.a.createElement(p.a.Provider, {
            value: {
                nofollow: h
            }
        }, u.a.createElement("div", {
            className: "container-wall-feed ".concat(K ? "isTwitter" : ""),
            style: {
                background: A.background,
                padding: "".concat(A.padding / 2, "px"),
                paddingTop: B ? "".concat(A.paddingY / 2, "px") : void 0,
                paddingBottom: B ? "".concat(A.paddingY / 2, "px") : void 0,
                fontFamily: A.fontFamily,
                width: Y
            }
        }, (null == b ? void 0 : b.enabledNewHeader) ? u.a.createElement(Q.a, Object.assign({}, A, {
            title: _,
            description: N,
            icon: D,
            widthSize: A.responsive ? "100%" : (A.width + A.padding) * A.columnsCount
        })) : u.a.createElement(u.a.Fragment, null, A.showTitle ? u.a.createElement("div", {
            className: "rssapp-title-header",
            style: {
                paddingTop: B ? 0 : 3,
                fontSize: "".concat(A.titleFontSize, "px"),
                color: "".concat(A.titleColor),
                paddingBottom: A.titlePaddingBottom,
                lineHeight: "".concat(1.2 * A.titleFontSize, "px")
            }
        }, _) : null), u.a.createElement(j, {
            innerRef: function (e) {
                g.current = e
            },
            loading: !(k && k.feed),
            forceColumns: A.responsive ? void 0 : A.columnsCount,
            colWidth: A.responsive ? void 0 : A.width + A.padding,
            minWidth: K ? 345 : 260,
            maxColumns: A.responsive ? 4 : void 0,
            style: {
                paddingBottom: re ? 24 : void 0,
                position: "reletive"
            },
            padding: A.padding
        }, ne.map((function (e, t) {
            return u.a.createElement("div", {
                style: {
                    marginBottom: "".concat(B ? A.paddingY : A.padding, "px"),
                    paddingRight: "".concat(A.padding / 2, "px"),
                    paddingLeft: "".concat(A.padding / 2, "px"),
                    width: A.responsive ? "" : A.width
                },
                key: e.url
            }, u.a.createElement(X, Object.assign({
                dom: C,
                embed: A,
                isEmbed: !0,
                siteUrl: e.url || z,
                index: t,
                isFree: x && !d
            }, e, {
                url: A.addUtmTags ? Object(V.a)(e.url, A) : e.url,
                showVideoImage: null == b ? void 0 : b.enabledVideoPreload
            })))
        }))), re && u.a.createElement("div", {
            style: {
                display: "flex",
                justifyContent: "center",
                left: 0,
                right: 0,
                background: "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, ".concat(A.background, " 18.75%, ").concat(A.background, " 100%)")
            }
        }, u.a.createElement(F.a, {
            key: "pagination-".concat(ee),
            style: {
                marginBottom: 24
            },
            onClick: te,
            settings: {
                variant: A.paginationStyle,
                fontFamily: A.fontFamily,
                color: A.paginationColor,
                backgroundColor: A.paginationBackground,
                paginationLabel: A.paginationLabel
            }
        })), x && !d ? u.a.createElement("div", {
            style: {
                display: "flex",
                justifyContent: "center"
            }
        }, u.a.createElement("div", {
            className: "source",
            style: {
                width: g.current && g.current()
            }
        }, u.a.createElement("a", {
            href: "https://rss.app/rss-widgets/wall-widget?utm_source=".concat(ae, "&utm_medium=website&utm_campaign=news-wall-widget&utm_content=").concat(s),
            target: "_blank"
        }, y ? u.a.createElement("span", null, "Wall Widget - ") : u.a.createElement("span", null, "Embed Widget - "), u.a.createElement("span", {
            className: "app-name"
        }, "RSS.app")))) : null, u.a.createElement("style", {
            jsx: !0
        }, "\n          .rssapp-card-container_modern .rssapp-card-footer {\n            position: relative;\n          }\n        ")))
    }
}, , , , , , , , , , , , , , , , , , , , , , , function (e, t, n) {
    var r = n(103);
    "string" == typeof r && (r = [
        [e.i, r, ""]
    ]);
    var a = {
        transform: void 0
    };
    n(22)(r, a);
    r.locals && (e.exports = r.locals)
}, function (e, t, n) {
    (e.exports = n(21)(!1)).push([e.i, ".rssapp-card-container_classic{max-width:600px;width:100%}.rssapp-card-container_classic .rssapp-card{width:100%;position:relative;display:flex;flex-direction:column;min-width:0;word-wrap:break-word;background-clip:border-box}.rssapp-card-container_classic .rssapp-card-body{flex:1 1 auto;padding:15px 15px 0px}.rssapp-card-container_classic .rssapp-card-title{margin-top:0;margin-bottom:15px}.rssapp-card-container_classic .rssapp-card-title h2{font-size:20px;line-height:1.1}.rssapp-card-container_classic .rssapp-card-title a{font-size:20px;line-height:1.1;color:#333;text-decoration:none;background-color:transparent}.rssapp-card-container_classic .rssapp-card-title a:hover{color:#666 !important;text-decoration:unset}.rssapp-card-container_classic .rssapp-card-description{color:#333;font-size:15px;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:5;-webkit-box-orient:vertical}.rssapp-card-container_classic.rssapp-card-container-twitter{min-width:300px}.rssapp-card-container_classic.rssapp-card-container-twitter .rssapp-card-description{-webkit-line-clamp:unset;-webkit-box-orient:unset}.rssapp-card-container_classic .rssapp-image-container{margin-bottom:2px}.rssapp-card-container_classic blockquote{margin:0}", ""])
}, function (e, t, n) {
    var r = n(105);
    "string" == typeof r && (r = [
        [e.i, r, ""]
    ]);
    var a = {
        transform: void 0
    };
    n(22)(r, a);
    r.locals && (e.exports = r.locals)
}, function (e, t, n) {
    (e.exports = n(21)(!1)).push([e.i, ".rssapp-card-container_modern{width:100%;height:100%;position:relative}.rssapp-card-container_modern .rssapp-card{width:100%;height:100%;overflow:hidden;border-radius:5px;overflow:hidden}.rssapp-card-container_modern .rssapp-card-title{font-size:18px;padding:8px 0 0;margin-bottom:8px;color:#121314;font-weight:600;overflow:hidden}.rssapp-card-container_modern .rssapp-card-title a{text-decoration:none;color:#121314;font-size:18px}.rssapp-card-container_modern .rssapp-card-image-container img{width:100%;object-fit:cover}.rssapp-card-container_modern .rssapp-summary-container{height:100%;padding:0 16px;text-align:left}.rssapp-card-container_modern .rssapp-card-description{color:#6a6a75;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:5;-webkit-box-orient:vertical}.rssapp-card-container_modern .rssapp-card-footer{position:absolute;bottom:0px;height:25px;width:100%}.rssapp-card-container_modern .rssapp-card-title a:hover{color:#666;text-decoration:unset}", ""])
}, function (e, t, n) {
    var r = n(107);
    "string" == typeof r && (r = [
        [e.i, r, ""]
    ]);
    var a = {
        transform: void 0
    };
    n(22)(r, a);
    r.locals && (e.exports = r.locals)
}, function (e, t, n) {
    (e.exports = n(21)(!1)).push([e.i, ".container-wall-feed{position:relative;display:block;width:100%;box-sizing:border-box;margin:auto}.container-wall-feed .rssapp-title-header{font-size:24px;text-align:center}.container-wall-feed .rss-app-masonry-grid{display:inline-block;width:100%}.container-wall-feed .rss-app-masonry-grid_column{background-clip:padding-box}.container-wall-feed .rss-app-masonry-grid_column:last-of-type>div{padding-right:0 !important}.container-wall-feed .rss-app-masonry-grid-fixed_column{background-clip:padding-box}.container-wall-feed .rss-app-masonry-grid-fixed_column:last-of-type>div{padding-right:2px !important}.isTwitter .rss-app-masonry-grid_column{min-width:330px !important}.source{color:#747474;font-family:Arial;font-size:14px;line-height:16px;letter-spacing:0em;cursor:pointer;height:24px;width:calc(100% - 10px);border-radius:4px;align-items:center;display:flex;padding-top:0 !important;padding-bottom:0 !important}.source .app-name{color:#ff7c33}.source a{margin-left:8px;color:#747474;text-decoration:none !important}.source:hover{text-decoration:underline}", ""])
}, function (e, t, n) {
    var r = n(109);
    "string" == typeof r && (r = [
        [e.i, r, ""]
    ]);
    var a = {
        transform: void 0
    };
    n(22)(r, a);
    r.locals && (e.exports = r.locals)
}, function (e, t, n) {
    (e.exports = n(21)(!1)).push([e.i, ".RssGrid{width:100%;display:flex;justify-content:center;transition:opacity 100ms ease}.RssGrid-col{display:flex;flex-direction:column;align-items:center}.RssGrid-item{width:100%;max-width:100%}", ""])
}, , , , function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n(11),
        a = n.n(r),
        o = n(12),
        i = n.n(o),
        l = n(8),
        u = n.n(l),
        c = n(13),
        s = n.n(c),
        f = n(14),
        d = n.n(f),
        p = n(6),
        m = n.n(p),
        h = n(1),
        g = n.n(h),
        v = n(0),
        y = n.n(v),
        b = n(37),
        w = n(26),
        x = n(79);

    function k(e) {
        var t = function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () { }))), !0
            } catch (e) {
                return !1
            }
        }();
        return function () {
            var n, r = m()(e);
            if (t) {
                var a = m()(this).constructor;
                n = Reflect.construct(r, arguments, a)
            } else n = r.apply(this, arguments);
            return d()(this, n)
        }
    }
    var E = function (e) {
        s()(n, e);
        var t = k(n);

        function n(e) {
            var r;
            if (a()(this, n), r = t.call(this, e), g()(u()(r), "state", {
                data: null
            }), g()(u()(r), "parent", y.a.createRef()), g()(u()(r), "loadFeeds", (function () {
                var e = r.props,
                    t = e.url,
                    n = e.id;
                return Object(w.a)({
                    id: n,
                    type: "wall",
                    version: "widget-".concat("wall", "-1")
                }, t || "https://rss.app").then((function (e) {
                    r.setState({
                        data: e
                    })
                }))
            })), !e.id) throw new Error("".concat("rssapp-wall", ": 'id' is missing"));
            return r
        }
        return i()(n, [{
            key: "componentDidMount",
            value: function () {
                var e = this.props.data;
                this.setState({
                    data: e
                })
            }
        }, {
            key: "addObserver",
            value: function (e) {
                var t = this;
                this.props.preview && new MutationObserver((function (e) {
                    e.forEach((function (e) {
                        "attributes" === e.type && t.loadFeeds()
                    }))
                })).observe(e, {
                    attributes: !0
                })
            }
        }, {
            key: "render",
            value: function () {
                var e = this.state.data;
                return y.a.createElement("div", {
                    ref: this.parent
                }, y.a.createElement(x.a, {
                    parent: this.parent,
                    data: e,
                    iframe: this.props.iframe,
                    id: this.props.id || "wall",
                    reload: this.loadFeeds,
                    preview: this.props.preview,
                    overview: this.props.overview,
                    nofollow: this.props.nofollow && !this.props.url.includes("rss.app")
                }))
            }
        }]), n
    }(y.a.Component);
    b.a.create(y.a.createElement(E, null), "rssapp-wall")
}]).default;