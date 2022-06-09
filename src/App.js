
import './App.css';
import React ,{useState}from 'react';
import Navbar from "./Components/Navbar"
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import Section from "./Components/Section"


function App() {
  const [count,setCount] = useState(0);
  const addItem = () => {
      setCount(count+1);
      window.scroll({
        top: 0,
        behavior: 'smooth',
      });

  }
  const removeItem = () => {
    setCount(count-1);
    window.scroll({
      top: 0, 
      behavior: 'smooth',
    });
    
}
  return (
    <>
      <Navbar count={count}/>
      <Header />
      {/* passing the state variables and functions as a prop */}
      <Section count={count} addItem={addItem} removeItem={removeItem} />
      <Footer />
    </>
  );
}

export default App;
