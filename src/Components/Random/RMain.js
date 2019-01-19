import React, { Component } from 'react';

export default class RMain extends Component {
  render() {
    var NumberOfWords = 28;

    var words = new BuildArray(NumberOfWords);

    var rwords = [
      { words: 'escapology' },
      { words: 'brightwork' },
      { words: 'verkrampte' },
      { words: 'protectrix' },
      { words: 'nudibranch' },
      { words: 'grandchild' },
      { words: 'newfangled' },
      { words: 'flugelhorn' },
      { words: 'mythologer' },
      { words: 'pluperfect' },
      { words: 'jellygraph' },
      { words: 'quickthorn' },
      { words: 'rottweiler' },
      { words: 'technician' },
      { words: 'cowpuncher' },
      { words: 'middlebrow' },
      { words: 'jackhammer' },
      { words: 'triphthong' },
      { words: 'wunderkind' },
      { words: 'dazzlement' },
      { words: 'jabberwock' },
      { words: 'witchcraft' },
      { words: 'pawnbroker' },
      { words: 'thumbprint' },
      { words: 'motorcycle' },
      { words: 'cryptogram' },
      { words: 'torchlight' },
      { words: 'bankruptcy' }
    ];

    function BuildArray(size) {
      this.length = size;
      for (var i = 1; i <= size; i++) {
        this[i] = null;
      }
      return this;
    }

    function PickRandomWord(frm) {
      // Generate a random number between 1 and NumberOfWords
      var rnd = Math.ceil(Math.random() * NumberOfWords);

      // Display the word inside the text box
      frm.WordBox.value = words[rnd];
    }

    return (
      <div>
        <h1>Random Word Generator</h1>

        <form NAME='WordForm'>
          <input TYPE='text' NAME='WordBox' id='wordbox' />
          <input
            TYPE='button'
            VALUE='Generate'
            onClick='PickRandomWord(document.WordForm);'
            id='button'
          />
        </form>
      </div>
    );
  }
}

// let random = [
//   'happy',
//   'cat',
//   'dog',
//   'summer',
//   'winter',
//   'hungry',
//   'laughing',
//   'monday',
//   'coffee',
//   'puppy'
// ];
