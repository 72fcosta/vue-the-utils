!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("vue-the-utils",[],t):"object"==typeof exports?exports["vue-the-utils"]=t():e["vue-the-utils"]=t()}(self,(function(){return(()=>{"use strict";var e={d:(t,r)=>{for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{dateValidation:()=>n,objectToArray:()=>a,translateUsToBr:()=>i,valueToDate:()=>r});const r=function(e){if(!e)return"";if("string"==typeof e){var t=10===e.length,r=e.replace(/\D/g," ").split(" "),n=4===r[0].length,o=2===r[0].length;return t&&n?function(e){var t=e[0],r=e[1]-1,n=e[2];return new Date(t,r,n)}(r):t&&o?function(e){var t=e[2],r=e[1]-1,n=e[0];return new Date(t,r,n)}(r):"Erro. Formato não aceito"}},n=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:30;if(!e)return"";n*=864e5,t*=864e5;var o=(new Date).getTime()-t,a=(new Date).getTime()+n,i=new Date(o),u=new Date(a);return r(e)>=i&&r(e)<=u};function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}const a=function(e){return Object.entries(e).map((function(e){var t,r,n=(r=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var r=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=r){var n,o,a=[],i=!0,u=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(e){u=!0,o=e}finally{try{i||null==r.return||r.return()}finally{if(u)throw o}}return a}}(t,r)||function(e,t){if(e){if("string"==typeof e)return o(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(e,t):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=n[0],i=n[1];return Object.assign(i,{id:a})}))},i=function(e){return{"invalid-argument":"Argumento inválido","auth/user-not-found":"E-mail incorreto","auth/weak-password":"A senha muito fraca","auth/email-already-in-use":"Este e-mail já está registrado","auth/wrong-password":"Senha incorreta","auth/invalid-email":"E-mail ou senha incorreta","permission-denied":"Permissão negada"}[e]||e};return t})()}));