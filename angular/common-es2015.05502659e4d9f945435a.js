(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{MDNF:function(e,i,t){"use strict";t.d(i,"a",function(){return g});var n=t("fXoL"),s=t("3Pt+"),o=t("quSY"),r=t("tyNb"),c=t("gbi4"),a=t("Avyq"),l=t("yTNM"),b=t("ofXK"),p=t("Qu3c");function d(e,i){1&e&&(n.Ub(0,"div",3),n.Ub(1,"p",4),n.Pc(2," Ch\u1ecdn l\u1edbp "),n.Tb(),n.Tb())}function m(e,i){if(1&e){const e=n.Vb();n.Ub(0,"div",7),n.Ub(1,"div",8),n.bc("click",function(){n.Cc(e);const t=i.$implicit;return n.fc(2).selectedClass(t)}),n.Ub(2,"div",3),n.Ub(3,"p",9),n.Pc(4),n.gc(5,"slice"),n.Tb(),n.Tb(),n.Tb(),n.Tb()}if(2&e){const e=i.$implicit;n.Cb(3),n.nc("matTooltip",e.name.length>30?e.name:""),n.Cb(1),n.Qc(e.name.length>30?n.jc(5,2,e.name,0,28)+"..":e.name)}}function f(e,i){if(1&e&&(n.Ub(0,"div",5),n.Nc(1,m,6,6,"div",6),n.Tb()),2&e){const e=n.fc();n.Cb(1),n.mc("ngForOf",e.classList)}}const h=function(e,i){return{margin_question_bar_40:e,margin_question_bar_60:i}};let g=(()=>{class e{constructor(e,i,t,r,c,a){this.fb=e,this.activeRoute=i,this.router=t,this.commonService=r,this.localize=c,this.apiService=a,this.isSearchTeacher=!1,this.isMobile=!1,this.selectClassroom=new n.o,this.approvedByName=new n.o,this.subscriptions=new o.a,this.formName=new s.k({}),this.status_obj={loading:!1,error:!1,error_obj:{message:""}},this.classList=[],this.classObj={}}approvedToClass(){var e=this.getFormObj(this.formName);this.approvedByName.emit({nameEmit:e.fullName,classId:this.classObj.id})}selectedClass(e){this.selectClassroom.emit({classObj:e,type:1})}getError(e){return!(!this.formName.controls[e]||!this.formName.controls[e].errors)&&this.formName.controls[e].errors}getErrorType(e,i){return!!(this.formName.controls[e]&&this.formName.controls[e].errors&&this.formName.controls[e].errors[i])&&this.formName.controls[e].errors[i]}getFormObj(e){var i=e.value;for(var t in i)i[t]=e.get(t).value;return i}isEmpty(e){for(var i in e)if(e.hasOwnProperty(i))return!1;return!0}ngOnChanges(){this.dataClass&&this.dataClass.length>0&&(this.classList=this.dataClass)}ngOnInit(){this.formName=this.fb.group({fullName:new s.h("",[s.z.required])}),this.dataClass&&this.dataClass.length>0&&(this.classList=this.dataClass)}ngOnDestroy(){this.subscriptions.unsubscribe()}}return e.\u0275fac=function(i){return new(i||e)(n.Ob(s.g),n.Ob(r.a),n.Ob(r.i),n.Ob(c.a),n.Ob(a.e),n.Ob(l.a))},e.\u0275cmp=n.Ib({type:e,selectors:[["app-select-classes"]],inputs:{dataClass:"dataClass",isSearchTeacher:"isSearchTeacher",isMobile:"isMobile"},outputs:{selectClassroom:"selectClassroom",approvedByName:"approvedByName"},features:[n.Ab],decls:3,vars:6,consts:[[1,"container",3,"ngClass"],["class","text-center",4,"ngIf"],["class","row ml-0 mr-0 pl-0 pr-0",4,"ngIf"],[1,"text-center"],[1,"title"],[1,"row","ml-0","mr-0","pl-0","pr-0"],["class","col-12 col-sm-12 col-md-4 col-lg-3 mb-2",4,"ngFor","ngForOf"],[1,"col-12","col-sm-12","col-md-4","col-lg-3","mb-2"],[1,"card","pt-3","pb-3","pl-2","pr-1","clickable","select_class",3,"click"],[1,"h5","mb-1","card-title","text-white",3,"matTooltip"]],template:function(e,i){1&e&&(n.Ub(0,"div",0),n.Nc(1,d,3,0,"div",1),n.Nc(2,f,2,1,"div",2),n.Tb()),2&e&&(n.mc("ngClass",n.sc(3,h,!i.isSearchTeacher&&!i.isMobile,!i.isSearchTeacher&&i.isMobile)),n.Cb(1),n.mc("ngIf",i.classList&&i.classList.length>0),n.Cb(1),n.mc("ngIf",i.classList&&i.classList.length>0))},directives:[b.k,b.m,b.l,p.a],pipes:[b.u],styles:[".margin_question_bar_40[_ngcontent-%COMP%]{margin-top:calc(2rem + 40px)!important}.margin_question_bar_60[_ngcontent-%COMP%]{margin-top:calc(2rem + 60px)!important}.student_obj[_ngcontent-%COMP%]{padding:5px;min-height:69px}.select_class[_ngcontent-%COMP%]{background:inherit;background-color:#3c8dbc;box-sizing:border-box;border-radius:5px;box-shadow:none;color:#fff}.isSelected[_ngcontent-%COMP%]{border:2px solid #004f7b}.isDisabled[_ngcontent-%COMP%]{opacity:.6}.title[_ngcontent-%COMP%]{color:#000;font-size:20px;margin-bottom:15px}"]}),e})()},wAhq:function(e,i,t){"use strict";t.d(i,"a",function(){return v});var n=t("fXoL"),s=t("quSY"),o=t("BTbT"),r=t("gbi4"),c=t("jhN1"),a=t("ofXK"),l=t("NFeN"),b=t("IkSl");function p(e,i){if(1&e&&(n.Ub(0,"div"),n.Ub(1,"div",19),n.Ub(2,"audio",20),n.Pb(3,"source",21),n.Pc(4," Your browser does not support the audio element. "),n.Tb(),n.Tb(),n.Tb()),2&e){const e=n.fc(2);n.Cb(3),n.mc("src",e.cdn_link,n.Gc),n.Db("type",e.fileOption.mimes)}}function d(e,i){if(1&e&&(n.Ub(0,"div"),n.Ub(1,"div",22),n.Ub(2,"video",23),n.Pb(3,"source",21),n.Ub(4,"p",24),n.Pc(5," B\u1ea1n \u0111ang s\u1eed d\u1ee5ng tr\xecnh duy\u1ec7t kh\xf4ng h\u1ed7 tr\u1ee3 xem video tr\u1ef1c tuy\u1ebfn. "),n.Tb(),n.Tb(),n.Tb(),n.Tb()),2&e){const e=n.fc(2);n.Cb(2),n.nc("poster",e.video_thumb_url,n.Gc),n.Cb(1),n.mc("src",e.cdn_link,n.Gc),n.Db("type",e.fileOption.mimes)}}function m(e,i){if(1&e&&(n.Ub(0,"div"),n.Ub(1,"div",22),n.Pb(2,"img",25),n.Tb(),n.Tb()),2&e){const e=n.fc(2);n.Cb(2),n.Db("src",e.cdn_link,n.Gc)}}function f(e,i){if(1&e&&(n.Ub(0,"div"),n.Ub(1,"div",26),n.Pb(2,"iframe",27),n.Tb(),n.Tb()),2&e){const e=n.fc(2);n.Cb(2),n.mc("src",e.cdn_link,n.Ec)}}function h(e,i){if(1&e&&(n.Ub(0,"div"),n.Ub(1,"div",28),n.Pb(2,"pdf-viewer",29),n.Tb(),n.Tb()),2&e){const e=n.fc(2);n.Cb(2),n.mc("src",e.cdn_link)("show-all",!0)}}function g(e,i){if(1&e){const e=n.Vb();n.Ub(0,"div",1),n.Ub(1,"div",2),n.Ub(2,"div",3),n.Ub(3,"div",4),n.Nc(4,p,5,2,"div",5),n.Nc(5,d,6,3,"div",5),n.Nc(6,m,3,1,"div",5),n.Nc(7,f,3,1,"div",5),n.Nc(8,h,3,2,"div",5),n.Pb(9,"div",6),n.Tb(),n.Pb(10,"div",7),n.Tb(),n.Ub(11,"div",8),n.Ub(12,"div",9),n.Ub(13,"div",10),n.Pb(14,"div",11),n.Tb(),n.Ub(15,"div",12),n.Pc(16),n.Tb(),n.Ub(17,"div",13),n.Pc(18),n.Tb(),n.Tb(),n.Ub(19,"div",14),n.Ub(20,"span",15),n.Ub(21,"a",16),n.Ub(22,"mat-icon",17),n.Pc(23,"save_alt"),n.Tb(),n.Tb(),n.Tb(),n.Ub(24,"span",18),n.bc("click",function(){return n.Cc(e),n.fc().btnClosePreview()}),n.Ub(25,"mat-icon",17),n.Pc(26,"close"),n.Tb(),n.Tb(),n.Tb(),n.Tb(),n.Tb(),n.Tb()}if(2&e){const e=n.fc();n.Cb(4),n.mc("ngIf","audio"===e.typeFile),n.Cb(1),n.mc("ngIf","video"===e.typeFile),n.Cb(1),n.mc("ngIf","image"===e.typeFile),n.Cb(1),n.mc("ngIf","officeapps"===e.typeFile),n.Cb(1),n.mc("ngIf","pdf"===e.typeFile),n.Cb(8),n.Qc(e.fileOption.name),n.Cb(2),n.Sc("Dung l\u01b0\u1ee3ng: ",e.file_mb," MB | Lo\u1ea1i : ",e.fileOption.mimes,""),n.Cb(3),n.Db("href",e.root_link,n.Gc)("download",e.fileOption.name)}}let v=(()=>{class e{constructor(e,i,t){this.commonService=e,this.dom=i,this.sanitizer=t,this.closePreview=new n.o,this.subscriptions=new s.a,this.typeFile="",this.cdn_link="",this.root_link="",this.file_mb=0,this.video_thumb_url=""}ngOnInit(){this.initData(),this.video_thumb_url="https://5002373-s3user.cloudstorage.com.vn/viwewiin/storage_public/azota_assets/images/video-thumb.png"}initData(){if(this.cdn_link=this.commonService.getMyCdn(this.fileOption.url),this.root_link=this.commonService.getMyCdn(this.fileOption.url),this.file_mb=this.getFileMB(this.fileOption.size),this.typeFile=Object(o.b)(this.fileOption.mimes),""!=this.cdn_link)switch(this.typeFile){case"pdf":this.cdn_link=this.cdn_link;break;case"officeapps":this.cdn_link=this.dom.bypassSecurityTrustResourceUrl(this.commonService.getLinkEmbedDocument(this.cdn_link));break;case"video":default:this.cdn_link=this.dom.bypassSecurityTrustResourceUrl(this.cdn_link)}}btnClosePreview(){this.closePreview.emit()}getFileMB(e){return e>0?(e/=1048576).toFixed(2):0}reloadFrame(e){let i=document.getElementById(e);i&&i.parentNode.replaceChild(i.cloneNode(),i)}ngOnDestroy(){this.subscriptions.unsubscribe()}}return e.\u0275fac=function(i){return new(i||e)(n.Ob(r.a),n.Ob(c.b),n.Ob(c.b))},e.\u0275cmp=n.Ib({type:e,selectors:[["azt-preview-media"]],inputs:{fileOption:"fileOption"},outputs:{closePreview:"closePreview"},decls:1,vars:1,consts:[["class","file-preview",4,"ngIf"],[1,"file-preview"],[1,"file-preview__main","flx",2,"overflow-x","auto","flex","1 1 auto"],[1,"file-preview__main-iframe","mx-auto"],[1,"file-preview__notify"],[4,"ngIf"],[1,"tool-hide"],[1,"file-preview__main-comments"],[1,"file-preview__header","flx","flx-sp-btw"],[1,"file-preview__header-left"],["title","",1,"avatar","avatar--xs"],[1,"avatar-img",2,"background-image",'url("https://5002373-s3user.cloudstorage.com.vn/viwewiin/storage_public/azota_assets/images/documents.png")',"background-size","cover"],[1,"file-preview__header__title"],[1,"file-preview__header__send-time"],[1,"file-preview__header-right"],[1,"file-preview__controls-container"],["target","_blank",1,"clickable","download"],[2,"color","rgb(53, 53, 53)","cursor","pointer"],[1,"file-preview__buttons-container",3,"click"],[1,"container-fluid","mt-3"],["controls",""],[3,"src"],[1,"pl-2","pr-2","mt-3"],["id","my-video","playsinline","playsinline","controls","","preload","auto","data-setup","{}",1,"video-js",2,"max-height","calc(100vh - 80px)","width","100%","padding-bottom","1rem",3,"poster"],[1,"vjs-no-js"],["alt","Responsive image",1,"img-fluid","image-preview",2,"max-height","calc(100vh - 80px)","padding-bottom","1rem"],[1,"pl-2","pr-2","mp-0"],["frameborder","0",2,"width","100vw","height","95vh","max-height","calc(100vh - 60px)","padding-bottom","1rem",3,"src"],[1,"container-fluid","mp-0"],[2,"width","100vw","height","95vh","max-height","calc(100vh - 60px)","padding-bottom","1rem","display","block",3,"src","show-all"]],template:function(e,i){1&e&&n.Nc(0,g,27,10,"div",0),2&e&&n.mc("ngIf",null!=i.fileOption)},directives:[a.m,l.a,b.a],styles:[".file-preview[_ngcontent-%COMP%]{position:absolute;height:100vh;z-index:9999;flex-direction:column;left:0;top:0}.file-preview[_ngcontent-%COMP%], .file-preview__main[_ngcontent-%COMP%]{background:#ecf0f5;width:100%;display:flex}.file-preview__main[_ngcontent-%COMP%]{margin-top:65px;min-height:100%;min-width:277px;position:fixed}.file-preview__header[_ngcontent-%COMP%]{padding-top:10px;height:65px;background:#fff;box-shadow:0 2px 4px 0 rgba(0,0,0,.2);position:fixed;align-items:center;z-index:1;top:0;width:100%}.flx-sp-btw[_ngcontent-%COMP%]{justify-content:space-between}.flx[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap}.file-preview__header-left[_ngcontent-%COMP%]{margin-left:20px;margin-right:10px;margin-bottom:12px;flex:1 1 50px;min-width:0}.file-preview__header-left[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]{float:left;margin-right:10px}.avatar--xs[_ngcontent-%COMP%]{width:40px;height:40px;font-size:17px}.avatar[_ngcontent-%COMP%]{position:relative;color:#fff;contain:layout size style}.avatar--xs[_ngcontent-%COMP%] > .avatar-img[_ngcontent-%COMP%]{width:40px;height:40px;background-color:#e5efff}.avatar-img[_ngcontent-%COMP%]{border-radius:100%}.file-preview__header__title[_ngcontent-%COMP%]{font-size:15px;color:#222;font-weight:500}.file-preview__header__send-time[_ngcontent-%COMP%], .file-preview__header__title[_ngcontent-%COMP%]{white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.file-preview__header__send-time[_ngcontent-%COMP%]{padding-top:2px;font-size:13px;color:#a0a0a0}.file-preview__header-right[_ngcontent-%COMP%]{color:#fff;margin-right:15px;white-space:nowrap;display:flex}.file-preview__controls-container[_ngcontent-%COMP%]{margin-right:40px}.file-preview__buttons-container[_ngcontent-%COMP%]{display:inline-flex;align-items:center;position:relative}.mp-0[_ngcontent-%COMP%]{margin:0!important;padding:0!important}"]}),e})()}}]);