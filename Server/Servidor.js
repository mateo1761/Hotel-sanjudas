import express from "express";
import { rutas } from "../Routes/rutas.js";
import { conectar } from "../DataBase/conexion.js";

export class Servidor {
  constructor() {
    this.app = express();
    this.conectarConBd();
    this.llamarAuxiliares();
    this.enrutarPeticiones();
  }

  despertarServidor() {
    this.app.listen(process.env.PORT, function () {
      console.log("Servidor encendido");
    });
  }

  enrutarPeticiones() {
    this.app.use("/", rutas);
  }

  llamarAuxiliares(){
    this.app.use(express.json())
  }

  conectarConBd(){
    conectar()
  }
}
