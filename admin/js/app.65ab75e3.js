(function(e){function n(n){for(var r,c,o=n[0],i=n[1],f=n[2],d=0,s=[];d<o.length;d++)c=o[d],Object.prototype.hasOwnProperty.call(u,c)&&u[c]&&s.push(u[c][0]),u[c]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);h&&h(n);while(s.length)s.shift()();return a.push.apply(a,f||[]),t()}function t(){for(var e,n=0;n<a.length;n++){for(var t=a[n],r=!0,c=1;c<t.length;c++){var o=t[c];0!==u[o]&&(r=!1)}r&&(a.splice(n--,1),e=i(i.s=t[0]))}return e}var r={},c={app:0},u={app:0},a=[];function o(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-2d208c4d":"507398e1","chunk-2d21069b":"482ee9be","chunk-3b8c8d23":"1b7f898d","chunk-88cfa5f6":"ae843093","chunk-3df649ce":"340cf098","chunk-3d0e4e67":"908e7e0c","chunk-1db3d7ec":"4eded54b","chunk-9df89dea":"126e2c8d","chunk-bff889b8":"c13a8ad7","chunk-1c7ff86d":"6355d920","chunk-1da70908":"d3038dd0","chunk-249423da":"1c5c5800","chunk-54b01e9c":"e8378845","chunk-7e8b682e":"41685cf9","chunk-9e84349c":"b2f85bf2","chunk-4673695f":"55cf3e43","chunk-33b73a44":"020492d0","chunk-7d98c418":"d294c505","chunk-391647a8":"1a831ea1","chunk-2abe5fb4":"a850435a","chunk-7a6aeae8":"534b0689"}[e]+".js"}function i(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-3b8c8d23":1,"chunk-88cfa5f6":1,"chunk-3df649ce":1,"chunk-3d0e4e67":1,"chunk-1db3d7ec":1,"chunk-9df89dea":1,"chunk-bff889b8":1,"chunk-1c7ff86d":1,"chunk-1da70908":1,"chunk-249423da":1,"chunk-54b01e9c":1,"chunk-7e8b682e":1,"chunk-9e84349c":1,"chunk-4673695f":1,"chunk-33b73a44":1,"chunk-7d98c418":1,"chunk-391647a8":1,"chunk-2abe5fb4":1,"chunk-7a6aeae8":1};c[e]?n.push(c[e]):0!==c[e]&&t[e]&&n.push(c[e]=new Promise((function(n,t){for(var r="css/"+({}[e]||e)+"."+{"chunk-2d208c4d":"31d6cfe0","chunk-2d21069b":"31d6cfe0","chunk-3b8c8d23":"f1e03560","chunk-88cfa5f6":"68c3de41","chunk-3df649ce":"b2344578","chunk-3d0e4e67":"68d7ba72","chunk-1db3d7ec":"c3b195c9","chunk-9df89dea":"bd0729ae","chunk-bff889b8":"8ae8dce3","chunk-1c7ff86d":"289c8444","chunk-1da70908":"194017f1","chunk-249423da":"f70fd853","chunk-54b01e9c":"e1284159","chunk-7e8b682e":"7f98f0ce","chunk-9e84349c":"60df9448","chunk-4673695f":"729ec327","chunk-33b73a44":"35b17141","chunk-7d98c418":"1d930d55","chunk-391647a8":"b696f2ab","chunk-2abe5fb4":"ec6cd76b","chunk-7a6aeae8":"7c534b1f"}[e]+".css",u=i.p+r,a=document.getElementsByTagName("link"),o=0;o<a.length;o++){var f=a[o],d=f.getAttribute("data-href")||f.getAttribute("href");if("stylesheet"===f.rel&&(d===r||d===u))return n()}var s=document.getElementsByTagName("style");for(o=0;o<s.length;o++){f=s[o],d=f.getAttribute("data-href");if(d===r||d===u)return n()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=n,h.onerror=function(n){var r=n&&n.target&&n.target.src||u,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=r,delete c[e],h.parentNode.removeChild(h),t(a)},h.href=u;var l=document.getElementsByTagName("head")[0];l.appendChild(h)})).then((function(){c[e]=0})));var r=u[e];if(0!==r)if(r)n.push(r[2]);else{var a=new Promise((function(n,t){r=u[e]=[n,t]}));n.push(r[2]=a);var f,d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=o(e);var s=new Error;f=function(n){d.onerror=d.onload=null,clearTimeout(h);var t=u[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),c=n&&n.target&&n.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+c+")",s.name="ChunkLoadError",s.type=r,s.request=c,t[1](s)}u[e]=void 0}};var h=setTimeout((function(){f({type:"timeout",target:d})}),12e4);d.onerror=d.onload=f,document.head.appendChild(d)}return Promise.all(n)},i.m=e,i.c=r,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/admin/",i.oe=function(e){throw console.error(e),e};var f=window["webpackJsonp"]=window["webpackJsonp"]||[],d=f.push.bind(f);f.push=n,f=f.slice();for(var s=0;s<f.length;s++)n(f[s]);var h=d;a.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"1a5d":function(e,n,t){var r={"./404.vue":["8cdb","chunk-88cfa5f6","chunk-4673695f","chunk-7a6aeae8"],"./Api/form.vue":["3219","chunk-88cfa5f6","chunk-3df649ce","chunk-3d0e4e67","chunk-bff889b8","chunk-7e8b682e"],"./Api/index.vue":["5efe","chunk-88cfa5f6","chunk-3df649ce","chunk-3d0e4e67","chunk-bff889b8","chunk-9e84349c"],"./Dashboard/index.vue":["c937","chunk-88cfa5f6","chunk-4673695f","chunk-1db3d7ec","chunk-7d98c418","chunk-2abe5fb4"],"./Group/index.vue":["53c0","chunk-3b8c8d23"],"./Login.vue":["a55b","chunk-88cfa5f6","chunk-3df649ce","chunk-4673695f","chunk-7d98c418","chunk-391647a8"],"./Main.vue":["cd56","chunk-88cfa5f6","chunk-3df649ce","chunk-3d0e4e67","chunk-bff889b8","chunk-1c7ff86d"],"./Profile/BaseInfo.vue":["b87f","chunk-2d21069b"],"./Profile/index.vue":["3853","chunk-88cfa5f6","chunk-3df649ce","chunk-3d0e4e67","chunk-1db3d7ec","chunk-9df89dea"],"./Role/form.vue":["47af","chunk-88cfa5f6","chunk-3df649ce","chunk-4673695f","chunk-33b73a44"],"./Role/index.vue":["2835","chunk-88cfa5f6","chunk-3df649ce","chunk-3d0e4e67","chunk-bff889b8","chunk-1da70908"],"./Router.vue":["53af"],"./User/Setting.vue":["a5cf","chunk-2d208c4d"],"./User/index.vue":["7368","chunk-88cfa5f6","chunk-3df649ce","chunk-3d0e4e67","chunk-bff889b8","chunk-249423da"],"./Video/index.vue":["4aa1","chunk-88cfa5f6","chunk-3df649ce","chunk-3d0e4e67","chunk-bff889b8","chunk-54b01e9c"]};function c(e){if(!t.o(r,e))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=r[e],c=n[0];return Promise.all(n.slice(1).map(t.e)).then((function(){return t(c)}))}c.keys=function(){return Object.keys(r)},c.id="1a5d",e.exports=c},"1a72":function(e,n,t){"use strict";t.d(n,"f",(function(){return u})),t.d(n,"i",(function(){return a})),t.d(n,"h",(function(){return o})),t.d(n,"b",(function(){return i})),t.d(n,"j",(function(){return f})),t.d(n,"c",(function(){return d})),t.d(n,"g",(function(){return s})),t.d(n,"k",(function(){return h})),t.d(n,"d",(function(){return l})),t.d(n,"e",(function(){return p})),t.d(n,"a",(function(){return k}));var r=t("d677"),c={profile:"/auth/profile",users:"/user",user:"/user/one",role:"/role",service:"/service",permission:"/permission",permissionNoPager:"/permission/no-pager",video:"/video",api:"/api/api"};function u(e){return Object(r["a"])({url:c.profile,method:"get",params:e})}function a(e){return Object(r["a"])({url:c.video,method:"get",params:e})}function o(e){return Object(r["a"])({url:c.users,method:"get",params:e})}function i(e){return Object(r["a"])({url:c.user,method:"post",data:e})}function f(e){return Object(r["a"])({url:c.user,method:"put",params:e})}function d(e){return Object(r["a"])({url:c.user,method:"delete",params:e})}function s(e){return Object(r["a"])({url:c.role,method:"get",params:e})}function h(e){return Object(r["a"])({url:c.role,method:"put",params:e})}function l(e){return Object(r["a"])({url:c.api,method:"get",params:e})}function p(e){return Object(r["a"])({url:"api/api/category",method:"get",params:e})}function k(e){return Object(r["a"])({url:"api/api",method:"post",data:e})}},3257:function(e,n,t){"use strict";t.d(n,"b",(function(){return c}));t("d3b7");function r(e){return function(n){return t("1a5d")("./".concat(e,".vue")).then(n)}}var c={path:"dashboard",component:r("Dashboard/index"),name:"Dashboard",meta:{title:"首页",icon:"mdi-home"}},u={path:"/profile",component:r("Profile/index"),name:"Profile",meta:{title:"个人中心",icon:"mdi-tools",hideMenu:!0}},a=[{path:"",redirect:c},c,u,{path:"/system",component:r("Router"),meta:{title:"系统设置",icon:"mdi-tools"},children:[{path:"/system/role",component:r("Router"),meta:{title:"角色管理",icon:"mdi-android-messages",hideChildren:!0},children:[{path:"edit/:id",component:r("Role/form"),name:"Role-edit",meta:{title:"修改"}},{path:"",component:r("Role/index"),name:"Role-list",meta:{title:"列表"}}]},{path:"groups",component:r("Group/index"),name:"Group",meta:{title:"分组管理",icon:"mdi-filter-variant"}}]},{path:"/user",component:r("User/index"),name:"User",meta:{title:"用户",icon:"mdi-account-supervisor"}},{path:"/videos",component:r("Video/index"),name:"VideoList",meta:{title:"视频列表",icon:"mdi-library-video"}},{path:"/apis",component:r("Router"),meta:{title:"API",icon:"mdi-api",hideChildren:!0},children:[{path:"",name:"API_LIST",component:r("Api/index"),meta:{title:"列表"}},{path:"add",name:"API_ADD",component:r("Api/form"),meta:{title:"新增"}}]},{path:"*",component:r("404")}];n["a"]=a},4360:function(e,n,t){"use strict";t("96cf");var r=t("89ba"),c=t("2b0e"),u=t("2f62"),a=t("d677");c["a"].use(u["a"]),n["a"]=new u["a"].Store({state:{UserToken:localStorage.getItem("user_token"),User:null,isDark:"true"===localStorage.getItem("isDark")},mutations:{setUserToken:function(e,n){localStorage.setItem("user_token",n),e.UserToken=n},setUser:function(e,n){e.User=n},setDark:function(e,n){localStorage.setItem("isDark",n),e.isDark=n}},actions:{getUser:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(n){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t=n.commit,a["a"].get("auth/user").then((function(e){t("setUser",e.data)})).catch((function(e){console.log(e)}));case 2:case"end":return e.stop()}}),e)})));function n(n){return e.apply(this,arguments)}return n}()},modules:{}})},"53af":function(e,n,t){"use strict";t.r(n);var r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("router-view")],1)},c=[],u=t("2877"),a={},o=Object(u["a"])(a,r,c,!1,null,null,null);n["default"]=o.exports},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("2b0e"),c=t("d677");Plugin.install=function(e){e.axios=c["a"],window.axios=c["a"],Object.defineProperties(e.prototype,{axios:{get:function(){return c["a"]}},$axios:{get:function(){return c["a"]}}})},r["a"].use(Plugin);var u=Plugin,a=t("53af"),o=t("f309"),i=(t("5363"),t("4360"));r["a"].use(o["a"]);var f=new o["a"]({icons:{iconfont:"mdi"},theme:{dark:i["a"].state.isDark}}),d=t("a18c");r["a"].config.productionTip=!1,new r["a"]({vuetify:f,axios:u,router:d["a"],store:i["a"],render:function(e){return e(a["default"])}}).$mount("#app")},a18c:function(e,n,t){"use strict";t("a4d3"),t("4de4"),t("4160"),t("b0c0"),t("e439"),t("dbb4"),t("b64b"),t("d3b7"),t("159b");var r=t("2fa7"),c=t("2b0e"),u=t("8c4f"),a=t("4360"),o=t("3257"),i=t("1a72");function f(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?f(t,!0).forEach((function(n){Object(r["a"])(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):f(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}c["a"].use(u["a"]);var s=[{path:"/login",name:"Login",component:function(e){return Promise.all([t.e("chunk-88cfa5f6"),t.e("chunk-3df649ce"),t.e("chunk-4673695f"),t.e("chunk-7d98c418"),t.e("chunk-391647a8")]).then(t.bind(null,"a55b")).then(e)}}],h=[{path:"/",children:o["a"],component:function(e){return Promise.all([t.e("chunk-88cfa5f6"),t.e("chunk-3df649ce"),t.e("chunk-3d0e4e67"),t.e("chunk-bff889b8"),t.e("chunk-1c7ff86d")]).then(t.bind(null,"cd56")).then(e)}}],l=new u["a"]({base:"/admin/",routes:s});l.beforeEach((function(e,n,t){var r="Login"===e.name;if(!a["a"].state.UserToken||""===a["a"].state.UserToken)return r?t():t({name:"Login"});a["a"].state.User?r?t({path:"/"}):t():Object(i["f"])().then((function(n){a["a"].commit("setUser",n.data),l.addRoutes(h),t(d({},e,{replace:!0}))})).catch((function(e){a["a"].commit("setUserToken",""),t({name:"Login"})}))})),l.onError((function(e){console.log(e)})),n["a"]=l},d677:function(e,n,t){"use strict";(function(e){t("d3b7");var r=t("bc3a"),c=t.n(r),u=t("4360"),a=t("a18c");c.a.defaults.headers.common["Authorization"]=u["a"].state.UserToken,c.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded";var o={baseURL:"production"===Object({NODE_ENV:"production",BASE_URL:"/admin/"})?e.baseURL:"http://airHub.test",timeout:6e4,withCredentials:!1},i=c.a.create(o);i.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),i.interceptors.response.use((function(e){return e}),(function(e){return 401===e.response.status&&(u["a"].commit("setUserToken",""),a["a"].push({name:"Login"})),Promise.reject(e)})),n["a"]=i}).call(this,t("4362"))}});
//# sourceMappingURL=app.65ab75e3.js.map