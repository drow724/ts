const a: number = 5;
const b: string = "hello";
const c: boolean = true;
const d: undefined = undefined;
const e: null = null;
const f: symbol = Symbol.for("abc");
const g: bigint = 100000000n;
const h: any = true;
const i: true = true;
const j: 5 = 5;

// function add(x: number, y: number): number {
//   return x + y;
// }

//const add: (x: number, y:number) => number = (x, y) => x + y;

// type Add = (x: number, y: number) => number;

// const add: Add = (x, y) => x + y;

interface Add {
  (x: number, y: number): number;
}

const add: Add = (x, y) => x + y;

//const obj: { lat: number; lon: number } = { lat: 37.5, lon: 127.5 };

type Obj = { lat: number; lon: number };
const obj: Obj = { lat: 37.5, lon: 127.5 };

const arr: string[] = ["123", "456"];
const arr2: number[] = [123, 456];
const arr3: Array<number> = [123, 456];
const arr4: [number, number, string] = [123, 456, "hello"];
