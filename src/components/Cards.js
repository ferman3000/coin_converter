import React, {useEffect} from 'react'
import Card from './Card'
import { GET_CURRENCIES } from '../redux/ActionTypes';
import blockchain1 from '../assets/blockchain1.svg'
import { connect } from 'react-redux';



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

function Cards({getCurrency, coinState, translate}) {
    
    useEffect( ()=> {
        getCurrency();
    },[]);
    
    const getValor = () => {
        console.log( "le di al boton", coinState);
    }
    return (

     

        <div className="container d-flex justify-content-center h-100 align-items-center">
            
            <div className= "row">
            {
                    cards.map (card=>(
                        <div className="col-md-4" key={card.id} >
                            <Card card={card} coinState={coinState} getValor={getValor}/>
                        </div>
                        
                    ))
                    
                }

            <div>
                    
            <button onClick={()=>getValor()}>Calcular</button>        
                
            </div>    
             
                
            </div>  
            
        </div>
    )
}

const mapStateToProps = ({ coinState }) => {
    return {
        coinState
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getCurrency: () => dispatch({ type: GET_CURRENCIES }),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Cards);
