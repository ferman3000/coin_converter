import './App.css';
import React from 'react';
import translate from './i18n/translate'
import ReduxWrap from './redux/ReduxWrap';
import { Container } from 'react-bootstrap';
import CriptoMain from './components/CriptoMain';


function App() {
 

  return (
    
       
    <Container className='d-flex aling-item-center justify-content-center'
               style={{minHeight:"100vh",alignItems:'center'}}>
      <div className='w-100'
           style={{maxWidth:"600px"}}>
            <ReduxWrap>
              <CriptoMain
                translate= {translate}
              />
            </ReduxWrap>
      </div>                  


    </Container>
   
  );
}

export default App;
