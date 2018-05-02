import React, { Component } from 'react';
import { Parallax, Background } from 'react-parallax';
import logo from './logo.svg';
import './App.css';

import Header from './Header.js'
import FormStudent from './FormStudent.js'
import Footer from './footer.js'

const MyComponent = () => (
  <div>
    <Header/>
    <Parallax
      blur={0}
      bgImage={require('./asphalt-cold-fog-296555.jpg')}
      bgImageAlt="the dog"
      strength={500}
      style={{ width:'97%',margin: 'auto',borderRadius:'40px' }}
    >
      <div style={{ height: '600px'}} />
      <div style={{ background:'white', borderRadius:'20px' ,position:'absolute',textAlign:'center',padding:'10px',top:'0%',left:'44%',fontSize: '50px',fontFamily: 'comic-sans-ms',marginLeft:'10px'}}>Strangers</div>
    </Parallax>
    <div style={{textAlign:'center',fontFamily: 'comic-sans-ms',fontSize: '50px',background:'white'}} className="App-logo-spin">HELLO2</div>
    
    <Parallax
      blur={0}
      bgImage={require('./images/art-beverage-black-982612.jpg')}
      bgImageAlt="the dog"
      strength={500}
      style={{ width:'97%',margin: 'auto',borderRadius:'40px' }}
    >
      <div style={{ height: '600px' }} />
    </Parallax>
    <div style={{textAlign:'center',fontFamily: 'comic-sans-ms',fontSize: '50px',background:'white'}} className="App-logo-spin">HELLO3</div>    
    <Parallax
      blur={{ min: -15, max: 0 }}
      bgImage={require('./images/aroma-aromatic-art-434213.jpg')}
      bgImageAlt="the dog"
      strength={300}
      style={{ width:'97%',margin: 'auto',borderRadius:'40px' }}
    >
      <div style={{ height: '600px' }} />
    </Parallax>
    <div style={{textAlign:'center',fontFamily: 'comic-sans-ms',fontSize: '50px',background:'white'}} className="App-logo-spin">HELLO4</div>    
    <Parallax
      blur={0}
      bgImage={require('./images/art-blur-cappuccino-302899.jpg')}
      bgImageAlt="the dog"
      strength={400}
      style={{ width:'97%',margin: 'auto',borderRadius:'40px' }}
    >
      <div style={{ height: '600px' }} />
    </Parallax>
    <div style={{textAlign:'center',fontFamily: 'comic-sans-ms',fontSize: '50px',background:'white'}} className="App-logo-spin">HELLO5</div>    
    <Parallax
      blur={0}
      bgImage={require('./images/background-beverage-breakfast-414645.jpg')}
      bgImageAlt="the dog"
      strength={300}
      style={{ width:'97%',margin: 'auto',borderRadius:'40px' }}
    >
      <div style={{ height: '600px' }} />
    </Parallax>
    <footer>
      <Footer/>
    </footer>
  </div>
  
);
export default MyComponent;
