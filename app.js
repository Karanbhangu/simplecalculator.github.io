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
function darkmode(){
    let light = document.getElementById('light');
    if(light.className == "bodylight"){
        light.className = "bodydark";
    }
    else if(light.className == "bodydark"){
        light.className = "bodylight"
    }

    // Headings:
    let heading = document.getElementById('heading1');
    if(heading.className == "h3light"){
        heading.className = "h3dark";
    }
    else if(heading.className == "h3dark"){
        heading.className = "h3light"
    }
    let heading2 = document.getElementById('heading2');
    if(heading2.className == "h3light"){
        heading2.className = "h3dark";
    }
    else if(heading2.className == "h3dark"){
        heading2.className = "h3light"
    }
    let heading3 = document.getElementById('heading3');
    if(heading3.className == "h3light"){
        heading3.className = "h3dark";
    }
    else if(heading3.className == "h3dark"){
        heading3.className = "h3light";
    }
    // Main div:
    let maindiv = document.getElementById('maindiv');
    if(maindiv.className == "contained"){
        maindiv.className = "contained2";
    }
    else if (maindiv.className == "contained2"){
        maindiv.className = "contained";
    }

    // Operators:
    let firstop = document.getElementById("firstop")
    let secondtop = document.getElementById("secondop")
    let thirdtop = document.getElementById("thirdop")
    let fourthop = document.getElementById("fourthop")
    if(firstop.className == "nones"){
        firstop.className = "darkb";
    }
    else if (firstop.className == "darkb"){
        firstop.className = "nones";
    }
    if(secondtop.className == "nones"){
        secondtop.className = "darkb";
    }
    else if (secondtop.className == "darkb"){
        secondtop.className = "nones";
    }
    if(thirdtop.className == "nones"){
        thirdtop.className = "darkb";
    }
    else if (thirdtop.className == "darkb"){
        thirdtop.className = "nones";
    }
    if(fourthop.className == "nones"){
        fourthop.className = "darkb";
    }
    else if (fourthop.className == "darkb"){
        fourthop.className = "nones";
    }   
    // Buttons:
    let calcb = document.getElementById("calcb");
    if(calcb.className=="first"){
        calcb.className = "calcybut";
    }
    else if (calcb.className == "calcybut"){
        calcb.className = "first";
    }
    // span:
    let spaneed = document.getElementById('spaneed');
    if(spaneed.className=="noned"){
        spaneed.className = "spanny";
    }
    else if (spaneed.className == "spanny"){
        spaneed.className = "noned";
    }
}
