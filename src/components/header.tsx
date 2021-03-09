import React,{Component} from "react";

type IDocumentHeader = {
    symbol?:string;
    raag?:string;
    taal?:string;
    aroh?:string;
    avroh?:string;
};

class DocumentHeader extends Component<IDocumentHeader> {
    static defaultProps = { symbol:'உ'};

    constructor(props:IDocumentHeader) {
        super(props);
        this.Span_OnChange = this.Span_OnChange.bind(this);
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
        <div className="logo"><span className="underLine">ॐ</span></div>
        <div><span className="underLine">राग</span></div><div className="colon">:</div><div>श्री</div> <div className="rightAlign"><span className="underLine">आराेह</span></div><div className="colon">:</div><div>नि᳝ सा रे॒ म॔ प नि सां</div>
        <div><span className="underLine">ताल</span></div><div className="colon">:</div><div>झप</div><div className="rightAlign"><span className="underLine">अवरोह</span></div><div className="colon">:</div><div>सां नि ध॒ प म॔ ग रे॒ ग रे॒ रे॒ सा</div>
    </div>            
        </>);
    }
}

export type {IDocumentHeader};
export {DocumentHeader}
