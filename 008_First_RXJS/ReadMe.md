# First RXJS

Welcome to the 3rd step, we'll quickly get a couple of _RXJS_ actions happening.  Assuming your picking this up from the last step you should have a running angular app.  Possibly, an actually running app if you haven't done a `^c` to shut down the `ng serve` command.  Don't do it now, we'll just add stuff on the fly.

## Creating an Observable

What's an _observable_?  Good question, I said I going to avoid endless upfront theory, but I am going to just define enough to be able to use the proper words for things.   So here goes:

An **Observable** is an object that can be observed, yeah that's kind of lame, let's use a code example.

Building from the last place we left off our code, add to the `repeater.component.ts` a new `import`:

```ts
import { Observable, of } from 'rxjs';
```

and modify the variable declaration as follows:

```ts
  number$: Observable<number[]> = of([1, 2, 3, 4, 5]);
```

The trailing `$` is a generally used practice used to denote a variable is an observable.

The `of(...)` method creates an observable out of an object.

Within the `html` piece we need to add the `async`:

```html
<h6>Repeater Component</h6>
<ul>
    <li *ngFor="let n of number$ | async">
        {{n}}
    </li>
</ul>
```

## Summary

