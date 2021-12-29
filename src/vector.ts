
import {staticImplements} from "./helpers";

export interface VectorOps<T>{
    clone() : T;
    add(vector : T) : T;
    subtract(vector : T) : T;
    multiply(vector : T) : T;
    normalize() : T;
}


export interface Vector<T> extends VectorOps<T>,ArrayBuffer{
    get squareLength() : number;
    get length() : number;
}


export interface VectorConstructor<T> {
    new (vector : T) : T;
    add(v1 : T, v2 : T) : T;
    subtract(v1 : T, v2 : T) : T;
    multiply(v1 : T, v2 : T) : T;
}

export abstract class VectorBase<T> extends Float32Array implements Vector<T> {
    
    constructor (source : ArrayBuffer, offset : number){
        super (source as ArrayBuffer, offset);
    }
    //abstract new(vector : T) : T;
    abstract get squareLength() : number;
    
    abstract add(vector: T): T;
    abstract subtract(vector: T): T;
    abstract multiply(vector: T): T;

    abstract clone() : T;
    abstract normalize() : T;
    get length() : number{
        return Math.sqrt(this.squareLength);
    }
    static add<T extends VectorOps<T>>(v1 : T, v2 : T) : T{
        return v1.clone().add(v2);
    }
    static subtract<T extends VectorOps<T>>(v1 : T, v2 : T) : T{
        return v1.clone().subtract(v2);
    }

    static multiply<T extends VectorOps<T>>(v1 : T, v2 : T) : T{
        return v1.clone().multiply(v2);
    }

}
