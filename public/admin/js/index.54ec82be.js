(function(t){function e(e){for(var a,i,s=e[0],l=e[1],u=e[2],c=0,f=[];c<s.length;c++)i=s[c],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&f.push(n[i][0]),n[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);p&&p(e);while(f.length)f.shift()();return o.push.apply(o,u||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],a=!0,i=1;i<r.length;i++){var l=r[i];0!==n[l]&&(a=!1)}a&&(o.splice(e--,1),t=s(s.s=r[0]))}return t}var a={},n={index:0},o=[];function i(t){return s.p+"js/"+({}[t]||t)+"."+{"chunk-2d22d746":"dafd86cb"}[t]+".js"}function s(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.e=function(t){var e=[],r=n[t];if(0!==r)if(r)e.push(r[2]);else{var a=new Promise((function(e,a){r=n[t]=[e,a]}));e.push(r[2]=a);var o,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=i(t);var u=new Error;o=function(e){l.onerror=l.onload=null,clearTimeout(c);var r=n[t];if(0!==r){if(r){var a=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",u.name="ChunkLoadError",u.type=a,u.request=o,r[1](u)}n[t]=void 0}};var c=setTimeout((function(){o({type:"timeout",target:l})}),12e4);l.onerror=l.onload=o,document.head.appendChild(l)}return Promise.all(e)},s.m=t,s.c=a,s.d=function(t,e,r){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(r,a,function(e){return t[e]}.bind(null,a));return r},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/admin/",s.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var p=u;o.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("2b0e"),n=(r("d3b7"),r("bc3a")),o=r.n(n),i={},s=o.a.create(i);s.interceptors.request.use((function(t){return t}),(function(t){return Promise.reject(t)})),s.interceptors.response.use((function(t){return t}),(function(t){return Promise.reject(t)})),Plugin.install=function(t){t.axios=s,window.axios=s,Object.defineProperties(t.prototype,{axios:{get:function(){return s}},$axios:{get:function(){return s}}})},a["a"].use(Plugin);var l=Plugin,u=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{attrs:{id:"sandbox"}},[r("v-navigation-drawer",{attrs:{clipped:t.primaryDrawer.clipped,floating:t.primaryDrawer.floating,"mini-variant":t.primaryDrawer.mini,permanent:"permanent"===t.primaryDrawer.type,temporary:"temporary"===t.primaryDrawer.type,app:"",overflow:""},model:{value:t.primaryDrawer.model,callback:function(e){t.$set(t.primaryDrawer,"model",e)},expression:"primaryDrawer.model"}}),r("v-app-bar",{attrs:{"clipped-left":t.primaryDrawer.clipped,app:""}},["permanent"!==t.primaryDrawer.type?r("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.primaryDrawer.model=!t.primaryDrawer.model}}}):t._e(),r("v-toolbar-title",[t._v("Vuetify")])],1),r("v-content",[r("v-container",{attrs:{fluid:""}},[r("v-row",{attrs:{align:"center",justify:"center"}},[r("v-col",{attrs:{cols:"10"}},[r("v-card",[r("v-card-text",[r("v-row",[r("v-col",{attrs:{cols:"12",md:"6"}},[r("span",[t._v("Scheme")]),r("v-switch",{attrs:{primary:"",label:"Dark"},model:{value:t.$vuetify.theme.dark,callback:function(e){t.$set(t.$vuetify.theme,"dark",e)},expression:"$vuetify.theme.dark"}})],1),r("v-col",{attrs:{cols:"12",md:"6"}},[r("span",[t._v("Drawer")]),r("v-radio-group",{attrs:{column:""},model:{value:t.primaryDrawer.type,callback:function(e){t.$set(t.primaryDrawer,"type",e)},expression:"primaryDrawer.type"}},t._l(t.drawers,(function(t){return r("v-radio",{key:t,attrs:{label:t,value:t.toLowerCase(),primary:""}})})),1),r("v-switch",{attrs:{label:"Clipped",primary:""},model:{value:t.primaryDrawer.clipped,callback:function(e){t.$set(t.primaryDrawer,"clipped",e)},expression:"primaryDrawer.clipped"}}),r("v-switch",{attrs:{label:"Floating",primary:""},model:{value:t.primaryDrawer.floating,callback:function(e){t.$set(t.primaryDrawer,"floating",e)},expression:"primaryDrawer.floating"}}),r("v-switch",{attrs:{label:"Mini",primary:""},model:{value:t.primaryDrawer.mini,callback:function(e){t.$set(t.primaryDrawer,"mini",e)},expression:"primaryDrawer.mini"}})],1),r("v-col",{attrs:{cols:"12",md:"6"}},[r("span",[t._v("Footer")]),r("v-switch",{attrs:{label:"Inset",primary:""},model:{value:t.footer.inset,callback:function(e){t.$set(t.footer,"inset",e)},expression:"footer.inset"}})],1)],1)],1),r("v-card-actions",[r("v-spacer"),r("v-btn",{attrs:{text:""}},[t._v("Cancel")]),r("v-btn",{attrs:{text:"",color:"primary"}},[t._v("Submit")])],1)],1)],1)],1)],1)],1),r("v-footer",{attrs:{inset:t.footer.inset,app:""}},[r("span",{staticClass:"px-4"},[t._v("© "+t._s((new Date).getFullYear()))])])],1)},c=[],p={data:function(){return{drawers:["Default (no property)","Permanent","Temporary"],primaryDrawer:{model:null,type:"default (no property)",clipped:!1,floating:!1,mini:!1},footer:{inset:!1}}}},f=p,m=r("2877"),d=r("6544"),v=r.n(d),y=r("7496"),h=r("40dc"),b=r("5bc1"),w=r("8336"),g=r("b0af"),x=r("99d9"),_=r("62ad"),j=r("a523"),k=r("a75b"),D=r("553a"),V=r("f774"),C=r("67b6"),P=r("43a6"),O=r("0fd9"),$=r("2fa4"),S=r("b73d"),T=r("2a7f"),A=Object(m["a"])(f,u,c,!1,null,null,null),E=A.exports;v()(A,{VApp:y["a"],VAppBar:h["a"],VAppBarNavIcon:b["a"],VBtn:w["a"],VCard:g["a"],VCardActions:x["a"],VCardText:x["b"],VCol:_["a"],VContainer:j["a"],VContent:k["a"],VFooter:D["a"],VNavigationDrawer:V["a"],VRadio:C["a"],VRadioGroup:P["a"],VRow:O["a"],VSpacer:$["a"],VSwitch:S["a"],VToolbarTitle:T["a"]});var F=r("f309");a["a"].use(F["a"]);var L=new F["a"]({icons:{iconfont:"mdi"},theme:{dark:!0}}),M=r("8c4f"),q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("img",{attrs:{alt:"Vue logo",src:r("cf05")}}),a("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},W=[],I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-layout",{attrs:{"text-center":"",wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-img",{staticClass:"my-3",attrs:{src:r("9b19"),contain:"",height:"200"}})],1),a("v-flex",{attrs:{"mb-4":""}},[a("h1",{staticClass:"display-2 font-weight-bold mb-3"},[t._v(" Welcome to Vuetify ")]),a("p",{staticClass:"subheading font-weight-regular"},[t._v(" For help and collaboration with other Vuetify developers, "),a("br"),t._v("please join our online "),a("a",{attrs:{href:"https://community.vuetifyjs.com",target:"_blank"}},[t._v("Discord Community")])])]),a("v-flex",{attrs:{"mb-5":"",xs12:""}},[a("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v("What's next?")]),a("v-layout",{attrs:{"justify-center":""}},t._l(t.whatsNext,(function(e,r){return a("a",{key:r,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1),a("v-flex",{attrs:{xs12:"","mb-5":""}},[a("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v("Important Links")]),a("v-layout",{attrs:{"justify-center":""}},t._l(t.importantLinks,(function(e,r){return a("a",{key:r,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1),a("v-flex",{attrs:{xs12:"","mb-5":""}},[a("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v("Ecosystem")]),a("v-layout",{attrs:{"justify-center":""}},t._l(t.ecosystem,(function(e,r){return a("a",{key:r,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1)],1)],1)},N=[],B={data:function(){return{ecosystem:[{text:"vuetify-loader",href:"https://github.com/vuetifyjs/vuetify-loader"},{text:"github",href:"https://github.com/vuetifyjs/vuetify"},{text:"awesome-vuetify",href:"https://github.com/vuetifyjs/awesome-vuetify"}],importantLinks:[{text:"Documentation",href:"https://vuetifyjs.com"},{text:"Chat",href:"https://community.vuetifyjs.com"},{text:"Made with Vuetify",href:"https://madewithvuejs.com/vuetify"},{text:"Twitter",href:"https://twitter.com/vuetifyjs"},{text:"Articles",href:"https://medium.com/vuetify"}],whatsNext:[{text:"Explore components",href:"https://vuetifyjs.com/components/api-explorer"},{text:"Select a layout",href:"https://vuetifyjs.com/layout/pre-defined"},{text:"Frequently Asked Questions",href:"https://vuetifyjs.com/getting-started/frequently-asked-questions"}]}}},R=B,H=r("0e8f"),J=r("adda"),Y=r("a722"),G=Object(m["a"])(R,I,N,!1,null,null,null),Q=G.exports;v()(G,{VContainer:j["a"],VFlex:H["a"],VImg:J["a"],VLayout:Y["a"]});var z={name:"home",components:{HelloWorld:Q}},K=z,U=Object(m["a"])(K,q,W,!1,null,null,null),X=U.exports;a["a"].use(M["a"]);var Z=[{path:"/",name:"home",component:X},{path:"/about",name:"about",component:function(){return r.e("chunk-2d22d746").then(r.bind(null,"f820"))}}],tt=new M["a"]({base:"/admin/",routes:Z}),et=tt,rt=r("2f62");a["a"].use(rt["a"]);var at=new rt["a"].Store({state:{},mutations:{},actions:{},modules:{}});a["a"].config.productionTip=!1,new a["a"]({vuetify:L,axios:l,router:et,store:at,render:function(t){return t(E)}}).$mount("#app")},"9b19":function(t,e,r){t.exports=r.p+"img/logo.07d1e22e.svg"},cf05:function(t,e,r){t.exports=r.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=index.54ec82be.js.map