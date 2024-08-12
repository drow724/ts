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
const obj = { a: "hello", b: "world" };
//잉여 속성 검사
const obj1 = obj;
function a(callback) {
    //return "3";
    return;
}
const b = a(() => {
    return "3";
});
const human = {
    talk() {
        return "abc";
    },
};
const c = human.talk();
let target = [];
forEach([1, 2, 3], (el) => target.push(el));
forEach([1, 2, 3], (el) => {
    target.push(el);
});
