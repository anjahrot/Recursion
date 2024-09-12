function fibs(num) {
    if(num <= 0 || !Number.isInteger(num)) return console.log('Argument must be postive integer');
    if(num == 1) return [0]
    if(num == 2) return [0,1];
    let array = [0, 1];
    for(let i=0;i<(num-2);i++){
        array.push(array[i]+array[i+1]);
    }
    return array;
}

console.log(fibs(8));

function fibsRec(num) {
    let array = [];
    if(num <= 0 || !Number.isInteger(num)) return console.log('Argument must be postive integer');
    if(num == 1) return [0]
    if(num == 2) return [0,1];
    else {
        for(let i=0;i<num;i++){
            console.log("This was printed recursively");
            array.push(fibonacci(i));
        }
    }
    function fibonacci(n) {
        if(n<2) return n;
        else return fibonacci(n-1)+fibonacci(n-2);
    }
    return array;
}

console.log(fibsRec(8));