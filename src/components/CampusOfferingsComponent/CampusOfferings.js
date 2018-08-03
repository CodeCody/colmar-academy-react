import React,{ Component } from 'react'
import {CoursesComponent} from "./CoursesComponent.js";
import './CampusOfferings.css';
import './CampusOfferingsMobile.css';

export class CampusOfferings extends Component {
    render() {
      return( <section id={'campus_offerings_section'}>
          <h1>Start learning</h1>
          <CoursesComponent/>
      </section>)

    }

}