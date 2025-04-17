import React, { useEffect } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

interface WordCompleteProps {
    question: string;
    answer: string;
}

const WordComplete = ({ question, answer }: WordCompleteProps) => {
    let ANSWER_ARRAY = answer.split('');

    useEffect(() => {
        const arrayLength = ANSWER_ARRAY.length;
        const randomBlanks = Math.floor(( Math.random() * arrayLength - 3 ));
        const generateRandomArray = () => {
            let randomIndices: number[] = [];
            let index = 0;

            while( index <= randomBlanks ) {
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

        const generateRandomBlanks = () => {
            let randomIndices = generateRandomArray();
            for( const index in randomIndices ) {
                ANSWER_ARRAY[index] = '';
            }
        }

        generateRandomBlanks();
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

export default WordComplete;