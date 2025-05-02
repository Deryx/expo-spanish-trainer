import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AppButton from '../components/ui/AppButton';

const HomeScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text>

                </Text>
            </View>

            <View style={styles.content}>
                <View style={styles.navigationContainer}>
                    <Text>Verbs</Text>
                    <AppButton 
                        title='Flashcard'
                        onPress={() => navigation.navigate('VerbFlashcard')}
                        backgroundColor='#000000'
                        color='#FFFFFF'
                        width={200}
                        fontSize={12}
                        fontWeight='normal'
                    />
                    <AppButton 
                        title='Conjugator'
                        onPress={() => navigation.navigate('VerbConjugator')}
                        backgroundColor='#000000'
                        color='#FFFFFF'
                        width={200}
                        fontSize={12}
                        fontWeight='normal'
                    />
                    <AppButton 
                        title='Slider'
                        onPress={() => navigation.navigate('VerbSlider')}
                        backgroundColor='#000000'
                        color='#FFFFFF'
                        width={200}
                        fontSize={12}
                        fontWeight='normal'
                    />

                    <Text>Vocabulary</Text>
                    <AppButton 
                        title='Flashcard'
                        onPress={() => navigation.navigate('VocabularyFlashcard')}
                        backgroundColor='#000000'
                        color='#FFFFFF'
                        width={200}
                        fontSize={12}
                        fontWeight='normal'
                    />
                    <AppButton 
                        title='Completion'
                        onPress={() => navigation.navigate('VocabularyComplete')}
                        backgroundColor='#000000'
                        color='#FFFFFF'
                        width={200}
                        fontSize={12}
                        fontWeight='normal'
                    />
                    <AppButton 
                        title='Fill In'
                        onPress={() => navigation.navigate('VocabularyFillin')}
                        backgroundColor='#000000'
                        color='#FFFFFF'
                        width={200}
                        fontSize={12}
                        fontWeight='normal'
                    />
                    <AppButton 
                        title='Quiz'
                        onPress={() => navigation.navigate('VocabularyQuiz')}
                        backgroundColor='#000000'
                        color='#FFFFFF'
                        width={200}
                        fontSize={12}
                        fontWeight='normal'
                    />
                    <AppButton 
                        title='Scramble'
                        onPress={() => navigation.navigate('VocabularyScramble')}
                        backgroundColor='#000000'
                        color='#FFFFFF'
                        width={200}
                        fontSize={12}
                        fontWeight='normal'
                    />
                    <AppButton 
                        title='Slider'
                        onPress={() => navigation.navigate('VocabularySlider')}
                        backgroundColor='#000000'
                        color='#FFFFFF'
                        width={200}
                        fontSize={12}
                        fontWeight='normal'
                    />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
   container: {
    flexDirection: 'column',
    height: '100%'
   },
   header: {
    backgroundColor: '#C60A1E',
    height: '10%'
   },
   content: {
    backgroundColor: '#FFC400',
    height: '90%',
    justifyContent: 'center',
    alignItems: 'center'
   },
   navigationContainer: {
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: '#FFFFFF',
    width: '70%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
   }
});

export default HomeScreen;