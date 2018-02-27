import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import Preview from './Preview';
import Help from './Help';
import NotFound from './NotFound';
import './App.css';
import Page from './Page';
import Home from './Home';
import About from './About';
import Services from './Services';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Header from './Navbar';
import Footer from './Footer';
import * as $ from 'jquery';
import Industrial from './Industrial';
const App = (props) => (
  <div>
  <Router>
  <div>
  {/* <Header/> */}
    <Switch>
      {/* <Redirect exact from="/" to="/help"/> */}
      <Route exact path="/help" component={Help} />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/industrial" component={Industrial} />
      {/* <Route exact path="/industrial/a" component={Industrial} cat='a' /> */}
      <Route exact path="/industrial/a" render={(props) => ( <Industrial cat="a"/> )} />
      <Route exact path="/services" component={Services} />
      <Route exact path="/portfolio" component={Portfolio} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/preview" render={routeProps => <Preview {...routeProps} prismicCtx={props.prismicCtx} />} />
      {/* <Route exact path="/:uid" render={routeProps => <Page {...routeProps} prismicCtx={props.prismicCtx} />} /> */}
      <Route component={NotFound} />
    </Switch>
    <Footer/>
    </div>
  </Router>
  </div>
);

export default App;
