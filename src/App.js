import React from 'react';
import Wrapper from "./components/Wrapper"
import Navbar from "./components/Navbar"
import Directory from './pages/Directory';

function App() {
  return (
    
    <div>
      <Navbar />
      <Wrapper>
        <Directory />
      </Wrapper>
    </div>
  );
}

export default App;
