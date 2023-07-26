import { inquirerMenu, pausa, readInput } from "./helpers/inquirer";
import { Tareas } from "./models/tareas";

require("colors");

console.clear();

const main = async () => {
  let opt = "";
  const tareas = new Tareas();
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
    await pausa();
  } while (opt !== "0");
};

main();
