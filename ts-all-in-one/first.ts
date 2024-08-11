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

function add(x: string | number, y: string | number): string | number {
  return x + y;
}

const result: string | number = add(1, 2);
add("1", "2");
add(1, "2");

//type A = string & number;
//type A = { hello: "world" } & { zero: "cho" };
type A = { hello: "world" } | { zero: "cho" };
//const a: A = { hello: "world", zero: "cho" };
const a: A = { hello: "world" };
