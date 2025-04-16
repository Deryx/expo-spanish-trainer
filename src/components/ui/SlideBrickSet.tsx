import React from 'react';
import SlideBrick from './SlideBrick';

interface SlideBrickSetProps {
    brickSetText: string[];
    brickSetColor: string;
}

const SlideBrickSet = ({ brickSetText, brickSetColor }: SlideBrickSetProps) => (
    <>
        {brickSetText.map((brickText) => (
            <SlideBrick key={brickText} text={brickText} brickColor={brickSetColor} />
        ))}
    </>
);

export default SlideBrickSet;