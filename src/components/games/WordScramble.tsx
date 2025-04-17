import React from "react";
import { View, Text, StyleSheet } from "react-native";
import useRandomArrayGenerator from "../../hooks/useRandomArrayGenerator";

interface WordScrambleProps {
    question: string;
    answer: string;
}

const WordScramble = ({ question, answer }: WordScrambleProps) => {
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

export default WordScramble;