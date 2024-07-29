import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

function Career() {
  return (
    <>

<body>

    <span class="fade"></span>
    <main>
        {/* <!--SUB HERO BANNER START --> */}
        <section class="sub-hero-banner"  style={{ backgroundImage: "url('../art/overlay.webp')" }}>
            <div class="hero-contained">
                <div class="hero-title fc-white">
                    <h1 class="ff-damion">Web Times | Careers</h1>
                    <a href="../index.html" class="fc-white">
                        Home
                    </a>
                    <i class="bi bi-chevron-right"></i>
                    <a href="#" class="fc-white">
                        Careers
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
        {/* <!--SUB HERO BANNER END --> */}

        {/* <!--NAVIGATION START --> */}
        <Navbar/>
        <a href="#" class="btn-back-to-top" aria-label="Back to top button">
            <i class="bi bi-chevron-up"></i>
        </a>
        {/* <!--NAVIGATION START --> */}

        <section class="contained">
            <h2 class="section-title ff-damion">Careers</h2>
            <p class="ta-center col-wide mlmr-a">
                Are you passionate about driving digital innovation and shaping the future of technology? At Webstimes, we're always on the lookout for talented individuals to join our dynamic team. Whether you're a seasoned developer, a creative designer, or a strategic
                thinker, we offer exciting career opportunities in web and mobile development, SEO optimization, UI/UX design, and more. Join us in our mission to empower businesses and individuals to thrive in the digital age. Explore our current openings
                and take the next step in your career with Webstimes.
            </p>
            {/* <!--<div class="row flex-just-center">
                <div class="col-tri">
                    <div class="card-career">
                        <span class="fs-h4 mb-5 mt-15">Web designer - Entry Level</span>
                        <p>
                            <i class="bi bi-calendar"></i>
                            09/26/23
                        </p>
                        <p>
                            <i class="bi bi-geo-alt"></i>
                            Philippines - NCR
                        </p>
                        <p>
                            <i class="bi bi-briefcase"></i>
                            Min 3 years of experience lol!
                        </p>
                        <hr>
                        <div class="ta-center mt-15">
                            <a href="career-1.html" class="btn-bg1">Apply now</a>
                        </div>
                    </div>
                </div>
                <div class="col-tri">
                    <div class="card-career">
                        <span class="fs-h4 mb-5 mt-15">Jr Data Analyst</span>
                        <p>
                            <i class="bi bi-calendar"></i>
                            09/26/23
                        </p>
                        <p>
                            <i class="bi bi-geo-alt"></i>
                            Philippines - NCR
                        </p>
                        <p>
                            <i class="bi bi-briefcase"></i>
                            Min 5 years of experience lol!
                        </p>
                        <hr>
                        <div class="ta-center mt-15">
                            <a href="career-1.html" class="btn-bg1">Apply now</a>
                        </div>
                    </div>
                </div>
                <div class="col-tri">
                    <div class="card-career">
                        <span class="fs-h4 mb-5 mt-15">Web developer - Entry Level</span>
                        <p>
                            <i class="bi bi-calendar"></i>
                            09/26/23
                        </p>
                        <p>
                            <i class="bi bi-geo-alt"></i>
                            Philippines - NCR
                        </p>
                        <p>
                            <i class="bi bi-briefcase"></i>
                            Min 3 years of experience lol!
                        </p>
                        <hr>
                        <div class="ta-center mt-15">
                            <a href="career-1.html" class="btn-bg1">Apply now</a>
                        </div>
                    </div>
                </div>
            </div> --> */}
        </section>

    </main>

    {/* <!--FOOTER START --> */}
<Footer/>
    {/* <!--FOOTER END --> */}

</body>

    </>
  )
}

export default Career