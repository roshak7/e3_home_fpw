function myfunc(argNumber1) {
    return function(argNumber2) {
        return argNumber1 + argNumber2;
    }
}

let resultFunc = myfunc(11);
let result = resultFunc(3);
console.log(`Результат выполнения функций: ${result}`);