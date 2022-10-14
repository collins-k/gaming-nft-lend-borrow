import { GetStaticPropsContext } from 'next';

import { useTranslations } from 'next-intl';

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../../messages/${locale}.json`)).default,
    },
  };
}


const Index = () => {
  // const t = useTranslations('Index');

  return (

  <section className="hero-banner-style bg-1 bg-image top-section-gap hero-banner-style-one">
    <div className="hero-banner_inner">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xxl-8 col-xl-7 col-lg-7">
            <div className="banner-content">
              <h1 className="mb-4 title" data-aos="fade-up">Lend and borrow <br/>
                <span>gaming NFTs</span>
              </h1>
              <p className='font-bold text-white' data-aos="fade-up" data-aos-delay="100">Make your in-game  
              achievements <br/>
                to real money by lending it to other gamers</p>
              <div className="group-btn mt-8" data-aos="fade-up" data-aos-delay="200">
                <a href="explore-filter-sidebar.html" className="btn btn-gradient"><span><i className="ri-rocket-line"></i>
                    Explore</span></a>
                <a href="create.html" className="btn btn-outline"><span><i className="ri-edit-line"></i> Create</span></a>
              </div>
              <img src="/images/shape/2.png" alt="shape" className="shape shape-2 dark rotate-360"/>
              <img src="/images/shape/3.png" alt="shape" className="shape shape-3 dark rotate-360"/>
              <img src="/images/shape/2-light.png" alt="shape" className="shape shape-2 light rotate-360"/>
              <img src="/images/shape/3-light.png" alt="shape" className="shape shape-3 light rotate-360"/>
            </div>

          </div>
          {/* <div className="col-xxl-4 col-xl-5 col-lg-5">
            <div className="explore-style-two">
              <div className="slider slider-activation-banner-3">
                <a href="product-details.html" className="thumb">
                  <img src="./images/explore/hero/1.jpg" alt="explore-item"/>
                </a>
                <a href="product-details.html" className="thumb">
                  <img src="./images/explore/hero/2.jpg" alt="explore-item"/>
                </a>
                <a href="product-details.html" className="thumb">
                  <img src="./images/explore/hero/4.jpg" alt="explore-item"/>
                </a>
              </div>
              <span className="sticker">Featured Art</span>
              <div className="explore-content ">
                <div className="price">
                  <span>Rederve Price</span>
                  <h6><img src="/images/explore/hero/reward.png" alt="reward" /> 68.4 ETH</h6>
                </div>
                <a href="#" data-bs-toggle="modal" data-bs-target="#placeBit"
                  className="btn btn-gradient btn-small rounded-3 "><span><i className="ri-shopping-bag-line"></i> Place a
                    bid</span></a>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  </section>



  )

}


export default Index