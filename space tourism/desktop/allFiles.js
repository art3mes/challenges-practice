$(document).ready(function(){
    $(".header-right div").on("click",function(event){
        var target = event.target || event.srcElement;
        console.log(target.textContent); 
        target=target.textContent;

        if(target=="00"|| target=="00 HOME"){
            window.open("index.html","_self");
            console.log(target);
        }
        if(target=="01"|| target=="01 DESTINATION"){
            window.open("destination-moon.html","_self");
            console.log(target); 
        }
        if(target=="02" || target== "02 CREW"){
            window.open("crew-commander.html","_self");
            console.log(target); 
        }
        if(target=="03" || target == "03 TECHNOLOGY"){
            window.open("technology-vehicle.html","_self");
            console.log(target); 
        }
    });
});