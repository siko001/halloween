import React, { useEffect, useRef } from 'react';
import Header from './Header';
import Second from './Second';
import Third from './Third';
import Forth from './Forth';
import Final from './Final';
import baffle from 'baffle';
import Clown from './components/Clown';
import sound from './assets/sound/spook.mp3';
import { ScrollControls, Scroll, Environment, Cloud } from '@react-three/drei';

const App = () => {
	const audioRef = useRef(null);
	const playButtonRef = useRef(null);

	const playAudio = () => {
		if (audioRef.current) {
			audioRef.current.play();
		}
	};

	useEffect(() => {
		const target = baffle('.title');
		target.set({
			characters: '░H░A░L░L░O░W░E░E░N░',
			duration: '2s',
			speed: 150,
		});

		target.start();
		target.reveal(1000, 1000);
	}, []);
	return (
		<>
			<color attach="background" args={['#01071d']} />
			<Environment preset="night" />
			<ScrollControls pages={5} damping={1}>
				<Cloud segments={3} bounds={[8, 2, 4]} volume={10} color="black" />
				<Cloud segments={1} bounds={[8, 2, 4]} volume={1} color="gray" />
				<Cloud segments={10} bounds={[8, 2, 4]} volume={10} color="darkred" />

				<Scroll></Scroll>
				<Clown className="clown" scale={2} position={[0, -2, 0]} />
				<Scroll html style={{ width: '100%' }}>
					<div className="audio_container">
						<audio id="audio-element" src={sound} ref={audioRef} loop />
						<button id="play-button" ref={playButtonRef} onClick={playAudio}>
							Play Audio
						</button>
					</div>
					<Header />
					<Second />
					<Third />
					<Forth />
					<Final />
				</Scroll>
			</ScrollControls>
		</>
	);
};

export default App;
