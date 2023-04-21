"use strict";(self.webpackChunktoastify_lib=self.webpackChunktoastify_lib||[]).push([[730],{"./src/assets/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{ZL:()=>GlobalStyle,V5:()=>TestButton,O9:()=>colors});var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const TestButton=styled_components_browser_esm.ZP.button`
  position: absolute;
  top: 50%;
  left: 50%;
  cursor: pointer;
  background: #000000;
  border-radius: 10px;
  padding: 10px;
  font-size: 15px;
  color: #ffffff;
  border: none;
`,colors={white:"#FFFFFF",purple:"#9A40D3",lightGray:"#00000029",gray:"#707070",yellow:"#F4E048",black:"#000000",red:"#E25837",green:"#37E29A"},GlobalStyle=styled_components_browser_esm.vJ`
  *,
  *:after,
  *:before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }
  html {
    font-size: 62.5%;
  }
  body {
    box-sizing: border-box;
    font-family: 'Helvetica Neue', sans-serif;
  }
  button {
    border: none;
    background: none;
    cursor: pointer;
  }
`},"./src/components/Toast/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{F:()=>Toast});__webpack_require__("./node_modules/react/index.js");var assets=__webpack_require__("./src/assets/index.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Close=()=>(0,jsx_runtime.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 32 32",children:(0,jsx_runtime.jsx)("path",{d:"M18.83 15.999 31.414 3.416a2.001 2.001 0 0 0-2.83-2.83L16 13.171 3.416.586a2.001 2.001 0 0 0-2.83 2.83l12.585 12.583L.586 28.584a2 2 0 1 0 2.83 2.829L16 18.829l12.584 12.585a2.001 2.001 0 0 0 2.83-2.83Z"})});Close.displayName="Close";const Error=()=>(0,jsx_runtime.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"64",height:"64",viewBox:"0 0 64 64",children:[(0,jsx_runtime.jsx)("path",{d:"M64 60.18 52.52 48.7a29.7 29.7 0 1 0-3.82 3.81L60.2 64ZM5.46 29.73A24.27 24.27 0 1 1 29.73 54 24.27 24.27 0 0 1 5.46 29.73Z"}),(0,jsx_runtime.jsx)("path",{d:"M45.9 39.85a2.73 2.73 0 0 0-2.45-1.5h-.79a18.94 18.94 0 0 0 .6-2.74h5.65v-5.47h-5.66a18.94 18.94 0 0 0-.59-2.73h.79a2.73 2.73 0 0 0 2.44-1.52l2.73-5.46-4.89-2.44-1.97 3.95h-1.8a14.92 14.92 0 0 0-2.5-2.62 8.2 8.2 0 1 0-15.37 0 14.92 14.92 0 0 0-2.49 2.62h-1.8L15.82 18l-4.9 2.44 2.74 5.47a2.73 2.73 0 0 0 2.45 1.51h.78a18.94 18.94 0 0 0-.59 2.73h-5.66v5.47h5.66a18.94 18.94 0 0 0 .6 2.74h-.8a2.73 2.73 0 0 0-2.44 1.5l-2.73 5.48 4.89 2.44 1.98-3.96h1.8a12.78 12.78 0 0 0 10.18 5.47 12.78 12.78 0 0 0 10.17-5.47h1.8l1.98 3.95 4.9-2.44ZM27.03 16.47a2.73 2.73 0 0 1 5.47 0 2.77 2.77 0 0 1-.03.33 11.46 11.46 0 0 0-5.41 0 2.77 2.77 0 0 1-.03-.33Zm2.73 27.34c-4.52 0-8.2-4.9-8.2-10.94s3.68-10.93 8.2-10.93 8.2 4.9 8.2 10.93-3.67 10.94-8.2 10.94Z"})]});Error.displayName="Error";const Info=()=>(0,jsx_runtime.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"64",height:"64",viewBox:"0 0 64 64",children:[(0,jsx_runtime.jsx)("circle",{cx:"3.442",cy:"3.442",r:"3.442",transform:"translate(28.558 43.702)"}),(0,jsx_runtime.jsx)("path",{d:"M32 0a32 32 0 1 0 32 32A31.983 31.983 0 0 0 32 0Zm0 59a27 27 0 1 1 27-27 26.985 26.985 0 0 1-27 27Z"}),(0,jsx_runtime.jsx)("path",{d:"M32 14.928a11.028 11.028 0 0 0-11.016 11.016 2.754 2.754 0 0 0 5.508 0A5.508 5.508 0 1 1 32 31.452a2.754 2.754 0 0 0-2.754 2.754v6.885a2.754 2.754 0 0 0 5.508 0v-4.479A11.016 11.016 0 0 0 32 14.929Z"})]});Info.displayName="Info";const Success=()=>(0,jsx_runtime.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"64",height:"64",viewBox:"0 0 64 64",children:[(0,jsx_runtime.jsx)("path",{d:"M32 0a32 32 0 1 0 32 32A32 32 0 0 0 32 0Zm0 61.5A29.5 29.5 0 1 1 61.5 32 29.6 29.6 0 0 1 32 61.5Z"}),(0,jsx_runtime.jsx)("path",{d:"m49.5 21-22 17.3-13.2-7.5a1.9 1.9 0 0 0-2 .2.8.8 0 0 0 .2 1.4l14.3 8a1.8 1.8 0 0 0 1 .2 1.7 1.7 0 0 0 1-.3l22.8-18a.8.8 0 0 0 0-1.4 1.9 1.9 0 0 0-2.1 0Z"})]});Success.displayName="Success";const Warning=()=>(0,jsx_runtime.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"64",height:"64",viewBox:"0 0 64 64",children:[(0,jsx_runtime.jsx)("path",{d:"M32.003 44.974a3.6 3.6 0 0 0 0 7.2 3.6 3.6 0 0 0 0-7.2Z"}),(0,jsx_runtime.jsx)("path",{d:"M62.442 57.725a13.288 13.288 0 0 0 .026-12.434l-20.6-39.03a10.891 10.891 0 0 0-19.708-.014L1.529 45.318a13.4 13.4 0 0 0 .039 12.506A11.117 11.117 0 0 0 11.4 64h41.149a11.2 11.2 0 0 0 9.893-6.275Zm-4.473-2.821a6.142 6.142 0 0 1-5.433 3.44H11.383a6.054 6.054 0 0 1-5.368-3.368A7.366 7.366 0 0 1 6 48.111L26.631 9.052a5.944 5.944 0 0 1 10.762.014l20.616 39.06a7.268 7.268 0 0 1-.04 6.778Z"}),(0,jsx_runtime.jsx)("path",{d:"M31.108 19.717a3.913 3.913 0 0 0-2.778 3.929c.086 1.137.158 2.288.245 3.425.245 4.332.489 8.577.734 12.909A2.636 2.636 0 0 0 32 42.513a2.691 2.691 0 0 0 2.691-2.619c0-.892 0-1.713.086-2.619.158-2.778.331-5.555.489-8.333.086-1.8.245-3.6.331-5.4a4.444 4.444 0 0 0-.331-1.8 3.607 3.607 0 0 0-4.158-2.025Z"})]});Warning.displayName="Warning";const SvgSelector=({id})=>{switch(id){case"close":return(0,jsx_runtime.jsx)(Close,{});case"info":return(0,jsx_runtime.jsx)(Info,{});case"warning":return(0,jsx_runtime.jsx)(Warning,{});case"error":return(0,jsx_runtime.jsx)(Error,{});case"success":return(0,jsx_runtime.jsx)(Success,{});default:return(0,jsx_runtime.jsx)("svg",{})}};try{SvgSelector.displayName="SvgSelector",SvgSelector.__docgenInfo={description:"",displayName:"SvgSelector",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/SvgSelector/SvgSelector.tsx#SvgSelector"]={docgenInfo:SvgSelector.__docgenInfo,name:"SvgSelector",path:"src/components/SvgSelector/SvgSelector.tsx#SvgSelector"})}catch(__react_docgen_typescript_loader_error){}var toastManager=__webpack_require__("./src/service/toastManager.ts"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),utils=__webpack_require__("./src/utils/index.ts");const fontSettings="\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  max-width: 31.5rem;\n  margin-left: 2rem;\n",ToastBox=styled_components_browser_esm.ZP.div`
  background: ${({backgroundColor})=>backgroundColor};
  width: 45rem;
  height: 10rem;
  font-size: 2.2rem;
  color: ${({textColor})=>textColor};
  border-radius: 2.4rem;
  box-shadow: 0.4rem 0.4rem 0.8rem #00000029;
  display: flex;
  position: relative;

  margin-bottom: 1rem;
  & svg {
    height: 3rem;
    width: 3rem;
    fill: ${({textColor})=>textColor};
  }
  ${({toastDuration,animationType,slideDirection})=>"fade"===animationType?(0,utils.qy)(toastDuration):(0,utils.cQ)(toastDuration,slideDirection)}
`,ToastContent=styled_components_browser_esm.ZP.div`
  display: flex;
  align-items: center;
  margin-left: 2rem;
`,TextBox=styled_components_browser_esm.ZP.div`
  display: flex;
  flex-direction: column;
`,ToastTitle=styled_components_browser_esm.ZP.span`
  ${fontSettings};
  margin-bottom: 1rem;
`,ToastDescription=styled_components_browser_esm.ZP.span`
  ${fontSettings};
  font-size: 1.6rem;
`,CloseButton=styled_components_browser_esm.ZP.button`
  position: absolute;
  top: 2rem;
  right: 2rem;
  cursor: pointer;
  & svg {
    height: 1.5rem;
    width: 1.5rem;
    fill: ${({color})=>color};
  }
`,Toast=props=>{const{title,description,toastType,textColor,backgroundColor,position,animationType,id,toastDuration,slideDirection}=props;return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(assets.ZL,{}),(0,jsx_runtime.jsxs)(ToastBox,{"data-cy":"toast",animationType,textColor,position,animation:position,backgroundColor,toastDuration,slideDirection,children:[(0,jsx_runtime.jsxs)(ToastContent,{children:[(0,jsx_runtime.jsx)(SvgSelector,{"data-cy":"svg",id:toastType}),(0,jsx_runtime.jsxs)(TextBox,{children:[(0,jsx_runtime.jsx)(ToastTitle,{"data-cy":"title",children:title}),(0,jsx_runtime.jsx)(ToastDescription,{"data-cy":"description",children:description})]})]}),(0,jsx_runtime.jsx)(CloseButton,{"data-cy":"close-toast",color:textColor,onClick:(id=>()=>{toastManager.A.deleteToast(id)})(id),children:(0,jsx_runtime.jsx)(SvgSelector,{id:"close"})})]})]})};try{Toast.displayName="Toast",Toast.__docgenInfo={description:"",displayName:"Toast",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!0,type:{name:"string"}},toastType:{defaultValue:null,description:"",name:"toastType",required:!0,type:{name:"enum",value:[{value:'"info"'},{value:'"warning"'},{value:'"error"'},{value:'"success"'}]}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},backgroundColor:{defaultValue:null,description:"",name:"backgroundColor",required:!0,type:{name:"string"}},textColor:{defaultValue:null,description:"",name:"textColor",required:!0,type:{name:"string"}},position:{defaultValue:null,description:"",name:"position",required:!0,type:{name:"enum",value:[{value:'"top-left"'},{value:'"top-right"'},{value:'"bottom-right"'},{value:'"bottom-left"'}]}},animationType:{defaultValue:null,description:"",name:"animationType",required:!0,type:{name:"enum",value:[{value:'"fade"'},{value:'"slide"'}]}},slideDirection:{defaultValue:null,description:"",name:"slideDirection",required:!0,type:{name:"enum",value:[{value:'"top"'},{value:'"left"'},{value:'"right"'},{value:'"bottom"'}]}},toastDuration:{defaultValue:null,description:"",name:"toastDuration",required:!0,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Toast/Toast.tsx#Toast"]={docgenInfo:Toast.__docgenInfo,name:"Toast",path:"src/components/Toast/Toast.tsx#Toast"})}catch(__react_docgen_typescript_loader_error){}},"./src/constants/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{u0:()=>MainToastsColors,vK:()=>Positions,SY:()=>SlideDirections,ii:()=>ToastsTypes,gw:()=>delay,SB:()=>maxToastsCount,FK:()=>slideSpeedAmount});const maxToastsCount=3,delay=500,slideSpeedAmount=40;let MainToastsColors=function(MainToastsColors){return MainToastsColors.green="#37E29A",MainToastsColors.yellow="#F4E048",MainToastsColors.red="#E25837",MainToastsColors.purple="#9A40D3",MainToastsColors}({}),Positions=function(Positions){return Positions.TopLeft="top-left",Positions.TopRight="top-right",Positions.BottomRight="bottom-right",Positions.BottomLeft="bottom-left",Positions}({}),SlideDirections=function(SlideDirections){return SlideDirections.top="top",SlideDirections.left="left",SlideDirections.right="right",SlideDirections.bottom="bottom",SlideDirections}({}),ToastsTypes=function(ToastsTypes){return ToastsTypes.info="info",ToastsTypes.warning="warning",ToastsTypes.error="error",ToastsTypes.success="success",ToastsTypes}({})},"./src/service/toastManager.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>toast});class ToastManager{toasts=[];constructor(){this.toasts=[]}static getInstance=()=>(ToastManager.instance||(ToastManager.instance=new ToastManager),ToastManager.instance);addToast=config=>{this.toastInteraction.addToast(config)};deleteToast=id=>{this.toastInteraction.deleteToast(id)};getToasts=()=>this.toasts}const toast=ToastManager.getInstance()},"./src/utils/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{qy:()=>fadeAnimation,bt:()=>getPosition,cQ:()=>slideAnimation});var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),constants=__webpack_require__("./src/constants/index.ts");const fadeAnimationStart=styled_components_browser_esm.F4`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,fadeAnimationEnd=styled_components_browser_esm.F4`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }`,slidePosition=(direction,animationSpeed)=>{switch(direction){case constants.SY.top:return styled_components_browser_esm.iv`
        transform: translate(0, ${-animationSpeed}rem);
      `;case constants.SY.left:return styled_components_browser_esm.iv`
        transform: translate(${-animationSpeed}rem, 0);
      `;case constants.SY.right:return styled_components_browser_esm.iv`
        transform: translate(${animationSpeed}rem, 0);
      `;case constants.SY.bottom:return styled_components_browser_esm.iv`
        transform: translate(0, ${animationSpeed}rem);
      `;default:return styled_components_browser_esm.iv``}},fadeAnimation=duration=>styled_components_browser_esm.iv`
  animation-name: ${fadeAnimationStart}, ${fadeAnimationEnd};
  ${makeSmoothAnimation(duration)};
`,slideAnimation=(duration,direction)=>styled_components_browser_esm.iv`
  animation-name: ${(direction=>styled_components_browser_esm.F4`
  from {
    opacity: 0;
    ${slidePosition(direction,constants.FK)}
  } 
  to {
    opacity: 1;
    ${slidePosition(direction,0)}
  }
`)(direction)}, ${(direction=>styled_components_browser_esm.F4`
  from {
    opacity: 1;
    ${slidePosition(direction,0)}
  }
  to {
    opacity: 0;
    ${slidePosition(direction,constants.FK)}
  }
`)(direction)};
  ${makeSmoothAnimation(duration)}
`,makeSmoothAnimation=duration=>styled_components_browser_esm.iv`
  animation-delay: 0s, ${duration-constants.gw}ms;
  animation-duration: 500ms, 500ms;
  animation-fill-mode: forwards, forwards;
`,getPosition=position=>{switch(position){case constants.vK.TopLeft:return styled_components_browser_esm.iv`
        top: 1.5rem;
        left: 1.5rem;
      `;case constants.vK.TopRight:return styled_components_browser_esm.iv`
        top: 1.5rem;
        right: 1.5rem;
      `;case constants.vK.BottomLeft:return styled_components_browser_esm.iv`
        bottom: 1.5rem;
        left: 1.5rem;
      `;case constants.vK.BottomRight:return styled_components_browser_esm.iv`
        bottom: 1.5rem;
        right: 1.5rem;
      `;default:return styled_components_browser_esm.iv``}}},"./src/stories/toast.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Error:()=>Error,Info:()=>Info,Success:()=>Success,Warning:()=>Warning,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _assets__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/assets/index.ts"),_components_Toast__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Toast/index.ts"),_constants__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/constants/index.ts");const commonArgs={position:_constants__WEBPACK_IMPORTED_MODULE_2__.vK.TopLeft,animationType:"slide",toastDuration:5e3},meta={title:"Toast",component:_components_Toast__WEBPACK_IMPORTED_MODULE_1__.F},Warning={args:{title:"Warning",description:"Warning description",textColor:_assets__WEBPACK_IMPORTED_MODULE_0__.O9.black,toastType:_constants__WEBPACK_IMPORTED_MODULE_2__.ii.warning,backgroundColor:_constants__WEBPACK_IMPORTED_MODULE_2__.u0.yellow,...commonArgs}},Success={args:{title:"Success",description:"Success description",textColor:_assets__WEBPACK_IMPORTED_MODULE_0__.O9.white,toastType:_constants__WEBPACK_IMPORTED_MODULE_2__.ii.success,backgroundColor:_constants__WEBPACK_IMPORTED_MODULE_2__.u0.green,...commonArgs}},Error={args:{title:"Error",description:"Error description",textColor:_assets__WEBPACK_IMPORTED_MODULE_0__.O9.white,toastType:_constants__WEBPACK_IMPORTED_MODULE_2__.ii.error,backgroundColor:_constants__WEBPACK_IMPORTED_MODULE_2__.u0.red,...commonArgs}},Info={args:{title:"Info",description:"Info description",textColor:_assets__WEBPACK_IMPORTED_MODULE_0__.O9.white,toastType:_constants__WEBPACK_IMPORTED_MODULE_2__.ii.info,backgroundColor:_constants__WEBPACK_IMPORTED_MODULE_2__.u0.purple,...commonArgs}},__WEBPACK_DEFAULT_EXPORT__=meta,__namedExportsOrder=["Warning","Success","Error","Info"];Warning.parameters={...Warning.parameters,docs:{...Warning.parameters?.docs,source:{originalSource:"{\n  args: {\n    title: 'Warning',\n    description: 'Warning description',\n    textColor: colors.black,\n    toastType: ToastsTypes.warning,\n    backgroundColor: MainToastsColors.yellow,\n    ...commonArgs\n  }\n}",...Warning.parameters?.docs?.source}}},Success.parameters={...Success.parameters,docs:{...Success.parameters?.docs,source:{originalSource:"{\n  args: {\n    title: 'Success',\n    description: 'Success description',\n    textColor: colors.white,\n    toastType: ToastsTypes.success,\n    backgroundColor: MainToastsColors.green,\n    ...commonArgs\n  }\n}",...Success.parameters?.docs?.source}}},Error.parameters={...Error.parameters,docs:{...Error.parameters?.docs,source:{originalSource:"{\n  args: {\n    title: 'Error',\n    description: 'Error description',\n    textColor: colors.white,\n    toastType: ToastsTypes.error,\n    backgroundColor: MainToastsColors.red,\n    ...commonArgs\n  }\n}",...Error.parameters?.docs?.source}}},Info.parameters={...Info.parameters,docs:{...Info.parameters?.docs,source:{originalSource:"{\n  args: {\n    title: 'Info',\n    description: 'Info description',\n    textColor: colors.white,\n    toastType: ToastsTypes.info,\n    backgroundColor: MainToastsColors.purple,\n    ...commonArgs\n  }\n}",...Info.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=stories-toast-stories.963b99d0.iframe.bundle.js.map