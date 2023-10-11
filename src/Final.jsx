import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
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

const Bottom = styled.div`
	display: flex;
	justify-content: center;
	align-items: baseline;
`;
const Final = () => {
	return (
		<Section>
			<Container>
				<Bottom>
					<button>Dare To Enter?</button>
				</Bottom>
			</Container>
		</Section>
	);
};

export default Final;
