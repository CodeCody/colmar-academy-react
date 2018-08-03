import React,{ Component } from 'react';
import './BannerComponent.css';
import './BannerComponentMobile.css';

export class BannerComponent extends Component {

    render() {
        return(
            <main id={'banner_section'}>

                <div id={'bannerImgContainer'}>
                <img id='bannerImage' src={require('../../images/banner.jpg')} alt='banner image'/>
                </div>

                <div id={'start_section'}>
                <h1>
                    Learn something new everyday
                </h1>

                <h2>
                    Lorem ipsum dolor sit amet,consectetur adipiscing elit.
                </h2>

                <button>
                    Start here
                </button>
                </div>

            </main>
        )
    }
}