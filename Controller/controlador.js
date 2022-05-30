import { ServicioReserva } from "../servicios/ServicioReserva.js";
import { ServicioHabitacion } from "../servicios/ServicioHabitacion.js";

export class ControladorReserva {
  constructor() { }

  async buscarTodos(request, response) {
    let servicio = new ServicioReserva(); //se instancia class servicio

    try {
      response.status(200).json({
        mensaje: "Exito en la busqueda",
        data: await servicio.buscarTodos(),
        estado: true,
      });
    } catch (error) {
      response.status(400).json({
        mensaje: `Upss! Hubo un problema ${error}`,
        data: [],
        estado: false,
      });
    }
  }

  async buscarPorId(request, response) {
    //aca va operacion en reservar hab los calculos
    let servicio = new ServicioReserva();
    let id = request.params.id;

    console.log(`El id solicitado es ${id}`);

    try {
      response.status(200).json({
        mensaje: "Exito en la busqueda por id: " + id,
        data: await servicio.buscarPorId(id),
        estado: true,
      });
    } catch (error) {
      response.status(400).json({
        mensaje: "Upss! Hubo un problema" + error,
        data: [],
        estado: false,
      });
    }
  }

  async insertar(request, response) {
    let servicio = new ServicioReserva();
    let servicioHabitacion = new ServicioHabitacion();
    let datosPeticion = request.body;


    try {
      let habitacion = await servicioHabitacion.buscarPorId(datosPeticion.id_hab); //tengo todos los datos de la hab
      let fechaIngreso = new Date(datosPeticion.fechaIn);
      let fechaSalida = new Date(datosPeticion.fechaOut);

      let difference = Math.abs(fechaSalida - fechaIngreso);
      let days = difference / (1000 * 60 * 60 * 24);
      let costo = days * habitacion.precio;

      datosPeticion.costo = costo;
      let rp = await servicio.registrar(datosPeticion);
      console.log(datosPeticion);
      response.status(200).json({
      mensaje: "Exito en la reserva",
      data: rp,
      estado: true,
      });
    } catch (error) {
      response.status(400).json({
        mensaje: "Upss! Hubo un problema" + error,
        data: [],
        estado: false,
      });
    }
  }

  async editar(request, response) {
    let servicio = new ServicioReserva();
    let id = request.params.id;
    let datosPeticion = reques.body;

    try {
      await servicio.editar(id, datosPeticion);
      response.status(200).json({
        mensaje: "Exito en la ediciòn",
        data: null,
        estado: true,
      });
    } catch (error) {
      response.status(400).json({
        mensaje: "Upss! Hubo un problema",
        data: [],
        estado: false,
      });
    }
  }

  async eliminar(request, response) {
    let id = reque.params.id;
    let servicio = new ServicioReserva();
    try {
      await servicio.eliminar(id);
      response.status(200).json({
        mensaje: "Exito eliminando la información",
        data: null,
        estado: true,
      });
    } catch (error) {
      response.status(400).json({
        mensaje: "Upss! Hubo un problema",
        data: [],
        estado: false,
      });
    }
  }
}
