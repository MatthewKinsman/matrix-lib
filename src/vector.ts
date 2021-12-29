
import {staticImplements} from "./helpers";

export interface Vector extends ArrayBuffer{
    get squareLength() : number;
    get length() : number;
}



export interface VectorAdd<T>{
    add(vector : T) : T;
}



export interface VectorConstructor<T> {
    new (vector : T) : T;
    add(v1 : T, v2 : T) : T;
    //clone() : T;
    //subtract(v1 : T, v2 : T) : T;
    //multiply(v1 : T, v2 : T) : T;
}

export interface VectorOps<T>{
    add(vector : T) : T;
    clone() : T;
    normalize() : T;
    //(source : T) : T;
}


//export interface VectorOps<T> extends VectorMath<T>{
    //    normalize() : T;
    //    multiply(vector : T) : T;
        
    //    new(source : T) : T;
    //    subtract(vector : T) : T;
    //    clone() : T;
//}

export abstract class VectorBase<T> extends Float32Array implements Vector, VectorOps<T> {
    
    constructor (source : ArrayBuffer, offset : number){
        super (source as ArrayBuffer, offset);
    }
    //abstract new(vector : T) : T;
    abstract get squareLength() : number;
    //abstract multiply(vector: T): T;
    abstract add(vector: T): T;
    //abstract subtract(vector: T): T;
    abstract clone() : T;
    abstract normalize() : T;
    get length() : number{
        return Math.sqrt(this.squareLength);
    }
    static add<T extends VectorOps<T>>(v1 : T, v2 : T) : T{
        return v1.clone().add(v2);
    }
    //static subtract<T extends VectorBase<T>>(v1 : T, v2 : T) : T{
    //    return v1.clone().subtract(v2);
    //}
    //static multiply<T extends VectorBase<T>>(v1 : T, v2 : T) : T{
    //    return v1.clone().multiply(v2);
    //}
}
