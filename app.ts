import { guardarDB, leerDB } from "./helpers/guardarArchivo";
import { inquirerMenu, pausa, readInput } from "./helpers/inquirer";
import { Tareas } from "./models/tareas";

require("colors");

console.clear();

const main = async () => {
  let opt = "";
  const tareas = new Tareas();
  const data = leerDB();
  if (data) {
    tareas.cargarTareasFromArr(data);
  }
  do {
    opt = await inquirerMenu();

    switch (opt) {
      case "1":
        const description = await readInput("Descripción:");
        tareas.crearTarea(description);
        break;
      case "2":
        console.log(tareas.tareasArr);
        break;
    }

    guardarDB(tareas.tareasArr);
    await pausa();
  } while (opt !== "0");
};

main();
