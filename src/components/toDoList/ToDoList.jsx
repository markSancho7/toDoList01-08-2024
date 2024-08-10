import { useEffect, useState } from 'react';
import { v4 } from 'uuid';
import Task from '../task/Task';
import {
	StyledContainer,
	StyledContainerActive,
	StyledGeneralContainer,
	StyledTitle
} from './style';

const ToDoList = () => {
	const [deleteTask, setDeleteTask] = useState('');
	const [active, setActive] = useState(false);
	const [taskList, setTaskList] = useState([
		{
			id: v4(),
			taskName: 'primera tarea',
			finished: false
		},
		{
			id: v4(),
			taskName: 'segunda tarea',
			finished: true
		}
	]);
	const filterByActive = byActive(taskList, active);
	useEffect(() => {
		if (deleteTask) {
			setTaskList(taskList => taskList.filter(task => task.id !== deleteTask));
			setDeleteTask('');
		}
	}, [deleteTask]);

	return (
		<StyledGeneralContainer>
			<StyledTitle>TO DO LIST</StyledTitle>
			<StyledContainer>
				<form
					onSubmit={event => {
						registerTask(event, taskList, setTaskList);
					}}
				>
					<input placeholder='nueva tarea' name='taskName' type='text' />
					<button type='submit'>add task</button>
				</form>
				<StyledContainerActive>
					<label htmlFor=''>mostrar activas</label>
					<input
						type='checkbox'
						onClick={event => selectByActive(event.target.checked, setActive)}
					/>
				</StyledContainerActive>
			</StyledContainer>
			{filterByActive.map(task => {
				return (
					<Task
						key={task.id}
						{...task}
						setDeleteTask={setDeleteTask}
						taskList={taskList}
						setTaskList={setTaskList}
					/>
				);
			})}
		</StyledGeneralContainer>
	);
};
const selectByActive = (event, setActive) => {
	setActive(event);
};
const byActive = (taskList, active) => {
	if (!active) {
		return [...taskList];
	} else {
		return taskList.filter(task => task.finished);
	}
};
const registerTask = (event, taskList, setTaskList) => {
	event.preventDefault();
	const newTask = {
		id: v4(),
		taskName: event.target.taskName.value,
		finished: false
	};
	setTaskList([...taskList, newTask]);
};

export default ToDoList;
