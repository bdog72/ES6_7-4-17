import React, { Component } from 'react'

export default class App1 extends Component {
  render () {
    return <div>
      {/* {sentence}
      {html} */}
      <h3>What up dog</h3>
    </div>
  }
}

const course = 'RFB2'
console.log(course.startsWith('RFB'))

const flightNumber = '20-AC2018-jz'
console.log(flightNumber.endsWith('jZ'))

const accountNumber = '825RT'
console.log(accountNumber.endsWith('RT', 5))

const make = 'BMW'
console.log(make.includes('M'))

const model = '🚗'
console.log(model.repeat(50))

const color = 'Royal Blue'
console.log(color)

function leftPad (str, length = 20) {
  return `-> ${' '.repeat(length - str.length)}${str}`
}

console.log(leftPad(make))
console.log(leftPad(model))
console.log(leftPad(color))

// const first1 = 'bdog'
// const aboutme1 = `I love to do evil
// <img src="http://unsplash.it/100/100?random"
// onload="alert('you got hacked')" />`
//
// const html =
// `${first1}
// ${aboutme1}`
// const dict = {
//   HTML: 'Hyper Text Markup Language',
//   CSS: 'Cascading Style Sheet',
//   JS: 'Javascript'
// }
//
// function addAbbreviations (strings, ...values) {
//   const abbreviated = values.map(value => {
//     if (dict[value]) {
//       return `<abbr title='${dict[value]}'>${value}</abbr>`
//     }
//     return value
//   })
//   return strings.reduce((sentence, string, i) => {
//     return `${sentence}${string}${abbreviated[i] || ''}`
//   }, '')
// }
//
// const first = 'Brian'
// const last = 'Bycynski'
// const sentence = addAbbreviations`Hello my name is
// ${first} ${last} and i love to code
// ${'HTML'}, ${'CSS'}, and ${'JS'}`
