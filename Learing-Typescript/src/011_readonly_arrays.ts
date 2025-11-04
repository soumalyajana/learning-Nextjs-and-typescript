
const xss = [1, 2, 24]
const xs : readonly number[]= [1, 2, 3, 4];
const ys: ReadonlyArray<number> = [1, 2, 3];

xss[0] = 9
ys.filter


function sum (nums: readonly number[]): number{
    let s = 0;
    for(const n of nums) s+=n;
}

console.log(sum(xss)); // passing read only parameter in mutable array is allowed


const res = yss.map