import React from "react";
import { View, Text } from "react-native";

interface IConjugationProps {
    pronoun: string;
    conjugation: string;
}

const Conjugation = ({ pronoun, conjugation }: IConjugationProps) => {
    return (
        <View>
            <View>
                <Text>{ pronoun }</Text>
            </View>
            <View>
                <Text>{ conjugation }</Text>
            </View>
        </View>
    )
}       

export default Conjugation;