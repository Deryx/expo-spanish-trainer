import React from "react";

interface SlideBrickProps {
    text: string;
    brickColor: string;
}

const SlideBrick = ({ text, brickColor } : SlideBrickProps) => {
    return (
        <div style={{ backgroundColor: brickColor }}>
            {text}
        </div>
    )
}   

export default SlideBrick;