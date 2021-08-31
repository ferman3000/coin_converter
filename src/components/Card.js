import React from 'react'
//import image1 from '../assets/image1.jpg'
import TextField from '@material-ui/core/TextField';
import{ Autocomplete }from '@material-ui/lab';
import { makeStyles } from '@material-ui/core/styles';
import { GET_CURRENCIES } from '../redux/ActionTypes';


function countryToFlag(isoCode) {
    return typeof String.fromCodePoint !== 'undefined'
      ? isoCode
          .toUpperCase()
          .replace(/./g, (char) => String.fromCodePoint(char.charCodeAt(0) + 127397))
      : isoCode;
  }
  
  const useStyles = makeStyles({
    option: {
      fontSize: 15,
      '& > span': {
        marginRight: 10,
        fontSize: 18,
      },
    },
  });




  const mapStateToProps = ({ coinState }) => {
    return {
        coinState
    }
}

function Card({card, coinState}) {

    
    
    const handleValue = (word) => {
        console.log( "este es el valor del autocomplete " , word);
        console.log("soy la tarjeta", card,"me selecccionaron ", word)
    }

 

    const classes = useStyles();
    
    return (
        <div className="card text-center ">
            
            <div className="card-body">
                <img src={card.image} alt="" className="card-img-top"/>
                <h4 className="card-title">{card.title}</h4>
                <div>
                    <Autocomplete
                        onChange={(event, value,id) =>handleValue(value)}
                        id="country-select-demo"
                        style={{ width: 300 }}
                        options={coinState}
                        classes={{
                        option: classes.option,
                        }}
                        autoHighlight
                        getOptionLabel={(option) => option.label}
                        renderOption={(option) => (
                            <React.Fragment>                               
                                {option.label} ({option.code}) 
                            </React.Fragment>
                        )}
                        renderInput={(params) => (
                            
                            <TextField
                                {...params}
                                label="Coin"
                                variant="outlined"
                                inputProps={{
                                ...params.inputProps,
                                autoComplete: 'new-password', // disable autocomplete and autofill
                            }}
                            />
                        )}
                    />
              
            </div> 
            <div >
                <TextField style={{ width: 300 }} id="outlined-basic" label="Outlined" variant="outlined" />
            </div> 
        </div>

   

    </div>
 
    )
}




export default Card
