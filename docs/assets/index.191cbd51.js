(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const p of n.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&o(p)}).observe(document,{childList:!0,subtree:!0});function s(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(e){if(e.ep)return;e.ep=!0;const n=s(e);fetch(e.href,n)}})();const h=(t,r)=>{if(!t||t.length==0)throw new Error("cardTypes is required");if(!r||r.length==0)throw new Error("specialTypes is required");let s=[];for(let o=2;o<=10;o++)for(const e of t)s.push(o+e);for(const o of r)for(const e of t)s.push(o+e);return s=s.map(o=>({val:o,sort:Math.random()})).sort((o,e)=>e.sort-o.sort).map(({val:o})=>o),s},g=t=>{if(!t||t.length===0)throw new Error("There aren't cards in the deck");return t.pop()},b=t=>{const r=t.slice(0,-1);return isNaN(r)?r==="A"?11:10:+r},m=(t,r,s,o=[])=>{if(!t)throw new Error("pointsPlayer is required");if(!r)throw new Error("pointsHTML is required");if(!s)throw new Error("computerCards is required");let e=0;do{const n=g(o);if(e+=b(n),s.append(w(n)),r.textContent=e,t>21)break}while(t>e&&t<=21);setTimeout(()=>{t===e?alert("Tie, no one wins"):t<e?alert("You won \u{1F973}"):alert("You lost \u{1F625}")},500)},w=t=>{const r=document.createElement("img");return r.src=`assets/cards/${t}.png`,r.classList.add("card"),r};let d=[];const y=["C","D","H","S"],E=["A","J","Q","K"];let i=0;const c=document,a=c.getElementById("btn-ask"),l=c.getElementById("btn-stop"),C=c.getElementById("btn-new"),u=c.querySelectorAll("small"),L=c.getElementById("cards-player"),f=c.getElementById("cards-computer");d=h(y,E);a.addEventListener("click",()=>{const t=g(d);i+=b(t),L.append(w(t)),l.disabled=!1,i>21?(console.warn("Sorry, you lost \u{1F622}"),a.disabled=!0,l.disabled=!0,m(i,u[1],f,d)):i===21&&(console.warn("21, great! \u{1F60E}"),a.disabled=!0,l.disabled=!0,m(i,u[1],f,d)),u[0].textContent=i});l.addEventListener("click",()=>{a.disabled=!0,l.disabled=!0,m(i,u[1],f,d)});C.addEventListener("click",()=>{a.disabled=!1,l.disabled=!0,i=0,u.forEach(t=>{t.textContent=0}),L.innerHTML="",f.innerHTML="",d=h(y,E)});