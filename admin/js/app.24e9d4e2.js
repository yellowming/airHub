(function(e){function n(n){for(var r,a,u=n[0],i=n[1],s=n[2],d=0,f=[];d<u.length;d++)a=u[d],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&f.push(c[a][0]),c[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);h&&h(n);while(f.length)f.shift()();return o.push.apply(o,s||[]),t()}function t(){for(var e,n=0;n<o.length;n++){for(var t=o[n],r=!0,a=1;a<t.length;a++){var u=t[a];0!==c[u]&&(r=!1)}r&&(o.splice(n--,1),e=i(i.s=t[0]))}return e}var r={},a={app:0},c={app:0},o=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-05d85960":"9f0f54c8","chunk-0aedeeac":"5a92fed2","chunk-a292181c":"7978700c","chunk-79717ce8":"fba7ef1d","chunk-6568fbe1":"bf8a7e32","chunk-edda9748":"fc04dea8","chunk-163b2242":"eee1954f","chunk-14c46b34":"a93d490d","chunk-4f709abd":"5d9a0ce8","chunk-e2963a38":"4525cc35"}[e]+".js"}function i(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-05d85960":1,"chunk-0aedeeac":1,"chunk-a292181c":1,"chunk-79717ce8":1,"chunk-6568fbe1":1,"chunk-edda9748":1,"chunk-163b2242":1,"chunk-14c46b34":1,"chunk-4f709abd":1,"chunk-e2963a38":1};a[e]?n.push(a[e]):0!==a[e]&&t[e]&&n.push(a[e]=new Promise((function(n,t){for(var r="css/"+({}[e]||e)+"."+{"chunk-05d85960":"1e157622","chunk-0aedeeac":"8e85b3f4","chunk-a292181c":"b541a2c8","chunk-79717ce8":"a365ba25","chunk-6568fbe1":"f99d6b16","chunk-edda9748":"e266a59a","chunk-163b2242":"65482e07","chunk-14c46b34":"6fdb1e21","chunk-4f709abd":"6fdb1e21","chunk-e2963a38":"f8f0be39"}[e]+".css",c=i.p+r,o=document.getElementsByTagName("link"),u=0;u<o.length;u++){var s=o[u],d=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(d===r||d===c))return n()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){s=f[u],d=s.getAttribute("data-href");if(d===r||d===c)return n()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=n,h.onerror=function(n){var r=n&&n.target&&n.target.src||c,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete a[e],h.parentNode.removeChild(h),t(o)},h.href=c;var l=document.getElementsByTagName("head")[0];l.appendChild(h)})).then((function(){a[e]=0})));var r=c[e];if(0!==r)if(r)n.push(r[2]);else{var o=new Promise((function(n,t){r=c[e]=[n,t]}));n.push(r[2]=o);var s,d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=u(e);var f=new Error;s=function(n){d.onerror=d.onload=null,clearTimeout(h);var t=c[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,t[1](f)}c[e]=void 0}};var h=setTimeout((function(){s({type:"timeout",target:d})}),12e4);d.onerror=d.onload=s,document.head.appendChild(d)}return Promise.all(n)},i.m=e,i.c=r,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/admin/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=n,s=s.slice();for(var f=0;f<s.length;f++)n(s[f]);var h=d;o.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"1a5d":function(e,n,t){var r={"./404.vue":["8cdb","chunk-0aedeeac","chunk-e2963a38"],"./Home.vue":["bb51","chunk-05d85960"],"./Login.vue":["a55b","chunk-0aedeeac","chunk-a292181c","chunk-edda9748","chunk-163b2242"],"./Main.vue":["cd56","chunk-0aedeeac","chunk-a292181c","chunk-79717ce8","chunk-6568fbe1"],"./Role.vue":["c338","chunk-0aedeeac","chunk-a292181c","chunk-edda9748","chunk-79717ce8","chunk-14c46b34"],"./Router.vue":["53af"],"./User/index.vue":["7368","chunk-0aedeeac","chunk-a292181c","chunk-edda9748","chunk-79717ce8","chunk-4f709abd"]};function a(e){if(!t.o(r,e))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=r[e],a=n[0];return Promise.all(n.slice(1).map(t.e)).then((function(){return t(a)}))}a.keys=function(){return Object.keys(r)},a.id="1a5d",e.exports=a},3257:function(e,n,t){"use strict";t.d(n,"b",(function(){return a}));t("d3b7");function r(e){return function(n){return t("1a5d")("./".concat(e,".vue")).then(n)}}var a={path:"dashboard",component:r("Home"),name:"Home",meta:{title:"首页",icon:"mdi-home",menu:!0}},c=[{path:"",redirect:"/dashboard"},a,{path:"system",component:r("Router"),meta:{title:"系统设置",icon:"mdi-tools",menu:!0},children:[{path:"",component:r("Role"),name:"Role",meta:{title:"角色管理",icon:"mdi-android-messages",menu:!0}}]},{path:"user",component:r("User/index"),name:"User",meta:{title:"用户",icon:"mdi-account-supervisor",menu:!0}},{path:"*",component:r("404")}];n["a"]=c},4360:function(e,n,t){"use strict";t("96cf");var r=t("89ba"),a=t("2b0e"),c=t("2f62"),o=t("d677");a["a"].use(c["a"]),n["a"]=new c["a"].Store({state:{UserToken:localStorage.getItem("user_token"),User:null},mutations:{setUserToken:function(e,n){localStorage.setItem("user_token",n),e.UserToken=n},setUser:function(e,n){e.User=n}},actions:{getUser:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(n){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t=n.commit,o["a"].get("auth/user").then((function(e){t("setUser",e.data)})).catch((function(e){console.log(e)}));case 2:case"end":return e.stop()}}),e)})));function n(n){return e.apply(this,arguments)}return n}()},modules:{}})},"53af":function(e,n,t){"use strict";t.r(n);var r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("router-view")],1)},a=[],c=t("2877"),o={},u=Object(c["a"])(o,r,a,!1,null,null,null);n["default"]=u.exports},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("2b0e"),a=t("d677");Plugin.install=function(e){e.axios=a["a"],window.axios=a["a"],Object.defineProperties(e.prototype,{axios:{get:function(){return a["a"]}},$axios:{get:function(){return a["a"]}}})},r["a"].use(Plugin);var c=Plugin,o=t("53af"),u=t("f309");t("9a27");r["a"].use(u["a"]);var i=new u["a"]({icons:{iconfont:"mdi"},theme:{dark:!1}}),s=t("a18c"),d=t("4360");r["a"].config.productionTip=!1,new r["a"]({vuetify:i,axios:c,router:s["a"],store:d["a"],render:function(e){return e(o["default"])}}).$mount("#app")},a18c:function(e,n,t){"use strict";t("a4d3"),t("4de4"),t("4160"),t("b0c0"),t("e439"),t("dbb4"),t("b64b"),t("d3b7"),t("159b");var r=t("2fa7"),a=t("2b0e"),c=t("8c4f"),o=t("4360"),u=t("3257"),i=t("d677");function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(t,!0).forEach((function(n){Object(r["a"])(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}a["a"].use(c["a"]);var f=[{path:"/login",name:"Login",component:function(e){return Promise.all([t.e("chunk-0aedeeac"),t.e("chunk-a292181c"),t.e("chunk-edda9748"),t.e("chunk-163b2242")]).then(t.bind(null,"a55b")).then(e)}}],h=[{path:"/",children:u["a"],component:function(e){return Promise.all([t.e("chunk-0aedeeac"),t.e("chunk-a292181c"),t.e("chunk-79717ce8"),t.e("chunk-6568fbe1")]).then(t.bind(null,"cd56")).then(e)}}],l=new c["a"]({base:"/admin/",routes:f});l.beforeEach((function(e,n,t){var r="Login"===e.name;if(!o["a"].state.UserToken||""===o["a"].state.UserToken)return r?t():t({name:"Login"});o["a"].state.User?r?t({path:"/"}):t():i["a"].get("auth/user").then((function(n){o["a"].commit("setUser",n.data),l.addRoutes(h),t(d({},e,{replace:!0}))})).catch((function(e){o["a"].commit("setUserToken",""),t({name:"Login"})}))})),l.onError((function(e){console.log(e)})),n["a"]=l},d677:function(e,n,t){"use strict";(function(e){t("d3b7");var r=t("bc3a"),a=t.n(r),c=t("4360"),o=t("a18c");a.a.defaults.headers.common["Authorization"]=c["a"].state.UserToken,a.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded";var u={baseURL:"production"===Object({NODE_ENV:"production",BASE_URL:"/admin/"})?e.baseURL:"http://airHub.test",timeout:6e4,withCredentials:!1},i=a.a.create(u);i.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),i.interceptors.response.use((function(e){return e}),(function(e){return 401===e.response.status&&(c["a"].commit("setUserToken",""),o["a"].push({name:"Login"})),Promise.reject(e)})),n["a"]=i}).call(this,t("4362"))}});
//# sourceMappingURL=app.24e9d4e2.js.map