import { computed as I, openBlock as k, createElementBlock as A, mergeProps as F, unref as w, useCssVars as N, ref as _, onMounted as X, createElementVNode as C, normalizeStyle as j, createBlock as D } from "vue";
const b = (s, t) => {
  const i = s.__vccOpts || s;
  for (const [e, l] of t)
    i[e] = l;
  return i;
}, G = {
  name: "x-picture-to-char"
};
function U(s, t, i, e, l, r) {
  return "picture-to-char";
}
const O = /* @__PURE__ */ b(G, [["render", U]]);
const q = {
  name: "x-icon"
}, H = /* @__PURE__ */ Object.assign(q, {
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
    return (e, l) => (k(), A("i", F(e.$attr, { class: w(i) }), null, 16));
  }
}), E = /* @__PURE__ */ b(H, [["__scopeId", "data-v-dcc68724"]]);
const W = { class: "vtc-container" }, Y = ["src", "width", "height", "muted"], J = ["width", "height"], K = {
  name: "x-video-to-char"
}, Q = /* @__PURE__ */ Object.assign(K, {
  props: {
    muted: {
      type: Boolean,
      default: !0
    },
    canvasBC: {
      type: String,
      default: "#000"
    },
    charColor: {
      type: String,
      default: "#fff"
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
    N((a) => ({
      "1f9274da": w(S).height,
      "4ee0f09a": w(S).width,
      "29b81248": t.canvasBC,
      e05b576c: s.canvasBC
    }));
    const i = _(!1), e = _(null), l = _(null), r = _(null), x = _(null), B = _(1);
    let $ = null, h = null;
    const z = (a) => {
      switch (a) {
        case 0:
          e.value.play(), i.value = !0;
          break;
        case 1:
          e.value.pause(), i.value = !1;
          break;
      }
    }, M = (a) => {
      const n = a.data, o = a.width, L = a.height, f = [];
      for (let c = 0; c < L; c++) {
        const p = [];
        for (let u = 0; u < o; u++) {
          const m = n[(o * c + u) * 4 + 0], y = n[(o * c + u) * 4 + 1], g = n[(o * c + u) * 4 + 2], V = m * 0.299 + g * 0.587 + y * 0.114;
          p.push({ gray: V, R: m, G: y, B: g });
        }
        f.push(p);
      }
      let d = t.charList;
      t.colorful || (d = ["#", "&", "$", "*", "!", ".", " "]);
      let v = 0;
      return f.map((c) => c.map(({ gray: p, R: u, G: m, B: y }) => {
        let g = d[v];
        return !t.colorful || t.colorful && t.random ? g = d[Math.floor(p / 256 * d.length)] : g = d[v], v < d.length - 1 ? v++ : v = 0, { txt: g, R: u, G: m, B: y };
      }));
    }, P = () => {
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
      n.forEach((o, L) => {
        const f = Math.floor(r.value.width / o.length), d = Math.floor(
          (t.size.height - n.length * f) / 2
        );
        h.font = `${f}px arial`, o.forEach((v, c) => {
          const { txt: p, R: u, G: m, B: y } = v;
          t.colorful ? h.fillStyle = `rgb(${u},${m},${y})` : h.fillStyle = t.charColor, h.fillText(
            p,
            f * c,
            f * L + d
          );
        });
      });
    }, T = () => {
      const a = (n) => () => {
        console.log(111), B.value = n;
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
          P();
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
    X(() => {
      T();
    });
    const S = I(() => ({
      width: t.size.width + "px",
      height: t.size.height + "px"
    }));
    return (a, n) => (k(), A("div", W, [
      C("video", {
        class: "player",
        ref_key: "player",
        ref: e,
        src: s.sourceURL,
        width: s.size.width,
        height: s.size.height,
        onEnded: n[0] || (n[0] = (o) => i.value = !1),
        muted: s.muted
      }, null, 40, Y),
      C("canvas", {
        ref_key: "handleDataCanvas",
        ref: l,
        style: { display: "none" }
      }, null, 512),
      C("canvas", {
        ref_key: "displayCanvas",
        ref: r,
        class: "displayCanvas",
        width: s.size.width,
        height: s.size.height
      }, null, 8, J),
      C("div", {
        class: "mask",
        ref_key: "mask",
        ref: x,
        style: j({ display: B.value })
      }, [
        i.value ? (k(), D(w(E), {
          key: 1,
          name: "icon-24gf-pauseCircle",
          onClick: n[2] || (n[2] = (o) => z(1)),
          class: "controls"
        })) : (k(), D(w(E), {
          key: 0,
          name: "icon-24gf-play",
          onClick: n[1] || (n[1] = (o) => z(0)),
          class: "controls"
        }))
      ], 4)
    ]));
  }
}), R = /* @__PURE__ */ b(Q, [["__scopeId", "data-v-76fb6897"]]), Z = [O, R, E], te = {
  install: (s) => {
    Z.forEach((t) => {
      s.component(t.name, t);
    });
  }
}, ae = O, ne = R, se = E;
export {
  se as XIcon,
  ae as XPictureToChar,
  ne as XVideoToChar,
  te as default
};
