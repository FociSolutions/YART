# Repeater

Welcome to the 2nd step, we're going to get a little more scafolding in place so we can build on something.

## Add a Simple Repeater Component

```sh
ng generate component repeater
```

Add the new component to the `app.component.html` page under the `<h1>` tag:

```html
<h5>RXJS Tutorial</h5>
<app-repeater></app-repeater>
```

## Add Static Data

Add an array of number to the newly minted `repeater.component.ts` under the `export class ...` line:

```ts
export class RepeaterComponent implements OnInit {

  numbers: number[] = [1, 2, 3, 4, 5,];

  ...
```

Change the markup to display the array inside the component, `repeater.component.html` should look like this:

```html
<h6>Repeater Component</h6>
<ul>
    <li *ngFor="let n of numbers">
        {{n}}
    </li>
</ul>
```

## Summary

This isn't a tutorial on UI, I get it, it's ugly.  Further more, there's still no _RXJS_ to be seen.

I promise, next lesson [**RXJS**](/008_First_RXJS/ReadMe.md)!
