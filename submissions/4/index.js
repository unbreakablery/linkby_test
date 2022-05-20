const getFibonaaci = (num) => {
    let a = 0;
    let b = 1;

    let c = 0;

    for(let i=2; i<=num; i++) {
        c = a + b;
        a = b;
        b = c;
    }

    return num ? b : a;
}

console.log(getFibonaaci(0));
console.log(getFibonaaci(1));
console.log(getFibonaaci(10));