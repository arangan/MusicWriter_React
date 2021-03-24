import React from 'react';
import logo from './logo.svg';
import './App.css';
import './components/header.css';

import {DocumentHeader, IDocumentHeader} from './components/header';


function App() {
  const docHeaderProp:IDocumentHeader = { 
    symbol: 'ॐ',
    raag:'श्री',
    taal:'झप',
    aroh:'नि᳝ सा रे॒ म॔ प नि सां',
    avroh:'सां नि ध॒ प म॔ ग रे॒ ग रे॒ रे॒ सा'
  };

  const onSaveClick = () => {
    alert("save clicked");
  }

  return (
    <>
      <button onClick={()=>onSaveClick() } >Save</button>
      <DocumentHeader {...docHeaderProp} />
    </>
  );
}

export default App;
