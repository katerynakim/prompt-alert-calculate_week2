'use strict';

console.log('--- loading: reset lastResult');

function resetLastResultHandler() {
  debugger;
  console.log('\n--- action: reset lastResult ---');
  console.log('lastResult (before):', typeof lastResult, '\n', lastResult);

  lastResult = 0;

  console.log('lastResult (after):', typeof lastResult, '\n', lastResult);

  displayLastResultHandler();

}
