var nopeNode = document.getElementById("Nah");
var yepNode = document.getElementById("Aye");

function hover(element, enter, leave){
    element.addEventListener('mouseenter', enter)
    element.addEventListener('mouseleave', leave)
}

hover(nopeNode, e => { //e elementti väittää turhuuttua mutta koodi ei toimi ilman sitä
    // On hover
    nopeNode.style.height = "280px";
    nopeNode.style.width = "280px";
  }, e => {
    // On exit hover
    nopeNode.style.height = "300px";
    nopeNode.style.width = "300px";
})

hover(yepNode, e => { //e elementti väittä turhuuttua mutta koodi ei toimi ilman sitä
    // On hover
    yepNode.style.height = "280px";
    yepNode.style.width = "280px";
  }, e => {
    // On exit hover
    yepNode.style.height = "300px";
    yepNode.style.width = "300px";
})