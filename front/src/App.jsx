import './app.css'

import Navbar from './components/Navbar/Navbar'
import Carrusel from './components/Carrusel/Carrusel'
import Body from './components/Body/Body'
import Footer from './components/Footer/Footer'
import InvNavrbar from './components/InvNavbar/InvNavrbar'
import { useEffect } from 'react'


function App() {

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/menu/getPresentaciones/');
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); 

  return (
    <>
      <Navbar/>
      <Carrusel/>
      <Body/>
      <Footer/> 
      <InvNavrbar/>
    </>
  )
}

export default App
