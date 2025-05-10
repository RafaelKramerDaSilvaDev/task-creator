import inquirer from "inquirer";
import { createTask } from "./automations/task/create-task";
import { startTask } from "./automations/task/start-task";
import { stopTask } from "./automations/task/stop-task";

enum TaskOptionEnum {
  startTask,
  stopTask,
  createTask,
}

const app = async () => {
  const { selectedOption } = await inquirer.prompt([
    {
      type: "input",
      name: "selectedOption",
      message:
        "Selecione uma opção:\n[1] Iniciar tarefa\n[2] Parar tarefa\n[3] Criar tarefa",
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
