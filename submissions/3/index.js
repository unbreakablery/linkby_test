const add = (a,b) => {
    var alternative = function (b) { return a+b; };
    if(typeof b == 'undefined')
        return alternative;
    else
        return alternative(b);
}

console.log(add(4, 6));
console.log(add(4)(6));