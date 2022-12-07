function right_dropdown_toggler(){
    var displayValue=document.querySelector(".cate").lastElementChild.style.display;

    if(displayValue==="none")
    {
        document.querySelector(".cate").lastElementChild.style.display="flex";
    }
    else{
        document.querySelector(".cate").lastElementChild.style.display="none";
    }
}
document.onclick = function(event) {
    if (!event.target.matches('.cate')) {
        document.querySelector(".cate").lastElementChild.style.display="none";
    }
  }