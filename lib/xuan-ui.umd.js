(function(c,e){typeof exports=="object"&&typeof module<"u"?e(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],e):(c=typeof globalThis<"u"?globalThis:c||self,e(c.xuanUI={},c.Vue))})(this,function(c,e){"use strict";const C=(s,n)=>{const r=s.__vccOpts||s;for(const[t,o]of n)r[t]=o;return r},T={name:"x-picture-to-char"};function V(s,n,r,t,o,d){return"picture-to-char"}const B=C(T,[["render",V]]),q="",w=C(Object.assign({name:"x-icon"},{props:{name:{type:String,defalut:""},class:{type:String,defalut:" "}},setup(s){const n=s,r=e.computed(()=>{let t=["iconfont",n.name];return n.class&&(t=[...t,...n.class.split(" ").filter(o=>o)]),t});return(t,o)=>(e.openBlock(),e.createElementBlock("i",e.mergeProps(t.$attr,{class:e.unref(r)}),null,16))}}),[["__scopeId","data-v-dcc68724"]]),W="",D={class:"vtc-container"},I=["src","width","height","muted"],M=["width","height"],L=C(Object.assign({name:"x-video-to-char"},{props:{muted:{type:Boolean,default:!0},canvasBC:{type:String,default:"#000"},charColor:{type:String,default:"#fff"},sourceURL:{type:String,default:""},size:{type:Object,default:{width:200,height:400}},charList:{type:Array,default:["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]},random:{type:Boolean,default:!0},colorful:{type:Boolean,default:!0}},setup(s){const n=s;e.useCssVars(a=>({"67d844c4":e.unref(z).height,"35bb1289":e.unref(z).width,"71fde232":n.canvasBC,"95f64898":s.canvasBC}));const r=e.ref(!1),t=e.ref(null),o=e.ref(null),d=e.ref(null),k=e.ref(null),b=e.ref(1);let E=null,m=null;const S=a=>{switch(a){case 0:t.value.play(),r.value=!0;break;case 1:t.value.pause(),r.value=!1;break}},R=a=>{const l=a.data,i=a.width,$=a.height,p=[];for(let u=0;u<$;u++){const _=[];for(let f=0;f<i;f++){const y=l[(i*u+f)*4+0],g=l[(i*u+f)*4+1],x=l[(i*u+f)*4+2],U=y*.299+x*.587+g*.114;_.push({gray:U,R:y,G:g,B:x})}p.push(_)}let h=n.charList;n.colorful||(h=["#","&","$","*","!","."," "]);let v=0;return p.map(u=>u.map(({gray:_,R:f,G:y,B:g})=>{let x=h[v];return!n.colorful||n.colorful&&n.random?x=h[Math.floor(_/256*h.length)]:x=h[v],v<h.length-1?v++:v=0,{txt:x,R:f,G:y,B:g}}))},j=()=>{m.clearRect(0,0,d.value.width,d.value.height),E.drawImage(t.value,0,0,o.value.width,o.value.height);const a=E.getImageData(0,0,o.value.width,o.value.height),l=R(a);l.forEach((i,$)=>{const p=Math.floor(d.value.width/i.length),h=Math.floor((n.size.height-l.length*p)/2);m.font=`${p}px arial`,i.forEach((v,u)=>{const{txt:_,R:f,G:y,B:g}=v;n.colorful?m.fillStyle=`rgb(${f},${y},${g})`:m.fillStyle=n.charColor,m.fillText(_,p*u,p*$+h)})})},F=()=>{const a=l=>()=>{console.log(111),b.value=l};t.value.addEventListener("play",()=>{o.value.width=50,o.value.height=50/1.5*t.value.videoHeight/t.value.videoWidth,d.value.addEventListener("mouseenter",a("flex"),!1),k.value.addEventListener("mouseenter",a("flex"),!1),d.value.addEventListener("mouseout",a("none"),!1),k.value.addEventListener("mouseout",a("none"),!1),a("none")();const l=()=>{const i=new CustomEvent("render");t.value.dispatchEvent(i),!t.value.ended&&!t.value.paused&&requestAnimationFrame(l)};requestAnimationFrame(l)},!1),t.value.addEventListener("render",()=>{j()},!1),t.value.addEventListener("ended",()=>{d.value.removeEventListener("mouseenter",a("flex"),!1),k.value.removeEventListener("mouseenter",a("flex"),!1),d.value.removeEventListener("mouseout",a("none"),!1),k.value.removeEventListener("mouseout",a("none"),!1),r.value=!1,a("flex")()},!1),m=d.value.getContext("2d"),E=o.value.getContext("2d"),t.value.crossOrigin="",t.value.setAttribute("webkit-playsinline","webkit-playsinline"),t.value.setAttribute("playsinline","playsinline")};e.onMounted(()=>{F()});const z=e.computed(()=>({width:n.size.width+"px",height:n.size.height+"px"}));return(a,l)=>(e.openBlock(),e.createElementBlock("div",D,[e.createElementVNode("video",{class:"player",ref_key:"player",ref:t,src:s.sourceURL,width:s.size.width,height:s.size.height,onEnded:l[0]||(l[0]=i=>r.value=!1),muted:s.muted},null,40,I),e.createElementVNode("canvas",{ref_key:"handleDataCanvas",ref:o,style:{display:"none"}},null,512),e.createElementVNode("canvas",{ref_key:"displayCanvas",ref:d,class:"displayCanvas",width:s.size.width,height:s.size.height},null,8,M),e.createElementVNode("div",{class:"mask",ref_key:"mask",ref:k,style:e.normalizeStyle({display:b.value})},[r.value?(e.openBlock(),e.createBlock(e.unref(w),{key:1,name:"icon-24gf-pauseCircle",onClick:l[2]||(l[2]=i=>S(1)),class:"controls"})):(e.openBlock(),e.createBlock(e.unref(w),{key:0,name:"icon-24gf-play",onClick:l[1]||(l[1]=i=>S(0)),class:"controls"}))],4)]))}}),[["__scopeId","data-v-a4541c45"]]),N=[B,L,w],O={install:s=>{N.forEach(n=>{s.component(n.name,n)})}},P=B,X=L,A=w;c.XIcon=A,c.XPictureToChar=P,c.XVideoToChar=X,c.default=O,Object.defineProperties(c,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});