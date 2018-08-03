import React,{ Component} from 'react'
import { MainCampusComponent } from './MainCampusComponent'
import {EventsCampusComponent} from "./EventsCampusComponent";
import './AboutCampusComponent.css'
import './AboutCampusComponentMobile.css';

 export class AboutCampusComponent extends Component {
    render() {
        return (<main id={'information_section'}>
            <MainCampusComponent/>
            <EventsCampusComponent/>
        </main>);
    }
}