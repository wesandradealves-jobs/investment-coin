function mobileNavigation(){$(".tcon").toggleClass("tcon-transform"),$(".tcon").is(".tcon-transform")?$(".navigation.-mobile").addClass("-active"):$(".navigation.-mobile").removeClass("-active")}function closeMenu(){$(".navigation.-mobile").removeClass("-active"),$(".tcon").is(".tcon-transform")&&$(".tcon").removeClass("tcon-transform")}$(document).ready(function(){$(".token-sale-steps > li.-active").prevAll().addClass("-active")});
$(document).ready(function(){var a=$("#tokens"),n=$("#eth");a.val(5600),n.bind("keyup mouseup",function(){var n=5600*$(this).val();a.val(n)})});
$(document).ready(function(){$(".faq-list h4").click(function(){$(this).closest("li").toggleClass("-active"),$(this).closest("ul").find(".-active").not($(this).closest("li")).removeClass("-active").find("p").slideToggle(),$(this).closest("ul").not($(this).closest("li")).find(".open-faq i").text("+"),$(this).closest("li").is(".-active")?$(this).closest("li").find(".open-faq i").text("-"):$(this).closest("li").find(".open-faq i").text("+"),$(this).closest("li").find("p").slideToggle()})});
$(document).ready(function(){$("header").before($("header").clone(!0).addClass("-sticky")),$(window).scroll(function(){0<$(this).scrollTop()?$(".-sticky").addClass("-stuck"):$(".-sticky").removeClass("-stuck")})});
$(document).ready(function(){if($("body").is(".pg-home")){for(var t=1;t<$(".main").children().length;t++)$(".navigation li:nth-child("+t+")").find("a").click(function(t){/#/.test(this.href)&&(t.preventDefault(),$("html, body").animate({scrollTop:$($.attr(this,"href")).offset().top},500)),$(this).closest("ul").find(".-active").not($(this).parent()).removeClass("-active"),$(this).parent().addClass("-active")});$(window).scroll(function(t){closeMenu();var i=$(this).scrollTop();$("section").each(function(){$(this).offset().top>=i+$(".header").outerHeight()?($(".navigation ul li:nth-child("+$(this).index()+")").removeClass("-active"),$(this).find(".grid").removeClass("-animated")):($(".navigation ul li:not(:nth-child("+$(this).index()+"))").removeClass("-active"),$(".navigation ul li:nth-child("+$(this).index()+")").addClass("-active"),$(this).find(".grid").addClass("-animated"))})}),$(window).resize(function(){closeMenu(),setTimeout(function(){window.location.reload()})})}else $(".navigation ul li a").each(function(t){/#/.test(this.href)&&$(this).attr("href","index.html#"+$(this).attr("href").split("#").pop())});location.hash&&setTimeout(function(){$(".navigation ul li a").each(function(){"#"+$(this).attr("href").split("#").pop()==location.hash&&$(this).parent().addClass("-active")}),$("html, body").animate({scrollTop:$(location.hash).offset().top+$(".header").outerHeight()},500)})});
(function(){var u,c,t,e,o,n,r,s,i,v,a,l,w,p,h,d,f,b,k,g,m,y,S,q,L,x,T,R,P,E,M,j,A,N,O,_,F,C,U,W,X,D,H,I,z,G,B,J,K=[].slice,Q={}.hasOwnProperty,V=function(t,e){function n(){this.constructor=t}for(var r in e)Q.call(e,r)&&(t[r]=e[r]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},Y=[].indexOf||function(t){for(var e=0,n=this.length;e<n;e++)if(e in this&&this[e]===t)return e;return-1};for(m={catchupTime:100,initialRate:.03,minTime:250,ghostTime:100,maxProgressPerFrame:20,easeFactor:1.25,startOnPageLoad:!0,restartOnPushState:!0,restartOnRequestAfter:500,target:"body",elements:{checkInterval:100,selectors:["body"]},eventLag:{minSamples:10,sampleCount:3,lagThreshold:3},ajax:{trackMethods:["GET"],trackWebSockets:!0,ignoreURLs:[]}},P=function(){var t;return null!=(t="undefined"!=typeof performance&&null!==performance&&"function"==typeof performance.now?performance.now():void 0)?t:+new Date},M=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame,g=window.cancelAnimationFrame||window.mozCancelAnimationFrame,null==M&&(M=function(t){return setTimeout(t,50)},g=function(t){return clearTimeout(t)}),A=function(e){var n,r;return n=P(),(r=function(){var t;return 33<=(t=P()-n)?(n=P(),e(t,function(){return M(r)})):setTimeout(r,33-t)})()},j=function(){var t,e,n;return n=arguments[0],e=arguments[1],t=3<=arguments.length?K.call(arguments,2):[],"function"==typeof n[e]?n[e].apply(n,t):n[e]},y=function(){var t,e,n,r,s,o,i;for(e=arguments[0],o=0,i=(r=2<=arguments.length?K.call(arguments,1):[]).length;o<i;o++)if(n=r[o])for(t in n)Q.call(n,t)&&(s=n[t],null!=e[t]&&"object"==typeof e[t]&&null!=s&&"object"==typeof s?y(e[t],s):e[t]=s);return e},f=function(t){var e,n,r,s,o;for(n=e=0,s=0,o=t.length;s<o;s++)r=t[s],n+=Math.abs(r),e++;return n/e},q=function(t,e){var n,r,s;if(null==t&&(t="options"),null==e&&(e=!0),s=document.querySelector("[data-pace-"+t+"]")){if(n=s.getAttribute("data-pace-"+t),!e)return n;try{return JSON.parse(n)}catch(t){return r=t,"undefined"!=typeof console&&null!==console?console.error("Error parsing inline pace options",r):void 0}}},r=function(){function t(){}return t.prototype.on=function(t,e,n,r){var s;return null==r&&(r=!1),null==this.bindings&&(this.bindings={}),null==(s=this.bindings)[t]&&(s[t]=[]),this.bindings[t].push({handler:e,ctx:n,once:r})},t.prototype.once=function(t,e,n){return this.on(t,e,n,!0)},t.prototype.off=function(t,e){var n,r,s;if(null!=(null!=(r=this.bindings)?r[t]:void 0)){if(null==e)return delete this.bindings[t];for(n=0,s=[];n<this.bindings[t].length;)s.push(this.bindings[t][n].handler===e?this.bindings[t].splice(n,1):n++);return s}},t.prototype.trigger=function(){var t,e,n,r,s,o,i,a,u;if(n=arguments[0],t=2<=arguments.length?K.call(arguments,1):[],null!=(i=this.bindings)?i[n]:void 0){for(s=0,u=[];s<this.bindings[n].length;)r=(a=this.bindings[n][s]).handler,e=a.ctx,o=a.once,r.apply(null!=e?e:this,t),u.push(o?this.bindings[n].splice(s,1):s++);return u}},t}(),v=window.Pace||{},window.Pace=v,y(v,r.prototype),E=v.options=y({},m,window.paceOptions,q()),H=0,z=(B=["ajax","document","eventLag","elements"]).length;H<z;H++)!0===E[F=B[H]]&&(E[F]=m[F]);i=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return V(e,t),e}(Error),c=function(){function t(){this.progress=0}return t.prototype.getElement=function(){var t;if(null==this.el){if(!(t=document.querySelector(E.target)))throw new i;this.el=document.createElement("div"),this.el.className="pace pace-active",document.body.className=document.body.className.replace(/pace-done/g,""),document.body.className+=" pace-running",this.el.innerHTML='<div class="pace-progress">\n  <div class="pace-progress-inner"></div>\n</div>\n<div class="pace-activity"></div>',null!=t.firstChild?t.insertBefore(this.el,t.firstChild):t.appendChild(this.el)}return this.el},t.prototype.finish=function(){var t;return(t=this.getElement()).className=t.className.replace("pace-active",""),t.className+=" pace-inactive",document.body.className=document.body.className.replace("pace-running",""),document.body.className+=" pace-done"},t.prototype.update=function(t){return this.progress=t,this.render()},t.prototype.destroy=function(){try{this.getElement().parentNode.removeChild(this.getElement())}catch(t){i=t}return this.el=void 0},t.prototype.render=function(){var t,e,n,r,s,o,i;if(null==document.querySelector(E.target))return!1;for(t=this.getElement(),r="translate3d("+this.progress+"%, 0, 0)",s=0,o=(i=["webkitTransform","msTransform","transform"]).length;s<o;s++)e=i[s],t.children[0].style[e]=r;return(!this.lastRenderedProgress||this.lastRenderedProgress|0!==this.progress|0)&&(t.children[0].setAttribute("data-progress-text",(0|this.progress)+"%"),100<=this.progress?n="99":(n=this.progress<10?"0":"",n+=0|this.progress),t.children[0].setAttribute("data-progress",""+n)),this.lastRenderedProgress=this.progress},t.prototype.done=function(){return 100<=this.progress},t}(),s=function(){function t(){this.bindings={}}return t.prototype.trigger=function(t,e){var n,r,s,o,i;if(null!=this.bindings[t]){for(i=[],r=0,s=(o=this.bindings[t]).length;r<s;r++)n=o[r],i.push(n.call(this,e));return i}},t.prototype.on=function(t,e){var n;return null==(n=this.bindings)[t]&&(n[t]=[]),this.bindings[t].push(e)},t}(),D=window.XMLHttpRequest,X=window.XDomainRequest,W=window.WebSocket,S=function(t,e){var n,r,s;for(n in s=[],e.prototype)try{r=e.prototype[n],s.push(null==t[n]&&"function"!=typeof r?t[n]=r:void 0)}catch(t){t}return s},T=[],v.ignore=function(){var t,e,n;return e=arguments[0],t=2<=arguments.length?K.call(arguments,1):[],T.unshift("ignore"),n=e.apply(null,t),T.shift(),n},v.track=function(){var t,e,n;return e=arguments[0],t=2<=arguments.length?K.call(arguments,1):[],T.unshift("track"),n=e.apply(null,t),T.shift(),n},_=function(t){var e;if(null==t&&(t="GET"),"track"===T[0])return"force";if(!T.length&&E.ajax){if("socket"===t&&E.ajax.trackWebSockets)return!0;if(e=t.toUpperCase(),0<=Y.call(E.ajax.trackMethods,e))return!0}return!1},a=function(t){function e(){var n,s=this;e.__super__.constructor.apply(this,arguments),n=function(n){var r;return r=n.open,n.open=function(t,e){return _(t)&&s.trigger("request",{type:t,url:e,request:n}),r.apply(n,arguments)}},window.XMLHttpRequest=function(t){var e;return e=new D(t),n(e),e};try{S(window.XMLHttpRequest,D)}catch(t){}if(null!=X){window.XDomainRequest=function(){var t;return t=new X,n(t),t};try{S(window.XDomainRequest,X)}catch(t){}}if(null!=W&&E.ajax.trackWebSockets){window.WebSocket=function(t,e){var n;return n=null!=e?new W(t,e):new W(t),_("socket")&&s.trigger("request",{type:"socket",url:t,protocols:e,request:n}),n};try{S(window.WebSocket,W)}catch(t){}}}return V(e,s),e}(),I=null,O=function(t){var e,n,r,s;for(n=0,r=(s=E.ajax.ignoreURLs).length;n<r;n++)if("string"==typeof(e=s[n])){if(-1!==t.indexOf(e))return!0}else if(e.test(t))return!0;return!1},(L=function(){return null==I&&(I=new a),I})().on("request",function(t){var e,o,i,a,n;return a=t.type,i=t.request,n=t.url,O(n)?void 0:v.running||!1===E.restartOnRequestAfter&&"force"!==_(a)?void 0:(o=arguments,"boolean"==typeof(e=E.restartOnRequestAfter||0)&&(e=0),setTimeout(function(){var t,e,n,r,s;if("socket"===a?i.readyState<2:0<(n=i.readyState)&&n<4){for(v.restart(),s=[],t=0,e=(r=v.sources).length;t<e;t++){if((F=r[t])instanceof u){F.watch.apply(F,o);break}s.push(void 0)}return s}},e))}),u=function(){function t(){var t=this;this.elements=[],L().on("request",function(){return t.watch.apply(t,arguments)})}return t.prototype.watch=function(t){var e,n,r,s;return r=t.type,e=t.request,s=t.url,O(s)?void 0:(n="socket"===r?new p(e):new h(e),this.elements.push(n))},t}(),h=function(e){var t,n,r,s,o,i=this;if(this.progress=0,null!=window.ProgressEvent)for(e.addEventListener("progress",function(t){return i.progress=t.lengthComputable?100*t.loaded/t.total:i.progress+(100-i.progress)/2},!1),n=0,r=(o=["load","abort","timeout","error"]).length;n<r;n++)t=o[n],e.addEventListener(t,function(){return i.progress=100},!1);else s=e.onreadystatechange,e.onreadystatechange=function(){var t;return 0===(t=e.readyState)||4===t?i.progress=100:3===e.readyState&&(i.progress=50),"function"==typeof s?s.apply(null,arguments):void 0}},p=function(t){var e,n,r,s,o=this;for(n=this.progress=0,r=(s=["error","open"]).length;n<r;n++)e=s[n],t.addEventListener(e,function(){return o.progress=100},!1)},e=function(t){var e,n,r,s;for(null==t&&(t={}),this.elements=[],null==t.selectors&&(t.selectors=[]),n=0,r=(s=t.selectors).length;n<r;n++)e=s[n],this.elements.push(new o(e))},o=function(){function t(t){this.selector=t,this.progress=0,this.check()}return t.prototype.check=function(){var t=this;return document.querySelector(this.selector)?this.done():setTimeout(function(){return t.check()},E.elements.checkInterval)},t.prototype.done=function(){return this.progress=100},t}(),t=function(){function t(){var t,e,n=this;this.progress=null!=(e=this.states[document.readyState])?e:100,t=document.onreadystatechange,document.onreadystatechange=function(){return null!=n.states[document.readyState]&&(n.progress=n.states[document.readyState]),"function"==typeof t?t.apply(null,arguments):void 0}}return t.prototype.states={loading:0,interactive:50,complete:100},t}(),n=function(){var e,n,r,s,o,i=this;this.progress=0,o=[],s=e=0,r=P(),n=setInterval(function(){var t;return t=P()-r-50,r=P(),o.push(t),o.length>E.eventLag.sampleCount&&o.shift(),e=f(o),++s>=E.eventLag.minSamples&&e<E.eventLag.lagThreshold?(i.progress=100,clearInterval(n)):i.progress=3/(e+3)*100},50)},w=function(){function t(t){this.source=t,this.last=this.sinceLastUpdate=0,this.rate=E.initialRate,this.catchup=0,this.progress=this.lastProgress=0,null!=this.source&&(this.progress=j(this.source,"progress"))}return t.prototype.tick=function(t,e){var n;return null==e&&(e=j(this.source,"progress")),100<=e&&(this.done=!0),e===this.last?this.sinceLastUpdate+=t:(this.sinceLastUpdate&&(this.rate=(e-this.last)/this.sinceLastUpdate),this.catchup=(e-this.progress)/E.catchupTime,this.sinceLastUpdate=0,this.last=e),e>this.progress&&(this.progress+=this.catchup*t),n=1-Math.pow(this.progress/100,E.easeFactor),this.progress+=n*this.rate*t,this.progress=Math.min(this.lastProgress+E.maxProgressPerFrame,this.progress),this.progress=Math.max(0,this.progress),this.progress=Math.min(100,this.progress),this.lastProgress=this.progress,this.progress},t}(),k=d=U=b=N=C=null,v.running=!1,x=function(){return E.restartOnPushState?v.restart():void 0},null!=window.history.pushState&&(G=window.history.pushState,window.history.pushState=function(){return x(),G.apply(window.history,arguments)}),null!=window.history.replaceState&&(J=window.history.replaceState,window.history.replaceState=function(){return x(),J.apply(window.history,arguments)}),l={ajax:u,elements:e,document:t,eventLag:n},(R=function(){var t,e,n,r,s,o,i,a;for(v.sources=C=[],e=0,r=(o=["ajax","elements","document","eventLag"]).length;e<r;e++)!1!==E[t=o[e]]&&C.push(new l[t](E[t]));for(n=0,s=(a=null!=(i=E.extraSources)?i:[]).length;n<s;n++)F=a[n],C.push(new F(E));return v.bar=b=new c,N=[],U=new w})(),v.stop=function(){return v.trigger("stop"),v.running=!1,b.destroy(),k=!0,null!=d&&("function"==typeof g&&g(d),d=null),R()},v.restart=function(){return v.trigger("restart"),v.stop(),v.start()},v.go=function(){var y;return v.running=!0,b.render(),y=P(),k=!1,d=A(function(t,e){var n,r,s,o,i,a,u,c,l,p,h,d,f,g,m;for(100-b.progress,r=p=0,s=!0,a=h=0,f=C.length;h<f;a=++h)for(F=C[a],l=null!=N[a]?N[a]:N[a]=[],u=d=0,g=(i=null!=(m=F.elements)?m:[F]).length;d<g;u=++d)o=i[u],s&=(c=null!=l[u]?l[u]:l[u]=new w(o)).done,c.done||(r++,p+=c.tick(t));return n=p/r,b.update(U.tick(t,n)),b.done()||s||k?(b.update(100),v.trigger("done"),setTimeout(function(){return b.finish(),v.running=!1,v.trigger("hide")},Math.max(E.ghostTime,Math.max(E.minTime-(P()-y),0)))):e()})},v.start=function(t){y(E,t),v.running=!0;try{b.render()}catch(t){i=t}return document.querySelector(".pace")?(v.trigger("start"),v.go()):setTimeout(v.start,50)},"function"==typeof define&&define.amd?define(function(){return v}):"object"==typeof exports?module.exports=v:E.startOnPageLoad&&v.start()}).call(this);