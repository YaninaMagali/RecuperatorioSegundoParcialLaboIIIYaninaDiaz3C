class Modal{

    static MostrarModal() {
        var modal = document.getElementById("id_modal");
        var addBtn = document.getElementById("id_agregar_btn");
        var cancelarBtn = document.getElementById("btn_cancelar");
    
        // if(materia != null){
        //     document.getElementById("id_id").value = materia.id;
        //     document.getElementById("id_nombre").value = materia.nombre;
        //     var fechaAux =  materia.fechaFinal.split("/");  
        //     document.getElementById("id_fecha").value = fechaAux[2] + "-" + fechaAux[1] + "-" + fechaAux[0];
 
        //     document.getElementById("id_cuatri").disabled = true;
        //     if (materia.turno == "Manana") {
        //         document.getElementById("id_Maniana").checked = true;
        //     }else {
        //         document.getElementById("id_Noche").checked = true;
        //     }
            
        addBtn.setAttribute("style", "display: block");
        cancelarBtn.setAttribute("style", "display: block");
    
        addBtn.addEventListener("click", (e)=>{
                PostAgregarPromise();
            });
    
            cancelarBtn.addEventListener("click", (e)=>{
                modal.close();
            });
    
            var closeBtn = document.getElementById("id_cerrar_modal");
            closeBtn.addEventListener("click", (e)=>{
                modal.close();
            });
    
            modal.show();
        }
    

}

