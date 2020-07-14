// ? 1. 实现 (1 + 2) * 3 - 4

// * 1.过程式编程
let process = () => {
    var a = 1 + 2;

    var b = a * 3;

    var c = b - 4;
    return c;
};

// * 2.结构式编程（函数式编程）
let subtract = (a, b) => {
    // ...
};
let multiply = (a, b) => {
    // ...
};
let add = (a, b) => {
    // ...
};

let Fn = subtract(multiply(add(1, 2), 3), 4);

// ? 2. 函数不修改状态
function Fibonacci(n) {
    if (n <= 1) {
        return 1;
    }

    return Fibonacci(n - 1) + Fibonacci(n - 2);
}

// 尾递归优化
function Fibonacci2(n, ac1 = 1, ac2 = 1) {
    if (n <= 1) {
        return ac2;
    }

    return Fibonacci2(n - 1, ac2, ac1 + ac2);
}
