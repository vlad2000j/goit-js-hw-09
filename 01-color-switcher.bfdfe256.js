const e=document.querySelector("body"),t=document.querySelector("[data-start]"),a=document.querySelector("[data-stop]");t.addEventListener("click",(function(){l=setInterval((()=>e.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`),1e3),t.disable=!0,a.disable=!1})),a.addEventListener("click",(function(){clearInterval(l),t.disable=!1,a.disable=!0}));let l=null;
//# sourceMappingURL=01-color-switcher.bfdfe256.js.map
