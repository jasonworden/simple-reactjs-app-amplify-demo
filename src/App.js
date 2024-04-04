import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Customers from './Customers'
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

import '@bugsnag/js';
import '@bugsnag/plugin-react';
import '@formatjs/fast-memoize';
import '@formatjs/intl-datetimeformat';
import '@formatjs/intl-displaynames';
import '@formatjs/intl-getcanonicallocales';
import '@formatjs/intl-listformat';
import '@formatjs/intl-locale';
import '@formatjs/intl-numberformat';
import '@formatjs/intl-pluralrules';
import '@formatjs/intl-relativetimeformat';
// import '@joeattardi/emoji-button';
// import 'async';
// "basic-auth": "^2.0.0",
// "blueimp-canvas-to-blob": "^3.19.0",
// "blueimp-load-image": "^5.0.0",
// "braintree-web": "^3.88.4",
// "browserslist": "^4.12.0",
// "browserslist-useragent": "^4.0.0",
// "bunyan": "^1.8.10",
// "classnames": "^2.2.5",
// "clsx": "^1.0.1",
// "color": "^3.0.0",
// "comlink": "^4.3.0",
// "compression": "^1.6.2",
// "cookie": "^0.5.0",
// "cookie-parser": "^1.4.3",
// "copy-to-clipboard": "^3.0.6",
// "core-js": "^3.0.0",
// "country-data": "^0.0.31",
// "credit-card-type": "^9.0.0",
// "crypto-js": "^3.0.0",
// "cssstats": "^3.1.0",
// "debug": "^4.0.0",
// "diff": "^4.0.1",
// "emoji-regex": "^9.0.0",
// "error-stack-parser": "^2.0.6",
// "eventemitter3": "^4.0.0",
// "express": "^4.16.2",
// "fast-memoize": "^2.5.2",
// "focus-visible": "^5.0.2",
// "geoip-lite": "^1.3.5",
// "get-css": "^1.2.6",
// "helmet": "6.1.5",
// "hex-rgb": "^4.0.0",
// "hoist-non-react-statics": "^3.0.0",
// "idb-keyval": "^3.0.0",
// "idle-tracker": "~0.1.2",
// "idlize": "^0.1.0",
// "immer": "^9.0.6",
// "intersection-observer": "^0.12.0",
// "intl": "^1.2.5",
// "intl-locales-supported": "^1.8.0",
// "invariant": "^2.2.4",
// "ip-range-check": "^0.2.0",    "basic-auth": "^2.0.0",
// "blueimp-canvas-to-blob": "^3.19.0",
// "blueimp-load-image": "^5.0.0",
// "braintree-web": "^3.88.4",
// "browserslist": "^4.12.0",
// "browserslist-useragent": "^4.0.0",
import 'classnames';
// import 'clsx';
// import 'color';
// import 'comlink';
// import 'compression';
// import 'cookie';
// import 'cookie-parser';
// import 'copy-to-clipboard';
// import 'core-js';
// import 'country-data';
// import 'credit-card-type';
// import 'crypto-js';
// import 'diff';
// import 'emoji-regex';
// import 'error-stack-parser';
// import 'eventemitter3';
// import 'fast-memoize';
// import 'focus-visible';
// import 'get-css';
// import 'helmet';
// import 'hex-rgb';
// import 'hoist-non-react-statics';
// import 'idb-keyval';
// import 'idle-tracker';
// import 'immer';
// import 'intersection-observer';
// import 'intl';
// import 'intl-locales-supported';
// import 'invariant';
// import 'ip-range-check';

class App extends Component {
  render() {
    console.log('process.env:', process.env);
    console.log("Host URL"+process.env.PUBLIC_URL);
    return (

      <Router basename={process.env.PUBLIC_URL}>
        <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">AWS Amplify Demo!</h1>
        </header>
          <Switch>
                <Route exact path= "/" render={() => (
                  <Redirect to="/customerlist"/>
                )}/>
                 <Route exact path='/customerlist' component={Customers} />
          </Switch>
      </div>
    </Router>
    );
  }
}

export default App;
