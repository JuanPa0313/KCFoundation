import '../KcStyle.css';

import React,{Component} from 'react';
import Nav from 'react-bootstrap/Nav';



export default class NavBar extends Component{

    render(){
        return(
            <div className="customNav">
                <img src="./assets/imgs/kcf.png" className="kcf-Logo"></img>
                <Nav className="justify-content-center" as="ul" >
                    <Nav.Item as="li">
                        <Nav.Link href="">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link href="">Nuestro Impacto</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link href="">Nuestros Aliados</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link href="">Formar Parte</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link href="">Contacto</Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
            
        );
    }    

}