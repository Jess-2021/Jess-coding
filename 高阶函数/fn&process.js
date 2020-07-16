// ? 函数不修改状态
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

// ? 实现 (1 + 2) * 3 - 4

// * 1.过程式编程
let process = () => {
    var a = 1 + 2;
    var b = a * 3;
    var c = b - 4;
    return c;
};

// * 2.结构式编程（函数式编程）复杂业务
let subtract = (a, b) => {
    /* ...*/
};
let multiply = (a, b) => {
    /* ...*/
};
let add = (a, b) => {
    /* ...*/
};

let Fn = subtract(multiply(add(1, 2), 3), 4);

// ? 3.偏函数
function isType(type) {
    return function (obj) {
        return Object.prototype.toString.call(obj) === `[object ${type}]`;
    };
}

// ? 4.预置函数 React hook vue3
function afterDone(i, callback) {
    return function () {
        if (--i <= 0) {
            callback();
        }
    };
}

let eat = afterDone(2, () => {
    console.log("Jarvis");
});

// ? 5.柯里化
// 普通函数
function add(x, y) {
    return x + y;
}
add(3, 4); // 7

// curry后的函数
let curryAdd = function (x) {
    return function (y) {
        return x + y;
    };
};

curryAdd(3)(4); // 7

// ? 5.1 柯里化通用函数
function currying(func, args) {
    var arity = func.length; // 形参个数
    var args = args || []; // 上一次传入的参数
    return function () {
        var _args = [].slice.call(arguments); // 将参数转化为数组
        Array.prototype.unshift.apply(_args, args); // 将上次的参数与当前参数进行组合并修正传参顺序
        // 如果参数不够，返回闭包函数继续收集参数
        if (_args.length < arity) {
            return currying.call(null, func, _args);
        }
        return func.apply(null, _args); // 参数够了则直接执行被转化的函数
    };
}

// 测试用例
const foo = currying((a, b, c, d) => {
    console.log(a, b, c, d);
});
foo(1)(2)(3)(4); // 1 2 3 4
const f = foo(1)(2)(3);
f(5); // 1 2 3 5

// ? 6.1 反柯里化通用函数
Function.prototype.uncurring = function () {
    var self = this; // 拿到调用的对象
    return function () {
        var obj = Array.prototype.shift.call(arguments);
        return self.apply(obj, arguments);
    };
};
var push = Array.prototype.push.uncurring();
var aa = {
    "0": "asd",
    length: 1,
};
console.log(push(aa, 2));

// ? 7 节流
const throttle = function (fn, interval = 500) {
    let timer = null, // 计时器
        isFirst = true; // 是否是第一次调用
    return function () {
        let args = arguments,
            _me = this;
        // 首次调用直接放行...

        // 存在计时器就拦截...

        // 设置timer
        timer = setTimeout(function () {
            console.log(timer);
            window.clearTimeout(timer);
            timer = null;
            fn.apply(_me, args);
        }, interval);
    };
};
// 使用节流
window.onresize = throttle(function () {
    console.log("throttle");
}, 600);
