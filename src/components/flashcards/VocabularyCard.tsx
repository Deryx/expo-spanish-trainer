import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Vocabulary from '../../types/Vocabulary';

interface VocabularyCardProps {
    vocabulary: Vocabulary;
}

const VocabularyCard = ({ vocabulary }: VocabularyCardProps) => {
    return (
        <>
            <View>
                <Text>{ vocabulary.getWord() }</Text>

                <View>
                    <Text>
                        { vocabulary.getPronunciation() }
                    </Text>     
                </View>
            </View>

            <View>
                <Text>{ vocabulary.getTranslation() }</Text>
                {
                    vocabulary.image && 
                        <View>
                            { vocabulary.getImage() }
                        </View>
                }
            </View>
        </>
    )
}

export default VocabularyCard;