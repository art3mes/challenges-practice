var c=0;   //to take value just after calculation. 0 equals empty screen
           //1 equals previous value is there. clear it. then take new input

function number(num){
    var innerValue=num.innerText;
    console.log(innerValue);
    display(innerValue);
}
function operation(ope){
    var operator=ope.innerText;
    if(c===0){
        document.querySelector(".calc-display").value+=operator;
    }
    else{
        c=0;
        document.querySelector(".calc-display").value+=operator;
    }
    
    console.log(operator);
    
}
function specialOperation(sOpe){
    var specialOperator=sOpe.innerText;
    console.log(specialOperator);
    if(specialOperator==="1/x"){
        c=1;
        document.querySelector(".calc-display").value=1/eval(document.querySelector(".calc-display").value);
    }
    if(specialOperator==="x2"){
        c=1;
        document.querySelector(".calc-display").value=Math.pow(eval(document.querySelector(".calc-display").value),2);
    }
    if(specialOperator==="x1/2"){
        c=1;
        document.querySelector(".calc-display").value=Math.pow(eval(document.querySelector(".calc-display").value),1/2);
    }
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
        c=1;                            
        document.querySelector(".calc-display").value=eval(document.querySelector(".calc-display").value);
    }
}
function display(value){
    if(c===0){
        document.querySelector(".calc-display").value+=value;
    }
    else{
        c=0;
        document.querySelector(".calc-display").value="";
        document.querySelector(".calc-display").value+=value;
    }
    
}