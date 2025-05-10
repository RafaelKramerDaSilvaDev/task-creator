import inquirer from "inquirer";
import { createTask } from "./automations/task/create-task";
import { startTask } from "./automations/task/start-task";
import { stopTask } from "./automations/task/stop-task";
import { TaskEnum } from "./enums/task-enum";

const app = async () => {
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

  switch (selectedOption) {
    case TaskEnum.startTask:
      startTask();
      return;
    case TaskEnum.stopTask:
      stopTask();
      return;
    case TaskEnum.createTask:
      createTask();
      return;
  }
};

app();
