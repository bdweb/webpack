import React from 'react';
import {Parallax, Button} from 'react-materialize';

export default class Home extends React.Component{
  componentDidMount() {
    console.log(Parallax);
   };
   
  render(){
    return(
      <div>
        {/* <button data-activates="sidenav_0" class="btn">aaaa</button> */}
  <Parallax imageSrc="/images/bg.jpg"/>
  <div className="section white">
    <div className="row container">
      <h2 className="header">Parallax</h2>
      <p className="grey-text text-darken-3 lighten-3">Parallax is an effect where the background content or image in this case, is moved at a different speed than the foreground content while scrolling.</p>
    </div>
  </div>
  <Parallax imageSrc="http://materializecss.com/images/parallax2.jpg"/>
</div>
    
    )
  }

}