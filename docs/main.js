!function(i){var e={};function s(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return i[o].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=i,s.c=e,s.d=function(i,e,o){s.o(i,e)||Object.defineProperty(i,e,{enumerable:!0,get:o})},s.r=function(i){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(i,"__esModule",{value:!0})},s.t=function(i,e){if(1&e&&(i=s(i)),8&e)return i;if(4&e&&"object"==typeof i&&i&&i.__esModule)return i;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:i}),2&e&&"string"!=typeof i)for(var r in i)s.d(o,r,function(e){return i[e]}.bind(null,r));return o},s.n=function(i){var e=i&&i.__esModule?function(){return i.default}:function(){return i};return s.d(e,"a",e),e},s.o=function(i,e){return Object.prototype.hasOwnProperty.call(i,e)},s.p="",s(s.s=1)}([function(i,e,s){var o;
/*!
 * UAParser.js v0.7.19
 * Lightweight JavaScript-based User-Agent string parser
 * https://github.com/faisalman/ua-parser-js
 *
 * Copyright © 2012-2016 Faisal Salman <fyzlman@gmail.com>
 * Dual licensed under GPLv2 or MIT
 */
/*!
 * UAParser.js v0.7.19
 * Lightweight JavaScript-based User-Agent string parser
 * https://github.com/faisalman/ua-parser-js
 *
 * Copyright © 2012-2016 Faisal Salman <fyzlman@gmail.com>
 * Dual licensed under GPLv2 or MIT
 */
!function(r,n){"use strict";var t="model",a="name",d="type",l="vendor",u="version",w="mobile",c="tablet",m={extend:function(i,e){var s={};for(var o in i)e[o]&&e[o].length%2==0?s[o]=e[o].concat(i[o]):s[o]=i[o];return s},has:function(i,e){return"string"==typeof i&&-1!==e.toLowerCase().indexOf(i.toLowerCase())},lowerize:function(i){return i.toLowerCase()},major:function(i){return"string"==typeof i?i.replace(/[^\d\.]/g,"").split(".")[0]:void 0},trim:function(i){return i.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}},b={rgx:function(i,e){for(var s,o,r,n,t,a,d=0;d<e.length&&!t;){var l=e[d],u=e[d+1];for(s=o=0;s<l.length&&!t;)if(t=l[s++].exec(i))for(r=0;r<u.length;r++)a=t[++o],"object"==typeof(n=u[r])&&n.length>0?2==n.length?"function"==typeof n[1]?this[n[0]]=n[1].call(this,a):this[n[0]]=n[1]:3==n.length?"function"!=typeof n[1]||n[1].exec&&n[1].test?this[n[0]]=a?a.replace(n[1],n[2]):void 0:this[n[0]]=a?n[1].call(this,a,n[2]):void 0:4==n.length&&(this[n[0]]=a?n[3].call(this,a.replace(n[1],n[2])):void 0):this[n]=a||void 0;d+=2}},str:function(i,e){for(var s in e)if("object"==typeof e[s]&&e[s].length>0){for(var o=0;o<e[s].length;o++)if(m.has(e[s][o],i))return"?"===s?void 0:s}else if(m.has(e[s],i))return"?"===s?void 0:s;return i}},p={browser:{oldsafari:{version:{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}}},device:{amazon:{model:{"Fire Phone":["SD","KF"]}},sprint:{model:{"Evo Shift 4G":"7373KT"},vendor:{HTC:"APA",Sprint:"Sprint"}}},os:{windows:{version:{ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2000:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"}}}},h={browser:[[/(opera\smini)\/([\w\.-]+)/i,/(opera\s[mobiletab]+).+version\/([\w\.-]+)/i,/(opera).+version\/([\w\.]+)/i,/(opera)[\/\s]+([\w\.]+)/i],[a,u],[/(opios)[\/\s]+([\w\.]+)/i],[[a,"Opera Mini"],u],[/\s(opr)\/([\w\.]+)/i],[[a,"Opera"],u],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i,/(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i,/(?:ms|\()(ie)\s([\w\.]+)/i,/(rekonq)\/([\w\.]*)/i,/(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark)\/([\w\.-]+)/i],[a,u],[/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],[[a,"IE"],u],[/(edge|edgios|edga)\/((\d+)?[\w\.]+)/i],[[a,"Edge"],u],[/(yabrowser)\/([\w\.]+)/i],[[a,"Yandex"],u],[/(puffin)\/([\w\.]+)/i],[[a,"Puffin"],u],[/(focus)\/([\w\.]+)/i],[[a,"Firefox Focus"],u],[/(opt)\/([\w\.]+)/i],[[a,"Opera Touch"],u],[/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],[[a,"UCBrowser"],u],[/(comodo_dragon)\/([\w\.]+)/i],[[a,/_/g," "],u],[/(micromessenger)\/([\w\.]+)/i],[[a,"WeChat"],u],[/(brave)\/([\w\.]+)/i],[[a,"Brave"],u],[/(qqbrowserlite)\/([\w\.]+)/i],[a,u],[/(QQ)\/([\d\.]+)/i],[a,u],[/m?(qqbrowser)[\/\s]?([\w\.]+)/i],[a,u],[/(BIDUBrowser)[\/\s]?([\w\.]+)/i],[a,u],[/(2345Explorer)[\/\s]?([\w\.]+)/i],[a,u],[/(MetaSr)[\/\s]?([\w\.]+)/i],[a],[/(LBBROWSER)/i],[a],[/xiaomi\/miuibrowser\/([\w\.]+)/i],[u,[a,"MIUI Browser"]],[/;fbav\/([\w\.]+);/i],[u,[a,"Facebook"]],[/safari\s(line)\/([\w\.]+)/i,/android.+(line)\/([\w\.]+)\/iab/i],[a,u],[/headlesschrome(?:\/([\w\.]+)|\s)/i],[u,[a,"Chrome Headless"]],[/\swv\).+(chrome)\/([\w\.]+)/i],[[a,/(.+)/,"$1 WebView"],u],[/((?:oculus|samsung)browser)\/([\w\.]+)/i],[[a,/(.+(?:g|us))(.+)/,"$1 $2"],u],[/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i],[u,[a,"Android Browser"]],[/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],[a,u],[/(dolfin)\/([\w\.]+)/i],[[a,"Dolphin"],u],[/((?:android.+)crmo|crios)\/([\w\.]+)/i],[[a,"Chrome"],u],[/(coast)\/([\w\.]+)/i],[[a,"Opera Coast"],u],[/fxios\/([\w\.-]+)/i],[u,[a,"Firefox"]],[/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],[u,[a,"Mobile Safari"]],[/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],[u,a],[/webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[[a,"GSA"],u],[/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[a,[u,b.str,p.browser.oldsafari.version]],[/(konqueror)\/([\w\.]+)/i,/(webkit|khtml)\/([\w\.]+)/i],[a,u],[/(navigator|netscape)\/([\w\.-]+)/i],[[a,"Netscape"],u],[/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,/(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i,/(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,/(links)\s\(([\w\.]+)/i,/(gobrowser)\/?([\w\.]*)/i,/(ice\s?browser)\/v?([\w\._]+)/i,/(mosaic)[\/\s]([\w\.]+)/i],[a,u]],cpu:[[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],[["architecture","amd64"]],[/(ia32(?=;))/i],[["architecture",m.lowerize]],[/((?:i[346]|x)86)[;\)]/i],[["architecture","ia32"]],[/windows\s(ce|mobile);\sppc;/i],[["architecture","arm"]],[/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],[["architecture",/ower/,"",m.lowerize]],[/(sun4\w)[;\)]/i],[["architecture","sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+[;l]))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],[["architecture",m.lowerize]]],device:[[/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i],[t,l,[d,c]],[/applecoremedia\/[\w\.]+ \((ipad)/],[t,[l,"Apple"],[d,c]],[/(apple\s{0,1}tv)/i],[[t,"Apple TV"],[l,"Apple"]],[/(archos)\s(gamepad2?)/i,/(hp).+(touchpad)/i,/(hp).+(tablet)/i,/(kindle)\/([\w\.]+)/i,/\s(nook)[\w\s]+build\/(\w+)/i,/(dell)\s(strea[kpr\s\d]*[\dko])/i],[l,t,[d,c]],[/(kf[A-z]+)\sbuild\/.+silk\//i],[t,[l,"Amazon"],[d,c]],[/(sd|kf)[0349hijorstuw]+\sbuild\/.+silk\//i],[[t,b.str,p.device.amazon.model],[l,"Amazon"],[d,w]],[/android.+aft([bms])\sbuild/i],[t,[l,"Amazon"],[d,"smarttv"]],[/\((ip[honed|\s\w*]+);.+(apple)/i],[t,l,[d,w]],[/\((ip[honed|\s\w*]+);/i],[t,[l,"Apple"],[d,w]],[/(blackberry)[\s-]?(\w+)/i,/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i,/(hp)\s([\w\s]+\w)/i,/(asus)-?(\w+)/i],[l,t,[d,w]],[/\(bb10;\s(\w+)/i],[t,[l,"BlackBerry"],[d,w]],[/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone)/i],[t,[l,"Asus"],[d,c]],[/(sony)\s(tablet\s[ps])\sbuild\//i,/(sony)?(?:sgp.+)\sbuild\//i],[[l,"Sony"],[t,"Xperia Tablet"],[d,c]],[/android.+\s([c-g]\d{4}|so[-l]\w+)\sbuild\//i],[t,[l,"Sony"],[d,w]],[/\s(ouya)\s/i,/(nintendo)\s([wids3u]+)/i],[l,t,[d,"console"]],[/android.+;\s(shield)\sbuild/i],[t,[l,"Nvidia"],[d,"console"]],[/(playstation\s[34portablevi]+)/i],[t,[l,"Sony"],[d,"console"]],[/(sprint\s(\w+))/i],[[l,b.str,p.device.sprint.vendor],[t,b.str,p.device.sprint.model],[d,w]],[/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i],[l,t,[d,c]],[/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i,/(zte)-(\w*)/i,/(alcatel|geeksphone|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i],[l,[t,/_/g," "],[d,w]],[/(nexus\s9)/i],[t,[l,"HTC"],[d,c]],[/d\/huawei([\w\s-]+)[;\)]/i,/(nexus\s6p)/i],[t,[l,"Huawei"],[d,w]],[/(microsoft);\s(lumia[\s\w]+)/i],[l,t,[d,w]],[/[\s\(;](xbox(?:\sone)?)[\s\);]/i],[t,[l,"Microsoft"],[d,"console"]],[/(kin\.[onetw]{3})/i],[[t,/\./g," "],[l,"Microsoft"],[d,w]],[/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)[\w\s]+build\//i,/mot[\s-]?(\w*)/i,/(XT\d{3,4}) build\//i,/(nexus\s6)/i],[t,[l,"Motorola"],[d,w]],[/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],[t,[l,"Motorola"],[d,c]],[/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],[[l,m.trim],[t,m.trim],[d,"smarttv"]],[/hbbtv.+maple;(\d+)/i],[[t,/^/,"SmartTV"],[l,"Samsung"],[d,"smarttv"]],[/\(dtv[\);].+(aquos)/i],[t,[l,"Sharp"],[d,"smarttv"]],[/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i,/((SM-T\w+))/i],[[l,"Samsung"],t,[d,c]],[/smart-tv.+(samsung)/i],[l,[d,"smarttv"],t],[/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i,/(sam[sung]*)[\s-]*(\w+-?[\w-]*)/i,/sec-((sgh\w+))/i],[[l,"Samsung"],t,[d,w]],[/sie-(\w*)/i],[t,[l,"Siemens"],[d,w]],[/(maemo|nokia).*(n900|lumia\s\d+)/i,/(nokia)[\s_-]?([\w-]*)/i],[[l,"Nokia"],t,[d,w]],[/android\s3\.[\s\w;-]{10}(a\d{3})/i],[t,[l,"Acer"],[d,c]],[/android.+([vl]k\-?\d{3})\s+build/i],[t,[l,"LG"],[d,c]],[/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],[[l,"LG"],t,[d,c]],[/(lg) netcast\.tv/i],[l,t,[d,"smarttv"]],[/(nexus\s[45])/i,/lg[e;\s\/-]+(\w*)/i,/android.+lg(\-?[\d\w]+)\s+build/i],[t,[l,"LG"],[d,w]],[/android.+(ideatab[a-z0-9\-\s]+)/i],[t,[l,"Lenovo"],[d,c]],[/linux;.+((jolla));/i],[l,t,[d,w]],[/((pebble))app\/[\d\.]+\s/i],[l,t,[d,"wearable"]],[/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i],[l,t,[d,w]],[/crkey/i],[[t,"Chromecast"],[l,"Google"]],[/android.+;\s(glass)\s\d/i],[t,[l,"Google"],[d,"wearable"]],[/android.+;\s(pixel c)[\s)]/i],[t,[l,"Google"],[d,c]],[/android.+;\s(pixel( [23])?( xl)?)\s/i],[t,[l,"Google"],[d,w]],[/android.+;\s(\w+)\s+build\/hm\1/i,/android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i,/android.+(mi[\s\-_]*(?:one|one[\s_]plus|note lte)?[\s_]*(?:\d?\w?)[\s_]*(?:plus)?)\s+build/i,/android.+(redmi[\s\-_]*(?:note)?(?:[\s_]*[\w\s]+))\s+build/i],[[t,/_/g," "],[l,"Xiaomi"],[d,w]],[/android.+(mi[\s\-_]*(?:pad)(?:[\s_]*[\w\s]+))\s+build/i],[[t,/_/g," "],[l,"Xiaomi"],[d,c]],[/android.+;\s(m[1-5]\snote)\sbuild/i],[t,[l,"Meizu"],[d,c]],[/(mz)-([\w-]{2,})/i],[[l,"Meizu"],t,[d,w]],[/android.+a000(1)\s+build/i,/android.+oneplus\s(a\d{4})\s+build/i],[t,[l,"OnePlus"],[d,w]],[/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i],[t,[l,"RCA"],[d,c]],[/android.+[;\/\s]+(Venue[\d\s]{2,7})\s+build/i],[t,[l,"Dell"],[d,c]],[/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i],[t,[l,"Verizon"],[d,c]],[/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i],[[l,"Barnes & Noble"],t,[d,c]],[/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i],[t,[l,"NuVision"],[d,c]],[/android.+;\s(k88)\sbuild/i],[t,[l,"ZTE"],[d,c]],[/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i],[t,[l,"Swiss"],[d,w]],[/android.+[;\/]\s*(zur\d{3})\s+build/i],[t,[l,"Swiss"],[d,c]],[/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i],[t,[l,"Zeki"],[d,c]],[/(android).+[;\/]\s+([YR]\d{2})\s+build/i,/android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(\w{5})\sbuild/i],[[l,"Dragon Touch"],t,[d,c]],[/android.+[;\/]\s*(NS-?\w{0,9})\sbuild/i],[t,[l,"Insignia"],[d,c]],[/android.+[;\/]\s*((NX|Next)-?\w{0,9})\s+build/i],[t,[l,"NextBook"],[d,c]],[/android.+[;\/]\s*(Xtreme\_)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i],[[l,"Voice"],t,[d,w]],[/android.+[;\/]\s*(LVTEL\-)?(V1[12])\s+build/i],[[l,"LvTel"],t,[d,w]],[/android.+;\s(PH-1)\s/i],[t,[l,"Essential"],[d,w]],[/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i],[t,[l,"Envizen"],[d,c]],[/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(\w{1,9})\s+build/i],[l,t,[d,c]],[/android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i],[t,[l,"MachSpeed"],[d,c]],[/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i],[l,t,[d,c]],[/android.+[;\/]\s*TU_(1491)\s+build/i],[t,[l,"Rotor"],[d,c]],[/android.+(KS(.+))\s+build/i],[t,[l,"Amazon"],[d,c]],[/android.+(Gigaset)[\s\-]+(Q\w{1,9})\s+build/i],[l,t,[d,c]],[/\s(tablet|tab)[;\/]/i,/\s(mobile)(?:[;\/]|\ssafari)/i],[[d,m.lowerize],l,t],[/(android[\w\.\s\-]{0,9});.+build/i],[t,[l,"Generic"]]],engine:[[/windows.+\sedge\/([\w\.]+)/i],[u,[a,"EdgeHTML"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i,/(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,/(icab)[\/\s]([23]\.[\d\.]+)/i],[a,u],[/rv\:([\w\.]{1,9}).+(gecko)/i],[u,a]],os:[[/microsoft\s(windows)\s(vista|xp)/i],[a,u],[/(windows)\snt\s6\.2;\s(arm)/i,/(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i,/(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],[a,[u,b.str,p.os.windows.version]],[/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],[[a,"Windows"],[u,b.str,p.os.windows.version]],[/\((bb)(10);/i],[[a,"BlackBerry"],u],[/(blackberry)\w*\/?([\w\.]*)/i,/(tizen)[\/\s]([\w\.]+)/i,/(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]*)/i,/linux;.+(sailfish);/i],[a,u],[/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i],[[a,"Symbian"],u],[/\((series40);/i],[a],[/mozilla.+\(mobile;.+gecko.+firefox/i],[[a,"Firefox OS"],u],[/(nintendo|playstation)\s([wids34portablevu]+)/i,/(mint)[\/\s\(]?(\w*)/i,/(mageia|vectorlinux)[;\s]/i,/(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i,/(hurd|linux)\s?([\w\.]*)/i,/(gnu)\s?([\w\.]*)/i],[a,u],[/(cros)\s[\w]+\s([\w\.]+\w)/i],[[a,"Chromium OS"],u],[/(sunos)\s?([\w\.\d]*)/i],[[a,"Solaris"],u],[/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]*)/i],[a,u],[/(haiku)\s(\w+)/i],[a,u],[/cfnetwork\/.+darwin/i,/ip[honead]{2,4}(?:.*os\s([\w]+)\slike\smac|;\sopera)/i],[[u,/_/g,"."],[a,"iOS"]],[/(mac\sos\sx)\s?([\w\s\.]*)/i,/(macintosh|mac(?=_powerpc)\s)/i],[[a,"Mac OS"],[u,/_/g,"."]],[/((?:open)?solaris)[\/\s-]?([\w\.]*)/i,/(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i,/(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i,/(unix)\s?([\w\.]*)/i],[a,u]]},v=function(i,e){if("object"==typeof i&&(e=i,i=void 0),!(this instanceof v))return new v(i,e).getResult();var s=i||(r&&r.navigator&&r.navigator.userAgent?r.navigator.userAgent:""),o=e?m.extend(h,e):h;return this.getBrowser=function(){var i={name:void 0,version:void 0};return b.rgx.call(i,s,o.browser),i.major=m.major(i.version),i},this.getCPU=function(){var i={architecture:void 0};return b.rgx.call(i,s,o.cpu),i},this.getDevice=function(){var i={vendor:void 0,model:void 0,type:void 0};return b.rgx.call(i,s,o.device),i},this.getEngine=function(){var i={name:void 0,version:void 0};return b.rgx.call(i,s,o.engine),i},this.getOS=function(){var i={name:void 0,version:void 0};return b.rgx.call(i,s,o.os),i},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return s},this.setUA=function(i){return s=i,this},this};v.VERSION="0.7.19",v.BROWSER={NAME:a,MAJOR:"major",VERSION:u},v.CPU={ARCHITECTURE:"architecture"},v.DEVICE={MODEL:t,VENDOR:l,TYPE:d,CONSOLE:"console",MOBILE:w,SMARTTV:"smarttv",TABLET:c,WEARABLE:"wearable",EMBEDDED:"embedded"},v.ENGINE={NAME:a,VERSION:u},v.OS={NAME:a,VERSION:u},void 0!==e?(void 0!==i&&i.exports&&(e=i.exports=v),e.UAParser=v):s(2)?void 0===(o=function(){return v}.call(e,s,e,i))||(i.exports=o):r&&(r.UAParser=v);var f=r&&(r.jQuery||r.Zepto);if(void 0!==f&&!f.ua){var g=new v;f.ua=g.getResult(),f.ua.get=function(){return g.getUA()},f.ua.set=function(i){g.setUA(i);var e=g.getResult();for(var s in e)f.ua[s]=e[s]}}}("object"==typeof window?window:this)},function(i,e,s){"use strict";s.r(e),s.d(e,"WhatIs",function(){return n});var o=s(0),r=s.n(o);s(0);class n{constructor(){this._result=new r.a(navigator.userAgent).getResult(),document.querySelector("#my-result-link").setAttribute("value",this.link),""!=this.resultId?(console.info("Showing another result"),this.showAnotherResult()):(console.info("Showing my result"),this.showMyResult())}showAnotherResult(){var i=this.decode(this.resultId.replace("#",""));this.render_another(i),console.log(i)}showMyResult(){var i=this.decode(this.browser_encoded);this.render_my(i),console.log(i)}get browser(){return this._result.browser}get browser_encoded(){let i=this.browser;var e=`${i.name};${i.version}`;return btoa(e)}get resultId(){return window.location.hash.replace("#","")}get my_hash(){return`${this.browser_encoded}`}get link(){return`${location.origin}${location.pathname}#${this.my_hash}`}decode(i){try{var e=atob(i)}catch(i){throw i}var s=e.split(";");return{browser:s[0],version:s[1]}}render_my(i){document.querySelector("#my-browser").innerHTML=i.browser,document.querySelector("#my-version").innerHTML=i.version,document.querySelector("#my-result").classList.remove("hidden")}render_another(i){document.querySelector("#another-browser").innerHTML=i.browser,document.querySelector("#another-version").innerHTML=i.version,document.querySelector("#another-result").classList.remove("hidden")}}window.$ua=new n},function(i,e){(function(e){i.exports=e}).call(this,{})}]);