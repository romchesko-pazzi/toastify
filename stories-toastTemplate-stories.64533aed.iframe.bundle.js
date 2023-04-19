"use strict";(self.webpackChunktoastify_lib=self.webpackChunktoastify_lib||[]).push([[561],{"./src/assets/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{ZL:()=>GlobalStyle,V5:()=>TestButton,O9:()=>colors});var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const TestButton=styled_components_browser_esm.ZP.button`
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
`},"./src/components/Toast/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{F:()=>Toast});__webpack_require__("./node_modules/react/index.js");var assets=__webpack_require__("./src/assets/index.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Close=()=>(0,jsx_runtime.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 32 32",children:(0,jsx_runtime.jsx)("path",{d:"M18.83 15.999 31.414 3.416a2.001 2.001 0 0 0-2.83-2.83L16 13.171 3.416.586a2.001 2.001 0 0 0-2.83 2.83l12.585 12.583L.586 28.584a2 2 0 1 0 2.83 2.829L16 18.829l12.584 12.585a2.001 2.001 0 0 0 2.83-2.83Z"})});Close.displayName="Close";const Error=()=>(0,jsx_runtime.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"64",height:"64",viewBox:"0 0 64 64",children:[(0,jsx_runtime.jsx)("path",{d:"M64 60.18 52.52 48.7a29.7 29.7 0 1 0-3.82 3.81L60.2 64ZM5.46 29.73A24.27 24.27 0 1 1 29.73 54 24.27 24.27 0 0 1 5.46 29.73Z"}),(0,jsx_runtime.jsx)("path",{d:"M45.9 39.85a2.73 2.73 0 0 0-2.45-1.5h-.79a18.94 18.94 0 0 0 .6-2.74h5.65v-5.47h-5.66a18.94 18.94 0 0 0-.59-2.73h.79a2.73 2.73 0 0 0 2.44-1.52l2.73-5.46-4.89-2.44-1.97 3.95h-1.8a14.92 14.92 0 0 0-2.5-2.62 8.2 8.2 0 1 0-15.37 0 14.92 14.92 0 0 0-2.49 2.62h-1.8L15.82 18l-4.9 2.44 2.74 5.47a2.73 2.73 0 0 0 2.45 1.51h.78a18.94 18.94 0 0 0-.59 2.73h-5.66v5.47h5.66a18.94 18.94 0 0 0 .6 2.74h-.8a2.73 2.73 0 0 0-2.44 1.5l-2.73 5.48 4.89 2.44 1.98-3.96h1.8a12.78 12.78 0 0 0 10.18 5.47 12.78 12.78 0 0 0 10.17-5.47h1.8l1.98 3.95 4.9-2.44ZM27.03 16.47a2.73 2.73 0 0 1 5.47 0 2.77 2.77 0 0 1-.03.33 11.46 11.46 0 0 0-5.41 0 2.77 2.77 0 0 1-.03-.33Zm2.73 27.34c-4.52 0-8.2-4.9-8.2-10.94s3.68-10.93 8.2-10.93 8.2 4.9 8.2 10.93-3.67 10.94-8.2 10.94Z"})]});Error.displayName="Error";const Info=()=>(0,jsx_runtime.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"64",height:"64",viewBox:"0 0 64 64",children:[(0,jsx_runtime.jsx)("circle",{cx:"3.442",cy:"3.442",r:"3.442",transform:"translate(28.558 43.702)"}),(0,jsx_runtime.jsx)("path",{d:"M32 0a32 32 0 1 0 32 32A31.983 31.983 0 0 0 32 0Zm0 59a27 27 0 1 1 27-27 26.985 26.985 0 0 1-27 27Z"}),(0,jsx_runtime.jsx)("path",{d:"M32 14.928a11.028 11.028 0 0 0-11.016 11.016 2.754 2.754 0 0 0 5.508 0A5.508 5.508 0 1 1 32 31.452a2.754 2.754 0 0 0-2.754 2.754v6.885a2.754 2.754 0 0 0 5.508 0v-4.479A11.016 11.016 0 0 0 32 14.929Z"})]});Info.displayName="Info";const Success=()=>(0,jsx_runtime.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"64",height:"64",viewBox:"0 0 64 64",children:[(0,jsx_runtime.jsx)("path",{d:"M32 0a32 32 0 1 0 32 32A32 32 0 0 0 32 0Zm0 61.5A29.5 29.5 0 1 1 61.5 32 29.6 29.6 0 0 1 32 61.5Z"}),(0,jsx_runtime.jsx)("path",{d:"m49.5 21-22 17.3-13.2-7.5a1.9 1.9 0 0 0-2 .2.8.8 0 0 0 .2 1.4l14.3 8a1.8 1.8 0 0 0 1 .2 1.7 1.7 0 0 0 1-.3l22.8-18a.8.8 0 0 0 0-1.4 1.9 1.9 0 0 0-2.1 0Z"})]});Success.displayName="Success";const Warning=()=>(0,jsx_runtime.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"64",height:"64",viewBox:"0 0 64 64",children:[(0,jsx_runtime.jsx)("path",{d:"M32.003 44.974a3.6 3.6 0 0 0 0 7.2 3.6 3.6 0 0 0 0-7.2Z"}),(0,jsx_runtime.jsx)("path",{d:"M62.442 57.725a13.288 13.288 0 0 0 .026-12.434l-20.6-39.03a10.891 10.891 0 0 0-19.708-.014L1.529 45.318a13.4 13.4 0 0 0 .039 12.506A11.117 11.117 0 0 0 11.4 64h41.149a11.2 11.2 0 0 0 9.893-6.275Zm-4.473-2.821a6.142 6.142 0 0 1-5.433 3.44H11.383a6.054 6.054 0 0 1-5.368-3.368A7.366 7.366 0 0 1 6 48.111L26.631 9.052a5.944 5.944 0 0 1 10.762.014l20.616 39.06a7.268 7.268 0 0 1-.04 6.778Z"}),(0,jsx_runtime.jsx)("path",{d:"M31.108 19.717a3.913 3.913 0 0 0-2.778 3.929c.086 1.137.158 2.288.245 3.425.245 4.332.489 8.577.734 12.909A2.636 2.636 0 0 0 32 42.513a2.691 2.691 0 0 0 2.691-2.619c0-.892 0-1.713.086-2.619.158-2.778.331-5.555.489-8.333.086-1.8.245-3.6.331-5.4a4.444 4.444 0 0 0-.331-1.8 3.607 3.607 0 0 0-4.158-2.025Z"})]});Warning.displayName="Warning";const SvgSelector=({id})=>{switch(id){case"close":return(0,jsx_runtime.jsx)(Close,{});case"info":return(0,jsx_runtime.jsx)(Info,{});case"warning":return(0,jsx_runtime.jsx)(Warning,{});case"error":return(0,jsx_runtime.jsx)(Error,{});case"success":return(0,jsx_runtime.jsx)(Success,{});default:return(0,jsx_runtime.jsx)("svg",{})}};try{SvgSelector.displayName="SvgSelector",SvgSelector.__docgenInfo={description:"",displayName:"SvgSelector",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/SvgSelector/SvgSelector.tsx#SvgSelector"]={docgenInfo:SvgSelector.__docgenInfo,name:"SvgSelector",path:"src/components/SvgSelector/SvgSelector.tsx#SvgSelector"})}catch(__react_docgen_typescript_loader_error){}var singleton=__webpack_require__("./src/service/singleton.ts"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),utils=__webpack_require__("./src/utils/index.ts");const fontSettings="\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  max-width: 31.5rem;\n  margin-left: 2rem;\n",ToastBox=styled_components_browser_esm.ZP.div`
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
`,Toast=props=>{const{title,description,toastType,textColor,backgroundColor,position,animationType,id,toastDuration,slideDirection}=props;return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(assets.ZL,{}),(0,jsx_runtime.jsxs)(ToastBox,{"data-cy":"toast",animationType,textColor,position,animation:position,backgroundColor,toastDuration,slideDirection,children:[(0,jsx_runtime.jsxs)(ToastContent,{children:[(0,jsx_runtime.jsx)(SvgSelector,{"data-cy":"svg",id:toastType}),(0,jsx_runtime.jsxs)(TextBox,{children:[(0,jsx_runtime.jsx)(ToastTitle,{"data-cy":"title",children:title}),(0,jsx_runtime.jsx)(ToastDescription,{"data-cy":"description",children:description})]})]}),(0,jsx_runtime.jsx)(CloseButton,{"data-cy":"close-toast",color:textColor,onClick:(id=>()=>{singleton.A.deleteToast(id)})(id),children:(0,jsx_runtime.jsx)(SvgSelector,{id:"close"})})]})]})};try{Toast.displayName="Toast",Toast.__docgenInfo={description:"",displayName:"Toast",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!0,type:{name:"string"}},toastType:{defaultValue:null,description:"",name:"toastType",required:!0,type:{name:"enum",value:[{value:'"info"'},{value:'"warning"'},{value:'"error"'},{value:'"success"'}]}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},backgroundColor:{defaultValue:null,description:"",name:"backgroundColor",required:!0,type:{name:"string"}},textColor:{defaultValue:null,description:"",name:"textColor",required:!0,type:{name:"string"}},position:{defaultValue:null,description:"",name:"position",required:!0,type:{name:"enum",value:[{value:'"top-left"'},{value:'"top-right"'},{value:'"bottom-right"'},{value:'"bottom-left"'}]}},animationType:{defaultValue:null,description:"",name:"animationType",required:!0,type:{name:"enum",value:[{value:'"fade"'},{value:'"slide"'}]}},slideDirection:{defaultValue:null,description:"",name:"slideDirection",required:!0,type:{name:"enum",value:[{value:'"top"'},{value:'"left"'},{value:'"right"'},{value:'"bottom"'}]}},toastDuration:{defaultValue:null,description:"",name:"toastDuration",required:!0,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Toast/Toast.tsx#Toast"]={docgenInfo:Toast.__docgenInfo,name:"Toast",path:"src/components/Toast/Toast.tsx#Toast"})}catch(__react_docgen_typescript_loader_error){}},"./src/constants/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{u0:()=>MainToastsColors,vK:()=>Positions,SY:()=>SlideDirections,ii:()=>ToastsTypes,gw:()=>delay,SB:()=>maxToastsCount,FK:()=>slideSpeedAmount});const maxToastsCount=3,delay=500,slideSpeedAmount=40;let MainToastsColors=function(MainToastsColors){return MainToastsColors.green="#37E29A",MainToastsColors.yellow="#F4E048",MainToastsColors.red="#E25837",MainToastsColors.purple="#9A40D3",MainToastsColors}({}),Positions=function(Positions){return Positions.TopLeft="top-left",Positions.TopRight="top-right",Positions.BottomRight="bottom-right",Positions.BottomLeft="bottom-left",Positions}({}),SlideDirections=function(SlideDirections){return SlideDirections.top="top",SlideDirections.left="left",SlideDirections.right="right",SlideDirections.bottom="bottom",SlideDirections}({}),ToastsTypes=function(ToastsTypes){return ToastsTypes.info="info",ToastsTypes.warning="warning",ToastsTypes.error="error",ToastsTypes.success="success",ToastsTypes}({})},"./src/service/singleton.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>toast});class ToastManager{constructor(){}static getInstance=()=>(ToastManager.instance||(ToastManager.instance=new ToastManager),ToastManager.instance);addToast=config=>{this.toastInteraction.addToast(config)};deleteToast=id=>{this.toastInteraction.deleteToast(id)}}const toast=ToastManager.getInstance()},"./src/utils/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{qy:()=>fadeAnimation,bt:()=>getPosition,cQ:()=>slideAnimation});var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),constants=__webpack_require__("./src/constants/index.ts");const fadeAnimationStart=styled_components_browser_esm.F4`
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
      `;default:return styled_components_browser_esm.iv``}}},"./src/stories/toastTemplate.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{TestToast:()=>TestToast,__namedExportsOrder:()=>__namedExportsOrder,default:()=>toastTemplate_stories});var react=__webpack_require__("./node_modules/react/index.js"),assets=__webpack_require__("./src/assets/index.ts");function $parcel$export(e,n,v,s){Object.defineProperty(e,n,{get:v,set:s,enumerable:!0,configurable:!0})}$parcel$export({},"ErrorBoundary",(()=>$44d7e150ebc754d2$export$e926676385687eaf));$parcel$export({},"ErrorBoundaryContext",(()=>$ebb31c7feaa4405e$export$b16d9fb1a22de840));const $ebb31c7feaa4405e$export$b16d9fb1a22de840=(0,react.createContext)(null),$44d7e150ebc754d2$var$initialState={didCatch:!1,error:null};class $44d7e150ebc754d2$export$e926676385687eaf extends react.Component{state=$44d7e150ebc754d2$var$initialState;static getDerivedStateFromError(error){return{didCatch:!0,error}}resetErrorBoundary=(...args)=>{const{error}=this.state;null!==error&&(this.props.onReset?.({args,reason:"imperative-api"}),this.setState($44d7e150ebc754d2$var$initialState))};componentDidCatch(error,info){this.props.onError?.(error,info)}componentDidUpdate(prevProps,prevState){const{didCatch}=this.state,{resetKeys}=this.props;didCatch&&null!==prevState.error&&function $44d7e150ebc754d2$var$hasArrayChanged(a=[],b=[]){return a.length!==b.length||a.some(((item,index)=>!Object.is(item,b[index])))}(prevProps.resetKeys,resetKeys)&&(this.props.onReset?.({next:resetKeys,prev:prevProps.resetKeys,reason:"keys"}),this.setState($44d7e150ebc754d2$var$initialState))}render(){const{children,fallbackRender,FallbackComponent,fallback}=this.props,{didCatch,error}=this.state;let childToRender=children;if(didCatch){const props={error,resetErrorBoundary:this.resetErrorBoundary};if((0,react.isValidElement)(fallback))childToRender=fallback;else if("function"==typeof fallbackRender)childToRender=fallbackRender(props);else{if(!FallbackComponent)throw new Error("react-error-boundary requires either a fallback, fallbackRender, or FallbackComponent prop");childToRender=(0,react.createElement)(FallbackComponent,props)}}return(0,react.createElement)($ebb31c7feaa4405e$export$b16d9fb1a22de840.Provider,{value:{didCatch,error,resetErrorBoundary:this.resetErrorBoundary}},childToRender)}}function $75c9d331f9c1ed1a$export$f20aa86254872370(value){if(null==value||"boolean"!=typeof value.didCatch||"function"!=typeof value.resetErrorBoundary)throw new Error("ErrorBoundaryContext not found");return!0}function $7c3c25b3f398a9d6$export$c052f6604b7d51fe(){const context=(0,react.useContext)($ebb31c7feaa4405e$export$b16d9fb1a22de840);$75c9d331f9c1ed1a$export$f20aa86254872370(context);const[state,setState]=(0,react.useState)({error:null,hasError:!1}),memoized=(0,react.useMemo)((()=>({resetBoundary:()=>{context?.resetErrorBoundary(),setState({error:null,hasError:!1})},showBoundary:error=>setState({error,hasError:!0})})),[context?.resetErrorBoundary]);if(state.hasError)throw state.error;return memoized}$parcel$export({},"useErrorBoundary",(()=>$7c3c25b3f398a9d6$export$c052f6604b7d51fe));function $62ff477d53f02a5b$export$f0c7a449e0cfaec7(component,errorBoundaryProps){const Wrapped=(0,react.forwardRef)(((props,ref)=>(0,react.createElement)($44d7e150ebc754d2$export$e926676385687eaf,errorBoundaryProps,(0,react.createElement)(component,{...props,ref})))),name=component.displayName||component.name||"Unknown";return Wrapped.displayName=`withErrorBoundary(${name})`,Wrapped}$parcel$export({},"withErrorBoundary",(()=>$62ff477d53f02a5b$export$f0c7a449e0cfaec7));var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const ErrorWrapper=styled_components_browser_esm.ZP.div`
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  font-family: 'Roboto Mono', monospace;
  text-align: center;
`,ErrorText=styled_components_browser_esm.ZP.h3`
  color: #000;
  font-size: 3.4rem;
  letter-spacing: 0.2px;
  margin-bottom: 3rem;
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const ErrorFallback=()=>(0,jsx_runtime.jsx)(ErrorWrapper,{children:(0,jsx_runtime.jsx)(ErrorText,{children:"Something went wrong, please reload the page"})});ErrorFallback.displayName="ErrorFallback";var Toast=__webpack_require__("./src/components/Toast/index.ts");const esm_browser_native={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};let getRandomValues;const rnds8=new Uint8Array(16);function rng(){if(!getRandomValues&&(getRandomValues="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!getRandomValues))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return getRandomValues(rnds8)}const byteToHex=[];for(let i=0;i<256;++i)byteToHex.push((i+256).toString(16).slice(1));function unsafeStringify(arr,offset=0){return(byteToHex[arr[offset+0]]+byteToHex[arr[offset+1]]+byteToHex[arr[offset+2]]+byteToHex[arr[offset+3]]+"-"+byteToHex[arr[offset+4]]+byteToHex[arr[offset+5]]+"-"+byteToHex[arr[offset+6]]+byteToHex[arr[offset+7]]+"-"+byteToHex[arr[offset+8]]+byteToHex[arr[offset+9]]+"-"+byteToHex[arr[offset+10]]+byteToHex[arr[offset+11]]+byteToHex[arr[offset+12]]+byteToHex[arr[offset+13]]+byteToHex[arr[offset+14]]+byteToHex[arr[offset+15]]).toLowerCase()}const esm_browser_v4=function v4(options,buf,offset){if(esm_browser_native.randomUUID&&!buf&&!options)return esm_browser_native.randomUUID();const rnds=(options=options||{}).random||(options.rng||rng)();if(rnds[6]=15&rnds[6]|64,rnds[8]=63&rnds[8]|128,buf){offset=offset||0;for(let i=0;i<16;++i)buf[offset+i]=rnds[i];return buf}return unsafeStringify(rnds)};var constants=__webpack_require__("./src/constants/index.ts"),singleton=__webpack_require__("./src/service/singleton.ts");var utils=__webpack_require__("./src/utils/index.ts");const ToastListBox=styled_components_browser_esm.ZP.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  ${({position})=>(0,utils.bt)(position)}
`,ToastList=()=>{const containerPositions=(()=>{const[toasts,setToasts]=(0,react.useState)([]),[containerPositions,setContainerPositions]=(0,react.useState)([]),ref=(0,react.useRef)(singleton.A.toastInteraction);(0,react.useEffect)((()=>{singleton.A.toastInteraction=ref.current,setContainerPositions(positionOfTheContainer(toasts))}),[toasts]);const positionOfTheContainer=toasts=>{const positions={[constants.vK.TopRight]:[],[constants.vK.TopLeft]:[],[constants.vK.BottomRight]:[],[constants.vK.BottomLeft]:[]};return toasts.forEach((toast=>{positions[toast.position]=positions[toast.position]?[...positions[toast.position],toast]:[toast]})),Object.entries(positions)};return(0,react.useImperativeHandle)(ref,(()=>({addToast:newToast=>{if(toasts.length<constants.SB){const id=esm_browser_v4();setToasts([...toasts,{...newToast,id}]),setTimeout((()=>{ref.current.deleteToast(id)}),newToast.toastDuration)}},deleteToast:id=>{setToasts(toasts.filter((toast=>toast.id!==id)))}})),[toasts]),containerPositions})();return(0,jsx_runtime.jsx)("div",{children:containerPositions.length>0&&containerPositions.map((([position,toasts])=>(0,jsx_runtime.jsx)(ToastListBox,{"data-cy":"toasts-container",position,children:toasts.map((({title,description,position,toastType,animationType,id,backgroundColor,textColor,toastDuration,slideDirection})=>(0,jsx_runtime.jsx)(Toast.F,{title,description,toastType,backgroundColor,position,textColor,animationType,toastDuration,slideDirection,id},id)))},position)))})};ToastList.displayName="ToastList";var react_dom=__webpack_require__("./node_modules/react-dom/index.js");let _nodeId,_clockseq,_lastMSecs=0,_lastNSecs=0;const esm_browser_v1=function v1(options,buf,offset){let i=buf&&offset||0;const b=buf||new Array(16);let node=(options=options||{}).node||_nodeId,clockseq=void 0!==options.clockseq?options.clockseq:_clockseq;if(null==node||null==clockseq){const seedBytes=options.random||(options.rng||rng)();null==node&&(node=_nodeId=[1|seedBytes[0],seedBytes[1],seedBytes[2],seedBytes[3],seedBytes[4],seedBytes[5]]),null==clockseq&&(clockseq=_clockseq=16383&(seedBytes[6]<<8|seedBytes[7]))}let msecs=void 0!==options.msecs?options.msecs:Date.now(),nsecs=void 0!==options.nsecs?options.nsecs:_lastNSecs+1;const dt=msecs-_lastMSecs+(nsecs-_lastNSecs)/1e4;if(dt<0&&void 0===options.clockseq&&(clockseq=clockseq+1&16383),(dt<0||msecs>_lastMSecs)&&void 0===options.nsecs&&(nsecs=0),nsecs>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");_lastMSecs=msecs,_lastNSecs=nsecs,_clockseq=clockseq,msecs+=122192928e5;const tl=(1e4*(268435455&msecs)+nsecs)%4294967296;b[i++]=tl>>>24&255,b[i++]=tl>>>16&255,b[i++]=tl>>>8&255,b[i++]=255&tl;const tmh=msecs/4294967296*1e4&268435455;b[i++]=tmh>>>8&255,b[i++]=255&tmh,b[i++]=tmh>>>24&15|16,b[i++]=tmh>>>16&255,b[i++]=clockseq>>>8|128,b[i++]=255&clockseq;for(let n=0;n<6;++n)b[i+n]=node[n];return buf||unsafeStringify(b)},ToastPortal=({children})=>{const[isLoaded,setIsLoaded]=(0,react.useState)(!1),[portalId]=(0,react.useState)(`toast-portal-${esm_browser_v1()}`);return(0,react.useEffect)((()=>{const toastDiv=document.createElement("div");return toastDiv.id=portalId,document.body.prepend(toastDiv),setIsLoaded(!0),()=>{document.body.removeChild(toastDiv)}}),[portalId]),isLoaded?(0,react_dom.createPortal)(children,document.getElementById(portalId)):(0,jsx_runtime.jsx)("div",{})};try{ToastPortal.displayName="ToastPortal",ToastPortal.__docgenInfo={description:"",displayName:"ToastPortal",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ToastPortal/ToastPortal.tsx#ToastPortal"]={docgenInfo:ToastPortal.__docgenInfo,name:"ToastPortal",path:"src/components/ToastPortal/ToastPortal.tsx#ToastPortal"})}catch(__react_docgen_typescript_loader_error){}const ToastContainer=()=>(0,jsx_runtime.jsx)($44d7e150ebc754d2$export$e926676385687eaf,{FallbackComponent:ErrorFallback,children:(0,jsx_runtime.jsx)(ToastPortal,{children:(0,jsx_runtime.jsx)(ToastList,{})})});ToastContainer.displayName="ToastContainer";const toastTemplate_stories={title:"Test/Toast",component:ToastContainer,argTypes:{title:{control:{type:"text"},defaultValue:"Warning title dummy text"},description:{control:{type:"text"}},position:{control:{type:"select"},options:["top-left","top-right","bottom-left","bottom-right"]},toastType:{control:{type:"select"},defaultValue:"info",options:["info","warning","error","success"]},backgroundColor:{control:"color"},textColor:{control:"color"},animationType:{control:"radio",options:["fade","slide"]},slideDirection:{defaultValue:"left",options:[constants.SY.top,constants.SY.left,constants.SY.right,constants.SY.bottom],control:{type:"select"}},toastDuration:{control:{type:"number"}}}},Template=({position,toastType,title,backgroundColor,animationType,toastDuration,description,slideDirection,textColor})=>(0,jsx_runtime.jsxs)(ToastPortal,{children:[(0,jsx_runtime.jsx)(assets.V5,{type:"button","data-cy":"btn-create-toast",onClick:()=>{singleton.A.addToast({title,description,position,backgroundColor,toastType,animationType,textColor,toastDuration,slideDirection})},children:"Add toast"}),(0,jsx_runtime.jsx)(ToastList,{})]});Template.displayName="Template";const TestToast=Template.bind({}),__namedExportsOrder=["TestToast"];TestToast.parameters={...TestToast.parameters,docs:{...TestToast.parameters?.docs,source:{originalSource:'({\n  position,\n  toastType,\n  title,\n  backgroundColor,\n  animationType,\n  toastDuration,\n  description,\n  slideDirection,\n  textColor\n}) => {\n  return /*#__PURE__*/_jsxs(ToastPortal, {\n    children: [/*#__PURE__*/_jsx(TestButton, {\n      type: "button",\n      "data-cy": "btn-create-toast",\n      onClick: () => {\n        toast.addToast({\n          title,\n          description,\n          position,\n          backgroundColor,\n          toastType,\n          animationType,\n          textColor,\n          toastDuration,\n          slideDirection\n        });\n      },\n      children: "Add toast"\n    }), /*#__PURE__*/_jsx(ToastList, {})]\n  });\n}',...TestToast.parameters?.docs?.source}}};try{TestToast.displayName="TestToast",TestToast.__docgenInfo={description:"",displayName:"TestToast",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!0,type:{name:"string"}},toastType:{defaultValue:null,description:"",name:"toastType",required:!0,type:{name:"enum",value:[{value:'"info"'},{value:'"warning"'},{value:'"error"'},{value:'"success"'}]}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},backgroundColor:{defaultValue:null,description:"",name:"backgroundColor",required:!0,type:{name:"string"}},textColor:{defaultValue:null,description:"",name:"textColor",required:!0,type:{name:"string"}},position:{defaultValue:null,description:"",name:"position",required:!0,type:{name:"enum",value:[{value:'"top-left"'},{value:'"top-right"'},{value:'"bottom-right"'},{value:'"bottom-left"'}]}},animationType:{defaultValue:null,description:"",name:"animationType",required:!0,type:{name:"enum",value:[{value:'"fade"'},{value:'"slide"'}]}},slideDirection:{defaultValue:null,description:"",name:"slideDirection",required:!0,type:{name:"enum",value:[{value:'"top"'},{value:'"left"'},{value:'"right"'},{value:'"bottom"'}]}},toastDuration:{defaultValue:null,description:"",name:"toastDuration",required:!0,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/toastTemplate.stories.tsx#TestToast"]={docgenInfo:TestToast.__docgenInfo,name:"TestToast",path:"src/stories/toastTemplate.stories.tsx#TestToast"})}catch(__react_docgen_typescript_loader_error){}}}]);
//# sourceMappingURL=stories-toastTemplate-stories.64533aed.iframe.bundle.js.map