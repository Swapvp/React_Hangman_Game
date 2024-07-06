

import React from 'react';

const HangmanCanvas = ({ mistakes }) => {
	const parts = [
		'head',
		'body',
		'left-arm',
		'right-arm',
		'left-leg',
		'right-leg',
	];

	return (
		<div className="hangman-canvas">
			{parts.slice(0, mistakes).map((part, index) => (
				<div key={index} className={part} />
			))}
		</div>
	);
};

export default HangmanCanvas;
