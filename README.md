# Wheredle

## Changes in this fork (pre Wheredle)

I've adapted this code to allow for simply adapting it to another language. The wordlist and orthography (writing system) here are for the Gitksan language, but this repository is meant to be adapted to other languages. I've also added a script for publishing on GitHub Pages.

_To adapt for your language:_

1. Change the file in `src/constants/orthography.ts` to use your language's writing system.
2. Change the file in `src/constants/wordlist.ts` to use your language's words.
3. Change the file in `src/constants/validGuesses.ts` to include all valid guesses for your language.
4. Change the file in `src/constants/config.ts` to include meta data about your language. If your language needs words longer or shorter than 5, you can set that in this file and also set the number of tries.
5. Publish on GitHub Pages by changing the `homepage` key in `package.json` and running `npm run deploy`.

They also wrote a blog post that walks through this information in a bit more detail on this blog: https://blog.mothertongues.org/

## On to the original stuff from @hannahcode...


_Design Decisions:_
I used a combination of React, Typescript, and Tailwind to build this [game]. [...] The word match functionality is simple: the word array index increments each day from a fixed game epoch timestamp (only one puzzle per day!) roughly like so:

```
WORDS[Math.floor((NOW_IN_MS - GAME_EPOCH_IN_MS) / ONE_DAY_IN_MS)]
```

React enabled me to componentize the littlest parts of the game - keys and letter cells - and use them as the building blocks for the keyboard, word grid, and winning solution graphic. As for handling state, I used the built in useState and useEffect hooks to track guesses, whether the game is won, and to conditionally render popups.

In addition to other things, Typescript helped ensure type safety for the statuses of each guessed letter, which were used in many areas of the app and needed to be accurate for the game to work correctly.

I implemented Tailwind mostly because I wanted to learn how to use Tailwind CSS, but I also took advantage of [Tailwind UI](https://tailwindui.com/) with their [headless package](https://headlessui.dev/) to build the modals and notifications. This was such an easy way to build simple popups for how to play, winning the game, and invalid words.

_To Run Locally:_
Clone the repository and perform the following command line actions:
```bash
$ cd [projectName]
$ npm install
$ npm run start
```

_To build/run docker container:_
```bash
$ docker build -t [projectName] .
$ docker run -d -p 3000:3000 [projectName]
```
open http://localhost:3000 in browser.

