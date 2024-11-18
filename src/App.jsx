import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'




const App = () => {
  React.useEffect(() => {
    const link = document.querySelector("link[rel='icon']");
    if (link) {
      link.href = favicon; // Set the icon dynamically
    }
  }, []);

  return <h1>React App</h1>;
};

export default App;
