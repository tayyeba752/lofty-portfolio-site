import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const Home=()=> {
  return (
    <body>
    <span class="fade"></span>
    <main>
        {/* <!-- MAIN HERO BANNER START --> */}
        <section class="hero-banner">
            <div class="hero-contained">
                <div class="hero-title fc-white">
                <h1 className="ff-damion" style={{ fontSize: "60px", marginBottom: "10px" }}>
  <span style={{ color: "#da1d1d" }}>Lofty</span> Logix
</h1>
<p className="fs-h4 fw-normal" style={{ marginTop: "10px" }}>
  Our company specializes in developing web and mobile applications using modern frameworks and technologies. We excel in SEO optimization and UI/UX design.
</p>

                    <a href="#about" class="btn-bg2 border-round mt-20">
                        Learn More <i class="bi bi-chevron-compact-right"></i>
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
        {/* <!-- MAIN HERO BANNER END --> */}

        {/* <!-- NAVIGATION START --> */}
      <Navbar/>
        <a href="#" class="btn-back-to-top" aria-label="Back to top button">
            <i class="bi bi-chevron-up"></i>
        </a>
        {/* <!-- NAVIGATION END --> */}

        {/* <!-- ABOUT SECTION START --> */}
        <section class="contained row" id="about">
            <h2 class="section-title ff-damion">About us</h2>
            <div class="col-balance">
                <span class="fc-primary fs-h2">
                    Revolutionizing the digital landscape with innovative solutions.
Specializing in bespoke web and mobile applications. Committed to excellence.
                </span> Welcome to Lofty Logix! We are a dynamic team of professionals dedicated to delivering top-notch digital marketing, IT solutions, and customer care services. Our mission is to empower businesses with innovative strategies, cutting-edge technology, and exceptional support to drive growth and success. Whether you need to enhance your online presence, streamline your IT operations, or provide unparalleled customer service, Lofty Logix is here to partner with you every step of the way. <br/><br/> Let us help you achieve your goals and take your business to new heights!<br/>
                
                <a href="about.html" class="btn-bg1 mt-25 border-round">Find Out More</a>
            </div>
            <div class="col-balance">
                <div class="sticky-img-dual">
                    <img src="art/hero1.webp" alt=""/>
                    <img src="svg/blob.svg" alt="" class="blob"/>
                    <img src="art/hero2.webp" alt=""/>
                </div>
            </div>
            <div class="sticky-img-dual-spacer"></div>
        </section>
        {/* <!-- ABOUT SECTION END --> */}

        {/* <!-- TEAM SECTION START --> */}
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
        {/* <!-- TEAM SECTION END --> */}

        {/* <!-- PREVIEW SERVICE SECTION START --> */}
        <section class="bg-primary-foot ta-center">
            <h2 class="section-title ff-damion bg-primary-foot">Service</h2>
            <div class="contained">
                <p class="col-wide mlmr-a">
                    At Lofty Logix, we specialize in web and mobile development, SEO optimization, and UI/UX design. Our tailored solutions ensure optimal digital presence and user experience. Plus, we offer special discounts for final year project students, fostering
                    innovation.
                </p>
            </div>
            <div class="contained row flex-just-center">
                <div class="col-full">
                    <hr/>
                </div>
                <div class="col-tri">
                    <i class="bi bi-stars fs-h2"></i>
                    <h3 class="mt-10 ff-damion">Web designing</h3>
                    <p>
                    Our digital marketing services are designed to boost your online presence and drive targeted traffic to your business. From SEO and content marketing to social media and PPC campaigns, we tailor strategies to achieve your specific goals.

                    </p>
                </div>
                <div class="col-tri">
                    <i class="bi bi-diagram-3 fs-h2"></i>
                    <h3 class="mt-10 ff-damion">Digital Marketing</h3>
                    <p>
                    Our digital marketing services are designed to boost your online presence and drive targeted traffic to your business. From SEO and content marketing to social media and PPC campaigns, we tailor strategies to achieve your specific goals.
                    </p>
                </div>
                <div class="col-tri">
                    <i class="bi bi-code-slash fs-h2"></i>
                    <h3 class="mt-10 ff-damion">Customer Support</h3>
                    <p>
                    We offer comprehensive customer support services to ensure your clients receive prompt and effective assistance. Our dedicated team is available around the clock to resolve issues, answer questions, and enhance customer satisfaction.

                    </p>
                </div>
                <div class="col-tri">
                    <i class="bi bi-code-slash fs-h2"></i>
                    <h3 class="mt-10 ff-damion">Tech Solutions</h3>
                    <p>
                    Our tech solutions encompass a wide range of IT services to streamline your business operations. From network management and cybersecurity to cloud computing and software development, we provide innovative solutions to meet your technological needs.
                    </p>
                </div>

                <div class="col-tri">
                    <i class="bi bi-code-slash fs-h2"></i>
                    <h3 class="mt-10 ff-damion">Saas (Software as a Service)</h3>
                    <p>
                    Our SaaS offerings provide scalable and cost-effective software solutions that can be accessed from anywhere. Whether you need CRM systems, project management tools, or custom applications, we deliver reliable and efficient software tailored to your business.
                    </p>
                </div>
            </div>
            <a href="service.html" class="btn-bg2 border-round mt-25">
                View our services
            </a>
        </section>
        {/* <!-- PREVIEW SERVICE SECTION END --> */}

        {/* <!-- PREVIEW BLOGS SECTION START --> */}
        <section class="contained">
            <h2 class="section-title ff-damion">Projects</h2>
            <p class="ta-center col-wide mlmr-a">
                Explore our diverse portfolio spanning web, mobile, SEO, and UI/UX design. See how we exceed expectations and drive success for your business
            </p>
            <div class="row flex-just-center">
                <div class="col-tri">
                    <article class="card-blog">
                        <img src="https://ik.imagekit.io/b6iqka2sz/mobi8le.png?updatedAt=1716665990052" alt=""/>
                        <div class="info">
                            <h3 class="mt-5 mb-5 ff-damion fc-primary">Duckonomics</h3>
                            <p class="ml-a mt-5">09/26/2023</p>
                        </div>
                        <p class="ml-10 mt-5 mb-20">
                            Duckonomics Meets Quackonomics.
                        </p>
                        <a href="blog/blog-1.html" class="ml-10">
                            Read blog <i class="bi bi-box-arrow-up-right"></i>
                        </a>
                    </article>
                </div>
                <div class="col-tri">
                    <article class="card-blog">
                        <img src="https://ik.imagekit.io/b6iqka2sz/Screenshot%202024-05-26%20004048.png?updatedAt=1716666267718" alt=""/>
                        <div class="info">
                            <h3 class="mt-5 mb-5 ff-damion fc-primary">Quackonomics</h3>
                            <p class="ml-a mt-5">09/26/2023</p>
                        </div>
                        <p class="ml-10 mt-5 mb-20">
                            A Duck's Guide to Financial Success.
                        </p>
                        <a href="blog/blog-1.html" class="ml-10">
                            Read blog <i class="bi bi-box-arrow-up-right"></i>
                        </a>
                    </article>
                </div>
                <div class="col-tri">
                    <article class="card-blog">
                        <img src="https://ik.imagekit.io/b6iqka2sz/Screenshot%202024-05-26%20005022.png?updatedAt=1716666698776" alt=""/>
                        <div class="info">
                            <h3 class="mt-5 mb-5 ff-damion fc-primary">Galactic Gastronomy</h3>
                            <p class="ml-a mt-5">09/26/2023</p>
                        </div>
                        <p class="ml-10 mt-5 mb-20">
                            Toasting with the Stars.
                        </p>
                        <a href="blog/blog-1.html" class="ml-10">
                            Read blog <i class="bi bi-box-arrow-up-right"></i>
                        </a>
                    </article>
                </div>
            </div>
        </section>
        {/* <!-- PREVIEW BLOGS SECTION END --> */}

        {/* <!-- SUBSCRIBE TO NEWS LETTERS START --> */}
        <section class="subscribe bg-primary-foot" style={{ backgroundImage: "url('art/overlay.webp')" }}>
            <div class="contained row ta-center">
                <div class="col-balance fc-white">
                    <h3 class="mb-a ff-damion mt-a">Subscribe to our newsletter:</h3>
                </div>
                <div class="col-balance">
                    <form action="#">
                        <input type="email" id="subscribe-email" aria-label="Subscribe to our email news" placeholder="Email" required />
                        <button class="btn-bg2">Subscribe</button>
                    </form>
                </div>
            </div>
        </section>
        {/* <!-- SUBSCRIBE TO NEWS LETTERS ENS --> */}

        <section class="contained ta-center">
            <h2 class="section-title ff-damion">Reach us</h2>
            <p class="col-wide mlmr-a">
                Have questions or ready to get started? Contact us today to discuss your project needs. We're here to help you elevate your digital presence and drive success.
            </p>
            <a href="contact.html" class="btn-bg1 border-round mt-25">
                Get in touch
            </a>
        </section>

    </main>

    {/* <!-- FOOTER START --> */}
<Footer/>
    {/* <!-- FOOTER END --> */}

</body>
  )
}

export default Home