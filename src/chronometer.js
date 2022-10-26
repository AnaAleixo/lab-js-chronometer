class Chronometer {
  constructor() {
      this.currentTime = 0;
      this.intervalId = null;
    }
    // ... your code goes here
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() =>{
      this.currenTime++;
      if(printTimeCallback){
        printTimeCallback();

      }
    },100)
    // ... your code goes here
  }

  getMinutes() {
    return Math.floor(this.currentTime)
    // ... your code goes here
  }

  getSeconds() {
    return this.currentTime%60
    // ... your code goes here
  }

  computeTwoDigitNumber(value) {
    return(`0` + value).slice(-2,);
    // ... your code goes here
  }

  stop() {
    return clearInterval(this.intervalId)
    // ... your code goes here
  }

  reset() {
   return this.currentTime =0;
    // ... your code goes here
  }

  split() {
  return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}`
  
    // ... your code goes here
  }
}
