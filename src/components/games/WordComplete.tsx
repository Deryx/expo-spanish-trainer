import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

interface WordCompleteProps {
    question: string;
    answer: string;
}

const WordComplete = ({ question, answer }: WordCompleteProps) => {
    const ANSWER_ARRAY = answer.split('');

    return (
        <>
            <View>
                <Text>{ question }</Text>
            </View>

            <View>
                { ANSWER_ARRAY.map((letter, index) => 
                    <TextInput value={letter} />
                )}
            </View>
        </>
    )
};

const styles = StyleSheet.create({
    
});

export default WordComplete;