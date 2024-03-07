export const CONFIG = {
  tries: 7, // This changes how many tries you get to finish the wheredle
  language: 'WHEREDLE', // This changes the display name for your language
  wordLength: 10, // This sets how long each word is based on how many characters (as defined in orthography.ts) are in each word
  author: 'Jim Hays', // Put your name here so people know who made this Wheredle!
  authorWebsite: 'https://calvinballing.github.io/', // Put a link to your website or social media here
  //
  // THESE NEXT SETTINGS ARE FOR ADVANCED USERS
  //
  googleAnalytics: 'UA-97418582-1', // You can use this if you use Google Analytics
  shuffle: false, // whether to shuffle the words in the wordlist each time you load the app (note: you will lose the 'word of the day' functionality if this is true)
  normalization: 'NFC', // whether to apply Unicode normalization to words and orthography - options: 'NFC', 'NFD', 'NKFC', 'NKFD', false
}
