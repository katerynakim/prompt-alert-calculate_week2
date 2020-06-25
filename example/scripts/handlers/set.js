'use strict';

function setHandler() {
  debugger;
  console.log('-- action: set theNumber --');
  console.log('theNumber (before):', typeof theNumber, '\n', theNumber);

  let newNumber = NaN;
  while (Number.isNaN(newNumber)) {
    const userInput = prompt('please enter a valid number');
    console.log('userInput:', typeof userInput, '\n', userInput);
    if (userInput === null) {
      alert('ok, bye.');
      return;
    }

    newNumber = Number(userInput);
    console.log('newNumber:', typeof newNumber, '\n', newNumber);
  }

  alert('thank you');

  theNumber = newNumber;
  console.log('theNumber (after):', typeof theNumber, '\n', theNumber);

  displayHandler();
}
