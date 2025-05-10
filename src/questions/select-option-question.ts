import inquirer from "inquirer";
import { TaskOptionEnum } from "../enums/task-option-enum";

export const selectedOptionQuestion = async () => {
  const { selectedOption } = await inquirer.prompt([
    {
      type: "list",
      name: "selectedOption",
      message: "Selecione uma opção:",
      choices: [
        { name: "Iniciar tarefa", value: TaskOptionEnum.startTask },
        { name: "Parar tarefa", value: TaskOptionEnum.stopTask },
        { name: "Criar tarefa", value: TaskOptionEnum.createTask },
      ],
    },
  ]);

  return { selectedOption };
};
