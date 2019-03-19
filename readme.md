# @inject LocalStorage issue

This is a reproduction of an issue I'm having specifically with:
 * jest testing of typescript components
 * `@inject` on the units
 * trying to inject something from lib.dom.d.ts

Refer to the components `foo.ts` and `bar.ts` as well as the corresponding jest tests.

Running `yarn jest` will run the tests and demonstrate:

* `foo.spec.ts` will fail as Storage is not known
* `bar.spec.ts` will be operate properly, including executing a call onto the fake Storage that was created

The only difference here is that `foo` has `@inject`.

Note that in `tsconfig.json`, `dom` is set in the `lib` entry - ergo the DOM library is being included. For some reason,
with Jest + @inject, this has an issue.

I have _no idea_ what's going on here, thus casting out my net to see if anyone else can help explain/fix it.
