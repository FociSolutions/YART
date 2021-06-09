# YART

**Y**et **A**nother **R**XJS **T**utorial

There are many tutorials in RXJS on the web, this one's mine.

I'm not going to start off with boring theory, yes I'll get into the boring stuff later.

## How the Tutorial is Organized

Folders.  

Start in the [first folder](/001_Getting_Started), read the `ReadMe` in the folder, I promise it will be brief explain what the code base is doing.  
The folders are sequentially but not consecutively numbered, I've left room for additions and some times amalgamated steps.  
Skip forward at your own risk, I'm not backwards explaining anything and I'm not adding reviews.

Also, the folders are meant to be done in sequence, from on to the next.  
If there are alternate paths, they will be pulled out as subpaths.

## Prerequistes

- Some experience with _Typescript_ or _Javascript_ is handy.
- The examples were all written in VSCode on a docker dev container, so maximum mileage can be obtained with that configuration.
  - The `.devcontainer` is included as a submodule, to use the `.devcontainer`, from within the repository execute:
```sh
git submodule init
git submodule update
``` 
- The OS platform is Ubuntu 20.x
- Everything else is installed as we go along, wait no it isn't, you need current or better version of:
  - git `git --version` >= 2.20.1
  - node `node --version` >= 16.3.0
  - npm `npm --version` >= 7.15.1

## Others

- [Tutorials Point - RXJS](https://www.tutorialspoint.com/rxjs/index.htm)
- [RXJS Beginners Guide](https://www.geeksforgeeks.org/rxjs-beginners-guide/)
- [RXJS Essentials](https://yakovfain.com/2017/08/28/rxjs-essentials-part-1/)
- [RXJS Pipes](https://johnlindquist.com/rxjs-pipes/)
