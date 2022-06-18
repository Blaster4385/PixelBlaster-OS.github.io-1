import React from 'react';
import { Helmet } from "react-helmet";
import './App.css';
import './assets/css/main.css'
import './assets/css/fontawesome-all.min.css'
import './assets/css/noscript.css'
import Home from './components/Home';
import Devices from './components/Devices';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";


//	Dimension by HTML5 UP
//	html5up.net | @ajlkn
//	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
        <Routes>
        <Route path="/downloads" element={<Devices/>} />
        </Routes>
        <Home />
        <Helmet>
          <script type="text/javascript" src="assets/js/jquery.min.js"></script>
          <script type="text/javascript" src="assets/js/browser.min.js"></script>
          <script type="text/javascript" src="assets/js/breakpoints.min.js"></script>
          <script type="text/javascript" src="assets/js/util.js"></script>
          <script type="text/javascript" src="assets/js/main.js"></script>
        </Helmet>
        </Router>
      </div>
    );
  }
}

export function AddLibrary(urlOfTheLibrary) {
  const script = document.createElement('script');
  script.src = urlOfTheLibrary;
  script.async = true;
  document.body.appendChild(script);
}

export default App;
