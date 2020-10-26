import React from 'react';
import Card from './CardUI';



const Cards = () => {
    const cardInfo=[
        {
            text: 'Make a Gift',
            imgUrl: '../assets/imgs/Hand-In-Hand.svg',
            url:''
        },
        {
            text: 'Donate Us',
            imgUrl: '../assets/imgs/donate.svg',
            url:''
        },
        {
            text: 'More Information',
            imgUrl: '../assets/imgs/info.svg',
            url:''
        }
    ]

    const renderCards = cardInfo.map((info)=>{
        return (
            <div class='card-pos'>
                <Card imgUrl={info.imgUrl} btnText={info.text} toUrl={info.url} />
            </div>
        );
    });

    return (
        <div class='container-fluid d-flex justify-content-center card-mar'>
            <div class='row'>   
                 {renderCards}         
            </div>
        </div>
    );
};

export default Cards;