import React, {useEffect} from 'react'
import { connect } from 'react-redux';
import { GET_CURRENCIES } from '../redux/ActionTypes';

const main = ({getCurrency, translate, coinState} ) => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect( ()=> {
        getCurrency();
    },[]);

    return (  
        
        <div>
            {translate("hola estoy en main")}
           
            {coinState.currencies.map((currency)=>{
                //console.log(currency.name)
            })}


        
        
        </div>
        
        
    );
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
)(main);

