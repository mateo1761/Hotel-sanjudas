import mongoose from 'mongoose';

export async function conectar(){
    try{
        await mongoose.connect(process.env.DATABASE);
        console.log("Exito conectando bd")

    }catch(error){
        console.log(`Fallo en conexión ${error}`)
    }
}