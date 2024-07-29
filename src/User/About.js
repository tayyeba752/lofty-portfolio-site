import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

function About() {
  return (
    <>


<body>
    {/* <!-- FADE OUT ANIMATION WHEN LOADED --> */}
    <span class="fade"></span>
    <main>
        {/* <!-- SUB HERO BANNER START --> */}
        <section class="sub-hero-banner" style={{ backgroundImage: "url('art/hero1.webp')" }}>
            <div class="hero-contained">
                <div class="hero-title fc-white">
                    <h1 class="ff-damion">Lofty Logix| About Us</h1>
                    <a href="index.html" class="fc-white">
                        Home
                    </a>
                    <i class="bi bi-chevron-right"></i>
                    <a href="#" class="fc-white">
                        About Us
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

        <section class="contained row">
            <div class="col-balance">
                <h2 class="section-title ff-damion">About us</h2>
                <span class="fc-primary fs-h2">
                    LoftyLogix is dedicated to digital excellence. Specializing in web and mobile solutions, SEO optimization, and UI/UX design, we exceed expectations to empower businesses in the digital realm.
                </span>
                <p>
                    Our journey is guided by a relentless pursuit of innovation, pushing the boundaries of what's possible in the digital realm. We believe in the power of technology to transform businesses and empower individuals, and we strive to harness this power to
                    drive meaningful results for our clients.
                </p>
                <p>
                    At LoftyLogix, our team of experts brings together a wealth of experience and expertise, collaborating seamlessly to deliver solutions that exceed expectations. From concept to execution, we work closely with our clients to understand their goals and
                    objectives, ensuring every project is aligned with their vision for success.
                </p>
                <p>
                    With a focus on continuous improvement and staying ahead of the curve, we are constantly exploring new technologies and methodologies to enhance our offerings and deliver even greater value to our clients. Whether you're looking to launch a new digital
                    venture or elevate your existing online presence, LoftyLogix is your trusted partner for digital transformation.
                </p>

            </div>
            <div class="col-balance">
                <div class="sticky-img-dual">
                    <img src="art/hero1.webp" alt=""/>
                    <img src="svg/blob.svg" alt="" class="blob"/>
                    <img src="art/hero2.webp" alt=""/>
                </div>
            </div>
            <div class="sticky-img-dual-spacer"></div>


            <div class="col-balance">
                <div class="sticky-img-dual">
                    <img src="art/hero1.webp" alt=""/>
                    <img src="svg/blob.svg" alt="" class="blob"/>
                    <img src="art/hero2.webp" alt=""/>
                </div>
            </div>
            <div class="col-balance">
                <h2 class="section-title ff-damion">About us</h2>
                <span class="fc-primary fs-h2">
                    Specializing in web and mobile development, SEO, and UI/UX design, we tailor innovative solutions for your success. With a focus on excellence, we empower businesses to thrive in the digital age.
                </span>
                <p>
                    With a rich tapestry of experience and expertise, our team of seasoned professionals possesses a deep understanding of the intricacies of the digital landscape. We leverage this knowledge to craft bespoke strategies that resonate with our clients' objectives
                    and drive tangible results.
                </p>
                <p>
                    In the realm of web and mobile development, we pride ourselves on our ability to conceptualize, design, and deploy dynamic and intuitive applications that engage users and drive conversions. Whether it's building responsive websites or developing feature-rich
                    mobile apps, we harness the power of modern technologies and frameworks to bring our clients' visions to life.
                </p>
                <p>
                    In essence, LoftyLogix is more than just a digital solutions provider – we are your trusted partner in elevating digital excellence and achieving sustained success in the digital age.
                </p>

            </div>
            <div class="sticky-img-dual-spacer"></div>
        </section>

        {/* <!-- <section class="contained">
            <h2 class="section-title ff-damion">Our team</h2>
            <p class="col-wide mlmr-a ta-center">
                Comprising experts in web/mobile development, SEO, and UI/UX.
                Passionate about delivering tailored digital solutions.
                Committed to empowering your success in the digital realm.
            </p>
            <div class="row flex-just-center">
                <div class="col-tri">
                    <article class="card-team">
                        <img src="art/team.webp" alt="">
                        <h3 class="title ff-damion">Johnny Doe</h3>
                        <div class="info">
                            <h3 class="ff-damion">Frontend Developer</h3>
                            <p>
                                Our team at Webstimes boasts top-tier frontend developers renowned for their exceptional skills and dedication. With a deep understanding of modern frameworks and tools, they excel in crafting intuitive and visually appealing user interfaces. 
                            </p>
                            <p>
                                Their relentless pursuit of excellence ensures that every project they undertake exceeds expectations, delivering unparalleled results. When you partner with Webstimes, you're guaranteed access to the best frontend developers in the industry, ready to elevate your digital presence to new heights
                            </p>
                        </div>
                    </article>
                </div>
                <div class="col-tri">
                    <article class="card-team">
                        <img src="art/team.webp" alt="">
                        <h3 class="title ff-damion">Johnny Doe</h3>
                        <div class="info">
                            <h3 class="ff-damion">SEO</h3>
                            <p>
                                At Webstimes, we pride ourselves on having the best SEO experts in the industry. Our team is highly skilled in implementing advanced optimization strategies to enhance online visibility and improve search engine rankings. With a meticulous approach to keyword research, 
                            </p>
                            <p>
                                on-page and off-page optimization, and content creation, we ensure that your website stands out in search engine results. Trust us to maximize your digital presence and drive organic traffic to your site, delivering measurable results that propel your business forward.
                            </p>
                        </div>
                    </article>
                </div>
                <div class="col-tri">
                    <article class="card-team">
                        <img src="art/team.webp" alt="">
                        <h3 class="title ff-damion">Johnny Doe  </h3>
                        <div class="info">
                            <h3 class="ff-damion">Backend Developer</h3>
                            <p>
                                At Webstimes, we're home to the finest backend developers in the field. With unparalleled expertise in backend technologies and frameworks, our team excels in architecting robust, scalable, and efficient systems. From database design to server-side logic, 
                            </p>
                            <p>
                                our developers possess a deep understanding of complex backend operations. They're adept at solving intricate technical challenges and delivering high-performance solutions that power your applications seamlessly. Partner with Webstimes for access to top-tier backend developers who ensure the foundation of your digital projects is nothing short of exceptional
                            </p>
                        </div>
                    </article>
                </div>
            </div>
            <br>
        </section> --> */}

    </main>


    {/* <!-- FOOTER END --> */}

</body>


    </>
  )
}

export default About