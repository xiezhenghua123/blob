if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise((async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},s=(s,a)=>{Promise.all(s.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(s)};self.define=(s,r,i)=>{a[s]||(a[s]=Promise.resolve().then((()=>{let a={};const d={uri:location.origin+s.slice(1)};return Promise.all(r.map((s=>{switch(s){case"exports":return a;case"module":return d;default:return e(s)}}))).then((e=>{const s=i(...e);return a.default||(a.default=s),a}))})))}}define("./service-worker.js",["./workbox-c81aca33"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.f0cabb10.css",revision:"b30fbd59b6923d1bfc4606ddef5089a3"},{url:"assets/img/danger-dark.7b1d6aa1.svg",revision:"7b1d6aa1bdcf013d0edfe316ab770f8e"},{url:"assets/img/danger.b143eda2.svg",revision:"b143eda243548a9982491dca4c81eed5"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/info-dark.f8a43cf6.svg",revision:"f8a43cf67fa96a27a078530a3a43253c"},{url:"assets/img/info.88826912.svg",revision:"88826912d81d91c9e2d03164cd1481a1"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.075a244c.svg",revision:"075a244c83d1403c167defe81b4d7fe7"},{url:"assets/img/tip.a2b80aa5.svg",revision:"a2b80aa50b769a26da12fe352322a657"},{url:"assets/img/warning-dark.aac7e30c.svg",revision:"aac7e30c5fafc6748e21f7a9ef546698"},{url:"assets/img/warning.ec428b6d.svg",revision:"ec428b6d6d45ac5d0c610f08d757f40f"},{url:"assets/js/13.aa16bf78.js",revision:"d0b3ad4003c2db3db4265b23c7b18e37"},{url:"assets/js/app.2d94863a.js",revision:"9f89f840e7cc02207cb8d58893aa105b"},{url:"assets/js/layout-Blog.c30fed17.js",revision:"53f7f5286f18c49e318338c764275255"},{url:"assets/js/layout-Layout.3ec9f78c.js",revision:"3287ba487e673d509e3c03f72535de15"},{url:"assets/js/layout-NotFound.0ad381a1.js",revision:"75f7d77e8ade684fd9f1328b3786cae5"},{url:"assets/js/layout-Slide.586b9aa7.js",revision:"f2474bc6837919ce1b887a2f159ecb7e"},{url:"assets/js/page--0af55a62.707de27d.js",revision:"1f6d2e125ea9f62d446e973dec01ebae"},{url:"assets/js/page--29cb792c.3afaf147.js",revision:"aa23e173e31d96c7840b01c2c3b9f281"},{url:"assets/js/page--342f114a.14746131.js",revision:"b58043b44fbbc5a0f539050f29c3012f"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.842ba355.js",revision:"35c1d9768027e2dec6205823dd83eae4"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound~layout-Slide.a1995626.js",revision:"3921fa77d868d00951f2f38b6a7eb172"},{url:"assets/js/vendors~layout-Layout.0da52220.js",revision:"f2df441bc1140dc47a24df55c905e431"},{url:"assets/js/vendors~photo-swipe.aeca08c2.js",revision:"768d5ec87c7d5de27020f8a85d3b8766"},{url:"assets/fonts/element-icons.535877f5.woff",revision:"535877f50039c0cb49a6196a5b7517cd"},{url:"assets/fonts/element-icons.732389de.ttf",revision:"732389ded34cb9c52dd88271f1345af9"},{url:"404.html",revision:"47e72904dc7d0ec30171fdc70c981977"},{url:"article/array/index.html",revision:"c6b32a164ee4cce0154b2b4fef55f120"},{url:"article/array/vuepress/firstStudy/index.html",revision:"e36533c742ac1a54864ab62decb1528c"},{url:"article/index.html",revision:"5de3694d98ed0649fab0e01e8223af4d"},{url:"category/index.html",revision:"ee11e676e6ddf693caeaa825988f4547"},{url:"category/vuepress/index.html",revision:"cafd588d69435b5c15f385bf101ac5f0"},{url:"encrypt/index.html",revision:"b5b54a5efe6e0201f41a723749f288c7"},{url:"index.html",revision:"5632e07391278328eab75a8d8f85d7e1"},{url:"slide/index.html",revision:"8fa4a45b21b6acff0d143a5c430c3efa"},{url:"star/index.html",revision:"8df5e21be966377d1253df7fe81e8efb"},{url:"tag/index.html",revision:"be8ed7f23c096c242f47f28b23f5591b"},{url:"timeline/index.html",revision:"b7d82613650dba2eab8a4bb7ee694b81"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
addEventListener("message", (event) => {
  const replyPort = event.ports[0];
  const message = event.data;
  if (replyPort && message && message.type === "skip-waiting")
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        (error) => replyPort.postMessage({ error })
      )
    );
});
