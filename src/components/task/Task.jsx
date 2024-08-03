import { StyledTaskContainer, StyledTaskName } from './styles';

const Task = ({ taskName, finished }) => {
	return (
		<StyledTaskContainer>
			<StyledTaskName>{taskName}</StyledTaskName>
			<input type='checkbox' defaultChecked={finished} />
		</StyledTaskContainer>
	);
};

export default Task;
