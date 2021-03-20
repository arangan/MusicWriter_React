import React,{Component} from "react";

interface IDocumentHeader  {
    symbol?:string;
    raag?:string;
    taal?:string;
    aroh?:string;
    avroh?:string;
};

class DocumentHeader extends Component<IDocumentHeader> {
    static defaultProps = { symbol:'உ'};
    documentHeader:IDocumentHeader;

    constructor(props:IDocumentHeader) {
       super(props);
       this.Span_OnChange = this.Span_OnChange.bind(this);

       this.documentHeader = Object.assign({} as IDocumentHeader,props); 
       this.documentHeader.symbol = this.documentHeader.symbol ?? DocumentHeader.defaultProps.symbol;
    }

    async Span_OnChange(evt:any)
    {
        console.log(typeof(evt));
       evt.preventDefault();
        return false;
    }

    render() {
        return (<>
 <div className="headerGrid">
        <div className="logo"><span className="underLine">{this.documentHeader.symbol}</span></div>
        <div><span className="underLine">राग</span></div><div className="colon">:</div><div>{this.documentHeader.raag}</div> <div className="rightAlign"><span className="underLine">आराेह</span></div><div className="colon">:</div><div>{this.documentHeader.aroh}</div>
        <div><span className="underLine">ताल</span></div><div className="colon">:</div><div>{this.documentHeader.taal}</div><div className="rightAlign"><span className="underLine">अवरोह</span></div><div className="colon">:</div><div>{this.documentHeader.avroh}</div>
    </div>            
        </>);
    }
}

export type {IDocumentHeader};
export {DocumentHeader}
