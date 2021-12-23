import { Vector, VectorBase } from "./vector";

export interface Vector2 extends Vector{
    get x() : number;
    set x(value : number);
    get y() : number;
    set y(value : number);
}

/** @internal */
export class Vector2Impl extends VectorBase implements Vector2{
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
}

interface Vector2Constructor{
    new() : Vector2;
    new(vector : Vector2) : Vector2;
    new (x: number, y : number) : Vector2;
}

export var Vector2 : Vector2Constructor = Vector2Impl;
