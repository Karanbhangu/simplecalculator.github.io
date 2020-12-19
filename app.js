function calculate(){
    let add = document.getElementById('add');
    let substract = document.getElementById('substract');
    let multiply = document.getElementById('multiply');
    let divide = document.getElementById('divide');
    let result = calci.result
    let firstnum = parseInt(calci.firstnumber.value);
    let secondnum = parseInt(calci.secondnumber.value);
    if (add.checked){
        result.value = firstnum + secondnum;
    }
    else if (substract.checked){
        result.value = firstnum - secondnum;
    }
    else if (multiply.checked){
        result.value = firstnum * secondnum;
    }
    if (divide.checked){
        result.value = firstnum / secondnum;
    }

}