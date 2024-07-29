import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

function Blog() {
  return (
    <>
        <body>
    {/* <!--  FADE OUT ANIMATION WHEN LOADED --> */}
    <span class="fade"></span>
    <main>
        {/* <!--  SUB HERO BANNER START --> */}
        <section class="sub-hero-banner" style={{ backgroundImage: "url('../art/overlay.webp')" }}>
            <div class="hero-contained">
                <div class="hero-title fc-white">
                    <h1 class="ff-damion">Web Times | Blogs</h1>
                    <a href="../index.html" class="fc-white">
                        Home
                    </a>
                    <i class="bi bi-chevron-right"></i>
                    <a href="#" class="fc-white">
                        Blogs
                    </a>
                </div>
            </div>
            <div class="hero-socials">
                <a href="https://www.facebook.com/profile.php?id=61558801127010" class="mt-a icon-link" aria-label="Follow us on facebook">
                    <i class="bi bi-facebook"></i>
                </a>
                <a href="#" class="icon-link mt-10" aria-label="Follow us on instagram">
                    <i class="bi bi-instagram"></i>
                </a>
                <a href="#" class="icon-link mt-10" aria-label="Follow us on twitter">
                    <i class="bi bi-twitter"></i>
                </a>
                <a href="#" class="icon-link mt-10" aria-label="Follow us on youtube">
                    <i class="bi bi-youtube"></i>
                </a>
            </div>
        </section>
        {/* <!--  SUB HERO BANNER END --> */}

        {/* <!--  NAVIGATION START --> */}
       <Navbar/>
        <a href="#" class="btn-back-to-top" aria-label="Back to top button">
            <i class="bi bi-chevron-up"></i>
        </a>
        {/* <!--  NAVIGATION END --> */}

        {/* <!--  BLOGS ENTRY START --> */}
        <section class="contained">
            <h2 class="section-title ff-damion">Blogs</h2>
            <p class="ta-center col-wide mlmr-a">
                Stay informed about our blogs, it's highly unlikely that they will stay up to date. This will be the latest blog from 2023 when it's already 2026, feel free to read our outdated blogs.
            </p>
            <div class="row flex-just-center">
                <div class="col-tri">
                    <article class="card-blog">
                        <img src="../art/work1.webp" alt=""/>
                        <div class="info">
                            <h3 class="mt-5 mb-5 ff-damion fc-primary">Duckonomics</h3>
                            <p class="ml-a mt-5">09/26/2023</p>
                        </div>
                        <p class="ml-10 mt-5 mb-20">
                            Duckonomics Meets Quackonomics.
                        </p>
                        <a href="blog-1.html" class="ml-10">
                            Read blog <i class="bi bi-box-arrow-up-right"></i>
                        </a>
                    </article>
                </div>
                <div class="col-tri">
                    <article class="card-blog">
                        <img src="../art/work2.webp" alt=""/>
                        <div class="info">
                            <h3 class="mt-5 mb-5 ff-damion fc-primary">Quackonomics</h3>
                            <p class="ml-a mt-5">09/26/2023</p>
                        </div>
                        <p class="ml-10 mt-5 mb-20">
                            A Duck's Guide to Financial Success.
                        </p>
                        <a href="blog-1.html" class="ml-10">
                            Read blog <i class="bi bi-box-arrow-up-right"></i>
                        </a>
                    </article>
                </div>
                <div class="col-tri">
                    <article class="card-blog">
                        <img src="../art/work3.webp" alt=""/>
                        <div class="info">
                            <h3 class="mt-5 mb-5 ff-damion fc-primary">Galactic Gastronomy</h3>
                            <p class="ml-a mt-5">09/26/2023</p>
                        </div>
                        <p class="ml-10 mt-5 mb-20">
                            Toasting with the Stars.
                        </p>
                        <a href="blog-1.html" class="ml-10">
                            Read blog <i class="bi bi-box-arrow-up-right"></i>
                        </a>
                    </article>
                </div>
            </div>
        </section>
        {/* <!--  BLOGS ENTRY END --> */}

        <section class="subscribe bg-primary-foot" style={{ backgroundImage: "url('../art/overlay.webp')" }}>
            <div class="contained row ta-center">
                <div class="col-balance fc-white">
                    <h3 class="mb-a ff-damion mt-a">Subscribe to our newsletter:</h3>
                </div>
                <div class="col-balance">
                    <form action="#">
                        <input type="email" id="subscribe-email" aria-label="Subscribe to our email news" placeholder="Email" required/>
                        <button class="btn-bg2">Subscribe</button>
                    </form>
                </div>
            </div>
        </section>

    </main>

    {/* <!--  FOOTER START --> */}
    <footer class="fc-white">
        <div class="contained row flex-just-center">

            {/* <!--  FOOTER WEBSITE MOTO START --> */}
            <div class="col-quad">
                <h3 class="ff-damion"><span style={{color:"red"}}>Web</span> <span> Times</span></h3>
                <p>
                    At Webstimes, we are dedicated to delivering innovative digital solutions tailored to your needs. Specializing in web and mobile development, SEO optimization, and UI/UX design, we prioritize excellence and client satisfaction.
                </p>

            </div>
            {/* <!--  FOOTER WEBSITE MOTO END --> */}

            {/* <!--  FOOTER QUICK CONTACT START --> */}
            <div class="col-quad">
                <h3 class="ff-damion">Get in touch</h3>
                <a href="#" class="display-block fc-white icon-link mt-10 mb-10">
                    <i class="bi bi-envelope-fill"></i>
                    webtimes.co.uk@gmail.com
                </a>
                <a href="#" class="display-block fc-white icon-link mt-10 mb-10">
                    <i class="bi bi-telephone-fill"></i>
                    07933898586
                </a>

                <a href="https://www.facebook.com/profile.php?id=61558801127010" class="display-inblock fc-white icon-link mt-20" aria-label="Follow on facebook">
                    <i class="bi bi-facebook"></i>
                </a>
                <a href="#" class="display-inblock fc-white icon-link" aria-label="Follow on instagram">
                    <i class="bi bi-instagram"></i>
                </a>
                <a href="#" class="display-inblock fc-white icon-link" aria-label="Follow on twitter">
                    <i class="bi bi-twitter"></i>
                </a>
                <a href="#" class="display-inblock fc-white icon-link" aria-label="Follow on youtube">
                    <i class="bi bi-youtube"></i>
                </a>
            </div>
            {/* <!--  FOOTER QUICK CONTACT END --> */}

            {/* <!--  FOOTER SCHEDULE START --> */}
            <div class="col-quad">
                <h3 class="ff-damion">Opening hours</h3>
                <p class="mt-10 mb-10 fw-bold">
                    Saturday - Sunday:
                    <span class="fw-normal display-block">Closed</span>
                </p>

            </div>
            {/* <!--  FOOTER SCHEDULE END --> */}

            {/* <!--  FOOTER USEFUL LINKS START --> */}
            <div class="col-quad">
                <h3 class="ff-damion">Useful Links</h3>
                <a href="index.html" class="display-block fc-white mt-5 mb-5">
                    <i class="bi bi-chevron-compact-right"></i>
                    Home
                </a>
                <a href="about.html" class="display-block fc-white mt-5 mb-5">
                    <i class="bi bi-chevron-compact-right"></i>
                    About
                </a>
                <a href="service.html" class="display-block fc-white mt-5 mb-5">
                    <i class="bi bi-chevron-compact-right"></i>
                    Service
                </a>
                <a href="industries.html" class="display-block fc-white mt-5 mb-5">
                    <i class="bi bi-chevron-compact-right"></i>
                    Industries
                </a> 
                <a href="blog/blog.html" class="display-block fc-white mt-5 mb-5">
                    <i class="bi bi-chevron-compact-right"></i>
                    Blog
                </a>
                <a href="career/career.html" class="display-block fc-white mt-5 mb-5">
                    <i class="bi bi-chevron-compact-right"></i>
                    Career
                </a>
                <a href="contact.html" class="display-block fc-white mt-5 mb-5">
                    <i class="bi bi-chevron-compact-right"></i>
                    Contact
                </a>
            </div>
            {/* <!--  FOOTER USEFUL LINKS END --> */}

        </div>
        <div class="copy ta-center fc-white">
            <small>&copy; Designed by WebTimes 2024. ©</small>
        </div>
    </footer>
    {/* <!--  FOOTER END --> */}
</body>

        <Footer/>
    </>
  )
}

export default Blog