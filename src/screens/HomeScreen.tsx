import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Outfit_500Medium } from '@expo-google-fonts/outfit';
import FontAwesome from '@react-native-vector-icons/fontawesome';
import AppButton from '../components/ui/AppButton';

const HomeScreen = () => {
    const [fontsLoaded] = useFonts({
        Outfit_500Medium
    });
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text>

                </Text>
            </View>

            <View style={styles.content}>
                <View style={styles.navigationContainer}>
                    <View style={styles.verbContainer}>
                        <Text style={styles.navigationHeading}>Verbs</Text>

                        <View style={styles.row}>
                            <View style={styles.tile}>                     
                                <AppButton 
                                    backgroundColor='#FFC400'
                                    title='Flashcard' 
                                    onPress={() => navigation.navigate('VerbFlashcard')} 
                                />
                            </View>
                            <View style={styles.tile}>
                                <AppButton 
                                    backgroundColor='#FFC400'
                                    title='Conjugator' 
                                    onPress={() => navigation.navigate('VerbConjugator')} 
                                />
                            </View>
                        </View>
                        <View style={styles.row}>
                            <View style={styles.tile}>
                                <AppButton 
                                    backgroundColor='#FFC400'
                                    title='Slider' 
                                    onPress={() => navigation.navigate('VerbSlider')} 
                                />
                            </View>
                        </View>
                    </View>

                    <View style={styles.vocabularyContainer}>
                        <Text style={styles.navigationHeading}>Vocabulary</Text>

                        <View style={styles.row}>
                            <View style={styles.tile}>
                                <AppButton 
                                    backgroundColor='#FFC400'
                                    title='Flashcard' 
                                    onPress={() => navigation.navigate('VocabularyFlashcard')} 
                                />
                            </View>
                            <View style={styles.tile}>
                                <AppButton 
                                    backgroundColor='#FFC400'
                                    title='Complete' 
                                    onPress={() => navigation.navigate('VocabularyComplete')} 
                                />
                            </View>
                        </View>

                        <View style={styles.row}>
                            <View style={styles.tile}>
                                <AppButton 
                                    backgroundColor='#FFC400'
                                    title='Fill in' 
                                    onPress={() => navigation.navigate('VocabularyFillin')} 
                                />
                            </View>
                            <View style={styles.tile}>
                                <AppButton 
                                    backgroundColor='#FFC400'
                                    title='Quiz' 
                                    onPress={() => navigation.navigate('VocabularyQuiz')} 
                                />
                            </View>
                        </View>

                        <View style={styles.row}>
                            <View style={styles.tile}>
                                <AppButton 
                                    backgroundColor='#FFC400'
                                    title='Scramble' 
                                    onPress={() => navigation.navigate('VocabularyScramble')} 
                                />
                            </View>
                            <View style={styles.tile}>
                                <AppButton 
                                    backgroundColor='#FFC400'
                                    title='Slider' 
                                    onPress={() => navigation.navigate('VocabularySlider')} 
                                />     
                            </View>
                        </View>
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
   content: {
    width: '100%',
    height: '90%',
    justifyContent: 'center',
   },
   navigationContainer: {
    borderRadius: 10,
    flexDirection: 'column'
   },
   verbContainer: {
    flexDirection: 'column',
   },
   vocabularyContainer: {
    flexDirection: 'column'
   },
   navigationHeading: {
    marginBottom: 20,
    fontSize: 18,
    fontFamily: 'Outfit_500Medium',
    fontWeight: 'bold',
    textAlign: 'center'
   },
   row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly'
   },
   tile: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#FFF',
    width: 125,
    height: 125,
    margin: 10
   }
});

export default HomeScreen;