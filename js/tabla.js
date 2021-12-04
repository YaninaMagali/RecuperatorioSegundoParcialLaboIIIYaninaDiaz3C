class Tabla{

    static CrearTabla(idTabla, cabeceraParams) {
        var tabla = document.getElementById(idTabla);
    
        if (tabla === null)
        {
            tabla = document.createElement("table");
            tabla.setAttribute("id", idTabla);
            tabla.setAttribute("class", "Tabla");
            let container = document.getElementById("id_div_tabla");
            container.appendChild(tabla);
            let cabecera = Tabla.CrearCabeceraTabla(cabeceraParams);
            tabla.appendChild(cabecera);
            let tbody = document.createElement("tbody");
            tbody.setAttribute("id", "id_tbody");
            tabla.appendChild(tbody);
        }
        return tabla;
    }
    
    static CrearCabeceraTabla(cabeceraData) {
        let fila = document.createElement("tr");
        for(let i = 0; i<cabeceraData.length;i++)
        {
            let col = document.createElement("th");
            let lbl = document.createTextNode(cabeceraData[i]);
            col.appendChild(lbl);
            fila.appendChild(col); 
        }
    
        return fila;
    }
    
    static AgregarFila(v) {
        console.log(v);
        var idTabla = "id_tabla"
        var tabla = document.getElementById(idTabla);

        if (tabla == null)
        {
            tabla = Tabla.CrearTabla(idTabla, cabeceraParams);
        }
        if (v != null)
        {
            var tbody = document.getElementById("id_tbody");
            var fila = document.createElement("tr");
            fila.setAttribute("id", "id_fila" + v.id);
            fila.setAttribute("name", "name_fila"+ v.id);

            var btn = document.createElement("button");
            btn.setAttribute("id", "id_del_btn");
            btn.setAttribute("class", "botonDel");

            var cols = [v.id, v.make, v.model, v.price, btn];
            
            cols.forEach(element =>
            {
                var col = document.createElement("td");
                var lbl = document.createTextNode(element);
                col.appendChild(lbl);
                fila.appendChild(col);

                btn.addEventListener("click", (e)=>{
                Vehiculo.EliminarVehiculo(v)});

                

            })
    
           
    
            tbody.appendChild(fila);
        }
        return fila;
    }

    static EliminarVehiculo(){

        console.log("Eloiminar");
    //     var tabla = document.getElementById("id_tbody");
    //     var children = tabla.children; 

    //     while (tabla.firstChild) {
    //     tabla.removeChild(tabla.firstChild);
    //   }
    }

    static EliminarElementosLista(){

        var tabla = document.getElementById("id_tbody");
        var children = tabla.children; 

        while (tabla.firstChild) {
        tabla.removeChild(tabla.firstChild);
      }
    }

}   