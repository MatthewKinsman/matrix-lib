import {staticImplements} from "./helpers";
import { VectorConstructor } from './vector';
import { Vector2Base, Vector2} from './vector2';

export interface Vector3 extends Vector2 {
    get z() : number;
    set z(value : number);
    add(vector : Vector3) : Vector3;
    subtract(vector : Vector3) : Vector3;
    multiply(vector : Vector3) : Vector3;
    clone() : Vector3;
    normalize() : Vector3;
}

interface Vector3Constructor extends VectorConstructor<Vector3>{
    new() : Vector3;
    new (x: number, y : number, z: number) : Vector3;
}

/** @internal */
export abstract class Vector3Base<T> extends Vector2Base<T> {
    get z(): number{
        return this[2];
    }
    set z(value: number) {
        this[2] = value;
    }
}

/** @internal */
@staticImplements<Vector3Constructor>()
export class Vector3Impl extends Vector3Base<Vector3> implements Vector3{
    constructor(p1? : ArrayBuffer | Vector3 | number, p2 : number = 0, p3 : number = 0){
        if (p1 instanceof Vector3Base){
            super(new ArrayBuffer(12), 0);
            this.set([p1.x, p1.y, p1.z]);
        }else{
            if(p1 instanceof ArrayBuffer){
                super(p1,p2);
            }else{
                super(new ArrayBuffer(12), 0);
                const x = p1 as number;
                this.set([p1 ?? 0, p2, p3]);
            }
        }
    }
    get squareLength(): number {
        return this[0]*this[0]+this[1]*this[1]+this[2]*this[2];
    }
    add(vector: Vector3): Vector3 {
        this.x+=vector.x; this.y+=vector.y; this.z+=vector.z;
        return this;
    }
    subtract(vector: Vector3): Vector3 {
        this.x-=vector.x; this.y-=vector.y; this.z-=vector.z;
        return this;
    }
    multiply(vector: Vector3): Vector3 {
        this.x *= vector.x; this.y*= vector.y; this.z *= vector.z;
        return this;
    }
    clone() : Vector3{
        return new Vector3(this);
    }
    normalize() : Vector3{
        const n = 1.0/this.length;
        this.x *= n; this.y *= n; this.z *= n;
        return this;
    }
}

export var Vector3 : Vector3Constructor = Vector3Impl;