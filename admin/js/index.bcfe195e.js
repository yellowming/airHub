(function(e){function n(n){for(var c,a,u=n[0],i=n[1],s=n[2],f=0,h=[];f<u.length;f++)a=u[f],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&h.push(r[a][0]),r[a]=0;for(c in i)Object.prototype.hasOwnProperty.call(i,c)&&(e[c]=i[c]);d&&d(n);while(h.length)h.shift()();return o.push.apply(o,s||[]),t()}function t(){for(var e,n=0;n<o.length;n++){for(var t=o[n],c=!0,a=1;a<t.length;a++){var u=t[a];0!==r[u]&&(c=!1)}c&&(o.splice(n--,1),e=i(i.s=t[0]))}return e}var c={},a={index:0},r={index:0},o=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-2d2264de":"8017b630","chunk-4b560bc2":"5e8f7b5d","chunk-1be9a642":"1b2e0af5","chunk-6aecbb02":"d066f776","chunk-7c2ddc74":"bb1e2072","chunk-7d8f4487":"9cbe3bea","chunk-7f55f8fc":"05fcc38b","chunk-25cbfaa8":"772af323","chunk-0c456da7":"434988ad","chunk-239c26b1":"ab490bfc","chunk-371d675a":"515210b7","chunk-398066a6":"ba2f8c5b","chunk-6e9aa2b5":"24cf71fc","chunk-77fa4212":"5c4039df","chunk-80219d30":"351e0edf","chunk-fbb5078e":"c04e798a","chunk-4f3fe0fc":"a7abbaad","chunk-a1a7ecf4":"c139f001","chunk-ef748a08":"6c741249","chunk-f2d284f6":"62b3f402"}[e]+".js"}function i(n){if(c[n])return c[n].exports;var t=c[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-4b560bc2":1,"chunk-1be9a642":1,"chunk-6aecbb02":1,"chunk-7c2ddc74":1,"chunk-7d8f4487":1,"chunk-7f55f8fc":1,"chunk-25cbfaa8":1,"chunk-0c456da7":1,"chunk-239c26b1":1,"chunk-371d675a":1,"chunk-398066a6":1,"chunk-6e9aa2b5":1,"chunk-77fa4212":1,"chunk-80219d30":1,"chunk-fbb5078e":1,"chunk-4f3fe0fc":1,"chunk-a1a7ecf4":1,"chunk-f2d284f6":1};a[e]?n.push(a[e]):0!==a[e]&&t[e]&&n.push(a[e]=new Promise((function(n,t){for(var c="css/"+({}[e]||e)+"."+{"chunk-2d2264de":"31d6cfe0","chunk-4b560bc2":"ef9e7063","chunk-1be9a642":"e275a939","chunk-6aecbb02":"b786dd82","chunk-7c2ddc74":"1acc49dd","chunk-7d8f4487":"4575123c","chunk-7f55f8fc":"e4ebd349","chunk-25cbfaa8":"1358c843","chunk-0c456da7":"56f4000e","chunk-239c26b1":"f061be8d","chunk-371d675a":"de0c53de","chunk-398066a6":"780cae29","chunk-6e9aa2b5":"316b4675","chunk-77fa4212":"628d89f1","chunk-80219d30":"6de044e4","chunk-fbb5078e":"109b154f","chunk-4f3fe0fc":"5564efbe","chunk-a1a7ecf4":"8f10093b","chunk-ef748a08":"31d6cfe0","chunk-f2d284f6":"69193c41"}[e]+".css",r=i.p+c,o=document.getElementsByTagName("link"),u=0;u<o.length;u++){var s=o[u],f=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(f===c||f===r))return n()}var h=document.getElementsByTagName("style");for(u=0;u<h.length;u++){s=h[u],f=s.getAttribute("data-href");if(f===c||f===r)return n()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=n,d.onerror=function(n){var c=n&&n.target&&n.target.src||r,o=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=c,delete a[e],d.parentNode.removeChild(d),t(o)},d.href=r;var b=document.getElementsByTagName("head")[0];b.appendChild(d)})).then((function(){a[e]=0})));var c=r[e];if(0!==c)if(c)n.push(c[2]);else{var o=new Promise((function(n,t){c=r[e]=[n,t]}));n.push(c[2]=o);var s,f=document.createElement("script");f.charset="utf-8",f.timeout=120,i.nc&&f.setAttribute("nonce",i.nc),f.src=u(e);var h=new Error;s=function(n){f.onerror=f.onload=null,clearTimeout(d);var t=r[e];if(0!==t){if(t){var c=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;h.message="Loading chunk "+e+" failed.\n("+c+": "+a+")",h.name="ChunkLoadError",h.type=c,h.request=a,t[1](h)}r[e]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:f})}),12e4);f.onerror=f.onload=s,document.head.appendChild(f)}return Promise.all(n)},i.m=e,i.c=c,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var c in e)i.d(t,c,function(n){return e[n]}.bind(null,c));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],f=s.push.bind(s);s.push=n,s=s.slice();for(var h=0;h<s.length;h++)n(s[h]);var d=f;o.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"1a5d":function(e,n,t){var c={"./403.vue":["00a5","chunk-4b560bc2","chunk-7c2ddc74"],"./404.vue":["8cdb","chunk-4b560bc2","chunk-1be9a642","chunk-6aecbb02"],"./Api/form.vue":["3219","chunk-4b560bc2","chunk-7d8f4487","chunk-25cbfaa8","chunk-1be9a642","chunk-398066a6"],"./Api/index.vue":["5efe","chunk-4b560bc2","chunk-7d8f4487","chunk-25cbfaa8","chunk-1be9a642","chunk-6e9aa2b5"],"./Dashboard/index.vue":["c937","chunk-4b560bc2","chunk-7d8f4487","chunk-1be9a642","chunk-7f55f8fc"],"./Group/index.vue":["53c0","chunk-f2d284f6"],"./Login.vue":["a55b","chunk-4b560bc2","chunk-7d8f4487","chunk-25cbfaa8","chunk-1be9a642","chunk-80219d30"],"./Main.vue":["cd56","chunk-4b560bc2","chunk-7d8f4487","chunk-25cbfaa8","chunk-1be9a642","chunk-fbb5078e"],"./Profile/index.vue":["3853","chunk-4b560bc2","chunk-7d8f4487","chunk-25cbfaa8","chunk-1be9a642","chunk-0c456da7"],"./Role/form.vue":["47af","chunk-4b560bc2","chunk-7d8f4487","chunk-25cbfaa8","chunk-1be9a642","chunk-371d675a"],"./Role/index.vue":["2835","chunk-4b560bc2","chunk-7d8f4487","chunk-25cbfaa8","chunk-4f3fe0fc","chunk-a1a7ecf4"],"./Router.vue":["53af"],"./User/form.vue":["ae6c","chunk-4b560bc2","chunk-7d8f4487","chunk-25cbfaa8","chunk-4f3fe0fc","chunk-ef748a08"],"./User/index.vue":["7368","chunk-4b560bc2","chunk-7d8f4487","chunk-25cbfaa8","chunk-1be9a642","chunk-77fa4212"],"./Video/form.vue":["e7a7","chunk-2d2264de"],"./Video/index.vue":["4aa1","chunk-4b560bc2","chunk-7d8f4487","chunk-25cbfaa8","chunk-1be9a642","chunk-239c26b1"]};function a(e){if(!t.o(c,e))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=c[e],a=n[0];return Promise.all(n.slice(1).map(t.e)).then((function(){return t(a)}))}a.keys=function(){return Object.keys(c)},a.id="1a5d",e.exports=a},"1a72":function(e,n,t){"use strict";var c=t("d677");n["a"]={login:function(e){return Object(c["a"])({url:"/profile/token",method:"post",data:e})},getProfile:function(e){return Object(c["a"])({url:"/profile",method:"get",params:e})},editProfile:function(e){return Object(c["a"])({url:"/profile",method:"put",data:e})}}},3257:function(e,n,t){"use strict";t.d(n,"b",(function(){return a}));t("d3b7");function c(e){return function(n){t("1a5d")("./".concat(e,".vue")).then(n)}}var a={path:"dashboard",component:c("Dashboard/index"),name:"Dashboard",meta:{title:"首页",icon:"mdi-home"}},r={path:"/profile",component:c("Profile/index"),name:"Profile",meta:{title:"个人中心",icon:"mdi-tools",hideMenu:!0}},o=[{path:"",redirect:a},a,r,{path:"/system",component:c("Router"),meta:{title:"系统设置",icon:"mdi-tools"},children:[{path:"/system/role",component:c("Router"),meta:{title:"角色管理",icon:"mdi-android-messages",hideChildren:!0},children:[{path:"edit/:id",component:c("Role/form"),name:"Role-edit",meta:{title:"修改"}},{path:"",component:c("Role/index"),name:"Role-list"}]},{path:"groups",component:c("Group/index"),name:"Group",meta:{title:"分组管理",icon:"mdi-filter-variant"}}]},{path:"/user",component:c("Router"),meta:{title:"用户",icon:"mdi-account-supervisor",hideChildren:!0},children:[{path:"",component:c("User/index"),name:"USER_LIST"},{path:"add",component:c("User/form"),name:"USER_ADD",meta:{title:"新增"}},{path:"edit/:id",component:c("User/form"),name:"USER_EDIT",meta:{title:"修改"}}]},{path:"/videos",component:c("Video/index"),name:"VideoList",meta:{title:"视频列表",icon:"mdi-library-video",permissions:"VIDEO_LIST",hideChildren:!0},children:[{path:"add",component:c("Video/form"),name:"VIDEO_ADD",meta:{title:"新增"}}]},{path:"/apis",component:c("Router"),meta:{title:"API",icon:"mdi-api",hideChildren:!0},children:[{path:"",name:"API_LIST",component:c("Api/index"),meta:{title:"列表"}},{path:"add",name:"API_ADD",component:c("Api/form"),meta:{title:"新增"}},{path:"edit/:id",name:"API_EDIT",component:c("Api/form"),meta:{title:"编辑"}}]},{path:"*",component:c("404")}];n["a"]=o},4360:function(e,n,t){"use strict";t("b0c0"),t("96cf");var c=t("1da1"),a=t("2b0e"),r=t("2f62"),o=t("d677");a["a"].use(r["a"]),n["a"]=new r["a"].Store({state:{UserToken:localStorage.getItem("user_token"),User:null,Roles:[],AccessApis:{},isDark:"true"===localStorage.getItem("isDark")},mutations:{setUserToken:function(e,n){localStorage.setItem("user_token",n),e.UserToken=n},setUser:function(e,n){e.User=n},setRoles:function(e,n){e.Roles=n},setAccessApis:function(e,n){e.AccessApis=n},setDark:function(e,n){localStorage.setItem("isDark",n),e.isDark=n}},actions:{getUser:function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(n){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t=n.commit,o["a"].get("auth/user").then((function(e){t("setUser",e.data.user),t("setRoles",e.data.roles);var n={};for(var c in e.data.access)n[c.name]=c;t("setAccessApis",n)})).catch((function(e){console.log(e)}));case 2:case"end":return e.stop()}}),e)})));function n(n){return e.apply(this,arguments)}return n}()},modules:{}})},"53af":function(e,n,t){"use strict";t.r(n);var c=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("router-view")],1)},a=[],r=t("2877"),o={},u=Object(r["a"])(o,c,a,!1,null,null,null);n["default"]=u.exports},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var c=t("2b0e"),a=t("d677");Plugin.install=function(e){e.axios=a["a"],window.axios=a["a"],Object.defineProperties(e.prototype,{axios:{get:function(){return a["a"]}},$axios:{get:function(){return a["a"]}}})},c["a"].use(Plugin);var r=Plugin,o=t("53af"),u=t("f309"),i=(t("5363"),t("4360"));c["a"].use(u["a"]);var s=new u["a"]({icons:{iconfont:"mdi"},theme:{dark:i["a"].state.isDark}}),f=t("a18c"),h=t("7513");c["a"].prototype.helper=h["a"],c["a"].config.productionTip=!1,new c["a"]({vuetify:s,axios:r,router:f["a"],store:i["a"],render:function(e){return e(o["default"])}}).$mount("#app")},7513:function(e,n,t){"use strict";var c=t("53ca"),a=t("4360"),r=t("d677");n["a"]={hasPermissions:function(e){var n=[];"string"===typeof e&&(n=[e]),"object"===Object(c["a"])(e)&&e.constructor===Array&&(n=e);var t=a["a"].state.AccessApis;return n.every((function(e){return t[e]}))},containPermissions:function(e){var n=[];"string"===typeof e&&(n=[e]),"object"===Object(c["a"])(e)&&e.constructor===Array&&(n=e);var t=a["a"].state.AccessApis;return n.some((function(e){return t[e]}))},permissionRequest:function(e,n){var t=a["a"].state.AccessApis[e];return n=n||{},n.url=t.uri,n.method=t.method,Object(r["a"])(n)}}},a18c:function(e,n,t){"use strict";t("a4d3"),t("4de4"),t("b0c0"),t("e439"),t("dbb4"),t("b64b"),t("d3b7"),t("159b");var c=t("ade3"),a=t("2b0e"),r=t("8c4f"),o=t("4360"),u=t("3257"),i=t("1a72");function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);n&&(c=c.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,c)}return t}function f(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){Object(c["a"])(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}a["a"].use(r["a"]);var h=[{path:"/login",name:"Login",component:function(e){return Promise.all([t.e("chunk-4b560bc2"),t.e("chunk-7d8f4487"),t.e("chunk-25cbfaa8"),t.e("chunk-1be9a642"),t.e("chunk-80219d30")]).then(t.bind(null,"a55b")).then(e)}}],d=[{path:"/",children:u["a"],component:function(e){return Promise.all([t.e("chunk-4b560bc2"),t.e("chunk-7d8f4487"),t.e("chunk-25cbfaa8"),t.e("chunk-1be9a642"),t.e("chunk-fbb5078e")]).then(t.bind(null,"cd56")).then(e)}}],b=new r["a"]({base:"",routes:h});b.beforeEach((function(e,n,t){var c="Login"===e.name;if(!o["a"].state.UserToken||""===o["a"].state.UserToken)return c?t():t({name:"Login"});o["a"].state.User?c?t({path:"/"}):t():i["a"].getProfile().then((function(n){o["a"].commit("setUser",n.data.user),o["a"].commit("setRoles",n.data.roles),o["a"].commit("setAccessApis",n.data.access),b.addRoutes(d),t(f({},e,{replace:!0}))})).catch((function(e){o["a"].commit("setUserToken",""),t({name:"Login"})}))})),b.onError((function(e){console.log(e)})),n["a"]=b},d677:function(e,n,t){"use strict";(function(e){t("d3b7");var c=t("bc3a"),a=t.n(c),r=t("4360"),o=t("a18c");a.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded";var u={baseURL:"production"===Object({NODE_ENV:"production",BASE_URL:""})?e.baseURL:"http://airHub.test/api/",timeout:6e4,withCredentials:!1},i=a.a.create(u);i.interceptors.request.use((function(e){return r["a"].state.UserToken&&(e.headers.common["Authorization"]=r["a"].state.UserToken),e}),(function(e){return Promise.reject(e)})),i.interceptors.response.use((function(e){return e}),(function(e){return 401===e.response.status&&(r["a"].commit("setUserToken",""),o["a"].push({name:"Login"})),Promise.reject(e)})),n["a"]=i}).call(this,t("4362"))}});
//# sourceMappingURL=index.bcfe195e.js.map