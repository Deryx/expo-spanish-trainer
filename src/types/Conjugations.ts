class Conjugations {
    verb: string;
    tense: string;
    yo: string;
    tu: string;
    el: string;
    nosotros: string;
    vosotros: string;
    ellos: string;

    constructor( verb: string, tense: string, yo: string, tu: string, el: string, nosotros: string, vosotros: string, ellos: string) {
        this.verb = verb;
        this.tense = tense;
        this.yo = yo;
        this.tu = tu;
        this.el = el;
        this.nosotros = nosotros;
        this.vosotros = vosotros;
        this.ellos = ellos;
    }

    getVerb() {
        return this.verb;
    }

    getTense() {
        return this.tense;
    }

    getYo() {
        return this.yo;
    }

    getTu() {
        return this.tu;
    }

    getEl() {
        return this.el;
    }

    getNosotros() {
        return this.nosotros;
    }

    getVosotros() {
        return this.vosotros;
    }

    getEllos() {
        return this.ellos;
    }
}

export default Conjugations;