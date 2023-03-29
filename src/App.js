import NavBar from './navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './home';
import About from './about';
import Contact from './contact';
import Products from './products';
import NotFound from './notFound';


function App() {
  return (
    <Router>
    <div className="App">
      <NavBar /> 
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
          
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        {/* <Footer /> */}
      </div>
      {/*  */}
    </div>
    </Router>    
  );
}

export default App;
