import React, {useState} from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import {Routes, Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';


export default function App () {

  // constructor(){
  //   super();
  //   mode = 'light';
  // }

  const[mode, setMode]=useState('light')

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'rgb(20 28 35 / 92%)';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'rgb(255, 255, 255, 0.834)';
    }
  }

  const apiKey = process.env.REACT_APP_NEWS_API;

  const[progress, setProgress] = useState([10])

  

    return (
      <div>
        <Navbar title="News4U" mode={mode} toggleMode={toggleMode}  />
        <LoadingBar
        height={1}
        color='#f11946'
        progress={progress}
        />
        <Routes>
        <Route exact path="/" element={<News mode={mode} setProgress={setProgress}key="home" contryCode='in' apiKey={apiKey} pageSize={9} category='general' />} />
        <Route exact path="/business" element={<News mode={mode} setProgress={setProgress}key="business" contryCode='in' apiKey={apiKey} pageSize={9} category='business' />} />
        <Route exact path="/entertainment" element={<News mode={mode} setProgress={setProgress}key="entertainment" contryCode='in' apiKey={apiKey} pageSize={9} category='entertainment' />} />
        <Route exact path="/health" element={<News mode={mode} setProgress={setProgress}key="health" contryCode='in' apiKey={apiKey} pageSize={9} category='health' />} />
        <Route exact path="/science" element={<News mode={mode} setProgress={setProgress}key="science" contryCode='in' apiKey={apiKey} pageSize={9} category='science' />} />
        <Route exact path="/sports" element={<News mode={mode} setProgress={setProgress}key="sports" contryCode='in' apiKey={apiKey} pageSize={9} category='sports' />} />
        <Route exact path="/technology" element={<News mode={mode} setProgress={setProgress}key="technology" contryCode='in' apiKey={apiKey} pageSize={9} category='technology' />} />

        <Route path="*" element={<News mode={mode} setProgress={setProgress}key="general" contryCode='in' apiKey='8c12b80ea18048e680990b186c50b6ff' pageSize={9} category='general' />} />

        {/* myKey='8f30a6090e404aa5b2cd9aeb2ed1f53e' */}
        {/* jaiKey='8c12b80ea18048e680990b186c50b6ff' */}
        </Routes>
      </div>
    )
}