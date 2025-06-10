import React, { useState } from 'react';
import { Text, View, StyleSheet, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CategorySelector from '../components/ui/CategorySelector'
import VocabularyService from '../services/VocabularyService';
import { useFetch } from '../hooks/useFetch';
import { useFonts } from 'expo-font';
import { Outfit_500Medium } from '@expo-google-fonts/outfit';
import VocabularyCard from '../components/flashcards/VocabularyCard';

const VocabularyFlashcardScreen = () => {
    const [selectedCategory, setSelectedCategory] = useState<number>(0);
    const [currentWordIndex, setCurrentWordIndex] = useState<number>(0);

    const { data: vocabulary, loading, error } = useFetch(() => VocabularyService.getCategoryWords(selectedCategory));
    
    const [fontsLoaded] = useFonts({
        Outfit_500Medium
    });

    const navigation = useNavigation(); 

    const handleCategoryChange = (categoryId: number) => {
        setSelectedCategory(categoryId);
    };

    const handleBackClick = () => {
        setCurrentWordIndex(currentWordIndex - 1);
    }

    const handleNextClick = () => {
        setCurrentWordIndex(currentWordIndex + 1);
    }

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
                <Text style={styles.heading}>Vocabulary Flashcard</Text>

                <View style={styles.content}>
                    <CategorySelector onCategoryChange={ handleCategoryChange } />

                    vocabulary?[currentWordIndex] && <VocabularyCard vocabulary={ vocabulary ? vocabulary[currentWordIndex] : undefined } />
                    
                    <View style={styles.buttonContainer}>
                        <button onClick={ handleBackClick }>Back</button>
                        <button onClick={ handleNextClick }>Next</button>
                    </View>
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
    },
    buttonContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});

export  default VocabularyFlashcardScreen;