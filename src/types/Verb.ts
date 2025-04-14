class Verb {
    infinitive: string;
    translation: string;
    pronunciation: string;
    
    constructor( infinitive: string, translation: string, pronunciation: string ) {
        this.infinitive = infinitive;
        this.translation = translation;
        this.pronunciation = pronunciation;
    }

    getInfinitive() {
        return this.infinitive;
    }

    getTranslation() {
        return this.translation;
    }

    getPronunciation() {
        return this.pronunciation;
    }
}

export default Verb;