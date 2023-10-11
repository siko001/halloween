import React from 'react';
import styled from 'styled-components';

// import baffle from 'baffle';
// import { useEffect, useRef, useState } from 'react';

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

const Top = styled.div`
	height: 100%;
	width: 100%;
	position: relative;
	flex: 3;
	justify-content: center;
	display: flex;
	align-items: flex-end;
`;

const Bottom = styled.div`
	height: 100%;
	width: 100%;
	position: relative;
	flex: 1;
	justify-content: center;
	display: flex;
	margin-bottom: 50px;
`;

const Header = () => {
	return (
		<>
			<Section>
				<Container>
					<Top></Top>
					<Bottom>
						<h1 className="title">Halloween</h1>
					</Bottom>
				</Container>
			</Section>
		</>
	);
};

export default Header;
