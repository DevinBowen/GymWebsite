import React, {Component} from 'react';
import '../../css/home.css';
import {Link} from 'react-router-dom';

export default class Home extends Component {
    render() {
        return (
            <div className='main'>
                <div className='bio'>
                    <div>BIO</div>
                    <div><img url={require("../../img/ham.png")} alt="bio" /></div>
                    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sem interdum, consequat libero sed, aliquet est. In dignissim eget mauris non viverra. Sed vel dolor accumsan diam lacinia tincidunt ut ut libero. Nunc mattis aliquam auctor. Donec facilisis sollicitudin risus, eget ultricies mi semper sed. Pellentesque a scelerisque orci. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Praesent quis tincidunt dolor, rhoncus imperdiet velit. Nunc placerat enim ac sapien maximus, vitae semper mi sollicitudin. Nullam ultrices diam et euismod feugiat. Sed ac orci neque. Aenean risus elit, lobortis nec gravida ut, ultricies vel velit. Duis gravida quam in malesuada vulputate. Nunc et ante tempor, imperdiet orci vitae, facilisis metus.</div>
                </div>
                <div className='about'>
                    <div>ABOUT</div>
                    <div><img url={require("../../img/ham.png")} alt="about" /></div>
                    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sem interdum, consequat libero sed, aliquet est. In dignissim eget mauris non viverra. Sed vel dolor accumsan diam lacinia tincidunt ut ut libero. Nunc mattis aliquam auctor. Donec facilisis sollicitudin risus, eget ultricies mi semper sed. Pellentesque a scelerisque orci. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Praesent quis tincidunt dolor, rhoncus imperdiet velit. Nunc placerat enim ac sapien maximus, vitae semper mi sollicitudin. Nullam ultrices diam et euismod feugiat. Sed ac orci neque. Aenean risus elit, lobortis nec gravida ut, ultricies vel velit. Duis gravida quam in malesuada vulputate. Nunc et ante tempor, imperdiet orci vitae, facilisis metus.</div>
                </div>
            </div>
        )
    }
}