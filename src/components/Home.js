import React from 'react';

export default class Home extends React.Component{
  componentDidMount() {
    
    new WOW().init();
   };
   
  render(){
    return(
      <div>
         <script type="text/jsx" src="/js/wow.min.js"></script>
      <section id="main-slider" className="no-margin">
      <div className="carousel slide">
        <div className="carousel-inner">
          <div className="item active" style={{backgroundImage: 'url("images/slider/bg1.jpg")'}}>
            <div className="container">
              <div className="row slide-margin">
                <div className="col-sm-6">
                  <div className="carousel-content">
                    <h2 className="animation animated-item-1">Welcome <span>Company</span></h2>
                    <p className="animation animated-item-2">Accusantium doloremque laudantium totam rem aperiam, eaque ipsa...</p>
                    <a className="btn-slide animation animated-item-3" href="#">Read More</a>
                  </div>
                </div>
  
                <div className="col-sm-6 hidden-xs animation animated-item-4">
                  <div className="slider-img">
                    <img src="images/slider/img3.png" className="img-responsive" />
                  </div>
                </div>
  
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  
    <div className="feature">
      <div className="container">
        <div className="text-center">
          <div className="col-md-3">
            <div className="hi-icon-wrap hi-icon-effect wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="300ms">
              <i className="fa fa-book"></i>
              <h2>Full Responsive</h2>
              <p>Quisque eu ante at tortor imperdiet gravida nec sed turpis phasellus.</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="hi-icon-wrap hi-icon-effect wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="600ms">
              <i className="fa fa-laptop"></i>
              <h2>Retina Ready</h2>
              <p>Quisque eu ante at tortor imperdiet gravida nec sed turpis phasellus.</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="hi-icon-wrap hi-icon-effect wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="900ms">
              <i className="fa fa-heart-o"></i>
              <h2>Full Responsive</h2>
              <p>Quisque eu ante at tortor imperdiet gravida nec sed turpis phasellus.</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="hi-icon-wrap hi-icon-effect wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="1200ms">
              <i className="fa fa-cloud"></i>
              <h2>Friendly Code</h2>
              <p>Quisque eu ante at tortor imperdiet gravida nec sed turpis phasellus.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  
    <div className="about">
      <div className="container">
        <div className="col-md-6 wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="300ms">
          <h2>about us</h2>
          <img src="images/6.jpg" className="img-responsive" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus interdum erat libero, pulvinar tincidunt leo consectetur eget. Curabitur lacinia pellentesque libero, pulvinar tincidunt leo consectetur eget. Curabitur lacinia pellentesque libero,
            pulvinar tincidunt leo consectetur eget. Curabitur lacinia pellentesque
          </p>
        </div>
  
        <div className="col-md-6 wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="600ms">
          <h2>Template built with Twitter Bootstrap</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus interdum erat libero, pulvinar tincidunt leo consectetur eget. Curabitur lacinia pellentesque libero, pulvinar tincidunt leo consectetur eget. Curabitur lacinia pellentesque libero,
            pulvinar tincidunt leo consectetur eget. Curabitur lacinia pellentesque</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus interdum erat libero, pulvinar tincidunt leo consectetur eget. Curabitur lacinia pellentesque libero, pulvinar tincidunt leo consectetur eget. Curabitur lacinia pellentesque
              libero, pulvinar tincidunt leo consectetur eget. Curabitur lacinia pellentesque
            </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus interdum erat libero, pulvinar tincidunt leo consectetur eget. Curabitur lacinia pellentesque libero, pulvinar tincidunt leo consectetur eget. Curabitur lacinia pellentesque
              libero, pulvinar tincidunt leo consectetur eget. Curabitur lacinia pellentesque </p>
        </div>
      </div>
    </div>
  
    <div className="lates">
      <div className="container">
        <div className="text-center">
          <h2>Lates News</h2>
        </div>
        <div className="col-md-4 wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="300ms">
          <img src="images/4.jpg" className="img-responsive" />
          <h3>Template built with Twitter Bootstrap</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus interdum erat libero, pulvinar tincidunt leo consectetur eget. Curabitur lacinia pellentesque libero, pulvinar tincidunt leo consectetur eget. Curabitur lacinia pellentesque libero,
            pulvinar tincidunt leo consectetur eget. Curabitur lacinia pellentesque
          </p>
        </div>
  
        <div className="col-md-4 wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="600ms">
          <img src="images/4.jpg" className="img-responsive" />
          <h3>Template built with Twitter Bootstrap</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus interdum erat libero, pulvinar tincidunt leo consectetur eget. Curabitur lacinia pellentesque libero, pulvinar tincidunt leo consectetur eget. Curabitur lacinia pellentesque libero,
            pulvinar tincidunt leo consectetur eget. Curabitur lacinia pellentesque
          </p>
        </div>
  
        <div className="col-md-4 wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="900ms">
          <img src="images/4.jpg" className="img-responsive" />
          <h3>Template built with Twitter Bootstrap</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus interdum erat libero, pulvinar tincidunt leo consectetur eget. Curabitur lacinia pellentesque libero, pulvinar tincidunt leo consectetur eget. Curabitur lacinia pellentesque libero,
            pulvinar tincidunt leo consectetur eget. Curabitur lacinia pellentesque
          </p>
        </div>
      </div>
    </div>
  
    <section id="partner">
      <div className="container">
        <div className="center wow fadeInDown">
          <h2>Our Partners</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut <br/> et dolore magna aliqua. Ut enim ad minim veniam</p>
        </div>
  
        <div className="partners">
          <ul>
            <li> <a href="#"><img className="img-responsive wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="300ms" src="images/partners/partner1.png" /></a></li>
            <li> <a href="#"><img className="img-responsive wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="600ms" src="images/partners/partner2.png" /></a></li>
            <li> <a href="#"><img className="img-responsive wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="900ms" src="images/partners/partner3.png" /></a></li>
            <li> <a href="#"><img className="img-responsive wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="1200ms" src="images/partners/partner4.png" /></a></li>
            <li> <a href="#"><img className="img-responsive wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="1500ms" src="images/partners/partner5.png" /></a></li>
          </ul>
        </div>
      </div>
    </section>
  
    <section id="conatcat-info">
      <div className="container">
        <div className="row">
          <div className="col-sm-8">
            <div className="media contact-info wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="600ms">
              <div className="pull-left">
                <i className="fa fa-phone"></i>
              </div>
              <div className="media-body">
                <h2>Have a question or need a custom quote?</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation +0123 456 70 80</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
</div>
    
    )
  }

}