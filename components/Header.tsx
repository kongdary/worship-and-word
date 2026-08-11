"use client";
import Link from "next/link";
import { useState } from "react";
const links=[['HOME','/'],['찬양','/worship'],['말씀','/message'],['찬양대','/#choirs'],['추천채널','/#channels'],['ABOUT','/about']];
export function Header(){const [open,setOpen]=useState(false); return <header className="site-header"><div className="container nav"><Link href="/" className="brand" onClick={()=>setOpen(false)}><span>찬양과 말씀</span><small>Worship &amp; Message</small></Link><nav className={open?'nav-links open':'nav-links'}>{links.map(([label,href])=><Link key={label} href={href} onClick={()=>setOpen(false)}>{label}</Link>)}</nav><button className="menu-button" onClick={()=>setOpen(!open)} aria-label="메뉴 열기">{open?'×':'☰'}</button></div></header>}
