!function(){var a=document.querySelector("[data-salat]"),e=document.querySelector("[data-omlet]"),t=document.querySelector("[data-drink]"),n=document.querySelector("[data-array]"),c=document.querySelector("[data-main]"),i=document.querySelector("[data-paragraph]"),s=document.querySelector("[data-close]");function r(){n.classList.toggle("hero__array-open"),c.classList.toggle("hero__main-open"),s.classList.toggle("hidden"),i.classList.toggle("hidden"),n.classList.add("animateForvard"),n.classList.remove("animateBack"),c.classList.add("animateForvardMain"),c.classList.remove("animateBacMain")}a.addEventListener("click",(function(){r()})),e.addEventListener("click",(function(){r()})),t.addEventListener("click",(function(){r()})),s.addEventListener("click",(function(){r(),n.classList.add("animateBack"),n.classList.remove("animateForvard"),c.classList.remove("animateForvardMain"),c.classList.add("animateBacMain")}))}();
//# sourceMappingURL=index.fb2536d3.js.map
