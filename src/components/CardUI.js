import '../KcStyle.css';

import React from 'react';



const CardUI = (props) =>{

    return (          
        <div className="card text-center">
            {/* Header */ }            
            <div className="card-body text-dark">
                <span className="circle">                                      
                    <span className="card-text-pos">
                        <img src={props.imgUrl} alt={props.btnText} className="card-img-top"/>  
                            {props.btnText}
                    </span>
                </span> 
                
                    
                
                
            </div>  
            
        </div>
        
    );


}

export default CardUI;