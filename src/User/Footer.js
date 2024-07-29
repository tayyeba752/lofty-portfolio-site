import React from 'react'

function Footer() {
  return (
    <>
            <footer class="fc-white">
        <div class="contained row flex-just-center">

            {/* <!-- FOOTER WEBSITE MOTO START --> */}
            <div class="col-quad">
                <h3 class="ff-damion"><span style={{color:"red"}}>Lofty</span> <span>Logix </span></h3>
                <p>
                    At LoftyLogix, we are dedicated to delivering innovative digital solutions tailored to your needs. Specializing in web and mobile development, SEO optimization, and UI/UX design, we prioritize excellence and client satisfaction.
                </p>

            </div>
            {/* <!-- FOOTER WEBSITE MOTO END --> */}

            {/* <!-- FOOTER QUICK CONTACT START --> */}
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
            {/* <!-- FOOTER QUICK CONTACT END --> */}

            {/* <!-- FOOTER SCHEDULE START --> */}
            <div class="col-quad">
                <h3 class="ff-damion">Opening hours</h3>
                <p class="mt-10 mb-10 fw-bold">
                    Saturday - Sunday:
                    <span class="fw-normal display-block">Closed</span>
                </p>

            </div>
            {/* <!-- FOOTER SCHEDULE END --> */}

            {/* <!-- FOOTER USEFUL LINKS START --> */}
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
            {/* <!-- FOOTER USEFUL LINKS END --> */}

        </div>
        <div class="copy ta-center fc-white">
            <small>&copy; Designed by LoftyLogix 2024. ©</small>
        </div>
    </footer>
    </>
  )
}

export default Footer