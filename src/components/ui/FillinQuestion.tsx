import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

interface WordFillInProps {
    question: string
} 

const FillinQuestion = ({ question }: WordFillInProps) => {
    return (
        <>
            <View>
                <Text>{ question }</Text>
            </View>

            <View>
                <TextInput key={ question } />
            </View>
        </>
    )
};

const styles = StyleSheet.create({

});

export default FillinQuestion;