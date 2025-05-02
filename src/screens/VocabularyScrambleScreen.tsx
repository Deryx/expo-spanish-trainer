import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Vocabulary from '../types/Vocabulary';
import VocabularyScramble from '../components/games/VocabularyScramble';

const WordScrambleScreen = () => {
    const navigation = useNavigation();

    return (
        <View>
            <View>
                <Text>Vocabulary Scramble</Text>
            </View>

            <View>

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    
});

export default WordScrambleScreen;