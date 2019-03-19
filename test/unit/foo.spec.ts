import {Foo} from "../../src/foo";

describe('the foo component', () => {
    it('will error when using @inject', () => {
        const fakeStorage = {} as Storage;
        new Foo(fakeStorage);
    });
});

