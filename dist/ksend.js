!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("ksend",[],t):"object"==typeof exports?exports.ksend=t():e.ksend=t()}("undefined"!=typeof self?self:this,(function(){return(()=>{"use strict";var e={184:(e,t,s)=>{s.r(t),s.d(t,{isKSendSuccess:()=>o,isKSendFail:()=>r,isKSendError:()=>n,success:()=>u,fail:()=>a,error:()=>i,list:()=>l});const o=e=>"success"===(null==e?void 0:e.status),r=e=>"fail"===(null==e?void 0:e.status),n=e=>"error"===(null==e?void 0:e.status),u=e=>({status:"success",data:e}),a=(e,t,s)=>Object.assign({status:"fail",message:e,code:t},null!=s&&{data:s}),i=(e,t,s)=>Object.assign({status:"error",message:e,code:t},null!=s&&{data:s}),l=(e,t,s=!0)=>({currentCount:e.length,totalCount:t||e.length,isTotalCountAccurate:s,items:e})}},t={};function s(o){if(t[o])return t[o].exports;var r=t[o]={exports:{}};return e[o](r,r.exports,s),r.exports}return s.d=(e,t)=>{for(var o in t)s.o(t,o)&&!s.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),s.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s(184)})()}));