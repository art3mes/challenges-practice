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

//score dropdowns: the one with strings
function score_string_dropdown_toggler(){
    var displayValue=document.querySelector(".bluet1_drop").style.display;

    if(displayValue==="none")
    {
        document.querySelector(".bluet1_drop").style.display="flex";
    }
    else{
        document.querySelector(".bluet1_drop").style.display="none";
    }
}
document.onclick = function(event) {
    if (!event.target.matches('.bluet1_drop')) {
        document.querySelector(".bluet1_drop").style.display="none";
    }
}

//score dropdowns: the one with numbers
function score_num_dropdown_toggler(){
    var displayValue=document.querySelector(".bluet2_drop").style.display;

    if(displayValue==="none")
    {
        document.querySelector(".bluet2_drop").style.display="flex";
    }
    else{
        document.querySelector(".bluet2_drop").style.display="none";
    }
}
document.onclick = function(event) {
    if (!event.target.matches('.bluet2_drop')) {
        document.querySelector(".bluet2_drop").style.display="none";
    }
}