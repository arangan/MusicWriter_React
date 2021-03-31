import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './components/header.css';
import IDocumentHeader from './interfaces/IDocumentHeader';

import { DocumentHeader } from './components/header';

interface AppState {
  header:IDocumentHeader
}

class App extends Component<{},AppState> {
  docHeaderProp: IDocumentHeader = {
    symbol: 'ॐ',
    raag: 'श्री',
    taal: 'झप',
    aroh: 'नि᳝ सा रे॒ म॔ प नि सां',
    avroh: 'सां नि ध॒ प म॔ ग रे॒ ग रे॒ रे॒ सा'
  };

  onSaveClick = () => {
    alert("save clicked");
  }

  onHeaderChange = (val:string) => {
    // this.docHeaderProp = val;
    alert(val);
  }

  constructor() {
    
  }

  render() {
    return (
      <>
        <button onClick={() => this.onSaveClick()} >Save</button>
        <DocumentHeader symbol="RAM" callback={this.onHeaderChange} />
        {/* onHeaderChange={this.onHeaderChange} /> */}
      </>
    );
  }
}

export default App;
