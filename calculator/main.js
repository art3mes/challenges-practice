function number(num){
    var innerValue=num.innerText;
    console.log(innerValue);
    display(innerValue);
}
function operation(ope){
    var operator=ope.innerText;
    
    console.log(operator);
    
}
function specialOperation(sOpe){
    var specialOperator=sOpe.innerText;
    console.log(specialOperator);
}
function editButtons(edit){
    var button=edit.innerText;
    console.log(button);
    if(button==="CE" || button==="C"){
        document.querySelector(".calc-display").value="";
    }
    if(button==="DEL"){
        var lenghtOfValue=document.querySelector(".calc-display").value.length;
        document.querySelector(".calc-display").value=document.querySelector(".calc-display").value.substring(0,lenghtOfValue-1);
        console.log(lenghtOfValue);
    }
}
function display(value){
    document.querySelector(".calc-display").value+=value;
}