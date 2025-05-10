import inquirer from "inquirer";
import { createTask } from "./automations/task/create-task";
import { startTask } from "./automations/task/start-task";
import { stopTask } from "./automations/task/stop-task";

enum TaskOptionEnum {
  startTask = 1,
  stopTask = 2,
  createTask = 3,
}

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
