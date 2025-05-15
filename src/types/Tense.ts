class Tense {
    id: number;
    tense: string;
    
    constructor( id: number, tense: string ) {
        this.id = id;
        this.tense = tense;
    }

    getId() {
        return this.id;
    }

    getTense() {
        return this.tense;
    }
}