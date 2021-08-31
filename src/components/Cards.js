import React from 'react'
import Card from './Card'

import blockchain1 from '../assets/blockchain1.svg'


const coins = [
    { code: 'BTC', label: 'Bitcoin' },
    { code: 'Eth', label: 'Ethereum' },
    { code: 'ADA', label: 'Cardano' },
    { code: 'BNB', label: 'Binance' },
    { code: 'LTC', label: 'Litecoin' },
    { code: 'XRP', label: 'Riple' },
    { code: 'EOS', label: 'Eos' },
 
  ];

const cards = [
    {
        id: 1,
        title: 'Moneda a Convertir',
        image: blockchain1,
        
    },

    {
        id: 2,
        title: 'Resultado 1',
        image: blockchain1
    },

    {
        id: 3,
        title: 'Resultado2',
        image: blockchain1
    }
]

function Cards() {
    
    const handleClick = (cardObject,card) => {
        //console.log( "clicked card is " , card.id);
    }
    return (

        <div className="container d-flex justify-content-center h-100 align-items-center">
            <div className= "row">
            {
                    cards.map (card=>(
                        <div className="col-md-4" key={card.id} >
                            <Card card={card} coinState={coins}/>
                        </div>
                    ))
                    
                }
             
                
            </div>  
        </div>
    )
}

export default Cards
