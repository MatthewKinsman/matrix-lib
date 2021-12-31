import { staticImplements } from "./helpers";
import { VectorConstructor } from "./vector";
import { Vector3Base, Vector3 } from "./vector3";

export interface Vector4 extends Vector3{
    get w() : number;
    set w(value : number);
    add(vector : Vector4) : Vector4;
    subtract(vector : Vector4) : Vector4;
    multiply(vector : Vector4) : Vector4;
    clone() : Vector4;
    normalize() : Vector4;
}

interface Vector4Constructor extends VectorConstructor<Vector4>{
    new() : Vector4;
    new (x: number, y : number, z: number, w: number) : Vector4;
}


/** @internal */
export abstract class Vector4Base<T> extends Vector3Base<T> {
    get w(): number{
        return this[3];
    }
    set w(value: number) {
        this[3] = value;
    }
}

/** @internal */
@staticImplements<Vector4Constructor>()
export class Vector4Impl extends Vector4Base<Vector4> implements Vector4{
    constructor(p1? : ArrayBuffer | Vector4 | number, p2 : number = 0, p3 : number = 0, p4 : number = 0){
        if (p1 instanceof Vector4Base){
            super(new ArrayBuffer(16), 0);
            this.set([p1.x, p1.y, p1.z, p1.w]);
        }else{
            if(p1 instanceof ArrayBuffer){
                super(p1,p2);
            }else{
                super(new ArrayBuffer(16), 0);
                const x = p1 as number;
                this.set([p1 ?? 0, p2, p3, p4]);
            }
        }
    }
    get squareLength(): number {
        return this[0]*this[0]+this[1]*this[1]+this[2]*this[2];
    }
    add(vector: Vector4): Vector4 {
        this.x+=vector.x; this.y+=vector.y; this.z+=vector.z; this.w+=vector.w;
        return this;
    }
    subtract(vector: Vector4): Vector4 {
        this.x-=vector.x; this.y-=vector.y; this.z-=vector.z;this.w-=vector.w;
        return this;
    }
    multiply(vector: Vector4): Vector4 {
        this.x *= vector.x; this.y*= vector.y; this.z *= vector.z;this.w*=vector.w;
        return this;
    }
    clone() : Vector4{
        return new Vector4(this);
    }
    normalize() : Vector4{
        const n = 1.0/this.length;
        this.x *= n; this.y *= n; this.z *= n;this.w*=n;
        return this;
    }
}

export var Vector4 : Vector4Constructor = Vector4Impl;
