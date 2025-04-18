import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Vocabulary from "../../types/Vocabulary";
import SlideBrickSet from "../ui/SlideBrickSet";
import useRandomArrayGenerator from "../../hooks/useRandomArrayGenerator";

interface WordSliderProps {
    words: Vocabulary[];
    brickWordsColor: string;  // Optional props for colors
    brickTranslationsColor: string;
}

const VocabularySlider = ({ 
    words, 
    brickWordsColor = "#defaultColor1", 
    brickTranslationsColor = "#defaultColor2" 
}: WordSliderProps) => {
    const WORDS: string[] = [];
    let TRANSLATIONS: string[] = [];

    words.forEach((word) => {
        WORDS.push(word.getWord());
        TRANSLATIONS.push(word.getTranslation());
    });

    TRANSLATIONS = useRandomArrayGenerator(TRANSLATIONS);

    return (
        <View>
            <View>
                <SlideBrickSet 
                    brickSetColor={brickWordsColor} 
                    brickSetText={WORDS} 
                />
            </View>
            <View>
                <SlideBrickSet 
                    brickSetColor={brickTranslationsColor} 
                    brickSetText={TRANSLATIONS}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({

});

export default VocabularySlider;