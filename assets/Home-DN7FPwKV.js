import{j as e,u as d,a as f,r as m,f as _,N as p}from"./index-D9jVcqek.js";import{P as r,t as u}from"./hooks-DmJW6txS.js";const v="_card_f18v4_1",h="_image_f18v4_12",g="_details_f18v4_18",x="_name_f18v4_23",j="_description_f18v4_28",N="_footer_f18v4_34",y="_price_f18v4_40",k="_rate_f18v4_45",n={card:v,image:h,details:g,name:x,description:j,footer:N,price:y,rate:k},o=({advert:a})=>e.jsxs("div",{className:n.card,children:[e.jsx("img",{src:a.gallery[0],alt:a.name,className:n.image}),e.jsxs("div",{className:n.details,children:[e.jsx("h2",{className:n.name,children:a.form}),e.jsx("p",{children:u(a.description,120)}),e.jsx("div",{className:n.footer,children:e.jsxs("span",{className:n.rate,children:[a.rating,"(",a.reviews.length," rewievs)"]})})]})]});o.propTypes={advert:r.shape({gallery:r.arrayOf(r.string).isRequired,name:r.string.isRequired,description:r.string.isRequired,form:r.string.isRequired,price:r.number.isRequired,rating:r.number.isRequired,reviews:r.arrayOf(r.object).isRequired}).isRequired};const R="_container_pehf4_1",q="_title_pehf4_9",T="_intro_pehf4_14",C="_advertsContainer_pehf4_19",b="_navLink_pehf4_26",t={container:R,title:q,intro:T,advertsContainer:C,navLink:b},E=()=>{const a=d(),c=f(s=>s.adverts);m.useEffect(()=>{c.length===0&&a(_())},[a,c]);const i={alcove:null,fullyIntegrated:null,panelTruck:null};c.forEach(s=>{s.form==="alcove"&&!i.alcove?i.alcove=s:s.form==="fullyIntegrated"&&!i.fullyIntegrated?i.fullyIntegrated=s:s.form==="panelTruck"&&!i.panelTruck&&(i.panelTruck=s)});const l=Object.values(i).filter(Boolean);return e.jsxs("div",{className:t.container,children:[e.jsx("h1",{className:t.title,children:"Welcome to our Camp Trail Service"}),e.jsx("p",{className:t.intro,children:"We offer the best camper vans for your travel needs in Ukraine."}),e.jsx("div",{className:t.advertsContainer,children:l.map(s=>e.jsx(o,{advert:s},s._id))}),e.jsx("div",{children:e.jsx(p,{to:"/catalog",className:t.navLink,children:"More in Catalog"})})]})};export{E as default};