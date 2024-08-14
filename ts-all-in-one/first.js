"use strict";
// const a: number = 5;
// const b: string = "hello";
// const c: boolean = true;
// const d: undefined = undefined;
// const e: null = null;
// const f: symbol = Symbol.for("abc");
// const g: bigint = 100000000n;
// const h: any = true;
// const i: true = true;
// const j: 5 = 5;
class B {
    constructor() {
        this.a = "123";
        this.b = "world";
        this.c = "wow";
    }
    method() {
        console.log(this.a);
        console.log(this.b);
        console.log(this.c);
    }
}
class C extends B {
    method() {
        console.log(this.a);
        console.log(this.b);
        console.log(this.c);
    }
}
new C().a;
new C().b;
new C().c;
