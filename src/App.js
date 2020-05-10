import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {HashRouter  as Router, Route, Switch} from 'react-router-dom'
import PageMain from './Component/Main/PageMain'
import PageBlog from './Component/Blog/PageBlog'
import PageBlogEach from './Component/Blog/PageBlogEach'
import PageGallery from './Component/Gallery/PageGallery'
import About from './Component/About/PageAbout'
import ScrollToTop from './Component/Utilities/ScrollToTop';

function App() {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
          <ScrollToTop/>
          <Switch>
              <Route path='/' exact component={PageMain}/>
              <Route path='/blog' exact component={PageBlog}/>
              <Route path='/blog/:id' strict exact component={PageBlogEach}/> 
              <Route path='/gallery' exact component={PageGallery}/>
              <Route path='/about' exact component={About}/>
          </Switch>
      </Router>
      
    </div>
  );
}

export default App;
