function startFunction(startNumber, endNumber){
    let iter = 0;

    const outputFunc = function(val) {
        result = val + iter;
        console.log(result);
        iter++;
    }

    const idInterval = setInterval(outputFunc, 1000, startNumber)
    setTimeout(function(){clearInterval(idInterval)}, (endNumber-startNumber+2)*1000)
}

startFunction(5, 15);