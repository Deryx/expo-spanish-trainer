import React from 'react';
import SlideBrick from './SlideBrick';

interface SlideBrickSetProps {
    brickSetText: string[];
    brickSetColor: string;
}

const SlideBrickSet = ({ brickSetText, brickSetColor }: SlideBrickSetProps) => {
    return (
        brickSetText.map((text, index) => <SlideBrick key={`${text}-${index}`} brickColor={brickSetColor} text={text} />)
    )
}

export default SlideBrickSet;