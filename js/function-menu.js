$(document).ready(function() {
    $('#contatos').click(function() {
        $('#conteudo').empty()
        $('#conteudo').load('src/Contatos/Visao/contato.html')
    })
    $('#novas-fofocas').click(function() {
        $('#conteudo').empty()
        $('#conteudo').load('src/Novas-Fofocas/Visao/novasFofocas.html')
    })
    $('#saiba-mais').click(function() {
        $('#conteudo').empty()
        $('#conteudo').load('src/Saiba-Mais/Visao/saibaMais.html')
    })
    $('#inicio').click(function() {
        $('#conteudo').empty()
        $('#conteudo').load('src/Home/view/conteudoOriginal.html')
    })
})