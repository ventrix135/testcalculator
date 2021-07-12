const numbers = [];

function add() {
    numbers.push(form1.answer.value);
    form1.answer.value = '';
}

function remove() {
    numbers.pop();
}

function del() {
    form1.answer.value= '';
    numbers.length = 0;
}

function show() {
    form2.arr.value = numbers;
    
}

function sorting() {
    numbers.sort();
    form2.sorted.value = numbers;
}

function multiply() {
    var total = 1;
    for(var i = 0; i < numbers.length; i++){
        total = total * numbers[i];
    }
    form2.multi.value = total;
    
}

function sum() {
    var total = 0;
    for(var i = 0; i < numbers.length; i++){
        total = +total + +numbers[i];
    }

    form2.total.value = total;
}

function average() {
    var avg = 0;
    for(var i = 0; i < numbers.length; i++){
        avg = +avg + +numbers[i];
    }
    
    form2.avrg.value = avg/numbers.length;
}

function middle() {
    numbers.sort();
    var midd;
    var mid = +numbers.length / +2;
    if(Number.isInteger(mid)) {
        midd = (+numbers[mid-1] + +numbers[mid]) / +2;
        //form1.answer.value = "true";
    } else {
        mid = Math.ceil(mid);
        midd = numbers[mid-1];
        //form1.answer.value = "no";
    }

    form2.midnum.value = midd;
}