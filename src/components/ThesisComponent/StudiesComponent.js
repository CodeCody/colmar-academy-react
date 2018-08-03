import React,{ Component } from 'react';

export class StudiesComponent extends Component {
    render() {
        return (
            <section id={'thesis_items'}>
                <div className={'thesis_item'}>
                    <img className='thesisImage' src={require('../../images/thesis-fisma.jpg')} alt='thesis image'/>
                    <div>
                        <h3>Fisma: Design and prototype</h3>
                        <p>Designer showcase of new prototype product</p>
                    </div>
                </div>
                <div className={'thesis_item'}>
                    <img className='thesisImage' src={require('../../images/thesis-now-and-then.jpg')} alt='thesis image'/>
                    <div>
                        <h3>Now and then</h3>
                        <p>Research study about New York</p>
                    </div>
                </div>
            </section>
        )

    }
}