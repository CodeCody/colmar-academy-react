import React, {Component} from 'react';
import './HeaderComponent.css';
import './HeaderComponentMobile.css'



export class HeaderComponent extends Component {
    render() {
         return (<header>
             <div id={'logodiv'}>
                 <img id={"logo"} src={require("../../images/ic-logo.svg")} alt='logo'/>
                 <p><span><b>COLMAR</b></span>ACADEMY</p>
             </div>

             <div id={'headerLinks'}>
                 <a>On Campus</a>
                 <a>Online</a>
                 <a>Companies</a>
                 <a>Sign up</a>
             </div>

             <div className={'mobileLogo'}>
                 <img  src={require('../../images/ic-logo.svg')} alt={'logo'}/>
                 <img  src={require('../../images/ic-on-campus.svg')} alt={'campus logo'}/>
                 <img  src={require('../../images/ic-online.svg')} alt={'online logo'}/>
                 <img  src={require('../../images/ic-login.svg')} alt={'login logo'}/>
             </div>
         </header>)
    }
}