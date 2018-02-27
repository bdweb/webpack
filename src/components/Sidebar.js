import React from 'react';
import { Link, NavLink ,IndexLink  } from 'react-router-dom'
import { OffCanvas, OffCanvasMenu, OffCanvasBody } from 'react-offcanvas';

export default class App extends React.Component {
 
  componentWillMount() {
    // sets the initial state
    this.setState({
      isMenuOpened: false,
    })
  }
  

  render(props) {
    const styles={
      menuClass:'sidebar',
      bodyClass:'bodycls',
      menuClass:'menucls'
    }
    return (
      <OffCanvas width={300} transitionDuration={300} isMenuOpened={this.state.isMenuOpened} position={"left"}>
        <OffCanvasBody className={styles.bodyClass} style={{fontSize: '30px'}}>
          <p>This is the main body container.</p>
          <p><a href="javascript:void(0)" onClick={this.handleClick.bind(this)}>Click here</a> to toggle the menu.</p>
        </OffCanvasBody>
        <OffCanvasMenu className={styles.menuClass}>
          <p>Placeholder content.</p>
          <ul>
            <li>Link 1</li>
            <li>Link 2</li>
            <li>Link 3</li>
            <li>Link 4</li>
            <li>Link 5</li>
            <li><a href="javascript:void(0);" onClick={this.handleClick.bind(this)}>Toggle Menu</a></li>
          </ul>
        </OffCanvasMenu>
      </OffCanvas>
    );
  }

  handleClick() {
    // toggles the menu opened state
    this.setState({ isMenuOpened: !this.state.isMenuOpened });
  }

}