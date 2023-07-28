import { guardarDB, leerDB } from "./helpers/guardarArchivo";
import {
  confirmar,
  inquirerMenu,
  listadoTareasBorrar,
  mostrarListadoCheckList,
  pausa,
  readInput,
} from "./helpers/inquirer";
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
        tareas.listadoCompleto();
        break;
      case "3":
        tareas.listarTareasPorStatus(true);
        break;
      case "4":
        tareas.listarTareasPorStatus(false);
        break;
      case "5":
        const ids = await mostrarListadoCheckList(tareas.tareasArr);
        tareas.toggleCompletadas(ids);
        break;
      case "6":
        const id = await listadoTareasBorrar(tareas.tareasArr);
        if (id !== "0") {
          const ok = await confirmar(
            "¿Estás seguro de que deseas borrar la tarea?"
          );
          if (ok) {
            tareas.borrarTarea(id);
            console.log("Tarea borrada correctamente");
          }
        }
        break;
    }

    guardarDB(tareas.tareasArr);
    await pausa();
  } while (opt !== "0");
};

main();
