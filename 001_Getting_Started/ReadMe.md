# Getting Started

Let's be honest, we're here because we're doing an _Angular_ project and we need to wire up some services.  

## Setting Up Angular

Start by setting up the basic _Angular_ tooling and ading a new angualr project called `my-rxjs`.

```sh
npm install --global @angular/cli
ng new my-rxjs --routing=false --style=css --skipGit=true
```

We are removing the _angular router_ and defaulting to _CSS_ as the style sheet.  While these are important consideration in a **real** application, this is a tutorial on **RXJS**, let's stay focused.

> I'm a great advocate of spelling things out in full on the command line, two reasons:
>
> 1. I can usually remember the action because it's fully spelled out, and
> 1. my keyboarding is clumsy at times and it's easier to miss-spell `npm i -g @angular/cli`

## Running the App

```sh
cd my-rxjs
ng serve 
```

Then navigate to your [localhost](http:\\localhost:4200) and this should be the default angular web site.  An observant student at this point would not the tha final command cou;ld also be wexecuted as:

```sh
npm start
```

which is a npm command which executes `ng serve`.

## Housekeeping

We don't need all the starter handy things that the `ng new` command has added, so let's de-crapify the landing page.  Open the `my-rxjs/src/app/app.component.html` file and replace the entire contents with:

```hrml
<h5>RXJS Tutorial</h5>
```

Beautiful ain't it!.  If you still have the command `ng serve` running the web page should update automatically.

## Conclusion

Hey wait, this was an _Angular_ tutorial!  Yeah, well I had to get us to a common starting point.  Since this was reasonably easy we can jump forward to the [repeater](/004_First_RXJS/ReadMe.md).

## Files Edited

Other then the generated files, all we did here was remove the cruft from the one _html_ file.  In future lessons, I'll list the files edited here so if you get stuck you can compare your files to mine.  I guess it would make sense that I only forward edit files, meaning, I won't change the content of files to an intermediate step in on lesson.