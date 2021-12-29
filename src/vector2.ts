import { Vector, VectorBase, VectorOps, VectorConstructor } from "./vector";
import {staticImplements} from "./helpers";


export interface Vector2 extends Vector{
    get x() : number;
    set x(value : number);
    get y() : number;
    set y(value : number);
    add(vector : Vector2) : Vector2;
    clone() : Vector2;
    normalize() : Vector2;
}

interface Vector2Constructor extends VectorConstructor<Vector2>{
    new() : Vector2;
    new (x: number, y : number) : Vector2;
}

/** @internal */
@staticImplements<Vector2Constructor>()
export class Vector2Impl extends VectorBase<Vector2> implements Vector2 {
    constructor(p1? : ArrayBuffer | Vector2 | number, p2 : number = 0){
        if (p1 instanceof Vector2Impl){
            super(new ArrayBuffer(8), 0);
            this.set([p1.x, p1.y]);
        }else{
            if(p1 instanceof ArrayBuffer){
                super(p1,p2);
            }else{
                super(new ArrayBuffer(8), 0);
                const x = p1 as number;
                this.set([p1 ?? 0, p2]);
            }
        }
    }
    get x(): number {
        return this[0];
    }
    set x(value: number) {
        this[0] = value;
    }
    get y(): number {
        return this[1];
    }
    set y(value: number) {
        this[1] = value;
    }
    get squareLength(): number {
        return this[0]*this[0]+this[1]*this[1];
    }
    clone() : Vector2{
       return new Vector2(this);
    }
    add(vector : Vector2) : Vector2{
        this.x+=vector.x; this.y+=vector.y;
        return this;
    }
    subtract(vector : Vector2) : Vector2{
        this.x-=vector.x; this.y-= vector.y;
        return this;
    }
    multiply(vector : Vector2) : Vector2{
        return this;
    }
    normalize(): Vector2 {
        const n = 1.0/this.length;
        this[0]*=n; this[1] *= n;
        return this;
    }
}

export var Vector2 : Vector2Constructor = Vector2Impl;
