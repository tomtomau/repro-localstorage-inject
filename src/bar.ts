export class Bar {
    constructor(private readonly storage: Storage) {
    }

    public someMethod() {
        this.storage.clear();
    }
}
