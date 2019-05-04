$(document).ready(function(){
    console.log("El DOM ha sido cargado");
    $.ajax({
        url:"/tipos",
        method:"GET",
        dataType:"json",
        success:function(res){
            console.log("Respuesta");
            console.log(res);
            for (var i=0; i<res.length; i++){
                $("#tipo").append(
                    `<option value="${res[i]._id}">${res[i].nombre}</option>`
                );
            }
        },
        error:function(error){
            console.log(error);
        }
    });
    /**/
});

$("#btn-crear-documento").click(function(){

    var parametros = $("#formulario-crear").serialize() +  "&nombreTipo="+$("#tipo option:selected").text();
    console.log("Información a guardar: " + parametros);
    $.ajax({
        url:"/documentos/",
        method:"post",
        data: parametros,
        dataType: "json",
        success:function(res){
            console.log(res);
        },
        error:function(error){
            console.log(error);
        }
    });

});