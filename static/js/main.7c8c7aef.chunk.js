(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{5405:function(e,t,n){e.exports=n(5523)},5522:function(e,t,n){},5523:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(24),i=n.n(o),s=n(13),c=n(14),l=n(21),u=n(20),h=n(22),d=n(23),p=(n(5410),n(30)),m=Object(d.createMuiTheme)({palette:{primary:p.red,secondary:p.blue}}),f=n(8),v=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={showInstalledMessage:!1,showUpdateMessage:!1,showUpdateOnRestartMessage:!1},n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.appServiceWorker;t&&(t.onInstalled(function(){return e.setState({showInstalledMessage:!0})}),t.onUpdateFound(function(){return e.setState({showUpdateMessage:!0})}))}},{key:"render",value:function(){var e=this;return r.a.createElement(a.Fragment,null,this.props.children,r.a.createElement(f.d,{open:this.state.showInstalledMessage,autoHideDuration:6e3,onClose:function(){return e.setState({showInstalledMessage:!1})},message:"The APP is ready to  work offline."}),r.a.createElement(f.d,{open:this.state.showUpdateMessage,onClose:function(){return e.setState({showUpdateMessage:!1,showUpdateOnRestartMessage:!0})},message:"A new version is available.",action:[r.a.createElement(f.b,{key:"undo",color:"secondary",size:"small",onClick:function(){return window.location.reload()}},"UPDATE")]}),r.a.createElement(f.d,{open:this.state.showUpdateOnRestartMessage,autoHideDuration:6e3,onClose:function(){return e.setState({showUpdateOnRestartMessage:!1})},message:"The APP will be updated on the next restart."}))}}]),t}(a.Component),g=n(5525),b=n(5526),w=n(5527),k=n(93),O=n(91),j=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).goBack=function(){return window.history.back()},n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.children,n=e.classes,a=e.title,o=e.backButton,i=void 0!==o&&o,s=e.rightAction,c=e.appBarProps,l=Object(k.a)(e,["children","classes","title","backButton","rightAction","appBarProps"]);return r.a.createElement(f.a,Object.assign({position:"sticky"},c,l),r.a.createElement(f.e,null,r.a.createElement("div",{className:n.menuButtonWrapper},i&&r.a.createElement(f.c,{color:"inherit","aria-label":"Menu",onClick:this.goBack},r.a.createElement(O.a,null))),a&&r.a.createElement(f.f,{variant:"title",color:"inherit",className:n.flex},a),s&&r.a.createElement("div",null,s)),t)}}]),t}(a.Component),y=Object(d.withStyles)({root:{},flex:{flex:1},menuButtonWrapper:{marginLeft:-12,marginRight:20}})(j),E=n(5524),P=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(a.Fragment,null,r.a.createElement(y,{title:"Farm\xe1cia solid\xe1ria"}),r.a.createElement("main",null,r.a.createElement(f.f,{gutterBottom:!0},"This is a Boilerplate"),r.a.createElement(f.b,{component:E.a,to:"about",variant:"contained",color:"secondary"},"Go to about")))}}]),t}(a.Component),W=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(a.Fragment,null,r.a.createElement(y,{title:"Sobre",backButton:!0}),r.a.createElement("main",null,r.a.createElement(f.f,{gutterBottom:!0},"This is an example page")))}}]),t}(a.Component),S=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(g.a,null,r.a.createElement(d.MuiThemeProvider,{theme:m},r.a.createElement(v,{appServiceWorker:this.props.appServiceWorker},r.a.createElement(b.a,null,r.a.createElement(w.a,{exact:!0,path:"/",component:P}),r.a.createElement(w.a,{exact:!0,path:"/about",component:W})))))}}]),t}(a.Component),M=(n(5522),new(function(){function e(){var t=this;Object(s.a)(this,e),this.isLocalhost=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)),this.installPromise=new Promise(function(e){return t.installPromiseResolver=e}),this.updatePromise=new Promise(function(e){return t.updatePromiseResolver=e}),this.onUpdateFound(function(){return console.log("New content is available; please refresh.")}),this.onInstalled(function(){return console.log("Content is cached for offline use.")})}return Object(c.a)(e,[{key:"register",value:function(){var e=this;if("serviceWorker"in navigator){if(new URL("/farmacia-frontend-react",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/farmacia-frontend-react","/service-worker.js");e.isLocalhost?(e.checkValidServiceWorker(t),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):e.registerValidSW(t)})}}},{key:"registerValidSW",value:function(e){var t=this;navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?t.updatePromiseResolver():t.installPromiseResolver())}}}).catch(function(e){console.error("Error during service worker registration:",e)})}},{key:"checkValidServiceWorker",value:function(e){var t=this;fetch(e).then(function(n){404===n.status||-1===n.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):t.registerValidSW(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}},{key:"unregister",value:function(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},{key:"onInstalled",value:function(e){this.installPromise.then(e).catch(console.error)}},{key:"onUpdateFound",value:function(e){this.updatePromise.then(e).catch(console.error)}}]),e}()));i.a.render(r.a.createElement(S,{appServiceWorker:M}),document.getElementById("root")),M.register()}},[[5405,1,2]]]);
//# sourceMappingURL=main.7c8c7aef.chunk.js.map