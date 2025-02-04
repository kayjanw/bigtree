function _typeof(t) {
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }, _typeof(t)
}! function() {
    "use strict";

    function t() {
        t = function() {
            return n
        };
        var e, n = {},
            o = Object.prototype,
            r = o.hasOwnProperty,
            i = Object.defineProperty || function(t, e, n) {
                t[e] = n.value
            },
            a = "function" == typeof Symbol ? Symbol : {},
            s = a.iterator || "@@iterator",
            l = a.asyncIterator || "@@asyncIterator",
            c = a.toStringTag || "@@toStringTag";

        function u(t, e, n) {
            return Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }), t[e]
        }
        try {
            u({}, "")
        } catch (e) {
            u = function(t, e, n) {
                return t[e] = n
            }
        }

        function d(t, e, n, o) {
            var r = e && e.prototype instanceof y ? e : y,
                a = Object.create(r.prototype),
                s = new T(o || []);
            return i(a, "_invoke", {
                value: S(t, n, s)
            }), a
        }

        function p(t, e, n) {
            try {
                return {
                    type: "normal",
                    arg: t.call(e, n)
                }
            } catch (t) {
                return {
                    type: "throw",
                    arg: t
                }
            }
        }
        n.wrap = d;
        var f = "suspendedStart",
            m = "suspendedYield",
            _ = "executing",
            g = "completed",
            h = {};

        function y() {}

        function v() {}

        function w() {}
        var x = {};
        u(x, s, (function() {
            return this
        }));
        var b = Object.getPrototypeOf,
            E = b && b(b(P([])));
        E && E !== o && r.call(E, s) && (x = E);
        var k = w.prototype = y.prototype = Object.create(x);

        function L(t) {
            ["next", "throw", "return"].forEach((function(e) {
                u(t, e, (function(t) {
                    return this._invoke(e, t)
                }))
            }))
        }

        function A(t, e) {
            function n(o, i, a, s) {
                var l = p(t[o], t, i);
                if ("throw" !== l.type) {
                    var c = l.arg,
                        u = c.value;
                    return u && "object" == _typeof(u) && r.call(u, "__await") ? e.resolve(u.__await).then((function(t) {
                        n("next", t, a, s)
                    }), (function(t) {
                        n("throw", t, a, s)
                    })) : e.resolve(u).then((function(t) {
                        c.value = t, a(c)
                    }), (function(t) {
                        return n("throw", t, a, s)
                    }))
                }
                s(l.arg)
            }
            var o;
            i(this, "_invoke", {
                value: function(t, r) {
                    function i() {
                        return new e((function(e, o) {
                            n(t, r, e, o)
                        }))
                    }
                    return o = o ? o.then(i, i) : i()
                }
            })
        }

        function S(t, n, o) {
            var r = f;
            return function(i, a) {
                if (r === _) throw Error("Generator is already running");
                if (r === g) {
                    if ("throw" === i) throw a;
                    return {
                        value: e,
                        done: !0
                    }
                }
                for (o.method = i, o.arg = a;;) {
                    var s = o.delegate;
                    if (s) {
                        var l = C(s, o);
                        if (l) {
                            if (l === h) continue;
                            return l
                        }
                    }
                    if ("next" === o.method) o.sent = o._sent = o.arg;
                    else if ("throw" === o.method) {
                        if (r === f) throw r = g, o.arg;
                        o.dispatchException(o.arg)
                    } else "return" === o.method && o.abrupt("return", o.arg);
                    r = _;
                    var c = p(t, n, o);
                    if ("normal" === c.type) {
                        if (r = o.done ? g : m, c.arg === h) continue;
                        return {
                            value: c.arg,
                            done: o.done
                        }
                    }
                    "throw" === c.type && (r = g, o.method = "throw", o.arg = c.arg)
                }
            }
        }

        function C(t, n) {
            var o = n.method,
                r = t.iterator[o];
            if (r === e) return n.delegate = null, "throw" === o && t.iterator.return && (n.method = "return", n.arg = e, C(t, n), "throw" === n.method) || "return" !== o && (n.method = "throw", n.arg = new TypeError("The iterator does not provide a '" + o + "' method")), h;
            var i = p(r, t.iterator, n.arg);
            if ("throw" === i.type) return n.method = "throw", n.arg = i.arg, n.delegate = null, h;
            var a = i.arg;
            return a ? a.done ? (n[t.resultName] = a.value, n.next = t.nextLoc, "return" !== n.method && (n.method = "next", n.arg = e), n.delegate = null, h) : a : (n.method = "throw", n.arg = new TypeError("iterator result is not an object"), n.delegate = null, h)
        }

        function B(t) {
            var e = {
                tryLoc: t[0]
            };
            1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
        }

        function I(t) {
            var e = t.completion || {};
            e.type = "normal", delete e.arg, t.completion = e
        }

        function T(t) {
            this.tryEntries = [{
                tryLoc: "root"
            }], t.forEach(B, this), this.reset(!0)
        }

        function P(t) {
            if (t || "" === t) {
                var n = t[s];
                if (n) return n.call(t);
                if ("function" == typeof t.next) return t;
                if (!isNaN(t.length)) {
                    var o = -1,
                        i = function n() {
                            for (; ++o < t.length;)
                                if (r.call(t, o)) return n.value = t[o], n.done = !1, n;
                            return n.value = e, n.done = !0, n
                        };
                    return i.next = i
                }
            }
            throw new TypeError(_typeof(t) + " is not iterable")
        }
        return v.prototype = w, i(k, "constructor", {
            value: w,
            configurable: !0
        }), i(w, "constructor", {
            value: v,
            configurable: !0
        }), v.displayName = u(w, c, "GeneratorFunction"), n.isGeneratorFunction = function(t) {
            var e = "function" == typeof t && t.constructor;
            return !!e && (e === v || "GeneratorFunction" === (e.displayName || e.name))
        }, n.mark = function(t) {
            return Object.setPrototypeOf ? Object.setPrototypeOf(t, w) : (t.__proto__ = w, u(t, c, "GeneratorFunction")), t.prototype = Object.create(k), t
        }, n.awrap = function(t) {
            return {
                __await: t
            }
        }, L(A.prototype), u(A.prototype, l, (function() {
            return this
        })), n.AsyncIterator = A, n.async = function(t, e, o, r, i) {
            void 0 === i && (i = Promise);
            var a = new A(d(t, e, o, r), i);
            return n.isGeneratorFunction(e) ? a : a.next().then((function(t) {
                return t.done ? t.value : a.next()
            }))
        }, L(k), u(k, c, "Generator"), u(k, s, (function() {
            return this
        })), u(k, "toString", (function() {
            return "[object Generator]"
        })), n.keys = function(t) {
            var e = Object(t),
                n = [];
            for (var o in e) n.push(o);
            return n.reverse(),
                function t() {
                    for (; n.length;) {
                        var o = n.pop();
                        if (o in e) return t.value = o, t.done = !1, t
                    }
                    return t.done = !0, t
                }
        }, n.values = P, T.prototype = {
            constructor: T,
            reset: function(t) {
                if (this.prev = 0, this.next = 0, this.sent = this._sent = e, this.done = !1, this.delegate = null, this.method = "next", this.arg = e, this.tryEntries.forEach(I), !t)
                    for (var n in this) "t" === n.charAt(0) && r.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = e)
            },
            stop: function() {
                this.done = !0;
                var t = this.tryEntries[0].completion;
                if ("throw" === t.type) throw t.arg;
                return this.rval
            },
            dispatchException: function(t) {
                if (this.done) throw t;
                var n = this;

                function o(o, r) {
                    return s.type = "throw", s.arg = t, n.next = o, r && (n.method = "next", n.arg = e), !!r
                }
                for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                    var a = this.tryEntries[i],
                        s = a.completion;
                    if ("root" === a.tryLoc) return o("end");
                    if (a.tryLoc <= this.prev) {
                        var l = r.call(a, "catchLoc"),
                            c = r.call(a, "finallyLoc");
                        if (l && c) {
                            if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                            if (this.prev < a.finallyLoc) return o(a.finallyLoc)
                        } else if (l) {
                            if (this.prev < a.catchLoc) return o(a.catchLoc, !0)
                        } else {
                            if (!c) throw Error("try statement without catch or finally");
                            if (this.prev < a.finallyLoc) return o(a.finallyLoc)
                        }
                    }
                }
            },
            abrupt: function(t, e) {
                for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                    var o = this.tryEntries[n];
                    if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                        var i = o;
                        break
                    }
                }
                i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
                var a = i ? i.completion : {};
                return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, h) : this.complete(a)
            },
            complete: function(t, e) {
                if ("throw" === t.type) throw t.arg;
                return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), h
            },
            finish: function(t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                    var n = this.tryEntries[e];
                    if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), I(n), h
                }
            },
            catch: function(t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                    var n = this.tryEntries[e];
                    if (n.tryLoc === t) {
                        var o = n.completion;
                        if ("throw" === o.type) {
                            var r = o.arg;
                            I(n)
                        }
                        return r
                    }
                }
                throw Error("illegal catch attempt")
            },
            delegateYield: function(t, n, o) {
                return this.delegate = {
                    iterator: P(t),
                    resultName: n,
                    nextLoc: o
                }, "next" === this.method && (this.arg = e), h
            }
        }, n
    }

    function e(t, e, n, o, r, i, a) {
        try {
            var s = t[i](a),
                l = s.value
        } catch (t) {
            return void n(t)
        }
        s.done ? e(l) : Promise.resolve(l).then(o, r)
    }

    function n(t) {
        return function() {
            var n = this,
                o = arguments;
            return new Promise((function(r, i) {
                var a = t.apply(n, o);

                function s(t) {
                    e(a, r, i, s, l, "next", t)
                }

                function l(t) {
                    e(a, r, i, s, l, "throw", t)
                }
                s(void 0)
            }))
        }
    }

    function o(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, o = new Array(e); n < e; n++) o[n] = t[n];
        return o
    }

    function r(t, e) {
        var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
        if (!n) {
            if (Array.isArray(t) || (n = function(t, e) {
                    if (t) {
                        if ("string" == typeof t) return o(t, e);
                        var n = Object.prototype.toString.call(t).slice(8, -1);
                        return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? o(t, e) : void 0
                    }
                }(t)) || e && t && "number" == typeof t.length) {
                n && (t = n);
                var r = 0,
                    i = function() {};
                return {
                    s: i,
                    n: function() {
                        return r >= t.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: t[r++]
                        }
                    },
                    e: function(t) {
                        throw t
                    },
                    f: i
                }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var a, s = !0,
            l = !1;
        return {
            s: function() {
                n = n.call(t)
            },
            n: function() {
                var t = n.next();
                return s = t.done, t
            },
            e: function(t) {
                l = !0, a = t
            },
            f: function() {
                try {
                    s || null == n.return || n.return()
                } finally {
                    if (l) throw a
                }
            }
        }
    }! function(t) {
        var e, n = Object.prototype.hasOwnProperty,
            o = "function" == typeof Symbol ? Symbol : {},
            r = o.iterator || "@@iterator",
            i = o.toStringTag || "@@toStringTag",
            a = "object" === ("undefined" == typeof module ? "undefined" : _typeof(module)),
            s = t.regeneratorRuntime;
        if (s) a && (module.exports = s);
        else {
            (s = t.regeneratorRuntime = a ? module.exports : {}).wrap = m;
            var l = "suspendedStart",
                c = "suspendedYield",
                u = "executing",
                d = "completed",
                p = {},
                f = y.prototype = g.prototype;
            h.prototype = f.constructor = y, y.constructor = h, y[i] = h.displayName = "GeneratorFunction", s.isGeneratorFunction = function(t) {
                var e = "function" == typeof t && t.constructor;
                return !!e && (e === h || "GeneratorFunction" === (e.displayName || e.name))
            }, s.mark = function(t) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(t, y) : (t.__proto__ = y, i in t || (t[i] = "GeneratorFunction")), t.prototype = Object.create(f), t
            }, s.awrap = function(t) {
                return new w(t)
            }, v(x.prototype), s.async = function(t, e, n, o) {
                var r = new x(m(t, e, n, o));
                return s.isGeneratorFunction(e) ? r : r.next().then((function(t) {
                    return t.done ? t.value : r.next()
                }))
            }, v(f), f[r] = function() {
                return this
            }, f[i] = "Generator", f.toString = function() {
                return "[object Generator]"
            }, s.keys = function(t) {
                var e = [];
                for (var n in t) e.push(n);
                return e.reverse(),
                    function n() {
                        for (; e.length;) {
                            var o = e.pop();
                            if (o in t) return n.value = o, n.done = !1, n
                        }
                        return n.done = !0, n
                    }
            }, s.values = L, k.prototype = {
                constructor: k,
                reset: function(t) {
                    if (this.prev = 0, this.next = 0, this.sent = this._sent = e, this.done = !1, this.delegate = null, this.tryEntries.forEach(E), !t)
                        for (var o in this) "t" === o.charAt(0) && n.call(this, o) && !isNaN(+o.slice(1)) && (this[o] = e)
                },
                stop: function() {
                    this.done = !0;
                    var t = this.tryEntries[0].completion;
                    if ("throw" === t.type) throw t.arg;
                    return this.rval
                },
                dispatchException: function(t) {
                    if (this.done) throw t;
                    var e = this;

                    function o(n, o) {
                        return a.type = "throw", a.arg = t, e.next = n, !!o
                    }
                    for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                        var i = this.tryEntries[r],
                            a = i.completion;
                        if ("root" === i.tryLoc) return o("end");
                        if (i.tryLoc <= this.prev) {
                            var s = n.call(i, "catchLoc"),
                                l = n.call(i, "finallyLoc");
                            if (s && l) {
                                if (this.prev < i.catchLoc) return o(i.catchLoc, !0);
                                if (this.prev < i.finallyLoc) return o(i.finallyLoc)
                            } else if (s) {
                                if (this.prev < i.catchLoc) return o(i.catchLoc, !0)
                            } else {
                                if (!l) throw new Error("try statement without catch or finally");
                                if (this.prev < i.finallyLoc) return o(i.finallyLoc)
                            }
                        }
                    }
                },
                abrupt: function(t, e) {
                    for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                        var r = this.tryEntries[o];
                        if (r.tryLoc <= this.prev && n.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                            var i = r;
                            break
                        }
                    }
                    i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
                    var a = i ? i.completion : {};
                    return a.type = t, a.arg = e, i ? this.next = i.finallyLoc : this.complete(a), p
                },
                complete: function(t, e) {
                    if ("throw" === t.type) throw t.arg;
                    "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = t.arg, this.next = "end") : "normal" === t.type && e && (this.next = e)
                },
                finish: function(t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var n = this.tryEntries[e];
                        if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), E(n), p
                    }
                },
                catch: function(t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var n = this.tryEntries[e];
                        if (n.tryLoc === t) {
                            var o = n.completion;
                            if ("throw" === o.type) {
                                var r = o.arg;
                                E(n)
                            }
                            return r
                        }
                    }
                    throw new Error("illegal catch attempt")
                },
                delegateYield: function(t, e, n) {
                    return this.delegate = {
                        iterator: L(t),
                        resultName: e,
                        nextLoc: n
                    }, p
                }
            }
        }

        function m(t, n, o, r) {
            var i = n && n.prototype instanceof g ? n : g,
                a = Object.create(i.prototype),
                s = new k(r || []);
            return a._invoke = function(t, n, o) {
                var r = l;
                return function(i, a) {
                    if (r === u) throw new Error("Generator is already running");
                    if (r === d) {
                        if ("throw" === i) throw a;
                        return A()
                    }
                    for (;;) {
                        var s = o.delegate;
                        if (s) {
                            if ("return" === i || "throw" === i && s.iterator[i] === e) {
                                o.delegate = null;
                                var f = s.iterator.return;
                                if (f)
                                    if ("throw" === (m = _(f, s.iterator, a)).type) {
                                        i = "throw", a = m.arg;
                                        continue
                                    } if ("return" === i) continue
                            }
                            var m;
                            if ("throw" === (m = _(s.iterator[i], s.iterator, a)).type) {
                                o.delegate = null, i = "throw", a = m.arg;
                                continue
                            }
                            if (i = "next", a = e, !(g = m.arg).done) return r = c, g;
                            o[s.resultName] = g.value, o.next = s.nextLoc, o.delegate = null
                        }
                        if ("next" === i) o.sent = o._sent = a;
                        else if ("throw" === i) {
                            if (r === l) throw r = d, a;
                            o.dispatchException(a) && (i = "next", a = e)
                        } else "return" === i && o.abrupt("return", a);
                        if (r = u, "normal" === (m = _(t, n, o)).type) {
                            r = o.done ? d : c;
                            var g = {
                                value: m.arg,
                                done: o.done
                            };
                            if (m.arg !== p) return g;
                            o.delegate && "next" === i && (a = e)
                        } else "throw" === m.type && (r = d, i = "throw", a = m.arg)
                    }
                }
            }(t, o, s), a
        }

        function _(t, e, n) {
            try {
                return {
                    type: "normal",
                    arg: t.call(e, n)
                }
            } catch (t) {
                return {
                    type: "throw",
                    arg: t
                }
            }
        }

        function g() {}

        function h() {}

        function y() {}

        function v(t) {
            ["next", "throw", "return"].forEach((function(e) {
                t[e] = function(t) {
                    return this._invoke(e, t)
                }
            }))
        }

        function w(t) {
            this.arg = t
        }

        function x(t) {
            function e(n, o, r, i) {
                var a = _(t[n], t, o);
                if ("throw" !== a.type) {
                    var s = a.arg,
                        l = s.value;
                    return l instanceof w ? Promise.resolve(l.arg).then((function(t) {
                        e("next", t, r, i)
                    }), (function(t) {
                        e("throw", t, r, i)
                    })) : Promise.resolve(l).then((function(t) {
                        s.value = t, r(s)
                    }), i)
                }
                i(a.arg)
            }
            var n;
            "object" === ("undefined" == typeof process ? "undefined" : _typeof(process)) && process.domain && (e = process.domain.bind(e)), this._invoke = function(t, o) {
                function r() {
                    return new Promise((function(n, r) {
                        e(t, o, n, r)
                    }))
                }
                return n = n ? n.then(r, r) : r()
            }
        }

        function b(t) {
            var e = {
                tryLoc: t[0]
            };
            1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
        }

        function E(t) {
            var e = t.completion || {};
            e.type = "normal", delete e.arg, t.completion = e
        }

        function k(t) {
            this.tryEntries = [{
                tryLoc: "root"
            }], t.forEach(b, this), this.reset(!0)
        }

        function L(t) {
            if (t) {
                var o = t[r];
                if (o) return o.call(t);
                if ("function" == typeof t.next) return t;
                if (!isNaN(t.length)) {
                    var i = -1,
                        a = function o() {
                            for (; ++i < t.length;)
                                if (n.call(t, i)) return o.value = t[i], o.done = !1, o;
                            return o.value = e, o.done = !0, o
                        };
                    return a.next = a
                }
            }
            return {
                next: A
            }
        }

        function A() {
            return {
                value: e,
                done: !0
            }
        }
    }("object" === ("undefined" == typeof global ? "undefined" : _typeof(global)) ? global : "object" === ("undefined" == typeof window ? "undefined" : _typeof(window)) ? window : "object" === ("undefined" == typeof self ? "undefined" : _typeof(self)) ? self : void 0),
    function() {
        var e = "";
        try {
            var o = "srgb";
            window.matchMedia("(color-gamut: rec2020)").matches ? o = "rec2020" : window.matchMedia("(color-gamut: p3)").matches && (o = "display-p3"), e = CSS.supports("color: color(display-p3 1 0 0)") ? o : "srgb"
        } catch (t) {
            e = "srgb"
        }
        var i = null,
            a = !1,
            s = "",
            l = "",
            c = {},
            u = /.*?_(\d+)$/,
            d = !1,
            p = "",
            f = !1,
            m = /^( {1,4}|\t)/,
            _ = "\n_P='<div class=\"color-command\">{}</div>'\n_O='swatch'\n_N='transparent'\n_M='pycon'\n_L='playground'\n_K='gamut'\n_J='color'\n_I='{} {}%'\n_H='exceptions'\n_G='highlight'\n_F='eval'\n_E='<string>'\n_D=None\n_C='class'\n_B=True\n_A=False\nfrom collections.abc import Sequence,Mapping\nimport ast\nfrom io import StringIO\nimport sys,re\nfrom functools import partial\nfrom pygments import highlight\nfrom pygments.lexers import get_lexer_by_name\nfrom pygments.formatters import find_formatter_class\nPY310=(3,10)<=sys.version_info\nPY311=(3,11)<=sys.version_info\nWEBSPACE='srgb'\nAST_BLOCKS=ast.If,ast.For,ast.While,ast.Try,ast.With,ast.FunctionDef,ast.ClassDef,ast.AsyncFor,ast.AsyncWith,ast.AsyncFunctionDef\nif PY310:AST_BLOCKS=AST_BLOCKS+(ast.Match,)\nif PY311:AST_BLOCKS=AST_BLOCKS+(ast.TryStar,)\nRE_INIT=re.compile('^\\\\s*#\\\\s*pragma:\\\\s*init\\\\n(.*?)#\\\\s*pragma:\\\\s*init\\\\n',re.DOTALL|re.I)\nRE_COLOR_START=re.compile('(?i)(?:\\\\b(?<![-#&$])(?:color|hsla?|lch|lab|hwb|rgba?)\\\\(|\\\\b(?<![-#&$])[\\\\w]{3,}(?![(-])\\\\b|(?<![&])#)')\nLIVE_INIT='''\\na = 'hello'\\nb='world'\\nprint(a+b)\\n'''\ncode_id=0\nclass Ramp(list):0\nclass Steps(list):0\nclass Row(list):0\nclass AtomicString(str):0\nclass Break(Exception):0\nclass Continue(Exception):0\nHtmlRow=Row\nHtmlSteps=Steps\nHtmlGradient=Ramp\ndef _escape(txt):txt=txt.replace('&','&amp;');txt=txt.replace('<','&lt;');txt=txt.replace('>','&gt;');return txt\nclass StreamOut:\n\tdef __init__(self):self.old=sys.stdout;self.stdout=StringIO();sys.stdout=self.stdout\n\tdef read(self):\n\t\tvalue=''\n\t\tif self.stdout is not _D:self.stdout.flush();value=self.stdout.getvalue();self.stdout=StringIO();sys.stdout=self.stdout\n\t\treturn value\n\tdef __enter__(self):return self\n\tdef __exit__(self,type,value,traceback):sys.stdout=self.old;self.old=_D;self.stdout=_D\ndef evaluate_with(node,g,loop,index=0):\n\tl=len(node.items)-1;withitem=node.items[index]\n\tif withitem.context_expr:\n\t\twith eval(compile(ast.Expression(withitem.context_expr),_E,_F),g)as w:\n\t\t\tg[withitem.optional_vars.id]=w\n\t\t\tif index<l:evaluate_with(node,g,loop,index+1)\n\t\t\telse:\n\t\t\t\tfor n in node.body:yield from evaluate(n,g,loop)\n\telse:\n\t\twith eval(compile(ast.Expression(withitem.context_expr),_E,_F),g):\n\t\t\tif index<l:evaluate_with(node,g,loop,index+1)\n\t\t\telse:\n\t\t\t\tfor n in node.body:yield from evaluate(n,g,loop)\ndef compare_match(s,g,node):\n\tif isinstance(node,ast.MatchOr):\n\t\tfor pattern in node.patterns:\n\t\t\tif compare_match(s,g,pattern):return _B\n\telif isinstance(node,ast.MatchValue):p=eval(compile(ast.Expression(node.value),_E,_F),g);return s==p\n\telif isinstance(node,ast.MatchSingleton):return s is node.value\n\telif isinstance(node,ast.MatchSequence):\n\t\tif isinstance(s,Sequence):\n\t\t\tstar=isinstance(node.patterns[-1],ast.MatchStar);l1,l2=len(s),len(node.patterns)\n\t\t\tif star and l1>=l2-1 or l1==l2:\n\t\t\t\tfor (e,p) in enumerate(node.patterns[:-1]if star else node.patterns):\n\t\t\t\t\tif not compare_match(s[e],g,p):return _A\n\t\t\t\tif star and node.patterns[-1].name:g[node.patterns[-1].name]=s[l2-1:]\n\t\t\t\treturn _B\n\t\treturn _A\n\telif isinstance(node,ast.MatchMapping):\n\t\tif isinstance(s,Mapping):\n\t\t\tstar=node.rest;l1,l2=len(s),len(node.patterns)\n\t\t\tif star and l1>=l2 or l1==l2:\n\t\t\t\tkeys=set()\n\t\t\t\tfor (kp,vp) in zip(node.keys,node.patterns):\n\t\t\t\t\tkey=eval(compile(ast.Expression(kp),_E,_F),g);keys.add(key)\n\t\t\t\t\tif key not in s:return _A\n\t\t\t\t\tif not compare_match(s[key],g,vp):return _A\n\t\t\t\tif star:g[star]={k:v for(k,v)in s.items()if k not in keys}\n\t\t\t\treturn _B\n\t\treturn _A\n\telif isinstance(node,ast.MatchClass):\n\t\tname=g.get(node.cls.id,_D)\n\t\tif name is _D:raise NameError(\"name '{}' is not defined\".format(node.cls.id))\n\t\tif not isinstance(s,name):return _A\n\t\tma=getattr(s,'__match_args__',());l1=len(ma);l2=len(node.patterns)\n\t\tif l1<l2:raise TypeError('{}() accepts {} positional sub-patterns ({} given)'.format(name,l1,l2))\n\t\tfor (e,p) in enumerate(node.patterns):\n\t\t\tif not hasattr(s,ma[e]):return _A\n\t\t\tif not compare_match(getattr(s,ma[e]),g,p):return _A\n\t\tfor (a,p) in zip(node.kwd_attrs,node.kwd_patterns):\n\t\t\tif not hasattr(s,a):return _A\n\t\t\tif not compare_match(getattr(s,a),g,p):return _A\n\t\treturn _B\n\telif isinstance(node,ast.MatchAs):\n\t\tif node.name is not _D:g[node.name]=s\n\t\tif node.pattern:return compare_match(s,g,node.pattern)\n\t\treturn _B\n\traise RuntimeError('Unknown Match pattern {}'.format(str(node)))\ndef evaluate_except(node,e,g,loop=_A):\n\tfor n in node.handlers:\n\t\tif n.name:g[n.name]=e\n\t\tif n.type is _D:\n\t\t\tfor ne in n.body:yield from evaluate(ne,g,loop)\n\t\t\tbreak\n\t\telif isinstance(e,eval(compile(ast.Expression(n.type),_E,_F),g)):\n\t\t\tfor ne in n.body:yield from evaluate(ne,g,loop)\n\t\t\tbreak\n\telse:raise\ndef evaluate(node,g,loop=_A):\n\tif loop and isinstance(node,ast.Break):raise Break\n\tif loop and isinstance(node,ast.Continue):raise Continue\n\tif isinstance(node,ast.Expr):_eval=ast.Expression(node.value);yield eval(compile(_eval,_E,_F),g)\n\telif isinstance(node,ast.If):\n\t\tif eval(compile(ast.Expression(node.test),_E,_F),g):\n\t\t\tfor n in node.body:yield from evaluate(n,g,loop)\n\t\telif node.orelse:\n\t\t\tfor n in node.orelse:yield from evaluate(n,g,loop)\n\telif isinstance(node,ast.While):\n\t\twhile eval(compile(ast.Expression(node.test),_E,_F),g):\n\t\t\ttry:\n\t\t\t\tfor n in node.body:yield from evaluate(n,g,_B)\n\t\t\texcept Break:break\n\t\t\texcept Continue:continue\n\t\telse:\n\t\t\tfor n in node.orelse:yield from evaluate(n,g,loop)\n\telif isinstance(node,ast.For):\n\t\tfor x in eval(compile(ast.Expression(node.iter),_E,_F),g):\n\t\t\tif isinstance(node.target,ast.Tuple):\n\t\t\t\tfor (e,t) in enumerate(node.target.dims):g[t.id]=x[e]\n\t\t\telse:g[node.target.id]=x\n\t\t\ttry:\n\t\t\t\tfor n in node.body:yield from evaluate(n,g,_B)\n\t\t\texcept Break:break\n\t\t\texcept Continue:continue\n\t\telse:\n\t\t\tfor n in node.orelse:yield from evaluate(n,g,loop)\n\telif isinstance(node,ast.Try):\n\t\ttry:\n\t\t\tfor n in node.body:yield from evaluate(n,g,loop)\n\t\texcept Exception as e:yield from evaluate_except(node,e,g,loop)\n\t\telse:\n\t\t\tfor n in node.orelse:yield from evaluate(n,g,loop)\n\t\tfinally:\n\t\t\tfor n in node.finalbody:yield from evaluate(n,g,loop)\n\telif PY311 and isinstance(node,ast.TryStar):\n\t\ttry:\n\t\t\tfor n in node.body:yield from evaluate(n,g,loop)\n\t\texcept ExceptionGroup as e:\n\t\t\tfor n in node.handlers:\n\t\t\t\tif n.name:g[n.name]=e\n\t\t\t\tm,e=e.split(eval(compile(ast.Expression(n.type),_E,_F),g))\n\t\t\t\tif m is not _D:\n\t\t\t\t\tfor ne in n.body:yield from evaluate(ne,g,loop)\n\t\t\t\tif e is _D:break\n\t\t\tif e is not _D:raise e\n\t\texcept Exception as e:yield from evaluate_except(node,e,g,loop)\n\t\telse:\n\t\t\tfor n in node.orelse:yield from evaluate(n,g,loop)\n\t\tfinally:\n\t\t\tfor n in node.finalbody:yield from evaluate(n,g,loop)\n\telif PY310 and isinstance(node,ast.Match):\n\t\ts=eval(compile(ast.Expression(node.subject),_E,_F),g)\n\t\tfor c in node.cases:\n\t\t\tif compare_match(s,g,c.pattern):\n\t\t\t\tif not c.guard or eval(compile(ast.Expression(c.guard),_E,_F),g):\n\t\t\t\t\tfor n in c.body:yield from evaluate(n,g,loop)\n\t\t\t\t\tbreak\n\telif isinstance(node,ast.With):yield from evaluate_with(node,g,loop)\n\telse:_exec=ast.Module([node],[]);exec(compile(_exec,_E,'exec'),g);yield _D\ndef execute(cmd,no_except=_B,inline=_A,init='',g=_D):\n\tA='\\n';console=''\n\tif g is _D:g={'Ramp':Ramp,'Steps':Steps,'Row':Row,'HtmlRow':HtmlRow,'HtmlSteps':HtmlSteps,'HtmlGradient':HtmlGradient}\n\tif init:execute(init.strip(),g=g)\n\tm=RE_INIT.match(cmd)\n\tif m:block_init=m.group(1);src=cmd[m.end():];execute(block_init,g=g)\n\telse:src=cmd\n\tlines=src.split(A)\n\ttry:tree=ast.parse(src)\n\texcept Exception as e:\n\t\tif no_except:\n\t\t\tif not inline:from pymdownx.superfences import SuperFencesException;raise SuperFencesException from e\n\t\t\telse:from pymdownx.inlinehilite import InlineHiliteException;raise InlineHiliteException from e\n\t\timport traceback;return '{}'.format(traceback.format_exc())\n\tfor node in tree.body:\n\t\tresult=[];start=node.lineno;end=node.end_lineno;stmt=lines[start-1:end];command=''\n\t\tfor (i,line) in enumerate(stmt,0):\n\t\t\tif i==0:stmt[i]='>>> '+line\n\t\t\telse:stmt[i]='... '+line\n\t\tcommand+=A.join(stmt)\n\t\tif isinstance(node,AST_BLOCKS):command+='\\n... '\n\t\ttry:\n\t\t\twith StreamOut()as s:\n\t\t\t\tfor x in evaluate(node,g):\n\t\t\t\t\tresult.append(x);text=s.read()\n\t\t\t\t\tif text:result.append(AtomicString(text))\n\t\t\t\tconsole+=command\n\t\texcept Exception as e:\n\t\t\tif no_except:\n\t\t\t\tif not inline:from pymdownx.superfences import SuperFencesException;raise SuperFencesException from e\n\t\t\t\telse:from pymdownx.inlinehilite import InlineHiliteException;raise InlineHiliteException from e\n\t\t\timport traceback;console+='{}\\n{}'.format(command,traceback.format_exc());break\n\t\tresult_text=A\n\t\tfor r in result:\n\t\t\tif r is _D:continue\n\t\t\tresult_text+='{}{}'.format(repr(r)if isinstance(r,str)and not isinstance(r,AtomicString)else str(r),A if not isinstance(r,AtomicString)else'')\n\t\tconsole+=result_text\n\treturn console\ndef colorize(src,lang,**options):HtmlFormatter=find_formatter_class('html');lexer=get_lexer_by_name(lang,**options);formatter=HtmlFormatter(cssclass=_G,wrapcode=_B);return highlight(src,lexer,formatter).strip()\ndef color_command_validator(language,inputs,options,attrs,md):\n\tvalid_inputs={_H,'play','wheel'}\n\tfor (k,v) in inputs.items():\n\t\tif k in valid_inputs:options[k]=_B;continue\n\t\tattrs[k]=v\n\treturn _B\ndef _color_command_formatter(src='',language='',class_name=_D,options=_D,md='',init='',**kwargs):\n\tC='</div>';B='formatter';A='fenced_code_block';global code_id;from pymdownx.superfences import SuperFencesException;gamut=kwargs.get(_K,WEBSPACE);play=options.get('play',_A)if options is not _D else _A\n\tif not play and language==_L:play=_B\n\tif not play:return md.preprocessors[A].extension.superfences[0][B](src=src,class_name=class_name,language='py',md=md,options=options,**kwargs)\n\tif len(md.preprocessors[A].extension.stash)==0:code_id=0\n\texceptions=options.get(_H,_A)if options is not _D else _A;console,colors=execute(src.strip(),not exceptions,init=init);el=md.preprocessors[A].extension.superfences[0][B](src=console,class_name=_G,language=_M,md=md,options=options,**kwargs);el=_P.format(el);el=template.format(el_id=code_id,raw_source=_escape(src),results=el,gamut=gamut);code_id+=1\n\treturn el\ndef color_command_formatter(init='',gamut=WEBSPACE):return partial(_color_command_formatter,init=init,gamut=gamut)\ndef _live_color_command_formatter(src,init='',gamut=WEBSPACE):\n\ttry:\n\t\tconsole=execute(src.strip(),_A,init=init)\n\t\tel=colorize(console,_M,**{'python3':_B,'stripnl':_A});el=_P.format(el)\n\texcept Exception:import traceback;return '<div class=\"color-command\"><div class=\"swatch-bar\"></div>{}</div>'.format(colorize(traceback.format_exc(),_M))\n\treturn el\ndef live_color_command_formatter(init='',gamut=WEBSPACE):return partial(_live_color_command_formatter,init=init,gamut=gamut)\ndef live_color_command_validator(language,inputs,options,attrs,md):value=color_command_validator(language,inputs,options,attrs,md);options[_H]=_B;return value\ndef render_console(*args,**kwargs):\n\tC='.swatch-bar';B='code';A='id_num';from js import document;gamut=kwargs.get(_K,WEBSPACE)\n\ttry:\n\t\tinputs=document.getElementById('__playground-inputs_{}'.format(globals()[A]));results=document.getElementById('__playground-results_{}'.format(globals()[A]));footer=document.querySelector('#__playground_{} .gamut'.format(globals()[A]));result=live_color_command_formatter(LIVE_INIT,gamut)(inputs.value);temp=document.createElement('div');temp.innerHTML=result;cmd=results.querySelector('.color-command')\n\t\tfor el in cmd.querySelectorAll(C):el.remove()\n\t\tfor el in temp.querySelectorAll(C):cmd.insertBefore(el,cmd.lastChild)\n\t\tfooter.innerHTML='Gamut: {}'.format(gamut);pre=cmd.querySelector('pre');pre.replaceChild(temp.querySelector(B),pre.querySelector(B));temp.remove();scrollingElement=results.querySelector(B);scrollingElement.scrollTop=scrollingElement.scrollHeight\n\texcept Exception as e:print(e)\n\ncallback = render_console\n\ncallback(gamut='".concat(e, "')\n"),
            g = window.colorNotebook.defaultPlayground,
            h = function(t) {
                return "\n/// new | This notebook is powered by [Pyodide](https://github.com/pyodide/pyodide). Preview, convert, interpolate, and explore!\n///\n\n````````py play\n".concat(t, "\n````````\n")
            },
            y = !1,
            v = !1,
            w = function() {
                f = !0, window.document.dispatchEvent(new Event("DOMContentLoaded", {
                    bubbles: !0,
                    cancelable: !0
                })), window.document$.next()
            },
            x = function(t) {
                var e = window.pageXOffset || (document.documentElement || document.body.parentNode || document.body).scrollLeft,
                    n = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
                t.style.height = "5px", t.style.height = "".concat(Math.min(t.scrollHeight, 408), "px"), window.scrollTo(e, n)
            },
            b = function(t) {
                return encodeURIComponent(t).replace(/[.!'()*]/g, (function(t) {
                    return "%".concat(t.charCodeAt(0).toString(16))
                }))
            },
            E = function() {
                var e = n(t().mark((function e(n) {
                    var o;
                    return t().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return (o = document.getElementById("__playground-inputs_".concat(n))).setAttribute("readonly", ""), i.globals.set("id_num", n), i.globals.set("action", "playground"), t.next = 6, i.runPythonAsync(_);
                            case 6:
                                o.removeAttribute("readonly");
                            case 7:
                            case "end":
                                return t.stop()
                        }
                    }), e)
                })));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }(),
            k = function() {
                var e = n(t().mark((function e(n) {
                    var o;
                    return t().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return i.globals.set("content", n), i.globals.set("action", "notebook"), t.next = 4, i.runPythonAsync(_);
                            case 4:
                                (o = document.getElementById("__notebook-input")) && (s = n, o.value = n), window.location.hash && (window.location.href = window.location.href);
                            case 7:
                            case "end":
                                return t.stop()
                        }
                    }), e)
                })));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }(),
            L = function() {
                var e = n(t().mark((function e(n) {
                    var o, a, s, l, c, u;
                    return t().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                if (d) {
                                    t.next = 5;
                                    break
                                }
                                return d = !0, t.next = 4, loadPyodide({
                                    indexURL: "https://cdn.jsdelivr.net/pyodide/v0.25.1/full/",
                                    fullStdLib: !1
                                });
                            case 4:
                                i = t.sent;
                            case 5:
                                if ((y || !n) && (v || n)) {
                                    t.next = 14;
                                    break
                                }
                                o = "", a = n ? window.colorNotebook.notebookWheels : window.colorNotebook.playgroundWheels, s = [], n ? y = !0 : v = !0, l = r(a);
                                try {
                                    for (l.s(); !(c = l.n()).done;)(u = c.value).endsWith(".whl") ? s.push(o + u) : s.push(u)
                                } catch (t) {
                                    l.e(t)
                                } finally {
                                    l.f()
                                }
                                return t.next = 14, i.loadPackage(s);
                            case 14:
                            case "end":
                                return t.stop()
                        }
                    }), e)
                })));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }(),
            A = function(t, e, n) {
                var o = null == e ? "Loading..." : e,
                    r = n ? "loading relative" : "loading",
                    i = document.createElement("template");
                i.innerHTML = '<div class="'.concat(r, '"><div class="loader"></div><div>').concat(o, "</div></div>"), t.appendChild(i.content.firstChild)
            },
            S = function(t) {
                t.querySelector(".loading") && t.removeChild(t.querySelector(".loading"))
            },
            C = function(t) {
                if ("Tab" === t.key) {
                    var e = t.target;
                    if (e.selectionStart !== e.selectionEnd) {
                        t.preventDefault();
                        for (var n = e.selectionStart, o = e.selectionEnd, r = e.value; n > 0 && "\n" !== r[n - 1];) n--;
                        for (; o > 0 && "\n" !== r[o - 1] && o < r.length;) o++;
                        for (var i = r.substr(n, o - n).split("\n"), a = 0; a < i.length; a++) a === i.length - 1 && 0 === i[a].length || (t.shiftKey ? i[a] = i[a].replace(m, "") : i[a] = "    ".concat(i[a]));
                        i = i.join("\n"), e.value = r.substr(0, n) + i + r.substr(o), e.selectionStart = n, e.selectionEnd = n + i.length
                    }
                }
            },
            B = function() {
                var e = n(t().mark((function e(o) {
                    var r, i, d;
                    return t().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                r = document.getElementById("__notebook-source"), i = document.querySelectorAll(".playground"), r && o && ((d = document.getElementById("__notebook-input")).addEventListener("input", (function(t) {
                                    x(t.target)
                                })), d.addEventListener("keydown", C), document.getElementById("__notebook-edit").addEventListener("click", (function() {
                                    c[d.id] = d.value, document.getElementById("__notebook-render").classList.toggle("hidden"), document.getElementById("__notebook-source").classList.toggle("hidden"), document.getElementById("__notebook-input").setAttribute("style", ""), x(document.getElementById("__notebook-input"))
                                })), document.getElementById("__notebook-md-gist").addEventListener("click", function() {
                                    var e = n(t().mark((function e(n) {
                                        var o;
                                        return t().wrap((function(t) {
                                            for (;;) switch (t.prev = t.next) {
                                                case 0:
                                                    null !== (o = prompt("Please enter link to the Markdown page source:", l)) && (o = b(o), n.preventDefault(), history.pushState({
                                                        notebook: o
                                                    }, "", "?".concat(new URLSearchParams("notebook=".concat(o)).toString())), I(!1));
                                                case 2:
                                                case "end":
                                                    return t.stop()
                                            }
                                        }), e)
                                    })));
                                    return function(t) {
                                        return e.apply(this, arguments)
                                    }
                                }()), document.getElementById("__notebook-py-gist").addEventListener("click", function() {
                                    var e = n(t().mark((function e(n) {
                                        var o;
                                        return t().wrap((function(t) {
                                            for (;;) switch (t.prev = t.next) {
                                                case 0:
                                                    null !== (o = prompt("Please enter the link to the Python code source:", l)) && (o = b(o), n.preventDefault(), history.pushState({
                                                        source: o
                                                    }, "", "?".concat(new URLSearchParams("source=".concat(o)).toString())), I(!1));
                                                case 2:
                                                case "end":
                                                    return t.stop()
                                            }
                                        }), e)
                                    })));
                                    return function(t) {
                                        return e.apply(this, arguments)
                                    }
                                }()), document.getElementById("__notebook-input").value = s, document.getElementById("__notebook-cancel").addEventListener("click", (function() {
                                    d.value = c[d.id], delete c[d.id], document.getElementById("__notebook-render").classList.toggle("hidden"), document.getElementById("__notebook-source").classList.toggle("hidden")
                                })), document.getElementById("__notebook-submit").addEventListener("click", n(t().mark((function e() {
                                    var n, o;
                                    return t().wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                return n = document.getElementById("__notebook-render"), s = document.getElementById("__notebook-input").value, n.classList.toggle("hidden"), document.getElementById("__notebook-source").classList.toggle("hidden"), o = document.querySelector("article"), A(o, "Loading Notebook..."), n.innerHTML = "", c = {}, t.next = 10, L(!0);
                                            case 10:
                                                return t.next = 12, k(s);
                                            case 12:
                                                return t.next = 14, B();
                                            case 14:
                                                S(o), w();
                                            case 16:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), e)
                                }))))), i.forEach((function(e) {
                                    var o = e.id.replace(u, "$1"),
                                        r = document.getElementById("__playground-inputs_".concat(o)),
                                        i = document.getElementById("__playground-results_".concat(o)),
                                        s = document.getElementById("__playground-code_".concat(o)),
                                        l = document.querySelector("button#__playground-edit_".concat(o)),
                                        d = document.querySelector("button#__playground-share_".concat(o)),
                                        p = document.querySelector("button#__playground-run_".concat(o)),
                                        f = document.querySelector("button#__playground-cancel_".concat(o));
                                    r.addEventListener("input", (function() {
                                        x(r)
                                    })), r.addEventListener("keydown", C), r.addEventListener("touchmove", (function(t) {
                                        t.stopPropagation()
                                    })), i.addEventListener("click", (function(t) {
                                        var e = t.target;
                                        if (e.matches("span.swatch-color")) {
                                            var n = "",
                                                o = e.parentNode;
                                            if (!o.matches("span.swatch-gradient")) {
                                                if (n = (n = o.getAttribute("title").replace("Copy to clipboard", "")).replace("\n", ""), window.clipboardData && window.clipboardData.setData) return window.clipboardData.setData("Text", n);
                                                if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
                                                    var r = document.createElement("textarea");
                                                    r.textContent = n, r.style.position = "fixed", document.body.appendChild(r), r.select();
                                                    try {
                                                        return document.execCommand("copy")
                                                    } catch (t) {
                                                        return prompt("Copy to clipboard: Ctrl+C, Enter", n)
                                                    } finally {
                                                        document.body.removeChild(r)
                                                    }
                                                }
                                            }
                                        }
                                    })), l.addEventListener("click", n(t().mark((function e() {
                                        return t().wrap((function(t) {
                                            for (;;) switch (t.prev = t.next) {
                                                case 0:
                                                    c[o] = r.value, s.classList.toggle("hidden"), i.classList.toggle("hidden"), p.classList.toggle("hidden"), f.classList.toggle("hidden"), l.classList.toggle("hidden"), d.classList.toggle("hidden"), x(r), r.focus();
                                                case 9:
                                                case "end":
                                                    return t.stop()
                                            }
                                        }), e)
                                    })))), d.addEventListener("click", n(t().mark((function e() {
                                        var o, i, a, s, l;
                                        return t().wrap((function(e) {
                                            for (;;) switch (e.prev = e.next) {
                                                case 0:
                                                    o = window.location.pathname.split("/")[1], a = window.location, s = "/playground/", a.pathname.startsWith("/".concat(o, "/")) && (s = "/".concat(o, "/playground/")), (l = "".concat(a.protocol, "//").concat(a.host).concat(s)).length > 2e3 ? alert("Copied text must be small enough to generate a shareable URL under 2000 characters!") : navigator.clipboard.writeText(l).then(n(t().mark((function e() {
                                                        return t().wrap((function(t) {
                                                            for (;;) switch (t.prev = t.next) {
                                                                case 0:
                                                                    alert("Link copied to clipboard");
                                                                case 1:
                                                                case "end":
                                                                    return t.stop()
                                                            }
                                                        }), e)
                                                    }))), n(t().mark((function e() {
                                                        return t().wrap((function(t) {
                                                            for (;;) switch (t.prev = t.next) {
                                                                case 0:
                                                                    alert("Failed to copy link to clipboard!");
                                                                case 1:
                                                                case "end":
                                                                    return t.stop()
                                                            }
                                                        }), e)
                                                    }))));
                                                case 7:
                                                case "end":
                                                    return e.stop()
                                            }
                                        }), e)
                                    })))), p.addEventListener("click", n(t().mark((function e() {
                                        var n, r;
                                        return t().wrap((function(t) {
                                            for (;;) switch (t.prev = t.next) {
                                                case 0:
                                                    if (!a) {
                                                        t.next = 2;
                                                        break
                                                    }
                                                    return t.abrupt("return");
                                                case 2:
                                                    return a = !0, n = s.querySelector("form"), A(n, null, !0), (r = document.querySelectorAll(".playground .playground-run")) && r.forEach((function(t) {
                                                        t.setAttribute("disabled", "")
                                                    })), t.next = 9, L(!1);
                                                case 9:
                                                    return i.querySelector("code").innerHTML = "", t.next = 12, E(o);
                                                case 12:
                                                    r && r.forEach((function(t) {
                                                        t.removeAttribute("disabled")
                                                    })), S(n), s.classList.toggle("hidden"), i.classList.toggle("hidden"), l.classList.toggle("hidden"), d.classList.toggle("hidden"), p.classList.toggle("hidden"), f.classList.toggle("hidden"), delete c[o], a = !1;
                                                case 22:
                                                case "end":
                                                    return t.stop()
                                            }
                                        }), e)
                                    })))), f.addEventListener("click", (function() {
                                        r.value = c[o], delete c[o], s.classList.toggle("hidden"), i.classList.toggle("hidden"), l.classList.toggle("hidden"), d.classList.toggle("hidden"), p.classList.toggle("hidden"), f.classList.toggle("hidden")
                                    }))
                                }));
                            case 4:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }(),
            I = function() {
                var e = n(t().mark((function e(o, r) {
                    var i, a, s, u, d, f, m, _, y;
                    return t().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (c = {}, !window.location.pathname.endsWith("/_static/")) {
                                    e.next = 32;
                                    break
                                }
                                if (i = r || new URLSearchParams(window.location.search), a = "Loading Pyodide...", s = "Loading Notebook...", u = i.has("source") ? i.get("source") : i.get("notebook"), d = document.querySelector("article"), null === u || !u.trim()) {
                                    e.next = 16;
                                    break
                                }
                                return A(d, a), e.next = 11, L(!0);
                            case 11:
                                S(d), A(d, s);
                                try {
                                    f = i.has("source") ? "source" : "notebook", p = decodeURIComponent(i.toString()), m = "", _ = new XMLHttpRequest, l = u, _.open("GET", u, !0), _.onload = n(t().mark((function e() {
                                        return t().wrap((function(t) {
                                            for (;;) switch (t.prev = t.next) {
                                                case 0:
                                                    return 4 === _.readyState && 200 === _.status && (m = _.responseText), "source" === f && (m = h(m)), t.next = 4, k(m);
                                                case 4:
                                                    return t.next = 6, B(o);
                                                case 6:
                                                    S(d), w();
                                                case 8:
                                                case "end":
                                                    return t.stop()
                                            }
                                        }), e)
                                    }))), _.send()
                                } catch (t) {}
                                e.next = 30;
                                break;
                            case 16:
                                return l = "", y = h(i.has("code") ? i.get("code") : g), p = decodeURIComponent(i.toString()), A(d, a), e.next = 22, L(!0);
                            case 22:
                                return S(d), A(d, s), e.next = 26, k(y);
                            case 26:
                                return e.next = 28, B(o);
                            case 28:
                                S(d), w();
                            case 30:
                                e.next = 35;
                                break;
                            case 32:
                                l = "", p = "", B(o);
                            case 35:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })));
                return function(t, n) {
                    return e.apply(this, arguments)
                }
            }();
        document.addEventListener("click", (function(t) {
            var e = window.location.pathname.split("/")[1],
                n = t.target || t.srcElement;
            if ("A" === n.tagName && I && n.getAttribute("href") && n.host === window.location.host && window.location.pathname === "/".concat(e, "/") && window.location.pathname === n.pathname && window.location.search !== n.search) {
                t.preventDefault();
                var o = new URLSearchParams(n.search);
                I(!1, o)
            }
        }), !0), window.addEventListener("popstate", (function() {
            var t = window.location.pathname.split("/")[1];
            window.location.pathname === "/".concat(t, "/") && (decodeURIComponent(new URLSearchParams(window.location.search).toString()) !== p && I(!1))
        })), window.addEventListener("unload", (function() {
            f = !1
        })), window.document$.subscribe((function() {
            f ? f = !1 : I(!0)
        }))
    }()
}();
