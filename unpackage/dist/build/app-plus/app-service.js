(this["webpackJsonp"]=this["webpackJsonp"]||[]).push([["app-service"],{"0de9":function(t,e,i){"use strict";function a(t){var e=Object.prototype.toString.call(t);return e.substring(8,e.length-1)}function n(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];var n=e.map(function(t){var e=Object.prototype.toString.call(t);if("[object object]"===e.toLowerCase())try{t="---BEGIN:JSON---"+JSON.stringify(t)+"---END:JSON---"}catch(n){t="[object object]"}else if(null===t)t="---NULL---";else if(void 0===t)t="---UNDEFINED---";else{var i=a(t).toUpperCase();t="NUMBER"===i||"BOOLEAN"===i?"---BEGIN:"+i+"---"+t+"---END:"+i+"---":String(t)}return t}),s="";if(n.length>1){var r=n.pop();s=n.join("---COMMA---"),0===r.indexOf(" at ")?s+=r:s+="---COMMA---"+r}else s=n[0];return s}Object.defineProperty(e,"__esModule",{value:!0}),e.default=n},"0e6a":function(t,e,i){"use strict";i.r(e);var a=i("6b8e"),n=i("9bf5");for(var s in n)"default"!==s&&function(t){i.d(e,t,function(){return n[t]})}(s);var r,o=i("f0c5"),u=Object(o["a"])(n["default"],a["b"],a["c"],!1,null,"3b0c9272",null,!1,a["a"],r);e["default"]=u.exports},"0f7f":function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("0e6a"));function n(t){return t&&t.__esModule?t:{default:t}}var s={components:{component:a.default},data:function(){return{src:""}},methods:{takePhoto:function(){var t=this,e=uni.createCameraContext();e.takePhoto({quality:"high",success:function(e){t.src=e.tempImagePath}})},error:function(e){console.log(t(555," at pages\\index\\index.vue:41"))},delPhoto:function(){this.src=""}}};e.default=s}).call(this,i("0de9")["default"])},"56fe":function(t,e,i){"use strict";i.r(e);var a=i("0f7f"),n=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,function(){return a[t]})}(s);e["default"]=n.a},5995:function(t,e,i){"use strict";i.r(e);var a=i("faaf"),n=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,function(){return a[t]})}(s);e["default"]=n.a},"6b8e":function(t,e,i){"use strict";var a,n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{directives:[{name:"show",rawName:"v-show",value:t._$s(0,"v-show",t.url),expression:"_$s(0,'v-show',url)"}],staticClass:t._$s(0,"sc","ksp-image-cutter"),attrs:{_i:0}},[i("canvas",{style:t._$s(1,"s",{width:t.target.width+"px",height:t.target.height+"px"}),attrs:{_i:1}}),i("view",{staticClass:t._$s(2,"sc","body"),attrs:{_i:2}},[t._$s(3,"i",t.url)?i("image",{staticClass:t._$s(3,"sc","image"),style:t._$s(3,"s",{left:t.image.left+"px",top:t.image.top+"px",width:t.image.width+"px",height:t.image.height+"px"}),attrs:{src:t._$s(3,"a-src",t.url),_i:3},on:{load:t.imageLoad}}):t._e(),t._$s(4,"i",t.mask.show)?i("view",{staticClass:t._$s(4,"sc","mask"),attrs:{_i:4}}):t._e(),i("view",{staticClass:t._$s(5,"sc","plank"),attrs:{_i:5},on:{touchstart:function(e){return t.touchStart(e,"plank")},touchmove:t.touchMove,touchend:t.touchEnd,touchcancel:t.touchCancel}},[i("view",{staticClass:t._$s(6,"sc","frame"),style:t._$s(6,"s",{left:t.frame.left+"px",top:t.frame.top+"px",width:t.frame.width+"px",height:t.frame.height+"px"}),attrs:{_i:6},on:{touchstart:[function(e){return t.touchStart(e,"frame")},function(e){return e.stopPropagation(),e.preventDefault(),t.touchHandle(e)}]}},[t._$s(7,"i",t.mask.show)?i("canvas",{staticClass:t._$s(7,"sc","canvas"),style:t._$s(7,"s",{width:t.frame.width+"px",height:t.frame.height+"px"}),attrs:{_i:7}}):t._e(),i("view",{staticClass:t._$s(8,"sc","rect"),attrs:{_i:8}}),i("view",{staticClass:t._$s(9,"sc","line-one"),attrs:{_i:9}}),i("view",{staticClass:t._$s(10,"sc","line-two"),attrs:{_i:10}}),i("view",{staticClass:t._$s(11,"sc","line-three"),attrs:{_i:11}}),i("view",{staticClass:t._$s(12,"sc","line-four"),attrs:{_i:12}}),i("view",{staticClass:t._$s(13,"sc","frame-left"),attrs:{_i:13},on:{touchstart:[function(e){return t.touchStart(e,"left")},function(e){return e.stopPropagation(),e.preventDefault(),t.touchHandle(e)}]}}),i("view",{staticClass:t._$s(14,"sc","frame-right"),attrs:{_i:14},on:{touchstart:[function(e){return t.touchStart(e,"right")},function(e){return e.stopPropagation(),e.preventDefault(),t.touchHandle(e)}]}}),i("view",{staticClass:t._$s(15,"sc","frame-top"),attrs:{_i:15},on:{touchstart:[function(e){return t.touchStart(e,"top")},function(e){return e.stopPropagation(),e.preventDefault(),t.touchHandle(e)}]}}),i("view",{staticClass:t._$s(16,"sc","frame-bottom"),attrs:{_i:16},on:{touchstart:[function(e){return t.touchStart(e,"bottom")},function(e){return e.stopPropagation(),e.preventDefault(),t.touchHandle(e)}]}}),i("view",{staticClass:t._$s(17,"sc","frame-left-top"),attrs:{_i:17},on:{touchstart:[function(e){return t.touchStart(e,"left-top")},function(e){return e.stopPropagation(),e.preventDefault(),t.touchHandle(e)}]}}),i("view",{staticClass:t._$s(18,"sc","frame-left-bottom"),attrs:{_i:18},on:{touchstart:[function(e){return t.touchStart(e,"left-bottom")},function(e){return e.stopPropagation(),e.preventDefault(),t.touchHandle(e)}]}}),i("view",{staticClass:t._$s(19,"sc","frame-right-top"),attrs:{_i:19},on:{touchstart:[function(e){return t.touchStart(e,"right-top")},function(e){return e.stopPropagation(),e.preventDefault(),t.touchHandle(e)}]}}),i("view",{staticClass:t._$s(20,"sc","frame-right-bottom"),attrs:{_i:20},on:{touchstart:[function(e){return t.touchStart(e,"right-bottom")},function(e){return e.stopPropagation(),e.preventDefault(),t.touchHandle(e)}]}})])])]),i("view",{staticClass:t._$s(21,"sc","toolbar"),attrs:{_i:21}},[i("button",{staticClass:t._$s(22,"sc","btn-ok"),attrs:{_i:22},on:{click:t.onok}})])])},s=[];i.d(e,"b",function(){return n}),i.d(e,"c",function(){return s}),i.d(e,"a",function(){return a})},"733a":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={appid:"__UNI__9694957"};e.default=a},7950:function(t,e,i){"use strict";uni.restoreGlobal&&uni.restoreGlobal(weex,plus,setTimeout,clearTimeout,setInterval,clearInterval),__definePage("pages/index/index",function(){return Vue.extend(i("da16").default)})},8116:function(t,e,i){"use strict";i.r(e);var a=i("5995");for(var n in a)"default"!==n&&function(t){i.d(e,t,function(){return a[t]})}(n);var s,r,o,u,h=i("f0c5"),c=Object(h["a"])(a["default"],s,r,!1,null,null,null,!1,o,u);e["default"]=c.exports},8189:function(t){t.exports={_from:"@dcloudio/uni-stat@alpha",_id:"@dcloudio/uni-stat@2.0.0-alpha-25120200103005",_inBundle:!1,_integrity:"sha512-nYoIrRV2e5o/vzr6foSdWi3Rl2p0GuO+LPY3JctyY6uTKgPnuH99d7aL/QQdJ1SacQjBWO+QGK1qankN7oyrWw==",_location:"/@dcloudio/uni-stat",_phantomChildren:{},_requested:{type:"tag",registry:!0,raw:"@dcloudio/uni-stat@alpha",name:"@dcloudio/uni-stat",escapedName:"@dcloudio%2funi-stat",scope:"@dcloudio",rawSpec:"alpha",saveSpec:null,fetchSpec:"alpha"},_requiredBy:["#USER","/","/@dcloudio/vue-cli-plugin-uni"],_resolved:"https://registry.npmjs.org/@dcloudio/uni-stat/-/uni-stat-2.0.0-alpha-25120200103005.tgz",_shasum:"a77a63481f36474f3e86686868051219d1bb12df",_spec:"@dcloudio/uni-stat@alpha",_where:"/Users/guoshengqiang/Documents/dcloud-plugins/alpha/uniapp-cli",author:"",bugs:{url:"https://github.com/dcloudio/uni-app/issues"},bundleDependencies:!1,deprecated:!1,description:"",devDependencies:{"@babel/core":"^7.5.5","@babel/preset-env":"^7.5.5",eslint:"^6.1.0",rollup:"^1.19.3","rollup-plugin-babel":"^4.3.3","rollup-plugin-clear":"^2.0.7","rollup-plugin-commonjs":"^10.0.2","rollup-plugin-copy":"^3.1.0","rollup-plugin-eslint":"^7.0.0","rollup-plugin-json":"^4.0.0","rollup-plugin-node-resolve":"^5.2.0","rollup-plugin-replace":"^2.2.0","rollup-plugin-uglify":"^6.0.2"},files:["dist","package.json","LICENSE"],gitHead:"6be187a3dfe15f95dd6146d9fec08e1f81100987",homepage:"https://github.com/dcloudio/uni-app#readme",license:"Apache-2.0",main:"dist/index.js",name:"@dcloudio/uni-stat",repository:{type:"git",url:"git+https://github.com/dcloudio/uni-app.git",directory:"packages/uni-stat"},scripts:{build:"NODE_ENV=production rollup -c rollup.config.js",dev:"NODE_ENV=development rollup -w -c rollup.config.js"},version:"2.0.0-alpha-25120200103005"}},"8bbf":function(t,e){t.exports=Vue},"921b":function(t,e,i){"use strict";var a=i("8189");function n(t,e){return!e||"object"!==typeof e&&"function"!==typeof e?s(t):e}function s(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function r(t){return r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},r(t)}function o(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&u(t,e)}function u(t,e){return u=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},u(t,e)}function h(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function c(t,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function l(t,e,i){return e&&c(t.prototype,e),i&&c(t,i),t}var f=a.version,p="https://tongji.dcloud.io/uni/stat",g="https://tongji.dcloud.io/uni/stat.gif",d=1800,m=300,v=10,_="__DC_STAT_UUID",y="__DC_UUID_VALUE";function w(){var t="";if("n"===k()){try{t=plus.runtime.getDCloudId()}catch(e){t=""}return t}try{t=uni.getStorageSync(_)}catch(e){t=y}if(!t){t=Date.now()+""+Math.floor(1e7*Math.random());try{uni.setStorageSync(_,t)}catch(e){uni.setStorageSync(_,y)}}return t}var b=function(t){var e=Object.keys(t),i=e.sort(),a={},n="";for(var s in i)a[i[s]]=t[i[s]],n+=i[s]+"="+t[i[s]]+"&";return{sign:"",options:n.substr(0,n.length-1)}},S=function(t){var e="";for(var i in t)e+=i+"="+t[i]+"&";return e.substr(0,e.length-1)},D=function(){return parseInt((new Date).getTime()/1e3)},k=function(){var t={"app-plus":"n",h5:"h5","mp-weixin":"wx","mp-alipay":"ali","mp-baidu":"bd","mp-toutiao":"tt","mp-qq":"qq"};return t["app-plus"]},T=function(){var t="";return"wx"!==k()&&"qq"!==k()||uni.canIUse("getAccountInfoSync")&&(t=uni.getAccountInfoSync().miniProgram.appId||""),t},$=function(){return"n"===k()?plus.runtime.version:""},C=function(){var t=k(),e="";return"n"===t&&(e=plus.runtime.channel),e},x=function(t){var e=k(),i="";return t||("wx"===e&&(i=uni.getLaunchOptionsSync().scene),i)},O="First__Visit__Time",P="Last__Visit__Time",q=function(){var t=uni.getStorageSync(O),e=0;return t?e=t:(e=D(),uni.setStorageSync(O,e),uni.removeStorageSync(P)),e},I=function(){var t=uni.getStorageSync(P),e=0;return e=t||"",uni.setStorageSync(P,D()),e},R="__page__residence__time",N=0,j=0,E=function(){return N=D(),"n"===k()&&uni.setStorageSync(R,D()),N},A=function(){return j=D(),"n"===k()&&(N=uni.getStorageSync(R)),j-N},H="Total__Visit__Count",L=function(){var t=uni.getStorageSync(H),e=1;return t&&(e=t,e++),uni.setStorageSync(H,e),e},U=function(t){var e={};for(var i in t)e[i]=encodeURIComponent(t[i]);return e},M=0,B=0,J=function(){var t=(new Date).getTime();return M=t,B=0,t},V=function(){var t=(new Date).getTime();return B=t,t},Y=function(t){var e=0;if(0!==M&&(e=B-M),e=parseInt(e/1e3),e=e<1?1:e,"app"===t){var i=e>m;return{residenceTime:e,overtime:i}}if("page"===t){var a=e>d;return{residenceTime:e,overtime:a}}return{residenceTime:e}},X=function(){var t=getCurrentPages(),e=t[t.length-1],i=e.$vm;return"bd"===k()?i.$mp&&i.$mp.page.is:i.$scope&&i.$scope.route||i.$mp&&i.$mp.page.route},W=function(t){var e=getCurrentPages(),i=e[e.length-1],a=i.$vm,n=t._query,s=n&&"{}"!==JSON.stringify(n)?"?"+JSON.stringify(n):"";return t._query="","bd"===k()?a.$mp&&a.$mp.page.is+s:a.$scope&&a.$scope.route+s||a.$mp&&a.$mp.page.route+s},F=function(t){return!!("page"===t.mpType||t.$mp&&"page"===t.$mp.mpType||"page"===t.$options.mpType)},G=function(t,e){return t?"string"!==typeof t?(console.error("uni.report [eventName] 参数类型错误,只能为 String 类型"),!0):t.length>255?(console.error("uni.report [eventName] 参数长度不能大于 255"),!0):"string"!==typeof e&&"object"!==typeof e?(console.error("uni.report [options] 参数类型错误,只能为 String 或 Object 类型"),!0):"string"===typeof e&&e.length>255?(console.error("uni.report [options] 参数长度不能大于 255"),!0):"title"===t&&"string"!==typeof e?(console.error("uni.report [eventName] 参数为 title 时，[options] 参数只能为 String 类型"),!0):void 0:(console.error("uni.report 缺少 [eventName] 参数"),!0)},Q=i("bdb5").default,K=i("733a").default||i("733a"),z=uni.getSystemInfoSync(),Z=function(){function t(){h(this,t),this.self="",this._retry=0,this._platform="",this._query={},this._navigationBarTitle={config:"",page:"",report:"",lt:""},this._operatingTime=0,this._reportingRequestData={1:[],11:[]},this.__prevent_triggering=!1,this.__licationHide=!1,this.__licationShow=!1,this._lastPageRoute="",this.statData={uuid:w(),ut:k(),mpn:T(),ak:K.appid,usv:f,v:$(),ch:C(),cn:"",pn:"",ct:"",t:D(),tt:"",p:"android"===z.platform?"a":"i",brand:z.brand||"",md:z.model,sv:z.system.replace(/(Android|iOS)\s/,""),mpsdk:z.SDKVersion||"",mpv:z.version||"",lang:z.language,pr:z.pixelRatio,ww:z.windowWidth,wh:z.windowHeight,sw:z.screenWidth,sh:z.screenHeight}}return l(t,[{key:"_applicationShow",value:function(){if(this.__licationHide){V();var t=Y("app");if(t.overtime){var e={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(e)}this.__licationHide=!1}}},{key:"_applicationHide",value:function(t,e){this.__licationHide=!0,V();var i=Y();J();var a=W(this);this._sendHideRequest({urlref:a,urlref_ts:i.residenceTime},e)}},{key:"_pageShow",value:function(){var t=W(this),e=X();if(this._navigationBarTitle.config=Q&&Q.pages[e]&&Q.pages[e].titleNView&&Q.pages[e].titleNView.titleText||Q&&Q.pages[e]&&Q.pages[e].navigationBarTitleText||"",this.__licationShow)return J(),this.__licationShow=!1,void(this._lastPageRoute=t);V(),this._lastPageRoute=t;var i=Y("page");if(i.overtime){var a={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(a)}J()}},{key:"_pageHide",value:function(){if(!this.__licationHide){V();var t=Y("page");return this._sendPageRequest({url:this._lastPageRoute,urlref:this._lastPageRoute,urlref_ts:t.residenceTime}),void(this._navigationBarTitle={config:"",page:"",report:"",lt:""})}}},{key:"_login",value:function(){this._sendEventRequest({key:"login"},0)}},{key:"_share",value:function(){this._sendEventRequest({key:"share"},0)}},{key:"_payment",value:function(t){this._sendEventRequest({key:t},0)}},{key:"_sendReportRequest",value:function(t){this._navigationBarTitle.lt="1";var e=t.query&&"{}"!==JSON.stringify(t.query)?"?"+JSON.stringify(t.query):"";this.statData.lt="1",this.statData.url=t.path+e||"",this.statData.t=D(),this.statData.sc=x(t.scene),this.statData.fvts=q(),this.statData.lvts=I(),this.statData.tvc=L(),"n"===k()?this.getProperty():this.getNetworkInfo()}},{key:"_sendPageRequest",value:function(t){var e=t.url,i=t.urlref,a=t.urlref_ts;this._navigationBarTitle.lt="11";var n={ak:this.statData.ak,uuid:this.statData.uuid,lt:"11",ut:this.statData.ut,url:e,tt:this.statData.tt,urlref:i,urlref_ts:a,ch:this.statData.ch,usv:this.statData.usv,t:D(),p:this.statData.p};this.request(n)}},{key:"_sendHideRequest",value:function(t,e){var i=t.urlref,a=t.urlref_ts,n={ak:this.statData.ak,uuid:this.statData.uuid,lt:"3",ut:this.statData.ut,urlref:i,urlref_ts:a,ch:this.statData.ch,usv:this.statData.usv,t:D(),p:this.statData.p};this.request(n,e)}},{key:"_sendEventRequest",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.key,i=void 0===e?"":e,a=t.value,n=void 0===a?"":a,s=this._lastPageRoute,r={ak:this.statData.ak,uuid:this.statData.uuid,lt:"21",ut:this.statData.ut,url:s,ch:this.statData.ch,e_n:i,e_v:"object"===typeof n?JSON.stringify(n):n.toString(),usv:this.statData.usv,t:D(),p:this.statData.p};this.request(r)}},{key:"getNetworkInfo",value:function(){var t=this;uni.getNetworkType({success:function(e){t.statData.net=e.networkType,t.getLocation()}})}},{key:"getProperty",value:function(){var t=this;plus.runtime.getProperty(plus.runtime.appid,function(e){t.statData.v=e.version||"",t.getNetworkInfo()})}},{key:"getLocation",value:function(){var t=this;K.getLocation?uni.getLocation({type:"wgs84",geocode:!0,success:function(e){e.address&&(t.statData.cn=e.address.country,t.statData.pn=e.address.province,t.statData.ct=e.address.city),t.statData.lat=e.latitude,t.statData.lng=e.longitude,t.request(t.statData)}}):(this.statData.lat=0,this.statData.lng=0,this.request(this.statData))}},{key:"request",value:function(t,e){var i=this,a=D(),n=this._navigationBarTitle;t.ttn=n.page,t.ttpj=n.config,t.ttc=n.report;var s=this._reportingRequestData;if("n"===k()&&(s=uni.getStorageSync("__UNI__STAT__DATA")||{}),s[t.lt]||(s[t.lt]=[]),s[t.lt].push(t),"n"===k()&&uni.setStorageSync("__UNI__STAT__DATA",s),!(A()<v)||e){var r=this._reportingRequestData;"n"===k()&&(r=uni.getStorageSync("__UNI__STAT__DATA")),E();var o=[],u=[],h=[],c=function(t){var e=r[t];e.forEach(function(e){var i=S(e);0===t?o.push(i):3===t?h.push(i):u.push(i)})};for(var l in r)c(l);o.push.apply(o,u.concat(h));var p={usv:f,t:a,requests:JSON.stringify(o)};this._reportingRequestData={},"n"===k()&&uni.removeStorageSync("__UNI__STAT__DATA"),"h5"!==t.ut?"n"!==k()||"a"!==this.statData.p?this._sendRequest(p):setTimeout(function(){i._sendRequest(p)},200):this.imageRequest(p)}}},{key:"_sendRequest",value:function(t){var e=this;uni.request({url:p,method:"POST",data:t,success:function(){},fail:function(i){++e._retry<3&&setTimeout(function(){e._sendRequest(t)},1e3)}})}},{key:"imageRequest",value:function(t){var e=new Image,i=b(U(t)).options;e.src=g+"?"+i}},{key:"sendEvent",value:function(t,e){G(t,e)||("title"!==t?this._sendEventRequest({key:t,value:"object"===typeof e?JSON.stringify(e):e},1):this._navigationBarTitle.report=e)}}]),t}(),tt=function(t){function e(){var t;return h(this,e),t=n(this,r(e).call(this)),t.instance=null,"function"===typeof uni.addInterceptor&&(t.addInterceptorInit(),t.interceptLogin(),t.interceptShare(!0),t.interceptRequestPayment()),t}return o(e,t),l(e,null,[{key:"getInstance",value:function(){return this.instance||(this.instance=new e),this.instance}}]),l(e,[{key:"addInterceptorInit",value:function(){var t=this;uni.addInterceptor("setNavigationBarTitle",{invoke:function(e){t._navigationBarTitle.page=e.title}})}},{key:"interceptLogin",value:function(){var t=this;uni.addInterceptor("login",{complete:function(){t._login()}})}},{key:"interceptShare",value:function(t){var e=this;t?uni.addInterceptor("share",{success:function(){e._share()},fail:function(){e._share()}}):e._share()}},{key:"interceptRequestPayment",value:function(){var t=this;uni.addInterceptor("requestPayment",{success:function(){t._payment("pay_success")},fail:function(){t._payment("pay_fail")}})}},{key:"report",value:function(t,e){this.self=e,E(),this.__licationShow=!0,this._sendReportRequest(t,!0)}},{key:"load",value:function(t,e){if(!e.$scope&&!e.$mp){var i=getCurrentPages();e.$scope=i[i.length-1]}this.self=e,this._query=t}},{key:"show",value:function(t){this.self=t,F(t)?this._pageShow(t):this._applicationShow(t)}},{key:"ready",value:function(t){}},{key:"hide",value:function(t){this.self=t,F(t)?this._pageHide(t):this._applicationHide(t,!0)}},{key:"error",value:function(t){this._platform;var e="";e=t.message?t.stack:JSON.stringify(t);var i={ak:this.statData.ak,uuid:this.statData.uuid,lt:"31",ut:this.statData.ut,ch:this.statData.ch,mpsdk:this.statData.mpsdk,mpv:this.statData.mpv,v:this.statData.v,em:e,usv:this.statData.usv,t:D(),p:this.statData.p};this.request(i)}}]),e}(Z),et=tt.getInstance(),it=!1,at={onLaunch:function(t){et.report(t,this)},onReady:function(){et.ready(this)},onLoad:function(t){if(et.load(t,this),this.$scope&&this.$scope.onShareAppMessage){var e=this.$scope.onShareAppMessage;this.$scope.onShareAppMessage=function(t){return et.interceptShare(!1),e.call(this,t)}}},onShow:function(){it=!1,et.show(this)},onHide:function(){it=!0,et.hide(this)},onUnload:function(){it?it=!1:et.hide(this)},onError:function(t){et.error(t)}};function nt(){var t=i("8bbf");(t.default||t).mixin(at),uni.report=function(t,e){et.sendEvent(t,e)}}nt()},"9bf5":function(t,e,i){"use strict";i.r(e);var a=i("a4bb"),n=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,function(){return a[t]})}(s);e["default"]=n.a},a4bb:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={props:{url:{type:String,default:""},fixed:{type:Boolean,default:!1},width:{type:Number,default:200},height:{type:Number,default:200},maxWidth:{type:Number,default:1024},maxHeight:{type:Number,default:1024},blob:{type:Boolean,default:!0}},data:function(){return{mask:{show:!1},frame:{left:50,top:50,width:this.width,height:this.height},image:{left:20,top:20,width:300,height:400},real:{width:100,height:100},target:{width:this.width,height:this.height},touches:[],type:"",start:{frame:{left:0,top:0,width:0,height:0},image:{left:0,top:0,width:0,height:0}},timeoutId:-1,context:null}},mounted:function(){this.context=uni.createCanvasContext("canvas",this),this.targetContext=uni.createCanvasContext("target",this)},methods:{imageLoad:function(t){var e=this;this.mask.show=!0,this.real.width=t.detail.width,this.real.height=t.detail.height,this.image.width=t.detail.width,this.image.height=t.detail.height,this.frame.width=this.width,this.frame.height=this.height,this.fixed||(this.frame.width=this.image.width,this.frame.height=this.image.height);var i=uni.createSelectorQuery().in(this);i.select(".body").boundingClientRect(function(t){var i=t.width,a=t.height,n=e.frame.width,s=e.frame.height,r=.8*i,o=.8*a,u=r/n,h=o/s,c=u;u<h&&(c=h),r=n*c,o=s*c;var l=(i-r)/2,f=(a-o)/2;e.frame.width=r,e.frame.height=o,e.frame.left=l,e.frame.top=f;var p=e.image.width,g=e.image.height;u=r/p,h=o/g,c=u,u<h&&(c=h),e.image.width=p*c,e.image.height=g*c,e.image.left=(i-e.image.width)/2,e.image.top=(a-e.image.height)/2,setTimeout(function(){e.trimImage()},100)}).exec()},touchHandle:function(){},touchStart:function(t,e){this.stopTime(),this.mask.show=!1,0==this.touches.length&&(this.type=e,this.start.frame.left=this.frame.left,this.start.frame.top=this.frame.top,this.start.frame.width=this.frame.width,this.start.frame.height=this.frame.height,this.start.image.left=this.image.left,this.start.image.top=this.image.top,this.start.image.width=this.image.width,this.start.image.height=this.image.height);for(var i=t.changedTouches,a=0;a<i.length;a++){var n=i[a];this.touches.push(n)}},touchMove:function(t){this.stopTime(),t.preventDefault();var e=t.touches;if(1==this.touches.length)"plank"==this.type||"frame"==this.type||this.fixed?this.moveImage(this.touches[0],e[0]):this.scaleFrame(this.touches[0],e[0],this.type);else if(2==this.touches.length&&2==e.length){var i=this.touches[0],a=this.touches[1],n=e[0],s=e[1];if(i.identifier!=n.identifier){var r=n;n=s,s=r}this.scaleImage(i,a,n,s)}},touchEnd:function(t){this.type="",this.touches=[],this.startTime()},touchCancel:function(t){this.type="",this.touches=[],this.startTime()},startTime:function(){var t=this;this.stopTime(),this.timeoutId=setTimeout(function(){t.trimImage()},800)},stopTime:function(){this.timeoutId>=0&&(clearTimeout(this.timeoutId),this.timeoutId=-1)},trimImage:function(){var t=this;this.mask.show=!0;var e=uni.createSelectorQuery().in(this);e.select(".body").boundingClientRect(function(e){var i=e.width,a=e.height,n=t.frame.width,s=t.frame.height,r=.8*i,o=.8*a,u=r/n,h=o/s,c=u;u>h&&(c=h),r=n*c,o=s*c;var l=(i-r)/2,f=(a-o)/2,p=l-t.frame.left+(t.frame.left-t.image.left)*(1-c),g=f-t.frame.top+(t.frame.top-t.image.top)*(1-c);t.frame.width=r,t.frame.height=o,t.frame.left=l,t.frame.top=f,t.image.width*=c,t.image.height*=c,t.image.left+=p,t.image.top+=g}).exec(),setTimeout(function(){var e=t.image.width/t.real.width,i=(t.frame.left-t.image.left)/e,a=(t.frame.top-t.image.top)/e,n=t.frame.width/e,s=t.frame.height/e;t.context.drawImage(t.url,i,a,n,s,0,0,t.frame.width,t.frame.height),t.context.draw(!1)},100)},moveImage:function(t,e){var i=e.clientX-t.clientX,a=e.clientY-t.clientY;this.image.left=this.start.image.left+i,this.image.top=this.start.image.top+a,this.image.left>this.frame.left&&(this.image.left=this.frame.left),this.image.top>this.frame.top&&(this.image.top=this.frame.top),this.image.left+this.image.width<this.frame.left+this.frame.width&&(this.image.left=this.frame.left+this.frame.width-this.image.width),this.image.top+this.image.height<this.frame.top+this.frame.height&&(this.image.top=this.frame.top+this.frame.height-this.image.height)},scaleImage:function(t,e,i,a){var n=t.clientX,s=t.clientY,r=e.clientX,o=e.clientY,u=i.clientX,h=i.clientY,c=a.clientX,l=a.clientY,f=Math.sqrt((n-r)*(n-r)+(s-o)*(s-o)),p=Math.sqrt((u-c)*(u-c)+(h-l)*(h-l)),g=(n+r)/2,d=(s+o)/2,m=(u+c)/2,v=(h+l)/2,_=m-g,y=v-d,w=p/f;this.start.image.width*w<this.frame.width&&(w=this.frame.width/this.start.image.width),this.start.image.height*w<this.frame.height&&(w=this.frame.height/this.start.image.height),this.start.image.width*w<this.frame.width&&(w=this.frame.width/this.start.image.width),this.image.left=this.start.image.left+_-(g-this.start.image.left)*(w-1),this.image.top=this.start.image.top+y-(d-this.start.image.top)*(w-1),this.image.width=this.start.image.width*w,this.image.height=this.start.image.height*w,this.image.left>this.frame.left&&(this.image.left=this.frame.left),this.image.top>this.frame.top&&(this.image.top=this.frame.top),this.image.left+this.image.width<this.frame.left+this.frame.width&&(this.image.left=this.frame.left+this.frame.width-this.image.width),this.image.top+this.image.height<this.frame.top+this.frame.height&&(this.image.top=this.frame.top+this.frame.height-this.image.height)},scaleFrame:function(t,e,i){var a=e.clientX-t.clientX,n=e.clientY-t.clientY,s=this.start.frame.left,r=this.start.frame.top,o=this.start.frame.left+this.start.frame.width,u=this.start.frame.top+this.start.frame.height;"left"==i?s+=a:"right"==i?o+=a:"top"==i?r+=n:"bottom"==i?u+=n:"left-top"==i?(s+=a,r+=n):"left-bottom"==i?(s+=a,u+=n):"right-top"==i?(o+=a,r+=n):"right-bottom"==i&&(o+=a,u+=n),s<this.image.left&&(s=this.image.left),r<this.image.top&&(r=this.image.top),o>this.image.left+this.image.width&&(o=this.image.left+this.image.width),u>this.image.top+this.image.height&&(u=this.image.top+this.image.height),this.frame.left=s,this.frame.top=r,this.frame.width=o-s,this.frame.height=u-r},parseBlob:function(t){for(var e=t.split(","),i=e[0].match(/:(.*?);/)[1],a=atob(e[1]),n=a.length,s=new Uint8Array(n),r=0;r<n;r++)s[r]=a.charCodeAt(r);var o=URL||webkitURL;return o.createObjectURL(new Blob([s],{type:i}))},onok:function(){var e=this,i=this.image.width/this.real.width,a=(this.frame.left-this.image.left)/i,n=(this.frame.top-this.image.top)/i,s=this.frame.width/i,r=this.frame.height/i,o=s,u=r;if(this.fixed)o=this.width/2,u=this.height/2;else{if(o>this.maxWidth/2){var h=this.maxWidth/2/o;o*=h,u*=h}if(u>this.maxHeight/2){h=this.maxHeight/2/u;u*=h,o*=h}}this.target.width=o,this.target.height=u,uni.showLoading({title:"正在裁剪"}),setTimeout(function(){e.targetContext.drawImage(e.url,a,n,s,r,0,0,o,u),e.targetContext.draw(!1,function(){uni.canvasToTempFilePath({canvasId:"target",success:function(t){var i=t.tempFilePath;e.$emit("ok",{path:i})},fail:function(e){console.log(t(e," at components\\ksp-image-cutter\\ksp-image-cutter.vue:445"))},complete:function(){uni.hideLoading()}},e)})},100)},oncancle:function(){this.$emit("cancel")}}};e.default=i}).call(this,i("0de9")["default"])},a525:function(t,e,i){"use strict";var a,n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:t._$s(0,"sc","all"),attrs:{_i:0}},[i("view",{staticClass:t._$s(1,"sc","content"),attrs:{_i:1}},[i("camera",{attrs:{_i:2},on:{error:t.error}}),i("component",{attrs:{url:t._$s(3,"a-url",t.src),_i:3}})]),i("div",[i("button",{attrs:{_i:5},on:{click:t.takePhoto}}),i("button",{attrs:{_i:6},on:{click:t.delPhoto}})])])},s=[];i.d(e,"b",function(){return n}),i.d(e,"c",function(){return s}),i.d(e,"a",function(){return a})},bdb5:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={pages:{},globalStyle:{}};e.default=a},da16:function(t,e,i){"use strict";i.r(e);var a=i("a525"),n=i("56fe");for(var s in n)"default"!==s&&function(t){i.d(e,t,function(){return n[t]})}(s);var r,o=i("f0c5"),u=Object(o["a"])(n["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],r);e["default"]=u.exports},e068:function(t,e,i){"use strict";i("7950"),i("921b");var a=s(i("8bbf")),n=s(i("8116"));function s(t){return t&&t.__esModule?t:{default:t}}function r(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{},a=Object.keys(i);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(i).filter(function(t){return Object.getOwnPropertyDescriptor(i,t).enumerable}))),a.forEach(function(e){o(t,e,i[e])})}return t}function o(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}a.default.config.productionTip=!1,n.default.mpType="app";var u=new a.default(r({},n.default));u.$mount()},f0c5:function(t,e,i){"use strict";function a(t,e,i,a,n,s,r,o,u,h){var c,l="function"===typeof t?t.options:t;if(u&&(l.components=Object.assign(u,l.components||{})),h&&((h.beforeCreate||(h.beforeCreate=[])).unshift(function(){this[h.__module]=this}),(l.mixins||(l.mixins=[])).push(h)),e&&(l.render=e,l.staticRenderFns=i,l._compiled=!0),a&&(l.functional=!0),s&&(l._scopeId="data-v-"+s),r?(c=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},l._ssrRegister=c):n&&(c=o?function(){n.call(this,this.$root.$options.shadowRoot)}:n),c)if(l.functional){l._injectStyles=c;var f=l.render;l.render=function(t,e){return c.call(e),f(t,e)}}else{var p=l.beforeCreate;l.beforeCreate=p?[].concat(p,c):[c]}return{exports:t,options:l}}i.d(e,"a",function(){return a})},faaf:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={onLaunch:function(){console.log(t("App Launch"," at App.vue:4"))},onShow:function(){console.log(t("App Show"," at App.vue:7"))},onHide:function(){console.log(t("App Hide"," at App.vue:10"))}};e.default=i}).call(this,i("0de9")["default"])}},[["e068","app-config"]]]);