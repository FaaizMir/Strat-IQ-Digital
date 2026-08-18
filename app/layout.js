import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import PageTransition from "@/components/layout/PageTransition";


export const metadata = {

title:
"Strat IQ Digital — Performance Marketing Agency for Leaders",

description:
"Strat IQ Digital is a performance marketing agency for e-commerce brands built to grow — Amazon PPC, Meta Ads, Google Ads, Shopify development, SEO, creative strategy, and full-service digital growth.",


icons:{
icon:"/images/webflow/699ed6f18aceafc086e38bf3_logo-small.jpg",
apple:"/images/webflow/699ed6f18aceafc086e38aa1_logo.png",
}

};



export default function RootLayout({children}){


return (

<html lang="en">


<head>

<link
href="https://fonts.googleapis.com"
rel="preconnect"
/>


<link
href="https://fonts.gstatic.com"
rel="preconnect"
crossOrigin="anonymous"
/>


<link
href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Funnel+Display:wght@700&family=Caveat:wght@500&display=swap"
rel="stylesheet"
/>


</head>



<body>


<div className="page-overlay-main"></div>



<PageTransition>


<Navbar />


<main>

{children}

</main>


<Footer />


</PageTransition>



</body>


</html>


);

}