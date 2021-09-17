function getRandom() {
    let random = Math.random(0,1) * 2
    let rounded = Math.floor(random)
    if (rounded === 0) {
      return 'Fej!'
    } else {
      return 'Írás!'
    }
  }
  let coin = getRandom()
  let machineGuess = getRandom()
  console.log('Pénzérme:', coin)
  console.log('Számítógép tippje:', machineGuess)
  let humanGuess = prompt('Adj meg 0-t vagy 1-et!')
  console.log('Ember tippje:', humanGuess) 