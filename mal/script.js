function right_dropdown_toggler(){
    var displayValue=document.querySelector(".cate_but").lastElementChild.style.display;

    if(displayValue==="none")
    {
        document.querySelector(".cate_but").lastElementChild.style.display="flex";
    }
    else{
        document.querySelector(".cate_but").lastElementChild.style.display="none";
    }
}