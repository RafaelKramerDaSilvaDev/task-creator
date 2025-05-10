import inquirer from "inquirer";

export const taskNumberQuestion = async () => {
  const { taskNumber } = await inquirer.prompt([
    {
      type: "input",
      name: "taskNumber",
      message: "Número da tarefa:",
      default: "9999",
    },
  ]);

  return { taskNumber };
};
