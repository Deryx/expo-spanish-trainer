import React from 'react';
import Vocabulary from '../../types/Vocabulary';

interface VocabularyCardProps {
    vocabulary: Vocabulary;
}

const VocabularyCard = ({ vocabulary }: VocabularyCardProps) => {
    return (
        <>
            <section>
                <h3>{ vocabulary.getWord() }</h3>
                <div>{ vocabulary.getPronunciation() }</div>
            </section>
            <section>
                <h2>{ vocabulary.getTranslation() }</h2>
                vocabulary.image && <div>{ vocabulary.getImage() }</div>
            </section>
        </>
    )
}

export default VocabularyCard;