import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Verb from '../types/Verb';
import Conjugations from '../types/Conjugations';
import VerbCard from '../components/flashcards/VerbCard';

const VerbFlashcardScreen = () => {
    const navigation = useNavigation();

    return (
        <View>
            <View>
                <Text>Verb Flashcard</Text>
            </View>

            <View>

            </View>
        </View>
    );
};  

const styles = StyleSheet.create({

});

export  default VerbFlashcardScreen;