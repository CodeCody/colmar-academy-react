import React, {Component} from 'react';
import './FooterComponent.css';



export class FooterComponent extends Component {
    render() {
        return (<footer>
            <p>©2016 COLMAR ACADEMY. All rights reserved.</p>
            <nav>
                <a>Terms</a>
                <a>Privacy</a>
            </nav>
        </footer>)
    }
}