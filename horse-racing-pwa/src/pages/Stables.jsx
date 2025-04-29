import React from 'react';
import { useGameStore } from '../store/useGameStore';

const Stables = () => {
	const user = useGameStore((state) => state.user);
	const horses = useGameStore((state) => state.horses);

  	// On filtre les chevaux appartenant à l'utilisateur connecté
	const ownedHorses = horses.filter((horse) => user.ownedHorses.includes(horse.id));

	return (
		<div style={{ padding: '20px' }}>
		<h1>🏇 Your Stables</h1>

		{ownedHorses.length === 0 ? (
			<p>You don't own any horses yet. Go buy one!</p>
		) : (
			<div style={{ display: 'grid', gap: '20px', marginTop: '20px' }}>
			{ownedHorses.map((horse) => (
				<div
				key={horse.id}
				style={{
					border: '1px solid #ccc',
					padding: '15px',
					borderRadius: '10px',
				}}
				>
				<h2>{horse.name}</h2>
				<p>Breed: {horse.breed}</p>
				<p>Age: {horse.age} years</p>
				<p>Speed: {horse.speed}</p>
				<p>Stamina: {horse.stamina}</p>
				</div>
			))}
			</div>
		)}
		</div>
	);
};

export default Stables;
