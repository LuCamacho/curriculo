var controle = 1;
function mudaEstilo() {
    var objDiv = document.getElementById("interface");
    if (controle == 0) {
        controle++;
        objDiv.style.color = "#FFFFFF";
        objDiv.style.background = "#000000";
    } else if (controle == 1) {controle++;
        objDiv.style.color = "#000000";
        objDiv.style.background = "#FFFFFF";
    } else {controle = 0;
        objDiv.style.color = "#FF0000";
        objDiv.style.background = "#000000";
    }
}



var fonteMaior = 1;
function aumentaFonte() {
    var objDiv = document.getElementById("interface");
    if (fonteMaior == 0) {
        fonteMaior++;
        objDiv.style.fontSize = "large";
    } else if (fonteMaior == 1) {fonteMaior++;
        objDiv.style.fontSize = "x-large";
    } else {fonteMaior = 0;
        objDiv.style.fontSize = "xx-large";
    }
}



var fonteMenor = 1;
function diminuiFonte() {
    var objDiv = document.getElementById("interface");
    if (fonteMenor === 0) {
        fonteMenor++;
        objDiv.style.fontSize = "small";
    } else if (fonteMenor == 1) {fonteMenor++;
        objDiv.style.fontSize = "x-small";
    } else {fonteMenor = 0;
        objDiv.style.fontSize = "xx-small";
    }
}