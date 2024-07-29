import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

function Service() {
  return (
    <>
<body>
    {/* <!-- FADE OUT ANIMATION WHEN LOADED --> */}
    <span class="fade"></span>
    <main>

        {/* <!-- SUB HERO BANNER START --> */}
        <section class="sub-hero-banner" style={{ backgroundImage: "url('art/hero3.webp')" }}>
            <div class="hero-contained">
                <div class="hero-title fc-white">
                    <h1 class="ff-damion">Lofty Logix | Our Services</h1>
                    <a href="index.html" class="fc-white">
                        Home
                    </a>
                    <i class="bi bi-chevron-right"></i>
                    <a href="#" class="fc-white">
                        Service
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

        {/* <!-- SERVICES START --> */}
        <section class="contained">
            <h2 class="section-title ff-damion">Service</h2>
            <div class="col-wide mlmr-a ta-center">
                <span class="fc-primary fs-h2">
                    Experience top notch, high quality, over the top, range of services.
                </span>
                <p>
                    We are now in space, our service is so high, and top we've reached the ever expanding universe. Here's our range of exceptional services, designed to meet your needs with both quality and affordability in mind. Don't hesitate to experience the difference
                    today. Go ahead, listen to this placeholder text.
                </p>
            </div>

            <div class="row">
                <div class="col-wide">

                    {/* <!-- INDIVIDUAL SERVICES FEATURE START --> */}
                    <img src="art/hero1.webp" class="img-unheight" alt="" id="service-dev"/>
                    <span class="fs-h3 mt-25">Development</span>
                    <p>
                        Some random placeholder text to enhance the appearance of the content. This text serves as an explanation for the service description, akin to 'Lorem Ipsum dolor.' It's used to make the content more visually appealing. Did I mention that I am a placeholder
                        text?
                    </p>
                    <p>
                        The repetition of the same placeholder text can be less visually appealing to readers. Most individuals tend to focus on the first and last few words of a text. Therefore, it's beneficial to use a varied placeholder text to maintain reader engagement,
                        but who's gonna read placeholder anyways.
                    </p>
                    {/* <!-- INDIVIDUAL SERVICES FEATURE END --> */}

                    {/* <!-- INDIVIDUAL SERVICES FEATURE START --> */}
                    <img src="art/hero2.webp" class="img-unheight mt-50" alt="" id="service-data"/>
                    <span class="fs-h3 mt-25">Data Analysis</span>
                    <p>
                        Some random placeholder text to enhance the appearance of the content. This text serves as an explanation for the service description, akin to 'Lorem Ipsum dolor.' It's used to make the content more visually appealing. Did I mention that I am a placeholder
                        text?
                    </p>
                    <p>
                        The repetition of the same placeholder text can be less visually appealing to readers. Most individuals tend to focus on the first and last few words of a text. Therefore, it's beneficial to use a varied placeholder text to maintain reader engagement,
                        but who's gonna read placeholder anyways.
                    </p>
                    {/* <!-- INDIVIDUAL SERVICES FEATURE END --> */}

                    {/* <!-- INDIVIDUAL SERVICES FEATURE START --> */}
                    <img src="art/hero3.webp" class="img-unheight mt-50" alt="" id="service-design"/>
                    <span class="fs-h3 mt-25">Design</span>
                    <p>
                        Some random placeholder text to enhance the appearance of the content. This text serves as an explanation for the service description, akin to 'Lorem Ipsum dolor.' It's used to make the content more visually appealing. Did I mention that I am a placeholder
                        text?
                    </p>
                    <p>
                        The repetition of the same placeholder text can be less visually appealing to readers. Most individuals tend to focus on the first and last few words of a text. Therefore, it's beneficial to use a varied placeholder text to maintain reader engagement,
                        but who's gonna read placeholder anyways.
                    </p>
                    {/* <!-- INDIVIDUAL SERVICES FEATURE END --> */}

                </div>

                {/* <!-- SERVICES SIDE BAR SHORTCUT LINKS START --> */}
                <div class="col-slim order-tab-1">
                    <div class="card-side card-side-navigation">
                        <h3 class="no-margin ff-damion">Services</h3>
                        <hr/>
                        <a href="#service-dev">Development</a>
                        <a href="#service-data">Data Analysis</a>
                        <a href="#service-design">Design</a>
                        <a href="#no-sauce-available">Outsaucing</a>
                    </div>
                </div>
                {/* <!-- SERVICES SIDE BAR SHORTCUT LINKS END --> */}

            </div>
        </section>
        {/* <!-- SERVICES END --> */}
    </main>

    {/* <!-- FOOTER START --> */}
<Footer/>
    {/* <!-- FOOTER END --> */}

</body>

    </>
  )
}

export default Service