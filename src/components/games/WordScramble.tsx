import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface WordScrambleProps {
    question: string;
    answer: string;
}

const WordScramble = ({ question, answer }: WordScrambleProps) => {
    const ANSWER_ARRAY = answer.split('');

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