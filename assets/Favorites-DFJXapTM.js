import{a as t,j as r}from"./index-D9jVcqek.js";import{A as a}from"./AdvertCard-ZPU_59CE.js";import"./hooks-DmJW6txS.js";const v=()=>{const e=t(s=>s.Favorites),i=t(s=>s.adverts.filter(o=>e.includes(o._id)));return r.jsxs("div",{children:[r.jsx("h1",{children:"Favorites"}),r.jsx("div",{children:i.map(s=>r.jsx(a,{advert:s},s._id))})]})};export{v as default};