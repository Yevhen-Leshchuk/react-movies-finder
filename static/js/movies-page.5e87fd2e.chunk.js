"use strict";(self.webpackChunkreact_movies_finder=self.webpackChunkreact_movies_finder||[]).push([[493],{9964:function(e,t,n){n.r(t),n.d(t,{default:function(){return le}});var r=n(8683),o=n(8152),a=n(2791),s=n(3504),i=n(6871);function c(e){var t,n,r="";if("string"===typeof e||"number"===typeof e)r+=e;else if("object"===typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=c(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function u(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=c(e))&&(r&&(r+=" "),r+=t);return r}var l=n(4164);function d(){return d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},d.apply(this,arguments)}function f(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}function p(e){return"number"===typeof e&&!isNaN(e)}function m(e){return"boolean"===typeof e}function v(e){return"string"===typeof e}function g(e){return"function"===typeof e}function h(e){return v(e)||g(e)?e:null}function y(e){return 0===e||e}var T=!("undefined"===typeof window||!window.document||!window.document.createElement);function b(e){return(0,a.isValidElement)(e)||v(e)||g(e)||p(e)}var E={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},_={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"};function C(e){var t=e.enter,n=e.exit,r=e.appendPosition,o=void 0!==r&&r,s=e.collapse,i=void 0===s||s,c=e.collapseDuration,u=void 0===c?300:c;return function(e){var r=e.children,s=e.position,c=e.preventExitTransition,l=e.done,d=e.nodeRef,f=e.isIn,p=o?t+"--"+s:t,m=o?n+"--"+s:n,v=(0,a.useRef)(),g=(0,a.useRef)(0);function h(e){if(e.target===d.current){var t=d.current;t.dispatchEvent(new Event("d")),t.removeEventListener("animationend",h),t.removeEventListener("animationcancel",h),0===g.current&&(t.className=v.current)}}function y(){var e=d.current;e.removeEventListener("animationend",y),i?function(e,t,n){void 0===n&&(n=300);var r=e.scrollHeight,o=e.style;requestAnimationFrame((function(){o.minHeight="initial",o.height=r+"px",o.transition="all "+n+"ms",requestAnimationFrame((function(){o.height="0",o.padding="0",o.margin="0",setTimeout(t,n)}))}))}(e,l,u):l()}return(0,a.useLayoutEffect)((function(){!function(){var e=d.current;v.current=e.className,e.className+=" "+p,e.addEventListener("animationend",h),e.addEventListener("animationcancel",h)}()}),[]),(0,a.useEffect)((function(){f||(c?y():function(){g.current=1;var e=d.current;e.className+=" "+m,e.addEventListener("animationend",y)}())}),[f]),a.createElement(a.Fragment,null,r)}}var O={list:new Map,emitQueue:new Map,on:function(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off:function(e,t){if(t){var n=this.list.get(e).filter((function(e){return e!==t}));return this.list.set(e,n),this}return this.list.delete(e),this},cancelEmit:function(e){var t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit:function(e){for(var t=this,n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];this.list.has(e)&&this.list.get(e).forEach((function(n){var o=setTimeout((function(){n.apply(void 0,r)}),0);t.emitQueue.has(e)||t.emitQueue.set(e,[]),t.emitQueue.get(e).push(o)}))}},I=["delay","staleId"];function x(e){var t=(0,a.useReducer)((function(e){return e+1}),0)[1],n=(0,a.useState)([]),r=n[0],o=n[1],s=(0,a.useRef)(null),i=(0,a.useRef)(new Map).current,c=function(e){return-1!==r.indexOf(e)},u=(0,a.useRef)({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:c,getToast:function(e){return i.get(e)}}).current;function l(e){var t=e.containerId;!u.props.limit||t&&u.containerId!==t||(u.count-=u.queue.length,u.queue=[])}function d(e){o((function(t){return y(e)?t.filter((function(t){return t!==e})):[]}))}function T(){var e=u.queue.shift();_(e.toastContent,e.toastProps,e.staleId)}function E(e,n){var r=n.delay,o=n.staleId,c=f(n,I);if(b(e)&&!function(e){return!s.current||u.props.enableMultiContainer&&e.containerId!==u.props.containerId||i.has(e.toastId)&&null==e.updateId}(c)){var l=c.toastId,E=c.updateId,C=c.data,O=u.props,x=function(){return d(l)},L=null==E;L&&u.count++;var w,N,k={toastId:l,updateId:E,isLoading:c.isLoading,theme:c.theme||O.theme,icon:null!=c.icon?c.icon:O.icon,isIn:!1,key:c.key||u.toastKey++,type:c.type,closeToast:x,closeButton:c.closeButton,rtl:O.rtl,position:c.position||O.position,transition:c.transition||O.transition,className:h(c.className||O.toastClassName),bodyClassName:h(c.bodyClassName||O.bodyClassName),style:c.style||O.toastStyle,bodyStyle:c.bodyStyle||O.bodyStyle,onClick:c.onClick||O.onClick,pauseOnHover:m(c.pauseOnHover)?c.pauseOnHover:O.pauseOnHover,pauseOnFocusLoss:m(c.pauseOnFocusLoss)?c.pauseOnFocusLoss:O.pauseOnFocusLoss,draggable:m(c.draggable)?c.draggable:O.draggable,draggablePercent:c.draggablePercent||O.draggablePercent,draggableDirection:c.draggableDirection||O.draggableDirection,closeOnClick:m(c.closeOnClick)?c.closeOnClick:O.closeOnClick,progressClassName:h(c.progressClassName||O.progressClassName),progressStyle:c.progressStyle||O.progressStyle,autoClose:!c.isLoading&&(w=c.autoClose,N=O.autoClose,!1===w||p(w)&&w>0?w:N),hideProgressBar:m(c.hideProgressBar)?c.hideProgressBar:O.hideProgressBar,progress:c.progress,role:c.role||O.role,deleteToast:function(){i.delete(l);var e=u.queue.length;if(u.count=y(l)?u.count-1:u.count-u.displayedToast,u.count<0&&(u.count=0),e>0){var n=y(l)?1:u.props.limit;if(1===e||1===n)u.displayedToast++,T();else{var r=n>e?e:n;u.displayedToast=r;for(var o=0;o<r;o++)T()}}else t()}};g(c.onOpen)&&(k.onOpen=c.onOpen),g(c.onClose)&&(k.onClose=c.onClose),k.closeButton=O.closeButton,!1===c.closeButton||b(c.closeButton)?k.closeButton=c.closeButton:!0===c.closeButton&&(k.closeButton=!b(O.closeButton)||O.closeButton);var R=e;(0,a.isValidElement)(e)&&!v(e.type)?R=(0,a.cloneElement)(e,{closeToast:x,toastProps:k,data:C}):g(e)&&(R=e({closeToast:x,toastProps:k,data:C})),O.limit&&O.limit>0&&u.count>O.limit&&L?u.queue.push({toastContent:R,toastProps:k,staleId:o}):p(r)&&r>0?setTimeout((function(){_(R,k,o)}),r):_(R,k,o)}}function _(e,t,n){var r=t.toastId;n&&i.delete(n),i.set(r,{content:e,props:t}),o((function(e){return[].concat(e,[r]).filter((function(e){return e!==n}))}))}return(0,a.useEffect)((function(){return u.containerId=e.containerId,O.cancelEmit(3).on(0,E).on(1,(function(e){return s.current&&d(e)})).on(5,l).emit(2,u),function(){return O.emit(3,u)}}),[]),(0,a.useEffect)((function(){u.isToastActive=c,u.displayedToast=r.length,O.emit(4,r.length,e.containerId)}),[r]),(0,a.useEffect)((function(){u.props=e})),{getToastToRender:function(t){var n=new Map,r=Array.from(i.values());return e.newestOnTop&&r.reverse(),r.forEach((function(e){var t=e.props.position;n.has(t)||n.set(t,[]),n.get(t).push(e)})),Array.from(n,(function(e){return t(e[0],e[1])}))},containerRef:s,isToastActive:c}}function L(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function w(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function N(e){var t=(0,a.useState)(!1),n=t[0],r=t[1],o=(0,a.useState)(!1),s=o[0],i=o[1],c=(0,a.useRef)(null),u=(0,a.useRef)({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,l=(0,a.useRef)(e),d=e.autoClose,f=e.pauseOnHover,p=e.closeToast,m=e.onClick,v=e.closeOnClick;function h(t){if(e.draggable){u.didMove=!1,document.addEventListener("mousemove",E),document.addEventListener("mouseup",_),document.addEventListener("touchmove",E),document.addEventListener("touchend",_);var n=c.current;u.canCloseOnClick=!0,u.canDrag=!0,u.boundingRect=n.getBoundingClientRect(),n.style.transition="",u.x=L(t.nativeEvent),u.y=w(t.nativeEvent),"x"===e.draggableDirection?(u.start=u.x,u.removalDistance=n.offsetWidth*(e.draggablePercent/100)):(u.start=u.y,u.removalDistance=n.offsetHeight*(80===e.draggablePercent?1.5*e.draggablePercent:e.draggablePercent/100))}}function y(){if(u.boundingRect){var t=u.boundingRect,n=t.top,r=t.bottom,o=t.left,a=t.right;e.pauseOnHover&&u.x>=o&&u.x<=a&&u.y>=n&&u.y<=r?b():T()}}function T(){r(!0)}function b(){r(!1)}function E(t){var r=c.current;u.canDrag&&r&&(u.didMove=!0,n&&b(),u.x=L(t),u.y=w(t),"x"===e.draggableDirection?u.delta=u.x-u.start:u.delta=u.y-u.start,u.start!==u.x&&(u.canCloseOnClick=!1),r.style.transform="translate"+e.draggableDirection+"("+u.delta+"px)",r.style.opacity=""+(1-Math.abs(u.delta/u.removalDistance)))}function _(){document.removeEventListener("mousemove",E),document.removeEventListener("mouseup",_),document.removeEventListener("touchmove",E),document.removeEventListener("touchend",_);var t=c.current;if(u.canDrag&&u.didMove&&t){if(u.canDrag=!1,Math.abs(u.delta)>u.removalDistance)return i(!0),void e.closeToast();t.style.transition="transform 0.2s, opacity 0.2s",t.style.transform="translate"+e.draggableDirection+"(0)",t.style.opacity="1"}}(0,a.useEffect)((function(){l.current=e})),(0,a.useEffect)((function(){return c.current&&c.current.addEventListener("d",T,{once:!0}),g(e.onOpen)&&e.onOpen((0,a.isValidElement)(e.children)&&e.children.props),function(){var e=l.current;g(e.onClose)&&e.onClose((0,a.isValidElement)(e.children)&&e.children.props)}}),[]),(0,a.useEffect)((function(){return e.pauseOnFocusLoss&&function(){document.hasFocus()||b();window.addEventListener("focus",T),window.addEventListener("blur",b)}(),function(){e.pauseOnFocusLoss&&(window.removeEventListener("focus",T),window.removeEventListener("blur",b))}}),[e.pauseOnFocusLoss]);var C={onMouseDown:h,onTouchStart:h,onMouseUp:y,onTouchEnd:y};return d&&f&&(C.onMouseEnter=b,C.onMouseLeave=T),v&&(C.onClick=function(e){m&&m(e),u.canCloseOnClick&&p()}),{playToast:T,pauseToast:b,isRunning:n,preventExitTransition:s,toastRef:c,eventHandlers:C}}function k(e){var t=e.closeToast,n=e.theme,r=e.ariaLabel,o=void 0===r?"close":r;return(0,a.createElement)("button",{className:"Toastify__close-button Toastify__close-button--"+n,type:"button",onClick:function(e){e.stopPropagation(),t(e)},"aria-label":o},(0,a.createElement)("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},(0,a.createElement)("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function R(e){var t,n,r=e.delay,o=e.isRunning,s=e.closeToast,i=e.type,c=e.hide,l=e.className,f=e.style,p=e.controlledProgress,m=e.progress,v=e.rtl,h=e.isIn,y=e.theme,T=d({},f,{animationDuration:r+"ms",animationPlayState:o?"running":"paused",opacity:c?0:1});p&&(T.transform="scaleX("+m+")");var b=u("Toastify__progress-bar",p?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar-theme--"+y,"Toastify__progress-bar--"+i,((t={})["Toastify__progress-bar--rtl"]=v,t)),E=g(l)?l({rtl:v,type:i,defaultClassName:b}):u(b,l),_=((n={})[p&&m>=1?"onTransitionEnd":"onAnimationEnd"]=p&&m<1?null:function(){h&&s()},n);return(0,a.createElement)("div",Object.assign({role:"progressbar","aria-hidden":c?"true":"false","aria-label":"notification timer",className:E,style:T},_))}R.defaultProps={type:_.DEFAULT,hide:!1};var S=["theme","type"],P=function(e){var t=e.theme,n=e.type,r=f(e,S);return(0,a.createElement)("svg",Object.assign({viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===t?"currentColor":"var(--toastify-icon-color-"+n+")"},r))};var B={info:function(e){return(0,a.createElement)(P,Object.assign({},e),(0,a.createElement)("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return(0,a.createElement)(P,Object.assign({},e),(0,a.createElement)("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return(0,a.createElement)(P,Object.assign({},e),(0,a.createElement)("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return(0,a.createElement)(P,Object.assign({},e),(0,a.createElement)("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return(0,a.createElement)("div",{className:"Toastify__spinner"})}},M=function(e){var t,n,r=N(e),o=r.isRunning,s=r.preventExitTransition,i=r.toastRef,c=r.eventHandlers,l=e.closeButton,d=e.children,f=e.autoClose,p=e.onClick,m=e.type,h=e.hideProgressBar,y=e.closeToast,T=e.transition,b=e.position,E=e.className,_=e.style,C=e.bodyClassName,O=e.bodyStyle,I=e.progressClassName,x=e.progressStyle,L=e.updateId,w=e.role,k=e.progress,S=e.rtl,P=e.toastId,M=e.deleteToast,F=e.isIn,j=e.isLoading,D=e.icon,A=e.theme,H=u("Toastify__toast","Toastify__toast-theme--"+A,"Toastify__toast--"+m,((t={})["Toastify__toast--rtl"]=S,t)),Z=g(E)?E({rtl:S,position:b,type:m,defaultClassName:H}):u(H,E),z=!!k,U=B[m],q={theme:A,type:m},G=U&&U(q);return!1===D?G=void 0:g(D)?G=D(q):(0,a.isValidElement)(D)?G=(0,a.cloneElement)(D,q):v(D)?G=D:j&&(G=B.spinner()),(0,a.createElement)(T,{isIn:F,done:M,position:b,preventExitTransition:s,nodeRef:i},(0,a.createElement)("div",Object.assign({id:P,onClick:p,className:Z},c,{style:_,ref:i}),(0,a.createElement)("div",Object.assign({},F&&{role:w},{className:g(C)?C({type:m}):u("Toastify__toast-body",C),style:O}),G&&(0,a.createElement)("div",{className:u("Toastify__toast-icon",(n={},n["Toastify--animate-icon Toastify__zoom-enter"]=!j,n))},G),(0,a.createElement)("div",null,d)),function(e){if(e){var t={closeToast:y,type:m,theme:A};return g(e)?e(t):(0,a.isValidElement)(e)?(0,a.cloneElement)(e,t):void 0}}(l),(f||z)&&(0,a.createElement)(R,Object.assign({},L&&!z?{key:"pb-"+L}:{},{rtl:S,theme:A,delay:f,isRunning:o,isIn:F,closeToast:y,hide:h,type:m,style:x,className:I,controlledProgress:z,progress:k}))))},F=C({enter:"Toastify--animate Toastify__bounce-enter",exit:"Toastify--animate Toastify__bounce-exit",appendPosition:!0}),j=function(e){var t=x(e),n=t.getToastToRender,r=t.containerRef,o=t.isToastActive,s=e.className,i=e.style,c=e.rtl,l=e.containerId;function f(e){var t,n=u("Toastify__toast-container","Toastify__toast-container--"+e,((t={})["Toastify__toast-container--rtl"]=c,t));return g(s)?s({position:e,rtl:c,defaultClassName:n}):u(n,h(s))}return(0,a.createElement)("div",{ref:r,className:"Toastify",id:l},n((function(e,t){var n=t.length?d({},i):d({},i,{pointerEvents:"none"});return(0,a.createElement)("div",{className:f(e),style:n,key:"container-"+e},t.map((function(e){var t=e.content,n=e.props;return(0,a.createElement)(M,Object.assign({},n,{isIn:o(n.toastId),key:"toast-"+n.key,closeButton:!0===n.closeButton?k:n.closeButton}),t)})))})))};j.defaultProps={position:E.TOP_RIGHT,transition:F,rtl:!1,autoClose:5e3,hideProgressBar:!1,closeButton:k,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,newestOnTop:!1,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};var D,A,H,Z=new Map,z=[],U=!1;function q(){return Math.random().toString(36).substring(2,9)}function G(e){return e&&(v(e.toastId)||p(e.toastId))?e.toastId:q()}function Q(e,t){return Z.size>0?O.emit(0,e,t):(z.push({content:e,options:t}),U&&T&&(U=!1,A=document.createElement("div"),document.body.appendChild(A),(0,l.render)((0,a.createElement)(j,Object.assign({},H)),A))),t.toastId}function V(e,t){return d({},t,{type:t&&t.type||e,toastId:G(t)})}function W(e){return function(t,n){return Q(t,V(e,n))}}function X(e,t){return Q(e,V(_.DEFAULT,t))}X.loading=function(e,t){return Q(e,V(_.DEFAULT,d({isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1},t)))},X.promise=function(e,t,n){var r,o=t.pending,a=t.error,s=t.success;o&&(r=v(o)?X.loading(o,n):X.loading(o.render,d({},n,o)));var i={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},c=function(e,t,o){if(null!=t){var a=d({type:e},i,n,{data:o}),s=v(t)?{render:t}:t;return r?X.update(r,d({},a,s)):X(s.render,d({},a,s)),o}X.dismiss(r)},u=g(e)?e():e;return u.then((function(e){return c("success",s,e)})).catch((function(e){return c("error",a,e)})),u},X.success=W(_.SUCCESS),X.info=W(_.INFO),X.error=W(_.ERROR),X.warning=W(_.WARNING),X.warn=X.warning,X.dark=function(e,t){return Q(e,V(_.DEFAULT,d({theme:"dark"},t)))},X.dismiss=function(e){return O.emit(1,e)},X.clearWaitingQueue=function(e){return void 0===e&&(e={}),O.emit(5,e)},X.isActive=function(e){var t=!1;return Z.forEach((function(n){n.isToastActive&&n.isToastActive(e)&&(t=!0)})),t},X.update=function(e,t){void 0===t&&(t={}),setTimeout((function(){var n=function(e,t){var n=t.containerId,r=Z.get(n||D);return r?r.getToast(e):null}(e,t);if(n){var r=n.props,o=n.content,a=d({},r,t,{toastId:t.toastId||e,updateId:q()});a.toastId!==e&&(a.staleId=e);var s=a.render||o;delete a.render,Q(s,a)}}),0)},X.done=function(e){X.update(e,{progress:1})},X.onChange=function(e){return g(e)&&O.on(4,e),function(){g(e)&&O.off(4,e)}},X.configure=function(e){void 0===e&&(e={}),U=!0,H=e},X.POSITION=E,X.TYPE=_,O.on(2,(function(e){D=e.containerId||e,Z.set(D,e),z.forEach((function(e){O.emit(0,e.content,e.options)})),z=[]})).on(3,(function(e){Z.delete(e.containerId||e),0===Z.size&&O.off(0).off(1).off(5),T&&A&&document.body.removeChild(A)}));var Y=n(8565),K="Form_SearchForm__xnVJ6",J="Form_SearchFormButton__XH-cE",$="Form_SearchFormButtonLabel__FZYs0",ee="Form_SearchFormInput__EQwfW",te=n(184),ne=function(e){var t=e.onSubmit,n=(0,a.useState)(""),r=(0,o.Z)(n,2),s=r[0],i=r[1];return(0,te.jsxs)("form",{className:K,onSubmit:function(e){e.preventDefault(),""!==s.trim()?(t(s),i("")):X.error("Enter correct value!")},children:[(0,te.jsx)("button",{type:"submit",className:J,children:(0,te.jsx)("span",{className:$,children:"Search"})}),(0,te.jsx)("input",{className:ee,type:"text",name:"movieName",value:s,onChange:function(e){var t=e.currentTarget.value;i(t)},autoComplete:"off",autoFocus:!0,placeholder:"Search movies"})]})},re=n(7552),oe=n(4757),ae="MoviesPage_Galery__HoLg9",se="MoviesPage_GaleryCard__HVBTt",ie="MoviesPage_GalleryBox__cWow6",ce="MoviesPage_GalleryBoxImage__uXXSR",ue="MoviesPage_GaleryCardTitle__L+IIk",le=function(){var e=(0,i.s0)(),t=(0,i.TH)(),n=(0,a.useState)([]),c=(0,o.Z)(n,2),u=c[0],l=c[1],d=(0,a.useState)(!1),f=(0,o.Z)(d,2),p=f[0],m=f[1],v=new URLSearchParams(t.search).get("query");return(0,a.useEffect)((function(){if(v){console.log(v);m(!0),Y.Z.fetcnOnSearch(v).then((function(n){var o=n.results;if(console.log(o.length),0===o.length)return X.error("Movie not found!"),void e((0,r.Z)((0,r.Z)({},t),{},{search:""}));l(o)})).finally((function(){m(!1)})).catch((function(e){console.log(e)}))}}),[v,t,e]),(0,te.jsxs)(te.Fragment,{children:[(0,te.jsx)(ne,{onSubmit:function(n){n&&e((0,r.Z)((0,r.Z)({},t),{},{search:"query=".concat(n)}))}}),p&&(0,te.jsx)(re.Z,{}),(0,te.jsx)("ul",{className:ae,children:u.map((function(e){var n;return(0,te.jsxs)("li",{className:se,children:[(0,te.jsx)("div",{className:ie,children:(0,te.jsx)(s.rU,{to:{pathname:"".concat(e.id),state:{from:t}},children:(0,te.jsx)("img",{className:ce,src:e.poster_path?"https://image.tmdb.org/t/p/w300/".concat(e.poster_path):oe,alt:e.title})})}),(0,te.jsxs)("p",{className:ue,children:[" ",null!==(n=e.name)&&void 0!==n?n:e.title]})]},e.id)}))}),(0,te.jsx)(j,{autoClose:3e3,position:"top-right",type:"default"})]})}},8565:function(e,t,n){var r=n(5861),o=n(7757),a=n.n(o),s=n(4569),i=n.n(s),c="c02b36da545a5844f0cde427ebff9c5c",u="https://api.themoviedb.org/3",l=function(){var e=(0,r.Z)(a().mark((function e(){var t,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i().get("".concat(u,"/trending/all/day?api_key=").concat(c));case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i().get("".concat(u,"/search/movie?api_key=").concat(c,"&query=").concat(t));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i().get("".concat(u,"/movie/").concat(t,"?api_key=").concat(c,"&language=en-US"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i().get("".concat(u,"/movie/").concat(t,"/credits?api_key=").concat(c,"&language=en-US"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=(0,r.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i().get("".concat(u,"/movie/").concat(t,"/reviews?api_key=").concat(c,"&language=en-US"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v={fetchTrending:l,fetcnOnSearch:d,fetchMovieDetail:f,fetchMovieCredits:p,fetchMovieReviews:m};t.Z=v},4757:function(e,t,n){e.exports=n.p+"static/media/no-poster.51f65e5bfc2262c3d1bb.jpg"}}]);
//# sourceMappingURL=movies-page.5e87fd2e.chunk.js.map