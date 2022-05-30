import { modeloReserva } from "../models/reservaModelo.js";
import { ServicioHabitacion } from "./ServicioHabitacion.js";

export class ServicioReserva {
  constructor() {}

  async buscarTodos() {
    let reservas = await modeloReserva.find();
    return reservas;
  }

  async buscarPorId(id) {
    let reserva = await modeloReserva.findById(id);
    return reserva;
  }

  async registrar(datosPeticion) {
    let reservaRegistrar = new modeloReserva(datosPeticion)
    return await reservaRegistrar.save();
  }

  async editar(id, datosPeticion) {
    return await modeloReserva.findByIdAndUpdate(id, datosPeticion);
  }

  async eliminar(id) {
    return await modeloReserva.findByIdAndDelete(id);
  }

  
}
