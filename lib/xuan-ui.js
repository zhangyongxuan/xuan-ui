import { computed as I, openBlock as C, createElementBlock as A, mergeProps as P, unref as w, useCssVars as V, ref as _, onMounted as j, createElementVNode as k, normalizeStyle as G, createBlock as D } from "vue";
const L = (s, t) => {
  const i = s.__vccOpts || s;
  for (const [e, l] of t)
    i[e] = l;
  return i;
}, U = {
  name: "x-picture-to-char"
};
function q(s, t, i, e, l, r) {
  return "picture-to-char";
}
const O = /* @__PURE__ */ L(U, [["render", q]]);
const H = {
  name: "x-icon"
}, W = /* @__PURE__ */ Object.assign(H, {
  props: {
    name: {
      type: String,
      defalut: ""
    },
    class: {
      type: String,
      defalut: " "
    }
  },
  setup(s) {
    const t = s, i = I(() => {
      let e = ["iconfont", t.name];
      return t.class && (e = [...e, ...t.class.split(" ").filter((l) => l)]), e;
    });
    return (e, l) => (C(), A("i", P(e.$attr, { class: w(i) }), null, 16));
  }
}), E = /* @__PURE__ */ L(W, [["__scopeId", "data-v-dcc68724"]]);
const Y = { class: "vtc-container" }, J = ["src", "width", "height"], K = ["width", "height"], Q = {
  name: "x-video-to-char"
}, X = /* @__PURE__ */ Object.assign(Q, {
  props: {
    canvasBC: {
      type: String,
      default: "#000"
    },
    sourceURL: {
      type: String,
      default: ""
    },
    size: {
      type: Object,
      default: {
        width: 200,
        height: 400
      }
    },
    charList: {
      type: Array,
      default: [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z"
      ]
    },
    random: {
      type: Boolean,
      default: !0
    },
    colorful: {
      type: Boolean,
      default: !0
    }
  },
  setup(s) {
    const t = s;
    V((a) => ({
      "94dd5522": w(S).height,
      b8d07f04: w(S).width,
      "80921a46": t.canvasBC,
      "4456889f": s.canvasBC
    }));
    const i = _(!1), e = _(null), l = _(null), r = _(null), x = _(null), z = _(1);
    let $ = null, h = null;
    const B = (a) => {
      switch (a) {
        case 0:
          e.value.play(), i.value = !0;
          break;
        case 1:
          e.value.pause(), i.value = !1;
          break;
      }
    }, M = (a) => {
      const n = a.data, o = a.width, b = a.height, v = [];
      for (let c = 0; c < b; c++) {
        const p = [];
        for (let u = 0; u < o; u++) {
          const m = n[(o * c + u) * 4 + 0], y = n[(o * c + u) * 4 + 1], g = n[(o * c + u) * 4 + 2], N = m * 0.299 + g * 0.587 + y * 0.114;
          p.push({ gray: N, R: m, G: y, B: g });
        }
        v.push(p);
      }
      let d = t.charList;
      t.colorful || (d = ["#", "&", "$", "*", "!", ".", " "]);
      let f = 0;
      return v.map((c) => c.map(({ gray: p, R: u, G: m, B: y }) => {
        let g = d[f];
        return !t.colorful || t.colorful && t.random ? g = d[Math.floor(p / 256 * d.length)] : g = d[f], f < d.length - 1 ? f++ : f = 0, { txt: g, R: u, G: m, B: y };
      }));
    }, T = () => {
      h.clearRect(
        0,
        0,
        r.value.width,
        r.value.height
      ), $.drawImage(
        e.value,
        0,
        0,
        l.value.width,
        l.value.height
      );
      const a = $.getImageData(
        0,
        0,
        l.value.width,
        l.value.height
      ), n = M(a);
      n.forEach((o, b) => {
        const v = Math.floor(r.value.width / o.length), d = Math.floor(
          (t.size.height - n.length * v) / 2
        );
        h.font = `${v}px arial`, o.forEach((f, c) => {
          const { txt: p, R: u, G: m, B: y } = f;
          t.colorful ? h.fillStyle = `rgb(${u},${m},${y})` : h.fillStyle = "#000", h.fillText(
            p,
            v * c,
            v * b + d
          );
        });
      });
    }, F = () => {
      const a = (n) => () => {
        console.log(111), z.value = n;
      };
      e.value.addEventListener(
        "play",
        () => {
          l.value.width = 50, l.value.height = 50 / 1.5 * e.value.videoHeight / e.value.videoWidth, r.value.addEventListener("mouseenter", a("flex"), !1), x.value.addEventListener("mouseenter", a("flex"), !1), r.value.addEventListener("mouseout", a("none"), !1), x.value.addEventListener("mouseout", a("none"), !1), a("none")();
          const n = () => {
            const o = new CustomEvent("render");
            e.value.dispatchEvent(o), !e.value.ended && !e.value.paused && requestAnimationFrame(n);
          };
          requestAnimationFrame(n);
        },
        !1
      ), e.value.addEventListener(
        "render",
        () => {
          T();
        },
        !1
      ), e.value.addEventListener(
        "ended",
        () => {
          r.value.removeEventListener(
            "mouseenter",
            a("flex"),
            !1
          ), x.value.removeEventListener("mouseenter", a("flex"), !1), r.value.removeEventListener(
            "mouseout",
            a("none"),
            !1
          ), x.value.removeEventListener("mouseout", a("none"), !1), i.value = !1, a("flex")();
        },
        !1
      ), h = r.value.getContext("2d"), $ = l.value.getContext("2d"), e.value.crossOrigin = "", e.value.setAttribute("webkit-playsinline", "webkit-playsinline"), e.value.setAttribute("playsinline", "playsinline");
    };
    j(() => {
      F();
    });
    const S = I(() => ({
      width: t.size.width + "px",
      height: t.size.height + "px"
    }));
    return (a, n) => (C(), A("div", Y, [
      k("video", {
        class: "player",
        ref_key: "player",
        ref: e,
        src: s.sourceURL,
        width: s.size.width,
        height: s.size.height,
        onEnded: n[0] || (n[0] = (o) => i.value = !1)
      }, null, 40, J),
      k("canvas", {
        ref_key: "handleDataCanvas",
        ref: l,
        style: { display: "none" }
      }, null, 512),
      k("canvas", {
        ref_key: "displayCanvas",
        ref: r,
        class: "displayCanvas",
        width: s.size.width,
        height: s.size.height
      }, null, 8, K),
      k("div", {
        class: "mask",
        ref_key: "mask",
        ref: x,
        style: G({ display: z.value })
      }, [
        i.value ? (C(), D(w(E), {
          key: 1,
          name: "icon-24gf-pauseCircle",
          onClick: n[2] || (n[2] = (o) => B(1)),
          class: "controls"
        })) : (C(), D(w(E), {
          key: 0,
          name: "icon-24gf-play",
          onClick: n[1] || (n[1] = (o) => B(0)),
          class: "controls"
        }))
      ], 4)
    ]));
  }
}), R = /* @__PURE__ */ L(X, [["__scopeId", "data-v-6a4911bb"]]), Z = [O, R, E], te = {
  install: (s) => {
    Z.forEach((t) => {
      s.component(t.name, t);
    });
  }
}, ae = O, ne = R, se = E;
export {
  te as default,
  ae as pictureToChar,
  ne as videoToChar,
  se as xIcon
};
