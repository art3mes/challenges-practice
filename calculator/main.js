function number(num){
    var innerValue=num.innerText;
    console.log(innerValue);
    display(innerValue);
}
function operation(ope){
    var operator=ope.innerText;
    document.querySelector(".calc-display").value+=operator;
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
    if(button==="="){
        document.querySelector(".calc-display").value=eval(document.querySelector(".calc-display").value);
    }
}
function display(value){
    document.querySelector(".calc-display").value+=value;
}