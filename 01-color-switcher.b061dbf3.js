const t=document.querySelector("body"),e=document.querySelector("[data-start]"),r=document.querySelector("[data-stop]");e.addEventListener("click",(function(){o=setInterval((()=>{t.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3),e.setAttribute("disabled","")})),r.addEventListener("click",(function(){clearInterval(o),e.removeAttribute("disabled")}));let o=null;
//# sourceMappingURL=01-color-switcher.b061dbf3.js.map