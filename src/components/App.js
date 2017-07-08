import React, { Component } from 'react'
import App1 from './App1.js'
export default class App extends Component {
  render () {
    return (
      <div>
        <div>
          <h1 className='header'>WES BOS</h1>
          <h1 className='es6'>ES6</h1>
        </div>
        <div>
          <App1 />
        </div>
      </div>
    )
  }
}
//
// function highlight (strings, ...values) {
//   let str = ''
//   strings.forEach((string, i) => {
//     str += string + values[i]
//   })
//   return str
// }
//
// const name3 = 'Molly'
// const age3 = 4
// const sentence3 = highlight`my dogs name is ${name3} and she is ${age3} years old`
//
// console.log(sentence3)
//
// const dogs1 = [
//   { name: 'Molly', age: 4 },
//   { name: 'Crsytal', age: 15 },
//   { name: 'Trixie', age: 3 }
// ]
//
// const markup = `
//   <ul>
//     ${dogs1.map(dog => `<li>${dog.name} is ${dog.age * 7}</li>`).join('')}
//   </ul>
// `
// console.log(markup)
//
// const person2 = {
//   name: 'Bdog',
//   job: 'Front end developer',
//   city: 'Saint Petersburg',
//   bio: 'Good guy'
// }
//
// const Markup = `
// <div className='person'>
//   <h2>
//     ${person2.name}
//     <span className='job'>${person2.job}</span>
//   </h2>
//   <p className='location'>${person2.city}</p>
//   <p className='bio'>${person2.bio}</p>
// </div>
// `
// console.log(Markup)
//
// const name2 = 'Molly'
// const age2 = 4
//
// const sentence = `My dog ${name2} is ${age2 * 7} years old`
//
// console.log(sentence)
//
// const number = [ 5, 10, 15, 20 ]
//
// const large = number.filter(nums => nums >= 10)
// console.log(large)
//
// const numbers = [3, 62, 234, 7, 23, 74, 23, 76, 92]
//
// const largest = numbers.filter(num => num > 70)
// console.log(largest)
//
// const items = Array.from(document.querySelectorAll('[data-time]'))
//
// const filtered = items.filter(item => item.textContent.includes('Flexbox'))
//
//   .map(item => item.dataset.time)
//   .map(timeCode => {
//     const parts = timeCode.split(':').map(part => parseFloat(part))
//     return (parts[0] * 60) + parts[1]
//   })
//   .reduce((runningTotal, seconds) => runningTotal + seconds, 0)
// console.log(filtered)
// function calculateBill (total, tax = 0.13, tip = 0.15) {
//   return total + (total * tax) + (total * tip)
// }
//
// const totalBill = calculateBill(100)
// console.log(totalBill)
// const race = '100m Dash'
// const winners = ['Brian', 'Molly', 'Crystal']
//
// const win = winners.map((winner, i) => ({
//   name: winner,
//   race: race,
//   place: i + 1
// }))
// console.table(win)
//
// const ages = [ 23, 62, 45, 234, 2, 62 ]
//
// const old = ages.filter(age => age >= 60)
// console.log(old)
// const names = ['Wes', 'Bdog', 'Brian', 'Molly']
//
// const fullNames = names.map(function (name) {
//   return `${name} bos`
// })
// console.log(fullNames)
//
// const fullnames1 = names.map((name) => {
//   return `${name} bos`
// })
// console.log(fullnames1)
//
// const fullnames2 = names.map(name => {
//   return `${name} bos`
// })
// console.log(fullnames2)
//
// const fullnames3 = names.map(name => `${name} bozo`)
// console.log(fullnames3)
//
// const sayMyName = (name) => {
//   alert(`Hello ${name}!`)
// }
// sayMyName('Bdog')
// var pizza = 'Deep Dish 🍕'
// console.log(pizza)
//
// var name1 = 'Bdog'
// console.log(name1)
//
// for (let i = 0; i < 10; i++) {
//   console.log(i)
//   setTimeout(function () {
//     console.log('The number is ' + i)
//   }, 500)
// }
//
// const key = 'abc123'
// let points = 50
// let winner = false
// console.log(winner)
//
// console.log(key)
//
// if (points > 40) {
//   console.log('It ran')
//   let winner = true
//   console.log(winner)
// }
//
// const person = {
//   name: 'bdog',
//   age: 44
// }
// console.log(person)
//
// var width = 100
// let height = 200
// const key1 = 'abcde'
//
// console.log(width)
// console.log(height)
// console.log(key1)
//
// var age = 100
// if (age > 12) {
//   var dogYears = age * 7
//   console.log(`You are ${dogYears} dog years old!`)
// }
