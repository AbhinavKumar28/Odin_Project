function fibs(num) {
    let arr = [];

    if (num === 1) {
        arr = [0];
        return arr;
    } else if (num === 2) {
        num = num - 1;
        const a = fibs(num);

        a.push(1);
        return a;
    } else {
        num = num - 1;
        const a = fibs(num);
        const nextval = (a.at(-2)) + (a.at(-1));

        a.push(nextval);
        return a;
    }
}
console.log(fibs(8));
console.log(fibs(10));
console.log(fibs(4));
console.log(fibs(2));
