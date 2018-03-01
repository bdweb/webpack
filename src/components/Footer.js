import React from 'react';

export default class Footer extends React.Component{
  constructor(){
    super();
  }
  componentDidMount(){
    // $('.scrollup').on('click',function(){

    //   $("html, body").animate({ scrollTop: 0 }, 1000);
    //     return false;
    // });
  }
  render(){
    return(
      <div>
        <footer className="page-footer">
            <div className="container">
            <div className="row">
            <div className="col l6 s12">
            <p> © 2018 Copyright Text</p>
            </div>
            <div className="col l6 s12">
            <ul className="social-links right">
                  <li><a href="#" className="social-icon " title="Facebook"><i className="fa fa-facebook"></i></a></li>
                  <li><a href="#" className="social-icon " title="Twitter"><i className="fa fa-twitter"></i></a></li>
                  <li><a href="#" className="social-icon " title="Google Plus"><i className="fa fa-google-plus"></i></a></li>
                  <li><a href="#" className="social-icon " title="Linkedin"><i className="fa fa-linkedin"></i></a></li>
                  <li><a href="#" className="social-icon " title="YouTube"><i className="fa fa-youtube-play"></i></a></li>
                </ul>
            </div>
            </div>
            </div>
        </footer>
    </div>
    )
  }

}

