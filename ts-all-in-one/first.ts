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

// interface A {
//   readonly a: string;
//   b: string;
//   c: string;
// }

// abstract class B implements A {
//   private readonly a: string = "123";
//   protected b: string = "world";
//   public c: string = "wow";

//   abstract method(): void;
//   method2() {
//     console.log(this.a);
//     console.log(this.b);
//     console.log(this.c);
//   }
// }

// class C extends B {
//   method() {
//     console.log(this.a);
//     console.log(this.b);
//     console.log(this.c);
//   }
// }

// new C().a;
// new C().b;
// new C().c;

// function abc(a: number, b?: number, c?: number, ...args: number[]) {}

// abc(1);
// abc(1, 2);
// abc(1, 2, 3);
// abc(1, 2, 3, 4);

// let obj: { a: string; b?: string } = { a: "hello", b: "world", c: "wow" };
// obj = { a: "hello" };

// function add<T extends number | string, Q extends Object, S>(x: T, y: Q): S {
//   return x + y;
// }

// add(1, 2);
// add("1", "2");

// add(1, "2");
// add("1", 2);

// function add<T extends { a: string }>(x: T): T {
//   return x;
// }

// add(["1", "2", "3"]);

// function add<T extends (a: string) => number>(x: T): T {
//   return x;
// }

// add((a) => +a);

// function add<T extends abstract new (...args: any) => any>(x: T): T {
//   return x;
// }

// class A {}
// add(A);
// add(new A());

// const a = (a: number = 3, c: number = 5) => {
//   return "3";
// };

// const a = (b: { children: string } = { children: "zerocho" }) => {};

// const add = <T extends Object>(x: T, y: T) => ({ x, y });
// const result = add(1, 2);

// interface Array<T> {
//   forEach(
//     callbackFn: (value: T, index: number, array: T[]) => void,
//     thisArg?: any
//   ): void;
//   map<U>(
//     callbackFn: (value: T, index: number, array: T[]) => U,
//     thisArg?: any
//   ): U[];
//   filter<S extends T>(
//     predicate: (value: T, index: number, array: T[]) => value is S,
//     thisArg?: any
//   ): S[];
//   filter(
//     predicate: (value: T, index: number, array: T[]) => unknown,
//     thisArg?: any
//   ): T[];
// }
// const a: Array<number> = [1, 2, 3];
// [1, 2, 3].forEach((item) => console.log(item));
// ["1", "2", "3"].forEach((item) => console.log(item));
// [true, true, false].forEach((item) => console.log(item));
// [true, "1", 3].forEach((item) => console.log(item));

// function add<T>(x: T, y: T) {
//   return x;
// }

// add("1", 2);
// add(1, 2);
// add("1", "2");

// const numberAdd = add<number>;
// numberAdd(1, 2);
// numberAdd("1", "2");

// const strings = [1, 2, 3].map((item) => item.toString());

// const predicate = (value: string | number): value is string =>
//   typeof value === "string";

// const filtered = ["1", 2, "3", 4, "5"].filter(predicate);

// interface Arr<T> {
//   forEach(callback: (item: T) => void): void;
//   map<S>(callback: (v: T) => S): S[];
//   filter<S extends T>(callback: (v: T) => v is S): S[];
//   filter(callback: (value: T) => boolean): T[];
// }

// const a: Arr<number> = [1, 2, 3];

// const b = a.filter((v) => v % 2 === 0);

// const c: Arr<number | string> = [1, "2", 3, "4", 5];

// const d = c.filter((v) => typeof v === "string");
// const e = c.filter((v) => typeof v === "number");
// const b = a.map((v) => v + 1);
// const c = a.map((v) => v.toString());
// const d = a.map((v) => v % 2 === 0);

// const e: Arr<string> = ["1", "2", "3"];
// const f = e.map((v) => +v);
// a.forEach((item) => {
//   console.log(item);
//   item.toFixed(1);
// });

// a.forEach((item) => {
//   console.log(item);
//   return "3";
// });

// const b: Arr<string> = ["1", "2", "3"];

// b.forEach((item) => {
//   console.log(item);
//   item.charAt(1);
// });

// b.forEach((item) => {
//   console.log(item);
//   return "3";
// });

// const c: Arr<boolean> = [true, false];

// c.forEach((item) => {
//   console.log(item);
// });

// const d = c.forEach((item) => {
//   console.log(item);
//   return "3";
// });

// function a(x: string): number {
//   return +x;
// }
// a("1");

// type B = (x: string) => number | string;
// const b: B = a;
// const c: typeof a = b;

// function a(x: string | number): number {
//   return 0;
// }
// a("1");

// type B = (x: string) => number | string;
// const b: B = a;
// const c: typeof a = b;

// function add(x: number, y: number): number;
// function add(x: string, y: string): string;
// function add(x: number | string, y: number | string): number | string {
//   return x + y;
// }

// let a: string | number;

// if (typeof a === "string") {
//   a.
// }

// declare function add(x: number, y: number): number;
// //declare function add(x: number, y: number, z?: number): number;
// declare function add(x: number, y: number, z: number): number;
// declare function add(x: string, y: string): string;

// add(1, 2);
// add(2, 3, 4);
// add("1", "2");

// interface Add {
//   (x: number, y: number): number;
//   (x: string, y: string): string;
// }

// const add: Add = (x: any, y: any) => x + y;

// add(1, 2);
// add(2, 3, 4);
// add("1", 2);

// class A {
//   add(x: number, y: number): number;
//   add(x: string, y: string): string;
//   add(x: any, y: any) {
//     return x + y;
//   }
// }

// const c = new A().add("1", 2);
// interface Axios {
//   get(): void;
// }

// type A = "";

// class CustomError extends Error {
//   response?: {
//     data: any;
//   };
// }

// declare const axois: Axios;

// (async () => {
//   try {
//     await axois.get();
//   } catch (err: unknown) {
//     // console.error((err as CustomError).response?.data);
//     // err.response?.data;

//     const customError = err as CustomError;

//     console.error(customError.response?.data);
//     customError.response?.data;

//     if (err instanceof CustomError) {
//       console.error(err.response?.data);
//       err.response?.data;
//     }
//   }
// })();

// const a = <T = unknown>(v: T): T => {
//   return v;
// };

// const c = a(3);

// interface Profile {
//   name: string;
//   age: number;
//   married: boolean;
// }

// interface NewProfile {
//   name: string;
//   age: number;
// }

// const zerocho: Profile = {
//   name: "zerocho",
//   age: 29,
//   married: false,
// };

// const newZerocho: NewProfile = {
//   name: "zerocho",
//   age: 29,
// };

// const newZerocho: Partial<Profile> = {
//   name: "zerocho",
//   age: 29,
// };

// type Name = Profile["name"];

// type P<T> = {
//   [K in keyof T]?: T[K];
// };

// P<Profile>
// {
//   name?: string,
//   age?: number,
//   married?: boolean
// }

// const newZerocho: P<Profile> = {
//   name: "zerocho",
//   age: 29,
// };

// type NewPick<T, S extends keyof T> = {
//   [K in S]: T[K];
// };

// const pickZerocho: NewPick<Profile, "name" | "age"> = {
//   name: "zerocho",
//   age: 29,
// };

// type Animal = "Cat" | "Dog" | "Human";
// type Mammal = Exclude<Animal, "Human">;
// type Human = Extract<Animal, "Cat" | "Dog">;

// type A = Exclude<keyof Profile, "married">;

// const excludeZerocho: Pick<Profile, Exclude<keyof Profile, "married">> = {
//   name: "zerocho",
//   age: 29,
// };

// type O<T, S extends keyof any> = Pick<T, Exclude<keyof T, S>>;

// const omitZerocho: O<Profile, "married"> = {
//   name: "zerocho",
//   age: 29,
// };

// interface Profile {
//   name?: string;
//   age?: number;
//   married?: boolean;
// }

// type Name = Profile["name"];

// type R<T> = {
//   [Key in keyof T]-?: T[Key];
// };

// const zerocho: R<Profile> = {
//   name: "zerocho",
//   age: 29,
//   married: false,
// };

// zerocho.name = "nero";

// interface Profile {
//   readonly name?: string;
//   readonly age?: number;
//   readonly married?: boolean;
// }

// type Name = Profile["name"];

// type R<T> = {
//   -readonly [Key in keyof T]-?: T[Key];
// };

// const zerocho: R<Profile> = {
//   name: "zerocho",
//   age: 29,
//   married: false,
// };

// zerocho.name = "nero";

// interface Obj {
//   [key: string]: number;
// }

// const a: Obj = { a: 3, b: 5, C: 7 };

// const b: Record<string, number> = { a: 3, b: 5, c: 7 };

// type R<T extends keyof any, S> = {
//   [Key in T]: S;
// };

//const a: R<Profile, number> = { a: 3, b: 5, c: 7 };

//const c: R<string, number> = { a: 3, b: 5, c: 7 };

// type A = string | null | undefined | boolean | number;
// type B = N<A>;

// type N<T> = T extends null | undefined ? never : T;

function zip(
  x: number,
  y: string,
  z: boolean
): { x: number; y: string; z: boolean } {
  return { x, y, z };
}

//type Params = Parameters<typeof zip>;
//type First = Params[0];

type P<T extends (...args: any) => any> = T extends (...args: infer A) => any
  ? A
  : never;

type Params = P<typeof zip>;

type First = Params[0];

// type Returns = Returns<typeof zip>;
// type F = Returns[0];

type R<T extends (...args: any) => any> = T extends (...args: any) => infer A
  ? A
  : never;

type Returns = P<typeof zip>;
type F = Returns[0];

// type C<T extends abstract new (...args: any) => any> = T extends abstract new (
//   ...args: infer A
// ) => any
//   ? A
//   : any;

// type I<T extends abstract new (...args: any) => any> = T extends abstract new (
//   ...args: any
// ) => infer A
//   ? A
//   : any;

// class A {
//   a: string;
//   b: number;
//   c: boolean;
//   constructor(a: string, b: number, c: boolean) {
//     this.a = a;
//     this.b = b;
//     this.c = c;
//   }
// }

// const c = new A("123", 456, true);
// type C = ConstructorParameters<typeof A>;
// type I = InstanceType<typeof A>;

// const a: A = new A("123", 456, true);

// const str = "Hello World";
// const s: Lowercase<typeof str>;

const p1 = Promise.resolve(1) //Promise<number>
  .then((a) => a + 1) //Promise<number>,
  .then((a) => a + 1) //Promise<number>,
  .then((a) => a.toString()); //Promise<string>

const p2 = Promise.resolve(1); //Promise<number>
const p3 = new Promise((res, rej) => {
  //Promise<unknown>
  setTimeout(res, 1000);
});

//type result = Promise<Promise<Promise<number>>>;
type result = Awaited<Promise<Promise<Promise<number>>>>;
type result1 = Awaited<{ then(onfulfilled: (v: number) => number): any }>; //thenable

Promise.all([p1, p2, p3]).then((result) => {
  // { '0': string, '1': number, '2': unknown, 'length':3 }
  console.log(result);
});

//T = [p1, p2, p3] {'0': p1, '1': p2, '2': p3, 'length': 3}
//keyof T = '0' | '1' | '2' | 'length'
const arr = [1, 2, 3] as const;
type Arr = keyof typeof arr;
const key: Arr = 4;

// function a(this: Window | typeof obj, param: string) {
//   console.log(this.name);
// }

// const obj = { name: "zerocho" };
// const b = a.bind(obj);
// b(); //zerocho

type T = ThisParameterType<typeof a>;

type NoThis = OmitThisParameter<typeof a>;

const zerocho = {
  name: "zerocho",
  sayHello(this: { name: string }) {
    console.log(`hi ${this.name}`);
  },
};

const sayHello = zerocho.sayHello;
const sayHi = zerocho.sayHello.bind({ name: "nero" });
sayHi();

function add(a: number, b: number, c: number, d: number, e: number, f: number) {
  return a + b + c + d + e + f;
}

const add1 = add.bind(null);
add1(1, 2, 3, 4, 5, 6);

const add2 = add.bind(null, 1);
add2(2, 3, 4, 5, 6);

const add3 = add.bind(null, 1, 2);
add3(3, 4, 5, 6);

const add4 = add.bind(null, 1, 2, 3);
add4(4, 5, 6);

const add5 = add.bind(null, 1, 2, 3, 4);
add5(5, 6);

const add6 = add.bind(null, 1, 2, 3, 4, 5);
add6(6);

// const a = [1, 2, 3, [1, 2], [[1], [2]]].flat();
// const b = [1, 2, 3, [1, 2]].flat(2);

// type A = {
//   name: string;
//   age: number;
// };

// type B = A[1 extends number ? "age" : "name"];
// type C = 3 - 1;

// FlatArray<(number[] | number[][] | number[][][]), 2>[];
// FlatArray<(number | number[] | number[][]), 1>[];
// FlatArray<(number | number[]), 0>[];
// FlatArray<(number), -1>[];

//type IsNever<T> = T extends never ? true : false;
type IsNever<T> = [T] extends [never] ? true : false;
type A1 = IsNever<never>;
type A2 = IsNever<boolean>;

interface VO {
  value: any;
}

const obj = { value: "hi", what: 123 };
const a: VO = obj;

const returnVO = <T extends VO>(): T => {
  return { value: "test" };
};

function onlyBoolean<T extends boolean>(arg: T = false): T {
  return arg;
}

type Union<T> = T extends { a: infer U; b: infer U } ? U : never;
type Union2<T> = T extends { a: () => infer U; b: () => infer U } ? U : never;
type Result1 = Union<{ a: 1 | 2; b: 2 | 3 }>;
type Result2 = Union2<{ a: () => 1 | 2; b: () => 2 | 3 }>;

type Intersection<T> = T extends {
  a: (pa: infer U) => void;
  b: (pb: infer U) => void;
}
  ? U
  : never;

type Result3 = Intersection<{ a(pa: 1 | 2): void; b(pb: 2 | 3): void }>;

// function double<T extends string | number>(x: T): T extends string ? string : number {
//   return x;
//   return x as any;
// }

// const q = double("hi");
// const w = double(123);

// function double<T extends [T] extends [string] ? string : number>(
//   x: T
// ): [T] extends [string] ? string : number {
//   return x;
// }

// declare class A {
//   constructor(name: string);
// }

// function A(name: string) {
//   return new A(name);
// }

// new A("zerocho");
// A("zerocho");

// function Ex() {
//   return "hello";
// }

// namespace Ex {
//   export const a = "world";
//   export type B = number;
// }

// // enum Ex {
// // }

// Ex(); //"hello"
// Ex.a; // "world";

// const b: Ex.B = 123;

// function cc() {}
// cc.a = "b";
// cc.c = "t";

// namespace Example {
//   interface: Inner {
//     test: string;
//   }
//   type test2 = number;
//   export const a = 'hi'
// }

// enum E {}

// class B {}

function startAndEnd(start = "start", end = "end") {
  return function DealDecorator<This, Args extends any[], Return>(
    orginalMethod: (this: This, ...args: Args) => Return,
    context: ClassMethodDecoratorContext<
      This,
      (this: This, ...args: Args) => Return
    > //ClassMethodDecoratorContext
  ) {
    if (context.kind === "method") {
      return function replacementMethod(this: This, ...args: Args) {
        console.log(context.name, start);
        const result = orginalMethod.call(this, ...args);
        console.log(context.name, end);

        return result;
      };
    }

    return orginalMethod;
  };
}

function log<Input extends new (...args: any[]) => any>(
  value: Input,
  context: ClassDecoratorContext
) {
  if (context.kind === "class") {
    return class extends value {
      constructor(...args: any[]) {
        super(args);
      }
      log(msg: string): void {
        console.log(msg);
      }
    };
  }

  return value;
}

function bound(
  orginalMethod: unknown,
  context: ClassMethodDecoratorContext<any>
) {
  const methodName = context.name;

  if (context.kind === "method") {
    context.addInitializer(function () {
      this[methodName] = this[methodName].bind(this);
    });
  }
}

@log
export class A {
  //@memberDecorator
  private static hello: string;

  // constructor() {
  //   this.eat = this.eat.bind(this);
  //   this.work = this.work.bind(this);
  // }

  @startAndEnd("시작", "끝")
  @bound
  eat() {
    console.log("Eat");
  }

  @startAndEnd()
  //@another
  work() {
    console.log("Work");
  }
  @startAndEnd()
  sleep() {
    console.log("Sleep");
  }
}
