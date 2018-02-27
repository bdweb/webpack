import React from 'react';
export default class Services extends React.Component{
  render(){
    return(
      <div>
      <div id="breadcrumb">
    <div className="container">
      <div className="breadcrumb">
        <li><a href="/">Home</a></li>
        <li>Services</li>
      </div>
    </div>
  </div>

  <div className="services">
    <div className="container">
      <h3>Company Services</h3>
      <hr/>
      <div className="col-md-6">
        <img src="images/4.jpg" className="img-responsive" />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus interdum erat libero, pulvinar tincidunt leo consectetur eget. Curabitur lacinia pellentesque libero, pulvinar tincidunt leo consectetur eget. Curabitur lacinia pellentesque libero,
          pulvinar tincidunt leo consectetur eget. Curabitur lacinia pellentesque</p>
      </div>

      <div className="col-md-6">
        <div className="media">
          <ul>
            <li>
              <div className="media-left">
                <i className="fa fa-pencil"></i>
              </div>
              <div className="media-body">
                <h4 className="media-heading">Web Development</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus interdum erat libero, pulvinar tincidunt leo consectetur eget.</p>
              </div>
            </li>
            <li>
              <div className="media-left">
                <i className="fa fa-book"></i>
              </div>
              <div className="media-body">
                <h4 className="media-heading">Responsive Design</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus interdum erat libero, pulvinar tincidunt leo consectetur eget.</p>
              </div>
            </li>
            <li>
              <div className="media-left">
                <i className="fa fa-rocket"></i>
              </div>
              <div className="media-body">
                <h4 className="media-heading">Bootstrap Themes</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus interdum erat libero, pulvinar tincidunt leo consectetur eget.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <div className="sub-services">
    <div className="container">
      <div className="col-md-6">
        <div className="media">
          <ul>
            <li>
              <div className="media-left">
                <i className="fa fa-pencil"></i>
              </div>
              <div className="media-body">
                <h4 className="media-heading">Landing Page</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus interdum erat libero, pulvinar tincidunt leo consectetur eget.</p>
              </div>
            </li>
            <li>
              <div className="media-left">
                <i className="fa fa-book"></i>
              </div>
              <div className="media-body">
                <h4 className="media-heading">Training</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus interdum erat libero, pulvinar tincidunt leo consectetur eget.</p>
              </div>
            </li>
            <li>
              <div className="media-left">
                <i className="fa fa-rocket"></i>
              </div>
              <div className="media-body">
                <h4 className="media-heading">Logo Design</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus interdum erat libero, pulvinar tincidunt leo consectetur eget.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="col-md-6">
        <img src="images/4.jpg" className="img-responsive" />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus interdum erat libero, pulvinar tincidunt leo consectetur eget. Curabitur lacinia pellentesque libero, pulvinar tincidunt leo consectetur eget. Curabitur lacinia pellentesque libero,
          pulvinar tincidunt leo consectetur eget. Curabitur lacinia pellentesque</p>
      </div>
    </div>
  </div>
</div>
    
    )
  }

}