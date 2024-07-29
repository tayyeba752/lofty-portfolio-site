import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

function Contact() {
  return (
    <>

<body>
    {/* <!-- FADE OUT ANIMATION WHEN LOADED --> */}
    <span class="fade"></span>
    <main>
        {/* <!-- SUB HERO BANNER START --> */}
        <section class="sub-hero-banner" style={{ backgroundImage: "url('art/hero2.webp')" }}>
            <div class="hero-contained">
                <div class="hero-title fc-white">
                    <h1 class="ff-damion">Lofty Logix | Contact us</h1>
                    <a href="index.html" class="fc-white">
                        Home
                    </a>
                    <i class="bi bi-chevron-right"></i>
                    <a href="#" class="fc-white">
                        Contact Us
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
        {/* <!-- SUB HERO BANNER END --> */}

        {/* <!-- NAVIGATION START --> */}
        <Navbar/>
        <a href="#" class="btn-back-to-top" aria-label="Back to top button">
            <i class="bi bi-chevron-up"></i>
        </a>
        {/* <!-- NAVIGATION END --> */}

        <section class="contained">
            <h2 class="section-title ff-damion">Get in touch</h2>
            <p class="col-wide ta-center mlmr-a">
                Some text that would compel the user to contact you if what the user have seen across the page wasn't not enough, ofcourse you want as many potential clients as possible.
            </p>
            <div class="row">
                {/* <!-- EMBEDED MAP IFRAME START --> */}
                <div class="col-balance map-embed">
                    <iframe title="google-map" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d19322.285259129047!2d120.99987802650303!3d14.552866669559348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sph!4v1695727112385!5m2!1sen!2sph" width="600" height="450"
                        style={{ border: '0' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                {/* <!-- EMBEDED MAP IFRAME END --> */}

                {/* <!-- CONTACT INFO START --> */}
                <div class="col-balance">
                    <span class="fs-h4 mb-15 mt-25 fc-primary">Where to go:</span>
                    <a href="#" class="display-inblock">
                        <i class="bi bi-geo-alt-fill"></i>
                        20th street, Dreamland
                    </a>

                    <span class="fs-h4 mb-15 mt-25 fc-primary">Say hello:</span>
                    <a href="#" class="display-inblock">
                        <i class="bi bi-envelope-fill"></i>
                        nonexistentadd@gmail.com
                    </a>
                    <a href="#" class="display-inblock">
                        <i class="bi bi-telephone-fill"></i>
                        +639123456789
                    </a>

                    <span class="fs-h4 mb-15 mt-25 fc-primary">Follow:</span>
                    <a href="#" class="display-inblock mr-10">
                        <i class="bi bi-facebook"></i>
                        Facebook
                    </a>
                    <a href="#" class="display-inblock mr-10">
                        <i class="bi bi-instagram"></i>
                        Instagram
                    </a>
                    <a href="#" class="display-inblock mr-10">
                        <i class="bi bi-twitter"></i>
                        Twitter
                    </a>
                    <a href="#" class="display-inblock mr-10">
                        <i class="bi bi-youtube"></i>
                        Youtube
                    </a>

                    <form action="#" class="message-form mt-50 mb-25">
                        <span class="fs-h4 fc-primary mb-15">Send us a message</span>
                        <div class="row mb-20">
                            <input type="text" id="message-name" placeholder="Your name" aria-label="Input for your name" required/>
                            <input type="email" class="ml-a" id="message-email" placeholder="Your email" aria-label="Input for email" required/>
                        </div>
                        <input type="text" id="message-subject" aria-label="Input for your message subject" class="mb-20" placeholder="Subject"/>
                        <textarea id="message-message" rows="5" placeholder="Write a message" aria-label="Input for writing message"></textarea>
                        <button type="submit" class="btn-bg1 border-round mt-20">Send message</button>
                    </form>
                </div>
                {/* <!-- CONTACT INFO END --> */}

            </div>
        </section>

    </main>

    {/* <!-- FOOTER START --> */}
<Footer/>
    {/* <!-- FOOTER END --> */}

</body>

    </>
  )
}

export default Contact