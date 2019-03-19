import { inject } from 'aurelia-framework';

@inject(window.localStorage)
export class Foo {
    constructor(private readonly storage: Storage) {
    }
}
