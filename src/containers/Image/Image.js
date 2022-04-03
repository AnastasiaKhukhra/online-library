import React from 'react';
import backPhoto from '../../images/main-page.jpeg'

import './Image.module.css';

const Image = (props) => {
    return (
        <>
        <div
            // className="image"
            style={{
                // backgroundImage: `url('${props.imgURL}')`,
                // backgroundImage: `url(http://localhost:8080/images/duck.jpg)`,
                backgroundImage: `url(${backPhoto})`,
                // backgroundSize: props.contain ? 'contain' : 'cover',
                // backgroundPosition: props.left ? 'left' : 'center',
                width: '100%',
                height: '100%',
                backgroundRepeat: 'no-repeat'
            }}
        />
                {/* <img src={props.imgURL} alt="Duck"/> */}

        </>
    );
}
export default Image;
