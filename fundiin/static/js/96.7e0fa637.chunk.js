"use strict";(self.webpackChunkhomepage=self.webpackChunkhomepage||[]).push([[96],{1937:(e,a,s)=>{s.d(a,{A:()=>l});var t=s(8139),n=s.n(t),c=s(579);const l=function(e){let{children:a,className:s,...t}=e;return(0,c.jsx)("button",{className:n()(["fundiin-btn",s]),...t,children:a})}},1293:(e,a,s)=>{s.d(a,{A:()=>o});var t=s(7070),n=s(2326),c=s(8139),l=s.n(c),i=s(4117),r=s(579);const o=function(e){let{className:a}=e;const{t:s}=(0,i.Bd)();return(0,r.jsx)("div",{className:l()(["download-app",a]),children:(0,r.jsx)("div",{className:"container",children:(0,r.jsxs)("div",{className:"download-app__content",children:[(0,r.jsxs)("div",{className:"download-app__item",children:[(0,r.jsx)("div",{className:"key-visual",children:(0,r.jsx)("img",{src:t.E.keyVisualAppUrl,alt:"key visual bg"})}),(0,r.jsxs)("div",{className:"relative",children:[(0,r.jsx)("h3",{className:"download-app__title",children:s("dowloadApp.title")}),(0,r.jsxs)("div",{className:"download-app__wrap",children:[(0,r.jsx)("div",{className:"download-app__qr",children:(0,r.jsx)("img",{src:t.E.qrCode12Url,alt:"qr"})}),(0,r.jsxs)("div",{className:"download-app__text",children:[(0,r.jsx)("p",{className:"download-app__subtitle",children:s("dowloadApp.subTitle")}),(0,r.jsx)("p",{className:"download-app__downloadtext",children:s("dowloadApp.Qu\xe9t m\xe3 \u0111\u1ec3 t\u1ea3i \u1ee9ng d\u1ee5ng")})]})]}),(0,r.jsxs)("div",{className:"btn-site",children:[(0,r.jsx)("a",{href:"#",children:(0,r.jsx)(n.I.GooglePlay,{})}),(0,r.jsx)("a",{href:"#",children:(0,r.jsx)(n.I.AppStore,{})})]})]})]}),(0,r.jsx)("div",{className:"download-app__item",children:(0,r.jsx)("div",{className:"phone",children:(0,r.jsx)("img",{className:"cover-img",src:t.E.downloadAppUrl,alt:"download bg"})})})]})})})}},5096:(e,a,s)=>{s.r(a),s.d(a,{default:()=>L});var t=s(4117),n=s(2488),c=s(4413),l=s(7070);const i=[{url:l.E.carousel31Url},{url:l.E.carousel32Url},{url:l.E.carousel33Url},{url:l.E.carousel34Url}];var r=s(579);const o={desktop:{breakpoint:{max:3e3,min:c.dx},items:1.3},tablet:{breakpoint:{max:c.dx,min:c.Tz},items:2.07},mobile:{breakpoint:{max:c.Tz,min:325},items:1}};const d=function(){const{t:e}=(0,t.Bd)();return(0,r.jsxs)("div",{className:"container carousel-brands",children:[(0,r.jsx)("h3",{className:"carousel-brands__title",children:e("Kh\xe1m ph\xe1 \u01b0u \u0111\xe3i t\u1eeb c\xe1c th\u01b0\u01a1ng hi\u1ec7u")}),(0,r.jsx)("div",{className:"carousel3",children:(0,r.jsx)(n.default,{arrows:!1,responsive:o,itemClass:"carousel3__item",children:i.map(((e,a)=>(0,r.jsx)("div",{className:"carousel3__wrap",children:(0,r.jsx)("div",{className:"carousel3__img",children:(0,r.jsx)("img",{className:"cover-img",src:e.url,alt:"brands"})})},a)))})})]})};var m=s(1293),u=s(2979),h=s(7289),x=s(1139),N=s(8139),p=s.n(N),j=s(1937),g=s(3536),v=s(8974);const _=s(7154).A.create({baseURL:"https://fundiin.vn/lp/api/",headers:{Authorization:"Bearer "+localStorage.getItem("accessToken")},timeout:3e4});_.interceptors.request.use((e=>e),(e=>{Promise.reject(e)})),_.interceptors.response.use((e=>(null===e||void 0===e?void 0:e.data)||{}),(e=>{var a,s;return 401===(null===e||void 0===e||null===(a=e.response)||void 0===a?void 0:a.status)||null===e||void 0===e||null===(s=e.response)||void 0===s||s.status,Promise.reject(e)}));const y=_,E=()=>y.get("category/get-following-merchants"),A=()=>{const{data:e,isLoading:a}=(0,v.I)({queryKey:["todos"],queryFn:E});return{isLoading:a,data:(null===e||void 0===e?void 0:e.data)||[]}};var f=s(5043),b=s(5475),I=s(6222),w=s(7110),C=s(2116),U=s(2326);let k=function(e){return e.UNCHECK="",e.ONLINE="ONLINE",e.OFFLINE="OFFLINE",e}({});const O=[{altName:"BRANDHOT",icon:(0,r.jsx)(U.I.HotBrands,{}),text:"category.Hot Brands"},{altName:"SUCKHOEVALAMDEP",icon:(0,r.jsx)(U.I.Heath,{}),text:"category.S\u1ee9c kho\u1ebb & l\xe0m \u0111\u1eb9p"},{altName:"THOITRANGNU",icon:(0,r.jsx)(U.I.Fasion,{}),text:"category.Th\u1eddi trang n\u1eef"},{altName:"THOITRANGNAM",icon:(0,r.jsx)(U.I.MenFasion,{}),text:"category.Th\u1eddi trang nam"},{altName:"PHUKIENTHOITRANG",icon:(0,r.jsx)(U.I.EyesGlass,{}),text:"category.Ph\u1ee5 ki\u1ec7n th\u1eddi trang"},{altName:"NHACUADOISONG",icon:(0,r.jsx)(U.I.Home,{}),text:"category.Nh\xe0 c\u1eeda \u0110\u1eddi s\u1ed1ng"},{altName:"GIAODUC",icon:(0,r.jsx)(U.I.Education,{}),text:"category.Gi\xe1o d\u1ee5c"},{altName:"THETHAOVADULICH",icon:(0,r.jsx)(U.I.Sport,{}),text:"category.Th\u1ec3 thao du l\u1ecbch"},{altName:"MEVABE",icon:(0,r.jsx)(U.I.Baby,{}),text:"category.M\u1eb9 & B\xe9"},{altName:"KHAC",icon:(0,r.jsx)(r.Fragment,{}),text:"category.Kh\xe1c"}],T=[{value:k.ONLINE,text:"category.Online"},{value:k.OFFLINE,text:"category.T\u1ea1i qu\u1ea7y"}];l.E.testUrl,l.E.testUrl,l.E.testUrl,l.E.testUrl,l.E.testUrl;const F=function(e){let{activeTabs:a,onChange:s=(()=>{})}=e;const{t:n}=(0,t.Bd)(),[c,l]=(0,f.useState)([]);return(0,f.useEffect)((()=>{l(a)}),[a]),(0,r.jsxs)("div",{className:"category__menu--mobile",children:[(0,r.jsx)("ul",{children:O.map(((e,a)=>(0,r.jsxs)("li",{className:p()([c[a]?"active":""]),children:[(0,r.jsxs)("span",{children:[e.icon," ",n(e.text)]}),(0,r.jsx)(w.A,{checked:!!c[a],onChange:()=>(e=>{const a=(0,g.cloneDeep)(c);a[e]=!a[e],l(a)})(a)})]},a)))}),(0,r.jsx)(C.A,{type:"button",className:"register-btn",onClick:()=>{s(c)},children:n("\xc1p d\u1ee5ng")})]})};const H=function(){const{t:e}=(0,t.Bd)(),[a]=(0,h.l)(),{data:s,isLoading:n}=A(),[c,l]=(0,f.useState)(!1),[i,o]=(0,f.useState)([!0]),[d,m]=(0,f.useState)([]),u=(0,f.useMemo)((()=>{let e=O;i.includes(!0)&&(e=O.filter(((e,a)=>i[a])));const a=e.map((e=>e.altName));return s.filter((e=>a.includes(e.altName))).map((e=>(e=>({...e,merchants:d.some((e=>!!e))?e.merchants.filter((e=>d.includes(e.runningForm))):e.merchants}))(e)))}),[s,i,d]),N=(0,f.useMemo)((()=>{let e=0;return u.forEach((a=>{e+=a.merchants.length})),e}),[u]),v=(0,f.useMemo)((()=>i.filter((e=>!!e)).length),[i]),_=(e,a)=>{const s=(0,g.cloneDeep)(d);s[e]=s[e]?k.UNCHECK:a,m(s)};return(0,r.jsxs)("div",{className:"container",children:[(0,r.jsxs)("div",{className:"category",children:[(0,r.jsxs)("div",{className:"category__sidebar",children:[(0,r.jsx)("h3",{className:"category__title",children:e("Danh m\u1ee5c")}),(0,r.jsx)("div",{className:"category__menu",children:O.map(((s,t)=>(0,r.jsxs)(j.A,{className:p()([i[t]?"active":"",(0,I.Ew)(a)?"medium":""]),onClick:()=>(e=>{const a=(0,g.cloneDeep)(i);a[e]=!a[e],o(a)})(t),children:[s.icon," ",e(s.text)]},t)))}),(0,r.jsx)("h3",{className:"category__title",children:e("Mua h\xe0ng")}),(0,r.jsx)("div",{className:"category__menu",children:T.map(((s,t)=>(0,r.jsx)(j.A,{className:p()([(0,I.Ew)(a)?"medium":"",d[t]===s.value?"active":""]),onClick:()=>_(t,s.value),children:e(s.text)},t)))})]}),(0,r.jsxs)("div",{className:"category__result",children:[(0,r.jsxs)("p",{className:"category__count",children:[N," ",e("K\u1ebft qu\u1ea3")]}),(0,r.jsxs)("div",{className:"category__sidebar--mobile",children:[T.map(((a,s)=>(0,r.jsx)(j.A,{className:p()(["mini",d[s]===a.value?"active":""]),onClick:()=>_(s,a.value),children:e(a.text)},s))),(0,r.jsxs)(j.A,{className:p()(["mini filter-btn",v?"active":""]),onClick:()=>{l(!0)},children:["Danh m\u1ee5c ",v||""]})]}),(0,r.jsx)("div",{className:"category__list",children:n?(0,r.jsx)("p",{children:"Loading..."}):u.map(((e,a)=>(0,r.jsx)(f.Fragment,{children:e.merchants.map(((e,s)=>(0,r.jsxs)("div",{className:"category__item",children:[(0,r.jsx)(b.N_,{to:e.website,children:(0,r.jsx)("img",{className:"cover-img",src:"https://fundiin.vn/file"+e.image,alt:"item"})}),[k.ONLINE,k.OFFLINE].includes(e.runningForm)?(0,r.jsx)("div",{className:p()(["tag","tag--".concat(e.runningForm==k.ONLINE?"online":"offline")]),children:(0,r.jsx)("span",{children:e.runningForm})}):null]},"".concat(a,"-").concat(s))))},a)))})]})]}),(0,r.jsx)(x.A,{open:c,title:e("category.Danh m\u1ee5c"),footer:(0,r.jsx)("div",{className:"ant-modal-footer__wrap"}),onCancel:()=>{l(!1)},children:(0,r.jsx)(F,{activeTabs:i,onChange:e=>{o(e),l(!1)}})})]})};const L=function(){return(0,h.r)("Fundiin - Brands"),(0,r.jsxs)(u.A,{children:[(0,r.jsx)("div",{className:"spacing"}),(0,r.jsx)(d,{}),(0,r.jsx)(H,{}),(0,r.jsx)(m.A,{})]})}}}]);
//# sourceMappingURL=96.7e0fa637.chunk.js.map