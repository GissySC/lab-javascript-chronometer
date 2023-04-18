const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  printMinutes();
  printSeconds();
  printMilliSeconds();
}

function printMinutes() {
  const minutes = chronometer.getMinutes();
  minDecElement.innerHTML = chronometer.computeTwoDigitsNumber(minutes)[0];
  minUniElement.innerHTML = chronometer.computeTwoDigitsNumber(minutes)[1];
}

function printSeconds() {
  const seconds = chronometer.getSeconds();
  secDecElement.innerHTML = chronometer.computeTwoDigitsNumber(seconds)[0];
  secUniElement.innerHTML = chronometer.computeTwoDigitsNumber(seconds)[1];
}

// ==> BONUS
  function printMilliSeconds() {
  const milliSeconds = chronometer.getMilliSeconds();
  milDecElement.innerHTML = chronometer.computeTwoDigitsNumber(milliSeconds)[0];
  milUniElement.innerHTML = chronometer.computeTwoDigitsNumber(milliSeconds)[1];
}

function printSplit() {
  const newSplit = document.createElement('li');
  newSplit.classList.add('list-item');
  newSplit.innerHTML = chronometer.split();
  splitsElement.appendChild(newSplit);
}

function clearSplits() {
  splitsElement.innerHTML = '';
}

function setStopBtn() {
  btnLeftElement.textContent = 'STOP';
  btnLeftElement.classList.toggle('stop');
  btnLeftElement.classList.toggle('start');
}

function setSplitBtn() {
  btnRightElement.textContent = 'SPLIT';
  btnRightElement.classList.toggle('split');
  btnRightElement.classList.toggle('reset');
}

function setStartBtn() {
  btnLeftElement.textContent = 'START';
  btnLeftElement.classList.toggle('start');
  btnLeftElement.classList.toggle('stop');
}

function setResetBtn() {
  btnRightElement.textContent = 'RESET';
  btnRightElement.classList.toggle('reset');
  btnRightElement.classList.toggle('split');
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.classList.contains('start')) {
    chronometer.start(printTime);
    setStopBtn();
    setSplitBtn();
  } else {
    chronometer.stop();
    setStartBtn();
    setResetBtn();
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.classList.contains('reset')) {
    chronometer.reset();
    clearSplits();
    printTime();
    } else {
    printSplit();
  }
});
