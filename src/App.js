import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import {
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {

  // constructor(){
  //   super();
  //   this.mode = 'light';
  // }
  // toggleMode = () => {
  //   if(this.mode === 'light'){
  //     this.setMode = () => {
  //       this.mode = 'dark'
  //     }
  //     document.body.style.backgroundColor = 'rgb(20 28 35 / 92%)';
  //   }
  //   else{
  //     this.setMode = () =>{'light'};
  //     document.body.style.backgroundColor = 'rgb(245, 249, 255)';
  //   }
  // }

  render() {
    return (
      <div>
        <Navbar title="News4U" />
        <Routes>
        <Route exact path="/" element={<News key="home" contryCode='in' apiKey='8f30a6090e404aa5b2cd9aeb2ed1f53e' pageSize={9} category='general' />} />
        <Route exact path="/business" element={<News key="business" contryCode='in' apiKey='8f30a6090e404aa5b2cd9aeb2ed1f53e' pageSize={9} category='business' />} />
        <Route exact path="/entertainment" element={<News key="entertainment" contryCode='in' apiKey='8f30a6090e404aa5b2cd9aeb2ed1f53e' pageSize={9} category='entertainment' />} />
        <Route exact path="/health" element={<News key="health" contryCode='in' apiKey='8f30a6090e404aa5b2cd9aeb2ed1f53e' pageSize={9} category='health' />} />
        <Route exact path="/science" element={<News key="science" contryCode='in' apiKey='8f30a6090e404aa5b2cd9aeb2ed1f53e' pageSize={9} category='science' />} />
        <Route exact path="/sports" element={<News key="sports" contryCode='in' apiKey='8f30a6090e404aa5b2cd9aeb2ed1f53e' pageSize={9} category='sports' />} />
        <Route exact path="/technology" element={<News key="technology" contryCode='in' apiKey='8f30a6090e404aa5b2cd9aeb2ed1f53e' pageSize={9} category='technology' />} />

        <Route path="*" element={<News key="general" contryCode='in' apiKey='8c12b80ea18048e680990b186c50b6ff' pageSize={9} category='general' />} />

        {/* myKey='8f30a6090e404aa5b2cd9aeb2ed1f53e' */}
        {/* jaiKey='8c12b80ea18048e680990b186c50b6ff' */}
        </Routes>
      </div>
    )
  }
}