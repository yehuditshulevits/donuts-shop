// // import logo from './logo.svg';
// import './App.css';
// // import NavUp from './NavUp';

// function App() {
//   return (
//     // <NavUp></NavUp>
//     <singelCard></singelCard>
//   );
// }

// export default App;

import './App.css';
import NavUp from './NavUp';
import SingelCard from './singelCard';
import { Provider } from 'react-redux';
import Store from './redux/Store';
import PayPal from './pay';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router';
import React, { Fragment } from 'react';

function App() {
  return (
    <React.Fragment>
      <Provider store={Store}>
        <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<SingelCard />} />
            <Route exact path='/Pay' element={<PayPal />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </React.Fragment>
  );
}
export default App