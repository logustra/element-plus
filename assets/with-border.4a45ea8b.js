var e=Object.defineProperty,l=Object.defineProperties,a=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,t=(l,a,o)=>a in l?e(l,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):l[a]=o,n=(e,l)=>{for(var a in l||(l={}))d.call(l,a)&&t(e,a,l[a]);if(o)for(var a of o(l))c.call(l,a)&&t(e,a,l[a]);return e};"undefined"!=typeof require&&require;import{j as u,q as i,f as r,o as h,c as s,b,g as m,F as p,k,l as V,p as f,a as g,h as _,r as O,i as v,d as x,t as S}from"./app.7f6f9a20.js";var z=u({setup:()=>({checked1:i(!0),checked2:i(!1),checked3:i(!1),checked4:i(!1),checked5:i(!1),checked6:i(!1),checked7:i(!1),checked8:i(!1)})});z.render=function(e,l,a,o,d,c){const t=r("el-checkbox");return h(),s(p,null,[b("div",null,[m(t,{modelValue:e.checked1,"onUpdate:modelValue":l[0]||(l[0]=l=>e.checked1=l),label:"Option 1"},null,8,["modelValue"]),m(t,{modelValue:e.checked2,"onUpdate:modelValue":l[1]||(l[1]=l=>e.checked2=l),label:"Option 2"},null,8,["modelValue"])]),b("div",null,[m(t,{modelValue:e.checked3,"onUpdate:modelValue":l[2]||(l[2]=l=>e.checked3=l),label:"Option 1",size:"medium"},null,8,["modelValue"]),m(t,{modelValue:e.checked4,"onUpdate:modelValue":l[3]||(l[3]=l=>e.checked4=l),label:"Option 2",size:"medium"},null,8,["modelValue"])]),b("div",null,[m(t,{modelValue:e.checked5,"onUpdate:modelValue":l[4]||(l[4]=l=>e.checked5=l),label:"Option 1",size:"small"},null,8,["modelValue"]),m(t,{modelValue:e.checked6,"onUpdate:modelValue":l[5]||(l[5]=l=>e.checked6=l),label:"Option 2",size:"small"},null,8,["modelValue"])]),b("div",null,[m(t,{modelValue:e.checked7,"onUpdate:modelValue":l[6]||(l[6]=l=>e.checked7=l),label:"Option 1",size:"mini"},null,8,["modelValue"]),m(t,{modelValue:e.checked8,"onUpdate:modelValue":l[7]||(l[7]=l=>e.checked8=l),label:"Option 2",size:"mini"},null,8,["modelValue"])])],64)};var y=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:z});const U=["Shanghai","Beijing","Guangzhou","Shenzhen"];var C=u({setup(){const e=k({checkboxGroup1:["Shanghai"],checkboxGroup2:["Shanghai"],checkboxGroup3:["Shanghai"],checkboxGroup4:["Shanghai"],cities:U});return n({},V(e))}});f("data-v-69996c0f");const j={class:"demo-button-style"},G={class:"demo-button-style"},A={class:"demo-button-style"};g(),C.render=function(e,l,a,o,d,c){const t=r("el-checkbox-button"),n=r("el-checkbox-group");return h(),s(p,null,[b("div",null,[m(n,{modelValue:e.checkboxGroup1,"onUpdate:modelValue":l[0]||(l[0]=l=>e.checkboxGroup1=l)},{default:_((()=>[(h(!0),s(p,null,O(e.cities,(e=>(h(),v(t,{key:e,label:e},{default:_((()=>[x(S(e),1)])),_:2},1032,["label"])))),128))])),_:1},8,["modelValue"])]),b("div",j,[m(n,{modelValue:e.checkboxGroup2,"onUpdate:modelValue":l[1]||(l[1]=l=>e.checkboxGroup2=l),size:"medium"},{default:_((()=>[(h(!0),s(p,null,O(e.cities,(e=>(h(),v(t,{key:e,label:e},{default:_((()=>[x(S(e),1)])),_:2},1032,["label"])))),128))])),_:1},8,["modelValue"])]),b("div",G,[m(n,{modelValue:e.checkboxGroup3,"onUpdate:modelValue":l[2]||(l[2]=l=>e.checkboxGroup3=l),size:"small"},{default:_((()=>[(h(!0),s(p,null,O(e.cities,(e=>(h(),v(t,{key:e,label:e,disabled:"Beijing"===e},{default:_((()=>[x(S(e),1)])),_:2},1032,["label","disabled"])))),128))])),_:1},8,["modelValue"])]),b("div",A,[m(n,{modelValue:e.checkboxGroup4,"onUpdate:modelValue":l[3]||(l[3]=l=>e.checkboxGroup4=l),size:"mini",disabled:""},{default:_((()=>[(h(!0),s(p,null,O(e.cities,(e=>(h(),v(t,{key:e,label:e},{default:_((()=>[x(S(e),1)])),_:2},1032,["label"])))),128))])),_:1},8,["modelValue"])])],64)},C.__scopeId="data-v-69996c0f";var w=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:C}),B=u({setup:()=>({checked1:i(!1),checked2:i(!0)})});const I=x("Disabled"),M=x("Not disabled");B.render=function(e,l,a,o,d,c){const t=r("el-checkbox");return h(),s(p,null,[m(t,{modelValue:e.checked1,"onUpdate:modelValue":l[0]||(l[0]=l=>e.checked1=l),disabled:""},{default:_((()=>[I])),_:1},8,["modelValue"]),m(t,{modelValue:e.checked2,"onUpdate:modelValue":l[1]||(l[1]=l=>e.checked2=l)},{default:_((()=>[M])),_:1},8,["modelValue"])],64)};var T=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:B}),P=u({setup:()=>({checkList:i(["selected and disabled","Option A"])})});P.render=function(e,l,a,o,d,c){const t=r("el-checkbox"),n=r("el-checkbox-group");return h(),v(n,{modelValue:e.checkList,"onUpdate:modelValue":l[0]||(l[0]=l=>e.checkList=l)},{default:_((()=>[m(t,{label:"Option A"}),m(t,{label:"Option B"}),m(t,{label:"Option C"}),m(t,{label:"disabled",disabled:""}),m(t,{label:"selected and disabled",disabled:""})])),_:1},8,["modelValue"])};var q=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:P});const L=["Shanghai","Beijing","Guangzhou","Shenzhen"];var D=u({setup(){const e=k({checkAll:!1,checkedCities:["Shanghai","Beijing"],cities:L,isIndeterminate:!0});return o=n({},V(e)),l(o,a({handleCheckAllChange:l=>{e.checkedCities=l?L:[],e.isIndeterminate=!1},handleCheckedCitiesChange:l=>{const a=l.length;e.checkAll=a===e.cities.length,e.isIndeterminate=a>0&&a<e.cities.length}}));var o}});const E=x("Check all");D.render=function(e,l,a,o,d,c){const t=r("el-checkbox"),n=r("el-checkbox-group");return h(),s(p,null,[m(t,{modelValue:e.checkAll,"onUpdate:modelValue":l[0]||(l[0]=l=>e.checkAll=l),indeterminate:e.isIndeterminate,onChange:e.handleCheckAllChange},{default:_((()=>[E])),_:1},8,["modelValue","indeterminate","onChange"]),m(n,{modelValue:e.checkedCities,"onUpdate:modelValue":l[1]||(l[1]=l=>e.checkedCities=l),onChange:e.handleCheckedCitiesChange},{default:_((()=>[(h(!0),s(p,null,O(e.cities,(e=>(h(),v(t,{key:e,label:e},{default:_((()=>[x(S(e),1)])),_:2},1032,["label"])))),128))])),_:1},8,["modelValue","onChange"])],64)};var F=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:D});const N=["Shanghai","Beijing","Guangzhou","Shenzhen"];var H=u({setup(){const e=k({checkedCities:["Shanghai","Beijing"],cities:N});return V(e)}});H.render=function(e,l,a,o,d,c){const t=r("el-checkbox"),n=r("el-checkbox-group");return h(),v(n,{modelValue:e.checkedCities,"onUpdate:modelValue":l[0]||(l[0]=l=>e.checkedCities=l),min:1,max:2},{default:_((()=>[(h(!0),s(p,null,O(e.cities,(e=>(h(),v(t,{key:e,label:e},{default:_((()=>[x(S(e),1)])),_:2},1032,["label"])))),128))])),_:1},8,["modelValue"])};var J=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:H}),K=u({setup(){const e=k({checked1:!0,checked2:!1,checked3:!1,checked4:!0,checkboxGroup1:[],checkboxGroup2:[]});return V(e)}});f("data-v-71aeb71d");const Q={class:"demo-with-border"},R={class:"demo-with-border"},W={class:"demo-with-border"};g(),K.render=function(e,l,a,o,d,c){const t=r("el-checkbox"),n=r("el-checkbox-group");return h(),s(p,null,[b("div",null,[m(t,{modelValue:e.checked1,"onUpdate:modelValue":l[0]||(l[0]=l=>e.checked1=l),label:"Option1",border:""},null,8,["modelValue"]),m(t,{modelValue:e.checked2,"onUpdate:modelValue":l[1]||(l[1]=l=>e.checked2=l),label:"Option2",border:""},null,8,["modelValue"])]),b("div",Q,[m(t,{modelValue:e.checked3,"onUpdate:modelValue":l[2]||(l[2]=l=>e.checked3=l),label:"Option1",border:"",size:"medium"},null,8,["modelValue"]),m(t,{modelValue:e.checked4,"onUpdate:modelValue":l[3]||(l[3]=l=>e.checked4=l),label:"Option2",border:"",size:"medium"},null,8,["modelValue"])]),b("div",R,[m(n,{modelValue:e.checkboxGroup1,"onUpdate:modelValue":l[4]||(l[4]=l=>e.checkboxGroup1=l),size:"small"},{default:_((()=>[m(t,{label:"Option1",border:""}),m(t,{label:"Option2",border:"",disabled:""})])),_:1},8,["modelValue"])]),b("div",W,[m(n,{modelValue:e.checkboxGroup2,"onUpdate:modelValue":l[5]||(l[5]=l=>e.checkboxGroup2=l),size:"mini",disabled:""},{default:_((()=>[m(t,{label:"Option1",border:""}),m(t,{label:"Option2",border:""})])),_:1},8,["modelValue"])])],64)},K.__scopeId="data-v-71aeb71d";var X=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:K});export{y as _,w as a,T as b,q as c,F as d,J as e,X as f};
