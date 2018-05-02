import React from 'react'
import './App.css';

export default class Header extends React.Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div style={{textAlign:'center',fontFamily: 'comic-sans-ms',fontSize: '50px',background:'white'}} className="App-logo-spin">Header</div>
        )
    }
}
