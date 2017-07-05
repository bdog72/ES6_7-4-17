import React, { Component } from 'react'

export default class App extends Component {
  render () {
    return <div>
      <h1 className='header'>WES BOS</h1>
      <h1 className='es6'>ES6</h1>
      <p className='header'>Check the console!</p>
    </div>
  }
}

const race = '100m Dash'
const winners = ['Brian', 'Molly', 'Crystal']

const win = winners.map((winner, i) => ({
  name: winner,
  race: race,
  place: i + 1
}))
console.table(win)

const ages = [ 23, 62, 45, 234, 2, 62 ]

const old = ages.filter(age => age >= 60)
console.log(old)
const names = ['Wes', 'Bdog', 'Brian', 'Molly']

const fullNames = names.map(function (name) {
  return `${name} bos`
})
console.log(fullNames)

const fullnames1 = names.map((name) => {
  return `${name} bos`
})
console.log(fullnames1)

const fullnames2 = names.map(name => {
  return `${name} bos`
})
console.log(fullnames2)

const fullnames3 = names.map(name => `${name} bozo`)
console.log(fullnames3)

const sayMyName = (name) => {
  alert(`Hello ${name}!`)
}
sayMyName('Bdog')
var pizza = 'Deep Dish 🍕'
console.log(pizza)

var name1 = 'Bdog'
console.log(name1)

for (let i = 0; i < 10; i++) {
  console.log(i)
  setTimeout(function () {
    console.log('The number is ' + i)
  }, 500)
}

const key = 'abc123'
let points = 50
let winner = false
console.log(winner)

console.log(key)

if (points > 40) {
  console.log('It ran')
  let winner = true
  console.log(winner)
}

const person = {
  name: 'bdog',
  age: 44
}
console.log(person)

var width = 100
let height = 200
const key1 = 'abcde'

console.log(width)
console.log(height)
console.log(key1)

var age = 100
if (age > 12) {
  var dogYears = age * 7
  console.log(`You are ${dogYears} dog years old!`)
}
