function spoiler_toggler(){
    var display=document.getElementsByClassName("spoiler-body")[0].style.display;
    var numOfElement=document.getElementsByClassName("spoiler-body").length;
    
    for (let index = 0; index < numOfElement; index++) {

        if (display === "flex") {
            document.getElementsByClassName("spoiler-body")[index].style.display="none";
        }
        
        else{
            document.getElementsByClassName("spoiler-body")[index].style.display="flex";  
        }
    }
}