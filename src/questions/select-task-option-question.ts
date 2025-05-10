import inquirer from "inquirer";
import { TaskEnum } from "../enums/task-enum";

export const selectTaskOptionQuestion = async () => {
  const { selectedOption } = await inquirer.prompt([
    {
      type: "list",
      name: "selectedOption",
      message: "Selecione uma opção:",
      choices: [
        { name: "Iniciar tarefa", value: TaskEnum.startTask },
        { name: "Parar tarefa", value: TaskEnum.stopTask },
        { name: "Criar tarefa", value: TaskEnum.createTask },
      ],
    },
  ]);

  return { selectedOption };
};
