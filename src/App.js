import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import Top from './page/Top';
import COIAS from './page/COIAS';
import './style/style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
        <Route path="/" component={Top} />
        <Route path="/COIAS" component={COIAS} />
    </BrowserRouter>
  );
};

export default App;
