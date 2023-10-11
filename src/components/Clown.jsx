/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 model.gltf --transform 
Files: model.gltf [139.1MB] > model-transformed.glb [3.02MB] (98%)
Author: TaBByR (https://sketchfab.com/TaBByR)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/art-the-clown-4223ddc80fbf441cadf2313dd8e09e37
Title: Art The Clown
*/

import React, { useLayoutEffect, useRef } from 'react';
import { useGLTF, useScroll } from '@react-three/drei';
import { gsap } from 'gsap/gsap-core';
import { useFrame } from '@react-three/fiber';

export default function Clown(props) {
	const { nodes, materials } = useGLTF('model/model-transformed.glb');
	const environmentLight = useRef();
	const clown = useRef();
	const scroll = useScroll();
	const tl = useRef();

	useFrame(() => {
		tl.current.seek(scroll.offset * tl.current.duration());
	});

	useLayoutEffect(() => {
		tl.current = gsap.timeline({
			defaults: { duration: 2, ease: 'power1.inOut' },
		});

		tl.current
			.to(clown.current.rotation, { y: 0 }, 0)
			.to(clown.current.position, { x: 12 }, -20)

			.to(clown.current.rotation, { y: 1 }, -21)
			.to(environmentLight.current, { duration: 0.1, intensity: 2 }, -20)
			.to(environmentLight.current, { duration: 0.1, intensity: 0 }, -19.8)
			.to(environmentLight.current, { duration: 0.1, intensity: 0.5 }, -19.6)

			.to(clown.current.rotation, { y: -1 }, -19)
			.to(clown.current.position, { x: -20 }, -18)

			.to(clown.current.rotation, { y: 1 }, -17.5)
			.to(clown.current.rotation, { y: 0.9 }, -17.45)
			.to(clown.current.rotation, { y: 0.8 }, -17.4)
			.to(clown.current.rotation, { y: 0.7 }, -17.35)
			.to(clown.current.rotation, { y: 0.6 }, -17.27)
			.to(clown.current.rotation, { y: 0.5 }, -17.25)
			.to(clown.current.rotation, { y: 0 }, -17)
			.to(clown.current.position, { x: 0 }, -17)
			.to(environmentLight.current, { duration: 0.1, intensity: 0 }, -15)

			.to(clown.current.position, { y: 10 }, -15)
			.to(clown.current.rotation, { y: 2, x: 2 }, -15)
			.to(clown.current.position, { x: 20 }, -14)

			.to(clown.current.rotation, { y: 0, x: 0 }, -13)
			.to(clown.current.position, { y: -2 }, -12)
			.to(clown.current.position, { x: 0 }, -12)
			.to(environmentLight.current, { duration: 0.1, intensity: 0.5 }, -13)
			.to(environmentLight.current, { duration: 0.1, intensity: 0 }, -10)
			.to(environmentLight.current, { duration: 0.1, intensity: 1 }, -9.8)
			.to(environmentLight.current, { duration: 0.1, intensity: 0 }, -9.6)
			.to(environmentLight.current, { duration: 0.1, intensity: 1 }, -9.4)
			.to(environmentLight.current, { duration: 0.1, intensity: 0 }, -9.2)
			.to(environmentLight.current, { duration: 0.1, intensity: 1 }, -9)

			.to(clown.current.rotation, { y: -2, x: 0 }, -8.5)
			.to(clown.current.position, { x: -10 }, -8.3)
			.to(clown.current.position, { y: -10 }, -7)
			.to(clown.current.rotation, { y: 0 }, -7)

			.to(clown.current.position, { x: 0 }, -6.2)
			.to(clown.current.position, { y: -2 }, -5.5)

			.to(environmentLight.current, { duration: 0.1, intensity: 1 }, -5)
			.to(environmentLight.current, { duration: 0.1, intensity: 0 }, -4.8)
			.to(environmentLight.current, { duration: 0.1, intensity: 1 }, -4.6)
			.to(environmentLight.current, { duration: 0.1, intensity: 0 }, -4.4)
			.to(environmentLight.current, { duration: 0.1, intensity: 1 }, -4.2)
			.to(environmentLight.current, { duration: 0.1, intensity: 0 }, -4)

			.to(environmentLight.current, { duration: 0.1, intensity: 1 }, -3)
			.to(environmentLight.current, { duration: 0.1, intensity: 0 }, -2.8)
			.to(environmentLight.current, { duration: 0.1, intensity: 1 }, -2.6)
			.to(environmentLight.current, { duration: 0.1, intensity: 0 }, -2.4)
			.to(environmentLight.current, { duration: 0.1, intensity: 1 }, -2.2)
			.to(environmentLight.current, { duration: 0.1, intensity: 0 }, -2)

			.to(environmentLight.current, { duration: 0.1, intensity: 1 }, -1)
			.to(environmentLight.current, { duration: 0.1, intensity: 0 }, -0.8)
			.to(environmentLight.current, { duration: 0.1, intensity: 1 }, -0.6)
			.to(environmentLight.current, { duration: 0.1, intensity: 0 }, -0.4)
			.to(environmentLight.current, { duration: 0.1, intensity: 1 }, -0.2)
			.to(environmentLight.current, { duration: 0.1, intensity: 0 }, 0)

			.to(environmentLight.current, { duration: 0.1, intensity: 0.8 }, 1);
	}, []);

	return (
		<group {...props} dispose={null} ref={clown}>
			<ambientLight ref={environmentLight} intensity={0} />
			<mesh
				geometry={nodes.Cube_M2_Bloody_0.geometry}
				material={materials.M2_Bloody}
				position={[0, 1.377, 0.112]}
				rotation={[-Math.PI / 2, 0, 0]}
			/>
			<mesh geometry={nodes.glove_retopo_M1_Bloody_0.geometry} material={materials.M1_Bloody} rotation={[-Math.PI / 2, 0, 0]} />
			<mesh
				geometry={nodes.Cornea_Cornea_0.geometry}
				material={materials.Cornea}
				position={[0, 1.643, 0.315]}
				rotation={[0.225, 0.655, 0.139]}
			/>
			<mesh
				geometry={nodes.knife_knife_0.geometry}
				material={materials.knife}
				position={[-0.189, 1.223, 0.406]}
				rotation={[-2.457, 0.052, -0.339]}
			/>
		</group>
	);
}

useGLTF.preload('model/model-transformed.glb');
