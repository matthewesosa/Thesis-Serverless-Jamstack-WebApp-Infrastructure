import React from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer.js'
import Header from './components/Header.js'
import Main from './components/Main.js'


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
