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

// function add(x: number, y: number): number {
//   return x + y;
// }

//const add: (x: number, y:number) => number = (x, y) => x + y;

// type Add = (x: number, y: number) => number;

// const add: Add = (x, y) => x + y;

// interface Add {
//   (x: number, y: number): number;
// }

// const add: Add = (x, y) => x + y;

//const obj: { lat: number; lon: number } = { lat: 37.5, lon: 127.5 };

//const obj = { lat: 37.5, lon: 127.5 };

// const arr = ["123", "456"];
// const arr2 = [123, 456];
// const arr3 = [123, 456];
// const arr4: [number, number, string] = [123, 456, "hello"];

// const a = "5";
// const b = 5;
// const c = true;
// const d = undefined;
// const e = null;

// function add(x: number, y: number) {
//   return x + y;
// }
// const result = add(1, 2);

//js 변환 시 사라지는 부분;
// type Add = () => number;
// interface Minus {}
// Array<String>;

// function add(x: number, y: number): number;
// function add(x: any, y: any) {
//   return x + y;
// }

// let aa = 123;
// aa = "hello" as unknown as number;

// try {
//   const array: string[] = [];
//   array.push("hello");
// } catch (error) {
//   error;
// }

// // const head: Element = document.querySelector("#head")!;
// // console.log(head);

// const head = document.querySelector("#head");
// if (head) {
//   head.innerHTML = "hello world";
//   console.log(head);
// }

// const a: string = 'hello';
// const b: String = 'hell';

// type World = "world" | "hell";
// const a: World = "world";

// const b = `hello ${a}`;

//type Greeting = "hello world"
// type Greeting = `hello ${World}`;
// const c: Greeting = "hello hell";

// let arr: string[] = [];
// let arr2: Array<string> = [];
// function rest(a: any, ...args: string[]) {
//   console.log(a, args);
// }

// rest("1", "2", "3");

// const tuple: [string, number] = ["1", 1];
// tuple[2] = "hello";
// tuple.push("hello");

// const enum EDirection {
//   Up,
//   Down,
//   Left,
//   Right,
// }

// const a = EDirection.Up;
// const b = EDirection.Left;

// const ODirection = {
//   Up: 0,
//   Down: 1,
//   Left: 2,
//   Right: 3,
// } as const;

// const c = ODirection.Up;
// const d = ODirection.Left;

// function walk(dir: EDirection) {}

// const obj = { a: "123", b: "hello", c: "world" } as const;
// type key = (typeof obj)[keyof typeof obj];

// type Direction = (typeof ODirection)[keyof typeof ODirection];
// function run(dir: Direction) {}

// walk(EDirection.Left);
// run(ODirection.Right);

// type A = { a: string };
// const a: A = { a: "hello" };

// interface B {
//   a: string;
// }
// const b: B = { a: "hello" };

// function add(x: string | number, y: string | number): string | number {
//   return x + y;
// }

// const result: string | number = add(1, 2);
// add("1", "2");
// add(1, "2");

// //type A = string & number;
// //type A = { hello: "world" } & { zero: "cho" };
// type A = { hello: "world" } | { zero: "cho" };
// //const a: A = { hello: "world", zero: "cho" };
// const a: A = { hello: "world" };

// type Animal = { breath: true };
// type Mamal = Animal & { breed: true };
// type Human = Mamal & { think: true };

// const zerocho: Human = { breath: true, breed: true, think: true };

// interface A {
//   talk: () => void;
// }

// interface A {
//   eat: () => void;
// }

// interface A {
//   shit: () => void;
// }

// interface A {
//   sleep: () => void;
// }

// const a: A = { talk() {}, eat() {}, shit() {}, sleep() {} };

// // interface B extends A {
// //   breed: true;
// // }

// interface B extends Human {
//   breed: true;
// }

// const b: B = { breath: true, breed: true, think: true };

// interface IProps {}

// type Type = string | number;

// enum EHello {
//   Left,
//   Right,
// }

// type A = string | number;

// type B = string;

// type C = string & number;

// type A = { name: string };

// type B = { age: number };

// type AB = A | B;

// type C = { name: string; age: number };
//type C = A & B;

// const ab: AB = { name: "zerocho" };
//const ab: C = { name: "zerocho" };
//const c: C = { name: "zerocho", age: 29 };
//const c: AB = { name: "zerocho", age: 29 };
// const c: C = { name: "zerocho", age: 29, married: false };
// const obj = { name: "zerocho", age: 29, married: false };
// const c: C = obj;

// interface A {
//   a: string;
// }
// const obj = { a: "hello", b: "world" };

// //잉여 속성 검사
// const obj1: A = obj;

// function a(callback: () => void): void {
//   //return "3";
//   return;
// }

// const b = a(() => {
//   return "3";
// });

// const c = human.talk() as unknown as string;
// declare function forEach(arr: number[], callback: (el: number) => void): void;
// declare let d: number;

// let target: number[] = [];
// forEach([1, 2, 3], (el) => target.push(el));
// forEach([1, 2, 3], (el) => {
//   target.push(el);
// });

// d = 5;

// interface Human {
//   talk: () => void;
// }

// const human: Human = {
//   talk() {
//     return 3;
//   },
// };

// //any는 타입 포기
// //const b: any = human.talk();
// // const b: unknown = human.talk();
// // (b as Human).talk();

// try {
// } catch (error) {
//   (error as Error).message;
// }

// const b = human.talk() as unknown as number;
// b.toString();

// function a(): void {
//   //return undefined;
//   //return null;
// }

// function numOrStr(a: number | string) {
//   //(a as number).toFixed(1);
//   if (typeof a === "number") {
//     a.toFixed(1);
//   } else {
//     a.charAt(3);
//   }
//   if (typeof a === "string") {
//     a.charAt(3);
//   }
//   if (typeof a === "boolean") {
//     a.toString();
//   }
// }

// numOrStr("123");
// numOrStr(3);

// function numOrNumArray(a: number | number[]) {
//   if (Array.isArray(a)) {
//     a.concat(4);
//   } else {
//     a.toFixed(3);
//   }
// }

// numOrNumArray(123);
// numOrNumArray([1, 2, 3]);

// class A {
//   aaa() {}
// }

// class B {
//   bbb() {}
// }

// function aOrB(param: A | B) {
//   if (param instanceof A) {
//     param.aaa();
//   }
// }

// aOrB(new A());
// aOrB(new B());

// type C = { type: "c"; ccc: string };
// type D = { type: "d"; ddd: string };
// type E = { type: "e"; eee: string };

// function typeCheck(e: C | D | E) {
//   if (e.type === "c") {
//     e.ccc;
//   } else if (e.type === "d") {
//     e.ddd;
//   } else {
//     e.eee;
//   }
//   if ("ccc" in e) {
//     e.ccc;
//   } else if ("ddd" in e) {
//     e.ddd;
//   } else {
//     e.eee;
//   }
// }

// const human = { type: 'human', talk()};
// const doc = {type: 'doc', bow()};
// const cat = {type: 'cat', moew()};

// if('talk' in a) {
//   A.
// }

// interface Cat {
//   meow: number;
// }

// interface Dog {
//   bow: number;
// }

// function catOrDog(a: Cat | Dog): a is Dog {
//   if ((a as Cat).meow) {
//     return false;
//   }
//   return true;
// }

// const cat: Cat | Dog = { meow: 3 };

// function pet(a: Cat | Dog) {
//   if (catOrDog(a)) {
//     console.log(a.bow);
//   }

//   if ("meow" in a) {
//     console.log(a.meow);
//   }
// }

// const isRejected = (
//   input: PromiseSettledResult<unknown>
// ): input is PromiseRejectedResult => {
//   return input.status === "rejected";
// };

// const isFulfilled = <T>(
//   input: PromiseSettledResult<T>
// ): input is PromiseFulfilledResult<T> => {
//   return input.status === "fulfilled";
// };

// //Promise -> Pending -> Settled(Resolved, Rejected)

// const promises = await Promise.allSettled([
//   Promise.resolve("a"),
//   Promise.resolve("b"),
// ]);

// //const errors = promises.filter(promise => promise.status === "rejected");

// const errors = promises.filter(isRejected);

// const successes = promises.filter(isFulfilled);

// export {};

// const x: {} = "hello";
// //const x: {} = null;
// const y: Object = "hi";
// const xx: object = "hi";
// const yy: object = { hello: "world" };
// const z: unknown = "hi";

// // unknown = {} | null | undefined
// if (z) {
//   z;
// } else {
//   z;
// }

// interface A {
//   readonly a: string;
//   b: string;
// }

// const aaaa: A = { a: 'hello', b: 'world'};
// aaaa.a = '123';

//type A = { a: string, b: string, c: string, d: string};
//type A = { [key: string]: number };
// type B = "Human" | "Mammal" | "Animal";
// type A = { [key in B]: B };
// const aaaa: A = { Human: "Animal", Mammal: "Human", Animal: "Mammal" };

// class A {
//   // a: string;
//   // b: number;

//   private a: string = "123";
//   //protected a: string = "123";
//   #b: number = 123;

//   // constructor(a: string, b: number = 123) {
//   //   this.a = "123";
//   //   this.b = 123;
//   // }

//   method() {
//     console.log(this.a, this.#b);
//   }
// }

// //const a = new A("123", 123);

// //new A();
// type AA = A;
// //const a: A = new A("123");
// const b: typeof A = A;

interface A {
  readonly a: string;
  b: string;
  c: string;
}

abstract class B implements A {
  private readonly a: string = "123";
  protected b: string = "world";
  public c: string = "wow";

  abstract method(): void;
  method2() {
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
