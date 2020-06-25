'use strict';

function displayHandler() {
  debugger;
  console.log('-- action: display theNumber --');
  console.log('theNumber:', typeof theNumber, '\n', theNumber);

  // alert the userString
  alert(`${typeof theNumber}: ${theNumber}`);
}
