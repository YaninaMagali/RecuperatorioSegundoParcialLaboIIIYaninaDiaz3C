class Modal{

    static MostrarModal() {
        var modal = document.getElementById("id_modal");
        var addBtn = document.getElementById("id_agregar_btn");
        var cancelarBtn = document.getElementById("btn_cancelar");
            
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

