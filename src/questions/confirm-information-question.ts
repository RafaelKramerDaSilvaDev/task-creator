import inquirer from "inquirer";

export const confirmInformationQuestion = async () => {
  const { confirmInformation } = await inquirer.prompt([
    {
      type: "confirm",
      name: "confirmInformation",
      message: "Confirma criar tarefa?",
    },
  ]);

  return { confirmInformation };
};
