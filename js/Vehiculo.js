class Vehiculo{
    id;
    make;
    model;
    price;

    constructor(id, make, model, price) {
        this.id = id;
        this.make = make;
        this.model = model;
        this.price = price;
      }


      static CargarTablaVehiculos(vehiculos){

        vehiculos.forEach(e => {
        vGlobal.push(e);
        Tabla.AgregarFila(e);
        })
      }


      static Filtrar(exito, error) {
      
        //var filtrado = [];
        var seleccion = document.getElementById("id_select_tipo").value;

        filtrado = vGlobal.filter(function(v){
            switch(seleccion){
                case 'Auto':
                    if(v.cantidadPuertas){
                        return true;
                    }
                    else{
                        return false;
                    }
                break;
                case 'Camioneta':
                    if(v.cantidadPuertas){
                        return true;
                    }
                    else{
                        return false;
                    }
                break;
            }
        }
        );


        if(typeof filtrado !== 'undefined' && filtrado.length > 0)
        {
          Tabla.EliminarElementosLista();
          exito(filtrado)
        }
        else{
          error(false)
        }        
      }

      static CalcularId(){

        var resultado = vGlobal.reduce( (acc, item) =>{
          if(acc < item.id ){
            acc = item.id;
            }
            return acc;
          }, 0);
        
          return resultado+1;
      }
            
      static CalcularPromedio(exito, error){

        var lista = filtrado;
        console.log(lista);
        if(lista.length == 0){
          lista = vGlobal;
        }

        var resultado = lista.reduce(function(ini, v){
        return ini += v.price; 
        }, 0);
        if(resultado > 0){
          var promedio = resultado / lista.length;
          console.log(promedio);
          exito(promedio);
        }
        else{
          error(false);
        }
      }

      static AgregarVehiculo(v){
        vGlobal.push(v);
        Tabla.AgregarFila(v);

      }
}