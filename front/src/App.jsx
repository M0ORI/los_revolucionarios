import './app.css'

import Navbar from './components/Navbar/Navbar'
import Carrusel from './components/Carrusel/Carrusel'
import Body from './components/Body/Body'
import Footer from './components/Footer/Footer'
import InvNavrbar from './components/InvNavbar/InvNavrbar'
import { useEffect, useState } from 'react'


function App() {
  const [data, setData] = useState({ presentaciones: [], carrusel: [] });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/menu/getHome/');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <>
      <Navbar/>
      <Carrusel images = {data.carrusel}/>
      <Body datos={data.presentaciones} />
      <Footer/>
      <InvNavrbar/>
    </>
  );
}

export default App;
