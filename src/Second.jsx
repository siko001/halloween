import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
	height: 100vh;
	@media screen and (max-width: 750px) {
		min-height: 130vh;
		height: auto;
	}
`;

const Container = styled.div`
	height: 100%;
	width: 100%;
	position: relative;
	display: flex;
`;
const Left = styled.div`
	flex: 1;
	padding: 100px 0 0 40px;
	@media screen and (max-width: 750px) {
		padding: 40px 0 0 10px;
	}
`;
const Right = styled.div`
	flex: 2;
	@media screen and (max-width: 750px) {
		flex: 1;
	}
`;
const Second = () => {
	return (
		<>
			<Section>
				<Container>
					<Left>
						<h2 className="section_title">Art The Clown</h2>
						<p className="paragraph">
							a nightmarish embodiment of malevolence, haunts the shadows with ghastly glee. His grotesque clown visage conceals
							sadistic horrors that unfold in silence, leaving a chilling trail of violence and dread, etching nightmares into
							your very soul. Every encounter becomes an unrelenting descent into madness.
						</p>
					</Left>
					<Right></Right>
				</Container>
			</Section>
		</>
	);
};

export default Second;
