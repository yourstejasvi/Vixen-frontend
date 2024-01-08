import React from 'react';
import Navigation from "./components/Navigation.jsx";
import Fenty from './components/Fenty.jsx';
import Lakme from './components/Lakme.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="App">

      <Navigation />
      <Fenty />
      <Lakme />
      <Footer />

    </div>
  );
}

export default App;
