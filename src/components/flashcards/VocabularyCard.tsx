import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Vocabulary from '../../types/Vocabulary';

interface VocabularyCardProps {
    vocabulary?: Vocabulary;
}

const VocabularyCard = ({ vocabulary }: VocabularyCardProps) => {
    return (
        <>
            <View>
                <Text>{ vocabulary && vocabulary.getWord() }</Text>

                <View>
                    <Text>
                        { vocabulary && vocabulary.getPronunciation() }
                    </Text>     
                </View>
            </View>

            <View>
                <Text>{ vocabulary && vocabulary.getTranslation() }</Text>
                {
                    vocabulary && vocabulary.image && 
                        <View>
                            { vocabulary.getImage() }
                        </View>
                }
            </View>
        </>
    )
}

export default VocabularyCard;