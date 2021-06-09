# First RXJS

Welcome to the 3rd step, we'll quickly get a couple of _RXJS_ actions happening.  
Assuming your picking this up from the last step you should have a running angular app.  
Possibly, an actually running app if you haven't done a `^c` to shut down the `ng serve` command.  
Don't do it now, we'll just add stuff on the fly.

## Creating an Observable

What's an _observable_?  
Good question, I said I going to avoid endless upfront theory, but I am going to just define enough to be able to use the proper words for things.   
So here goes:

An **Observable** is a stream of objects that can be observed one at a time.  
Observable streams are potentially infinite, they can be _observed_ for any length of time.  
It should come as no surprise that it is the role of the **Observer** to, well, _observe_ the _observable_.  

To connect these two parts together we have a **Subscription**.  This is a 


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

Okay, this was a cheap shot at putting an _Observable_ into play.  The _async_ pipe is the _Angular_ way of easily using _Observables_.  It abstracts away much of the complexity of dealing with _Observables_, 

## References

- ["Offical" RXJS Observable Definition](https://rxjs.dev/guide/observable)
- [Angular Async Pipe](https://angular.io/api/common/AsyncPipe)