import React, {useRef,useState, useEffect} from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap';
import{ Autocomplete }from '@material-ui/lab';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import { GET_CONVERTIONS, GET_CURRENCIES } from '../redux/ActionTypes';
import { I18nProvider, LOCALES } from '../i18n';
import ReactCountryFlag from "react-country-flag";
import styles from'../styles/coinCripto.css';



  

const CriptoMain = ({getCurrency, coinState, getConvertion, translate}) =>{
    const amountRef=useRef();
    const [loading,setLoading]=useState(false);
    const [amount,setAmount]=useState("");

    const [criptoSelection,setCriptoSelection]=useState(false);
    const [criptoSelectionResultOne,setcriptoSelectionResultOne]=useState(false);
    const [criptoSelectionResultTwo,setcriptoSelectionResultTwo]=useState(false);

    const [coinOption,setcoinOption]=useState("");
    const [coinOptionResultOne,setcoinOptionResultOne]=useState("");
    const [coinOptionResultTwo,setcoinOptionResultTwo]=useState("");

    const validateData=(loading || criptoSelection || criptoSelectionResultOne || criptoSelectionResultTwo)
    const [locale, setLocale] = useState(LOCALES.SPANISH)



    useEffect(() => {
        getCurrency()
        if (coinOption){
            setLoading(false);
            setCriptoSelection(false);
            setcriptoSelectionResultOne(false);
            setcriptoSelectionResultTwo(false);
            return;
        }
        setLoading(true);
        setCriptoSelection(true);
        setcriptoSelectionResultOne(true);
        setcriptoSelectionResultTwo(true);

    }, [])

    function handleSubmit(e){
        e.preventDefault()
        setAmount(amountRef.current.value)
        const consultObject={        
            amount: amountRef.current.value,
            currency1:coinOption,
            currency2:coinOptionResultOne,
            currency3:coinOptionResultTwo}
        getConvertion(consultObject)
 
    }

    const handleValueAmount =(word)=>{
        if (word) {
            setcoinOption(word.id)
            setLoading(false);
            setCriptoSelection(false)
            return;
        }
        setLoading(true)
        setCriptoSelection(true)
        setAmount("")
    }

    const handleValueRespOne =(word)=>{
        if (word) {
            setcoinOptionResultOne(word.symbol)
            setLoading(false);
            setcriptoSelectionResultOne(false)
            return;
        }
        setLoading(true)
        setcriptoSelectionResultOne(true)
        setAmount("")
    }

    const handleValueRespTwo =(word)=>{
        if (word) {
            setcoinOptionResultTwo(word.symbol)
            setLoading(false);
            setcriptoSelectionResultTwo(false)
            return;
        }
        setLoading(true)
        setcriptoSelectionResultTwo(true)
        setAmount("")
    }

    return (
        <>
        <Card>
            <Card.Body>
            <I18nProvider locale= {locale}> 
                <h2 className="text-center mb-4">{translate("Convertidor de Monedas")}</h2>
                <Form onSubmit={handleSubmit}>
                <div className={styles.marginTop}>
                    <div className="marginTop align">
                        <Form.Group id='amount' >
                            <Form.Label>{translate("Cantidad")}</Form.Label>
                            <Form.Control type="number" min="1" ref={amountRef} required></Form.Control>
                        </Form.Group>
                    </div>
                    <div style={{alignItems:'center', marginTop:"10px"}}> 
                    <Autocomplete
                        onChange={(event, value) =>handleValueAmount(value)}
                        id="combo-box-demo"
                        options={coinState.currencies}
                        getOptionLabel={(option) => option.name}
                        renderOption={(option)  => (
                            <React.Fragment>    
                             {option.name} ({option.symbol}) 
                            </React.Fragment>
                        )}
                        renderInput={(params) => <TextField {...params} label={translate("Moneda Uno")} variant="outlined" />}
                    />
                    </div>
                </div>

                <div >
                    <div style={{ marginTop:"30px"}}>
                        <Form.Group id='amount'>
                            <div style={{alignItems:'center', marginTop:"50px"}}> 
                                <Autocomplete
                                id="combo-box-demo"
                                onChange={(event, value) =>handleValueRespOne(value)}
                                options={coinState.currencies}
                                getOptionLabel={(option) => option.name}
                                renderOption={(option)  => (
                                    <React.Fragment>    
                                     {option.name} ({option.symbol}) 
                                    </React.Fragment>
                                )}
                                renderInput={(params) => <TextField {...params} label={translate("Moneda Dos")} variant="outlined" />}
                                />
                                <Form.Label style={{marginTop:"5px", marginBottom:"0px"}}>{translate('Resultado Uno')}</Form.Label>
                                
                                { coinState.objectResultConvertion.resultOne  && <Form.Control  type="string"  value={coinState.objectResultConvertion.resultOne.toString()} disabled= {true}></Form.Control>}
                                
                            </div>
                        </Form.Group>
                    </div>
                </div>

                <div >
                    <div style={{ marginTop:"30px"}}>
                        <Form.Group id='amount'>
                            <div style={{alignItems:'center', marginTop:"50px"}}> 
                                <Autocomplete
                                    id="combo-box-demo"
                                    onChange={(event, value) =>handleValueRespTwo(value)}
                                    options={coinState.currencies}
                                    getOptionLabel={(option) => option.name}
                                    renderOption={(option)  => (
                                        <React.Fragment>    
                                         {option.name} ({option.symbol}) 
                                        </React.Fragment>
                                    )}
                                    renderInput={(params) => <TextField {...params} label={translate("Moneda Tres")} variant="outlined" />}
                                />
                                <Form.Label style={{marginTop:"5px", marginBottom:"0px"}}>{translate('Resultado Dos')}</Form.Label>             
                                {   coinState.objectResultConvertion.resultTwo && <Form.Control type="string" value={coinState.objectResultConvertion.resultTwo} disabled ={true}></Form.Control>  }
                            </div>
                        </Form.Group>
                    </div>
                </div>
                    <div>
                    <Button  style={{marginTop:20}}  disabled={validateData} className="w-100 " type='submit' >
                        {translate("Calcular")}
                    </Button>
                    </div>
                    <div style={{alignItems:'center', marginTop:"10px"}}>
                    <Button onClick={() => setLocale(LOCALES.ENGLISH)}  style={{marginTop:20, alignItems:'center' , backgroundColor: '#FFFF', borderColor:'#FFFF'}}>
                            <ReactCountryFlag 
                                countryCode="US"
                                svg
                                style={{
                                    width: '2em',
                                    height: '2em',   
                                    alignItems:'center'                    
                                }}
                                title="US"
                            />
                        </Button>
                        <Button onClick={() => setLocale(LOCALES.SPANISH)} style={{marginTop:20, alignItems:'center', backgroundColor: '#FFFF',borderColor:'#FFFF'}}>
                            <ReactCountryFlag
                                countryCode="ES"
                                svg
                                style={{
                                    width: '2em',
                                    height: '2em',
                                    alignItems:'center' 
                                }}
                                title="ES"
                            />
                        </Button>
                    </div>

                   

                    
                </Form>
            </I18nProvider>
            </Card.Body>
        </Card>
             <div className= "w-100 text-center mt-2">
                {coinState.error && <Alert variant="danger">{coinState.errorMessage.title} </Alert>}
             </div> 
     </>

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
        getConvertion: (consultObject) => dispatch({ type: GET_CONVERTIONS, payload:consultObject }),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CriptoMain);
