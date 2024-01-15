"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[406],{7047:(e,t,n)=>{n.d(t,{Z:()=>A});var o=n(168),a=n(3366),r=n(7462),i=n(2791),s=n(3733),l=n(2554),c=n(4419);function h(e){return String(e).match(/[\d.\-+]*\s*(.*)/)[1]||""}function d(e){return parseFloat(e)}var u=n(2065),p=n(6934),m=n(1402),f=n(5878),v=n(1217);function g(e){return(0,v.Z)("MuiSkeleton",e)}(0,f.Z)("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);var b,k,w,Z,y=n(184);const S=["animation","className","component","height","style","variant","width"];let C,x,R,M;const F=(0,l.F4)(C||(C=b||(b=(0,o.Z)(["\n  0% {\n    opacity: 1;\n  }\n\n  50% {\n    opacity: 0.4;\n  }\n\n  100% {\n    opacity: 1;\n  }\n"])))),N=(0,l.F4)(x||(x=k||(k=(0,o.Z)(["\n  0% {\n    transform: translateX(-100%);\n  }\n\n  50% {\n    /* +0.5s of delay between each loop */\n    transform: translateX(100%);\n  }\n\n  100% {\n    transform: translateX(100%);\n  }\n"])))),j=(0,p.ZP)("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.variant],!1!==n.animation&&t[n.animation],n.hasChildren&&t.withChildren,n.hasChildren&&!n.width&&t.fitContent,n.hasChildren&&!n.height&&t.heightAuto]}})((e=>{let{theme:t,ownerState:n}=e;const o=h(t.shape.borderRadius)||"px",a=d(t.shape.borderRadius);return(0,r.Z)({display:"block",backgroundColor:t.vars?t.vars.palette.Skeleton.bg:(0,u.Fq)(t.palette.text.primary,"light"===t.palette.mode?.11:.13),height:"1.2em"},"text"===n.variant&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:"".concat(a).concat(o,"/").concat(Math.round(a/.6*10)/10).concat(o),"&:empty:before":{content:'"\\00a0"'}},"circular"===n.variant&&{borderRadius:"50%"},"rounded"===n.variant&&{borderRadius:(t.vars||t).shape.borderRadius},n.hasChildren&&{"& > *":{visibility:"hidden"}},n.hasChildren&&!n.width&&{maxWidth:"fit-content"},n.hasChildren&&!n.height&&{height:"auto"})}),(e=>{let{ownerState:t}=e;return"pulse"===t.animation&&(0,l.iv)(R||(R=w||(w=(0,o.Z)(["\n      animation: "," 2s ease-in-out 0.5s infinite;\n    "]))),F)}),(e=>{let{ownerState:t,theme:n}=e;return"wave"===t.animation&&(0,l.iv)(M||(M=Z||(Z=(0,o.Z)(["\n      position: relative;\n      overflow: hidden;\n\n      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */\n      -webkit-mask-image: -webkit-radial-gradient(white, black);\n\n      &::after {\n        animation: "," 2s linear 0.5s infinite;\n        background: linear-gradient(\n          90deg,\n          transparent,\n          ",",\n          transparent\n        );\n        content: '';\n        position: absolute;\n        transform: translateX(-100%); /* Avoid flash during server-side hydration */\n        bottom: 0;\n        left: 0;\n        right: 0;\n        top: 0;\n      }\n    "]))),N,(n.vars||n).palette.action.hover)})),A=i.forwardRef((function(e,t){const n=(0,m.Z)({props:e,name:"MuiSkeleton"}),{animation:o="pulse",className:i,component:l="span",height:h,style:d,variant:u="text",width:p}=n,f=(0,a.Z)(n,S),v=(0,r.Z)({},n,{animation:o,component:l,variant:u,hasChildren:Boolean(f.children)}),b=(e=>{const{classes:t,variant:n,animation:o,hasChildren:a,width:r,height:i}=e,s={root:["root",n,o,a&&"withChildren",a&&!r&&"fitContent",a&&!i&&"heightAuto"]};return(0,c.Z)(s,g,t)})(v);return(0,y.jsx)(j,(0,r.Z)({as:l,ref:t,className:(0,s.Z)(b.root,i),ownerState:v},f,{style:(0,r.Z)({width:p,height:h},d)}))}))},6314:(e,t,n)=>{n.d(t,{Z:()=>R});var o=n(3366),a=n(7462),r=n(2791),i=n(3733),s=n(2466),l=n(4419),c=n(1217),h=n(3457),d=n(8691),u=n(8519),p=n(5080),m=n(1184),f=n(5682),v=n(184);const g=["component","direction","spacing","divider","children","className","useFlexGap"],b=(0,p.Z)(),k=(0,h.Z)("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>t.root});function w(e){return(0,d.Z)({props:e,name:"MuiStack",defaultTheme:b})}function Z(e,t){const n=r.Children.toArray(e).filter(Boolean);return n.reduce(((e,o,a)=>(e.push(o),a<n.length-1&&e.push(r.cloneElement(t,{key:"separator-".concat(a)})),e)),[])}const y=e=>{let{ownerState:t,theme:n}=e,o=(0,a.Z)({display:"flex",flexDirection:"column"},(0,m.k9)({theme:n},(0,m.P$)({values:t.direction,breakpoints:n.breakpoints.values}),(e=>({flexDirection:e}))));if(t.spacing){const e=(0,f.hB)(n),a=Object.keys(n.breakpoints.values).reduce(((e,n)=>(("object"===typeof t.spacing&&null!=t.spacing[n]||"object"===typeof t.direction&&null!=t.direction[n])&&(e[n]=!0),e)),{}),r=(0,m.P$)({values:t.direction,base:a}),i=(0,m.P$)({values:t.spacing,base:a});"object"===typeof r&&Object.keys(r).forEach(((e,t,n)=>{if(!r[e]){const o=t>0?r[n[t-1]]:"column";r[e]=o}}));const l=(n,o)=>{return t.useFlexGap?{gap:(0,f.NA)(e,n)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{["margin".concat((a=o?r[o]:t.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[a]))]:(0,f.NA)(e,n)}};var a};o=(0,s.Z)(o,(0,m.k9)({theme:n},i,l))}return o=(0,m.dt)(n.breakpoints,o),o};var S=n(6934),C=n(1402);const x=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{createStyledComponent:t=k,useThemeProps:n=w,componentName:s="MuiStack"}=e,h=t(y),d=r.forwardRef((function(e,t){const r=n(e),d=(0,u.Z)(r),{component:p="div",direction:m="column",spacing:f=0,divider:b,children:k,className:w,useFlexGap:y=!1}=d,S=(0,o.Z)(d,g),C={direction:m,spacing:f,useFlexGap:y},x=(0,l.Z)({root:["root"]},(e=>(0,c.Z)(s,e)),{});return(0,v.jsx)(h,(0,a.Z)({as:p,ownerState:C,ref:t,className:(0,i.Z)(x.root,w)},S,{children:b?Z(k,b):k}))}));return d}({createStyledComponent:(0,S.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>t.root}),useThemeProps:e=>(0,C.Z)({props:e,name:"MuiStack"})}),R=x}}]);
//# sourceMappingURL=406.06ac5328.chunk.js.map