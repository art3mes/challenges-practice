
function openNav() {
    document.querySelector(".sidebar").style.width = "240px"; 
    document.querySelector(".main-content-container").style.marginLeft="260px";
    document.querySelector(".subheader").style.left="270px"; 
    document.querySelector(".hamburger-menu-button").style.borderColor="rgb(33, 33, 33)";
}

function closeNav() {
    document.querySelector(".sidebar").style.width = "0";
    document.querySelector(".main-content-container").style.marginLeft="25px";
    document.querySelector(".subheader").style.left="30px";
    document.querySelector(".hamburger-menu-button").style.borderColor="aliceblue";
}


function sidebarToggler()
{
    var displayValue=document.querySelector(".sidebar");

    if(displayValue.style.width=== "240px")
    {
        closeNav();
    }
    else{
        openNav();
    }
}