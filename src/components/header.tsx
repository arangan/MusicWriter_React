import React,{Component} from "react";

interface IDocumentHeader  {
    symbol?:string;
    raag?:string;
    taal?:string;
    aroh?:string;
    avroh?:string;
    callback?: (data:string) => void;
};

class DocumentHeader extends Component<IDocumentHeader, IDocumentHeader, any> {
    static defaultProps = { symbol:'உ'};
    documentHeader:IDocumentHeader;
    delegate:any;

    constructor(props:IDocumentHeader, delegate:any) {
       super(props);
    //    this.Span_OnChange = this.Span_OnChange.bind(this);

       this.documentHeader = Object.assign({} as IDocumentHeader,props); 

        this.state = this.documentHeader;
        this.delegate = this.state.callback;


        console.log(this.state);
        
       //this.documentHeader.symbol = this.documentHeader.symbol ?? DocumentHeader.defaultProps.symbol;
    }

    Span_OnChange = async (evt:any) => {
        // this.setState( (prev) => ({symbol: prev.symbol + 'XX'}));
        console.log(evt.target.innerText);
        this.setState({symbol:evt.target.innerText});
        console.log(this.state);
        //this.delegate('hello');
    //    evt.preventDefault();
        return false;
    }

    Show_State = async (evt:any) => {

        // this.state.callback?('Arvind');
        this.delegate('Arvind');
        
        //console.log(this.state);
    }

    render() {
        return (<>
    <div className="headerGrid">
        <div className="logo"><span className="underLine" suppressContentEditableWarning={true} contentEditable={true} onInput={this.Span_OnChange}>{this.state.symbol}</span></div>
        <div><span className="underLine">राग</span></div><div className="colon">:</div><div contentEditable="true">{this.state.raag}</div> <div className="rightAlign"><span className="underLine">आराेह</span></div><div className="colon">:</div><div>{this.state.aroh}</div>
        <div><span className="underLine">ताल</span></div><div className="colon">:</div><div>{this.state.taal}</div><div className="rightAlign"><span className="underLine">अवरोह</span></div><div className="colon">:</div><div>{this.state.avroh}</div>
    </div>
    <button onClick={this.Show_State}>OK</button>            
        </>);
    }
}

export type {IDocumentHeader};
export {DocumentHeader}
