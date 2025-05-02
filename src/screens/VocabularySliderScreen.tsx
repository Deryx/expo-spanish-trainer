import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';

const VocabularySliderScreen = () => {
    const navigation = useNavigation();
    
    return (
        <View>
            <View>
                <Text>Vocabulary Slider</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({

});

export default VocabularySliderScreen;