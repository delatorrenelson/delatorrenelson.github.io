import { useState } from 'react';
import './App.css';

/** COMPONENTS */
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Header from './components/Header';


function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App container">
      <Navbar /> 
      <main>
        <Header />
        
      </main>     
      <Footer/>
    </div>
  );
}

export default App;
