import React from "react";
import { View, Text, StyleSheet } from "react-native";
import useRandomArrayGenerator from "../../hooks/useRandomArrayGenerator";

interface VocabularyScrambleProps {
    question: string;
    answer: string;
}

const VocabularyScramble = ({ question, answer }: VocabularyScrambleProps) => {
    let ANSWER_ARRAY = answer.split('');
    ANSWER_ARRAY = useRandomArrayGenerator(ANSWER_ARRAY);

    return (
        <>
            <View>
                <Text>{ question }</Text>

                <View>
                    { ANSWER_ARRAY.map((letter, index) =>
                        <View key={`answer-${index}`}>
                            { letter }
                        </View>
                    )}
                </View>
            </View>
        </>
    )
};

const styles = StyleSheet.create({

});

export default VocabularyScramble;