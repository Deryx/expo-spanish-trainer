import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Conjugations from "../../types/Conjugations";
import SlideBrickSet from "../ui/SlideBrickSet";
import useRandomArrayGenerator from "../../hooks/useRandomArrayGenerator";

interface VerbSliderProps {
    conjugations: Conjugations;
    pronounBricksColor?: string;
    conjugationsBricksColor?: string;
}

const VerbSlider = ({ 
    conjugations, 
    pronounBricksColor = "#defaultColor",
    conjugationsBricksColor = "#defaultColor"
}: VerbSliderProps) => {
    const PRONOUNS: string[] = ['yo', 'tú', 'él', 'nosotros', 'vosotros', 'ellos'];
    let CONJUGATIONS: string[] = [conjugations.getYo(), conjugations.getEl(), conjugations.getEl(), conjugations.getNosotros(), conjugations.getVosotros(), conjugations.getEllos()];
    CONJUGATIONS = useRandomArrayGenerator(CONJUGATIONS);

    return (
        <View>
            {/* Pronouns Row */}
            <View>
                <SlideBrickSet 
                    brickSetColor={pronounBricksColor} 
                    brickSetText={PRONOUNS} 
                />
            </View>

            {/* Conjugations Row */}
            <View>
                <SlideBrickSet 
                    brickSetColor={conjugationsBricksColor} 
                    brickSetText={CONJUGATIONS} 
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({

});

export default VerbSlider;