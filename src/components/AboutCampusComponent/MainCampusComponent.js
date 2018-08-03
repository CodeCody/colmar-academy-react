import React,{ Component } from 'react';


export class MainCampusComponent extends Component {
    render() {
        return (
            <div id={'information_main'}>
                <img id={'learning_image'} src={require('../../images/information-main.jpg')}/>
                <h1>It doesn't hurt to keep practicing</h1>
                <p>"Curabitur vitae libero in ipsum porttitor consequat. Aliquam et commodo lectus,nec consequat neque. Sed non accumsan urna.
                    Phasellus sed consequat ex. Etiam eget magna laoreet, efficitur dolor consequat, tristique ligula."</p>
                <p>Emanuel, Sr. Strategist at Hiring.com</p>
            </div>)
    }
}