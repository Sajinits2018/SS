
"use client";
import React, { useEffect } from "react";
import { ContentZone } from "@agility/nextjs";
import Head from "next/head";
import Script from "next/script";
import { getModule } from "../agility-components";

/**
 * WorkupTemplate wraps the page in the Workup HTML theme header/footer and exposes the MainContentZone for modules.
 * Assets are served from /workup/assets.
 */
const WorkupTemplate = (props: any) => {
  useEffect(() => {
    // Any runtime JS that the theme expects can be loaded here if needed
  }, []);

  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <link href="/workup/assets/css/style-starter.css" rel="stylesheet" />
      </Head>
      <div dangerouslySetInnerHTML={{ __html: `<header class="fixed-top" id="site-header">
<div class="container">
<nav class="navbar navbar-expand-lg navbar-light">
<a class="navbar-brand" href="index.html">
<i class="fab fa-wikipedia-w"></i>orkup
                </a>
<button aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler collapsed" data-bs-target="#navbarScroll" data-bs-toggle="collapse" type="button">
<span class="navbar-toggler-icon fa icon-expand fa-bars"></span>
<span class="navbar-toggler-icon fa icon-close fa-times"></span>
</button>
<div class="collapse navbar-collapse" id="navbarScroll">
<ul class="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll">
<li class="nav-item">
<a aria-current="page" class="nav-link active" href="index.html">Home</a>
</li>
<li class="nav-item">
<a class="nav-link" href="about.html">About</a>
</li>
<li class="nav-item">
<a class="nav-link" href="services.html">Services</a>
</li>
<li class="nav-item">
<a class="nav-link" href="contact.html">Contact</a>
</li>
</ul>
<form action="#search" class="d-flex search-header ms-lg-2" method="GET">
<input aria-label="Search" class="form-control" placeholder="Enter Keyword..." required="" type="search"/>
<button class="btn btn-style" type="submit"><i class="fas fa-search"></i></button>
</form>
</div>
<!-- toggle switch for light and dark theme -->
<div class="cont-ser-position">
<nav class="navigation">
<div class="theme-switch-wrapper">
<label class="theme-switch" for="checkbox">
<input id="checkbox" type="checkbox"/>
<div class="mode-container">
<i class="gg-sun"></i>
<i class="gg-moon"></i>
</div>
</label>
</div>
</nav>
</div>
<!-- //toggle switch for light and dark theme -->
</nav>
</div>
</header>` }} />

      {/* Agility Content Zone */}
      <main id="agility-main">
        <ContentZone name="MainContentZone" {...props} getModule={{ getModule }} />
      </main>

      <div dangerouslySetInnerHTML={{ __html: `<footer class="w3l-footer py-5">
<div class="container pt-4">
<div class="row">
<div class="col-lg-4 sub-one-left">
<h6>About </h6>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa officia dicta magni ea
                        at, culpa atque, rerum dolorum voluptas alias
                        qui temporibus ex totam distinctio nobis impedit minus rerum,
                        nihil blan ditiis quos atque.</p>
<ul class="social mt-4 pt-lg-1">
<li><a href="#facebook"><span class="fab fa-facebook-f"></span></a></li>
<li><a href="#twitter"><span class="fab fa-twitter"></span></a></li>
<li><a href="#linkedin"><span class="fab fa-linkedin-in"></span></a></li>
<li><a href="#google-plus"><span class="fab fa-google-plus-g"></span></a></li>
<li><a href="#instagram"><span class="fab fa-instagram"></span></a></li>
</ul>
</div>
<div class="col-lg-5 col-md-6 mt-lg-0 mt-5 px-lg-5 sub-two-right">
<h6>Recent Posts</h6>
<div class="footer-post">
<ul>
<li><a href="#post">Suzan Lois</a></li>
<li class="mx-2"><a href="#post">- Nov. 21 - </a></li>
<li><a href="#post">3 comments</a></li>
</ul>
<p class="post-footer"><a href="#post">Delivering New Customer Experiences with Workup.</a></p>
</div>
<div class="footer-post mt-4">
<ul>
<li><a href="#post">Rose Alha</a></li>
<li class="mx-2"><a href="#post">- Nov. 21 - </a></li>
<li><a href="#post">3 comments</a></li>
</ul>
<p class="post-footer"><a href="#post">Discussing the current trends in the share market.</a>
</p>
</div>
</div>
<div class="col-lg-3 col-md-6 mt-lg-0 mt-5 sub-one-left">
<h6>Contact </h6>
<div class="column2">
<div class="href1"><span class="fas fa-envelope-open"></span><a href="mailto:info@example.com">info@example.com</a>
</div>
<div class="href2 my-3"><span class="fas fa-phone-alt"></span><a href="tel:+44-123-456-78">+44-123-456-78</a>
</div>
<div>
<p class="contact-para mb-3"><span class="fas fa-map-marker-alt"></span>New York,
                                235 Lane, 10001</p>
</div>
<div>
<p class="contact-para"><span class="fas fa-clock"></span>Office Hours: 9AM - 7PM</p>
</div>
</div>
</div>
</div>
<div class="copyright-footer text-center mt-5 pt-sm-4 pt-2">
<p>© 2021 Workup. All rights reserved | Design by <a href="https://w3layouts.com/">W3Layouts</a>
</p>
</div>
</div>
</footer>` }} />

      {/* Load any theme scripts if present */}
      <Script src="/workup/assets/js/bootstrap.min.js" strategy="afterInteractive" />
      <Script src="/workup/assets/js/theme-change.js" strategy="afterInteractive" />
    </>
  );
};

export default WorkupTemplate;
