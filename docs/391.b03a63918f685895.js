"use strict";(self.webpackChunkBitlo=self.webpackChunkBitlo||[]).push([[391],{9391:(ge,V,C)=>{C.r(V),C.d(V,{ProfilModule:()=>he});var t=C(4946),x=C(6814),Z=C(4670),I=C(8172),w=C(95);function X(n,o){if(1&n&&(t.ynx(0),t.TgZ(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.ALo(5,"number"),t.qZA(),t.TgZ(6,"td"),t._uU(7),t.ALo(8,"number"),t.qZA(),t.BQk()),2&n){const e=t.oxw().$implicit;t.xp6(2),t.Oqu(e.assetCode),t.xp6(2),t.Oqu(t.xi3(5,3,e.availableAmount,"1.2-2")),t.xp6(3),t.Oqu(t.xi3(8,6,e.availableAmountTRYValue,"1.2-2"))}}function Y(n,o){if(1&n&&(t.TgZ(0,"tr"),t.YNc(1,X,9,9,"ng-container",9),t.qZA()),2&n){const e=o.$implicit,s=t.oxw();t.xp6(1),t.Q6J("ngIf",e.availableAmountTRYValue>1||!s.checkBoxControl)}}let J=(()=>{class n{constructor(e){this.dataService=e,this.balances=[],this.checkBoxControl=!0}ngOnInit(){this.dataService.getBalances().subscribe({next:e=>{this.balances=e.balances},error:e=>{console.log(e)}})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(I.Y))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-balances"]],decls:20,vars:2,consts:[[1,"row","justify-content-center"],[1,"col-md-6"],[1,"flex-column"],[1,"my-2"],[1,"form-check"],["type","checkbox","value","","id","flexCheckDefault",1,"form-check-input",3,"ngModel","ngModelChange"],["for","flexCheckDefault",1,"form-check-label"],[1,"table","mt-4","table-bordered","rounded-5"],[4,"ngFor","ngForOf"],[4,"ngIf"]],template:function(e,s){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h1",3),t._uU(4,"Bakiyeler"),t.qZA(),t.TgZ(5,"div",4)(6,"input",5),t.NdJ("ngModelChange",function(a){return s.checkBoxControl=a}),t.qZA(),t.TgZ(7,"label",6),t._uU(8," D\xfc\u015f\xfck Bakiyeleri G\xf6ster / Gizle "),t.qZA()(),t.TgZ(9,"table",7)(10,"thead")(11,"tr")(12,"th"),t._uU(13,"Asset Code"),t.qZA(),t.TgZ(14,"th"),t._uU(15,"Available Amount"),t.qZA(),t.TgZ(16,"th"),t._uU(17,"Available Amount TRY Value"),t.qZA()()(),t.TgZ(18,"tbody"),t.YNc(19,Y,2,1,"tr",8),t.qZA()()()()()),2&e&&(t.xp6(6),t.Q6J("ngModel",s.checkBoxControl),t.xp6(13),t.Q6J("ngForOf",s.balances))},dependencies:[x.sg,x.O5,w.Wl,w.JJ,w.On,x.JJ]}),n})();const P=new t.OlP("ngx-mask config"),B=new t.OlP("new ngx-mask config"),U=new t.OlP("initial ngx-mask config"),G={suffix:"",prefix:"",thousandSeparator:" ",decimalMarker:[".",","],clearIfNotMatch:!1,showTemplate:!1,showMaskTyped:!1,placeHolderCharacter:"_",dropSpecialCharacters:!0,hiddenInput:void 0,shownMaskExpression:"",separatorLimit:"",allowNegativeNumbers:!1,validation:!0,specialCharacters:["-","/","(",")",".",":"," ","+",",","@","[","]",'"',"'"],leadZeroDateTime:!1,leadZero:!1,triggerOnMaskChange:!1,maskFilled:new t.vpe,patterns:{0:{pattern:new RegExp("\\d")},9:{pattern:new RegExp("\\d"),optional:!0},X:{pattern:new RegExp("\\d"),symbol:"*"},A:{pattern:new RegExp("[a-zA-Z0-9]")},S:{pattern:new RegExp("[a-zA-Z]")},U:{pattern:new RegExp("[A-Z]")},L:{pattern:new RegExp("[a-z]")},d:{pattern:new RegExp("\\d")},m:{pattern:new RegExp("\\d")},M:{pattern:new RegExp("\\d")},H:{pattern:new RegExp("\\d")},h:{pattern:new RegExp("\\d")},s:{pattern:new RegExp("\\d")}}};let K=(()=>{class n{constructor(){this._config=(0,t.f3M)(P),this.dropSpecialCharacters=this._config.dropSpecialCharacters,this.hiddenInput=this._config.hiddenInput,this.clearIfNotMatch=this._config.clearIfNotMatch,this.specialCharacters=this._config.specialCharacters,this.patterns=this._config.patterns,this.prefix=this._config.prefix,this.suffix=this._config.suffix,this.thousandSeparator=this._config.thousandSeparator,this.decimalMarker=this._config.decimalMarker,this.showMaskTyped=this._config.showMaskTyped,this.placeHolderCharacter=this._config.placeHolderCharacter,this.validation=this._config.validation,this.separatorLimit=this._config.separatorLimit,this.allowNegativeNumbers=this._config.allowNegativeNumbers,this.leadZeroDateTime=this._config.leadZeroDateTime,this.leadZero=this._config.leadZero,this._shift=new Set,this.maskExpression="",this.actualValue="",this.shownMaskExpression="",this.deletedSpecialCharacter=!1,this._formatWithSeparators=(e,s,i,a)=>{let h=[],u="";if(Array.isArray(i)){const k=new RegExp(i.map(m=>"[\\^$.|?*+()".indexOf(m)>=0?`\\${m}`:m).join("|"));h=e.split(k),u=e.match(k)?.[0]??""}else h=e.split(i),u=i;const r=h.length>1?`${u}${h[1]}`:"";let l=h[0]??"";const f=this.separatorLimit.replace(/\s/g,"");f&&+f&&(l="-"===l[0]?`-${l.slice(1,l.length).slice(0,f.length)}`:l.slice(0,f.length));const S=/(\d+)(\d{3})/;for(;s&&S.test(l);)l=l.replace(S,"$1"+s+"$2");return void 0===a?l+r:0===a?l:l+r.substring(0,a+1)},this.percentage=e=>Number(e)>=0&&Number(e)<=100,this.getPrecision=e=>{const s=e.split(".");return s.length>1?Number(s[s.length-1]):1/0},this.checkAndRemoveSuffix=e=>{for(let s=this.suffix?.length-1;s>=0;s--){const i=this.suffix.substring(s,this.suffix?.length);if(e.includes(i)&&s!==this.suffix?.length-1&&(s-1<0||!e.includes(this.suffix.substring(s-1,this.suffix?.length))))return e.replace(i,"")}return e},this.checkInputPrecision=(e,s,i)=>{if(s<1/0){if(Array.isArray(i)){const r=i.find(l=>l!==this.thousandSeparator);i=r||i[0]}const a=new RegExp(this._charToRegExpExpression(i)+`\\d{${s}}.*$`),h=e.match(a),u=(h&&h[0]?.length)??0;u-1>s&&(e=e.substring(0,e.length-(u-1-s))),0===s&&this._compareOrIncludes(e[e.length-1],i,this.thousandSeparator)&&(e=e.substring(0,e.length-1))}return e}}applyMaskWithPattern(e,s){const[i,a]=s;return this.customPattern=a,this.applyMask(e,i)}applyMask(e,s,i=0,a=!1,h=!1,u=(()=>{})){if(!s||"string"!=typeof e)return"";let r=0,l="",f=!1,S=!1,k=1,m=!1;e.slice(0,this.prefix.length)===this.prefix&&(e=e.slice(this.prefix.length,e.length)),this.suffix&&e?.length>0&&(e=this.checkAndRemoveSuffix(e)),"("===e&&this.prefix&&(e="");const g=e.toString().split("");if(this.allowNegativeNumbers&&"-"===e.slice(r,r+1)&&(l+=e.slice(r,r+1)),"IP"===s){const p=e.split(".");this.ipError=this._validIP(p),s="099.099.099.099"}const N=[];for(let p=0;p<e.length;p++)e[p]?.match("\\d")&&N.push(e[p]??"");if("CPF_CNPJ"===s&&(this.cpfCnpjError=11!==N.length&&14!==N.length,s=N.length>11?"00.000.000/0000-00":"000.000.000-00"),s.startsWith("percent")){if(e.match("[a-z]|[A-Z]")||e.match(/[-!$%^&*()_+|~=`{}\[\]:";'<>?,\/.]/)){e=this._stripToDecimal(e);const c=this.getPrecision(s);e=this.checkInputPrecision(e,c,this.decimalMarker)}if(e.indexOf(".")>0&&!this.percentage(e.substring(0,e.indexOf(".")))){let c=e.substring(0,e.indexOf(".")-1);this.allowNegativeNumbers&&"-"===e.slice(r,r+1)&&(c=e.substring(0,e.indexOf("."))),e=`${c}${e.substring(e.indexOf("."),e.length)}`}let p="";p=this.allowNegativeNumbers&&"-"===e.slice(r,r+1)?e.slice(r+1,r+e.length):e,l=this.percentage(p)?this._splitPercentZero(e):this._splitPercentZero(e.substring(0,e.length-1))}else if(s.startsWith("separator")){(e.match("[w\u0430-\u044f\u0410-\u042f]")||e.match("[\u0401\u0451\u0410-\u044f]")||e.match("[a-z]|[A-Z]")||e.match(/[-@#!$%\\^&*()_\xa3\xac'+|~=`{}\]:";<>.?/]/)||e.match("[^A-Za-z0-9,]"))&&(e=this._stripToDecimal(e)),e=e.length>1&&"0"===e[0]&&e[1]!==this.thousandSeparator&&!this._compareOrIncludes(e[1],this.decimalMarker,this.thousandSeparator)&&!h?e.slice(0,e.length-1):e,h&&(e=this._compareOrIncludes(e[e.length-1],this.decimalMarker,this.thousandSeparator)?e.slice(0,e.length-1):e);const p=this._charToRegExpExpression(this.thousandSeparator);let c='@#!$%^&*()_+|~=`{}\\[\\]:\\s,\\.";<>?\\/'.replace(p,"");if(Array.isArray(this.decimalMarker))for(const v of this.decimalMarker)c=c.replace(this._charToRegExpExpression(v),"");else c=c.replace(this._charToRegExpExpression(this.decimalMarker),"");const T=new RegExp("["+c+"]");(e.match(T)||1===e.length&&this._compareOrIncludes(e,this.decimalMarker,this.thousandSeparator))&&(e=e.substring(0,e.length-1));const _=this.getPrecision(s),M=(e=this.checkInputPrecision(e,_,this.decimalMarker)).replace(new RegExp(p,"g"),"");l=this._formatWithSeparators(M,this.thousandSeparator,this.decimalMarker,_);const y=l.indexOf(",")-e.indexOf(","),b=l.length-e.length;if(b>0&&l[i]!==this.thousandSeparator){S=!0;let v=0;do{this._shift.add(i+v),v++}while(v<b)}else 0!==y&&i>0&&!(l.indexOf(",")>=i&&i>3)||!(l.indexOf(".")>=i&&i>3)&&b<=0?(this._shift.clear(),S=!0,k=b,this._shift.add(i+=b)):this._shift.clear()}else for(let p=0,c=g[0];p<g.length&&r!==s.length;p++,c=g[p]??""){const T="*"in this.patterns;if(this._checkSymbolMask(c,s[r]??"")&&"?"===s[r+1])l+=c,r+=2;else if("*"===s[r+1]&&f&&this._checkSymbolMask(c,s[r+2]??""))l+=c,r+=3,f=!1;else if(this._checkSymbolMask(c,s[r]??"")&&"*"===s[r+1]&&!T)l+=c,f=!0;else if("?"===s[r+1]&&this._checkSymbolMask(c,s[r+2]??""))l+=c,r+=3;else if(this._checkSymbolMask(c,s[r]??"")){if("H"===s[r]&&Number(c)>2){i+=1,r+=1,this._shiftStep(s,r,g.length),p--,this.leadZeroDateTime&&(l+="0");continue}if("h"===s[r]&&("2"===l&&Number(c)>3||("2"===l.slice(r-2,r)||"2"===l.slice(r-3,r)||"2"===l.slice(r-4,r)||"2"===l.slice(r-1,r))&&Number(c)>3&&r>10)){i+=1,r+=1,p--;continue}if(("m"===s[r]||"s"===s[r])&&Number(c)>5){i+=1,r+=1,this._shiftStep(s,r,g.length),p--,this.leadZeroDateTime&&(l+="0");continue}const _=31,M=e[r],y=e[r+1],b=e[r+2],v=e[r-1],z=e[r-2],ce=e[r-3],A=e.slice(r-3,r-1),O=e.slice(r-1,r+1),E=e.slice(r,r+2),q=e.slice(r-2,r);if("d"===s[r]){const W="M0"===s.slice(0,2),F="M0"===s.slice(0,2)&&this.specialCharacters.includes(z);if(Number(c)>3&&this.leadZeroDateTime||!W&&(Number(E)>_||Number(O)>_||this.specialCharacters.includes(y))||(F?Number(O)>_||!this.specialCharacters.includes(M)&&this.specialCharacters.includes(b)||this.specialCharacters.includes(M):Number(E)>_||this.specialCharacters.includes(y))){i+=1,r+=1,this._shiftStep(s,r,g.length),p--,this.leadZeroDateTime&&(l+="0");continue}}if("M"===s[r]){const F=0===r&&(Number(c)>2||Number(E)>12||this.specialCharacters.includes(y)),oe=s.slice(r+2,r+3),ue=A.includes(oe)&&(this.specialCharacters.includes(z)&&Number(O)>12&&!this.specialCharacters.includes(M)||this.specialCharacters.includes(M)||this.specialCharacters.includes(ce)&&Number(q)>12&&!this.specialCharacters.includes(v)||this.specialCharacters.includes(v)),pe=Number(A)<=_&&!this.specialCharacters.includes(A)&&this.specialCharacters.includes(v)&&(Number(E)>12||this.specialCharacters.includes(y)),fe=Number(E)>12&&5===r||this.specialCharacters.includes(y)&&5===r,me=Number(A)>_&&!this.specialCharacters.includes(A)&&!this.specialCharacters.includes(q)&&Number(q)>12,de=Number(A)<=_&&!this.specialCharacters.includes(A)&&!this.specialCharacters.includes(v)&&Number(O)>12;if(Number(c)>1&&this.leadZeroDateTime||F||ue||de||me||pe||fe){i+=1,r+=1,this._shiftStep(s,r,g.length),p--,this.leadZeroDateTime&&(l+="0");continue}}l+=c,r++}else" "===c&&" "===s[r]||"/"===c&&"/"===s[r]?(l+=c,r++):-1!==this.specialCharacters.indexOf(s[r]??"")?(l+=s[r],r++,this._shiftStep(s,r,g.length),p--):"9"===s[r]&&this.showMaskTyped?this._shiftStep(s,r,g.length):this.patterns[s[r]??""]&&this.patterns[s[r]??""]?.optional?(g[r]&&"099.099.099.099"!==s&&"000.000.000-00"!==s&&"00.000.000/0000-00"!==s&&!s.match(/^9+\.0+$/)&&!this.patterns[s[r]??""]?.optional&&(l+=g[r]),s.includes("9*")&&s.includes("0*")&&r++,r++,p--):"*"===this.maskExpression[r+1]&&this._findSpecialChar(this.maskExpression[r+2]??"")&&this._findSpecialChar(c)===this.maskExpression[r+2]&&f||"?"===this.maskExpression[r+1]&&this._findSpecialChar(this.maskExpression[r+2]??"")&&this._findSpecialChar(c)===this.maskExpression[r+2]&&f?(r+=3,l+=c):this.showMaskTyped&&this.specialCharacters.indexOf(c)<0&&c!==this.placeHolderCharacter&&1===this.placeHolderCharacter.length&&(m=!0)}l.length+1===s.length&&-1!==this.specialCharacters.indexOf(s[s.length-1]??"")&&(l+=s[s.length-1]);let D=i+1;for(;this._shift.has(D);)k++,D++;let H=a&&!s.startsWith("separator")?r:this._shift.has(i)?k:0;m&&H--,u(H,S),k<0&&this._shift.clear();let $=!1;h&&($=g.every(p=>this.specialCharacters.includes(p)));let R=`${this.prefix}${$?"":l}${this.suffix}`;return 0===l.length&&(R=this.dropSpecialCharacters?`${l}`:`${this.prefix}${l}`),R}_findSpecialChar(e){return this.specialCharacters.find(s=>s===e)}_checkSymbolMask(e,s){return this.patterns=this.customPattern?this.customPattern:this.patterns,(this.patterns[s]?.pattern&&this.patterns[s]?.pattern.test(e))??!1}_stripToDecimal(e){return e.split("").filter((s,i)=>{const a="string"==typeof this.decimalMarker?s===this.decimalMarker:this.decimalMarker.includes(s);return s.match("^-?\\d")||s===this.thousandSeparator||a||"-"===s&&0===i&&this.allowNegativeNumbers}).join("")}_charToRegExpExpression(e){return e&&(" "===e?"\\s":"[\\^$.|?*+()".indexOf(e)>=0?`\\${e}`:e)}_shiftStep(e,s,i){const a=/[*?]/g.test(e.slice(0,s))?i:s;this._shift.add(a+this.prefix.length||0)}_compareOrIncludes(e,s,i){return Array.isArray(s)?s.filter(a=>a!==i).includes(e):e===s}_validIP(e){return!(4===e.length&&!e.some((s,i)=>e.length!==i+1?""===s||Number(s)>255:""===s||Number(s.substring(0,3))>255))}_splitPercentZero(e){const s=e.indexOf(".");if(-1===s){const i=parseInt(e,10);return isNaN(i)?"":i.toString()}{const i=parseInt(e.substring(0,s),10),a=e.substring(s+1),h=isNaN(i)?"":i.toString();return""===h?"":h+"."+a}}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac}),n})(),L=(()=>{class n extends K{constructor(){super(...arguments),this.isNumberValue=!1,this.maskIsShown="",this.selStart=null,this.selEnd=null,this.writingValue=!1,this.maskChanged=!1,this._maskExpressionArray=[],this.triggerOnMaskChange=!1,this.onChange=e=>{},this.document=(0,t.f3M)(x.K0),this._config=(0,t.f3M)(P),this._elementRef=(0,t.f3M)(t.SBq,{optional:!0}),this._renderer=(0,t.f3M)(t.Qsj,{optional:!0})}applyMask(e,s,i=0,a=!1,h=!1,u=(()=>{})){if(!s)return e!==this.actualValue?this.actualValue:e;if(this.maskIsShown=this.showMaskTyped?this.showMaskInInput():"","IP"===this.maskExpression&&this.showMaskTyped&&(this.maskIsShown=this.showMaskInInput(e||"#")),"CPF_CNPJ"===this.maskExpression&&this.showMaskTyped&&(this.maskIsShown=this.showMaskInInput(e||"#")),!e&&this.showMaskTyped)return this.formControlResult(this.prefix),this.prefix+this.maskIsShown;const r=e&&"number"==typeof this.selStart?e[this.selStart]??"":"";let l="";if(void 0!==this.hiddenInput&&!this.writingValue){let m=this.actualValue.split("");"object"==typeof this.selStart&&"object"==typeof this.selEnd?(this.selStart=Number(this.selStart),this.selEnd=Number(this.selEnd)):""!==e&&m.length?"number"==typeof this.selStart&&"number"==typeof this.selEnd&&(e.length>m.length?m.splice(this.selStart,0,r):e.length<m.length&&(m.length-e.length==1?m.splice(h?this.selStart-1:e.length-1,1):m.splice(this.selStart,this.selEnd-this.selStart))):m=[],this.showMaskTyped&&(this.hiddenInput||(e=this.removeMask(e))),l=this.actualValue.length&&m.length<=e.length?this.shiftTypedSymbols(m.join("")):e}a&&this.hiddenInput&&(l=e),this.deletedSpecialCharacter&&i&&(this.specialCharacters.includes(this.actualValue.slice(i,i+1))?i+=1:"M0"!==s.slice(i-1,i+1)&&(i-=2),this.deletedSpecialCharacter=!1),this.showMaskTyped&&1===this.placeHolderCharacter.length&&(e=this.removeMask(e)),l=this.maskChanged?e:l&&l.length?l:e;const f=super.applyMask(l,s,i,a,h,u);if(this.actualValue=this.getActualValue(f),"."===this.thousandSeparator&&"."===this.decimalMarker&&(this.decimalMarker=","),this.maskExpression.startsWith("separator")&&!0===this.dropSpecialCharacters&&(this.specialCharacters=this.specialCharacters.filter(m=>!this._compareOrIncludes(m,this.decimalMarker,this.thousandSeparator))),this.formControlResult(f),!this.showMaskTyped||this.showMaskTyped&&this.hiddenInput)return this.hiddenInput?h?this.hideInput(f,this.maskExpression):this.hideInput(f,this.maskExpression)+this.maskIsShown.slice(f.length):f;const S=f.length,k=this.prefix+this.maskIsShown;if(this.maskExpression.includes("H")){const m=this._numberSkipedSymbols(f);return f+k.slice(S+m)}return"IP"===this.maskExpression||"CPF_CNPJ"===this.maskExpression?f+k:f+k.slice(S)}_numberSkipedSymbols(e){const s=/(^|\D)(\d\D)/g;let i=s.exec(e),a=0;for(;null!=i;)a+=1,i=s.exec(e);return a}applyValueChanges(e,s,i,a=(()=>{})){const h=this._elementRef?.nativeElement;h&&(h.value=this.applyMask(h.value,this.maskExpression,e,s,i,a),h!==this._getActiveElement()&&this.clearIfNotMatchFn())}hideInput(e,s){return e.split("").map((i,a)=>this.patterns&&this.patterns[s[a]??""]&&this.patterns[s[a]??""]?.symbol?this.patterns[s[a]??""]?.symbol:i).join("")}getActualValue(e){const s=e.split("").filter((i,a)=>{const h=this.maskExpression[a]??"";return this._checkSymbolMask(i,h)||this.specialCharacters.includes(h)&&i===h});return s.join("")===e?s.join(""):e}shiftTypedSymbols(e){let s="";return(e&&e.split("").map((a,h)=>{if(this.specialCharacters.includes(e[h+1]??"")&&e[h+1]!==this.maskExpression[h+1])return s=a,e[h+1];if(s.length){const u=s;return s="",u}return a})||[]).join("")}numberToString(e){return!e&&0!==e||this.maskExpression.startsWith("separator")&&(this.leadZero||!this.dropSpecialCharacters)||this.maskExpression.startsWith("separator")&&this.separatorLimit.length>14&&String(e).length>14?String(e):Number(e).toLocaleString("fullwide",{useGrouping:!1,maximumFractionDigits:20}).replace("/-/","-")}showMaskInInput(e){if(this.showMaskTyped&&this.shownMaskExpression){if(this.maskExpression.length!==this.shownMaskExpression.length)throw new Error("Mask expression must match mask placeholder length");return this.shownMaskExpression}if(this.showMaskTyped){if(e){if("IP"===this.maskExpression)return this._checkForIp(e);if("CPF_CNPJ"===this.maskExpression)return this._checkForCpfCnpj(e)}return this.placeHolderCharacter.length===this.maskExpression.length?this.placeHolderCharacter:this.maskExpression.replace(/\w/g,this.placeHolderCharacter)}return""}clearIfNotMatchFn(){const e=this._elementRef?.nativeElement;e&&this.clearIfNotMatch&&this.prefix.length+this.maskExpression.length+this.suffix.length!==e.value.replace(this.placeHolderCharacter,"").length&&(this.formElementProperty=["value",""],this.applyMask("",this.maskExpression))}set formElementProperty([e,s]){!this._renderer||!this._elementRef||Promise.resolve().then(()=>this._renderer?.setProperty(this._elementRef?.nativeElement,e,s))}checkSpecialCharAmount(e){return e.split("").filter(i=>this._findSpecialChar(i)).length}removeMask(e){return this._removeMask(this._removeSuffix(this._removePrefix(e)),this.specialCharacters.concat("_").concat(this.placeHolderCharacter))}_checkForIp(e){if("#"===e)return`${this.placeHolderCharacter}.${this.placeHolderCharacter}.${this.placeHolderCharacter}.${this.placeHolderCharacter}`;const s=[];for(let i=0;i<e.length;i++){const a=e[i]??"";a&&a.match("\\d")&&s.push(a)}return s.length<=3?`${this.placeHolderCharacter}.${this.placeHolderCharacter}.${this.placeHolderCharacter}`:s.length>3&&s.length<=6?`${this.placeHolderCharacter}.${this.placeHolderCharacter}`:s.length>6&&s.length<=9?this.placeHolderCharacter:""}_checkForCpfCnpj(e){const s=`${this.placeHolderCharacter}${this.placeHolderCharacter}${this.placeHolderCharacter}.${this.placeHolderCharacter}${this.placeHolderCharacter}${this.placeHolderCharacter}.${this.placeHolderCharacter}${this.placeHolderCharacter}${this.placeHolderCharacter}-${this.placeHolderCharacter}${this.placeHolderCharacter}`,i=`${this.placeHolderCharacter}${this.placeHolderCharacter}.${this.placeHolderCharacter}${this.placeHolderCharacter}${this.placeHolderCharacter}.${this.placeHolderCharacter}${this.placeHolderCharacter}${this.placeHolderCharacter}/${this.placeHolderCharacter}${this.placeHolderCharacter}${this.placeHolderCharacter}${this.placeHolderCharacter}-${this.placeHolderCharacter}${this.placeHolderCharacter}`;if("#"===e)return s;const a=[];for(let h=0;h<e.length;h++){const u=e[h]??"";u&&u.match("\\d")&&a.push(u)}return a.length<=3?s.slice(a.length,s.length):a.length>3&&a.length<=6?s.slice(a.length+1,s.length):a.length>6&&a.length<=9?s.slice(a.length+2,s.length):a.length>9&&a.length<11?s.slice(a.length+3,s.length):11===a.length?"":12===a.length?i.slice(17===e.length?16:15,i.length):a.length>12&&a.length<=14?i.slice(a.length+4,i.length):""}_getActiveElement(e=this.document){const s=e?.activeElement?.shadowRoot;return s?.activeElement?this._getActiveElement(s):e.activeElement}formControlResult(e){if(this.writingValue||!this.triggerOnMaskChange&&this.maskChanged)return this.maskChanged&&this.onChange(this._toNumber(this._checkSymbols(this._removeSuffix(this._removePrefix(e))))),void(this.maskChanged=!1);Array.isArray(this.dropSpecialCharacters)?this.onChange(this._toNumber(this._checkSymbols(this._removeMask(this._removeSuffix(this._removePrefix(e)),this.dropSpecialCharacters)))):this.onChange(this._toNumber(this.dropSpecialCharacters||!this.dropSpecialCharacters&&this.prefix===e?this._checkSymbols(this._removeSuffix(this._removePrefix(e))):e))}_toNumber(e){if(!this.isNumberValue||""===e||this.maskExpression.startsWith("separator")&&(this.leadZero||!this.dropSpecialCharacters))return e;if(String(e).length>16&&this.separatorLimit.length>14)return String(e);const s=Number(e);return Number.isNaN(s)?e:s}_removeMask(e,s){return this.maskExpression.startsWith("percent")&&e.includes(".")?e:e&&e.replace(this._regExpForRemove(s),"")}_removePrefix(e){return this.prefix?e&&e.replace(this.prefix,""):e}_removeSuffix(e){return this.suffix?e&&e.replace(this.suffix,""):e}_retrieveSeparatorValue(e){const s=Array.isArray(this.dropSpecialCharacters)?this.specialCharacters.filter(i=>this.dropSpecialCharacters.includes(i)):this.specialCharacters;return this._removeMask(e,s)}_regExpForRemove(e){return new RegExp(e.map(s=>`\\${s}`).join("|"),"gi")}_replaceDecimalMarkerToDot(e){const s=Array.isArray(this.decimalMarker)?this.decimalMarker:[this.decimalMarker];return e.replace(this._regExpForRemove(s),".")}_checkSymbols(e){if(""===e)return e;const s=this._retrieveSeparatorPrecision(this.maskExpression),i=this._replaceDecimalMarkerToDot(this._retrieveSeparatorValue(e));return this.isNumberValue&&s?e===this.decimalMarker?null:this.separatorLimit.length>14?String(i):this._checkPrecision(this.maskExpression,i):i}_retrieveSeparatorPrecision(e){const s=e.match(new RegExp("^separator\\.([^d]*)"));return s?Number(s[1]):null}_checkPrecision(e,s){const i=e.slice(10,11);return e.indexOf("2")>0||this.leadZero&&Number(i)>1?this.leadZero?Number(s).toFixed(Number(i)):Number(s).toFixed(2):this.numberToString(s)}_repeatPatternSymbols(e){return e.match(/{[0-9]+}/)&&e.split("").reduce((s,i,a)=>{if(this._start="{"===i?a:this._start,"}"!==i)return this._findSpecialChar(i)?s+i:s;this._end=a;const h=Number(e.slice(this._start+1,this._end)),u=new Array(h+1).join(e[this._start-1]);if(e.slice(0,this._start).length>1&&e.includes("S")){const r=e.slice(0,this._start-1);return r.includes("{")?s+u:r+s+u}return s+u},"")||e}currentLocaleDecimalMarker(){return 1.1.toLocaleString().substring(1,2)}}return n.\u0275fac=function(){let o;return function(s){return(o||(o=t.n5z(n)))(s||n)}}(),n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac}),n})();function Q(){const n=(0,t.f3M)(U),o=(0,t.f3M)(B);return o instanceof Function?{...n,...o()}:{...n,...o}}function j(n){return[{provide:B,useValue:n},{provide:U,useValue:G},{provide:P,useFactory:Q},L]}let ee=(()=>{class n{constructor(){this.defaultOptions={},this._maskService=(0,t.f3M)(L),this._maskExpressionArray=[],this.mask=""}transform(e,s,{patterns:i,...a}={}){const h={maskExpression:s,...this.defaultOptions,...a,patterns:{...this._maskService.patterns,...i}};if(Object.entries(h).forEach(([u,r])=>{this._maskService[u]=r}),s.includes("||"))return s.split("||").length>1?(this._maskExpressionArray=s.split("||").sort((u,r)=>u.length-r.length),this._setMask(e),this._maskService.applyMask(`${e}`,this.mask)):(this._maskExpressionArray=[],this._maskService.applyMask(`${e}`,this.mask));if(s.includes("{"))return this._maskService.applyMask(`${e}`,this._maskService._repeatPatternSymbols(s));if(s.startsWith("separator")){a.decimalMarker&&(this._maskService.decimalMarker=a.decimalMarker),a.thousandSeparator&&(this._maskService.thousandSeparator=a.thousandSeparator),a.leadZero&&(this._maskService.leadZero=a.leadZero),e=String(e);const u=this._maskService.currentLocaleDecimalMarker();Array.isArray(this._maskService.decimalMarker)||(e=this._maskService.decimalMarker!==u?e.replace(u,this._maskService.decimalMarker):e),this._maskService.leadZero&&e&&!1!==this._maskService.dropSpecialCharacters&&(e=this._maskService._checkPrecision(s,e)),","===this._maskService.decimalMarker&&(e=e.toString().replace(".",",")),this._maskService.isNumberValue=!0}return this._maskService.applyMask(`${e}`,s)}_setMask(e){this._maskExpressionArray.length>0&&this._maskExpressionArray.some(s=>{const i=this._maskService.removeMask(e)?.length<=this._maskService.removeMask(s)?.length;if(e&&i)return this.mask=s,i;this.mask=this._maskExpressionArray[this._maskExpressionArray.length-1]??""})}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275pipe=t.Yjl({name:"mask",type:n,pure:!0,standalone:!0}),n})(),te=(()=>{class n{constructor(e){this.dataService=e,this.user={},this.dataService.getUserData().subscribe({next:s=>{this.user=s.me},error:s=>{console.log(s)}})}ngOnInit(){}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(I.Y))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-detail"]],decls:49,vars:13,consts:[[1,"row","justify-content-center"],[1,"col-md-6"],[1,"flex-column"],[1,"my-2"],[1,"table","mt-4","table-bordered","rounded-5"],[1,"w-25"],[1,"d-flex","gap-2"],["href","profil/bakiyeler",1,"btn","btn-info"],["href","profil/acik-emirler",1,"btn","btn-info"]],template:function(e,s){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h1",3),t._uU(4,"Profil"),t.qZA(),t.TgZ(5,"table",4)(6,"tbody")(7,"tr")(8,"td",5),t._uU(9,"firstName"),t.qZA(),t.TgZ(10,"td"),t._uU(11),t.qZA()(),t.TgZ(12,"tr")(13,"td",5),t._uU(14,"lastName"),t.qZA(),t.TgZ(15,"td"),t._uU(16),t.qZA()(),t.TgZ(17,"tr")(18,"td",5),t._uU(19,"dateOfBirth"),t.qZA(),t.TgZ(20,"td"),t._uU(21),t.ALo(22,"date"),t.qZA()(),t.TgZ(23,"tr")(24,"td",5),t._uU(25,"phoneNumber"),t.qZA(),t.TgZ(26,"td"),t._uU(27),t.ALo(28,"mask"),t.qZA()(),t.TgZ(29,"tr")(30,"td",5),t._uU(31,"identityNumber"),t.qZA(),t.TgZ(32,"td"),t._uU(33),t.qZA()(),t.TgZ(34,"tr")(35,"td",5),t._uU(36,"updateDate"),t.qZA(),t.TgZ(37,"td"),t._uU(38),t.qZA()(),t.TgZ(39,"tr")(40,"td",5),t._uU(41,"country"),t.qZA(),t.TgZ(42,"td"),t._uU(43),t.qZA()()()(),t.TgZ(44,"div",6)(45,"a",7),t._uU(46,"Bakiyeler"),t.qZA(),t.TgZ(47,"a",8),t._uU(48,"A\xe7\u0131k Emirler"),t.qZA()()()()()),2&e&&(t.xp6(11),t.Oqu(s.user.firstName),t.xp6(5),t.Oqu(s.user.lastName),t.xp6(5),t.Oqu(t.xi3(22,7,s.user.dateOfBirth,"d MMMM , y")),t.xp6(6),t.Oqu(t.xi3(28,10,s.user.phoneNumber,"+XX XXX XXX XX XX")),t.xp6(6),t.Oqu(s.user.identityNumber),t.xp6(5),t.Oqu(s.user.updateDate),t.xp6(5),t.Oqu(s.user.country))},dependencies:[x.uU,ee]}),n})();function ie(n,o){if(1&n&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.ALo(9,"number"),t.qZA(),t.TgZ(10,"td"),t._uU(11),t.ALo(12,"number"),t.qZA(),t.TgZ(13,"td"),t._uU(14),t.ALo(15,"number"),t.qZA(),t.TgZ(16,"td"),t._uU(17),t.ALo(18,"number"),t.qZA()()),2&n){const e=o.$implicit;t.xp6(2),t.Oqu(e.marketCode),t.xp6(2),t.Oqu(e.orderSide),t.xp6(2),t.Oqu(e.orderDate),t.xp6(2),t.Oqu(t.xi3(9,7,e.price,"1.2-2")),t.xp6(3),t.Oqu(t.xi3(12,10,e.orderAmount,"1.2-2")),t.xp6(3),t.Oqu(t.xi3(15,13,e.fillAmount,"1.2-2")),t.xp6(3),t.hij("%",t.xi3(18,16,e.fillAmount/e.orderAmount*100,"1.2-2"),"")}}const re=[{path:"",component:(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-profil"]],decls:3,vars:0,consts:[[1,"flex-wrapper"],[1,"container"]],template:function(e,s){1&e&&(t.TgZ(0,"div",0)(1,"div",1),t._UZ(2,"router-outlet"),t.qZA()())},dependencies:[Z.lC]}),n})(),children:[{path:"",redirectTo:"",pathMatch:"full"},{path:"",component:te},{path:"bakiyeler",component:J},{path:"acik-emirler",component:(()=>{class n{constructor(e){this.dataService=e,this.openOrders=[]}ngOnInit(){this.dataService.getOpenOrders().subscribe({next:e=>{this.openOrders=e.openOrders,console.log(this.openOrders)},error:e=>{console.log(e)}})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(I.Y))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-open-orders"]],decls:25,vars:1,consts:[[1,"row","justify-content-center"],[1,"col-md-8"],[1,"flex-column"],[1,"my-2"],[1,"table-responsive"],[1,"table","mt-4","table-bordered","rounded-5"],[4,"ngFor","ngForOf"]],template:function(e,s){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h1",3),t._uU(4,"A\xe7\u0131k Emirler"),t.qZA(),t.TgZ(5,"div",4)(6,"table",5)(7,"thead")(8,"tr")(9,"th"),t._uU(10,"marketCode"),t.qZA(),t.TgZ(11,"th"),t._uU(12,"orderSide"),t.qZA(),t.TgZ(13,"th"),t._uU(14,"orderDate"),t.qZA(),t.TgZ(15,"th"),t._uU(16,"price"),t.qZA(),t.TgZ(17,"th"),t._uU(18,"orderAmount"),t.qZA(),t.TgZ(19,"th"),t._uU(20,"fillAmount"),t.qZA(),t.TgZ(21,"th"),t._uU(22,"Fill percent"),t.qZA()()(),t.TgZ(23,"tbody"),t.YNc(24,ie,19,19,"tr",6),t.qZA()()()()()()),2&e&&(t.xp6(24),t.Q6J("ngForOf",s.openOrders))},dependencies:[x.sg,x.JJ]}),n})()}]}];let ae=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[Z.Bz.forChild(re),Z.Bz]}),n})();const d=void 0;(0,x.qS)(["tr",[["\xf6\xf6","\xf6s"],["\xd6\xd6","\xd6S"],d],[["\xd6\xd6","\xd6S"],d,d],[["P","P","S","\xc7","P","C","C"],["Paz","Pzt","Sal","\xc7ar","Per","Cum","Cmt"],["Pazar","Pazartesi","Sal\u0131","\xc7ar\u015famba","Per\u015fembe","Cuma","Cumartesi"],["Pa","Pt","Sa","\xc7a","Pe","Cu","Ct"]],d,[["O","\u015e","M","N","M","H","T","A","E","E","K","A"],["Oca","\u015eub","Mar","Nis","May","Haz","Tem","A\u011fu","Eyl","Eki","Kas","Ara"],["Ocak","\u015eubat","Mart","Nisan","May\u0131s","Haziran","Temmuz","A\u011fustos","Eyl\xfcl","Ekim","Kas\u0131m","Aral\u0131k"]],d,[["M\xd6","MS"],d,["Milattan \xd6nce","Milattan Sonra"]],1,[6,0],["d.MM.y","d MMM y","d MMMM y","d MMMM y EEEE"],["HH:mm","HH:mm:ss","HH:mm:ss z","HH:mm:ss zzzz"],["{1} {0}",d,d,d],[",",".",";","%","+","-","E","\xd7","\u2030","\u221e","NaN",":"],["#,##0.###","%#,##0","\xa4#,##0.00","#E0"],"TRY","\u20ba","T\xfcrk Liras\u0131",{AUD:["AU$","$"],BYN:[d,"\u0440."],PHP:[d,"\u20b1"],RON:[d,"L"],RUR:[d,"\u0440."],THB:["\u0e3f"],TRY:["\u20ba"],TWD:["NT$"]},"ltr",function ne(n){return 1===n?1:5}]);let he=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({providers:[{provide:t.soG,useValue:"tr-TR"},j()],imports:[x.ez,ae,w.u5]}),n})()}}]);