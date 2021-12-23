export interface Vector extends ArrayBuffer{
    get squareLength() : number;
    get length() : number;
}

export abstract class VectorBase extends Float32Array implements Vector{
    constructor (source : ArrayBuffer, offset : number){
        super (source, offset);
    }
    abstract get squareLength() : number;
    get length() : number{
        return Math.sqrt(this.squareLength);
    }
}

