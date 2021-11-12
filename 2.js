function checkSimpleNumber(numValue) {
    let flagNumberNotNatural = false;

    numValue = Number(numValue);
    if (typeof numValue != 'number') {
        return 'Данные неверны!';
    }
    if (!(Number.isInteger(numValue))) {
        return 'Данные неверны!';
    }
    if (numValue > 1 && numValue <= 1000){
        for (let i = 1; i < numValue; i++){
            if (numValue % i === 0 && i != 1) {
                flagNumberNotNatural = true;
                break;
            }
        }
        if (flagNumberNotNatural) {
            return 'Число не натуральное.';
        } else {
            return 'Число натуральное.';
        }
    } else if(numValue === 1 ) {
        return 'Единица не является ни натуральным ни составным числом';
    } else {
        return 'Данные неверны!';
    }
}

let numValue = 6;
let result = '';
// numValue = prompt('Введите любое целое число больше 1 и меньше 1000');
result = checkSimpleNumber(numValue);
console.log(result);