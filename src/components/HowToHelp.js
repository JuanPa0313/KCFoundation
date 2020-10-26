import '../KcStyle.css';

import React, {useState} from 'react';
import Cards from './Cards'

function HowToHelp(){

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) =>{
        setIndex(selectedIndex);
    };

    return (
        <div>
            <div className="howToHelp">
                <img src="../assets/imgs/worldmap.svg" className="howToHelp-img"></img>
                 <h1>Como puedes ayudar?</h1>
                 <div className="howtoHelpUnderline"></div>
                 <p>Nuestra fundacion se basa en las buenas acciones y donaciones de las otras personas. 
                    Si deseas ayudar, continuamente estamos recibiendo donaciones de articulos escolares, 
                    suministros medicos, alimentos no perecederos e implementos deportivos para enviar a
                    los diferentes paises de Latino America
                    </p>
            </div>           
               
        </div>
    )
}

export default HowToHelp;

                
          