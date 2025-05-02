import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Vocabulary from '../types/Vocabulary';
import VocabularyFillIn from '../components/games/VocabularyFillIn';

const WordFillinScreen = () => {
    const navigation = useNavigation();

    return (
        <View>
            <View>
                <Text>Vocabulary Fill In</Text>
            </View>

            <View>
                
            </View>            
        </View>
    );
};      

export default WordFillinScreen;