require("colors");

const mostrarMenu = () => {
  return new Promise((resolve) => {
    console.log("======================".green);
    console.log("Selecciona una opción".green);
    console.log("======================".green);

    console.log(`${"1.".green} Crear tarea`);
    console.log(`${"2.".green} Listar tareas`);
    console.log(`${"3.".green} Listar tareas completadas`);
    console.log(`${"4.".green} Listar tareas pendientes`);
    console.log(`${"5.".green} Completar tarea(s)`);
    console.log(`${"6.".green} Borrar tarea`);
    console.log(`${"0.".green} Salir\n`);

    const readline = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    readline.question("", (answer) => {
      readline.close();
      resolve(answer);
    });
  });
};

const pausa = () => {
  return new Promise((resolve) => {
    const readline = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    readline.question(
      `\nPresione ${"ENTER".green} para continuar`,
      (answer) => {
        readline.close();
        resolve(answer);
      }
    );
  });
};

module.exports = {
  mostrarMenu,
  pausa,
};
