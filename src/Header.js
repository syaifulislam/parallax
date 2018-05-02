import React from 'react'
import './App.css';
import myriad from './MyriadPro-Regular.otf';
import logo_openguides from './images/logo-openguides.svg';

export default class Header extends React.Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div className="App-header">
                <div style={{width:'10%',float:'left'}}>
                </div>
                <div style={{width:'90%',float:'right',paddingRight:'100px'}}>
                    <a href="" style={{fontFamily: myriad,fontSize: '15px',color:'white',textDecoration:'none',border:'2px solid #FFF',borderRadius:'50px'}}>
                        DASHBOARD
                    </a>
                    <a href="" style={{fontFamily: myriad,fontSize: '15px',color:'white',textDecoration:'none'}}>
                        CONTACT
                    </a>
                    <a href="" style={{fontFamily: myriad,fontSize: '15px',color:'white',textDecoration:'none'}}>
                        WHY US
                    </a>
                    <a href="" style={{fontFamily: myriad,fontSize: '15px',color:'white',textDecoration:'none'}}>
                        PRICING
                    </a>
                    <a href="" style={{fontFamily: myriad,fontSize: '15px',color:'white',textDecoration:'none'}}>
                        WHAT IT IS?
                    </a>
                    <img src={logo_openguides}/>                    
                    
                </div>
            </div>
        )
    }
}
