import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Vocabulary from '../types/Vocabulary';
import VocabularyCard from '../components/flashcards/VocabularyCard';

const VocabularyFlashcardScreen = () => {
    const navigation = useNavigation();

    return (
        <View>
            <View>
                <Text>Vocabulary Flashcard</Text>
            </View>

            <View>
                
            </View>
        </View>
    );
};  

const styles = StyleSheet.create({

});

export  default VocabularyFlashcardScreen;