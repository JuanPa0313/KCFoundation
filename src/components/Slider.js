import { render } from '@testing-library/react';
import React from 'react';
import Coverflow from 'react-coverflow';

const Slider = () =>{   
    const fn =()=>{

    }   

    
    return (
        <div className="slider-howToHelp">
            <Coverflow width="960" height="500" classes={{background: 'rgb(233, 23, 23)', transform: 'translateX(0px) rotateY(50deg) scale(0.9)'}} className=''
                    displayQuantityOfSide={2}
                    navigation={false}
                    enableScroll={true}
                    clickable={true}
                    active={0} 
                    otherFigureScale={0.9}>
                    <div
                        onClick={() => fn()}
                        onKeyDown={() => fn()}
                        role="menuitem"
                        tabIndex="0">
                            <img
                                src='../assets/imgs/20200901_201520.jpg'
                                alt='title or description'
                                style={{
                                display: 'block',
                                width: '100%',
                                }}/>
                    </div>
                        <img src='../assets/imgs/20200901_201520.jpg' alt='title or description' data-action="http://andyyou.github.io/react-coverflow/"/>
                        <img src='../assets/imgs/20200901_201520.jpg' alt='title or description' data-action="http://andyyou.github.io/react-coverflow/"/>
            </Coverflow>
        </div>
    );
    
};

export default Slider;

