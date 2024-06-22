import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import { Allroutes } from './Pages/Allroutes';
import Footer from './Pages/Footer';
import { getProducts } from './Redux/controllers';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <>
        <Navbar/>
        <Allroutes/>
        <Footer/>
    </>
  );
}

export default App;
