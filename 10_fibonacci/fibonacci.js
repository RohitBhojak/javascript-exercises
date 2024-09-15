const fibonacci = function(n) {
    if (parseInt(n) < 0) return "OOPS";
    let a = 0;
    let b = 1;
    while (n > 0) {
        let c = a + b;
        a = b;
        b = c;
        n--;
    }
    return a;
};

// Do not edit below this line
module.exports = fibonacci;
