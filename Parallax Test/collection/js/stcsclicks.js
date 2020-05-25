function dropdownmenu() {
    x = document.getElementsByClassName("header-dropdown");

    if(x[0].style.display==="none"){
        x[0].style.display="block";
    }
    else {
        x[0].style.display="none";
    }
}
function dropdownplan() {
    x = document.getElementsByClassName("plan-dropdown")
    
    if(x[0].style.display==="none"){
        x[0].style.display="block";
    }
    else {
        x[0].style.display="none";
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

$(document).ready(function() {
    
    var $item = $('div.list-item'), //Cache your DOM selector
        visible = 2, //Set the number of items that will be visible
        index = 0, //Starting index
        endIndex = ( $item.length / visible ) - 1; //End index
    
    $('div#arrowR').click(function(){
        var x = $('div.list-item').width() + 10;
        console.log(x);
        if(index < endIndex ){
            index++;
            $item.animate({'left':'-='+x+'px'});
        }
    });
    /*$('i#iconR').click(function(){
        var x = $('div.list-item').width();
        //console.log(x);
        if(index < endIndex ){
            index++;
            $item.animate({'left':'-='+x+'px'});
        }
    });*/
    
    $('div#arrowL').click(function(){
        var x = $('div.list-item').width() + 10;
        if(index > 0){
            index--;            
            $item.animate({'left':'+='+x+'px'});
        }
    });
    /*$('i#iconL').click(function(){
        var x = $('div.list-item').width();
        if(index > 0){
            index--;            
            $item.animate({'left':'+='+x+'px'});
        }
    });*/
    
});

/*$( window ).resize(function() {
    var $item = $('div.list-item'), //Cache your DOM selector
    visible = 2, //Set the number of items that will be visible
    index = 0, //Starting index
    endIndex = ( $item.length / visible ) - 1; //End index

    $('div#arrowR').click(function(){
        var x = $('div.list-item').width() + 10;
        console.log(x);
        if(index < endIndex ){
            index++;
            $item.animate({'left':'-='+x+'px'});
        }
    });

    $('div#arrowL').click(function(){
        var x = $('div.list-item').width() + 10;
        if(index > 0){
            index--;            
            $item.animate({'left':'+='+x+'px'});
        }
    });
});*/
