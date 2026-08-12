"use client";
import { useEffect, useState } from "react";

const SHOP_URL="https://www.fytoo.com/";
const slides=[
 {image:"/images/1845-06-1.webp",eyebrow:"The Style Edit",title:"Frames that change the whole look.",text:"Explore expressive shapes, easy neutrals, and lightweight everyday favorites."},
 {image:"/images/1836-01-1.webp",eyebrow:"Modern Classics",title:"Clean lines. Comfortable confidence.",text:"A sharper point of view for workdays, weekends, and everything between."},
 {image:"/images/1851-32-1.webp",eyebrow:"Sun Ready",title:"A little shade. A lot of personality.",text:"Find tinted frames and statement silhouettes made for bright days."},
 {image:"/images/1846-05-1.webp",eyebrow:"Playful Details",title:"Color outside the ordinary.",text:"Fresh accents and unexpected combinations for a look that feels personal."},
 {image:"/images/186751-03-1.webp",eyebrow:"Fresh Perspective",title:"Your next signature pair is here.",text:"Browse FYTOO eyewear selected for shape, comfort, and everyday versatility."}
];
const edits=[
 ["/images/1836-01-1.webp","The Minimalist","Clean & versatile","Streamlined frames that quietly pull every outfit together."],
 ["/images/1845-06-1.webp","The Modern Round","Soft & expressive","A balanced circular shape with just enough personality."],
 ["/images/1851-32-1.webp","The Sun Edit","Bold & relaxed","Tinted lenses and confident shapes for brighter plans."],
 ["/images/1848-01-1.webp","The Statement","Color-forward","Distinctive frames made to become the center of the look."],
 ["/images/1822-10-1.webp","The Aviator","Retro & refined","A familiar silhouette refreshed with crisp, modern detailing."],
 ["/images/1842-16-1.webp","The Everyday Pair","Easy & lightweight","An effortless frame designed to go wherever your day does."]
];
const categories=[
 ["✦","Women’s glasses","Cat-eye, round, square & more"],["◇","Men’s glasses","Classic, geometric & lightweight"],["◉","Blue-light lenses","For screens, study & work"],["☼","Sunglasses","UV-ready everyday style"]
];
function ShopLink({children,className=""}:{children:React.ReactNode;className?:string}){return <a className={className} href={SHOP_URL} target="_blank" rel="sponsored nofollow noopener">{children}</a>}

export default function Home(){
 const [active,setActive]=useState(0); const [menu,setMenu]=useState(false);
 useEffect(()=>{const timer=window.setInterval(()=>setActive(v=>(v+1)%slides.length),6000);return()=>window.clearInterval(timer)},[]);
 const go=(i:number)=>setActive((i+slides.length)%slides.length);
 return <main>
  <div className="notice">Independent eyewear guide · We may earn a commission from qualifying purchases.</div>
  <header className="site-header"><a className="brand" href="#top" aria-label="Lens and Line home"><span className="brand-mark">L/L</span><span>LENS <i>&</i> LINE</span></a><button className="menu-toggle" onClick={()=>setMenu(!menu)} aria-expanded={menu} aria-label="Toggle menu">{menu?"×":"☰"}</button><nav className={menu?"open":""} aria-label="Main navigation"><a href="#edits" onClick={()=>setMenu(false)}>Style edits</a><a href="#finder" onClick={()=>setMenu(false)}>Frame finder</a><a href="#guide" onClick={()=>setMenu(false)}>Buying guide</a><ShopLink className="nav-shop">Shop FYTOO ↗</ShopLink></nav></header>
  <section className="hero" id="top" aria-roledescription="carousel" aria-label="Featured eyewear">
   {slides.map((s,i)=><div className={`hero-slide ${i===active?"active":""}`} key={s.title} aria-hidden={i!==active}><div className="hero-wash"/><img src={s.image} alt=""/><div className="hero-copy"><p className="eyebrow">{s.eyebrow}</p><h1>{s.title}</h1><p>{s.text}</p><div className="hero-actions"><ShopLink className="button primary">Explore FYTOO <span>↗</span></ShopLink><a className="text-link" href="#finder">Find your frame →</a></div></div></div>)}
   <button className="carousel-arrow previous" onClick={()=>go(active-1)} aria-label="Previous slide">←</button><button className="carousel-arrow next" onClick={()=>go(active+1)} aria-label="Next slide">→</button>
   <div className="carousel-dots" role="tablist" aria-label="Choose hero slide">{slides.map((s,i)=><button key={s.title} className={i===active?"active":""} onClick={()=>go(i)} aria-label={`Show slide ${i+1}`} aria-selected={i===active} role="tab"/>)}</div><div className="hero-count">0{active+1} <span>/ 05</span></div>
  </section>
  <section className="trust-row" aria-label="Shopping benefits"><span>Prescription-ready styles</span><span>Hundreds of frame options</span><span>Blue-light & sun choices</span><span>Secure shopping at FYTOO</span></section>
  <section className="section intro" id="edits"><div><p className="eyebrow ink">Curated for real life</p><h2>Eyewear, edited.</h2></div><p>Skip the endless scroll. Start with the shapes, colors, and frame personalities that make choosing your next pair feel simple.</p></section>
  <section className="product-grid section" aria-label="Featured frame edits">{edits.map(([image,title,kicker,copy])=><article className="product-card" key={title}><div className="product-image"><img src={image} alt={`${title} eyewear style`} loading="lazy"/></div><p className="card-kicker">{kicker}</p><h3>{title}</h3><p>{copy}</p><ShopLink className="card-link">Shop this style <span>↗</span></ShopLink></article>)}</section>
  <section className="finder" id="finder"><div className="finder-copy"><p className="eyebrow">Find your starting point</p><h2>What are you shopping for?</h2><p>Choose a collection, then personalize the frame and lens details directly at FYTOO.</p></div><div className="category-grid">{categories.map(([icon,label,shape])=><ShopLink className="category" key={label}><span className="category-icon">{icon}</span><span><b>{label}</b><small>{shape}</small></span><em>↗</em></ShopLink>)}</div></section>
  <section className="guide section" id="guide"><div className="guide-art"><img src="/images/1846-05-1.webp" alt="Colorful FYTOO eyeglasses with a beaded chain" loading="lazy"/><span>STYLE<br/>NOTE <b>03</b></span></div><div className="guide-copy"><p className="eyebrow ink">Before you buy</p><h2>A better fit starts with three things.</h2><ol><li><span>01</span><div><b>Know your measurements</b><p>Compare frame width, lens width, bridge, and temple length with a pair you already love.</p></div></li><li><span>02</span><div><b>Match your lifestyle</b><p>Think about screen time, sunlight, work, driving, and how often you want to switch pairs.</p></div></li><li><span>03</span><div><b>Check your prescription</b><p>Keep your current prescription and pupillary distance handy before customizing lenses.</p></div></li></ol><ShopLink className="button dark">Browse frames at FYTOO ↗</ShopLink></div></section>
  <section className="editorial-cta"><p className="eyebrow">Your look, in focus</p><h2>New frame. Fresh perspective.</h2><p>Discover an eyewear collection designed to make personal style feel refreshingly accessible.</p><ShopLink className="button light">Visit FYTOO <span>↗</span></ShopLink></section>
  <footer><div><a className="brand footer-brand" href="#top"><span className="brand-mark">L/L</span><span>LENS <i>&</i> LINE</span></a><p>An independent style guide for finding expressive, everyday eyewear.</p></div><div><b>Explore</b><a href="#edits">Style edits</a><a href="#finder">Frame finder</a><a href="#guide">Buying guide</a></div><div><b>Disclosure</b><p>Lens & Line participates in affiliate programs. If you purchase through our links, we may earn a commission at no extra cost to you. Prices, offers, and availability are set by FYTOO and may change.</p></div><div className="footer-bottom"><span>© 2026 Lens & Line</span><span>Independent site · Not owned or operated by FYTOO</span></div></footer>
 </main>
}
