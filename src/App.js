import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Coins from './Components/Coins/Coins';
import Contact from './Components/Contact/Contact';
import About from './Components/About/About';
import CoinDetails from './Components/CoinDetails/CoinDetails';
import BDAddress from './Components/Contact/BDAddress';
import USAddress from './Components/Contact/USAddress';
import NotFound from './Components/NotFound/NotFound';
 
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/coins' element={<Coins />} />
        <Route path='/coins_details/:coinId' element={<CoinDetails/>} />

          <Route path='/contact' element={<Contact/>}>
              <Route path='bd-address' element={<BDAddress/>}/>
              <Route path='us-address' element={<USAddress/>}/>
          </Route>

        <Route path='/about' element={<About />} />
         <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
