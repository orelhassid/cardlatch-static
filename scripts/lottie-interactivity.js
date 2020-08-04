!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? t(exports)
    : "function" == typeof define && define.amd
    ? define(["exports"], t)
    : t(((e = e || self).LottieInteractivity = {}));
})(this, function (e) {
  "use strict";
  function t(e) {
    return (t =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              "function" == typeof Symbol &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          })(e);
  }
  function n(e, t) {
    if (!(e instanceof t))
      throw new TypeError("Cannot call a class as a function");
  }
  function i(e, t) {
    for (var n = 0; n < t.length; n++) {
      var i = t[n];
      (i.enumerable = i.enumerable || !1),
        (i.configurable = !0),
        "value" in i && (i.writable = !0),
        Object.defineProperty(e, i.key, i);
    }
  }
  function o(e, t) {
    if (null == e) return {};
    var n,
      i,
      o = (function (e, t) {
        if (null == e) return {};
        var n,
          i,
          o = {},
          r = Object.keys(e);
        for (i = 0; i < r.length; i++)
          (n = r[i]), t.indexOf(n) >= 0 || (o[n] = e[n]);
        return o;
      })(e, t);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      for (i = 0; i < r.length; i++)
        (n = r[i]),
          t.indexOf(n) >= 0 ||
            (Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
    }
    return o;
  }
  function r(e, t) {
    var n = t.get(e);
    if (!n)
      throw new TypeError("attempted to get private field on non-instance");
    return n.get ? n.get.call(e) : n.value;
  }
  var a = { player: "lottie-player" },
    s = (function () {
      function e() {
        var i = this,
          s =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a,
          u = s.actions,
          f = s.container,
          m = s.mode,
          d = s.player,
          v = o(s, ["actions", "container", "mode", "player"]);
        if (
          (n(this, e),
          l.set(this, {
            writable: !0,
            value: function (e) {
              r(i, p).call(i, e.clientX, e.clientY);
            },
          }),
          y.set(this, {
            writable: !0,
            value: function () {
              r(i, p).call(i, -1, -1);
            },
          }),
          p.set(this, {
            writable: !0,
            value: function (e, t) {
              if (-1 !== e && -1 !== t) {
                var n = i.getContainerCursorPosition(e, t);
                (e = n.x), (t = n.y);
              }
              var o = i.actions.find(function (n) {
                var i = n.position;
                return Array.isArray(i.x) && Array.isArray(i.y)
                  ? e >= i.x[0] && e <= i.x[1] && t >= i.y[0] && t <= i.y[1]
                  : !Number.isNaN(i.x) &&
                      !Number.isNaN(i.y) &&
                      e === i.x &&
                      t === i.y;
              });
              if (o)
                if ("seek" === o.type) {
                  var r =
                      (e - o.position.x[0]) /
                      (o.position.x[1] - o.position.x[0]),
                    a =
                      (t - o.position.y[0]) /
                      (o.position.y[1] - o.position.y[0]);
                  i.player.playSegments(o.frames, !0),
                    i.player.goToAndStop(
                      Math.ceil(((r + a) / 2) * i.player.totalFrames),
                      !0
                    );
                } else
                  "loop" === o.type
                    ? i.player.playSegments(o.frames, !0)
                    : "play" === o.type
                    ? (!0 === i.player.isPaused && i.player.resetSegments(),
                      i.player.playSegments(o.frames))
                    : "stop" === o.type &&
                      i.player.goToAndStop(o.frames[0], !0);
            },
          }),
          c.set(this, {
            writable: !0,
            value: function () {
              var e = i.getContainerVisibility(),
                t = i.actions.find(function (t) {
                  var n = t.visibility;
                  return e >= n[0] && e <= n[1];
                });
              t &&
                ("seek" === t.type
                  ? (i.player.playSegments(t.frames, !0),
                    i.player.goToAndStop(
                      Math.ceil(
                        ((e - t.visibility[0]) /
                          (t.visibility[1] - t.visibility[0])) *
                          i.player.totalFrames
                      ),
                      !0
                    ))
                  : "loop" === t.type
                  ? i.player.playSegments(t.frames, !0)
                  : "play" === t.type
                  ? !0 === i.player.isPaused &&
                    (i.player.resetSegments(), i.player.play())
                  : "stop" === t.type && i.player.goToAndStop(t.frames[0], !0));
            },
          }),
          "object" !== t(d) || "AnimationItem" !== d.constructor.name)
        ) {
          if ("string" == typeof d) {
            var h = document.querySelector(d);
            h && "LOTTIE-PLAYER" === h.nodeName && (d = h.getLottie());
          } else
            d instanceof HTMLElement &&
              "LOTTIE-PLAYER" === d.nodeName &&
              (d = d.getLottie());
          if (!d)
            throw new Error(
              "".concat(
                "[lottieInteractivity]:",
                " Specified player is invalid."
              ),
              d
            );
        }
        "string" == typeof f && (f = document.querySelector(f)),
          f || (f = d.wrapper),
          (this.player = d),
          (this.container = f),
          (this.mode = m),
          (this.actions = u),
          (this.options = v);
      }
      var s, u, f;
      return (
        (s = e),
        (u = [
          {
            key: "getContainerVisibility",
            value: function () {
              var e = this.container.getBoundingClientRect(),
                t = e.top,
                n = e.height;
              return (window.innerHeight - t) / (window.innerHeight + n);
            },
          },
          {
            key: "getContainerCursorPosition",
            value: function (e, t) {
              var n = this.container.getBoundingClientRect(),
                i = n.top;
              return { x: (e - n.left) / n.width, y: (t - i) / n.height };
            },
          },
          {
            key: "start",
            value: function () {
              (this.player.loop = !0),
                this.player.stop(),
                "scroll" === this.mode &&
                  window.addEventListener("scroll", r(this, c)),
                "cursor" === this.mode &&
                  (this.container.addEventListener("mousemove", r(this, l)),
                  this.container.addEventListener("mouseout", r(this, y)));
            },
          },
          {
            key: "stop",
            value: function () {
              "scroll" === this.mode &&
                window.removeEventListener("scroll", r(this, c)),
                "cursor" === this.mode &&
                  (this.container.addEventListener("mousemove", r(this, l)),
                  this.container.addEventListener("mouseout", r(this, y)));
            },
          },
        ]) && i(s.prototype, u),
        f && i(s, f),
        e
      );
    })(),
    l = new WeakMap(),
    y = new WeakMap(),
    p = new WeakMap(),
    c = new WeakMap(),
    u = function (e) {
      var t = new s(e);
      return t.start(), t;
    };
  (e.LottieInteractivity = s),
    (e.create = u),
    (e.default = u),
    Object.defineProperty(e, "__esModule", { value: !0 });
});
//# sourceMappingURL=lottie-interactivity.min.js.map
