import mongoose from 'mongoose';

let Schema = mongoose.Schema

let Reserva = new Schema({
    
    idCliente: {
        type: String,
        required:true
    },

    fechaIn: {
        type: Date,
        required: true
    },

    fechaOut:{
        type: Date,
        required: true
    },

    costo: {
        type: Number,
        required:false
    },

    numPersonas: {
        type: Number,
        required:true
    },

    id_hab: {
        type: String,
        required:true
    }
})

export let modeloReserva = mongoose.model('reservas', Reserva)