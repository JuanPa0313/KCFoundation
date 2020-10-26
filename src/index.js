import React from 'react';
import ReactDOM from 'react-dom';
import ControlledCarousel from './components/ControlledCarousel'
import NavBar from './components/NavBar';
import HowToHelp from './components/HowToHelp'
import Cards from "./components/Cards"




const App = () =>{
    return (
        <div>
            <NavBar />
           <ControlledCarousel />
           <HowToHelp />
           <Cards />
           
        </div>
    );
}

ReactDOM.render(<App/>, document.querySelector('#root'));
