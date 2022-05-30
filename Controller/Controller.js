import { ServicioHabitacion } from "../servicios/ServicioHabitacion.js";


export class ControladorHabitacion {
    constructor(){}

   async buscarTodos(request,response){
        let servicio = new ServicioHabitacion(); //se instancia class servicio
        try{
 
            response.status(200).json({
                mensaje: "Exito en la busqueda",
                data: await servicio.buscarTodos(),
                estado: true
     
            })
     
        }catch(error){
             response.status(400).json({
                mensaje: "Upss! Hubo un problema",
                data: [],
                estado: false
         })
      
        }
    
    }

   async buscarPorId(request,response){
        //aca va operacion en reservar hab los calculos
        let servicio = new ServicioHabitacion();
        let id = request.params.id //capturo id que viene por URL

        console.log(`El id solicitado es ${id}`);

        try{
            response.status(200).json({
                mensaje: "Exito en la busqueda por id: " + id,
                data: await servicio.buscarPorId(id),
                estado: true
            })
         }catch(error){
             response.status(400).json({
                 mensaje: "Upss! Hubo un problema",
                 data: [],
                 estado: false
          })
     
         }
    }

    async insertar(request,response){
        let servicio = new ServicioHabitacion();
        let datosPeticion = request.body
        console.log(datosPeticion)
        try{
            await servicio.registrar(datosPeticion)
            response.status(200).json({
                mensaje: "Exito agregando",
                data: datosPeticion,
                estado: true
            })
         }catch(error){
             response.status(400).json({
                 mensaje: "Upss! Hubo un problema",
                 data: [],
                 estado: false
          })
     
         }
    }

    async editar(request,response){
        let servicio = new ServicioHabitacion();
        let id= request.params.id
        let datosPeticion = request.body
        
        try{
            await servicio.editar(id, datosPeticion)
            response.status(200).json({
                mensaje: "Exito en la ediciòn",
                data: null,
                estado: true
            })
         }catch(error){
             response.status(400).json({
                 mensaje: "Upss! Hubo un problema",
                 data: [],
                 estado: false
          })
     
         }
    }

  async eliminar(request,response){
      let id = request.params.id
      let servicio = new ServicioHabitacion();
        try{
            await servicio.eliminar(id)
            response.status(200).json({
                mensaje: "Exito eliminando la información",
                data:null,
                estado: true
            })
         }catch(error){
             response.status(400).json({
                 mensaje: "Upss! Hubo un problema",
                 data: [],
                 estado: false
          })
     
         }
    }
}