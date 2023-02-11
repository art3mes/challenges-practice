$(document).ready(function(){
    $(".header-right div").on("click",function(event){
        var target = event.target || event.srcElement;
       
        target=target.getAttribute("data-id");

        if(target==0){
            window.open("index.html","_self");
            
        }
        if(target==1){
            window.open("destination-moon.html","_self");
           
        }
        if(target==2){
            window.open("crew-commander.html","_self");
           
        }
        if(target==3){
            window.open("technology-vehicle.html","_self");
           
        }
    });

    $(".body-left-scroll div").on("click",function(event){
        var target=event.target || event.srcElement;
        target=target.getAttribute("data-id");
        console.log(target);
        if(target==0){
            window.open("crew-commander.html","_self");
        }
        if(target==1){
            window.open("crew-specialist.html","_self");
        }
        if(target==2){
            window.open("crew-pilot.html","_self");
        }
        if(target==3){
            window.open("crew-engineer.html","_self");
        }
    });
});