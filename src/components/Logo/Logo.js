import React from 'react';
import Tilt from 'react-tilt';
import Gingerman from './gingerman.png'
import './Logo.css';

const Logo = () => {
    return (
        <div className='ma5 mt0' style={{ position: 'relative', bottom: '70px' }}>
            <Tilt className="Tilt br2 shadow-2" options={{ max: 60 }} style={{ height: 140, width: 140 }} >
                <div className="Tilt-inner pa2">
                    <img style={{ paddingTop: '5px' }} alt='logo' src={Gingerman} />
                    
                </div>
            </Tilt>
        </div>
    );
}

export default Logo;