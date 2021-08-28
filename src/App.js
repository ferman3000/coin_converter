import './App.css';
import React, { useState } from 'react';
import { I18nProvider, LOCALES } from './i18n';
import translate from './i18n/translate'

function App() {
   const [locale, setLocale] = useState(LOCALES.SPANISH)
  return (
    <I18nProvider locale= {locale}>  
      <div className="App">
          {translate("hola")}      
      </div>
      <button onClick={() => setLocale(LOCALES.SPANISH)}>Español</button>
      <button onClick={() => setLocale(LOCALES.ENGLISH)}>English</button>
    </I18nProvider>
  );
}

export default App;
