function dropdownmenu() {
    x = document.getElementsByClassName("header-dropdown");

    if(x[0].style.display==="none"){
        x[0].style.display="block";
    }
    else {
        x[0].style.display="none";
    }

    y = document.getElementsByClassName("stripe");
    if(x[0].style.display==="none"){
        for(i=0;i++;y.length){
            y[i].style.background="black";
        }

    }
    else {
        for(i=0;i++;y.length){
            y[i].style.background="#fff";  
        }     
    }

}
function dropdownplan() {
    x = document.getElementsByClassName("plan-dropdown")
    
    if(x[0].style.display==="none"){
        x[0].style.display="block";
        //x[0].style.width="98%";
    }
    else {
        x[0].style.display="none";
        //x[0].style.width="0%";
    }

    
}
function dropdownexplore() {
    x = document.getElementsByClassName("explore-dropdown")
    
    if(x[0].style.display==="none"){
        x[0].style.display="block";
    }
    else {
        x[0].style.display="none";
    }
}
function dropdownabout() {
    x = document.getElementsByClassName("about-dropdown")
    
    if(x[0].style.display==="none"){
        x[0].style.display="block";
    }
    else {
        x[0].style.display="none";
    }
}
