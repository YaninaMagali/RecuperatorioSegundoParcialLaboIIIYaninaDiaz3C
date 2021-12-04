const vGlobal = [];
var filtrado = [];
const cabeceraParams = ["Id" ,"Marca", "Modelo", "Precio", "Accion"];

async function getVehiculos(funcionExito, funcionError){

    try{
        var response = await fetch("http://localhost:3001/vehiculos", 
        {method: 'GET', headers:{'Content-type': 'application/json'}});
        response.json().then(Vehiculo.CargarTablaVehiculos).catch(funcionError);
    }
    catch(e){
        console.log("Error: ");
    }
}


function funcionError() {
    console.log("Se ejecuta la funcionError() ");
}


function GetDataDelForm(funcionExito, funcionError)
{
    var marca = document.getElementById("id_marca").value;
    var modelo  = document.getElementById("id_modelo").value;
    var precio = document.getElementById("id_precio").value;
    var tipo = document.getElementById("id_tipo").value;
    var v;

    if( marca !== "" && modelo !== "" && precio !== "" && tipo !== "" ){
        
    switch(tipo){
        case  "Auto":
            var id = Vehiculo.CalcularId();
                v = new Auto(id, marca, modelo, precio, 4);
                funcionExito(v);
                //break;
        case 'Camioneta':
                var id = Vehiculo.CalcularId();
                v = new Camioneta(id, marca, modelo, precio, false);
                funcionExito(v);
                break;
    }
    }
    else{
        funcionError(false) ;
    }
}

function FiltrarPromise(){
    promise = new Promise(Vehiculo.Filtrar);
    promise.then(Vehiculo.CargarTablaVehiculos).catch(funcionError);
}

function PostAgregarPromise() {
    promise = new Promise(GetDataDelForm);
    promise.then(Vehiculo.AgregarVehiculo).catch(funcionError);
}

function MostrarPromedio(promedio){

    var p = document.getElementById("id_input_promedio");
    p.value = promedio;
}

function PromedioPromise(){
    promise = new Promise(Vehiculo.CalcularPromedio);
    promise.then(MostrarPromedio).catch(funcionError);
}

window.addEventListener("load", function () {
    this.getVehiculos();

    var filtro = document.getElementById("id_select_tipo");
    filtro.addEventListener("change", (e)=>{
        this.FiltrarPromise();
  });

  var addBtn = document.getElementById("btn_add");
    addBtn.addEventListener("click", (e)=>{
        Modal.MostrarModal();
    });
  
    var PromedioBtn = document.getElementById("btn_promedio");
    PromedioBtn.addEventListener("click", (e)=>{
        this.PromedioPromise();
    });

});

