import styled from 'styled-components';

const StyledGeneralContainer = styled.div`
	width: 800px;
	height: 2000px;
	margin-inline: auto;
	padding-top: 40px;
	background: linear-gradient(
		180deg,
		rgba(179, 2, 255, 1) 0%,
		rgba(49, 60, 166, 0.7868389999657346) 100%
	);
	display: flex;
	flex-direction: column;
	align-items: center;
	border-radius: 20px;
`;
const StyledContainer = styled.div`
	display: flex;
	margin-bottom: 30px;
	gap: 30px;
`;
const StyledTitle = styled.h1`
	text-align: center;
	color: white;
	margin-inline: auto;
`;
const StyledContainerActive = styled.div`
	display: flex;
	justify-content: center;
`;

export {
	StyledGeneralContainer,
	StyledContainer,
	StyledTitle,
	StyledContainerActive
};
