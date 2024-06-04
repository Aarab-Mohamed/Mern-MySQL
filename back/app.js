import express from "express";
import cors from "cors";
import db from "./database/db.js";
import blogRoutes from "./routes/routes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/blogs", blogRoutes);

// Este manejador de ruta verifica la conexión a la base de datos
app.get("/", async (req, res) => {
  try {
    await db.authenticate();
    // Si la conexión es exitosa, envía una respuesta al cliente
    res.send("Conexión exitosa a la DB");
  } catch (error) {
    // Si hay un error en la conexión, envía una respuesta de error al cliente
    console.log(`El error de conexión es: ${error}`);
    res.status(500).send("Error de conexión a la DB");
  }
});

app.listen(8000, () => {
  console.log("Server UP running in http://localhost:8000/");
});
