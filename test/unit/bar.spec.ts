import {App} from '../../src/app';
import {Foo} from "../../src/foo";
import {Bar} from "../../src/bar";

describe('the bar component', () => {
    it('will not error when not using @inject', () => {
        const fakeStorage = { clear: jest.fn() } as unknown as Storage;
        const bar = new Bar(fakeStorage);
        bar.someMethod();
        expect(fakeStorage.clear).toHaveBeenCalled();
    });
});

