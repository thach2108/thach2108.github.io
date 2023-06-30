"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[288],{5985:function(e,t,n){n.d(t,{Z:function(){return O}});var r,i=n(1694),a=n.n(i),s=n(184),l=function(e){var t=e.className;return(0,s.jsx)("div",{className:a()([" border-b",t])})},o=n(2791),c=["title","titleId"];function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},d.apply(this,arguments)}function u(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function h(e,t){var n=e.title,i=e.titleId,a=u(e,c);return o.createElement("svg",d({className:"custom-svg",width:"20px",height:"20px",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":i},a),n?o.createElement("title",{id:i},n):null,r||(r=o.createElement("path",{d:"M1.293,12.707a1,1,0,0,1-.216-.325.986.986,0,0,1,0-.764,1,1,0,0,1,.216-.325l8-8a1,1,0,1,1,1.414,1.414L4.414,11H22a1,1,0,0,1,0,2H4.414l6.293,6.293a1,1,0,0,1-1.414,1.414Z"})))}var m,p,v=o.forwardRef(h),f=(n.p,["title","titleId"]);function x(){return x=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},x.apply(this,arguments)}function b(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function j(e,t){var n=e.title,r=e.titleId,i=b(e,f);return o.createElement("svg",x({className:"custom-svg",width:"20px",height:"20px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},i),n?o.createElement("title",{id:r},n):null,m||(m=o.createElement("path",{className:"custom-svg__stroke",d:"M5 12H19",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),p||(p=o.createElement("path",{className:"custom-svg__stroke",d:"M12 5L12 19",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})))}var g,y=o.forwardRef(j),w=(n.p,n(7689));!function(e){e.LIST="/",e.CREATE="/create"}(g||(g={}));var N=function(){var e=(0,w.s0)(),t=(0,w.TH)().pathname;return(0,s.jsxs)("div",{className:"flex justify-between pb-3",children:[t===g.LIST?(0,s.jsx)("button",{type:"button",className:"text-red-500",children:"Edit"}):(0,s.jsx)("button",{type:"button",className:"text-red-500",onClick:function(){e("/")},children:(0,s.jsx)(v,{})}),t===g.LIST?(0,s.jsx)("h1",{"data-testid":"header-list-page",className:"brand font-bold",children:"2FA"}):(0,s.jsx)("h1",{"data-testid":"header-create-page",children:"Create new item"}),t===g.LIST?(0,s.jsx)("button",{type:"button",className:"text-red-500",onClick:function(){e("/create")},children:(0,s.jsx)(y,{})}):(0,s.jsx)("span",{})]})};var O=function(e){var t=e.className,n=e.children;return(0,s.jsxs)("div",{className:"grid grid-cols-5 gap-4 px-6",children:[(0,s.jsxs)("div",{className:a()([t,"layout mx-auto max-w-sm w-full border rounded-3xl p-3 my-10","col-span-2"]),children:[(0,s.jsx)(N,{}),(0,s.jsx)(l,{className:"-mx-3"}),(0,s.jsx)("div",{className:"layout__body rounded-2xl",children:n})]}),(0,s.jsxs)("div",{className:"mt-10 col-span-3",children:[(0,s.jsx)("div",{className:"mb-4 font-semibold",children:"The app's default value is the list includes random properties (iconUrl, currentTime and 2FA code)."}),(0,s.jsxs)("ul",{className:"ml-5 mx-auto list-disc",children:[(0,s.jsx)("li",{className:"mb-2",children:"Max time for each looping is 60s."}),(0,s.jsx)("li",{className:"mb-2",children:"The code will be change and the currentTime will be reset to 60 affter the couter is the end"}),(0,s.jsx)("li",{className:"mb-2",children:"The list is Sortable"}),(0,s.jsx)("li",{className:"mb-2",children:"Can create a new item including (currentTime: 60; a new random code and the name is the value is entered by user)"}),(0,s.jsx)("li",{className:"mb-2",children:"Validate required field"})]})]})]})}},9288:function(e,t,n){n.r(t),n.d(t,{default:function(){return N}});var r,i,a=n(5985),s=n(1694),l=n.n(s),o=n(168),c=n(6444),d=(0,c.ZP)("button")(r||(r=(0,o.Z)(["\n  height: 42px;\n  line-height: 42px;\n"]))),u=n(184),h=function(e){var t=e.type,n=e.className,r=e.children,i=e.dataTestid,a=e.onClick,s=void 0===a?function(){}:a;return(0,u.jsx)(d,{"data-testid":i,type:t,className:l()(["px-5 rounded-2xl bg-red-400 text-white  font-semibold hover:bg-red-500 transition-all",n]),onClick:s,children:r})},m=(0,c.ZP)("input")(i||(i=(0,o.Z)(["\n  height: 42px;\n  line-height: 42px;\n"]))),p=function(e){var t=e.name,n=e.label,r=e.value,i=e.error,a=e.className,s=e.placeholder,o=e.onChange,c=void 0===o?function(){}:o;return(0,u.jsxs)("div",{className:l()([a]),children:[n?(0,u.jsx)("label",{className:"block",htmlFor:t,children:n}):null,(0,u.jsx)(m,{id:"name",type:"text",name:t,value:r,placeholder:s,className:l()(["border px-4 rounded-2xl outline-red-100"]),onChange:c}),i?(0,u.jsx)("p",{"data-testid":"error-input-".concat(t),className:"px-4 text-xs text-red-400",children:i}):null]})},v=n(5705),f=n(7689),x=n(4456),b=n(1201),j=n(5848),g=n(6727),y=(0,g.Ry)({name:(0,g.Z_)().required("Required")});var w=function(){var e=(0,x.ho)(),t=e.twoFAs,n=e.add2FA,r=(0,f.s0)(),i=(0,v.TA)({initialValues:{name:""},validationSchema:y,onSubmit:function(e){i.isValid&&(n(new b.Z(t.length,e.name,j.o,j.o)),r("/"))}});return(0,u.jsx)("div",{className:"py-5 px-2",children:(0,u.jsx)("form",{onSubmit:i.handleSubmit,children:(0,u.jsxs)("div",{className:"flex justify-between",children:[(0,u.jsx)(p,{name:"name",placeholder:"input name",value:i.values.name,error:i.errors.name,onChange:i.handleChange}),(0,u.jsx)(h,{dataTestid:"submit-btn",type:"submit",children:"Add"})]})})})};var N=function(){return(0,u.jsx)(a.Z,{children:(0,u.jsx)(w,{})})}},1201:function(e,t,n){var r=n(5671),i=n(3144),a=n(4098),s=n(5848),l=n(2257),o=function(){function e(t,n){var i=this,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:s.o,c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:(0,l.c)(0,o);(0,r.Z)(this,e),this.id=void 0,this.name=void 0,this.currentTime=void 0,this.animationTime=void 0,this.code=void 0,this.iconUrl=void 0,this.interval=void 0,(0,a.ky)(this),this.id=t,this.name=n,this.code=(0,l.c)(1e5,999999),this.animationTime=o,this.currentTime=c,this.iconUrl=(0,l.c)(0,100)%2?"./assets/app/app-2.svg":"./assets/app/app-1.svg",this.interval=setInterval((function(){(0,a.aD)((function(){i.countDown()}))()}),1e3)}return(0,i.Z)(e,[{key:"updateCode",value:function(){this.code=(0,l.c)(1e5,999999)}},{key:"countDown",value:function(){this.currentTime--,this.currentTime<=0&&(this.currentTime=this.animationTime,this.updateCode())}},{key:"destroy",value:function(){clearInterval(this.interval)}}]),e}();t.Z=o},5848:function(e,t,n){n.d(t,{o:function(){return r}});var r=60},2257:function(e,t,n){n.d(t,{X:function(){return a},c:function(){return i}});var r=n(5848),i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:r.o;return Math.floor(Math.random()*(t-e))+e},a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1e5;return((e=e<1e5?1e5:e)/1e3).toFixed(3).replace("."," ")}}}]);
//# sourceMappingURL=288.9ce26f86.chunk.js.map