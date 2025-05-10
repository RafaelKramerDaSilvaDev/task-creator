import inquirer from "inquirer";

export const taskNameQuestion = async () => {
  const { taskName } = await inquirer.prompt([
    {
      type: "input",
      name: "taskName",
      message: "Nome da tarefa:",
    },
  ]);

  return { taskName };
};
