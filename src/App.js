import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import PageMain from './Component/Main/PageMain'
import PageBlog from './Component/Blog/PageBlog'
import Footer from './Component/Utilities/Footer'
import PageBlogEach from './Component/Blog/PageBlogEach'
import PageGallery from './Component/Gallery/PageGallery'
import About from './Component/About/PageAbout'

function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
              <Route path={process.env.PUBLIC_URL + '/'} exact component={PageMain}/>
              <Route path={process.env.PUBLIC_URL + '/blog'} exact component={PageBlog}/>
              <Route path={process.env.PUBLIC_URL + '/blog/:id'} strict exact component={PageBlogEach}/> 
              <Route path={process.env.PUBLIC_URL + '/gallery'} component={PageGallery}/>
              <Route path={process.env.PUBLIC_URL + '/about'} component={About}/>
          </Switch>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
