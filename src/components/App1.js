import React, { Component } from 'react'

export default class App1 extends Component {
  render () {
    return (
      <div />
    )
  }
}

// const ages = [32, 15, 19, 32]
//
// const adultPresent = ages.some(age => age >= 18)
// console.log(adultPresent)

// function sumAll () {
//   const nums = Array.from(arguments)
//   return nums.reduce((prev, next) => prev + next, 0)
// }
// sumAll(2, 34, 44, 555, 567)

// const apple = {
//   color: 'red',
//   size: 'Medium',
//   weight: 50,
//   sugar: 10
// }
// console.log(apple.size)
// const ps = document.querySelectorAll('p')
// for (const paragraph of ps) {
//   paragraph.addEventListener('click', function () {
//     console.log(this.textContent)
//   })
// }
// const name = 'Bozo'
// for (const char of name) {
//   console.log(char)
// }

// const cuts = ['Chuck', 'Brisket', 'Ribs', 'Steak']
// for (const [i, cut] of cuts.entries()) {
//   // console.log(cuts.entries())
//   console.log(`${cut} is the ${i + 1} item`)
// }

//
// for (const index in cuts) {
//   console.log(cuts[index])
// }

// cuts.forEach((cut) => {
//   console.log(cut)
// })

// for (let i = 0; i < cuts.length; i++) {
//   console.log(cuts[i])
// }

// let inRing = 'Hulk Hogan'
// let onSide = 'The Rock'
// console.log(inRing, onSide);
// [inRing, onSide] = [onSide, inRing]
// console.log(inRing, onSide)

// const details3 = ['Bdog B', 123, 'brian.com']
// const [name3, id3, website3] = details3
// console.log(name3, id3, website3)
//
// const data3 = 'Basketball, Sports, 90210'
// console.log(data3.split(','))

// const person2 = {
//   first2: 'Brian',
//   last2: 'Bdog',
//   country: 'USA',
//   city: 'Florida',
//   twitter: '@bozo'
// }
//
// const { first2, last2 } = person2
// console.log(first2)
// console.log(last2)
//
// const bdog2 = {
//   first3: 'Brian',
//   last3: 'Bycynski',
//   links: {
//     social: {
//       twitter: 'https://twitter.com/wesbos',
//       facebook: 'https://facebook.com/wesbos.developer'
//     },
//     web: {
//       blog: 'https://wesbos.com'
//     }
//   }
// }
//
// const { twitter: tweet2, facebook: fb2 } = bdog2.links.social
// console.log(tweet2)
// console.log(fb2)
// console.log(bdog2)
//
// const settings2 = { width2: 300, color2: 'blue' }
// const { width2 = 100, height2 = 100, color2 = 'orange', fontSize2 = 25 } = settings2
// console.log(width2)
// console.log(height2)
// console.log(color2)
// console.log(fontSize2)

//
// function convertCurrency (amount) {
//   const converted = {
//     USD: amount * 0.76,
//     GPB: amount * 0.53,
//     AUD: amount * 1.01,
//     MEX: amount * 13.30
//   }
//   return converted
// }
//
// const hundo = convertCurrency(100)
// console.log(hundo)
//
// const course = 'RFB2'
// console.log(course.startsWith('RFB'))
//
// const flightNumber = '20-AC2018-jz'
// console.log(flightNumber.endsWith('jZ'))
//
// const accountNumber = '825RT'
// console.log(accountNumber.endsWith('RT', 5))
//
// const make = 'BMW'
// console.log(make.includes('M'))
//
// const model = '🚗'
// console.log(model.repeat(50))
//
// const color = 'Royal Blue'
// console.log(color)
//
// function leftPad (str, length = 20) {
//   return `-> ${' '.repeat(length - str.length)}${str}`
// }
//
// console.log(leftPad(make))
// console.log(leftPad(model))
// console.log(leftPad(color))
//
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
