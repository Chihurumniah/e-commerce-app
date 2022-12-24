let siteConfig = {
    logo: "Float",
    color: "red",
    about: "we sale all kinds of laptop, tablets and we also supply hole sale etc",
    shopDsc:"We sale all types of laptop and tablets",
    categories:[
         {
           category: "laptop",
           imgurl: "/img/img4.png"
         },
         {
           category: "Tablets",
           imgurl: "/img/img5.png"
         }
    ]
    
  }
  

const  About = () => {
    return (
        <section id="about" class="contact_section layout_padding">
            <div class="container  ">
                <div class="row">
                    <div class="col-md-6 col-lg-5 ">
                        <div class="img-box">
                        <img
                            src="/img/img4.png"
                            alt="First slide"
                        />
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-7">
                        <div class="detail-box">
                            <div class="heading_container">
                                <h2>
                                About Us 
                                </h2>
                            </div>
                            <p>
                              { siteConfig.about }
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default About;