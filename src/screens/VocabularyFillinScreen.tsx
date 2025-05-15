import React from 'react';
import { Text, View, StyleSheet, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Outfit_500Medium } from '@expo-google-fonts/outfit';
import Vocabulary from '../types/Vocabulary';
import VocabularyFillIn from '../components/games/VocabularyFillIn';

const WordFillinScreen = () => {
    const [fontsLoaded] = useFonts({
        Outfit_500Medium
    });
    const navigation = useNavigation(); 

    if (!fontsLoaded) {
        return (
          <View style={styles.container}>
            <ActivityIndicator size="large" color="#0000ff" />
            <Text>Loading fonts...</Text>
          </View>
        );
      }
      
      return (
        <View style={styles.container}>
            <View style={styles.header}>

            </View>

            <View style={styles.contentContainer}>
                <Text style={styles.heading}>Vocabulary Fill-in</Text>

                <View style={styles.content}>
                </View>
            </View>
        </View>
    );        
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFC400',
        flexDirection: 'column',
        height: '100%'
    },
    header: {
        height: '15%'
    },
    contentContainer: {
        height: '90%',
        alignItems: 'center'
    },
    content: {
        marginTop: 20,
        width: '100%',
        height: '100%',
        backgroundColor: '#FFFFFF'
    },
    heading: {
        fontSize: 25,
        fontFamily: 'Outfit_500Medium',
        textAlign: 'center'
    }
});

export default WordFillinScreen;