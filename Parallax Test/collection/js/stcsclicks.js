function dropdownmenu() {
    x = document.getElementsByClassName("header-dropdown");

    if(x[0].style.display==="none"){
        x[0].style.display="block";
    }
    else {
        x[0].style.display="none";
    }

    /*y = document.getElementsByClassName("stripe");
    for(i=0;i++;y.length){
        if(x[0].style.display==="none"){
            y[0].style.background="black";
        }
        else {
            y[0].style.background="#fff";
        }
    }*/

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
