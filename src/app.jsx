import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

// import Preview from './components/Preview';
// import Help from './components/Help';
import NotFound from './components/NotFound';
import './components/App.css';
// import Page from './components/Page';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Header from './components/Navbar';
import Footer from './components/Footer';
import Industrial from './components/Industrial';

const App = (props) => (
  <div>
  <Router>
  <div>
  <Header/>
    <Switch>
      {/* <Redirect exact from="/" to="/help"/> */}
      {/* <Route exact path="/help" component={Help} /> */}
      <Route exact path="/" component={Home} />
      <Route exact path="/portfolio" component={Portfolio} />
      {/* <Route exact path="/about" component={About} />
      <Route exact path="/industrial" component={Industrial} /> */}
      {/* <Route exact path="/industrial/a" component={Industrial} cat='a' /> */}
      {/* <Route exact path="/industrial/a" render={(props) => ( <Industrial cat="a"/> )} />
      <Route exact path="/services" component={Services} />
      
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/preview" render={routeProps => <Preview {...routeProps} prismicCtx={props.prismicCtx} />} /> */}
      {/* <Route exact path="/:uid" render={routeProps => <Page {...routeProps} prismicCtx={props.prismicCtx} />} /> */}
      <Route component={Header} />
    </Switch>
    {/* <Footer/> */}
    </div>
  </Router>
  </div>
);

export default App;
