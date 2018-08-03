import React,{ Component } from 'react';
import {StudiesComponent} from "./StudiesComponent.js";
import './ThesisComponent.css';
import './ThesisComponentMobile.css';

export class ThesisComponent extends Component {
    render() {
        return (
            <section id={'thesis_section'}>
                <h1>Thesis Exibits</h1>
                <div id={'thesis_content_section'}>
            <div id={'thesis_video_section'}>
                <video src={require('../../videos/thesis.mp4')}></video>
                <h3>Reimagine Urban</h3>
                <p>"Curabitur vitae libero in ipsum porttitor consequat. Aliquam et commodo lectus, nec consequat neque. Sed non
                accumsan urna. Phasellus sed consequat ex. Etiam eget magna laoreet, efficitur dolor consequat, tristique ligula."</p>
            </div>
                    <StudiesComponent/>
            </div>

            </section>
        )
    }
}