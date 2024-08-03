import { useState } from 'react';
import { v4 } from 'uuid';
import Task from '../task/Task';

const ToDoList = () => {
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

	return (
		<>
			<form
				onSubmit={event => {
					registerTask(event, taskList, setTaskList);
				}}
			>
				<label htmlFor=''>tarea a realizar</label>
				<input name='taskName' type='text' />
				<button type='submit'>add task</button>
			</form>
			{taskList.map(task => {
				return <Task key={task.id} {...task} />;
			})}
		</>
	);
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
