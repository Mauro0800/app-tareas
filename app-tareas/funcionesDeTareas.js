const fs = require('fs');
const path = require('path')
 
const leerJSON = function () {
        const productosJSON = fs.readFileSync('./tareas.json','utf-8')
        const tareasParseados = JSON.parse(productosJSON)
        return tareasParseados;
    }

const guardarTareas= function(array){
    fs.writeFileSync(path.join(__dirname,'tareas.json'),JSON.stringify(array,null,3),'utf-8')
}    

const moduloTareas = {
   
    leerJSON : () => leerJSON(),

    escribirJSON : function(tarea){
        if(!tarea){
            return console.log("Escribe una tarea");
        }
        const tareas = leerJSON();
 
        let nuevaTarea = {
            titulo : tarea,
            estado : "en proceso"
        }
        tareas.push(nuevaTarea);
        guardarTareas(tareas);
     return console.log(`${tarea} -> en proceso`); 
    },
    filtrarPorEstado : function(estado){
        if(!estado){
            return console.log("Escribe un estado");
        }


        let tareas = leerJSON();

        const estadosFiltrados = tareas.filter(estado1 => {
            return estado1.estado.includes(estado)
        });
        return estadosFiltrados
    }
}

module.exports = moduloTareas;