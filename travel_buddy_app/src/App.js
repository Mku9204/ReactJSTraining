import './App.css';
import NavBar from './components/navbar/navbar';
import Card1 from './components/card/card';
import banner_bg from './assests/img/banner_bg.png'
import event_bg from './assests/img/event_bg.png'
import Vector from './assests/icons/Vector.svg'
import { Box, Button, Card, CardContent, Container, Rating, Typography } from '@mui/material';
import Topvist from './components/topvist/topvist';
import Subnav from './components/subnav/subnav';
import A1 from './assests/img/a1.png'
import A2 from './assests/img/a2.png'
import A3 from './assests/img/a3.png'
import A4 from './assests/img/a4.png'
import H1 from './assests/img/h1.png'
import H2 from './assests/img/h2.png'
import H3 from './assests/img/h3.png'
import T1 from './assests/img/t1.png'
import T2 from './assests/img/t2.png'
import T3 from './assests/img/t3.png'
import Topoffres from './components/topvist/topOffer';
import Whatis from './components/util/what';
import Tophotel from './components/topvist/topHotel';
import Footer from './components/footer/footes';
import { BrowserRouter } from 'react-router-dom';
import Router1 from './router/router';
function App() {
  return (
    <div className="App">
      <Router1 />
    </div >
  );
}

export default App;
