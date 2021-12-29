import {staticImplements} from "./helpers";
import { VectorBase, VectorConstructor } from './vector';
import {Vector2} from './vector2';

export interface Vector3 extends Vector2{
    get z() : number;
    set z(value : number);
    add(vector : Vector3) : Vector3;
    clone() : Vector3;
    normalize() : Vector3;
}

interface Vector3Constructor extends VectorConstructor<Vector3>{
    new() : Vector3;
    new (x: number, y : number) : Vector3;
}

/** @internal */
@staticImplements<Vector3Constructor>()
export class Vector3Impl extends VectorBase<Vector3> implements Vector3{
    constructor(p1? : ArrayBuffer | Vector3 | number, p2 : number = 0){
        //if (p1 instanceof Vector2Impl){
        //    super(new ArrayBuffer(8), 0);
        //    this.set([p1.x, p1.y]);
        //}else{
        //    if(p1 instanceof ArrayBuffer){
        //        super(p1,p2);
        //    }else{
        //        super(new ArrayBuffer(8), 0);
        //        const x = p1 as number;
        //        this.set([p1 ?? 0, p2]);
        //    }
        //}
        super(new ArrayBuffer(0), 0);
    }
    get z(): number {
        throw new Error('Method not implemented.');
    }
    set z(value: number) {
        throw new Error('Method not implemented.');
    }
    get x(): number {
        throw new Error('Method not implemented.');
    }
    set x(value: number) {
        throw new Error('Method not implemented.');
    }
    get y(): number {
        throw new Error('Method not implemented.');
    }
    set y(value: number) {
        throw new Error('Method not implemented.');
    }
    get squareLength(): number {
        throw new Error('Method not implemented.');
    }
    add(vector: Vector3): Vector3 {
        throw new Error('Method not implemented.');
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