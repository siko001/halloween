import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
	height: 100vh;
	scroll-behavior: smooth;
	scroll-snap-align: center;
	@media screen and (max-width: 750px) {
		height: 130vh;
	}
`;

const Container = styled.div`
	height: 100%;
	width: 100%;
	position: relative;
	display: flex;
`;

const Left = styled.div`
	flex: 2;

	@media screen and (max-width: 750px) {
		flex: 1;
	}
`;
const Right = styled.div`
	padding: 0 5px 0 0;
	flex: 1;
`;
const Third = () => {
	return (
		<>
			<Section>
				<Container>
					<Left></Left>
					<Right>
						<h2>Nightmare Mime</h2>
						<p className="paragraph">
							a sinister icon, emanates pure horror. His grotesque visage, devoid of empathy, invites torment. Silent and cruel,
							he unleashes relentless nightmares. Each encounter drowns victims in a chilling abyss of fear.
						</p>
					</Right>
				</Container>
			</Section>
		</>
	);
};

export default Third;
