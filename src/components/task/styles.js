import styled from 'styled-components';

const StyledTaskContainer = styled.div`
	width: 400px;
	height: 50px;
	display: flex;
	flex-direction: row;
	border: 2px solid whitesmoke;
	align-items: center;
	justify-content: space-between;
	padding: 10px;
	border-radius: 20px;
	margin-bottom: 10px;
`;
const StyledTaskName = styled.p`
	font-weight: bold;
`;

export { StyledTaskContainer, StyledTaskName };
