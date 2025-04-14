import React from "react";
import Conjugations from "../../types/Conjugations";
import SlideBrickSet from "../ui/SlideBrickSet";

interface VerbSliderProps {
    conjugations: Conjugations;
    pronounBricksColor?: string;
    conjugationsBricksColor?: string;
}

const VerbSlider = ({ 
    conjugations, 
    pronounBricksColor = "#defaultColor",  // Default green for pronouns
    conjugationsBricksColor = "#defaultColor"  // Default blue for conjugations
}: VerbSliderProps) => {
    const PRONOUNS: string[] = ['yo', 'tú', 'él', 'nosotros', 'vosotros', 'ellos'];
    const CONJUGATIONS: string[] = [conjugations.getYo(), conjugations.getEl(), conjugations.getEl(), conjugations.getNosotros(), conjugations.getVosotros(), conjugations.getEllos()]

    return (
        <div className="verb-slider-container">
            {/* Pronouns Row */}
            <div className="pronouns-row">
                <SlideBrickSet 
                    brickSetColor={pronounBricksColor} 
                    brickSetText={PRONOUNS} 
                />
            </div>

            {/* Conjugations Row */}
            <div className="conjugations-row">
                <SlideBrickSet 
                    brickSetColor={conjugationsBricksColor} 
                    brickSetText={CONJUGATIONS} 
                />
            </div>
        </div>
    );
};

export default VerbSlider;