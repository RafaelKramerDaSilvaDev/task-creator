import { confirmCreateTaskQuestion } from "../../questions/confirm-create-task-question";
import { projectIdQuestion } from "../../questions/project-id-question";
import { selectDeveloperQuestion } from "../../questions/select-developer-question";
import { taskNameQuestion } from "../../questions/task-name-question";
import { login } from "../login";

export const createTask = async () => {
  const { taskName } = await taskNameQuestion();
  const { selectedDeveloper } = await selectDeveloperQuestion();
  const { projectId } = await projectIdQuestion();
  const { confirmInformation } = await confirmCreateTaskQuestion();

  if (!confirmInformation) {
    return;
  }

  const { page } = await login();
};
