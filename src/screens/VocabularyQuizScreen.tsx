import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Vocabulary from '../types/Vocabulary';
import VocabularyQuiz from '../components/games/VocabularyQuiz';

const WordQuizScreen = () => {
    const navigation = useNavigation(); 

    return (
        <View>
            <View>
                <Text>Vocabulary Quiz</Text>
            </View>

            <View>
                
            </View>
        </View>
    );        
};

const styles = StyleSheet.create({
    
});

export default WordQuizScreen;