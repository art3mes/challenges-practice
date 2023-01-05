function number(num){
    var innerValue=num.innerHTML;
    console.log(innerValue);
    display(innerValue);
}
function operation(ope){
    var operator=ope.innerHTML;
    console.log(operator);
}
function specialOperation(sOpe){
    var specialOperator=sOpe.innerHTML;
    console.log(specialOperator);
}
function editButtons(edit){
    var button=edit.innerHTML;
    console.log(button);
}

function display(value){
    document.querySelector(".calc-display").value+=value;
}
//setup display