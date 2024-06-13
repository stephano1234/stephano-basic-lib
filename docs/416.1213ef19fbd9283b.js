(self.webpackChunkstephano_basic_lib_doc=self.webpackChunkstephano_basic_lib_doc||[]).push([[416],{9416:(en,fe,z)=>{"use strict";z.d(fe,{k:()=>ce});var M=z(9212),P=z(6814),ke=z(775),de=z(292);const ie=z(6548);function he(l){const N=l.regex,R=N.concat(/[\p{L}_]/u,N.optional(/[\p{L}0-9_.-]*:/u),/[\p{L}0-9_.-]*/u),C={className:"symbol",begin:/&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/},j={begin:/\s/,contains:[{className:"keyword",begin:/#?[a-z_][a-z1-9_-]+/,illegal:/\n/}]},U=l.inherit(j,{begin:/\(/,end:/\)/}),k=l.inherit(l.APOS_STRING_MODE,{className:"string"}),v=l.inherit(l.QUOTE_STRING_MODE,{className:"string"}),H={endsWithParent:!0,illegal:/</,relevance:0,contains:[{className:"attr",begin:/[\p{L}0-9._:-]+/u,relevance:0},{begin:/=\s*/,relevance:0,contains:[{className:"string",endsParent:!0,variants:[{begin:/"/,end:/"/,contains:[C]},{begin:/'/,end:/'/,contains:[C]},{begin:/[^\s"'=<>`]+/}]}]}]};return{name:"HTML, XML",aliases:["html","xhtml","rss","atom","xjb","xsd","xsl","plist","wsf","svg"],case_insensitive:!0,unicodeRegex:!0,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,relevance:10,contains:[j,v,k,U,{begin:/\[/,end:/\]/,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,contains:[j,U,v,k]}]}]},l.COMMENT(/<!--/,/-->/,{relevance:10}),{begin:/<!\[CDATA\[/,end:/\]\]>/,relevance:10},C,{className:"meta",end:/\?>/,variants:[{begin:/<\?xml/,relevance:10,contains:[v]},{begin:/<\?[a-z][a-z0-9]+/}]},{className:"tag",begin:/<style(?=\s|>)/,end:/>/,keywords:{name:"style"},contains:[H],starts:{end:/<\/style>/,returnEnd:!0,subLanguage:["css","xml"]}},{className:"tag",begin:/<script(?=\s|>)/,end:/>/,keywords:{name:"script"},contains:[H],starts:{end:/<\/script>/,returnEnd:!0,subLanguage:["javascript","handlebars","xml"]}},{className:"tag",begin:/<>|<\/>/},{className:"tag",begin:N.concat(/</,N.lookahead(N.concat(R,N.either(/\/>/,/>/,/\s/)))),end:/\/?>/,contains:[{className:"name",begin:R,relevance:0,starts:H}]},{className:"tag",begin:N.concat(/<\//,N.lookahead(N.concat(R,/>/))),contains:[{className:"name",begin:R,relevance:0},{begin:/>/,relevance:0,endsParent:!0}]}]}}const ne="[A-Za-z$_][0-9A-Za-z$_]*",De=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],Y=["true","false","null","undefined","NaN","Infinity"],re=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],pe=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],be=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],F=["arguments","this","super","console","window","document","localStorage","sessionStorage","module","global"],Be=[].concat(be,re,pe);function ae(l){const N=l.regex,p=ne,U={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(I,K)=>{const V=I[0].length+I.index,q=I.input[V];if("<"===q||","===q)return void K.ignoreMatch();let D;">"===q&&(((I,{after:K})=>{const V="</"+I[0].slice(1);return-1!==I.input.indexOf(V,K)})(I,{after:V})||K.ignoreMatch());const ue=I.input.substring(V);((D=ue.match(/^\s*=/))||(D=ue.match(/^\s+extends\s+/))&&0===D.index)&&K.ignoreMatch()}},k={$pattern:ne,keyword:De,literal:Y,built_in:Be,"variable.language":F},v="[0-9](_?[0-9])*",H=`\\.(${v})`,_e="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",Ne={className:"number",variants:[{begin:`(\\b(${_e})((${H})|\\.)?|(${H}))[eE][+-]?(${v})\\b`},{begin:`\\b(${_e})\\b((${H})\\b|\\.)?|(${H})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},L={className:"subst",begin:"\\$\\{",end:"\\}",keywords:k,contains:[]},Me={begin:"html`",end:"",starts:{end:"`",returnEnd:!1,contains:[l.BACKSLASH_ESCAPE,L],subLanguage:"xml"}},Se={begin:"css`",end:"",starts:{end:"`",returnEnd:!1,contains:[l.BACKSLASH_ESCAPE,L],subLanguage:"css"}},Ae={begin:"gql`",end:"",starts:{end:"`",returnEnd:!1,contains:[l.BACKSLASH_ESCAPE,L],subLanguage:"graphql"}},Oe={className:"string",begin:"`",end:"`",contains:[l.BACKSLASH_ESCAPE,L]},oe={className:"comment",variants:[l.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:p+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),l.C_BLOCK_COMMENT_MODE,l.C_LINE_COMMENT_MODE]},ye=[l.APOS_STRING_MODE,l.QUOTE_STRING_MODE,Me,Se,Ae,Oe,{match:/\$\d+/},Ne];L.contains=ye.concat({begin:/\{/,end:/\}/,keywords:k,contains:["self"].concat(ye)});const Re=[].concat(oe,L.contains),le=Re.concat([{begin:/\(/,end:/\)/,keywords:k,contains:["self"].concat(Re)}]),J={className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:k,contains:le},tn={variants:[{match:[/class/,/\s+/,p,/\s+/,/extends/,/\s+/,N.concat(p,"(",N.concat(/\./,p),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,p],scope:{1:"keyword",3:"title.class"}}]},Q={relevance:0,match:N.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[...re,...pe]}},$e={variants:[{match:[/function/,/\s+/,p,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[J],illegal:/%/},Fe={match:N.concat(/\b/,function ze(I){return N.concat("(?!",I.join("|"),")")}([...be,"super","import"]),p,N.lookahead(/\(/)),className:"title.function",relevance:0},Ze={begin:N.concat(/\./,N.lookahead(N.concat(p,/(?![0-9A-Za-z$_(])/))),end:p,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},je={match:[/get|set/,/\s+/,p,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},J]},Te="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+l.UNDERSCORE_IDENT_RE+")\\s*=>",Ke={match:[/const|var|let/,/\s+/,p,/\s*/,/=\s*/,/(async\s*)?/,N.lookahead(Te)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[J]};return{name:"JavaScript",aliases:["js","jsx","mjs","cjs"],keywords:k,exports:{PARAMS_CONTAINS:le,CLASS_REFERENCE:Q},illegal:/#(?![$_A-z])/,contains:[l.SHEBANG({label:"shebang",binary:"node",relevance:5}),{label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},l.APOS_STRING_MODE,l.QUOTE_STRING_MODE,Me,Se,Ae,Oe,oe,{match:/\$\d+/},Ne,Q,{className:"attr",begin:p+N.lookahead(":"),relevance:0},Ke,{begin:"("+l.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[oe,l.REGEXP_MODE,{className:"function",begin:Te,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:l.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:k,contains:le}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:"<>",end:"</>"},{match:/<[A-Za-z0-9\\._:-]+\s*\/>/},{begin:U.begin,"on:begin":U.isTrulyOpeningTag,end:U.end}],subLanguage:"xml",contains:[{begin:U.begin,end:U.end,skip:!0,contains:["self"]}]}]},$e,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+l.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[J,l.inherit(l.TITLE_MODE,{begin:p,className:"title.function"})]},{match:/\.\.\./,relevance:0},Ze,{match:"\\$"+p,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[J]},Fe,{relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"},tn,je,{match:/\$[(.]/}]}}let Ee=(()=>{class l{constructor(){ie.registerLanguage("xml",he),ie.registerLanguage("javascript",ae)}highlightCode(R,p){return ie.highlight(R,{language:p}).value}static#e=this.\u0275fac=function(p){return new(p||l)};static#n=this.\u0275prov=M.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"})}return l})(),Pe=(()=>{class l{constructor(){this.highlightCodeService=(0,M.f3M)(Ee)}transform(R,p){return this.highlightCodeService.highlightCode(R,p)}static#e=this.\u0275fac=function(p){return new(p||l)};static#n=this.\u0275pipe=M.Yjl({name:"highlightCode",type:l,pure:!0})}return l})();const Ue=["*"];let ce=(()=>{class l{constructor(){this.language="xml",this.backgroundColor="dark"}static#e=this.\u0275fac=function(p){return new(p||l)};static#n=this.\u0275cmp=M.Xpm({type:l,selectors:[["sbld-doc-panel"]],inputs:{code:"code",language:"language",backgroundColor:"backgroundColor"},ngContentSelectors:Ue,decls:8,vars:5,consts:[["routerLink","../",1,"top-buttons"],["icon","arrow-left"],[1,"demo-panel"],[3,"ngClass","innerHTML"]],template:function(p,C){1&p&&(M.F$t(),M.TgZ(0,"div",0),M._UZ(1,"sbl-icon",1),M.TgZ(2,"span"),M._uU(3,"Back"),M.qZA()(),M.TgZ(4,"div",2),M.Hsn(5),M.qZA(),M._UZ(6,"pre",3),M.ALo(7,"highlightCode")),2&p&&(M.xp6(6),M.Q6J("ngClass",C.backgroundColor)("innerHTML",M.xi3(7,2,C.code,C.language),M.oJD))},dependencies:[P.mk,ke.rH,de.oJ,Pe],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;padding:.5rem;row-gap:.5rem}.top-buttons[_ngcontent-%COMP%]{cursor:pointer;display:flex;align-items:center;column-gap:.5rem;font-size:1.5rem;color:#4a5568}.top-buttons[_ngcontent-%COMP%]   sbl-icon[_ngcontent-%COMP%]{font-size:2rem;color:#718096}.demo-panel[_ngcontent-%COMP%]{width:-moz-fit-content;width:fit-content;background-color:#e2e8f0;border-radius:.25rem}pre[_ngcontent-%COMP%]{width:-moz-fit-content;width:fit-content;font-size:1.5rem;padding:.5rem;margin:0;border-radius:.25rem}pre.dark[_ngcontent-%COMP%]{background-color:#1a202c;color:#e2e8f0}pre.light[_ngcontent-%COMP%]{background-color:#e2e8f0;color:#1a202c}"]})}return l})()},6548:en=>{function fe(e){return e instanceof Map?e.clear=e.delete=e.set=function(){throw new Error("map is read-only")}:e instanceof Set&&(e.add=e.clear=e.delete=function(){throw new Error("set is read-only")}),Object.freeze(e),Object.getOwnPropertyNames(e).forEach(n=>{const s=e[n],g=typeof s;("object"===g||"function"===g)&&!Object.isFrozen(s)&&fe(s)}),e}class z{constructor(n){void 0===n.data&&(n.data={}),this.data=n.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function M(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function P(e,...n){const s=Object.create(null);for(const g in e)s[g]=e[g];return n.forEach(function(g){for(const S in g)s[S]=g[S]}),s}const de=e=>!!e.scope;class ie{constructor(n,s){this.buffer="",this.classPrefix=s.classPrefix,n.walk(this)}addText(n){this.buffer+=M(n)}openNode(n){if(!de(n))return;const s=((e,{prefix:n})=>{if(e.startsWith("language:"))return e.replace("language:","language-");if(e.includes(".")){const s=e.split(".");return[`${n}${s.shift()}`,...s.map((g,S)=>`${g}${"_".repeat(S+1)}`)].join(" ")}return`${n}${e}`})(n.scope,{prefix:this.classPrefix});this.span(s)}closeNode(n){de(n)&&(this.buffer+="</span>")}value(){return this.buffer}span(n){this.buffer+=`<span class="${n}">`}}const he=(e={})=>{const n={children:[]};return Object.assign(n,e),n};class ne{constructor(){this.rootNode=he(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(n){this.top.children.push(n)}openNode(n){const s=he({scope:n});this.add(s),this.stack.push(s)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(n){return this.constructor._walk(n,this.rootNode)}static _walk(n,s){return"string"==typeof s?n.addText(s):s.children&&(n.openNode(s),s.children.forEach(g=>this._walk(n,g)),n.closeNode(s)),n}static _collapse(n){"string"!=typeof n&&n.children&&(n.children.every(s=>"string"==typeof s)?n.children=[n.children.join("")]:n.children.forEach(s=>{ne._collapse(s)}))}}class De extends ne{constructor(n){super(),this.options=n}addText(n){""!==n&&this.add(n)}startScope(n){this.openNode(n)}endScope(){this.closeNode()}__addSublanguage(n,s){const g=n.root;s&&(g.scope=`language:${s}`),this.add(g)}toHTML(){return new ie(this,this.options).value()}finalize(){return this.closeAllNodes(),!0}}function Y(e){return e?"string"==typeof e?e:e.source:null}function re(e){return F("(?=",e,")")}function pe(e){return F("(?:",e,")*")}function be(e){return F("(?:",e,")?")}function F(...e){return e.map(s=>Y(s)).join("")}function ae(...e){return"("+(function Be(e){const n=e[e.length-1];return"object"==typeof n&&n.constructor===Object?(e.splice(e.length-1,1),n):{}}(e).capture?"":"?:")+e.map(g=>Y(g)).join("|")+")"}function Ee(e){return new RegExp(e.toString()+"|").exec("").length-1}const Ue=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function ce(e,{joinWith:n}){let s=0;return e.map(g=>{s+=1;const S=s;let A=Y(g),a="";for(;A.length>0;){const r=Ue.exec(A);if(!r){a+=A;break}a+=A.substring(0,r.index),A=A.substring(r.index+r[0].length),"\\"===r[0][0]&&r[1]?a+="\\"+String(Number(r[1])+S):(a+=r[0],"("===r[0]&&s++)}return a}).map(g=>`(${g})`).join(n)}const N="[a-zA-Z]\\w*",R="[a-zA-Z_]\\w*",p="\\b\\d+(\\.\\d+)?",C="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",j="\\b(0b[01]+)",v={begin:"\\\\[\\s\\S]",relevance:0},H={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[v]},_e={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[v]},L=function(e,n,s={}){const g=P({scope:"comment",begin:e,end:n,contains:[]},s);g.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const S=ae("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return g.contains.push({begin:F(/[ ]+/,"(",S,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),g},Me=L("//","$"),Se=L("/\\*","\\*/"),Ae=L("#","$");var Q=Object.freeze({__proto__:null,APOS_STRING_MODE:H,BACKSLASH_ESCAPE:v,BINARY_NUMBER_MODE:{scope:"number",begin:j,relevance:0},BINARY_NUMBER_RE:j,COMMENT:L,C_BLOCK_COMMENT_MODE:Se,C_LINE_COMMENT_MODE:Me,C_NUMBER_MODE:{scope:"number",begin:C,relevance:0},C_NUMBER_RE:C,END_SAME_AS_BEGIN:function(e){return Object.assign(e,{"on:begin":(n,s)=>{s.data._beginMatch=n[1]},"on:end":(n,s)=>{s.data._beginMatch!==n[1]&&s.ignoreMatch()}})},HASH_COMMENT_MODE:Ae,IDENT_RE:N,MATCH_NOTHING_RE:/\b\B/,METHOD_GUARD:{begin:"\\.\\s*"+R,relevance:0},NUMBER_MODE:{scope:"number",begin:p,relevance:0},NUMBER_RE:p,PHRASAL_WORDS_MODE:{begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},QUOTE_STRING_MODE:_e,REGEXP_MODE:{scope:"regexp",begin:/\/(?=[^/\n]*\/)/,end:/\/[gimuy]*/,contains:[v,{begin:/\[/,end:/\]/,relevance:0,contains:[v]}]},RE_STARTERS_RE:"!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",SHEBANG:(e={})=>{const n=/^#![ ]*\//;return e.binary&&(e.begin=F(n,/.*\b/,e.binary,/\b.*/)),P({scope:"meta",begin:n,end:/$/,relevance:0,"on:begin":(s,g)=>{0!==s.index&&g.ignoreMatch()}},e)},TITLE_MODE:{scope:"title",begin:N,relevance:0},UNDERSCORE_IDENT_RE:R,UNDERSCORE_TITLE_MODE:{scope:"title",begin:R,relevance:0}});function He(e,n){"."===e.input[e.index-1]&&n.ignoreMatch()}function $e(e,n){void 0!==e.className&&(e.scope=e.className,delete e.className)}function Ge(e,n){n&&e.beginKeywords&&(e.begin="\\b("+e.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",e.__beforeBegin=He,e.keywords=e.keywords||e.beginKeywords,delete e.beginKeywords,void 0===e.relevance&&(e.relevance=0))}function ze(e,n){Array.isArray(e.illegal)&&(e.illegal=ae(...e.illegal))}function Fe(e,n){if(e.match){if(e.begin||e.end)throw new Error("begin & end are not supported with match");e.begin=e.match,delete e.match}}function Ze(e,n){void 0===e.relevance&&(e.relevance=1)}const je=(e,n)=>{if(!e.beforeMatch)return;if(e.starts)throw new Error("beforeMatch cannot be used with starts");const s=Object.assign({},e);Object.keys(e).forEach(g=>{delete e[g]}),e.keywords=s.keywords,e.begin=F(s.beforeMatch,re(s.begin)),e.starts={relevance:0,contains:[Object.assign(s,{endsParent:!0})]},e.relevance=0,delete s.beforeMatch},Te=["of","and","for","in","not","or","if","then","parent","list","value"],Ke="keyword";function I(e,n,s=Ke){const g=Object.create(null);return"string"==typeof e?S(s,e.split(" ")):Array.isArray(e)?S(s,e):Object.keys(e).forEach(function(A){Object.assign(g,I(e[A],n,A))}),g;function S(A,a){n&&(a=a.map(r=>r.toLowerCase())),a.forEach(function(r){const u=r.split("|");g[u[0]]=[A,K(u[0],u[1])]})}}function K(e,n){return n?Number(n):function V(e){return Te.includes(e.toLowerCase())}(e)?0:1}const q={},D=e=>{console.error(e)},ue=(e,...n)=>{console.log(`WARN: ${e}`,...n)},te=(e,n)=>{q[`${e}/${n}`]||(console.log(`Deprecated as of ${e}. ${n}`),q[`${e}/${n}`]=!0)},we=new Error;function sn(e,n,{key:s}){let g=0;const S=e[s],A={},a={};for(let r=1;r<=n.length;r++)a[r+g]=S[r],A[r+g]=!0,g+=Ee(n[r-1]);e[s]=a,e[s]._emit=A,e[s]._multi=!0}function Mn(e){(function Nn(e){e.scope&&"object"==typeof e.scope&&null!==e.scope&&(e.beginScope=e.scope,delete e.scope)})(e),"string"==typeof e.beginScope&&(e.beginScope={_wrap:e.beginScope}),"string"==typeof e.endScope&&(e.endScope={_wrap:e.endScope}),function En(e){if(Array.isArray(e.begin)){if(e.skip||e.excludeBegin||e.returnBegin)throw D("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),we;if("object"!=typeof e.beginScope||null===e.beginScope)throw D("beginScope must be object"),we;sn(e,e.begin,{key:"beginScope"}),e.begin=ce(e.begin,{joinWith:""})}}(e),function _n(e){if(Array.isArray(e.end)){if(e.skip||e.excludeEnd||e.returnEnd)throw D("skip, excludeEnd, returnEnd not compatible with endScope: {}"),we;if("object"!=typeof e.endScope||null===e.endScope)throw D("endScope must be object"),we;sn(e,e.end,{key:"endScope"}),e.end=ce(e.end,{joinWith:""})}}(e)}function Sn(e){function n(a,r){return new RegExp(Y(a),"m"+(e.case_insensitive?"i":"")+(e.unicodeRegex?"u":"")+(r?"g":""))}class s{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(r,u){u.position=this.position++,this.matchIndexes[this.matchAt]=u,this.regexes.push([u,r]),this.matchAt+=Ee(r)+1}compile(){0===this.regexes.length&&(this.exec=()=>null);const r=this.regexes.map(u=>u[1]);this.matcherRe=n(ce(r,{joinWith:"|"}),!0),this.lastIndex=0}exec(r){this.matcherRe.lastIndex=this.lastIndex;const u=this.matcherRe.exec(r);if(!u)return null;const T=u.findIndex((ge,Xe)=>Xe>0&&void 0!==ge),O=this.matchIndexes[T];return u.splice(0,T),Object.assign(u,O)}}class g{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(r){if(this.multiRegexes[r])return this.multiRegexes[r];const u=new s;return this.rules.slice(r).forEach(([T,O])=>u.addRule(T,O)),u.compile(),this.multiRegexes[r]=u,u}resumingScanAtSamePosition(){return 0!==this.regexIndex}considerAll(){this.regexIndex=0}addRule(r,u){this.rules.push([r,u]),"begin"===u.type&&this.count++}exec(r){const u=this.getMatcher(this.regexIndex);u.lastIndex=this.lastIndex;let T=u.exec(r);if(this.resumingScanAtSamePosition()&&(!T||T.index!==this.lastIndex)){const O=this.getMatcher(0);O.lastIndex=this.lastIndex+1,T=O.exec(r)}return T&&(this.regexIndex+=T.position+1,this.regexIndex===this.count&&this.considerAll()),T}}if(e.compilerExtensions||(e.compilerExtensions=[]),e.contains&&e.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return e.classNameAliases=P(e.classNameAliases||{}),function A(a,r){const u=a;if(a.isCompiled)return u;[$e,Fe,Mn,je].forEach(O=>O(a,r)),e.compilerExtensions.forEach(O=>O(a,r)),a.__beforeBegin=null,[Ge,ze,Ze].forEach(O=>O(a,r)),a.isCompiled=!0;let T=null;return"object"==typeof a.keywords&&a.keywords.$pattern&&(a.keywords=Object.assign({},a.keywords),T=a.keywords.$pattern,delete a.keywords.$pattern),T=T||/\w+/,a.keywords&&(a.keywords=I(a.keywords,e.case_insensitive)),u.keywordPatternRe=n(T,!0),r&&(a.begin||(a.begin=/\B|\b/),u.beginRe=n(u.begin),!a.end&&!a.endsWithParent&&(a.end=/\B|\b/),a.end&&(u.endRe=n(u.end)),u.terminatorEnd=Y(u.end)||"",a.endsWithParent&&r.terminatorEnd&&(u.terminatorEnd+=(a.end?"|":"")+r.terminatorEnd)),a.illegal&&(u.illegalRe=n(a.illegal)),a.contains||(a.contains=[]),a.contains=[].concat(...a.contains.map(function(O){return function An(e){return e.variants&&!e.cachedVariants&&(e.cachedVariants=e.variants.map(function(n){return P(e,{variants:null},n)})),e.cachedVariants?e.cachedVariants:rn(e)?P(e,{starts:e.starts?P(e.starts):null}):Object.isFrozen(e)?P(e):e}("self"===O?a:O)})),a.contains.forEach(function(O){A(O,u)}),a.starts&&A(a.starts,r),u.matcher=function S(a){const r=new g;return a.contains.forEach(u=>r.addRule(u.begin,{rule:u,type:"begin"})),a.terminatorEnd&&r.addRule(a.terminatorEnd,{type:"end"}),a.illegal&&r.addRule(a.illegal,{type:"illegal"}),r}(u),u}(e)}function rn(e){return!!e&&(e.endsWithParent||rn(e.starts))}class yn extends Error{constructor(n,s){super(n),this.name="HTMLInjectionError",this.html=s}}const We=M,an=P,cn=Symbol("nomatch"),on=function(e){const n=Object.create(null),s=Object.create(null),g=[];let S=!0;const A="Could not find the language '{}', did you forget to load/include a language module?",a={disableAutodetect:!0,name:"Plain text",contains:[]};let r={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:De};function u(t){return r.noHighlightRe.test(t)}function O(t,o,h){let E="",y="";"object"==typeof o?(E=t,h=o.ignoreIllegals,y=o.language):(te("10.7.0","highlight(lang, code, ...args) has been deprecated."),te("10.7.0","Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277"),y=t,E=o),void 0===h&&(h=!0);const B={code:E,language:y};Ce("before:highlight",B);const X=B.result?B.result:ge(B.language,B.code,h);return X.code=B.code,Ce("after:highlight",X),X}function ge(t,o,h,E){const y=Object.create(null);function B(i,c){return i.keywords[c]}function X(){if(!f.keywords)return void w.addText(_);let i=0;f.keywordPatternRe.lastIndex=0;let c=f.keywordPatternRe.exec(_),d="";for(;c;){d+=_.substring(i,c.index);const b=G.case_insensitive?c[0].toLowerCase():c[0],x=B(f,b);if(x){const[Z,Fn]=x;w.addText(d),d="",y[b]=(y[b]||0)+1,y[b]<=7&&(ve+=Fn),Z.startsWith("_")?d+=c[0]:$(c[0],G.classNameAliases[Z]||Z)}else d+=c[0];i=f.keywordPatternRe.lastIndex,c=f.keywordPatternRe.exec(_)}d+=_.substring(i),w.addText(d)}function m(){null!=f.subLanguage?function Ie(){if(""===_)return;let i=null;if("string"==typeof f.subLanguage){if(!n[f.subLanguage])return void w.addText(_);i=ge(f.subLanguage,_,!0,bn[f.subLanguage]),bn[f.subLanguage]=i._top}else i=Ye(_,f.subLanguage.length?f.subLanguage:null);f.relevance>0&&(ve+=i.relevance),w.__addSublanguage(i._emitter,i.language)}():X(),_=""}function $(i,c){""!==i&&(w.startScope(c),w.addText(i),w.endScope())}function fn(i,c){let d=1;const b=c.length-1;for(;d<=b;){if(!i._emit[d]){d++;continue}const x=G.classNameAliases[i[d]]||i[d],Z=c[d];x?$(Z,x):(_=Z,X(),_=""),d++}}function dn(i,c){return i.scope&&"string"==typeof i.scope&&w.openNode(G.classNameAliases[i.scope]||i.scope),i.beginScope&&(i.beginScope._wrap?($(_,G.classNameAliases[i.beginScope._wrap]||i.beginScope._wrap),_=""):i.beginScope._multi&&(fn(i.beginScope,c),_="")),f=Object.create(i,{parent:{value:f}}),f}function hn(i,c,d){let b=function Pe(e,n){const s=e&&e.exec(n);return s&&0===s.index}(i.endRe,d);if(b){if(i["on:end"]){const x=new z(i);i["on:end"](c,x),x.isMatchIgnored&&(b=!1)}if(b){for(;i.endsParent&&i.parent;)i=i.parent;return i}}if(i.endsWithParent)return hn(i.parent,c,d)}function Un(i){return 0===f.matcher.regexIndex?(_+=i[0],1):(qe=!0,0)}function $n(i){const c=i[0],d=o.substring(i.index),b=hn(f,i,d);if(!b)return cn;const x=f;f.endScope&&f.endScope._wrap?(m(),$(c,f.endScope._wrap)):f.endScope&&f.endScope._multi?(m(),fn(f.endScope,i)):x.skip?_+=c:(x.returnEnd||x.excludeEnd||(_+=c),m(),x.excludeEnd&&(_=c));do{f.scope&&w.closeNode(),!f.skip&&!f.subLanguage&&(ve+=f.relevance),f=f.parent}while(f!==b.parent);return b.starts&&dn(b.starts,i),x.returnEnd?0:c.length}let me={};function pn(i,c){const d=c&&c[0];if(_+=i,null==d)return m(),0;if("begin"===me.type&&"end"===c.type&&me.index===c.index&&""===d){if(_+=o.slice(c.index,c.index+1),!S){const b=new Error(`0 width match regex (${t})`);throw b.languageName=t,b.badRule=me.rule,b}return 1}if(me=c,"begin"===c.type)return function Hn(i){const c=i[0],d=i.rule,b=new z(d),x=[d.__beforeBegin,d["on:begin"]];for(const Z of x)if(Z&&(Z(i,b),b.isMatchIgnored))return Un(c);return d.skip?_+=c:(d.excludeBegin&&(_+=c),m(),!d.returnBegin&&!d.excludeBegin&&(_=c)),dn(d,i),d.returnBegin?0:c.length}(c);if("illegal"===c.type&&!h){const b=new Error('Illegal lexeme "'+d+'" for mode "'+(f.scope||"<unnamed>")+'"');throw b.mode=f,b}if("end"===c.type){const b=$n(c);if(b!==cn)return b}if("illegal"===c.type&&""===d)return 1;if(Ve>1e5&&Ve>3*c.index)throw new Error("potential infinite loop, way more iterations than matches");return _+=d,d.length}const G=W(t);if(!G)throw D(A.replace("{}",t)),new Error('Unknown language: "'+t+'"');const zn=Sn(G);let Qe="",f=E||zn;const bn={},w=new r.__emitter(r);!function Gn(){const i=[];for(let c=f;c!==G;c=c.parent)c.scope&&i.unshift(c.scope);i.forEach(c=>w.openNode(c))}();let _="",ve=0,ee=0,Ve=0,qe=!1;try{if(G.__emitTokens)G.__emitTokens(o,w);else{for(f.matcher.considerAll();;){Ve++,qe?qe=!1:f.matcher.considerAll(),f.matcher.lastIndex=ee;const i=f.matcher.exec(o);if(!i)break;const d=pn(o.substring(ee,i.index),i);ee=i.index+d}pn(o.substring(ee))}return w.finalize(),Qe=w.toHTML(),{language:t,value:Qe,relevance:ve,illegal:!1,_emitter:w,_top:f}}catch(i){if(i.message&&i.message.includes("Illegal"))return{language:t,value:We(o),illegal:!0,relevance:0,_illegalBy:{message:i.message,index:ee,context:o.slice(ee-100,ee+100),mode:i.mode,resultSoFar:Qe},_emitter:w};if(S)return{language:t,value:We(o),illegal:!1,relevance:0,errorRaised:i,_emitter:w,_top:f};throw i}}function Ye(t,o){o=o||r.languages||Object.keys(n);const h=function Xe(t){const o={value:We(t),illegal:!1,relevance:0,_top:a,_emitter:new r.__emitter(r)};return o._emitter.addText(t),o}(t),E=o.filter(W).filter(gn).map(m=>ge(m,t,!1));E.unshift(h);const y=E.sort((m,$)=>{if(m.relevance!==$.relevance)return $.relevance-m.relevance;if(m.language&&$.language){if(W(m.language).supersetOf===$.language)return 1;if(W($.language).supersetOf===m.language)return-1}return 0}),[B,X]=y,Ie=B;return Ie.secondBest=X,Ie}function Je(t){let o=null;const h=function T(t){let o=t.className+" ";o+=t.parentNode?t.parentNode.className:"";const h=r.languageDetectRe.exec(o);if(h){const E=W(h[1]);return E||(ue(A.replace("{}",h[1])),ue("Falling back to no-highlight mode for this block.",t)),E?h[1]:"no-highlight"}return o.split(/\s+/).find(E=>u(E)||W(E))}(t);if(u(h))return;if(Ce("before:highlightElement",{el:t,language:h}),t.dataset.highlighted)return void console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.",t);if(t.children.length>0&&(r.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(t)),r.throwUnescapedHTML))throw new yn("One of your code blocks includes unescaped HTML.",t.innerHTML);o=t;const E=o.textContent,y=h?O(E,{language:h,ignoreIllegals:!0}):Ye(E);t.innerHTML=y.value,t.dataset.highlighted="yes",function Tn(t,o,h){const E=o&&s[o]||h;t.classList.add("hljs"),t.classList.add(`language-${E}`)}(t,h,y.language),t.result={language:y.language,re:y.relevance,relevance:y.relevance},y.secondBest&&(t.secondBest={language:y.secondBest.language,relevance:y.secondBest.relevance}),Ce("after:highlightElement",{el:t,result:y,text:E})}let ln=!1;function xe(){"loading"!==document.readyState?document.querySelectorAll(r.cssSelector).forEach(Je):ln=!0}function W(t){return t=(t||"").toLowerCase(),n[t]||n[s[t]]}function un(t,{languageName:o}){"string"==typeof t&&(t=[t]),t.forEach(h=>{s[h.toLowerCase()]=o})}function gn(t){const o=W(t);return o&&!o.disableAutodetect}function Ce(t,o){const h=t;g.forEach(function(E){E[h]&&E[h](o)})}typeof window<"u"&&window.addEventListener&&window.addEventListener("DOMContentLoaded",function In(){ln&&xe()},!1),Object.assign(e,{highlight:O,highlightAuto:Ye,highlightAll:xe,highlightElement:Je,highlightBlock:function Pn(t){return te("10.7.0","highlightBlock will be removed entirely in v12.0"),te("10.7.0","Please use highlightElement now."),Je(t)},configure:function wn(t){r=an(r,t)},initHighlighting:()=>{xe(),te("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")},initHighlightingOnLoad:function Cn(){xe(),te("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")},registerLanguage:function mn(t,o){let h=null;try{h=o(e)}catch(E){if(D("Language definition for '{}' could not be registered.".replace("{}",t)),!S)throw E;D(E),h=a}h.name||(h.name=t),n[t]=h,h.rawDefinition=o.bind(null,e),h.aliases&&un(h.aliases,{languageName:t})},unregisterLanguage:function vn(t){delete n[t];for(const o of Object.keys(s))s[o]===t&&delete s[o]},listLanguages:function kn(){return Object.keys(n)},getLanguage:W,registerAliases:un,autoDetection:gn,inherit:an,addPlugin:function Dn(t){(function Ln(t){t["before:highlightBlock"]&&!t["before:highlightElement"]&&(t["before:highlightElement"]=o=>{t["before:highlightBlock"](Object.assign({block:o.el},o))}),t["after:highlightBlock"]&&!t["after:highlightElement"]&&(t["after:highlightElement"]=o=>{t["after:highlightBlock"](Object.assign({block:o.el},o))})})(t),g.push(t)},removePlugin:function Bn(t){const o=g.indexOf(t);-1!==o&&g.splice(o,1)}}),e.debugMode=function(){S=!1},e.safeMode=function(){S=!0},e.versionString="11.9.0",e.regex={concat:F,lookahead:re,either:ae,optional:be,anyNumberOfTimes:pe};for(const t in Q)"object"==typeof Q[t]&&fe(Q[t]);return Object.assign(e,Q),e},se=on({});se.newInstance=()=>on({}),en.exports=se,se.HighlightJS=se,se.default=se}}]);