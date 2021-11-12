let myArray = [3,4,5,7,8,3,5,6,'!',0,5,6,8,12,0,'?'];

result = checkArray(myArray);

console.log(result);

function checkArray(arr){
    let resultObj = {};
    let numChet = 0;
    let numNeChet = 0;
    let numZero = 0;
    let listErrors = [];

    arr.forEach(function(item, index, array) {
        if (typeof item === 'number') {
            if (item === 0) {
                numZero += 1;
            }else if (item === NaN) {
                listErrors.push('Элемент с индексом:'+index+', не является числом.');
            }else{
                if (item%2 ===0){
                    numChet += 1;
                }else {
                    numNeChet += 1;
                }
            }
        }else {
            listErrors.push('Элемент с индексом:'+index+', не является числом.');
        }
    })
    resultObj.numChet = numChet;
    resultObj.numNeChet = numNeChet;
    resultObj.numZero = numZero;
    resultObj.listErros = listErrors;
    return resultObj;
}
