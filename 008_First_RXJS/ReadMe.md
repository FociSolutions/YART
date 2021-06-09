# First RXJS

Welcome to the 3rd step, we'll quickly get a couple of _RXJS_ actions happening.  Assuming your picking this up from the last step you should have a running angular app.  Possibly, an actually running app if you haven't done a `^c` to shut down the `ng serve` command.  Don't do it now, we'll just add stuff on the fly.

## Using RXJS

_RXJS_ follows the [_observer_](https://en.wikipedia.org/wiki/Observer_pattern) pattern.  I suggest a quick review of that pattern before proceeding because the parts and the names of parts will be taken from that.  The pattern has two main moving parts, the _subject_ and the _observer_.  _RXJS_ also implements much of the [_iterator_]() pattern, in so far as it has the ability to effectively publish multiple states chages.  The sending of state changes is asynchrous.

The _subject_ is a flow of data and the _observer_ is the receiver of the data.  In the pattern the _subject_ is aware of the _observer_ and dispatches changes in state to them.  These two parts are held together by a _subscription_ and which is managed by the _observable_.  Blah, blah, blah.  Enough talk show me some code.

### First Step - Create an Observable

For the time being remove the code the `html` component, we're going to watch what happens in the _console_ window.  So in the running browser opent he developer console and set the tab to the _console_.

Your `repeater.component.html` should be blank.  Add the following to the to the top `repeater.component.ts`:

```ts
import { Observable } from 'rxjs';
```
    
This is a standard _import_ statement, note however that to use _RXJS_ there is no additional _NPM_ package to install. It is so ingrained into the _Angular_ framweeork it is added as part of the initial `ng new ...` that was executed.  Checking the `package.json` will show that `"rxjs": "~6.6.0"` is in the dependences section. 

Modify the _Repeater_ class as follows:

```ts
export class RepeaterComponent implements OnInit {

  number$ = new Observable(s => {
    s.next(0);
    s.next(1);
    s.next(1);
    s.next(2);
    s.next(3);
    s.next(5);
    s.next(8);
    s.next(13);
    s.complete();
});

  constructor() {
    this.number$.subscribe({
      next(x) { console.log(x) }
    });
  }
  
  ... 
```

### What am I Seeing?

In the console of the browser you should be seeing the first eight fibrinacii numbers.

In the code, there are two things:

1. creating an `Observable`
   - this the line that starts `number$ = new Observable( ...`
   - `number$` is the `Observable` function
   - the variable name `number$` is an `Observable`, it is a standard practice to append `$` to observable variable.  It has no actual syntactic signifigance.
   - the `Observable` constructor takes a function as an arguement
1. creating a subscription 
   - the _observable_ is nothing untill it has a subscriber, remember that is the _observer_ pattern and that in this pattern the subject is aware of the observers.

## Other Ways

There are other ways to create observables, try replace the creation of the observable with one of these:

```ts
  // generates a range of values bounded by the arguments
   number$ = range(1, 10);
   
   // returns each of the arguments as a iterator
   number$ = of(0, 1, 1, 2, 3, 5, 8, 13);
   
   // converts the array (or any object) in to an observable
   number$ = from([0, 1, 1, 2, 3, 5, 8, 13]);
```

## Summary

That's a simple example, normally the observer is external to the component and the result is displayed in the UI and not the console.  Let's do that a next lesson, [Services and UI](/010_Services_and_UI/ReadMe.md).

## References

- ["Offical" RXJS Observable Definition](https://rxjs.dev/guide/observable)
- [Angular Async Pipe](https://angular.io/api/common/AsyncPipe)