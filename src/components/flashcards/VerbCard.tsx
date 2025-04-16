import React from 'react';
import { View, Text } from 'react-native';
import Verb from '../../types/Verb';
import Conjugation from '../ui/Conjugation';
import Conjugations from '../../types/Conjugations';

interface IVerbCardProps {
    verb: Verb;
    conjugations: Conjugations;
}

const VerbCard = ({ verb, conjugations }: IVerbCardProps) => { 
    return (
        <>
            <View>
                <Text>{ verb.infinitive }</Text>
                <Text>{ verb.translation }</Text>
                <Text>{ verb.pronunciation }</Text>
            </View>
            <View>
                <Text>{ conjugations.tense } tense</Text>

                <View>
                    <View><Conjugation pronoun='Yo' conjugation={conjugations.getYo()} /></View>
                    <View><Conjugation pronoun='Tu' conjugation={conjugations.getTu()} /></View>
                    <View><Conjugation pronoun='El' conjugation={conjugations.getEl()} /></View>
                    <View><Conjugation pronoun='Nosotros' conjugation={conjugations.getNosotros()} /></View>
                    <View><Conjugation pronoun='Vosotros' conjugation={conjugations.getVosotros()} /></View>
                    <View><Conjugation pronoun='Ellos' conjugation={conjugations.getEllos()} /></View>
                </View>
            </View>
        </>
    )
}

export default VerbCard;