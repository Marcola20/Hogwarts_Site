const documentsHeight = $(window).height();

if (documentsHeight > 768) {
    /* GRIFINÓRIA */
    $("#pDoGrifinoria").show();
    $("#pDoGodric").show();
    $("#pObservacaoSword").show();
    $("#pObservacaoCapa").show();

    /* LUFA-LUFA */
    $("#pDaLufa").show();
    $("#pReliquiaLufa").show();
    $("#pObservacaoTaca").show();
    $("#pObservacaoTribruxo").show();

    /* SONSERINA */
    $("#pCamaraSonse").show();
    $("#pObservacaoBasilisco").show();

}else{
    /* GRIFINÓRIA */
    $("#pDoGrifinoria").hide();
    $("#pDoGodric").hide();
    $("#pObservacaoSword").hide();

    /* LUFA-LUFA */
    $("#pDaLufa").hide();
    $("#pReliquiaLufa").hide();
    $("#pObservacaoTaca").hide();
    $("#pObservacaoTribruxo").hide();

    /* SONSERINA */
    $("#pCamaraSonse").hide();
    $("#pObservacaoBasilisco").hide();
}

/* CAPA INVISIBILIDADE */


let time = 4000,
    currentImageIndex = 0,
    images = document.querySelectorAll("#capa img")
    max = images.length;

function nextImage(){

    images[currentImageIndex]
        .classList.remove("capaInvisibilidade")    

    currentImageIndex++
    if(currentImageIndex>= max)
        currentImageIndex = 0

    images[currentImageIndex]
        .classList.add("capaInvisibilidade")    
}

function start(){
    setInterval(() => {
        nextImage()
    }, time)
}

window.addEventListener("load", start)