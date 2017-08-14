// EXERCISE 1

function testNum(num) {
  new Promise((resolve, reject) => {
    if(num > 10) {
      resolve(`success`)
    }
    else {
      reject('failure')
    }

  }).then(result => {
    console.log(result)
  }).catch(err => {
    console.log(err)
  })
}


// EXERCISE 2a
function checkIfString(array) {
  return array.find(element => {
    return typeof element !== 'string'
  })
}


function makeAllCaps(array) {
  new Promise((resolve, reject) => {
    if(!checkIfString(array)) {
      resolve(array.map(element => {
        return element.toUpperCase()
      }))
    } else {
      reject('Array contains a non string!')
    }
  }).then(capsArray => {
    console.log(capsArray)
  })
  .catch(err => {
    console.log(err)
  })
}

// EXERCISE 2b

function sortWords(array) {
  new Promise((resolve, reject) => {
    if(!checkIfString(array)) {
      resolve(array.map(element => {
        return element.sort(a, b => {
          return b > a
        })
      }))
    } else {
      reject('Array contains a non string!')
    }).then(sortedArray => {
      console.log(sortedArray)
    })
    .catch(err => {
      console.log(err)
    })
}
