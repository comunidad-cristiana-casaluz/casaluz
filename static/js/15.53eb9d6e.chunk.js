(this.webpackJsonpcasaluz=this.webpackJsonpcasaluz||[]).push([[15],{603:function(t,n,r){(function(n){var r=9007199254740991,e="[object Arguments]",c="[object Map]",o="[object Promise]",a="[object Set]",u="[object WeakMap]",i="[object DataView]",l=/^\[object .+?Constructor\]$/,f=/^(?:0|[1-9]\d*)$/,s="\\ud800-\\udfff",p="\\u0300-\\u036f\\ufe20-\\ufe23",j="\\u20d0-\\u20f0",b="\\ufe0e\\ufe0f",h="[".concat(s,"]"),d="[".concat(p).concat(j,"]"),m="\\ud83c[\\udffb-\\udfff]",g="(?:".concat(d,"|").concat(m,")"),y="[^".concat(s,"]"),v="(?:\\ud83c[\\udde6-\\uddff]){2}",O="[\\ud800-\\udbff][\\udc00-\\udfff]",x="\\u200d",S="".concat(g,"?"),w="[".concat(b,"]?"),k=w+S+"(?:".concat(x,"(?:").concat([y,v,O].join("|"),")").concat(w).concat(S,")*"),A="(?:".concat(["".concat(y+d,"?"),d,v,O,h].join("|"),")"),C=RegExp("".concat(m,"(?=").concat(m,")|").concat(A).concat(k),"g"),E=RegExp("[".concat(x).concat(s).concat(p).concat(j).concat(b,"]")),$="object"===typeof n&&n&&n.Object===Object&&n||Function("return this")();function _(t,n){return function(t,n){for(var r=-1,e=t?t.length:0,c=Array(e);++r<e;)c[r]=n(t[r],r,t);return c}(n,(function(n){return t[n]}))}function F(t){var n=-1,r=Array(t.size);return t.forEach((function(t,e){r[++n]=[e,t]})),r}function P(t){var n=-1,r=Array(t.size);return t.forEach((function(t){r[++n]=t})),r}function z(t){return function(t){return E.test(t)}(t)?function(t){return t.match(C)||[]}(t):function(t){return t.split("")}(t)}var B,R,W=Function.prototype,I=Object.prototype,M=$["__core-js_shared__"],T=function(){var t=/[^.]+$/.exec(M&&M.keys&&M.keys.IE_PROTO||"");return t?"Symbol(src)_1.".concat(t):""}(),N=W.toString,V=I.hasOwnProperty,D=I.toString,G=RegExp("^".concat(N.call(V).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?"),"$")),J=$.Symbol,L=J?J.iterator:void 0,q=I.propertyIsEnumerable,H=(B=Object.keys,R=Object,function(t){return B(R(t))}),K=ut($,"DataView"),Q=ut($,"Map"),U=ut($,"Promise"),X=ut($,"Set"),Y=ut($,"WeakMap"),Z=ft(K),tt=ft(Q),nt=ft(U),rt=ft(X),et=ft(Y);function ct(t,n){var r=st(t)||function(t){return function(t){return ht(t)&&pt(t)}(t)&&V.call(t,"callee")&&(!q.call(t,"callee")||D.call(t)===e)}(t)?function(t,n){for(var r=-1,e=Array(t);++r<t;)e[r]=n(r);return e}(t.length,String):[],c=r.length,o=!!c;for(var a in t)!n&&!V.call(t,a)||o&&("length"===a||lt(a,c))||r.push(a);return r}function ot(t){return!(!bt(t)||function(t){return!!T&&T in t}(t))&&(jt(t)||function(t){var n=!1;if(null!==t&&"function"!==typeof t.toString)try{n=!!"".concat(t)}catch(r){}return n}(t)?G:l).test(ft(t))}function at(t){if(!function(t){var n=t&&t.constructor,r="function"===typeof n&&n.prototype||I;return t===r}(t))return H(t);var n=[];for(var r in Object(t))V.call(t,r)&&"constructor"!==r&&n.push(r);return n}function ut(t,n){var r=function(t,n){return null==t?void 0:t[n]}(t,n);return ot(r)?r:void 0}var it=function(t){return D.call(t)};function lt(t,n){return!!(n=null==n?r:n)&&("number"===typeof t||f.test(t))&&t>-1&&t%1===0&&t<n}function ft(t){if(null!==t){try{return N.call(t)}catch(n){}try{return"".concat(t)}catch(n){}}return""}(K&&it(new K(new ArrayBuffer(1)))!==i||Q&&it(new Q)!==c||U&&it(U.resolve())!==o||X&&it(new X)!==a||Y&&it(new Y)!==u)&&(it=function(t){var n=D.call(t),r="[object Object]"===n?t.constructor:void 0,e=r?ft(r):void 0;if(e)switch(e){case Z:return i;case tt:return c;case nt:return o;case rt:return a;case et:return u;default:return}return n});var st=Array.isArray;function pt(t){return null!=t&&function(t){return"number"===typeof t&&t>-1&&t%1===0&&t<=r}(t.length)&&!jt(t)}function jt(t){var n=bt(t)?D.call(t):"";return"[object Function]"===n||"[object GeneratorFunction]"===n}function bt(t){var n=typeof t;return!!t&&("object"===n||"function"===n)}function ht(t){return!!t&&"object"===typeof t}function dt(t){return t?_(t,function(t){return pt(t)?ct(t):at(t)}(t)):[]}t.exports=function(t){if(!t)return[];if(pt(t))return function(t){return"string"===typeof t||!st(t)&&ht(t)&&"[object String]"===D.call(t)}(t)?z(t):function(t,n){var r=-1,e=t.length;for(n||(n=Array(e));++r<e;)n[r]=t[r];return n}(t);if(L&&t[L])return function(t){for(var n,r=[];!(n=t.next()).done;)r.push(n.value);return r}(t[L]());var n=it(t);return(n===c?F:n===a?P:dt)(t)}}).call(this,r(46))},759:function(t,n,r){"use strict";r.r(n);var e=r(82),c=r(94),o=r(1),a=(r(602),r(657)),u=r(725),i=r(661),l=r(691),f=r(396),s=r(688),p=r(751),j=r(25),b=r(604),h=r.n(b),d=r(129),m=r.n(d),g=r(603),y=r.n(g);var v=function(t){return y()(t).length},O=r(5),x=function(t){return!(t.unified.length>5)};n.default=Object(j.a)((function(t){return{"@global":{".emoji-mart-category-label":t.typography.body1,".emoji-mart-bar":{display:"none !important"},".emoji-mart-search input":Object(c.a)(Object(c.a)({},t.typography.body1),t.border),".emoji-mart-search":{marginTop:"".concat(t.spacing(1),"px !important"),paddingRight:"".concat(t.spacing(1),"px !important"),paddingLeft:"".concat(t.spacing(1),"px !important"),paddingBottom:"".concat(t.spacing(1),"px !important")},".emoji-mart-search-icon":{top:"5px !important",right:"14px !important",fontSize:20},".emoji-mart-scroll":{height:240},".emoji-mart":Object(c.a)({},t.border)},floatButtonWrapper:{position:"absolute",bottom:12,right:12},floatButtonSVG:{color:t.palette.primary.light},relative:{position:"relative"}}}),{withTheme:!0})((function(t){var n=t.theme,r=t.classes,c=t.rightContent,j=t.placeholder,b=t.maxCharacters,d=t.emojiSet,g=t.inputClassName,y=t.onChange,S=Object(o.useState)(!1),w=Object(e.a)(S,2),k=w[0],A=w[1],C=Object(o.useState)(""),E=Object(e.a)(C,2),$=E[0],_=E[1],F=Object(o.useState)(0),P=Object(e.a)(F,2),z=P[0],B=P[1],R=Object(o.useCallback)((function(t){var n,r=$+t.native;b&&(n=v(r))>b||(y&&y(r,n),_(r),B(n))}),[$,_,B,b,y]),W=Object(o.useCallback)((function(t){var n,r=t.target.value;b&&(n=v(r))>b||(y&&y(r,n),_(r),B(n))}),[b,y,_,B]),I=Object(o.useCallback)((function(){A(!k)}),[k,A]);return Object(O.jsxs)(o.Fragment,{children:[Object(O.jsxs)(u.a,{spacing:0,container:!0,children:[Object(O.jsxs)(u.a,{item:!0,xs:c?8:12,sm:c?9:12,lg:c?10:12,className:r.relative,children:[Object(O.jsx)(i.a,{fullWidth:!0,multiline:!0,variant:"outlined",rows:6,onInput:W,value:$,placeholder:j,InputProps:{classes:{notchedOutline:g||null}}}),Object(O.jsx)("div",{className:r.floatButtonWrapper,children:Object(O.jsx)(l.a,{onClick:I,children:k?Object(O.jsx)(m.a,{color:"primary"}):Object(O.jsx)(h.a,{color:"primary"})})})]}),c&&Object(O.jsx)(u.a,{item:!0,xs:4,sm:3,lg:2,children:c})]}),b&&Object(O.jsx)(f.a,{error:z>=b,children:"".concat(z,"/").concat(b," characters")}),Object(O.jsx)(s.a,{in:k,children:Object(O.jsx)(p.a,{mt:1,children:Object(O.jsx)(a.a,{set:d,color:n.palette.primary.main,style:{width:"100%"},onSelect:R,emojisToShowFilter:x})})})]})}))}}]);
//# sourceMappingURL=15.53eb9d6e.chunk.js.map