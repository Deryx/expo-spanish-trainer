class Vocabulary {
    word: string;
    translation: string;
    pronunciation: string;
    category: string;
    gender: string;
    image: string;

    constructor( word: string, translation: string, pronunciation: string, category: string, gender: string, image: string) {
        this.word = word;
        this.translation = translation;
        this.pronunciation = pronunciation;
        this.category = category;
        this.gender = gender;
        this.image = image;
    }

    getWord() {
        return this.word;
    }

    getTranslation() {
        return this.translation;
    }

    getPronunciation() {
        return this.pronunciation;
    }

    getCategory() {
        return this.category;
    }

    getGender() {
        return this.gender;
    }

    getImage() {
        return this.image;
    }
}

export default Vocabulary;