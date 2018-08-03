import React, { Component } from 'react';
import logo from './logo.svg';
import './Reset.css';
import './App.css';
import {AboutCampusComponent} from "./components/AboutCampusComponent/AboutCampusComponent";
import {BannerComponent} from "./components/BannerComponent/BannerComponent";
import {CampusOfferings} from "./components/CampusOfferingsComponent/CampusOfferings";
import {ThesisComponent} from "./components/ThesisComponent/ThesisComponent";
import {HeaderComponent} from "./components/HeaderComponent/HeaderComponent";
import {FooterComponent} from "./components/FooterComponent/FooterComponent";

class App extends Component {
  render() {
    return (
     <main>
         <HeaderComponent/>
         <BannerComponent/>
         <AboutCampusComponent/>
         <CampusOfferings/>
         <ThesisComponent/>
         <FooterComponent/>
     </main>
    );
  }
}

export default App;
