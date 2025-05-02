import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const VerbConjugationScreen = () => {
    const navigation = useNavigation();

    return (
        <View>
            <View>
                <Text>Verb Conjugator</Text>
            </View>

            <View>

            </View>
        </View>
    );
}

export default VerbConjugationScreen;