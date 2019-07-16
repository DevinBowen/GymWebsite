import React, {Component} from 'react';
import '../../css/home.css';
import {Link} from 'react-router-dom';

export default class Home extends Component {
    render() {
        return (
            <div className='main'>
                <div className='bio'>
                    BIO
                </div>
                <div className='about'>
                    ABOUT
                </div>
            </div>
        )
    }
}