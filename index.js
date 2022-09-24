/*
let chamar = document.getElementById("whatsapp");
window.onscroll = function scrollFunction () {
    if (document.body.scrollTop > 180 || document.documentElement.scrollTop > 180) {
        chamar.style.display = "block";
    }else {
        chamar.style.display = "none";
    }
}

function chamarAtendimento() {
    document.documentElement.scrollTop = 0;
    console.log("Volte Sempre!!!");
}
*/



let botao = document.getElementById("botao-topo");
window.onscroll = function scrollFunction () {
    if (document.body.scrollTop > 2000 || document.documentElement.scrollTop > 2000) {
        botao.style.display = "block";
    }else {
        botao.style.display = "none";
    }
}

function voltarParaTopo() {
    document.documentElement.scrollTop = 0;
    console.log("Volte Sempre!!!");
}



AOS.init();