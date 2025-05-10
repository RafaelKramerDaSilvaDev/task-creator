import inquirer from "inquirer";

export const projectIdQuestion = async () => {
  const { projectId } = await inquirer.prompt([
    {
      type: "input",
      name: "projectId",
      message: "Identificador do Projeto:",
    },
  ]);

  return { projectId };
};
