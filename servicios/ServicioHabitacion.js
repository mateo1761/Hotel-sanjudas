import { modeloHabitacion } from "../models/habitacionModelo.js";

export class ServicioHabitacion {
  constructor() {}

  async buscarTodos() {
    let habitaciones = await modeloHabitacion.find();
    return habitaciones;
  }

  async buscarPorId(id) {
    let habitacion = await modeloHabitacion.findById(id)
    return habitacion
  }

  async registrar(datosPeticion) {
    let habitacionaRegistrar = new modeloHabitacion(datosPeticion);
    return await habitacionaRegistrar.save();
  }

  async editar(id, datosPeticion) {
    return await modeloHabitacion.findByIdAndUpdate(id, datosPeticion);
  }

  async eliminar(id) {
    return await modeloHabitacion.findByIdAndDelete(id);
  }
}
