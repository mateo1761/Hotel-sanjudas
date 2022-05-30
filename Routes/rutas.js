import express from "express";
import { ControladorReserva } from "../Controller/controlador.js";
import { ControladorHabitacion} from "../Controller/Controller.js";


let controlador = new ControladorHabitacion()
let controladorReserva = new ControladorReserva()


export let rutas = express.Router();

//Habitacion
rutas.get('/api/v1/sabado', controlador.buscarTodos)
rutas.get('/api/v1/sabado/:id', controlador.buscarPorId)
rutas.post('/api/v1/sabado',controlador.insertar)
rutas.put('/api/v1/sabado/:id', controlador.editar)
rutas.delete('/api/v1/sabado/:id', controlador.eliminar)

//Reserva
rutas.get('/api/v1/reserva', controladorReserva.buscarTodos)
rutas.get('/api/v1/reserva/:id', controladorReserva.buscarPorId)
rutas.post('/api/v1/reserva',controladorReserva.insertar)
rutas.put('/api/v1/reserva/:id', controladorReserva.editar)
rutas.delete('/api/v1/reserva/:id', controladorReserva.eliminar)

