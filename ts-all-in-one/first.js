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
function catOrDog(a) {
    if (a.meow) {
        return false;
    }
    return true;
}
const cat = { meow: 3 };
function pet(a) {
    if (catOrDog(a)) {
        console.log(a.bow);
    }
    if ("meow" in a) {
        console.log(a.meow);
    }
}
