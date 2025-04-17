import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Vocabulary from "../../types/Vocabulary";
import SlideBrickSet from "../ui/SlideBrickSet";

interface WordSliderProps {
    words: Vocabulary[];
    brickWordsColor: string;  // Optional props for colors
    brickTranslationsColor: string;
}

const WordSlider = ({ 
    words, 
    brickWordsColor = "#defaultColor1", 
    brickTranslationsColor = "#defaultColor2" 
}: WordSliderProps) => {
    const WORDS: string[] = [];
    const TRANSLATIONS: string[] = [];

    words.forEach((word) => {
        WORDS.push(word.getWord());
        TRANSLATIONS.push(word.getTranslation());
    });

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

export default WordSlider;