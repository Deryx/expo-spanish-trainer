import React, { useEffect } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

interface WordCompleteProps {
    question: string;
    answer: string;
}

const VocabularyComplete = ({ question, answer }: WordCompleteProps) => {
    let ANSWER_ARRAY = answer.split('');

    useEffect(() => {
        const arrayLength = ANSWER_ARRAY.length;
        const randomBlanks = () => Math.floor(( Math.random() * arrayLength - 1 ));

        let numberOfBlanks = randomBlanks();
        while( numberOfBlanks === 0 || numberOfBlanks === 1 || numberOfBlanks === arrayLength - 1 ) {
            numberOfBlanks = randomBlanks();
        }

        const setRandomArray = () => {
            let randomIndices: number[] = [];
            let index = 0;

            while( index <= numberOfBlanks ) {
                let newNumber = Math.floor(( Math.random() * arrayLength - 1 ));

                if( !randomIndices.includes( newNumber ) ) {
                    randomIndices = [...randomIndices, newNumber];
                    index++;
                } else {
                    continue;
                }
            }

            return randomIndices;
        }

        const setRandomBlanks = () => {
            let randomIndices = setRandomArray();
            for( const index in randomIndices ) {
                ANSWER_ARRAY[index] = '';
            }
        }

        setRandomBlanks();
    }, []);

    return (
        <>
            <View>
                <Text>{ question }</Text>
            </View>

            <View>
                { ANSWER_ARRAY.map((letter) => 
                    <TextInput value={letter} />
                )}
            </View>
        </>
    )
};

const styles = StyleSheet.create({

});

export default VocabularyComplete;