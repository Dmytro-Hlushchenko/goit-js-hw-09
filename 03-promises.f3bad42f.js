function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},l=t.parcelRequired7c6;null==l&&((l=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var l={id:e,exports:{}};return n[e]=l,t.call(l.exports,l,l.exports),l.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequired7c6=l);var i=l("7Y9D8");function r(e,t){const n=Math.random()>.3;return new Promise(((o,l)=>n?o({position:e,fullDelay:t}):l({position:e,fullDelay:t})))}document.querySelector(".form").addEventListener("submit",(t=>{t.preventDefault();const n=t.currentTarget;let o=+n.delay.value;const l=+n.amount.value,u=+n.step.value;let s=0;for(let t=0;t<l;t+=1){s=t;o+=u;r(s,o).then((({position:t,fullDelay:n})=>{setTimeout((()=>{e(i).Notify.success(`Fulfilled promise ${t} in ${n}ms`)}),n)})).catch((({position:t,fullDelay:n})=>{setTimeout((()=>{e(i).Notify.warning(`Rejected promise ${t} in ${n}ms`)}),n)}))}}));
//# sourceMappingURL=03-promises.f3bad42f.js.map
