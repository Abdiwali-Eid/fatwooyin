"use strict";(self.webpackChunkfatwo_hub=self.webpackChunkfatwo_hub||[]).push([[536],{7474:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(7294);const a=n(3494).default.div.withConfig({displayName:"PageHeaderStyles",componentId:"sc-1vobhuo-0"})(["margin:3rem 0;max-width:400px;"]);var i=n(5296),o=n(5215);var l=function(e){let{title:t,description:n,children:l,className:c}=e;return r.createElement("div",{className:c},r.createElement(a,null,r.createElement(o.N,{style:{color:"white",paddingLeft:"10px"}},t),r.createElement(i.Z,{style:{color:"white",paddingLeft:"10px"}},n,l)))}},8109:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(7294);const a=n(3494).default.div.withConfig({displayName:"PageSpaceStyles",componentId:"sc-dhedhu-0"})(["padding-top:","px;padding-bottom:","px;"],(e=>e.top||100),(e=>e.bottom||100));var i=function(e){let{top:t,bottom:n,children:i}=e;return r.createElement(a,{top:t,bottom:n},i)}},4656:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(7294),a=n(1082),i=n(5505),o=n(3750);const l=n(3494).default.div.withConfig({displayName:"PaginationStyles",componentId:"sc-6zp600-0"})(["text-align:center;margin-top:5rem;.icons{display:flex;align-items:center;justify-content:center;gap:1rem;margin-bottom:1rem;a{display:flex;align-items:center;justify-content:center;font-size:1.6rem;background:var(--gray);padding:0.8rem;border-radius:4px;svg{padding:0;margin:0;}&.disabled{opacity:0.2;pointer-events:none;}}}"]);var c=n(5296);var s=function(e){let{baseURL:t,numberOfPages:n,currentPage:s}=e;const d=s-1<=1?"":(s-1).toString(),m=(s+1).toString();return r.createElement("div",{className:"container"},r.createElement(l,null,r.createElement("div",{className:"icons"},r.createElement(a.rU,{to:`${t}/${d}`,className:(0,i.Z)(s<=1&&"disabled")},r.createElement(o.YFh,null)," Prev"),r.createElement(a.rU,{to:`${t}/${m}`,className:(0,i.Z)(s>=n&&"disabled")},"Next ",r.createElement(o.Tfp,null))),r.createElement(c.Z,null,"page ",s," of ",n," pages")))}},6909:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(7294),a=n(9804),i=n(1082);const o=(0,n(3494).default)(i.rU).withConfig({displayName:"ButtonStyles",componentId:"sc-i54xud-0"})(["display:inline-block;cursor:pointer;outline:none;border:none;padding:1rem 2rem;border-radius:4px;font-size:1.6rem;background:",";border:",";color:",";@media only screen and (max-width:768px){padding:0.8rem 1.2rem;font-size:1.4rem;}"],(e=>{let{variant:t}=e;return t===a.U.primary?"linear-gradient(135deg, var(--secondary), var(--primary))":t===a.U.secondary?"var(--white-1)":"transparent"}),(e=>{let{variant:t}=e;return t===a.U.outline?"2px solid var(--primary)":"none"}),(e=>{let{variant:t}=e;return t===a.U.secondary?"var(--black-1)":"var(--white)"}));var l=function(e){let{children:t,tag:n,variant:i=a.U.primary,...l}=e;return r.createElement(o,Object.assign({as:n},l,{variant:i}),t)}},9876:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(7294),a=n(3494);const i=a.default.div.withConfig({displayName:"CategoryGridStyles",componentId:"sc-697zdb-0"})(["display:grid;margin-top:3.5rem;display:grid;gap:5rem;grid-template-columns:repeat(auto-fit,minmax(400px,1fr));@media only screen and (max-width:768px){grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:2rem;}"]);var o=n(3434),l=n(6909),c=n(9804);const s=a.default.div.withConfig({displayName:"CategoryItemStyles",componentId:"sc-1p6fg4h-0"})(["background:var(--black-2);padding:2rem;border-radius:6px;box-shadow:rgba(149,157,165,0.2) 0px 8px 24px;.title{margin-bottom:1rem;}.text{margin-bottom:2rem;}"]);var d=n(5215);var m=function(e){let{title:t,description:n,slug:a}=e;return r.createElement(s,null,r.createElement(d.D,{className:"title"},t),r.createElement("div",{className:"text"},r.createElement(o.Z,{value:n})),r.createElement(l.Z,{to:`/categories/${a.current}`,variant:c.U.secondary,style:{backgroundColor:"#79ade0"}},"Explore Category"))};var u=function(e){let{categories:t}=e;return r.createElement(i,null,t.map((e=>r.createElement(m,{key:e.id,title:e.title,description:e._rawDescription,slug:e.slug}))))}},9804:function(e,t,n){n.d(t,{U:function(){return r}});const r={primary:"primary",secondary:"secondary",outline:"outline"}},6997:function(e,t,n){n.r(t);var r=n(7294),a=n(8109),i=n(262),o=n(7474),l=n(9876),c=n(4656);t.default=function(e){let{data:t,pageContext:n}=e;const{currentPage:s,numberOfPages:d}=n,m=t.allSanityCategory.nodes;return r.createElement(r.Fragment,null,r.createElement(i.Z,{title:"Categories"}),r.createElement(a.Z,{top:80,bottom:100},r.createElement("div",{className:"container"},r.createElement(o.Z,{title:"All Categories",description:"This month will bring about the 88th Academy Awards. Starting in 1928, this prestigious award ceremony..."}),r.createElement(l.Z,{categories:m}),d>1&&r.createElement(c.Z,{currentPage:s,numberOfPages:d,baseURL:"/categories"}))))}}}]);
//# sourceMappingURL=component---src-templates-category-list-js-4234954f9fe86b834ab5.js.map