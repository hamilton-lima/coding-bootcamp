
function show(id){
    const element = document.getElementById(id);
    element.setAttribute("style", "display: inline;");
}

function hide(id){
    const element = document.getElementById(id);
    element.setAttribute("style", "display: none;");
}

function rickRollON(){
    show("rick");
 
    hide("on");
    show("off");
}

function rickRollOFF(){
    hide("rick");

    show("on");
    hide("off");
}
