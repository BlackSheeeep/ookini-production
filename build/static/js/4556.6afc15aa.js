"use strict";(self.webpackChunkookini=self.webpackChunkookini||[]).push([[4556],{71673:(t,e,o)=>{o.d(e,{Z:()=>Y});var n=o(72791),c=o(81694),i=o.n(c),a=o(56829),l=o(41818),r=o(29464),s=o(77268),d=o(72866),g=o(71929),p=o(97908),u=o(19125),m=o(84107),b=o(91940),h=o(70011),f=o(67521),S=o(27311),C=o(89922),v=o(55564),x=o(25541),w=o(25390);const I=t=>{const{optionHeight:e,optionFontSize:o,optionLineHeight:n,optionPadding:c}=t;return{position:"relative",display:"block",minHeight:e,padding:c,color:t.colorText,fontWeight:"normal",fontSize:o,lineHeight:n,boxSizing:"border-box"}},O=t=>{const{antCls:e,componentCls:o}=t,n="".concat(o,"-item"),c="&".concat(e,"-slide-up-enter").concat(e,"-slide-up-enter-active"),i="&".concat(e,"-slide-up-appear").concat(e,"-slide-up-appear-active"),a="&".concat(e,"-slide-up-leave").concat(e,"-slide-up-leave-active"),l="".concat(o,"-dropdown-placement-");return[{["".concat(o,"-dropdown")]:Object.assign(Object.assign({},(0,f.Wf)(t)),{position:"absolute",top:-9999,zIndex:t.zIndexPopup,boxSizing:"border-box",padding:t.paddingXXS,overflow:"hidden",fontSize:t.fontSize,fontVariant:"initial",backgroundColor:t.colorBgElevated,borderRadius:t.borderRadiusLG,outline:"none",boxShadow:t.boxShadowSecondary,["\n          ".concat(c).concat(l,"bottomLeft,\n          ").concat(i).concat(l,"bottomLeft\n        ")]:{animationName:x.fJ},["\n          ".concat(c).concat(l,"topLeft,\n          ").concat(i).concat(l,"topLeft,\n          ").concat(c).concat(l,"topRight,\n          ").concat(i).concat(l,"topRight\n        ")]:{animationName:x.Qt},["".concat(a).concat(l,"bottomLeft")]:{animationName:x.Uw},["\n          ".concat(a).concat(l,"topLeft,\n          ").concat(a).concat(l,"topRight\n        ")]:{animationName:x.ly},"&-hidden":{display:"none"},["".concat(n)]:Object.assign(Object.assign({},I(t)),{cursor:"pointer",transition:"background ".concat(t.motionDurationSlow," ease"),borderRadius:t.borderRadiusSM,"&-group":{color:t.colorTextDescription,fontSize:t.fontSizeSM,cursor:"default"},"&-option":{display:"flex","&-content":Object.assign({flex:"auto"},f.vS),"&-state":{flex:"none",display:"flex",alignItems:"center"},["&-active:not(".concat(n,"-option-disabled)")]:{backgroundColor:t.optionActiveBg},["&-selected:not(".concat(n,"-option-disabled)")]:{color:t.optionSelectedColor,fontWeight:t.optionSelectedFontWeight,backgroundColor:t.optionSelectedBg,["".concat(n,"-option-state")]:{color:t.colorPrimary}},"&-disabled":{["&".concat(n,"-option-selected")]:{backgroundColor:t.colorBgContainerDisabled},color:t.colorTextDisabled,cursor:"not-allowed"},"&-grouped":{paddingInlineStart:2*t.controlPaddingHorizontal}}}),"&-rtl":{direction:"rtl"}})},(0,x.oN)(t,"slide-up"),(0,x.oN)(t,"slide-down"),(0,w.Fm)(t,"move-up"),(0,w.Fm)(t,"move-down")]},k=t=>{let{multipleSelectItemHeight:e,selectHeight:o,lineWidth:n}=t;const c=(o-e)/2-n;return[c,Math.ceil(c/2)]};function y(t,e){const{componentCls:o,iconCls:n}=t,c="".concat(o,"-selection-overflow"),i=t.multipleSelectItemHeight,[a]=k(t),l=e?"".concat(o,"-").concat(e):"";return{["".concat(o,"-multiple").concat(l)]:{fontSize:t.fontSize,[c]:{position:"relative",display:"flex",flex:"auto",flexWrap:"wrap",maxWidth:"100%","&-item":{flex:"none",alignSelf:"center",maxWidth:"100%",display:"inline-flex"}},["".concat(o,"-selector")]:{display:"flex",flexWrap:"wrap",alignItems:"center",height:"100%",padding:"".concat(a-2,"px ").concat(4,"px"),borderRadius:t.borderRadius,["".concat(o,"-show-search&")]:{cursor:"text"},["".concat(o,"-disabled&")]:{background:t.multipleSelectorBgDisabled,cursor:"not-allowed"},"&:after":{display:"inline-block",width:0,margin:"".concat(2,"px 0"),lineHeight:"".concat(i,"px"),visibility:"hidden",content:'"\\a0"'}},["\n        &".concat(o,"-show-arrow ").concat(o,"-selector,\n        &").concat(o,"-allow-clear ").concat(o,"-selector\n      ")]:{paddingInlineEnd:t.fontSizeIcon+t.controlPaddingHorizontal},["".concat(o,"-selection-item")]:{display:"flex",alignSelf:"center",flex:"none",boxSizing:"border-box",maxWidth:"100%",height:i,marginTop:2,marginBottom:2,lineHeight:"".concat(i-2*t.lineWidth,"px"),background:t.multipleItemBg,border:"".concat(t.lineWidth,"px ").concat(t.lineType," ").concat(t.multipleItemBorderColor),borderRadius:t.borderRadiusSM,cursor:"default",transition:"font-size ".concat(t.motionDurationSlow,", line-height ").concat(t.motionDurationSlow,", height ").concat(t.motionDurationSlow),marginInlineEnd:4,paddingInlineStart:t.paddingXS,paddingInlineEnd:t.paddingXS/2,["".concat(o,"-disabled&")]:{color:t.multipleItemColorDisabled,borderColor:t.multipleItemBorderColorDisabled,cursor:"not-allowed"},"&-content":{display:"inline-block",marginInlineEnd:t.paddingXS/2,overflow:"hidden",whiteSpace:"pre",textOverflow:"ellipsis"},"&-remove":Object.assign(Object.assign({},(0,f.Ro)()),{display:"inline-flex",alignItems:"center",color:t.colorIcon,fontWeight:"bold",fontSize:10,lineHeight:"inherit",cursor:"pointer",["> ".concat(n)]:{verticalAlign:"-0.2em"},"&:hover":{color:t.colorIconHover}})},["".concat(c,"-item + ").concat(c,"-item")]:{["".concat(o,"-selection-search")]:{marginInlineStart:0}},["".concat(c,"-item-suffix")]:{height:"100%"},["".concat(o,"-selection-search")]:{display:"inline-flex",position:"relative",maxWidth:"100%",marginInlineStart:t.inputPaddingHorizontalBase-a,"\n          &-input,\n          &-mirror\n        ":{height:i,fontFamily:t.fontFamily,lineHeight:"".concat(i,"px"),transition:"all ".concat(t.motionDurationSlow)},"&-input":{width:"100%",minWidth:4.1},"&-mirror":{position:"absolute",top:0,insetInlineStart:0,insetInlineEnd:"auto",zIndex:999,whiteSpace:"pre",visibility:"hidden"}},["".concat(o,"-selection-placeholder")]:{position:"absolute",top:"50%",insetInlineStart:t.inputPaddingHorizontalBase,insetInlineEnd:t.inputPaddingHorizontalBase,transform:"translateY(-50%)",transition:"all ".concat(t.motionDurationSlow)}}}}const H=t=>{const{componentCls:e}=t,o=(0,C.TS)(t,{selectHeight:t.controlHeightSM,multipleSelectItemHeight:t.controlHeightXS,borderRadius:t.borderRadiusSM,borderRadiusSM:t.borderRadiusXS}),n=(0,C.TS)(t,{fontSize:t.fontSizeLG,selectHeight:t.controlHeightLG,multipleSelectItemHeight:t.multipleItemHeightLG,borderRadius:t.borderRadiusLG,borderRadiusSM:t.borderRadius}),[,c]=k(t);return[y(t),y(o,"sm"),{["".concat(e,"-multiple").concat(e,"-sm")]:{["".concat(e,"-selection-placeholder")]:{insetInline:t.controlPaddingHorizontalSM-t.lineWidth},["".concat(e,"-selection-search")]:{marginInlineStart:c}}},y(n,"lg")]};function j(t,e){const{componentCls:o,inputPaddingHorizontalBase:n,borderRadius:c}=t,i=t.controlHeight-2*t.lineWidth,a=Math.ceil(1.25*t.fontSize),l=e?"".concat(o,"-").concat(e):"";return{["".concat(o,"-single").concat(l)]:{fontSize:t.fontSize,height:t.controlHeight,["".concat(o,"-selector")]:Object.assign(Object.assign({},(0,f.Wf)(t,!0)),{display:"flex",borderRadius:c,["".concat(o,"-selection-search")]:{position:"absolute",top:0,insetInlineStart:n,insetInlineEnd:n,bottom:0,"&-input":{width:"100%"}},["\n          ".concat(o,"-selection-item,\n          ").concat(o,"-selection-placeholder\n        ")]:{padding:0,lineHeight:"".concat(i,"px"),transition:"all ".concat(t.motionDurationSlow,", visibility 0s"),alignSelf:"center"},["".concat(o,"-selection-placeholder")]:{transition:"none",pointerEvents:"none"},[["&:after","".concat(o,"-selection-item:empty:after"),"".concat(o,"-selection-placeholder:empty:after")].join(",")]:{display:"inline-block",width:0,visibility:"hidden",content:'"\\a0"'}}),["\n        &".concat(o,"-show-arrow ").concat(o,"-selection-item,\n        &").concat(o,"-show-arrow ").concat(o,"-selection-placeholder\n      ")]:{paddingInlineEnd:a},["&".concat(o,"-open ").concat(o,"-selection-item")]:{color:t.colorTextPlaceholder},["&:not(".concat(o,"-customize-input)")]:{["".concat(o,"-selector")]:{width:"100%",height:"100%",padding:"0 ".concat(n,"px"),["".concat(o,"-selection-search-input")]:{height:i},"&:after":{lineHeight:"".concat(i,"px")}}},["&".concat(o,"-customize-input")]:{["".concat(o,"-selector")]:{"&:after":{display:"none"},["".concat(o,"-selection-search")]:{position:"static",width:"100%"},["".concat(o,"-selection-placeholder")]:{position:"absolute",insetInlineStart:0,insetInlineEnd:0,padding:"0 ".concat(n,"px"),"&:after":{display:"none"}}}}}}}function E(t){const{componentCls:e}=t,o=t.controlPaddingHorizontalSM-t.lineWidth;return[j(t),j((0,C.TS)(t,{controlHeight:t.controlHeightSM,borderRadius:t.borderRadiusSM}),"sm"),{["".concat(e,"-single").concat(e,"-sm")]:{["&:not(".concat(e,"-customize-input)")]:{["".concat(e,"-selection-search")]:{insetInlineStart:o,insetInlineEnd:o},["".concat(e,"-selector")]:{padding:"0 ".concat(o,"px")},["&".concat(e,"-show-arrow ").concat(e,"-selection-search")]:{insetInlineEnd:o+1.5*t.fontSize},["\n            &".concat(e,"-show-arrow ").concat(e,"-selection-item,\n            &").concat(e,"-show-arrow ").concat(e,"-selection-placeholder\n          ")]:{paddingInlineEnd:1.5*t.fontSize}}}},j((0,C.TS)(t,{controlHeight:t.singleItemHeightLG,fontSize:t.fontSizeLG,borderRadius:t.borderRadiusLG}),"lg")]}const z=t=>{const{componentCls:e,selectorBg:o}=t;return{position:"relative",backgroundColor:o,border:"".concat(t.lineWidth,"px ").concat(t.lineType," ").concat(t.colorBorder),transition:"all ".concat(t.motionDurationMid," ").concat(t.motionEaseInOut),input:{cursor:"pointer"},["".concat(e,"-show-search&")]:{cursor:"text",input:{cursor:"auto",color:"inherit",height:"100%"}},["".concat(e,"-disabled&")]:{color:t.colorTextDisabled,background:t.colorBgContainerDisabled,cursor:"not-allowed",["".concat(e,"-multiple&")]:{background:t.multipleSelectorBgDisabled},input:{cursor:"not-allowed"}}}},N=function(t,e){let o=arguments.length>2&&void 0!==arguments[2]&&arguments[2];const{componentCls:n,borderHoverColor:c,antCls:i,borderActiveColor:a}=e,l=o?{["".concat(n,"-selector")]:{borderColor:a}}:{};return{[t]:{["&:not(".concat(n,"-disabled):not(").concat(n,"-customize-input):not(").concat(i,"-pagination-size-changer)")]:Object.assign(Object.assign({},l),{["&:hover ".concat(n,"-selector")]:{borderColor:c},["".concat(n,"-focused& ").concat(n,"-selector")]:{borderColor:a,outline:0}})}}},R=t=>{const{componentCls:e}=t;return{["".concat(e,"-selection-search-input")]:{margin:0,padding:0,background:"transparent",border:"none",outline:"none",appearance:"none",fontFamily:"inherit","&::-webkit-search-cancel-button":{display:"none","-webkit-appearance":"none"}}}},B=t=>{const{antCls:e,componentCls:o,inputPaddingHorizontalBase:n,iconCls:c}=t;return{[o]:Object.assign(Object.assign({},(0,f.Wf)(t)),{position:"relative",display:"inline-block",cursor:"pointer",["&:not(".concat(o,"-customize-input) ").concat(o,"-selector")]:Object.assign(Object.assign({},z(t)),R(t)),["".concat(o,"-selection-item")]:Object.assign(Object.assign({flex:1,fontWeight:"normal",position:"relative",userSelect:"none"},f.vS),{["> ".concat(e,"-typography")]:{display:"inline"}}),["".concat(o,"-selection-placeholder")]:Object.assign(Object.assign({},f.vS),{flex:1,color:t.colorTextPlaceholder,pointerEvents:"none"}),["".concat(o,"-arrow")]:Object.assign(Object.assign({},(0,f.Ro)()),{position:"absolute",top:"50%",insetInlineStart:"auto",insetInlineEnd:n,height:t.fontSizeIcon,marginTop:-t.fontSizeIcon/2,color:t.colorTextQuaternary,fontSize:t.fontSizeIcon,lineHeight:1,textAlign:"center",pointerEvents:"none",display:"flex",alignItems:"center",[c]:{verticalAlign:"top",transition:"transform ".concat(t.motionDurationSlow),"> svg":{verticalAlign:"top"},["&:not(".concat(o,"-suffix)")]:{pointerEvents:"auto"}},["".concat(o,"-disabled &")]:{cursor:"not-allowed"},"> *:not(:last-child)":{marginInlineEnd:8}}),["".concat(o,"-clear")]:{position:"absolute",top:"50%",insetInlineStart:"auto",insetInlineEnd:n,zIndex:1,display:"inline-block",width:t.fontSizeIcon,height:t.fontSizeIcon,marginTop:-t.fontSizeIcon/2,color:t.colorTextQuaternary,fontSize:t.fontSizeIcon,fontStyle:"normal",lineHeight:1,textAlign:"center",textTransform:"none",background:t.clearBg,cursor:"pointer",opacity:0,transition:"color ".concat(t.motionDurationMid," ease, opacity ").concat(t.motionDurationSlow," ease"),textRendering:"auto","&:before":{display:"block"},"&:hover":{color:t.colorTextTertiary}},"&:hover":{["".concat(o,"-clear")]:{opacity:1}}}),["".concat(o,"-has-feedback")]:{["".concat(o,"-clear")]:{insetInlineEnd:n+t.fontSize+t.paddingXS}}}},M=t=>{const{componentCls:e}=t;return[{[e]:{["&-borderless ".concat(e,"-selector")]:{backgroundColor:"transparent !important",borderColor:"transparent !important",boxShadow:"none !important"},["&".concat(e,"-in-form-item")]:{width:"100%"}}},B(t),E(t),H(t),O(t),{["".concat(e,"-rtl")]:{direction:"rtl"}},N(e,(0,C.TS)(t,{borderHoverColor:t.colorPrimaryHover,borderActiveColor:t.colorPrimary})),N("".concat(e,"-status-error"),(0,C.TS)(t,{borderHoverColor:t.colorErrorHover,borderActiveColor:t.colorError}),!0),N("".concat(e,"-status-warning"),(0,C.TS)(t,{borderHoverColor:t.colorWarningHover,borderActiveColor:t.colorWarning}),!0),(0,S.c)(t,{borderElCls:"".concat(e,"-selector"),focusElCls:"".concat(e,"-focused")})]},P=(0,v.Z)("Select",((t,e)=>{let{rootPrefixCls:o}=e;const n=(0,C.TS)(t,{rootPrefixCls:o,inputPaddingHorizontalBase:t.paddingSM-1,multipleSelectItemHeight:t.multipleItemHeight,selectHeight:t.controlHeight});return[M(n)]}),(t=>{const{fontSize:e,lineHeight:o,controlHeight:n,controlPaddingHorizontal:c,zIndexPopupBase:i,colorText:a,fontWeightStrong:l,controlItemBgActive:r,controlItemBgHover:s,colorBgContainer:d,colorFillSecondary:g,controlHeightLG:p,controlHeightSM:u,colorBgContainerDisabled:m,colorTextDisabled:b}=t;return{zIndexPopup:i+50,optionSelectedColor:a,optionSelectedFontWeight:l,optionSelectedBg:r,optionActiveBg:s,optionPadding:"".concat((n-e*o)/2,"px ").concat(c,"px"),optionFontSize:e,optionLineHeight:o,optionHeight:n,selectorBg:d,clearBg:d,singleItemHeightLG:p,multipleItemBg:g,multipleItemBorderColor:"transparent",multipleItemHeight:u,multipleItemHeightLG:n,multipleSelectorBgDisabled:m,multipleItemColorDisabled:b,multipleItemBorderColorDisabled:"transparent"}}));function T(t,e){return t||(t=>{const e={overflow:{adjustX:!0,adjustY:!0,shiftY:!0},htmlRegion:"scroll"===t?"scroll":"visible",dynamicInset:!0};return{bottomLeft:Object.assign(Object.assign({},e),{points:["tl","bl"],offset:[0,4]}),bottomRight:Object.assign(Object.assign({},e),{points:["tr","br"],offset:[0,4]}),topLeft:Object.assign(Object.assign({},e),{points:["bl","tl"],offset:[0,-4]}),topRight:Object.assign(Object.assign({},e),{points:["br","tr"],offset:[0,-4]})}})(e)}var W=o(67575),D=o(82621),L=o(60732),F=o(37295),A=o(77106),Z=o(11730);var G=function(t,e){var o={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(o[n]=t[n]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(n=Object.getOwnPropertySymbols(t);c<n.length;c++)e.indexOf(n[c])<0&&Object.prototype.propertyIsEnumerable.call(t,n[c])&&(o[n[c]]=t[n[c]])}return o};const _="SECRET_COMBOBOX_MODE_DO_NOT_USE",X=(t,e)=>{var o,{prefixCls:c,bordered:s=!0,className:f,rootClassName:S,getPopupContainer:C,popupClassName:v,dropdownClassName:x,listHeight:w=256,placement:I,listItemHeight:O=24,size:k,disabled:y,notFoundContent:H,status:j,builtinPlacements:E,dropdownMatchSelectWidth:z,popupMatchSelectWidth:N,direction:R,style:B,allowClear:M}=t,X=G(t,["prefixCls","bordered","className","rootClassName","getPopupContainer","popupClassName","dropdownClassName","listHeight","placement","listItemHeight","size","disabled","notFoundContent","status","builtinPlacements","dropdownMatchSelectWidth","popupMatchSelectWidth","direction","style","allowClear"]);const{getPopupContainer:q,getPrefixCls:U,renderEmpty:Y,direction:Q,virtual:J,popupMatchSelectWidth:V,popupOverflow:K,select:$}=n.useContext(g.E_),tt=U("select",c),et=U(),ot=null!==R&&void 0!==R?R:Q,{compactSize:nt,compactItemClassnames:ct}=(0,h.ri)(tt,ot),[it,at]=P(tt),lt=n.useMemo((()=>{const{mode:t}=X;if("combobox"!==t)return t===_?"combobox":t}),[X.mode]),rt="multiple"===lt||"tags"===lt,st=function(t,e){return void 0!==e?e:null!==t}(X.suffixIcon,X.showArrow),dt=null!==(o=null!==N&&void 0!==N?N:z)&&void 0!==o?o:V,{status:gt,hasFeedback:pt,isFormItemInput:ut,feedbackIcon:mt}=n.useContext(b.aM),bt=(0,d.F)(gt,j);let ht;ht=void 0!==H?H:"combobox"===lt?null:(null===Y||void 0===Y?void 0:Y("Select"))||n.createElement(p.Z,{componentName:"Select"});const{suffixIcon:ft,itemIcon:St,removeIcon:Ct,clearIcon:vt}=function(t){let{suffixIcon:e,clearIcon:o,menuItemSelectedIcon:c,removeIcon:i,loading:a,multiple:l,hasFeedback:r,prefixCls:s,showSuffixIcon:d,feedbackIcon:g,showArrow:p,componentName:u}=t;const m=null!==o&&void 0!==o?o:n.createElement(D.Z,null),b=t=>null!==e||r||p?n.createElement(n.Fragment,null,!1!==d&&t,r&&g):null;let h=null;if(void 0!==e)h=b(e);else if(a)h=b(n.createElement(A.Z,{spin:!0}));else{const t="".concat(s,"-suffix");h=e=>{let{open:o,showSearch:c}=e;return b(o&&c?n.createElement(Z.Z,{className:t}):n.createElement(F.Z,{className:t}))}}let f=null;f=void 0!==c?c:l?n.createElement(W.Z,null):null;let S=null;return S=void 0!==i?i:n.createElement(L.Z,null),{clearIcon:m,suffixIcon:h,itemIcon:f,removeIcon:S}}(Object.assign(Object.assign({},X),{multiple:rt,hasFeedback:pt,feedbackIcon:mt,showSuffixIcon:st,prefixCls:tt,showArrow:X.showArrow,componentName:"Select"})),xt=!0===M?{clearIcon:vt}:M,wt=(0,l.Z)(X,["suffixIcon","itemIcon"]),It=i()(v||x,{["".concat(tt,"-dropdown-").concat(ot)]:"rtl"===ot},S,at),Ot=(0,m.Z)((t=>{var e;return null!==(e=null!==k&&void 0!==k?k:nt)&&void 0!==e?e:t})),kt=n.useContext(u.Z),yt=null!==y&&void 0!==y?y:kt,Ht=i()({["".concat(tt,"-lg")]:"large"===Ot,["".concat(tt,"-sm")]:"small"===Ot,["".concat(tt,"-rtl")]:"rtl"===ot,["".concat(tt,"-borderless")]:!s,["".concat(tt,"-in-form-item")]:ut},(0,d.Z)(tt,bt,pt),ct,null===$||void 0===$?void 0:$.className,f,S,at),jt=n.useMemo((()=>void 0!==I?I:"rtl"===ot?"bottomRight":"bottomLeft"),[I,ot]),Et=T(E,K);return it(n.createElement(a.ZP,Object.assign({ref:e,virtual:J,showSearch:null===$||void 0===$?void 0:$.showSearch},wt,{style:Object.assign(Object.assign({},null===$||void 0===$?void 0:$.style),B),dropdownMatchSelectWidth:dt,builtinPlacements:Et,transitionName:(0,r.m)(et,"slide-up",X.transitionName),listHeight:w,listItemHeight:O,mode:lt,prefixCls:tt,placement:jt,direction:ot,suffixIcon:ft,menuItemSelectedIcon:St,removeIcon:Ct,allowClear:xt,notFoundContent:ht,className:Ht,getPopupContainer:C||q,dropdownClassName:It,disabled:yt})))};const q=n.forwardRef(X),U=(0,s.Z)(q);q.SECRET_COMBOBOX_MODE_DO_NOT_USE=_,q.Option=a.Wx,q.OptGroup=a.Xo,q._InternalPanelDoNotUseOrYouWillBeFired=U;const Y=q},723:(t,e,o)=>{o.d(e,{Z:()=>W});var n=o(81694),c=o.n(n),i=o(72791),a=o(71929),l=o(41818);const r=t=>{const{prefixCls:e,className:o,style:n,size:a,shape:l}=t,r=c()({["".concat(e,"-lg")]:"large"===a,["".concat(e,"-sm")]:"small"===a}),s=c()({["".concat(e,"-circle")]:"circle"===l,["".concat(e,"-square")]:"square"===l,["".concat(e,"-round")]:"round"===l}),d=i.useMemo((()=>"number"===typeof a?{width:a,height:a,lineHeight:"".concat(a,"px")}:{}),[a]);return i.createElement("span",{className:c()(e,r,s,o),style:Object.assign(Object.assign({},d),n)})};var s=o(85458),d=o(55564),g=o(89922);const p=new s.E4("ant-skeleton-loading",{"0%":{backgroundPosition:"100% 50%"},"100%":{backgroundPosition:"0 50%"}}),u=t=>({height:t,lineHeight:"".concat(t,"px")}),m=t=>Object.assign({width:t},u(t)),b=t=>({background:t.skeletonLoadingBackground,backgroundSize:"400% 100%",animationName:p,animationDuration:t.skeletonLoadingMotionDuration,animationTimingFunction:"ease",animationIterationCount:"infinite"}),h=t=>Object.assign({width:5*t,minWidth:5*t},u(t)),f=t=>{const{skeletonAvatarCls:e,gradientFromColor:o,controlHeight:n,controlHeightLG:c,controlHeightSM:i}=t;return{["".concat(e)]:Object.assign({display:"inline-block",verticalAlign:"top",background:o},m(n)),["".concat(e).concat(e,"-circle")]:{borderRadius:"50%"},["".concat(e).concat(e,"-lg")]:Object.assign({},m(c)),["".concat(e).concat(e,"-sm")]:Object.assign({},m(i))}},S=t=>{const{controlHeight:e,borderRadiusSM:o,skeletonInputCls:n,controlHeightLG:c,controlHeightSM:i,gradientFromColor:a}=t;return{["".concat(n)]:Object.assign({display:"inline-block",verticalAlign:"top",background:a,borderRadius:o},h(e)),["".concat(n,"-lg")]:Object.assign({},h(c)),["".concat(n,"-sm")]:Object.assign({},h(i))}},C=t=>Object.assign({width:t},u(t)),v=t=>{const{skeletonImageCls:e,imageSizeBase:o,gradientFromColor:n,borderRadiusSM:c}=t;return{["".concat(e)]:Object.assign(Object.assign({display:"flex",alignItems:"center",justifyContent:"center",verticalAlign:"top",background:n,borderRadius:c},C(2*o)),{["".concat(e,"-path")]:{fill:"#bfbfbf"},["".concat(e,"-svg")]:Object.assign(Object.assign({},C(o)),{maxWidth:4*o,maxHeight:4*o}),["".concat(e,"-svg").concat(e,"-svg-circle")]:{borderRadius:"50%"}}),["".concat(e).concat(e,"-circle")]:{borderRadius:"50%"}}},x=(t,e,o)=>{const{skeletonButtonCls:n}=t;return{["".concat(o).concat(n,"-circle")]:{width:e,minWidth:e,borderRadius:"50%"},["".concat(o).concat(n,"-round")]:{borderRadius:e}}},w=t=>Object.assign({width:2*t,minWidth:2*t},u(t)),I=t=>{const{borderRadiusSM:e,skeletonButtonCls:o,controlHeight:n,controlHeightLG:c,controlHeightSM:i,gradientFromColor:a}=t;return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({["".concat(o)]:Object.assign({display:"inline-block",verticalAlign:"top",background:a,borderRadius:e,width:2*n,minWidth:2*n},w(n))},x(t,n,o)),{["".concat(o,"-lg")]:Object.assign({},w(c))}),x(t,c,"".concat(o,"-lg"))),{["".concat(o,"-sm")]:Object.assign({},w(i))}),x(t,i,"".concat(o,"-sm")))},O=t=>{const{componentCls:e,skeletonAvatarCls:o,skeletonTitleCls:n,skeletonParagraphCls:c,skeletonButtonCls:i,skeletonInputCls:a,skeletonImageCls:l,controlHeight:r,controlHeightLG:s,controlHeightSM:d,gradientFromColor:g,padding:p,marginSM:u,borderRadius:h,titleHeight:C,blockRadius:x,paragraphLiHeight:w,controlHeightXS:O,paragraphMarginTop:k}=t;return{["".concat(e)]:{display:"table",width:"100%",["".concat(e,"-header")]:{display:"table-cell",paddingInlineEnd:p,verticalAlign:"top",["".concat(o)]:Object.assign({display:"inline-block",verticalAlign:"top",background:g},m(r)),["".concat(o,"-circle")]:{borderRadius:"50%"},["".concat(o,"-lg")]:Object.assign({},m(s)),["".concat(o,"-sm")]:Object.assign({},m(d))},["".concat(e,"-content")]:{display:"table-cell",width:"100%",verticalAlign:"top",["".concat(n)]:{width:"100%",height:C,background:g,borderRadius:x,["+ ".concat(c)]:{marginBlockStart:d}},["".concat(c)]:{padding:0,"> li":{width:"100%",height:w,listStyle:"none",background:g,borderRadius:x,"+ li":{marginBlockStart:O}}},["".concat(c,"> li:last-child:not(:first-child):not(:nth-child(2))")]:{width:"61%"}},["&-round ".concat(e,"-content")]:{["".concat(n,", ").concat(c," > li")]:{borderRadius:h}}},["".concat(e,"-with-avatar ").concat(e,"-content")]:{["".concat(n)]:{marginBlockStart:u,["+ ".concat(c)]:{marginBlockStart:k}}},["".concat(e).concat(e,"-element")]:Object.assign(Object.assign(Object.assign(Object.assign({display:"inline-block",width:"auto"},I(t)),f(t)),S(t)),v(t)),["".concat(e).concat(e,"-block")]:{width:"100%",["".concat(i)]:{width:"100%"},["".concat(a)]:{width:"100%"}},["".concat(e).concat(e,"-active")]:{["\n        ".concat(n,",\n        ").concat(c," > li,\n        ").concat(o,",\n        ").concat(i,",\n        ").concat(a,",\n        ").concat(l,"\n      ")]:Object.assign({},b(t))}}},k=(0,d.Z)("Skeleton",(t=>{const{componentCls:e}=t,o=(0,g.TS)(t,{skeletonAvatarCls:"".concat(e,"-avatar"),skeletonTitleCls:"".concat(e,"-title"),skeletonParagraphCls:"".concat(e,"-paragraph"),skeletonButtonCls:"".concat(e,"-button"),skeletonInputCls:"".concat(e,"-input"),skeletonImageCls:"".concat(e,"-image"),imageSizeBase:1.5*t.controlHeight,borderRadius:100,skeletonLoadingBackground:"linear-gradient(90deg, ".concat(t.gradientFromColor," 25%, ").concat(t.gradientToColor," 37%, ").concat(t.gradientFromColor," 63%)"),skeletonLoadingMotionDuration:"1.4s"});return[O(o)]}),(t=>{const{colorFillContent:e,colorFill:o}=t;return{color:e,colorGradientEnd:o,gradientFromColor:e,gradientToColor:o,titleHeight:t.controlHeight/2,blockRadius:t.borderRadiusSM,paragraphMarginTop:t.marginLG+t.marginXXS,paragraphLiHeight:t.controlHeight/2}}),{deprecatedTokens:[["color","gradientFromColor"],["colorGradientEnd","gradientToColor"]]}),y=t=>{const{prefixCls:e,className:o,rootClassName:n,active:s,shape:d="circle",size:g="default"}=t,{getPrefixCls:p}=i.useContext(a.E_),u=p("skeleton",e),[m,b]=k(u),h=(0,l.Z)(t,["prefixCls","className"]),f=c()(u,"".concat(u,"-element"),{["".concat(u,"-active")]:s},o,n,b);return m(i.createElement("div",{className:f},i.createElement(r,Object.assign({prefixCls:"".concat(u,"-avatar"),shape:d,size:g},h))))},H=t=>{const{prefixCls:e,className:o,rootClassName:n,active:s,block:d=!1,size:g="default"}=t,{getPrefixCls:p}=i.useContext(a.E_),u=p("skeleton",e),[m,b]=k(u),h=(0,l.Z)(t,["prefixCls"]),f=c()(u,"".concat(u,"-element"),{["".concat(u,"-active")]:s,["".concat(u,"-block")]:d},o,n,b);return m(i.createElement("div",{className:f},i.createElement(r,Object.assign({prefixCls:"".concat(u,"-button"),size:g},h))))},j=t=>{const{prefixCls:e,className:o,rootClassName:n,style:l,active:r}=t,{getPrefixCls:s}=i.useContext(a.E_),d=s("skeleton",e),[g,p]=k(d),u=c()(d,"".concat(d,"-element"),{["".concat(d,"-active")]:r},o,n,p);return g(i.createElement("div",{className:u},i.createElement("div",{className:c()("".concat(d,"-image"),o),style:l},i.createElement("svg",{viewBox:"0 0 1098 1024",xmlns:"http://www.w3.org/2000/svg",className:"".concat(d,"-image-svg")},i.createElement("path",{d:"M365.714286 329.142857q0 45.714286-32.036571 77.677714t-77.677714 32.036571-77.677714-32.036571-32.036571-77.677714 32.036571-77.677714 77.677714-32.036571 77.677714 32.036571 32.036571 77.677714zM950.857143 548.571429l0 256-804.571429 0 0-109.714286 182.857143-182.857143 91.428571 91.428571 292.571429-292.571429zM1005.714286 146.285714l-914.285714 0q-7.460571 0-12.873143 5.412571t-5.412571 12.873143l0 694.857143q0 7.460571 5.412571 12.873143t12.873143 5.412571l914.285714 0q7.460571 0 12.873143-5.412571t5.412571-12.873143l0-694.857143q0-7.460571-5.412571-12.873143t-12.873143-5.412571zM1097.142857 164.571429l0 694.857143q0 37.741714-26.843429 64.585143t-64.585143 26.843429l-914.285714 0q-37.741714 0-64.585143-26.843429t-26.843429-64.585143l0-694.857143q0-37.741714 26.843429-64.585143t64.585143-26.843429l914.285714 0q37.741714 0 64.585143 26.843429t26.843429 64.585143z",className:"".concat(d,"-image-path")})))))},E=t=>{const{prefixCls:e,className:o,rootClassName:n,active:s,block:d,size:g="default"}=t,{getPrefixCls:p}=i.useContext(a.E_),u=p("skeleton",e),[m,b]=k(u),h=(0,l.Z)(t,["prefixCls"]),f=c()(u,"".concat(u,"-element"),{["".concat(u,"-active")]:s,["".concat(u,"-block")]:d},o,n,b);return m(i.createElement("div",{className:f},i.createElement(r,Object.assign({prefixCls:"".concat(u,"-input"),size:g},h))))};var z=o(34633);const N=t=>{const{prefixCls:e,className:o,rootClassName:n,style:l,active:r,children:s}=t,{getPrefixCls:d}=i.useContext(a.E_),g=d("skeleton",e),[p,u]=k(g),m=c()(g,"".concat(g,"-element"),{["".concat(g,"-active")]:r},u,o,n),b=null!==s&&void 0!==s?s:i.createElement(z.Z,null);return p(i.createElement("div",{className:m},i.createElement("div",{className:c()("".concat(g,"-image"),o),style:l},b)))};var R=o(93433);const B=t=>{const e=e=>{const{width:o,rows:n=2}=t;return Array.isArray(o)?o[e]:n-1===e?o:void 0},{prefixCls:o,className:n,style:a,rows:l}=t,r=(0,R.Z)(Array(l)).map(((t,o)=>i.createElement("li",{key:o,style:{width:e(o)}})));return i.createElement("ul",{className:c()(o,n),style:a},r)},M=t=>{let{prefixCls:e,className:o,width:n,style:a}=t;return i.createElement("h3",{className:c()(e,o),style:Object.assign({width:n},a)})};function P(t){return t&&"object"===typeof t?t:{}}const T=t=>{const{prefixCls:e,loading:o,className:n,rootClassName:l,style:s,children:d,avatar:g=!1,title:p=!0,paragraph:u=!0,active:m,round:b}=t,{getPrefixCls:h,direction:f,skeleton:S}=i.useContext(a.E_),C=h("skeleton",e),[v,x]=k(C);if(o||!("loading"in t)){const t=!!g,e=!!p,o=!!u;let a,d;if(t){const t=Object.assign(Object.assign({prefixCls:"".concat(C,"-avatar")},function(t,e){return t&&!e?{size:"large",shape:"square"}:{size:"large",shape:"circle"}}(e,o)),P(g));a=i.createElement("div",{className:"".concat(C,"-header")},i.createElement(r,Object.assign({},t)))}if(e||o){let n,c;if(e){const e=Object.assign(Object.assign({prefixCls:"".concat(C,"-title")},function(t,e){return!t&&e?{width:"38%"}:t&&e?{width:"50%"}:{}}(t,o)),P(p));n=i.createElement(M,Object.assign({},e))}if(o){const o=Object.assign(Object.assign({prefixCls:"".concat(C,"-paragraph")},function(t,e){const o={};return t&&e||(o.width="61%"),o.rows=!t&&e?3:2,o}(t,e)),P(u));c=i.createElement(B,Object.assign({},o))}d=i.createElement("div",{className:"".concat(C,"-content")},n,c)}const h=c()(C,{["".concat(C,"-with-avatar")]:t,["".concat(C,"-active")]:m,["".concat(C,"-rtl")]:"rtl"===f,["".concat(C,"-round")]:b},null===S||void 0===S?void 0:S.className,n,l,x);return v(i.createElement("div",{className:h,style:Object.assign(Object.assign({},null===S||void 0===S?void 0:S.style),s)},a,d))}return"undefined"!==typeof d?d:null};T.Button=H,T.Avatar=y,T.Input=E,T.Image=j,T.Node=N;const W=T}}]);
//# sourceMappingURL=4556.6afc15aa.js.map