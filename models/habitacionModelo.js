import mongoose from 'mongoose';

let Schema = mongoose.Schema

let Habitacion = new Schema({

    nombre: {
        type: String,
        required: true
    },

    precio: {
        type: Number,
        required: true
    },

    numeroPersonas: {
        type: Number,
        required: true
    },

    foto: {
        type: String,
        require: true
    }
})

export let modeloHabitacion = mongoose.model('habitaciones', Habitacion)