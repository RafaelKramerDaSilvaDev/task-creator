import { confirmInformationQuestion } from "../../questions/confirm-information-question";
import { projectIdQuestion } from "../../questions/project-id-question";
import { selectDeveloperQuestion } from "../../questions/select-developer-question";
import { taskNameQuestion } from "../../questions/task-name-question";
import { login } from "../login";

export const createTask = async () => {
  const { taskName } = await taskNameQuestion();
  const { selectedDeveloper } = await selectDeveloperQuestion();
  const { projectId } = await projectIdQuestion();
  const { confirmInformation } = await confirmInformationQuestion();

  if (!confirmInformation) {
    return;
  }

  const { page } = await login();
};
