"use client";



import Link from "next/link";

import Image from "next/image";

import { useState } from "react";

import { services, mainNavLinks } from "@/data/services";



export default function Navbar() {

const [menuOpen, setMenuOpen] = useState(false);

const [mobileServicesOpen, setMobileServicesOpen] = useState(false);



return (

<div className="navigation-top">

<div className="navbar w-nav" role="banner">

<Link href="/" className="logo-first w-inline-block">

<Image

className="logo"

src="/images/uploads/Strat-Logo-New-01-1-scaled.png"

alt="StratIQ Logo"

width={160}

height={40}

priority

/>

</Link>



<div className="make-grid hide-mobile">

<nav role="navigation" className="nav-menu first w-nav-menu">

<div className="nav-services-wrapper">

<Link href="/services" className="button-link w-inline-block">

<div className="button-flex">

<div className="text-overflow">

<div className="navigation-text-main _01">Services</div>

<div className="navigation-text-main _02">Services</div>

</div>

<div className="line-divider">

<div className="line-absolute"></div>

</div>

</div>

</Link>

<div className="services-dropdown">

<div className="services-dropdown-inner">

{services.map((s) => (

<Link key={s.slug} href={s.href} className="services-dropdown-item">

{s.label}

</Link>

))}

</div>

</div>

</div>



{mainNavLinks.map((link) => (

<Link key={link.href} href={link.href} className="button-link w-inline-block">

<div className="button-flex">

<div className="text-overflow">

<div className="navigation-text-main _01">{link.label}</div>

<div className="navigation-text-main _02">{link.label}</div>

</div>

<div className="line-divider">

<div className="line-absolute"></div>

</div>

</div>

</Link>

))}

</nav>

</div>



<div className="last-part">

<div className="last-item">

<div className="hamburger-flex" onClick={() => setMenuOpen((v) => !v)}>

<div className="hamburger-text">

<div className="text-small-menu">{menuOpen ? "Close" : "Menu"}</div>

</div>

<div className="hamburger-wrapper">

<div className="hamburger-line _01"></div>

<div className="hamburger-line _02"></div>

</div>

</div>

</div>

</div>



<div className={`fixed-menu${menuOpen ? " open-active" : ""}`}>

<div className="navbar-wrapper">

<div className="navbar-skew-fixed">

<div className="navbar-skew-wrapper">

<div className="skew-line-div"></div>

</div>

</div>

<div className="navigation-content">

<div className="menu-big-first">

<a

href="#"

className="button-big-menu w-inline-block"

onClick={(e) => {

e.preventDefault();

setMobileServicesOpen((v) => !v);

}}

>

<div className="button-big-flex">

<Image

width={18}

height={18}

alt=""

src="/images/webflow/699f89c49271389efbdafdbc_arrows.png"

className="button-big-arrow"

/>

<div className="big-text-btn">Services</div>

<div className="number-small-btn">

<div className="number-small-big-menu">01</div>

</div>

</div>

</a>



<div className={`mobile-sub-services-panel${mobileServicesOpen ? " is-active" : ""}`}>

{services.map((s) => (

<Link key={s.slug} href={s.href} className="mobile-sub-services-link" onClick={() => setMenuOpen(false)}>

{s.label}

</Link>

))}

</div>



{mainNavLinks.map((link, i) => (

<Link

key={link.href}

href={link.href}

className="button-big-menu w-inline-block"

onClick={() => setMenuOpen(false)}

>

<div className="button-big-flex">

<Image

width={18}

height={18}

alt=""

src="/images/webflow/699f89c49271389efbdafdbc_arrows.png"

className="button-big-arrow"

/>

<div className="big-text-btn">{link.label}</div>

<div className="number-small-btn">

<div className="number-small-big-menu">{String(i + 2).padStart(2, "0")}</div>

</div>

</div>

</Link>

))}

</div>



<div className="menu-big-second">

<div className="social-flex">

<a href="https://instragram.com/" className="social-icon w-inline-block" target="_blank" rel="noopener noreferrer">

<Image width={20} height={20} alt="" src="/images/webflow/69a04f1ac43e5c7beedc0f7e_insta.webp" className="social-image" />

</a>

<a href="https://x.com/" className="social-icon w-inline-block" target="_blank" rel="noopener noreferrer">

<Image width={20} height={20} alt="" src="/images/webflow/69a04f1ad0d6334fead72ae2_x.webp" className="social-image" />

</a>

<a href="https://linkedin.com/" className="social-icon w-inline-block" target="_blank" rel="noopener noreferrer">

<Image width={20} height={20} alt="" src="/images/webflow/69a04f1a7e0ba6af281734f3_li.webp" className="social-image" />

</a>

</div>

<div className="divider-xs"></div>

<div className="copywrith-dark">

<div>© 2026 Strat IQ Digital</div>

</div>

</div>

</div>

</div>

</div>

</div>

</div>

);

}