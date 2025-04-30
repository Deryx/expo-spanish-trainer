import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import VerbFlashcardScreen from './src/screens/VerbFlashcardScreen';
import VerbSliderScreen from './src/screens/VerbSliderScreen';
import VocabularyFlashcardScreen from './src/screens/VocabularyFlashcardScreen';
import VocabularySliderScreen from './src/screens/VocabularySliderScreen';
import WordCompleteScreen from './src/screens/VocabularyCompleteScreen';
import WordFillinScreen from './src/screens/VocabularyFillinScreen';
import WordScrambleScreen from './src/screens/VocabularyScrambleScreen';
import WordQuizScreen from './src/screens/VocabularyQuizScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>        
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="VerbFlashcard" 
          component={VerbFlashcardScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="VerbSlider" 
          component={VerbSliderScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="VocabularyFlashcard" 
          component={VocabularyFlashcardScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen name="VocabularySlider" 
          component={VocabularySliderScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="VocabularyComplete" 
          component={WordCompleteScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="VocabularyFillin" 
          component={WordFillinScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="VocabularyScramble" 
          component={WordScrambleScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="WordQuiz" 
          component={WordQuizScreen} 
          options={{ headerShown: false }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}