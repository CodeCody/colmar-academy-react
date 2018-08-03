import React,{ Component } from 'react';


export class EventsCampusComponent extends Component {
    render() {
        return ( <div id={'events_section'}>
            <div className={'event_item'}>
               <img className='EventsImage' src={require('../../images/information-orientation.jpg')} alt="event"/>
                <div>
                    <h3>Orientation Date</h3>
                    <p>Tue 10/11 & Wed 10/12: 8am-3pm</p>
                    <a href=''>Read more</a>
                 </div>
            </div>

            <div className={'event_item'}>
                  <img className='EventsImage' src={require('../../images/information-campus.jpg')} alt="event"/>
                 <div>
                      <h3>Our campus</h3>
                      <p>Find which campus is close by you</p>
                      <a href=''>Read more</a>
                 </div>
            </div>

            <div className={'event_item'}>
                 <img className='EventsImage' src={require('../../images/information-guest-lecture.jpg')} alt="event"/>
                    <div>
                      <h3>Special guest lecture</h3>
                      <p>Join a keynote with Oliver Sack about music in medical treatment</p>
                     <a href=''>Read more</a>
                  </div>
            </div>

        </div>)

    }
}