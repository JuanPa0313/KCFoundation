import '../KcStyle.css';

import React,{useState} from 'react';
import Carousel from 'react-bootstrap/Carousel';


function ControlledCarousel(){
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) =>{
        setIndex(selectedIndex);
    };

    return(
        <div>
            <Carousel activeIndex={index} onSelect={handleSelect} >
            <Carousel.Item>
                <img 
                    className='d-block w-100 carousel-img'
                    src="../assets/imgs/20200901_201520.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>                    
                    <h3>Empoderar <span id="fromRight">a los niños</span></h3>                                        
                    <h3>
                        <span>A través de la educación</span>
                    </h3>
                    
                </Carousel.Caption>
            </Carousel.Item>
            {/* <Carousel.Item>
                <img
                className="d-block w-100 carousel-img"
                src="../Medico.jpg"
                alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <div id="overlay" className="overlay"></div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 carousel-img"
                src="../Deporte.png"
                alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item> */}
        </Carousel>
        </div>
        
    );
}

export default ControlledCarousel;

