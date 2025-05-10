import inquirer from "inquirer";
import { DeveloperEnum } from "../enums/developer-enum";

export const selectDeveloperQuestion = async () => {
  const { selectedDeveloper } = await inquirer.prompt([
    {
      type: "list",
      name: "selectedDeveloper",
      message: "Nome do Desenvolvedor:",
      choices: [
        { name: "Paulo Turco", value: DeveloperEnum["Paulo Turco"] },
        { name: "Paulo Muller", value: DeveloperEnum["Paulo Muller"] },
        {
          name: "Rafael Krämer da Silva",
          value: DeveloperEnum["Rafael Krämer da Silva"],
        },
      ],
    },
  ]);

  return { selectedDeveloper };
};
