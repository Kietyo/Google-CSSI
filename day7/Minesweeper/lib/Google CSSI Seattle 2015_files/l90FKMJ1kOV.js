/*!CK:966254903!*//*1437364129,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["GeNJU"]); }

__d("ModuleDependencies",[],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();function g(k,l,m){var n=b.__debug.modules[m],o=b.__debug.deps;if(l[m])return;l[m]=true;if(!n){o[m]&&(k[m]=true);return;}if(!n.dependencies||!n.dependencies.length){if(n.waiting)k[m]=true;return;}n.dependencies.forEach(function(p){g(k,l,p);});}function h(k){if(b.__debug){var l={};g(l,{},k);var m=Object.keys(l);m.sort();return m;}return null;}function i(){var k={loading:{},missing:[]};if(!b.__debug)return k;var l={},m=b.__debug.modules,n=b.__debug.deps;for(var o in m){var p=m[o];if(p.waiting){var q={};g(q,{},p.id);delete q[p.id];k.loading[p.id]=Object.keys(q);k.loading[p.id].sort();k.loading[p.id].forEach(function(r){if(!(r in m)&&n[r])l[r]=1;});}}k.missing=Object.keys(l);k.missing.sort();return k;}var j={setRequireDebug:function(k){b.__debug=k;},getMissing:h,getNotLoadedModules:i};e.exports=j;},null);
__d("ModuleErrorLogger",["Bootloader","ErrorUtils","ModuleDependencies","BanzaiScuba"],function(a,b,c,d,e,f,g,h,i,j){b.__markCompiled&&b.__markCompiled();function k(n){if(!n||!n.length)return 0;return n.reduce(function(o,p){return o+p;})/n.length;}function l(n){if(!n)return [];var o=[];for(var p in n)o.push(n[p]);return o;}var m={init:function(){h.addListener(function(n){if(n.name!=='ModuleError')return;var o=i.getNotLoadedModules(),p=Object.keys(o.loading),q=l(g.getLoadingUrls()),r=l(g.getLoadedUrlTimes()),s={};o.missing.forEach(function(v){s[v]=1;});var t={};p.forEach(function(v){t[v]=1;});var u=new j('module_errors',null,{addAsnFields:true,addPredictedGeographyFields:true,addBrowserFields:true,addMobileDeviceFields:true,addPageFields:true,addUserFields:true});u.addInteger('missing_count',o.missing.length).addInteger('loading_count',p.length).addInteger('error_url_count',g.getErrorUrls().length).addTagset('missing_modules',s).addTagset('loading_modules',t).addInteger('mean_url_loading_time',Math.floor(k(q))).addInteger('mean_url_loaded_time',Math.floor(k(r))).post();},true);}};e.exports=m;},null);
__d("Base64",[],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();var g='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';function h(l){l=(l.charCodeAt(0)<<16)|(l.charCodeAt(1)<<8)|l.charCodeAt(2);return String.fromCharCode(g.charCodeAt(l>>>18),g.charCodeAt((l>>>12)&63),g.charCodeAt((l>>>6)&63),g.charCodeAt(l&63));}var i='>___?456789:;<=_______'+'\0\1\2\3\4\5\6\7\b\t\n\13\f\r\16\17\20\21\22\23\24\25\26\27\30\31'+'______\32\33\34\35\36\37 !"#$%&\'()*+,-./0123';function j(l){l=(i.charCodeAt(l.charCodeAt(0)-43)<<18)|(i.charCodeAt(l.charCodeAt(1)-43)<<12)|(i.charCodeAt(l.charCodeAt(2)-43)<<6)|i.charCodeAt(l.charCodeAt(3)-43);return String.fromCharCode(l>>>16,(l>>>8)&255,l&255);}var k={encode:function(l){l=unescape(encodeURI(l));var m=(l.length+2)%3;l=(l+'\0\0'.slice(m)).replace(/[\s\S]{3}/g,h);return l.slice(0,l.length+m-2)+'=='.slice(m);},decode:function(l){l=l.replace(/[^A-Za-z0-9+\/]/g,'');var m=(l.length+3)&3;l=(l+'AAA'.slice(m)).replace(/..../g,j);l=l.slice(0,l.length+m-3);try{return decodeURIComponent(escape(l));}catch(n){throw new Error('Not valid UTF-8');}},encodeObject:function(l){return k.encode(JSON.stringify(l));},decodeObject:function(l){return JSON.parse(k.decode(l));},encodeNums:function(l){return String.fromCharCode.apply(String,l.map(function(m){return g.charCodeAt((m|-(m>63))&-(m>0)&63);}));}};e.exports=k;},null);
__d("Deferred",["Promise"],function(a,b,c,d,e,f,g){b.__markCompiled&&b.__markCompiled();function h(){"use strict";this.$Deferred0=false;this.$Deferred1=new g(function(i,j){this.$Deferred2=(i);this.$Deferred3=(j);}.bind(this));}h.prototype.getPromise=function(){"use strict";return this.$Deferred1;};h.prototype.resolve=function(i){"use strict";this.$Deferred0=true;this.$Deferred2(i);};h.prototype.reject=function(i){"use strict";this.$Deferred0=true;this.$Deferred3(i);};h.prototype.then=function(){"use strict";return g.prototype.then.apply(this.$Deferred1,arguments);};h.prototype.done=function(){"use strict";g.prototype.done.apply(this.$Deferred1,arguments);};h.prototype.isSettled=function(){"use strict";return this.$Deferred0;};e.exports=h;},null);
__d("cancelAnimationFramePolyfill",[],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();var g=a.cancelAnimationFrame||a.webkitCancelAnimationFrame||a.mozCancelAnimationFrame||a.oCancelAnimationFrame||a.msCancelAnimationFrame||a.clearTimeout;e.exports=g;},null);
__d("ScriptPathLogger",["Banzai","Map","ScriptPath","isInIframe"],function(a,b,c,d,e,f,g,h,i,j){b.__markCompiled&&b.__markCompiled();var k='script_path_change',l={scriptPath:null,categoryToken:null,extraInfoFromServer:{}},m=new h([['owning_entity_id','entity_id'],['search_sid','search_sid'],['canvas_app_id','canvas_app_id']]),n=false;function o(u,v,w){if(!n||j())return;var x=g.isEnabled('vital_navigations')?g.VITAL:g.BASIC,y={source_path:u.scriptPath,source_token:u.categoryToken,dest_path:v.scriptPath,dest_token:v.categoryToken,impression_id:v.extraInfoFromServer.imp_id,cause:w};if(u.scriptPath===null)y.referrer=document.referrer;var z=i.getClickPointInfo();if(z)y.click_point_info=z;m.forEach(function(aa,ba){if(u.extraInfoFromServer[aa])y['source_'+ba]=u.extraInfoFromServer[aa];if(v.extraInfoFromServer[aa])y['dest_'+ba]=v.extraInfoFromServer[aa];});if(u.topViewEndpoint)y.source_endpoint=u.topViewEndpoint;if(v.topViewEndpoint)y.dest_endpoint=v.topViewEndpoint;if(u.restored)y.source_restored=true;g.post(k,y,x);i.setClickPointInfo(null);}function p(){o(i.getSourcePageInfo()||l,i.getPageInfo(),i.CAUSE.PAGE_LOAD);}function q(u,v){o(u,v,i.CAUSE.TRANSITION);}function r(){o(i.getPageInfo(),l,i.CAUSE.PAGE_UNLOAD);i.shutdown();}var s=i.subscribe(function(u){if(n){var v=u.source,w=u.dest,x=u.cause;if(x){o(v||l,w||l,x);}else if(v){q(v,w);}else p();}});g.subscribe(g.SHUTDOWN,r);var t={startLogging:function(){n=true;if(i.getPageInfo())p();},stopLogging:function(){n=false;i.unsubscribe(s);}};t.BANZAI_LOGGING_ROUTE=k;e.exports=t;},null);
__d("cancelAnimationFrame",["cancelAnimationFramePolyfill"],function(a,b,c,d,e,f,g){b.__markCompiled&&b.__markCompiled();e.exports=g.bind(a);},null);
__d("clearInterval",[],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();e.exports=a.clearInterval.bind(a);},null);
__d("clearTimeout",[],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();e.exports=a.clearTimeout.bind(a);},null);
__d("setTimeout",["TimerStorage","setTimeoutAcrossTransitions"],function(a,b,c,d,e,f,g,h){b.__markCompiled&&b.__markCompiled();e.exports=function(){for(var i=[],j=0,k=arguments.length;j<k;j++)i.push(arguments[j]);var l=h.apply(a,i);g.push(g.TIMEOUT,l);return l;};},null);
__d("replaceNativeTimer",["clearInterval","clearTimeout","setInterval","setTimeout"],function(a,b,c,d,e,f,g,h,i,j){b.__markCompiled&&b.__markCompiled();var k=false;function l(){if(!k){k=true;j.nativeBackup=a.setTimeout;h.nativeBackup=a.clearTimeout;i.nativeBackup=a.setInterval;g.nativeBackup=a.clearInterval;a.setTimeout=j;a.clearTimeout=h;a.setInterval=i;a.clearInterval=g;}}e.exports=l;},null);
__d("TimeSpentArray",["Banzai","pageID","setTimeoutAcrossTransitions"],function(a,b,c,d,e,f,g,h,i){b.__markCompiled&&b.__markCompiled();var j=2,k=j*32,l,m,n,o,p,q,r,s,t,u={},v;function w(){return {timeoutDelayMap:u,nextDelay:v,timeoutInSeconds:n};}function x(){if(l){var fa=Date.now();if(fa>p)r=Math.min(k,Math.ceil((fa/1000)-o));var ga=ca();if(ga)l(ga,v);}ba();}function y(){z();m=i(x,n*1000);}function z(){if(m){clearTimeout(m);m=null;}}function aa(fa){o=fa;p=o*1000;q=[1];for(var ga=1;ga<j;ga++)q.push(0);r=1;s+=1;t+=1;var ha=t.toString()+'_delay';v=u[ha];if(typeof v=='undefined')v=u.delay;var ia=t.toString()+'_timeout',ja=u[ia];if(typeof ja=='undefined')ja=u.timeout;ja=Math.min(ja,k);n=ja||k;y();}function ba(){z();q=null;}function ca(){if(!q)return null;return {tos_id:h,start_time:o,tos_array:q.slice(0),tos_len:r,tos_seq:t,tos_cum:s};}function da(fa){if(fa>=p&&(fa-p)<1000)return;ea(Math.floor(fa/1000));}function ea(fa){var ga=fa-o;if(ga<0||ga>=k)x();if(!q){aa(fa);}else{q[ga>>5]|=(1<<(ga&31));r=ga+1;s+=1;p=fa*1000;}}e.exports={init:function(fa,ga,ha){s=0;t=-1;l=fa;if(typeof ga=='object'&&ga!==null){u=ga;}else u={};if(!ha)ha=Date.now();aa(Math.floor(ha/1000));g.subscribe(g.SHUTDOWN,x);},update:function(fa){da(fa);},get:function(){return ca();},ship:function(){x();},reset:function(){ba();},testState:function(){return w();}};},null);
__d("TimeSpentImmediateActiveSecondsLogger",["Banzai","ImmediateActiveSecondsConfig","ScriptPath"],function(a,b,c,d,e,f,g,h,i){b.__markCompiled&&b.__markCompiled();var j='immediate_active_seconds',k={signal:true,retry:true},l=h.sampling_rate,m=h.ias_bucket,n=0;function o(s){if(l<=0)return false;var t=Math.floor(s/1000)%l;return t===m;}function p(s){if(s>=n&&s-n<1000)return;if(o(s)){var t={activity_time_ms:s,last_activity_time_ms:n,script_path:i.getTopViewEndpoint()};try{g.post(j,t,k);}catch(u){}}n=Math.floor(s/1000)*1000;}function q(event,s,t){if(u<0||v<0||u>v)return;var u=Math.floor(s/1000),v=Math.floor(t/1000);if(!r(u,v))return;var w={event:event,start_time_ms:s,end_time_ms:t};g.post(j,w,k);}function r(s,t){if(l<=0)return false;if(t-s>=l)return true;var u=s+(m-(s%l)+l)%l;return u<=t;}e.exports={maybeReportActiveSecond:p,maybeReportActiveInterval:q};},null);
__d("QuicklingAugmenter",["URI"],function(a,b,c,d,e,f,g){b.__markCompiled&&b.__markCompiled();var h=[],i={addHandler:function(j){h.push(j);},augmentURI:function(j){var k=[],l=new g(j);h.forEach(function(m){var n=m(l);if(!n)return l;k.push(m);l=l.addQueryData(n);});h=k;return l;}};e.exports=i;},null);
__d("Quickling",["AjaxPipeRequest","Arbiter","CSSClassTransition","DocumentTitle","DOM","HTML","PageHooks","PageEvents","PageTransitionsRegistrar","QuicklingAugmenter","QuicklingConfig","Run","URI","UserAgent_DEPRECATED","PHPQuerySerializer","TimerStorage","cancelAnimationFrame","clearImmediate","clearInterval","clearTimeout","goOrReplace","isEmpty","replaceNativeTimer","requireWeak"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa,ba,ca,da){b.__markCompiled&&b.__markCompiled();var ea;da('PageTransitions',function(ta){ea=ta;});var fa=q.version,ga=q.sessionLength,ha=new RegExp(q.inactivePageRegex),ia=0,ja,ka='',la={isActive:function(){return true;},isPageActive:function(ta){if(ta=='#')return false;ta=new s(ta);if(ta.getDomain()&&ta.getDomain()!=new s(window.location.href).getDomain())return false;if(ta.getPath()=='/l.php'){var ua=ta.getQueryData().u;if(ua){ua=new s(unescape(ua)).getDomain();if(ua&&ua!=new s(window.location.href).getDomain())return false;}}var va=ta.getPath(),wa=ta.getQueryData();if(!ba(wa))va+='?'+u.serialize(wa);return !ha.test(va);},getLoadCount:function(){return ia;}};function ma(ta){ta=ta||'Facebook';j.set(ta);if(t.ie()){ka=ta;if(!ja)ja=window.setInterval(function(){var ua=ka,va=j.get();if(ua!=va)j.set(ua);},5000,false);}}function na(ta){var ua=document.getElementsByTagName('link');for(var va=0;va<ua.length;++va){if(ua[va].rel!='alternate')continue;k.remove(ua[va]);}if(ta.length){var wa=k.find(document,'head');wa&&k.appendContent(wa,l(ta[0]));}}for(var oa in g)if(g.hasOwnProperty(oa))qa[oa]=g[oa];var pa=g===null?null:g.prototype;qa.prototype=Object.create(pa);qa.prototype.constructor=qa;qa.__superConstructor__=g;function qa(ta){"use strict";var ua={version:fa};this._isQuickling=true;g.call(this,ta,{quickling:ua});}qa.prototype._preBootloadFirstResponse=function(ta){"use strict";return true;};qa.prototype._fireDomContentCallback=function(){"use strict";this._request.cavalry&&this._request.cavalry.setTimeStamp('t_domcontent');if(ea)ea.transitionComplete();this._onPageDisplayed&&this._onPageDisplayed(this.pipe);pa._fireDomContentCallback.call(this);};qa.prototype._fireOnloadCallback=function(){"use strict";if(this._request.cavalry){this._request.cavalry.setTimeStamp('t_hooks');this._request.cavalry.setTimeStamp('t_layout');this._request.cavalry.setTimeStamp('t_onload');}pa._fireOnloadCallback.call(this);};qa.prototype.isPageActive=function(ta){"use strict";return la.isPageActive(ta);};qa.prototype._versionCheck=function(ta){"use strict";if(ta.version==fa)return true;var ua=['quickling','ajaxpipe','ajaxpipe_token'];aa(window.location,new s(ta.uri).removeQueryData(ua),true);return false;};qa.prototype._processFirstResponse=function(ta){"use strict";var ua=ta.getPayload();ma(ua.title);na(ua.syndication||[]);window.scrollTo(0,0);i.go(document.body,ua.body_class||'',ea.getMostRecentURI(),ta.getRequest().getURI());h.inform('quickling/response');};qa.prototype.getSanitizedParameters=function(){"use strict";return ['quickling'];};function ra(){ia++;return ia>=ga;}function sa(ta){g.setCurrentRequest(null);if(ra())return false;ta=p.augmentURI(ta);if(!la.isPageActive(ta))return false;v.popAll(v.TIMEOUT,z);v.popAll(v.INTERVAL,y);v.popAll(v.IMMEDIATE,x);v.popAll(v.ANIMATION_FRAME,w);window.ExitTime=Date.now();r.__removeHook(m.ONLOAD_HOOK);r.__removeHook(m.DOMREADY_HOOK);m.runHooks('onleavehooks');h.inform(n.AJAXPIPE_ONUNLOAD,true);new qa(ta).setCanvasId('content').send();var ua=window.__bodyWrapper;if(ua.getCodeUsage)ua.clearCodeUsage();return true;}ca();r.onAfterLoad(function ta(){o.registerHandler(sa,1);});e.exports=a.Quickling=la;},null);
__d("StringTransformations",[],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();e.exports={unicodeEscape:function(g){return g.replace(/[^A-Za-z0-9\-\.\:\_\$\/\+\=]/g,function(h){var i=h.charCodeAt().toString(16);return '\\u'+('0000'+i.toUpperCase()).slice(-4);});},unicodeUnescape:function(g){return g.replace(/(\\u[0-9A-Fa-f]{4})/g,function(h){return String.fromCharCode(parseInt(h.slice(2),16));});}};},null);
__d("NavigationClickPointHandler",["Event","ScriptPath","collectDataAttributes"],function(a,b,c,d,e,f,g,h,i){b.__markCompiled&&b.__markCompiled();var j={getClickPointInfo:function(l){var m=null,n=i(l,['ft'],['href','data-click']),o=n.normal.href;if(!o||o==='#')return false;var p=n.normal['data-click'];if(m===null&&p)m={click:p};var q=n.ft.tn;if(m===null&&q)m={tn:q};if(m===null&&l.getAttribute){var r=l.getAttribute('class');if(r)m={"class":r};}return m;}};function k(event){var l=event.target||event.srcElement,m=j.getClickPointInfo(l);if(m!==false)h.setClickPointInfo(m);}g.listen(document.documentElement,{click:k});e.exports=j;},null);
__d("WebStorageMonster",["Event","AsyncRequest","UserActivity","StringTransformations","WebStorage","arrayContains","isEmpty","setTimeoutAcrossTransitions"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n){b.__markCompiled&&b.__markCompiled();var o=300000,p=false;function q(v){var w={};for(var x in v){var y=v.getItem(x),z=j.unicodeEscape(x);if(typeof y==='string')w[z]=y.length;}return w;}function r(v){var w=k.getLocalStorage();if(!w||!v.keys)return;u._getLocalStorageKeys().forEach(function(x){if(l(v.keys,x))w.removeItem(x);});}function s(v){var w=k.getLocalStorage();if(w)u._getLocalStorageKeys().forEach(function(y){if(!v.some(function(z){return new RegExp(z).test(y);}))w.removeItem(y);});var x=k.getSessionStorage();if(x)x.clear();}function t(v){if(i.isActive(o)){n(t.bind(null,v),o);}else u.cleanNow(v);}var u={registerLogoutForm:function(v,w){g.listen(v,'submit',function(x){u.cleanOnLogout(w);});},schedule:function(v){if(p)return;p=true;t(v);},cleanNow:function(v){var w=Date.now(),x={},y=k.getLocalStorage();if(y)x.localStorage=q(y);var z=k.getSessionStorage();if(z)x.sessionStorage=q(z);var aa=!m(x),ba=Date.now();x.logtime=ba-w;if(aa)new h('/ajax/webstorage/process_keys.php').setData(x).setHandler(function(ca){if(!v){var da=ca.getPayload();if(da.keys)da.keys=da.keys.map(j.unicodeUnescape);r(da);}}.bind(this)).send();},cleanOnLogout:function(v){if(v)s(v);var w=k.getSessionStorage();if(w)w.clear();},_getLocalStorageKeys:function(){var v=k.getLocalStorage();return v?Object.keys(v):[];}};e.exports=u;},null);