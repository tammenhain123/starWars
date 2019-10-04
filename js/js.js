



//funcao que define os 10 dados mostrados dependendo da página em que está
function busca(pag) {
    $.get( "https://swapi.co/api/people/?page="+pag, function( data ) {
        $(".conteudo").html("");
        for(var i=0; i<=9; i++){
            $(".conteudo").append("<tr><td >"+ data["results"][i]["name"] + "</td></tr>");
        }
    }, "json" );
}

//funcao que define quantos botões tem o paginador
function paginador(qtdPaginas){
    $(".pag").html("")
    for(var i = 1; i<=qtdPaginas; i++){
        $(".pag").append("<li class='page-item' onclick='busca("+i+")'><a class='page-link' href='#'>"+ i +"</a></li>");
    }
}

$( document ).ready(function() {

    
    //inicializando a página e chamando os 10 primeiros registros
    $.get( "https://swapi.co/api/people/", function( data ) {
        var numeroPaginas  = Math.ceil(data["count"]/10);
        $("#totalRegistros").val(data["count"]);
        paginador(numeroPaginas);
    }, "json" );
    busca(1);
    
    
    //capturando a busca
    $(".search").click(function() {
        $(".conteudo").html("")
        var filtro = $(".pesquisa").val();
        var count  = $("#totalRegistros").val();
        var vecPessoa = new Array();
        if(filtro != ""){
            for(var j=1; j<=count; j++){
                $.get( "https://swapi.co/api/people/"+j, function( data ) {
            }, "json" )
            .done(function (data) {    
                if(data["name"].indexOf(filtro) != -1){
                    $(".conteudo").append("<tr><td>"+ data["name"] + "</td></tr>");
                }
            })
            }
        }else{
            busca(1);
        }  

    });
    
});


