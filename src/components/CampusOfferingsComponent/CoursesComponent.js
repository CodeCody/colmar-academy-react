import React,{ Component } from 'react';


export class CoursesComponent extends Component {
    render() {
      return (

          <div id={'courses'}>
          <div className={'courseItem'}>
              <img className='courseImage' src={require('../../images/course-software.jpg')} alt="course image"/>
              <h2>Software engineering</h2>
              <p>COURSES</p>
              <p>Web Development, Mobile Development ,iOT ,APIs</p>
          </div>

          <div className={'courseItem'}>
              <img className='courseImage' src={require('../../images/course-computer-art.jpg')} alt="course image"/>
              <h2>Computer Art</h2>
              <p>COURSES</p>
              <p>Imaging & Design, Web Design, Motion Graphics & Visual Effects, Computer Animation</p>
          </div>

          <div className={'courseItem'}>
              <img className='courseImage' src={require('../../images/course-design.jpg')} alt="course image"/>
              <h2>Design</h2>
              <p>COURSES</p>
              <p>User Experience Design, User Research, Visual Design</p>
          </div>


          <div className={'courseItem'}>
              <img className='courseImage' src={require('../../images/course-data.jpg')} alt="course image"/>
              <h2>Data</h2>
              <p>COURSES</p>
              <p>Data Science, Big Data, SQL, Data Visualization</p>
          </div>

          <div className={'courseItem'}>
              <img className='courseImage' src={require('../../images/course-business.jpg')} alt="course image"/>
              <h2>Business</h2>
              <p>COURSES</p>
              <p>Product Development, Business Development, Startup</p>
          </div>

          <div className={'courseItem'}>
              <img className='courseImage' src={require('../../images/course-marketing.jpg')} alt="course image"/>
              <h2>Marketing</h2>
              <p>COURSES</p>
              <p>Analytics, Content Marketing, Mobile Marketing</p>
          </div>

          </div>
      )
    }
}