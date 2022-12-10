/* function right_dropdown_toggler(){
    var displayValue=document.querySelector(".cate").lastElementChild.style.display;

    if(displayValue==="none")
    {
        document.querySelector(".cate").lastElementChild.style.display="flex";
    }
    else{
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
    if (!event.target.matches(".cate, .bluet1_drop, .bluet2_drop")) {
        document.querySelector(".cate").lastElementChild.style.display="none";
        document.querySelector(".bluet1_drop").lastElementChild.style.display="none";
        document.querySelector(".bluet2_drop").lastElementChild.style.display="none";
    }
  }
//selection in dropdown */
window.addEventListener('load', function() {
    // wait until the page loads before working with HTML elements
    document.addEventListener('click', function(event) {
      //click listener on the document
      document.querySelectorAll('.dropdown').forEach(function(el) {
        if (el !== event.target) 
            el.classList.remove('show');
        // close any showing dropdown that isn't the one just clicked
      });
      if (event.target.matches('.cate')) {
        event.target.closest('.cate').querySelector('.dropdown').classList.toggle('show')
      }
      // if this is a dropdown button being clicked, toggle the show class
    })
  })
  