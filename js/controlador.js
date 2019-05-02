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
                $("#tipos").append(
                    `<div class="col-12">
                        <h1>${res[i].nombre}</h1>
                        <div class="row" id="${res[i]._id}">
                        </div>
                    </div>`
                );
            }
            obtenerDocumentos();
        },
        error:function(error){
            console.log(error);
        }
    });
    /**/
});

function obtenerDocumentos(){
    $.ajax({
        url:"/documentos",
        method:"GET",
        dataType:"json",
        success:function(res){
            console.log("Respuesta");
            console.log(res);
            generarItems(res);
        },
        error:function(error){
            console.log(error);
        }
    });
}

function generarItems(informacion){
    
    for(var i=0; i<informacion.length;i++){

        document.getElementById(informacion[i].tipo._id).innerHTML += 
                `<div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12" id="video" style="background-color:  white; margin-top: 20px; margin-right: 70px; margin-left: 70px; border-radius: 10px;" >
                    <section style="width: 160px; height: 450px; margin-left: auto; margin-right: auto;">
                        <img src="img/carpeta.png" style="width: 160px; height: 100px; border-radius: 3px;">
                        <h1 style="width: 160px; font-size: medium; margin-top:20px; color: black; font-style: italic; text-align: center;">${informacion[i].nombre}</h1>
                        <button type="button" class="boton boton-rojo" onclick="location='misproyectos.html'" style="margin-top: 40px;">Ingresar</button>
                    </section>
                </div>`;
    }
}