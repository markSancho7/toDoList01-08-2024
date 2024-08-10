import { StyledTaskContainer, StyledTaskName } from './styles';

const Task = ({
	setDeleteTask,
	taskName,
	finished,
	id,
	taskList,
	setTaskList
}) => {
	return (
		<StyledTaskContainer>
			<StyledTaskName>{taskName}</StyledTaskName>
			<input
				type='checkbox'
				defaultChecked={finished}
				onClick={event =>
					functionChangeFinished(event, id, taskList, setTaskList)
				}
			/>
			<button onClick={() => checkId(setDeleteTask, id)}>deleteTask</button>
		</StyledTaskContainer>
	);
};

const checkId = (setDeleteTask, id) => {
	setDeleteTask(id);
};
const functionChangeFinished = (event, id, taskList, setTaskList) => {
	console.log(id);
	const isChecked = event.target.checked;
	console.log(isChecked);
	setTaskList(
		taskList.map(task =>
			task.id === id ? { ...task, finished: isChecked } : task
		)
	);
};

export default Task;
