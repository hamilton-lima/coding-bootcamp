
function rickRollON(){
    const rick = document.getElementById("rick");
    rick.setAttribute("style", "display: inline;");

    const buttonOn = document.getElementById("on");
    const buttonOff = document.getElementById("off");
    buttonOn.setAttribute("style", "display: none;");
    buttonOff.setAttribute("style", "display: inline;");
}

function rickRollOFF(){
    const rick = document.getElementById("rick");
    rick.setAttribute("style", "display: none;");

    const buttonOn = document.getElementById("on");
    const buttonOff = document.getElementById("off");
    buttonOn.setAttribute("style", "display: inline;");
    buttonOff.setAttribute("style", "display: none;");
}