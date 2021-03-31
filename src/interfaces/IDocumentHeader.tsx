
export default interface IDocumentHeader  {
    symbol?:string;
    raag?:string;
    taal?:string;
    aroh?:string;
    avroh?:string;
    callback?: (data:string) => void;
};