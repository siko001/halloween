import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
	height: 100vh;
	scroll-behavior: smooth;
	scroll-snap-align: center;
`;

const Container = styled.div`
	height: 100%;
	width: 100%;
	position: relative;
	display: flex;
	flex-direction: column;
`;
const Left = styled.div`
	display: flex;
	white-space: nowrap;
	margin-top: 100px;
	align-items: flex-end;
	justify-content: center;
`;

const Fouth = () => {
	return (
		<>
			<Section>
				<Container>
					<Left>
						<h2 className="ending__title">Your Worst NightMare!</h2>
					</Left>
				</Container>
			</Section>
		</>
	);
};
export default Fouth;
