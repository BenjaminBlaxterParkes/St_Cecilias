
function resize()
{
    var heights = window.innerHeight;
    document.getElementsByClassName("overlay-container").style.height = heights + "px";
}
resize();
window.onresize = function() {
resize();
};

