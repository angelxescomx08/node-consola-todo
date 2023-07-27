import inquirer, { Answers, QuestionCollection } from "inquirer";
import color from "colors";
import { Tarea } from "../models/tarea";

const preguntas: QuestionCollection<any> = [
  {
    type: "list",
    name: "opcion",
    message: "¿Qué desea hacer?",
    choices: [
      {
        value: "1",
        name: `${color.green("1.")} Crear tarea`,
      },
      {
        value: "2",
        name: `${color.green("2.")} Listar tareas`,
      },
      {
        value: "3",
        name: `${color.green("3.")} Listar tareas completadas`,
      },
      {
        value: "4",
        name: `${color.green("4.")} Listar tareas pendientes`,
      },
      {
        value: "5",
        name: `${color.green("5.")} Completar tarea(s)`,
      },
      {
        value: "6",
        name: `${color.green("6.")} Borrar tarea`,
      },
      {
        value: "0",
        name: `${color.green("0.")} Salir`,
      },
    ],
  },
];

export const inquirerMenu = async () => {
  console.clear();
  const { opcion } = await inquirer.prompt(preguntas);
  return opcion;
};

export const pausa = () => {
  const question: QuestionCollection<any> = [
    {
      type: "input",
      name: "enter",
      message: `Presione ${color.green("Enter")} para continuar`,
    },
  ];
  return inquirer.prompt(question);
};

export const readInput = async (message: string) => {
  const question: QuestionCollection<Answers> = [
    {
      type: "input",
      name: "description",
      message,
      validate(value: string) {
        if (value.length === 0) return "Por favor ingrese una descripción";
        return true;
      },
    },
  ];

  const { description } = await inquirer.prompt(question);
  return description;
};

export const listadoTareasBorrar = async (tareas: Tarea[]) => {
  const choices = tareas.map((tarea, index) => ({
    value: tarea.id,
    name: `${color.green(`${index + 1}.`)} ${tarea.description}`,
  }));
  const preguntas: QuestionCollection<Answers> = [
    {
      type: "list",
      name: "id",
      message: "borrar",
      choices,
    },
  ];
  const { id } = await inquirer.prompt(preguntas);
  return id;
};
