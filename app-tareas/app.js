const process = require('process');
const {leerJSON, escribirJSON, filtrarPorEstado} = require('./funcionesDeTareas');

const comando = process.argv[2];

let tarea;
let estado;

switch(comando){
    case "listar":
        console.log("-----------------");
        console.log("Listado de Tareas");
        console.log("-----------------");
        const productosArray = leerJSON();

        productosArray.forEach((producto) => {
            console.log(
                `${producto.titulo} - ${producto.estado}`
            );
        });
        break
        case "crear":
            tarea = process.argv[3];
            console.log("Nueva Tarea Creada\n------------------");
            console.log(escribirJSON(tarea));
            break;
        case "filtrar":
            estado = process.argv[3];
            console.log("Tareas "+ estado +"\n-----------------");
            console.log(filtrarPorEstado(estado));
            break;
     case undefined: 
            console.log("--------------------------------------");
            console.log("Atención - Tienes que pasar una acción");
            console.log( "Las Acciones disponibles son: listar, crear y filtrar");
            console.log("--------------------------------------");
        break;

    default: 
            console.log("--------------------------------------");
            console.log("No entiendo qué quieres hacer.");
            console.log( "Las Acciones disponibles son: listar, crear y filtrar");
            console.log("--------------------------------------");
        break;
}


