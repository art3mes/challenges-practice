var flag=0;    //zero means sidebar is closed
function sidebar(){
  if(flag===0){
    document.querySelector(".header-right").style.opacity=0;
    document.querySelector(".sidebar").style.display="flex";
  flag=1;
  }
  else{
    document.querySelector(".header-right").style.opacity=1;
    document.querySelector(".sidebar").style.display="none";
    flag=0;
  }
}
