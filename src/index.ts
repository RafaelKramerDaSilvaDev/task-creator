import inquirer from "inquirer";
import { createTask } from "./automations/task/create-task";
import { startTask } from "./automations/task/start-task";
import { stopTask } from "./automations/task/stop-task";
import { TaskOptionEnum } from "./enums/task-option-enum";

const app = async () => {
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

  switch (selectedOption) {
    case TaskOptionEnum.startTask:
      startTask();
      return;
    case TaskOptionEnum.stopTask:
      stopTask();
      return;
    case TaskOptionEnum.createTask:
      createTask();
      return;
  }
};

app();
