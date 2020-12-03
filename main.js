(()=>{"use strict";const n="https://rickandmortyapi.com/api/character",a=async a=>{const e=a?`${n}/${a}`:n;try{const n=await fetch(e);return await n.json()}catch(n){console.log("Fetch Error",n)}},e=()=>location.hash.slice(1).toLocaleLowerCase().split("/")[1]||"/",t=()=>'\n    <div class="Error-404">\n      <h2>Error 404</h2>\n      <p>No has encontrado lo que buscabas</p>\n    </div>\n  ',c={"/":async()=>`\n  <div class="Characters">\n    ${(await a()).results.map((n=>`\n      <article class="Character-item">\n        <a href="#/${n.id}">\n          <img src="${n.image}" alt="A picture of ${n.name}">\n          <h2>${n.name}</h2>\n        </a>\n    </article>\n    `)).join("")}\n\n  </div>\n  `,"/:id":async()=>{const n=e(),t=await a(n),{image:c,name:r,episode:s,status:i,species:o,gender:h,origin:d,location:l}=t;return`\n    <div class="Characters-inner">\n      <article class="Characters-card">\n        <img src="${c}" alt="${r}">\n        <h2>${r}</h2>\n      </article>\n      <article class="Character-card">\n        <h3>Episodes: ${s.length}</h3>\n        <h3>Status: ${i}</h3>\n        <h3>Species: ${o}</h3>\n        <h3>Gender: ${h}</h3>\n        <h3>Origin: ${d.name}</h3>\n        <h3>Last Location: ${l.name}</h3>\n      </article\n    </div>\n  `},"/contact":"Contact"},r=async()=>{const n=document.getElementById("header"),a=document.getElementById("content");n.innerHTML=await'\n    <header class="Header-main">\n      <div class="Header-logo">\n        <h1>\n          <a href="#"> 100tifi.co</a>\n        </h1>\n      </div>\n      <nav class="Header-nav">\n        <a href="#/about/">About</a>\n      </nav>\n    </header>\n';let r=e(),s=await(n=>n.length<=3?"/"===n?n:"/:id":`/${n}`)(r),i=c[s]?c[s]:t;a.innerHTML=await i()};window.addEventListener("load",r),window.addEventListener("hashchange",r)})();