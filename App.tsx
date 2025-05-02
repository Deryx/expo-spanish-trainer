import 'react-native-gesture-handler';
import React from 'react';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import VerbFlashcardScreen from './src/screens/VerbFlashcardScreen';
import VerbConjugationScreen from './src/screens/VerbConjugatorScreen';
import VerbSliderScreen from './src/screens/VerbSliderScreen';
import VocabularyFlashcardScreen from './src/screens/VocabularyFlashcardScreen';
import VocabularyCompleteScreen from './src/screens/VocabularyCompleteScreen';
import VocabularyComplete from './src/components/games/VocabularyComplete';
import VocabularyFillinScreen from './src/screens/VocabularyFillinScreen';
import VocabularyQuizScreen from './src/screens/VocabularyQuizScreen';
import VocabularyScrambleScreen from './src/screens/VocabularyScrambleScreen';
import VocabularySliderScreen from './src/screens/VocabularySliderScreen';

const RootStack = createNativeStackNavigator({
  screens: {
    Home: HomeScreen,
    VerbFlashcard: VerbFlashcardScreen,
    VerbConjugator: VerbConjugationScreen,
    VerbSlider: VerbSliderScreen,
    VocabularyFlashcard: VocabularyFlashcardScreen,
    VocabularyComplete: VocabularyCompleteScreen,
    VocabularyFillin: VocabularyFillinScreen,
    VocabularyQuiz: VocabularyQuizScreen,
    VocabularyScramble: VocabularyScrambleScreen,
    VocabularySlider: VocabularySliderScreen
  },
  screenOptions: {
    headerShown: false
  }
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return <Navigation />;
}