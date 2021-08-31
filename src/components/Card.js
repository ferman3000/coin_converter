import React from 'react'
//import image1 from '../assets/image1.jpg'
import TextField from '@material-ui/core/TextField';
import{ Autocomplete }from '@material-ui/lab';
import { makeStyles } from '@material-ui/core/styles';


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

function Card({card, coinState}) {

    console.log( "estados del coin desde Card " , coinState);
    
    const handleValue = (word) => {

        if (word) {
            console.log( "este es el valor del autocomplete " , word);
            //console.log("soy la tarjeta", card.title,"me selecccionaron ", word.symbol)
           
            switch(card.id){
            
                case 1: 
                    console.log('Estoy en opción 1', word.name)
                    coinState.fullNameCoin = word.name
                break;
    
                case 2: 
                    console.log('Estoy en opción 2', word.symbol)
                break;
                
                case 3: 
                    console.log('Estoy en opción 3', word.symbol)
                break;
            
                default: break;
            }
        }
           
       /* if (word.name){
                coinState.validateData=true;
            
                return;
            }
            
        if ((card.id===2)&&(word.symbol)){
                coinState.validateData=true;
                return;
            }
        
        if ((card.id===3)&&(word.symbol)){
                coinState.validateData=true;
                return;
            }*/
        

    }

  /*function getValor() {
      console.log("Me presionaron desde cards")
  }*/

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
                        options={coinState.currencies}
                        classes={{
                        option: classes.option,
                        }}
                        autoHighlight
                        getOptionLabel={(option) => option.name}

                        renderOption={(option)  => (

                            <React.Fragment>    
                             {option.name} ({option.symbol}) 
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
