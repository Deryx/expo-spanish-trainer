import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Verb from '../types/Verb';
import VerbSlider from '../components/games/VerbSlider';
import Conjugations from '../types/Conjugations';

const VerbSliderScreen = () => {
    const navigation = useNavigation();

    return (
        <View>
            <View>
                <Text>Verb Slider</Text>
            </View>
        </View>
    )
}

export default VerbSliderScreen;