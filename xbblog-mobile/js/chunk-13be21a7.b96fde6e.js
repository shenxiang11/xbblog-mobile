(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-13be21a7"],{"0453":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{},[n("site-header"),n("div",{staticClass:"article"},[n("h2",{staticClass:"title"},[e._v(e._s(e.article.title))]),n("div",{staticClass:"meta"},[n("div",{staticClass:"meta-item category"},[n("i",{staticClass:"iconfont icon-mulu"}),e._v(e._s(e._f("category")(e.article.category))+"\n      ")]),n("div",{staticClass:"meta-item pvs"},[e._v("\n        "+e._s(e.article.view)+"次阅读\n      ")])]),e.article.thumb?n("div",{staticClass:"thumb"},[n("img",{attrs:{src:e.article.thumb,alt:""}})]):e._e(),e.article.description?n("p",{staticClass:"description"},[e._v(e._s(e.article.description))]):e._e(),n("div",{staticClass:"markdown-body",domProps:{innerHTML:e._s(e.article.content)}}),n("div",{staticClass:"article-info"},[n("div",{staticClass:"created-at"},[e._v("发布时间："+e._s(e._f("datetime")(e.article.create_at)))]),n("div",{staticClass:"updated-at"},[e._v("更新时间："+e._s(e._f("datetime")(e.article.update_at)))]),e._m(0)]),e.article.tag&&e.article.tag.length?n("div",{staticClass:"tags"},e._l(e.article.tag,function(t){return n("span",{key:t._id,staticClass:"tag"},[e._v(e._s(t.name))])}),0):e._e()])],1)},s=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"copyright"},[e._v("版权声明：自由转载-署名-非商业性使用"),n("span",[e._v("  |  ")]),n("a",{attrs:{href:"https://creativecommons.org/licenses/by-nc/3.0/cn/deed.zh",target:"_blank"}},[e._v("CC BY-NC 3.0 CN")])])}],i=(n("96cf"),n("3b8d")),a=(n("cadf"),n("551c"),n("f751"),n("097d"),n("e725")),l=n("bc3a"),o=n.n(l),h=n("0e54"),c=n.n(h),p={name:"ArticleDetail",data:function(){return{article:{}}},mounted:function(){this.handleShare(),this.fetchArticleDetail()},methods:{handleShare:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(){var t,n,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,o.a.get("/api/wechat/params?url=".concat(encodeURIComponent(location.href)));case 2:t=e.sent,n=t.data.result,r=this,wx.config({debug:!1,appId:n.appId,timestamp:n.timestamp,nonceStr:n.noncestr,signature:n.signature,jsApiList:["updateAppMessageShareData","updateTimelineShareData"]}),wx.ready(function(){wx.updateAppMessageShareData({title:r.article.title,desc:r.article.description,link:location.href,imgUrl:r.article.thumb}),wx.updateTimelineShareData({title:r.article.title,desc:r.article.description,link:location.href,imgUrl:r.article.thumb})});case 7:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),fetchArticleDetail:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(){var t,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,o.a.get("/api/article/client/".concat(this.$route.params._id));case 2:t=e.sent,n=t.data.result,n.content=c()(n.content),this.article=n;case 6:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},components:{SiteHeader:a["a"]}},u=p,g=(n("c14e"),n("2877")),d=Object(g["a"])(u,r,s,!1,null,"c243e3b6",null);t["default"]=d.exports},"0e3f":function(e,t,n){},"0e54":function(e,t,n){(function(t){(function(t){"use strict";var n={newline:/^\n+/,code:/^( {4}[^\n]+\n*)+/,fences:b,hr:/^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,heading:/^ *(#{1,6}) *([^\n]+?) *(?:#+ *)?(?:\n+|$)/,nptable:b,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3})(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,html:"^ {0,3}(?:<(script|pre|style)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?\\?>\\n*|<![A-Z][\\s\\S]*?>\\n*|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>\\n*|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:\\n{2,}|$)|<(?!script|pre|style)([a-z][\\w-]*)(?:attribute)*? */?>(?=\\h*\\n)[\\s\\S]*?(?:\\n{2,}|$)|</(?!script|pre|style)[a-z][\\w-]*\\s*>(?=\\h*\\n)[\\s\\S]*?(?:\\n{2,}|$))",def:/^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,table:b,lheading:/^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading| {0,3}>|<\/?(?:tag)(?: +|\n|\/?>)|<(?:script|pre|style|!--))[^\n]+)*)/,text:/^[^\n]+/};function r(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||y.defaults,this.rules=n.normal,this.options.pedantic?this.rules=n.pedantic:this.options.gfm&&(this.options.tables?this.rules=n.tables:this.rules=n.gfm)}n._label=/(?!\s*\])(?:\\[\[\]]|[^\[\]])+/,n._title=/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/,n.def=u(n.def).replace("label",n._label).replace("title",n._title).getRegex(),n.bullet=/(?:[*+-]|\d{1,9}\.)/,n.item=/^( *)(bull) ?[^\n]*(?:\n(?!\1bull ?)[^\n]*)*/,n.item=u(n.item,"gm").replace(/bull/g,n.bullet).getRegex(),n.list=u(n.list).replace(/bull/g,n.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+n.def.source+")").getRegex(),n._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",n._comment=/<!--(?!-?>)[\s\S]*?-->/,n.html=u(n.html,"i").replace("comment",n._comment).replace("tag",n._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),n.paragraph=u(n.paragraph).replace("hr",n.hr).replace("heading",n.heading).replace("lheading",n.lheading).replace("tag",n._tag).getRegex(),n.blockquote=u(n.blockquote).replace("paragraph",n.paragraph).getRegex(),n.normal=k({},n),n.gfm=k({},n.normal,{fences:/^ {0,3}(`{3,}|~{3,})([^`\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?:\n+|$)|$)/,paragraph:/^/,heading:/^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/}),n.gfm.paragraph=u(n.paragraph).replace("(?!","(?!"+n.gfm.fences.source.replace("\\1","\\2")+"|"+n.list.source.replace("\\1","\\3")+"|").getRegex(),n.tables=k({},n.gfm,{nptable:/^ *([^|\n ].*\|.*)\n *([-:]+ *\|[-| :]*)(?:\n((?:.*[^>\n ].*(?:\n|$))*)\n*|$)/,table:/^ *\|(.+)\n *\|?( *[-:]+[-| :]*)(?:\n((?: *[^>\n ].*(?:\n|$))*)\n*|$)/}),n.pedantic=k({},n.normal,{html:u("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment",n._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/}),r.rules=n,r.lex=function(e,t){var n=new r(t);return n.lex(e)},r.prototype.lex=function(e){return e=e.replace(/\r\n|\r/g,"\n").replace(/\t/g,"    ").replace(/\u00a0/g," ").replace(/\u2424/g,"\n"),this.token(e,!0)},r.prototype.token=function(e,t){var r,s,i,a,l,o,h,c,p,u,g,d,f,m,b,k;e=e.replace(/^ +$/gm,"");while(e)if((i=this.rules.newline.exec(e))&&(e=e.substring(i[0].length),i[0].length>1&&this.tokens.push({type:"space"})),i=this.rules.code.exec(e))e=e.substring(i[0].length),i=i[0].replace(/^ {4}/gm,""),this.tokens.push({type:"code",text:this.options.pedantic?i:_(i,"\n")});else if(i=this.rules.fences.exec(e))e=e.substring(i[0].length),this.tokens.push({type:"code",lang:i[2]?i[2].trim():i[2],text:i[3]||""});else if(i=this.rules.heading.exec(e))e=e.substring(i[0].length),this.tokens.push({type:"heading",depth:i[1].length,text:i[2]});else if(t&&(i=this.rules.nptable.exec(e))&&(o={type:"table",header:x(i[1].replace(/^ *| *\| *$/g,"")),align:i[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:i[3]?i[3].replace(/\n$/,"").split("\n"):[]},o.header.length===o.align.length)){for(e=e.substring(i[0].length),g=0;g<o.align.length;g++)/^ *-+: *$/.test(o.align[g])?o.align[g]="right":/^ *:-+: *$/.test(o.align[g])?o.align[g]="center":/^ *:-+ *$/.test(o.align[g])?o.align[g]="left":o.align[g]=null;for(g=0;g<o.cells.length;g++)o.cells[g]=x(o.cells[g],o.header.length);this.tokens.push(o)}else if(i=this.rules.hr.exec(e))e=e.substring(i[0].length),this.tokens.push({type:"hr"});else if(i=this.rules.blockquote.exec(e))e=e.substring(i[0].length),this.tokens.push({type:"blockquote_start"}),i=i[0].replace(/^ *> ?/gm,""),this.token(i,t),this.tokens.push({type:"blockquote_end"});else if(i=this.rules.list.exec(e)){for(e=e.substring(i[0].length),a=i[2],m=a.length>1,h={type:"list_start",ordered:m,start:m?+a:"",loose:!1},this.tokens.push(h),i=i[0].match(this.rules.item),c=[],r=!1,f=i.length,g=0;g<f;g++)o=i[g],u=o.length,o=o.replace(/^ *([*+-]|\d+\.) */,""),~o.indexOf("\n ")&&(u-=o.length,o=this.options.pedantic?o.replace(/^ {1,4}/gm,""):o.replace(new RegExp("^ {1,"+u+"}","gm"),"")),g!==f-1&&(l=n.bullet.exec(i[g+1])[0],(a.length>1?1===l.length:l.length>1||this.options.smartLists&&l!==a)&&(e=i.slice(g+1).join("\n")+e,g=f-1)),s=r||/\n\n(?!\s*$)/.test(o),g!==f-1&&(r="\n"===o.charAt(o.length-1),s||(s=r)),s&&(h.loose=!0),b=/^\[[ xX]\] /.test(o),k=void 0,b&&(k=" "!==o[1],o=o.replace(/^\[[ xX]\] +/,"")),p={type:"list_item_start",task:b,checked:k,loose:s},c.push(p),this.tokens.push(p),this.token(o,!1),this.tokens.push({type:"list_item_end"});if(h.loose)for(f=c.length,g=0;g<f;g++)c[g].loose=!0;this.tokens.push({type:"list_end"})}else if(i=this.rules.html.exec(e))e=e.substring(i[0].length),this.tokens.push({type:this.options.sanitize?"paragraph":"html",pre:!this.options.sanitizer&&("pre"===i[1]||"script"===i[1]||"style"===i[1]),text:i[0]});else if(t&&(i=this.rules.def.exec(e)))e=e.substring(i[0].length),i[3]&&(i[3]=i[3].substring(1,i[3].length-1)),d=i[1].toLowerCase().replace(/\s+/g," "),this.tokens.links[d]||(this.tokens.links[d]={href:i[2],title:i[3]});else if(t&&(i=this.rules.table.exec(e))&&(o={type:"table",header:x(i[1].replace(/^ *| *\| *$/g,"")),align:i[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:i[3]?i[3].replace(/(?: *\| *)?\n$/,"").split("\n"):[]},o.header.length===o.align.length)){for(e=e.substring(i[0].length),g=0;g<o.align.length;g++)/^ *-+: *$/.test(o.align[g])?o.align[g]="right":/^ *:-+: *$/.test(o.align[g])?o.align[g]="center":/^ *:-+ *$/.test(o.align[g])?o.align[g]="left":o.align[g]=null;for(g=0;g<o.cells.length;g++)o.cells[g]=x(o.cells[g].replace(/^ *\| *| *\| *$/g,""),o.header.length);this.tokens.push(o)}else if(i=this.rules.lheading.exec(e))e=e.substring(i[0].length),this.tokens.push({type:"heading",depth:"="===i[2]?1:2,text:i[1]});else if(t&&(i=this.rules.paragraph.exec(e)))e=e.substring(i[0].length),this.tokens.push({type:"paragraph",text:"\n"===i[1].charAt(i[1].length-1)?i[1].slice(0,-1):i[1]});else if(i=this.rules.text.exec(e))e=e.substring(i[0].length),this.tokens.push({type:"text",text:i[0]});else if(e)throw new Error("Infinite loop on byte: "+e.charCodeAt(0));return this.tokens};var s={escape:/^\\([!"#$%&'()*+,\-.\/:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:b,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(href(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,nolink:/^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,strong:/^__([^\s_])__(?!_)|^\*\*([^\s*])\*\*(?!\*)|^__([^\s][\s\S]*?[^\s])__(?!_)|^\*\*([^\s][\s\S]*?[^\s])\*\*(?!\*)/,em:/^_([^\s_])_(?!_)|^\*([^\s*"<\[])\*(?!\*)|^_([^\s][\s\S]*?[^\s_])_(?!_|[^\spunctuation])|^_([^\s_][\s\S]*?[^\s])_(?!_|[^\spunctuation])|^\*([^\s"<\[][\s\S]*?[^\s*])\*(?!\*)|^\*([^\s*"<\[][\s\S]*?[^\s])\*(?!\*)/,code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:b,text:/^(`+|[^`])[\s\S]*?(?=[\\<!\[`*]|\b_| {2,}\n|$)/};function i(e,t){if(this.options=t||y.defaults,this.links=e,this.rules=s.normal,this.renderer=this.options.renderer||new a,this.renderer.options=this.options,!this.links)throw new Error("Tokens array requires a `links` property.");this.options.pedantic?this.rules=s.pedantic:this.options.gfm&&(this.options.breaks?this.rules=s.breaks:this.rules=s.gfm)}function a(e){this.options=e||y.defaults}function l(){}function o(e){this.tokens=[],this.token=null,this.options=e||y.defaults,this.options.renderer=this.options.renderer||new a,this.renderer=this.options.renderer,this.renderer.options=this.options,this.slugger=new h}function h(){this.seen={}}function c(e,t){if(t){if(c.escapeTest.test(e))return e.replace(c.escapeReplace,function(e){return c.replacements[e]})}else if(c.escapeTestNoEncode.test(e))return e.replace(c.escapeReplaceNoEncode,function(e){return c.replacements[e]});return e}function p(e){return e.replace(/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi,function(e,t){return t=t.toLowerCase(),"colon"===t?":":"#"===t.charAt(0)?"x"===t.charAt(1)?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""})}function u(e,t){return e=e.source||e,t=t||"",{replace:function(t,n){return n=n.source||n,n=n.replace(/(^|[^\[])\^/g,"$1"),e=e.replace(t,n),this},getRegex:function(){return new RegExp(e,t)}}}function g(e,t,n){if(e){try{var r=decodeURIComponent(p(n)).replace(/[^\w:]/g,"").toLowerCase()}catch(s){return null}if(0===r.indexOf("javascript:")||0===r.indexOf("vbscript:")||0===r.indexOf("data:"))return null}t&&!m.test(n)&&(n=d(t,n));try{n=encodeURI(n).replace(/%25/g,"%")}catch(s){return null}return n}function d(e,t){return f[" "+e]||(/^[^:]+:\/*[^\/]*$/.test(e)?f[" "+e]=e+"/":f[" "+e]=_(e,"/",!0)),e=f[" "+e],"//"===t.slice(0,2)?e.replace(/:[\s\S]*/,":")+t:"/"===t.charAt(0)?e.replace(/(:\/*[^\/]*)[\s\S]*/,"$1")+t:e+t}s._punctuation="!\"#$%&'()*+,\\-./:;<=>?@\\[^_{|}~",s.em=u(s.em).replace(/punctuation/g,s._punctuation).getRegex(),s._escapes=/\\([!"#$%&'()*+,\-.\/:;<=>?@\[\]\\^_`{|}~])/g,s._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,s._email=/[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,s.autolink=u(s.autolink).replace("scheme",s._scheme).replace("email",s._email).getRegex(),s._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,s.tag=u(s.tag).replace("comment",n._comment).replace("attribute",s._attribute).getRegex(),s._label=/(?:\[[^\[\]]*\]|\\[\[\]]?|`[^`]*`|[^\[\]\\])*?/,s._href=/\s*(<(?:\\[<>]?|[^\s<>\\])*>|(?:\\[()]?|\([^\s\x00-\x1f\\]*\)|[^\s\x00-\x1f()\\])*?)/,s._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,s.link=u(s.link).replace("label",s._label).replace("href",s._href).replace("title",s._title).getRegex(),s.reflink=u(s.reflink).replace("label",s._label).getRegex(),s.normal=k({},s),s.pedantic=k({},s.normal,{strong:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,em:/^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/,link:u(/^!?\[(label)\]\((.*?)\)/).replace("label",s._label).getRegex(),reflink:u(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",s._label).getRegex()}),s.gfm=k({},s.normal,{escape:u(s.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,del:/^~+(?=\S)([\s\S]*?\S)~+/,text:u(s.text).replace("]|","~]|").replace("|$","|https?://|ftp://|www\\.|[a-zA-Z0-9.!#$%&'*+/=?^_`{\\|}~-]+@|$").getRegex()}),s.gfm.url=u(s.gfm.url,"i").replace("email",s.gfm._extended_email).getRegex(),s.breaks=k({},s.gfm,{br:u(s.br).replace("{2,}","*").getRegex(),text:u(s.gfm.text).replace("{2,}","*").getRegex()}),i.rules=s,i.output=function(e,t,n){var r=new i(t,n);return r.output(e)},i.prototype.output=function(e){var t,n,r,s,a,l,o="";while(e)if(a=this.rules.escape.exec(e))e=e.substring(a[0].length),o+=c(a[1]);else if(a=this.rules.tag.exec(e))!this.inLink&&/^<a /i.test(a[0])?this.inLink=!0:this.inLink&&/^<\/a>/i.test(a[0])&&(this.inLink=!1),!this.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(a[0])?this.inRawBlock=!0:this.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(a[0])&&(this.inRawBlock=!1),e=e.substring(a[0].length),o+=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(a[0]):c(a[0]):a[0];else if(a=this.rules.link.exec(e))e=e.substring(a[0].length),this.inLink=!0,r=a[2],this.options.pedantic?(t=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(r),t?(r=t[1],s=t[3]):s=""):s=a[3]?a[3].slice(1,-1):"",r=r.trim().replace(/^<([\s\S]*)>$/,"$1"),o+=this.outputLink(a,{href:i.escapes(r),title:i.escapes(s)}),this.inLink=!1;else if((a=this.rules.reflink.exec(e))||(a=this.rules.nolink.exec(e))){if(e=e.substring(a[0].length),t=(a[2]||a[1]).replace(/\s+/g," "),t=this.links[t.toLowerCase()],!t||!t.href){o+=a[0].charAt(0),e=a[0].substring(1)+e;continue}this.inLink=!0,o+=this.outputLink(a,t),this.inLink=!1}else if(a=this.rules.strong.exec(e))e=e.substring(a[0].length),o+=this.renderer.strong(this.output(a[4]||a[3]||a[2]||a[1]));else if(a=this.rules.em.exec(e))e=e.substring(a[0].length),o+=this.renderer.em(this.output(a[6]||a[5]||a[4]||a[3]||a[2]||a[1]));else if(a=this.rules.code.exec(e))e=e.substring(a[0].length),o+=this.renderer.codespan(c(a[2].trim(),!0));else if(a=this.rules.br.exec(e))e=e.substring(a[0].length),o+=this.renderer.br();else if(a=this.rules.del.exec(e))e=e.substring(a[0].length),o+=this.renderer.del(this.output(a[1]));else if(a=this.rules.autolink.exec(e))e=e.substring(a[0].length),"@"===a[2]?(n=c(this.mangle(a[1])),r="mailto:"+n):(n=c(a[1]),r=n),o+=this.renderer.link(r,null,n);else if(this.inLink||!(a=this.rules.url.exec(e))){if(a=this.rules.text.exec(e))e=e.substring(a[0].length),this.inRawBlock?o+=this.renderer.text(a[0]):o+=this.renderer.text(c(this.smartypants(a[0])));else if(e)throw new Error("Infinite loop on byte: "+e.charCodeAt(0))}else{if("@"===a[2])n=c(a[0]),r="mailto:"+n;else{do{l=a[0],a[0]=this.rules._backpedal.exec(a[0])[0]}while(l!==a[0]);n=c(a[0]),r="www."===a[1]?"http://"+n:n}e=e.substring(a[0].length),o+=this.renderer.link(r,null,n)}return o},i.escapes=function(e){return e?e.replace(i.rules._escapes,"$1"):e},i.prototype.outputLink=function(e,t){var n=t.href,r=t.title?c(t.title):null;return"!"!==e[0].charAt(0)?this.renderer.link(n,r,this.output(e[1])):this.renderer.image(n,r,c(e[1]))},i.prototype.smartypants=function(e){return this.options.smartypants?e.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014\/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014\/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…"):e},i.prototype.mangle=function(e){if(!this.options.mangle)return e;for(var t,n="",r=e.length,s=0;s<r;s++)t=e.charCodeAt(s),Math.random()>.5&&(t="x"+t.toString(16)),n+="&#"+t+";";return n},a.prototype.code=function(e,t,n){var r=(t||"").match(/\S*/)[0];if(this.options.highlight){var s=this.options.highlight(e,r);null!=s&&s!==e&&(n=!0,e=s)}return r?'<pre><code class="'+this.options.langPrefix+c(r,!0)+'">'+(n?e:c(e,!0))+"</code></pre>\n":"<pre><code>"+(n?e:c(e,!0))+"</code></pre>"},a.prototype.blockquote=function(e){return"<blockquote>\n"+e+"</blockquote>\n"},a.prototype.html=function(e){return e},a.prototype.heading=function(e,t,n,r){return this.options.headerIds?"<h"+t+' id="'+this.options.headerPrefix+r.slug(n)+'">'+e+"</h"+t+">\n":"<h"+t+">"+e+"</h"+t+">\n"},a.prototype.hr=function(){return this.options.xhtml?"<hr/>\n":"<hr>\n"},a.prototype.list=function(e,t,n){var r=t?"ol":"ul",s=t&&1!==n?' start="'+n+'"':"";return"<"+r+s+">\n"+e+"</"+r+">\n"},a.prototype.listitem=function(e){return"<li>"+e+"</li>\n"},a.prototype.checkbox=function(e){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "},a.prototype.paragraph=function(e){return"<p>"+e+"</p>\n"},a.prototype.table=function(e,t){return t&&(t="<tbody>"+t+"</tbody>"),"<table>\n<thead>\n"+e+"</thead>\n"+t+"</table>\n"},a.prototype.tablerow=function(e){return"<tr>\n"+e+"</tr>\n"},a.prototype.tablecell=function(e,t){var n=t.header?"th":"td",r=t.align?"<"+n+' align="'+t.align+'">':"<"+n+">";return r+e+"</"+n+">\n"},a.prototype.strong=function(e){return"<strong>"+e+"</strong>"},a.prototype.em=function(e){return"<em>"+e+"</em>"},a.prototype.codespan=function(e){return"<code>"+e+"</code>"},a.prototype.br=function(){return this.options.xhtml?"<br/>":"<br>"},a.prototype.del=function(e){return"<del>"+e+"</del>"},a.prototype.link=function(e,t,n){if(e=g(this.options.sanitize,this.options.baseUrl,e),null===e)return n;var r='<a href="'+c(e)+'"';return t&&(r+=' title="'+t+'"'),r+=">"+n+"</a>",r},a.prototype.image=function(e,t,n){if(e=g(this.options.sanitize,this.options.baseUrl,e),null===e)return n;var r='<img src="'+e+'" alt="'+n+'"';return t&&(r+=' title="'+t+'"'),r+=this.options.xhtml?"/>":">",r},a.prototype.text=function(e){return e},l.prototype.strong=l.prototype.em=l.prototype.codespan=l.prototype.del=l.prototype.text=function(e){return e},l.prototype.link=l.prototype.image=function(e,t,n){return""+n},l.prototype.br=function(){return""},o.parse=function(e,t){var n=new o(t);return n.parse(e)},o.prototype.parse=function(e){this.inline=new i(e.links,this.options),this.inlineText=new i(e.links,k({},this.options,{renderer:new l})),this.tokens=e.reverse();var t="";while(this.next())t+=this.tok();return t},o.prototype.next=function(){return this.token=this.tokens.pop()},o.prototype.peek=function(){return this.tokens[this.tokens.length-1]||0},o.prototype.parseText=function(){var e=this.token.text;while("text"===this.peek().type)e+="\n"+this.next().text;return this.inline.output(e)},o.prototype.tok=function(){switch(this.token.type){case"space":return"";case"hr":return this.renderer.hr();case"heading":return this.renderer.heading(this.inline.output(this.token.text),this.token.depth,p(this.inlineText.output(this.token.text)),this.slugger);case"code":return this.renderer.code(this.token.text,this.token.lang,this.token.escaped);case"table":var e,t,n,r,s="",i="";for(n="",e=0;e<this.token.header.length;e++)n+=this.renderer.tablecell(this.inline.output(this.token.header[e]),{header:!0,align:this.token.align[e]});for(s+=this.renderer.tablerow(n),e=0;e<this.token.cells.length;e++){for(t=this.token.cells[e],n="",r=0;r<t.length;r++)n+=this.renderer.tablecell(this.inline.output(t[r]),{header:!1,align:this.token.align[r]});i+=this.renderer.tablerow(n)}return this.renderer.table(s,i);case"blockquote_start":i="";while("blockquote_end"!==this.next().type)i+=this.tok();return this.renderer.blockquote(i);case"list_start":i="";var a=this.token.ordered,l=this.token.start;while("list_end"!==this.next().type)i+=this.tok();return this.renderer.list(i,a,l);case"list_item_start":i="";var o=this.token.loose;this.token.task&&(i+=this.renderer.checkbox(this.token.checked));while("list_item_end"!==this.next().type)i+=o||"text"!==this.token.type?this.tok():this.parseText();return this.renderer.listitem(i);case"html":return this.renderer.html(this.token.text);case"paragraph":return this.renderer.paragraph(this.inline.output(this.token.text));case"text":return this.renderer.paragraph(this.parseText());default:var h='Token with "'+this.token.type+'" type was not found.';if(!this.options.silent)throw new Error(h);console.log(h)}},h.prototype.slug=function(e){var t=e.toLowerCase().trim().replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,.\/:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-");if(this.seen.hasOwnProperty(t)){var n=t;do{this.seen[n]++,t=n+"-"+this.seen[n]}while(this.seen.hasOwnProperty(t))}return this.seen[t]=0,t},c.escapeTest=/[&<>"']/,c.escapeReplace=/[&<>"']/g,c.replacements={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},c.escapeTestNoEncode=/[<>"']|&(?!#?\w+;)/,c.escapeReplaceNoEncode=/[<>"']|&(?!#?\w+;)/g;var f={},m=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function b(){}function k(e){for(var t,n,r=1;r<arguments.length;r++)for(n in t=arguments[r],t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}function x(e,t){var n=e.replace(/\|/g,function(e,t,n){var r=!1,s=t;while(--s>=0&&"\\"===n[s])r=!r;return r?"|":" |"}),r=n.split(/ \|/),s=0;if(r.length>t)r.splice(t);else while(r.length<t)r.push("");for(;s<r.length;s++)r[s]=r[s].trim().replace(/\\\|/g,"|");return r}function _(e,t,n){if(0===e.length)return"";var r=0;while(r<e.length){var s=e.charAt(e.length-r-1);if(s!==t||n){if(s===t||!n)break;r++}else r++}return e.substr(0,e.length-r)}function y(e,t,n){if("undefined"===typeof e||null===e)throw new Error("marked(): input parameter is undefined or null");if("string"!==typeof e)throw new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected");if(n||"function"===typeof t){n||(n=t,t=null),t=k({},y.defaults,t||{});var s,i,a=t.highlight,l=0;try{s=r.lex(e,t)}catch(p){return n(p)}i=s.length;var h=function(e){if(e)return t.highlight=a,n(e);var r;try{r=o.parse(s,t)}catch(p){e=p}return t.highlight=a,e?n(e):n(null,r)};if(!a||a.length<3)return h();if(delete t.highlight,!i)return h();for(;l<s.length;l++)(function(e){"code"!==e.type?--i||h():a(e.text,e.lang,function(t,n){return t?h(t):null==n||n===e.text?--i||h():(e.text=n,e.escaped=!0,void(--i||h()))})})(s[l])}else try{return t&&(t=k({},y.defaults,t)),o.parse(r.lex(e,t),t)}catch(p){if(p.message+="\nPlease report this to https://github.com/markedjs/marked.",(t||y.defaults).silent)return"<p>An error occurred:</p><pre>"+c(p.message+"",!0)+"</pre>";throw p}}b.exec=b,y.options=y.setOptions=function(e){return k(y.defaults,e),y},y.getDefaults=function(){return{baseUrl:null,breaks:!1,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:new a,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tables:!0,xhtml:!1}},y.defaults=y.getDefaults(),y.Parser=o,y.parser=o.parse,y.Renderer=a,y.TextRenderer=l,y.Lexer=r,y.lexer=r.lex,y.InlineLexer=i,y.inlineLexer=i.output,y.Slugger=h,y.parse=y,e.exports=y})(this||"undefined"!==typeof window&&window)}).call(this,n("c8ba"))},c14e:function(e,t,n){"use strict";var r=n("0e3f"),s=n.n(r);s.a}}]);
//# sourceMappingURL=chunk-13be21a7.b96fde6e.js.map