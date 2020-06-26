'use strict';

console.log('--- loading: reset lastResult');

function resetLastResultHandler() {
  debugger;
  console.log('\n--- action: reset lastResult ---');
  console.log('lastResult (before):', typeof lastResult, '\n', lastResult);
  
  let newNumber = NaN;
  while (Number.isNaN(newNumber)) {
    const userInput = prompt('please enter last result');
    console.log('userInput:', typeof userInput, '\n', userInput);
    if (userInput === null) {
      alert('ok, bye.');
      return;
    }

    newNumber = Number(userInput);
    console.log('newNumber:', typeof newNumber, '\n', newNumber);
  }

  alert('thank you');

  lastResult = newNumber;
  
  

  console.log('lastResult (after):', typeof lastResult, '\n', lastResult);

  displayLastResultHandler();
}
