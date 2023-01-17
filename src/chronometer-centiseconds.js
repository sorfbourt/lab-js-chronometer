class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    // ... your code goes here
    this.intervalId = setInterval(() => {
      this.currentTime++

      if(printTimeCallback){
        printTimeCallback()
      }

    }, 10)
  }
 
  getMinutes() {
    let minutes = this.currentTime / 6000
    return Math.floor(minutes)
  }

  getSeconds() {
    let seconds = ((this.currentTime % 6000) / 100)
    return Math.floor(seconds)
  }

  getCentiseconds() {
    let centiseconds = ((this.currentTime % 6000) % 100)
    return Math.floor(centiseconds)
  }

  computeTwoDigitNumber(value) {
    if(value.toString().length === 1){
      return `0${value}`
    }
    return value.toString()
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0
  }

  split() {
    let minutes = this.computeTwoDigitNumber(this.getMinutes())
    let seconds = this.computeTwoDigitNumber(this.getSeconds())
    let centiseconds = this.computeTwoDigitNumber(this.getCentiseconds())

    return `${minutes}:${seconds}.${centiseconds}`
  }
}

