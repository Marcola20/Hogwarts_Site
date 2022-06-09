const documentsHeight = $(window).height();

if (documentsHeight > 768) {
    /* GRIFINÓRIA */
    $("#pDoGrifinoria").show();
    $("#pDoGodric").show();
    $("#pObservacaoSword").show();
    $("#pObservacaoCapa").show();
    $("#pAtivaMapa").show();

    /* LUFA-LUFA */
    $("#pDaLufa").show();
    $("#pReliquiaLufa").hide();

}else{
    /* GRIFINÓRIA */
    $("#pDoGrifinoria").hide();
    $("#pDoGodric").hide();
    $("#pObservacaoSword").hide();
    $("#pObservacaoCapa").hide();
    $("#pAtivaMapa").hide()

    /* LUFA-LUFA */
    $("#pDaLufa").hide();
    $("#pReliquiaLufa").hide();
}



