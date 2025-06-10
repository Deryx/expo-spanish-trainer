class Category {
    id: number;
    category: string;

    constructor( id: number, category: string ) {
        this.id = id;
        this.category = category;
    }

    getId() {
        return this.id;
    }

    getCategory() {
        return this.category;
    }
}

export default Category;