"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[314],{1314:function(e,t,r){r.r(t),r.d(t,{default:function(){return g}});var n=r(4270),a=r(4565),i=r(803),o=r(6015),s=r(3978),c=r(8055),l=r(5953),u=r(4598),d=r(1501),m=r(117),f=r(9434),v=r(5822),h=r(1087),p=r(3329),x=function(){var e=(0,f.I0)();return(0,p.jsx)(i.Z,{component:"main",maxWidth:"xs",children:(0,p.jsxs)(o.Z,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,p.jsx)(s.Z,{sx:{m:1,bgcolor:"secondary.main"},children:(0,p.jsx)(m.Z,{})}),(0,p.jsx)(a.Z,{component:"h1",variant:"h5",children:"Sign up"}),(0,p.jsxs)(c.Z,{component:"form",onSubmit:function(t){t.preventDefault();var r=t.currentTarget;e((0,v.z2)({name:r.elements.name.value,email:r.elements.email.value,password:r.elements.password.value})),r.reset()},sx:{mt:1},children:[(0,p.jsxs)(l.ZP,{container:!0,children:[(0,p.jsx)(l.ZP,{item:!0,xs:12,children:(0,p.jsx)(u.Z,{margin:"normal",required:!0,fullWidth:!0,name:"name",label:"Name",id:"name",autoFocus:!0})}),(0,p.jsx)(l.ZP,{item:!0,xs:12,children:(0,p.jsx)(u.Z,{margin:"normal",required:!0,fullWidth:!0,name:"email",label:"Email",id:"email",autoComplete:"email"})}),(0,p.jsx)(l.ZP,{item:!0,xs:12,children:(0,p.jsx)(u.Z,{margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"new-password"})})]}),(0,p.jsx)(d.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"Sign up"}),(0,p.jsx)(l.ZP,{container:!0,justifyContent:"flex-end",children:(0,p.jsx)(l.ZP,{item:!0,children:(0,p.jsx)(h.rU,{component:h.OL,href:"#",variant:"body2",to:"/login",children:"Already have an account? Sign in"})})})]})]})})};function g(){return(0,p.jsxs)("div",{children:[(0,p.jsx)(n.q,{children:(0,p.jsx)(a.Z,{variant:"h3",children:"Registration"})}),(0,p.jsx)(x,{})]})}},117:function(e,t,r){var n=r(1245),a=r(3329);t.Z=(0,n.Z)((0,a.jsx)("path",{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"}),"Lock")},3978:function(e,t,r){r.d(t,{Z:function(){return j}});var n=r(885),a=r(3366),i=r(7462),o=r(2791),s=r(8182),c=r(4419),l=r(277),u=r(5513),d=r(1245),m=r(3329),f=(0,d.Z)((0,m.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person"),v=r(5878),h=r(1217);function p(e){return(0,h.Z)("MuiAvatar",e)}(0,v.Z)("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);var x=["alt","children","className","component","imgProps","sizes","src","srcSet","variant"],g=(0,l.ZP)("div",{name:"MuiAvatar",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState;return[t.root,t[r.variant],r.colorDefault&&t.colorDefault]}})((function(e){var t=e.theme,r=e.ownerState;return(0,i.Z)({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:t.typography.fontFamily,fontSize:t.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},"rounded"===r.variant&&{borderRadius:(t.vars||t).shape.borderRadius},"square"===r.variant&&{borderRadius:0},r.colorDefault&&(0,i.Z)({color:(t.vars||t).palette.background.default},t.vars?{backgroundColor:t.vars.palette.Avatar.defaultBg}:{backgroundColor:"light"===t.palette.mode?t.palette.grey[400]:t.palette.grey[600]}))})),Z=(0,l.ZP)("img",{name:"MuiAvatar",slot:"Img",overridesResolver:function(e,t){return t.img}})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),b=(0,l.ZP)(f,{name:"MuiAvatar",slot:"Fallback",overridesResolver:function(e,t){return t.fallback}})({width:"75%",height:"75%"});var j=o.forwardRef((function(e,t){var r=(0,u.Z)({props:e,name:"MuiAvatar"}),l=r.alt,d=r.children,f=r.className,v=r.component,h=void 0===v?"div":v,j=r.imgProps,w=r.sizes,S=r.src,k=r.srcSet,y=r.variant,W=void 0===y?"circular":y,P=(0,a.Z)(r,x),R=null,C=function(e){var t=e.crossOrigin,r=e.referrerPolicy,a=e.src,i=e.srcSet,s=o.useState(!1),c=(0,n.Z)(s,2),l=c[0],u=c[1];return o.useEffect((function(){if(a||i){u(!1);var e=!0,n=new Image;return n.onload=function(){e&&u("loaded")},n.onerror=function(){e&&u("error")},n.crossOrigin=t,n.referrerPolicy=r,n.src=a,i&&(n.srcset=i),function(){e=!1}}}),[t,r,a,i]),l}((0,i.Z)({},j,{src:S,srcSet:k})),M=S||k,z=M&&"error"!==C,G=(0,i.Z)({},r,{colorDefault:!z,component:h,variant:W}),N=function(e){var t=e.classes,r={root:["root",e.variant,e.colorDefault&&"colorDefault"],img:["img"],fallback:["fallback"]};return(0,c.Z)(r,p,t)}(G);return R=z?(0,m.jsx)(Z,(0,i.Z)({alt:l,src:S,srcSet:k,sizes:w,ownerState:G,className:N.img},j)):null!=d?d:M&&l?l[0]:(0,m.jsx)(b,{className:N.fallback}),(0,m.jsx)(g,(0,i.Z)({as:h,ownerState:G,className:(0,s.Z)(N.root,f),ref:t},P,{children:R}))}))},803:function(e,t,r){r.d(t,{Z:function(){return k}});var n=r(4942),a=r(3366),i=r(7462),o=r(2791),s=r(8182),c=r(7312),l=r(1217),u=r(4419),d=r(7078),m=(0,r(4046).ZP)(),f=r(5080),v=r(3329),h=["className","component","disableGutters","fixed","maxWidth","classes"],p=(0,f.Z)(),x=m("div",{name:"MuiContainer",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState;return[t.root,t["maxWidth".concat((0,c.Z)(String(r.maxWidth)))],r.fixed&&t.fixed,r.disableGutters&&t.disableGutters]}}),g=function(e){return(0,d.Z)({props:e,name:"MuiContainer",defaultTheme:p})},Z=function(e,t){var r=e.classes,n=e.fixed,a=e.disableGutters,i=e.maxWidth,o={root:["root",i&&"maxWidth".concat((0,c.Z)(String(i))),n&&"fixed",a&&"disableGutters"]};return(0,u.Z)(o,(function(e){return(0,l.Z)(t,e)}),r)};var b=r(9853),j=r(277),w=r(5513),S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.createStyledComponent,r=void 0===t?x:t,c=e.useThemeProps,l=void 0===c?g:c,u=e.componentName,d=void 0===u?"MuiContainer":u,m=r((function(e){var t=e.theme,r=e.ownerState;return(0,i.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!r.disableGutters&&(0,n.Z)({paddingLeft:t.spacing(2),paddingRight:t.spacing(2)},t.breakpoints.up("sm"),{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}))}),(function(e){var t=e.theme;return e.ownerState.fixed&&Object.keys(t.breakpoints.values).reduce((function(e,r){var n=r,a=t.breakpoints.values[n];return 0!==a&&(e[t.breakpoints.up(n)]={maxWidth:"".concat(a).concat(t.breakpoints.unit)}),e}),{})}),(function(e){var t=e.theme,r=e.ownerState;return(0,i.Z)({},"xs"===r.maxWidth&&(0,n.Z)({},t.breakpoints.up("xs"),{maxWidth:Math.max(t.breakpoints.values.xs,444)}),r.maxWidth&&"xs"!==r.maxWidth&&(0,n.Z)({},t.breakpoints.up(r.maxWidth),{maxWidth:"".concat(t.breakpoints.values[r.maxWidth]).concat(t.breakpoints.unit)}))})),f=o.forwardRef((function(e,t){var r=l(e),n=r.className,o=r.component,c=void 0===o?"div":o,u=r.disableGutters,f=void 0!==u&&u,p=r.fixed,x=void 0!==p&&p,g=r.maxWidth,b=void 0===g?"lg":g,j=(0,a.Z)(r,h),w=(0,i.Z)({},r,{component:c,disableGutters:f,fixed:x,maxWidth:b}),S=Z(w,d);return(0,v.jsx)(m,(0,i.Z)({as:c,ownerState:w,className:(0,s.Z)(S.root,n),ref:t},j))}));return f}({createStyledComponent:(0,j.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState;return[t.root,t["maxWidth".concat((0,b.Z)(String(r.maxWidth)))],r.fixed&&t.fixed,r.disableGutters&&t.disableGutters]}}),useThemeProps:function(e){return(0,w.Z)({props:e,name:"MuiContainer"})}}),k=S}}]);
//# sourceMappingURL=314.a3829324.chunk.js.map