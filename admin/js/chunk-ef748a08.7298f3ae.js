(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ef748a08"],{"4bd4":function(t,e,r){"use strict";r("a4d3"),r("4de4"),r("7db0"),r("4160"),r("caad"),r("e439"),r("dbb4"),r("b64b"),r("07ac"),r("2532"),r("159b");var a=r("2fa7"),i=r("58df"),n=r("7e2b"),o=r("3206");function s(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function u(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?s(r,!0).forEach((function(e){Object(a["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):s(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}e["a"]=Object(i["a"])(n["a"],Object(o["b"])("form")).extend({name:"v-form",inheritAttrs:!1,props:{lazyValidation:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var e=this,r=function(t){return t.$watch("hasError",(function(r){e.$set(e.errorBag,t._uid,r)}),{immediate:!0})},a={_uid:t._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?a.shouldValidate=t.$watch("shouldValidate",(function(i){i&&(e.errorBag.hasOwnProperty(t._uid)||(a.valid=r(t)))})):a.valid=r(t),a},validate:function(){return 0===this.inputs.filter((function(t){return!t.validate(!0)})).length},reset:function(){this.inputs.forEach((function(t){return t.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(t){return t.resetValidation()})),this.resetErrorBag()},register:function(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister:function(t){var e=this.inputs.find((function(e){return e._uid===t._uid}));if(e){var r=this.watchers.find((function(t){return t._uid===e._uid}));r&&(r.valid(),r.shouldValidate()),this.watchers=this.watchers.filter((function(t){return t._uid!==e._uid})),this.inputs=this.inputs.filter((function(t){return t._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:u({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},ae6c:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.formData._id,expression:"formData._id"}],attrs:{type:"hidden"},domProps:{value:t.formData._id},on:{input:function(e){e.target.composing||t.$set(t.formData,"_id",e.target.value)}}}),r("v-text-field",{attrs:{label:"用户名",rules:t.rules.name},model:{value:t.formData.name,callback:function(e){t.$set(t.formData,"name",e)},expression:"formData.name"}}),r("v-text-field",{attrs:{label:"邮箱",rules:t.rules.email,type:"email"},model:{value:t.formData.email,callback:function(e){t.$set(t.formData,"email",e)},expression:"formData.email"}}),r("v-text-field",{attrs:{label:"密码",rules:t.rules.password,type:"password",autocomplete:"new-password"},model:{value:t.formData.password,callback:function(e){t.$set(t.formData,"password",e)},expression:"formData.password"}}),r("v-select",{attrs:{rules:t.rules.roles,items:t.roleList,"item-text":"name","item-value":"_id",attach:"","small-chips":"",label:"角色",multiple:""},model:{value:t.formData.roles,callback:function(e){t.$set(t.formData,"roles",e)},expression:"formData.roles"}})],1)},i=[],n=r("1a72"),o={data:function(){return{valid:!0,formData:{_id:"",name:"",email:"",password:"",roles:[]},roleList:[],rules:{email:[function(t){return!!t||"邮箱不能为空"},function(t){return/.+@.+\..+/.test(t)||"邮箱不合法"}],name:[function(t){return!!t||"用户名不能为空"}],password:[function(t){return!!t||"密码不能为空"}],roles:[function(t){return t.length>0||"请选择"}]}}},mounted:function(){var t=this;Object(n["f"])().then((function(e){t.roleList=e.data.role}))}},s=o,u=r("2877"),l=r("6544"),c=r.n(l),d=r("4bd4"),f=r("b974"),m=r("8654"),p=Object(u["a"])(s,a,i,!1,null,null,null);e["default"]=p.exports;c()(p,{VForm:d["a"],VSelect:f["a"],VTextField:m["a"]})}}]);
//# sourceMappingURL=chunk-ef748a08.7298f3ae.js.map