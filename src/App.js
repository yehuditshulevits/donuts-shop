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

function App() {
  return (
    // <NavUp></NavUp>
    <Provider store={Store}>
      <SingelCard></SingelCard>
    </Provider>
  );
}

export default App;